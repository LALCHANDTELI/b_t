import React,{Component} from "react";
import {Link} from 'react-router-dom';
const products_api_url = "https://apibootwale.herokuapp.com/Products";


class OutCollections extends Component {
    constructor(props){
        super(props);
        this.state = {
            allProducts:''
        }
    }




    print_all_products=()=>{
        let ap = this.state.allProducts
        if(ap){
            return ap.map((item) => {
                if(!item.product_available){
                    return(
                        <>
                        
<Link to={`details/${item._id}`}>
                        <div class="col-sm-12 col-md-6 admin_product col-lg-4 product_box">
                    <div class="panel panel-default">                    
                        <div>
                            <img class="img" src={item.product_image} height="300px" width="100%"/>
                            <div class="my_panel admin_my_panel">

                        <i class="admin_product_name">{item.product_name}</i>  <i class="glyphicon glyphicon-star">{item.product_rating}/5</i>
                            
                            <p>Company:<span>{item.product_company}</span></p>
                            <p>Size:<span>{item.product_size}</span></p>
                            <p>Color:<span>{item.product_color}</span></p>
                            <p>Price:<span>{item.product_price}</span></p>
                            <p>Category:<span>{item.product_for}</span></p>
                            <Link to={`/change_stocks/${item._id}`}> 
                            <input class="btn btn-success btn_available" value="In Stock" type="button"/> 
                            </Link>
                            <Link to={`/hard_delete/${item._id}`}> 
                            <input class="btn btn-success btn_edit" value="Hard Delete" type="button"/> 
                            </Link>
                                
                            </div>
    
                        </div>
                    </div>
                </div>
                
                        
                </Link>
                        </>
                    )
                }

            })
        }
    }





    render(){
        return (
            <>
       {this.print_all_products()}
          </>
        )
    }

componentDidMount(){
    
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
            this.setState({allProducts:data})
        })
}

}


export default OutCollections;