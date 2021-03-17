import  React ,{Component} from "react";
import Footer from "../../../Footer"
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
import "../../../css/footer.css";
import "../../../css/collections.css";
import Nav from "../Nav";
import BrandsFilters from "../Filters/BrandsFilters";
import ForFilters from "../Filters/ForFilters";
import ColorFilters from "../Filters/ColorFilters";
import PriceFilters from "../Filters/PriceFilters";
import DisplayCollections from "../Collections/DisplayCollections";
const check_api_url = "https://apibootwale.herokuapp.com/check_admin";
const products_api_url = "https://apibootwale.herokuapp.com/Products";



class AllCollections extends Component{
constructor(props) {
    super(props);
    this.state = {
      DisplayData:''
    }
}


setFilterData=(data)=>{
this.setState({DisplayData: data})
}

render(){
  
    return (
        <>
        <Nav/>
        <div className="container">
    <div className="tbl_all_collections">
      <h1>Available Collections</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
            <PriceFilters PriceFilter={(data)=>{this.setFilterData(data)}}/>
            </div>
           
            <DisplayCollections filterData={this.state.DisplayData} />
          </div>
        </div>
        <div className="col-md-4 admin_filters">
      
        <BrandsFilters BrandsFilter={(data)=>{this.setFilterData(data)}}/>
        <ForFilters ForFilter={(data)=>{this.setFilterData(data)}}/>
        <ColorFilters ColorFilter={(data)=>{this.setFilterData(data)}}/>

        </div>
      
      </div>
    </div>
        </div>
        <Footer/>
        </>
        )
}

componentDidMount(){
    const cookies = new Cookies();
    const jwToken = cookies.get("bootwalejwt")
    if(!jwToken==""){
      const admin_id= jwt.verify(jwToken,"mysitebootewalekatokenfromlalchandteli");
      fetch(check_api_url,
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:admin_id})
           
        })
        .then((response)=>{ return response.json() })
        .then((data)=>{
          data.map((dbData)=>{
            if(dbData._id===admin_id){


              fetch(products_api_url,
                {
                    method:'GET',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                })
                .then((response)=>{ return response.json() })
                .then((data)=>{
                    this.setState({DisplayData:data})
                })


             
            }else{
              this.props.history.push('/admin_login')
            }
          })
        })
  
    }else{
      this.props.history.push('/admin_login')
    }
  }





}

export default AllCollections;

