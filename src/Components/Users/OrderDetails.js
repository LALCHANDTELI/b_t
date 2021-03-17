import  React , {Component} from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Nav from "../../Nav";
import {Link} from 'react-router-dom';
import Newsletter from "../../Newsletter";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserId:'',
            Login:false,
            OrderDetails:'',
            Details:''
        }
    }






    Print_Details=()=>{
        if(this.state.Details){
            sessionStorage.setItem("product_image",this.state.Details.product_image)
           
          return(
          
            <>
              <div class="col-sm-12 col-md-12 admin_details_panel user_product_details  col-lg-12">
                              
                      <img class="img details_img" src={this.state.Details.product_image} width="100%"/>
                      <div class="details_panel">
            
                  <i class="admin_product_name">{this.state.Details.product_name}</i>  <i class="glyphicon glyphicon-star">{this.state.Details.product_rating}/5</i>
                      <div className="order_details">
                      <p>Company:<span>{this.state.Details.product_company}</span></p>
                      <p>Size:<span>{this.state.Details.product_size}</span></p>
                      <p>Color:<span>{this.state.Details.product_color}</span></p>
                      <p>Price:<span>{this.state.OrderDetails.product_price}  </span></p>
                      <p>Category:<span>{this.state.Details.product_for}</span></p> 
                      <p>Quantity:<span> {this.state.OrderDetails.product_quantity}</span></p> 
                      <p>Status:<span> {this.state.OrderDetails.product_status}</span></p> 
                      <p>Order Date:<span> {this.state.OrderDetails.order_date}</span></p> 
                      <p>Arrival Date:<span> {this.state.OrderDetails.arrival_date}</span></p> 
                      <p><Link to={`/add_to_cart/${this.state.Details._id}`}> <button class="btn btn-warning btn-add-to-cart">Add To Cart</button></Link><span><Link to={`/cancel_order/${this.state.OrderDetails._id}`}><button class="btn btn-danger btn-cancel">Cancel</button></Link></span></p> 
                      </div>
                     
                   
                    
                      </div>
            
            
            
            
            
                      
            
            </div>
            
            
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




    render() {
            return (
                <>
                <Header/>
                <Nav/>
                <div className="container">
                <h1>Details</h1>
                    <div className="row">
                    <div className="container">
  
    {this.Print_Details()}
  
        </div>
                    </div>
                        </div>
                        <Newsletter/>
                <Footer/>
                        </>
            )
    }


    componentDidMount(){
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
                        this.setState({UserId:dbData._id})
                        this.setState({Login:true})

                        fetch("https://apibootwale.herokuapp.com/order_details",
                        {
                            method:"POST",
                            headers:{
                                "Accept": "application/json",
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({id:this.props.match.params.order_id})
                        } )
                        .then((response2)=>{ return response2.json() })
                        .then((data2)=>{

                            this.setState({OrderDetails:data2[0]})

                            fetch(`https://apibootwale.herokuapp.com/check_product/${data2[0].product_id}`,
                            {
                                method:"POST",
                                headers:{
                                    "Accept": "application/json",
                                    "Content-Type":"application/json"
                                }
                            } )
                            .then((response3)=>{ return response3.json() })
                            .then((data3)=>{   this.setState({Details:data3[0]}) })
                           

                            
                        })



                    }else{
                this.setState({Login:false})
                }
                })
                })
        
            }else{
                this.setState({Login:false})
            }
        
    }



}

export default OrderDetails;