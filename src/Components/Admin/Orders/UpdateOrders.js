import react,{ Component } from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import Nav from "../Nav";
import Footer from "../../../Footer";
import {Link} from 'react-router-dom';
import User from '../Users/User'
const check_api_url = "https://apibootwale.herokuapp.com/check_admin"

class UpdateOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id:'',
            product_id:'',
            product_image:'',
            product_quantity:'',
            product_status:'',
            order_date:'',
            arrival_date:'',
            userData:''
        }
    }


    ChangeState=(event)=>{
this.setState({[event.target.name]:event.target.value})
    }

Update=()=>{
    fetch(`https://apibootwale.herokuapp.com/update_order/${this.props.match.params.id}`,
{
    method: 'PUT',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({product_status:this.state.product_status,arrival_date:this.state.arrival_date})
}
    )
    .then((response)=>{ this.props.history.push("/all_orders") })
}


SetUserData=(data)=>{
    this.setState({userData:data})
}

PrintUser=()=>{
    return(
        <h1>{this.state.userData.name}</h1>
    )
}

    render() {
        return (
            <>
            <Nav/>
        <div className="container">
            <div className="row update-order">
                
                    <label className="from-group">Product Quantity :</label>
                    <input type="number"  className="form-control" value={this.state.product_quantity}/>
                    <label className="from-group">Order Date :</label>
                    <input type="text"  className="form-control" value={this.state.order_date}/>
                    <label className="from-group">Order Status :</label>
                    <input type="text"  onChange={this.ChangeState} name="product_status" className="form-control" value={this.state.product_status}/>
                    <label className="from-group">Arrival Date :</label>
                    <input type="text"  onChange={this.ChangeState} name="arrival_date" className="form-control" value={this.state.arrival_date}/>

                    {sessionStorage.setItem("user_id",this.state.user_id)}
                    <User  UserData={(data) => {this.SetUserData(data)}}/>
                    {this.PrintUser()}
                    <button onClick={this.Update} className="btn btn-success form-control" >Update</button>
                
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
                

fetch(`https://apibootwale.herokuapp.com/order_details`,
{
method: 'POST',
headers: {
    "Accept":"application/json",
    "Content-Type":"application/json"
},
body:JSON.stringify({id:this.props.match.params.id})
}
)
.then((data)=>{return data.json()})
.then((data)=>{


this.setState({arrival_date:data[0].arrival_date})
this.setState({order_date:data[0].order_date})
this.setState({product_id:data[0].product_id})
this.setState({product_status:data[0].product_status})
this.setState({product_image:data[0].product_image})
this.setState({product_quantity:data[0].product_quantity})
this.setState({user_id:data[0].user_id})






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


export default UpdateOrder;