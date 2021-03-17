import  React , {Component} from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import Nav from "../Nav";
import Footer from "../../../Footer";
import {Link} from 'react-router-dom';
const check_api_url = "https://apibootwale.herokuapp.com/check_admin"

class AllOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
            Orders:''
        }
    }







    PrintOrders=()=>{
        if(this.state.Orders){
return this.state.Orders.map((order)=>{

return(
    <Link to={`/update_user_order/${order._id}`}>
<div className="col-lg-4 col-md-6 col-sm-12 all-orders-panel">
<img class="" src={order.product_image} height="300px"  width="100%"/>
<div className="all-orders-details">
<p>Status :<span>{order.product_status}</span></p>
<p>Order Date :<span>{order.order_date}</span></p>
<p>Quantity :<span>{order.product_quantity}</span></p>
</div>
</div>
</Link>
    
)
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
        <div className="container">
            <div className="row">
            {this.PrintOrders()}
            </div>
        </div>
        <Footer/>
        </>
    )
}

componentDidMount() {



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
            

                fetch(`https://apibootwale.herokuapp.com/Orders`,
                {
                    method:"GET",
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
                )
                .then((response)=>{ return response.json() })
                .then((data)=>{
                this.setState({Orders:data})
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

export default AllOrders;