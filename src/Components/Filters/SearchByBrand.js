import  React , {Component} from "react";
import Nav from "../../Nav";
import Newsletter from "../../Newsletter";
import Footer from "../../Footer";
import Header from "../../Header";
import DisplayByBrand from "../Display/DisplayByBrand";
import SortingPrice from "../Filters/SortingPrice";
const search_by_brand_api = "https://apibootwale.herokuapp.com/filter_products/company";

class SearchByBrand extends Component{
    constructor(props){
        super(props);
        this.state = {
            BrandData:''
        }
    }

    setFilterData=(data)=>{
this.setState({BrandData:data})
    }



    render(){
        return (
            <>
            <Nav/>
            <Header/>
     <div className="container">
     <div class="row">
                <h3 className="product_category">{this.props.match.params.name}</h3>
                <div className="col-md-12">
                <SortingPrice Brand={this.props.match.params.name} SortingData={(data)=>{this.setFilterData(data)}} />
                </div>
                <DisplayByBrand  filterData={this.state.BrandData}/>
     
     </div>
     </div>
     
     
            <Newsletter/>
            <Footer/>
            </>
        )
    }

componentDidMount(){
    fetch(`${search_by_brand_api}/${this.props.match.params.name}`,
    {
                    method:'GET',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }       

    })
    .then((response)=>{ return response.json() })
    .then((items)=>{
this.setState({BrandData:items})
    })
}

}

export default SearchByBrand;