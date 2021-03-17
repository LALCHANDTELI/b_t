import  React, {Component} from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Nav from "../../Nav";
import {Link} from 'react-router-dom';
import Newsletter from "../../Newsletter";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const check_product_api = "https://apibootwale.herokuapp.com/check_product";
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";


class ProductDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
        Details:'',
        Quantity:1,
        Comment:'',
        Login:false,
        UserName:'',
        reviews:''
        }
    }



ChangeQuantity=(event) =>{
this.setState({[event.target.name]:event.target.value})
}



Comment=() =>{

  const cookies = new Cookies();
  let jwToken = cookies.get("bootwaleuser");
  const jwToken2 = cookies.get("bootwaleuser2");
  if(jwToken2){
      jwToken = jwToken2;
  }
  if(jwToken){
  const user_id= jwt.verify(jwToken,"mysitebootewalekatokenfromlalchandteli");
  fetch(check_user_api_by_id,
      {
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({id:user_id})

      })
      .then((response)=>{ return response.json() })
      .then((data)=>{
          data.map((dbData)=>{
              if(dbData._id==user_id){
                 
                 this.setState({UserName:dbData.name})
                  this.setState({Login:true})

              
                  if((this.state.Comment).length!=0 && this.state.Login==true){
                   

fetch(`https://apibootwale.herokuapp.com/insert_product_reviews`,
{
  method:'POST',
  headers:{
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({product_id:this.state.Details._id,user_name:this.state.UserName,comment:this.state.Comment})
}
)
.then((response) =>{ 

  this.props.history.push(`/product_details/${this.state.Details._id}`)
  window.location.reload()
 })


                    
                    }else{
                     alert("please type your comment in input box")
                    }

              



              }else{
          this.setState({Login:false})
          alert("please login first")
         
          }
          })
          })
  
      }else{
          this.setState({Login:false})
          alert("please login first")
         
      }



}


print_reviews=(data)=>{
if(data){
return data.map((dbData)=>{
  return(
    <>
    <div className="row">

<div className="col-md-12">
<label className="form-group">{dbData.user_name}</label>
<label className="form-control">{dbData.comment}</label>
</div>

    </div>

    </>
  )
})
}else{
  return(
    <div className="page_loader">
    <h3>Loading...</h3>
    <img src="/images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
    </div>
  )
}
}


    Print_product=()=>{
      if(this.state.Details){
        sessionStorage.setItem("product_image",this.state.Details.product_image)
        sessionStorage.setItem("product_price",this.state.Details.product_price)
        return(
        
          <>
            <div class="col-sm-12 col-md-12 admin_details_panel user_product_details  col-lg-12">
                            
                
                    <img class="img details_img" src={this.state.Details.product_image} width="100%"/>
                    <div class="details_panel">
          
                <i class="admin_product_name">{this.state.Details.product_name}</i>  <i class="glyphicon glyphicon-star">{this.state.Details.product_rating}/5</i>
                    
                    <p>Company:<span>{this.state.Details.product_company}</span></p>
                    <p>Size:<span>{this.state.Details.product_size}</span></p>
                    <p>Color:<span>{this.state.Details.product_color}</span></p>
                  <p>Price:<span>{this.state.Details.product_price}  </span></p>
                    <p>Category:<span>{this.state.Details.product_for}</span></p> 
                    <p>Quantity:<span><input type="number" onChange={this.ChangeQuantity} value={this.state.Quantity} width="10px" name="Quantity" class="form-control price_input"/></span></p> 
                  
                      <Link to={`/add_to_cart/${this.state.Details._id}`}> 
                      <input class="btn btn-success btn_available" value="Add To Cart" type="button"/> 
                      </Link>
  
                      <Link to={`/buy_now/${this.state.Details._id}/${this.state.Quantity}`}>
                      <input class="btn btn-warning btn_edit" value="Buy Now"  type="button"/>     
                      </Link> 
  
                    </div>
          
          
          
          
          
                    
          
          </div>
          
          <Tabs>
                                      <TabList>
                                      <Tab className="btn btn-primary">Write A Review</Tab>
                                      <Tab className="btn btn-primary">Reviews</Tab>
                                      </TabList>
          
          <div className="tab_panel">
          <TabPanel>
                                        <div className="overview">
                                        <h2>your comment is very important of us, please leave one!!!</h2>
                                        <label>Comment : </label>
                                        <input onChange={this.ChangeQuantity} name="Comment" type="text" className="form-control"/>
                                        <br/>
                                        <input onClick={this.Comment} type="button"  value="Leave" className="btn btn-warning"/>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                       
                                       {this.print_reviews(this.state.reviews)}

                                      </TabPanel>
          </div>
                                  </Tabs>
          
            </>
          )
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
<Header/>
<Nav/>
<div className="container">
    <div className="tbl_all_collections">
      <h1>Product Details</h1>
      <div className="row">
    {this.Print_product()}
      </div>
    </div>
        </div>
        <Newsletter/>
<Footer/>
        </>
    )
}

componentDidMount(){
    fetch(`${check_product_api}/${this.props.match.params.product_id}`,
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    
    })
    .then((response)=>{ return response.json() })
    .then((item)=>{
        this.setState({Details:item[0]})


fetch(`https://apibootwale.herokuapp.com/get_product_reviews`,
{
  method: 'POST',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
body: JSON.stringify({id:this.props.match.params.product_id})
}
)

.then((response)=>{ return response.json() })
.then((data)=>{
  this.setState({reviews:data})
})



    })
}

}

export default ProductDetails;