import  React , {Component} from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Nav from "../../Nav";
import {Link} from 'react-router-dom';
import Newsletter from "../../Newsletter";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";

class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserId:'',
            Login:false,
            CartDetails:'',
            Details:'',
            Quantity:1,
        }
    }

    ChangeQuantity=(event) =>{
        this.setState({[event.target.name]:event.target.value})
        }


    Print_Details=()=>{
        sessionStorage.setItem("product_image",this.state.Details.product_image)
        if(this.state.Details){
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
                      <p>Price:<span>{this.state.Details.product_price}  </span></p>
                      <p>Category:<span>{this.state.Details.product_for}</span></p> 
                      <p>Quantity:<span><input type="number" onChange={this.ChangeQuantity} value={this.state.Quantity} width="10px" name="Quantity" class="form-control price_input"/></span></p> 
                      </div>

                     
                      <Link to={`/buy_now/${this.state.Details._id}/${this.state.Quantity}`}> 
                      <input class="btn btn-success btn_available" value="Buy Now" type="button"/> 
                      </Link>
  
                      <Link to={`/remove_from_cart/${this.state.CartDetails._id}`}>
                      <input class="btn btn-danger btn_edit" value="Remove"  type="button"/>     
                      </Link>
                    
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

                        fetch("https://apibootwale.herokuapp.com/cart_details",
                        {
                            method:"POST",
                            headers:{
                                "Accept": "application/json",
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({id:this.props.match.params.cart_id})
                        } )
                        .then((response2)=>{ return response2.json() })
                        .then((data2)=>{

                            this.setState({CartDetails:data2[0]})

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
                alert("please login first")
                this.props.history.push("/login")
                }
                })
                })
        
            }else{
                this.setState({Login:false})
                alert("please login first")
                this.props.history.push("/login")
            }
        
    }





}

export default CartDetails;