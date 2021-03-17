import  React , {Component} from "react";
import Nav from "../../Nav";
import Newsletter from "../../Newsletter";
import Footer from "../../Footer";
import Header from "../../Header";
import {Link} from 'react-router-dom';
const search_by_category_api = "https://apibootwale.herokuapp.com/filter_products/for";

class SearchByCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            CategoryData:''
        }
    }

    Print_All_Category=(data)=>{ 
        if(data){
if(data.length==0){
    return(
        <h1>Not Available Right now</h1>
    )
}else{
    return data.map((item)=>{
    
        return(
            <Link to={`/product_details/${item._id}`}>
            <div class="col-sm-12 col-md-6 col-lg-4 product_box">
            <div class="panel panel-default">                    
                <div>
                    <img class="img" src={item.product_image}  alt="Product Image" height="300px" width="100%"/>
                    <div class="my_panel">
                        {item.product_name}<i class="glyphicon glyphicon-star">{item.product_rating}</i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>
                    
                    </div>

                </div>
            </div>
        </div>
        </Link>
        )

})
}


    
        }else{
            return(
                                <div className="page_loader">
                                <h3>Loading...</h3>
                                <img src="/images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
                                </div>
            )
        }
    }


    render(){
        return (
            <>
            <Nav/>
            <Header/>
     <div className="container">
     <div class="row">
                 <h3 className="product_category">{this.props.match.params.name}</h3>
     
                 {this.Print_All_Category(this.state.CategoryData)}
     
     </div>
     </div>
     
     
            <Newsletter/>
            <Footer/>
            </>
        )
    }

componentDidMount(){
    fetch(`${search_by_category_api}/${this.props.match.params.name}`,
    {
                    method:'GET',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }       

    })
    .then((response)=>{ return response.json() })
    .then((items)=>{
this.setState({CategoryData:items})
    })
}

}

export default SearchByCategory;