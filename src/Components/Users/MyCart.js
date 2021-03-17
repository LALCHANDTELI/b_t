import  React , {Component} from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Nav from "../../Nav";
import {Link} from 'react-router-dom';
import Newsletter from "../../Newsletter";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_product_api = "https://apibootwale.herokuapp.com/check_product";
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";

class MyCart extends Component {
constructor(props) {
    super(props);
    this.state = {
UserId:'',
Login:false,
Cart:''
    }
}


PrintMyCart=()=>{

    if(this.state.Cart){
       return  this.state.Cart.map((items)=>{ 

    return(
        <Link to={`/cart_details/${items._id}`}>
        <div class="col-sm-12 col-md-6 col-lg-4">
            <img className="order_img" src={items.product_image}/>
        </div>
        </Link>
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

    render() {

        return (
    <>
                <>
<Header/>
<Nav/>
<div className="container">
    <h1>My Cart</h1>
    <div className="row">
    {this.PrintMyCart()}
    </div>
        </div>
        <Newsletter/>
<Footer/>
        </>
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
                    
                    fetch("https://apibootwale.herokuapp.com/my_cart",
                    {
                        method:"POST",
                        headers:{
                            "Accept": "application/json",
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({user_id:this.state.UserId})
                    } )
                    .then((response2)=>{ return response2.json() })
                    .then((data2)=>{
                        this.setState({Cart:data2})
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


export default MyCart;