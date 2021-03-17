import  React, {Component} from "react";
import Nav from "../../Nav";
import Newsletter from "../../Newsletter";
import Footer from "../../Footer";
import Header from "../../Header";
import {Link} from 'react-router-dom';
import  "../../css/home.css";
const new_collections_api = "https://apibootwale.herokuapp.com/Products";

class NewCollections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewCollections:''
        }
    }

Print_New_Collections=(data)=>{ 
    if(data){
        let counter = 0;
   return data.map((item)=>{

    if(counter<20){
        return(
            <Link to={`product_details/${item._id}`}>
            <div class="col-sm-12 col-md-6 col-lg-4 product_box">
            <div class="panel panel-default">                    
                <div>
                    <img class="img" src={item.product_image}  alt="Product Image" height="300px" width="100%"/>
                    <div class="my_panel">
                        {item.product_name}<i class="glyphicon glyphicon-star">{item.product_rating}</i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>
                    
                    </div>

                </div>
            </div>
            <div className="counter">
            {counter++}
            </div>
        </div>
        </Link>
          )
    }
})

    }else{
        return(
                            <div className="page_loader">
                            <h3>Loading...</h3>
                            <img src="images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
                            </div>
        )
    }
}

render() {
    return (
       <>
       <Nav/>
       <Header/>
<div className="container">
<div class="row">
            <h3 className="product_category">20 New Collections</h3>

            {this.Print_New_Collections(this.state.NewCollections)}


            <div class="col-sm-12 col-md-6 col-lg-4 product_box">
           <Link to="/all_collection"><button className="btn btn-primary btn-see-all">See All Collections</button></Link> 
            </div>
            

</div>

</div>


       <Newsletter/>
       <Footer/>
       </>
    )
}

componentDidMount(){
fetch(new_collections_api,{
    headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
    }
}) 
.then((response)=>{return response.json()})
.then((data)=>{
    this.setState({NewCollections:data});
})


}

}

export default NewCollections;
