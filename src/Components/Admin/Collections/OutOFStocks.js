import  React , {Component} from "react";
import Footer from "../../../Footer"
import "../../../css/footer.css";
import Nav from "../Nav";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import OutCollections from './OutCollections';
import BrandsFilters from "../Filters/BrandsFilters";
import ForFilters from "../Filters/ForFilters";
import ColorFilters from "../Filters/ColorFilters";
import {Link} from 'react-router-dom';
const check_api_url = "https://apibootwale.herokuapp.com/check_admin";



class OutOFStocks extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
      console.log(this.props.match.params.id)
        return (
            <>
                <Nav/>
                <div className="container">
    <div className="tbl_all_collections">
            <h1>Out of Stocks</h1>
      <div className="row">
        <div className="col-md-8">
<div className="row">
<OutCollections/>
</div>
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

export default OutOFStocks;

