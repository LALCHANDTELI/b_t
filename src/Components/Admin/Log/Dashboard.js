import  React ,{Component}  from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
import Nav from "../Nav";
import Footer from "../../../Footer";
import "../../../css/footer.css";
import {Link} from 'react-router-dom';
const check_api_url = "https://apibootwale.herokuapp.com/check_admin"


class Dashboard extends Component{
constructor(props){
  super(props);
  this.state = {
    myData:''
}



}

render(){
  return(
    <>
    <Nav/>
<div className="container">
<div className="row">
    <Link to={"/all_collections"}>
        <div className="col-md-6 col-sm-12 col-lg-4">
        <div class="admin-panel panel panel-default">
        <div class="panel-body">Available Collections</div>
        </div>
        </div>
    </Link>

    <Link to={"/add_collections"}>
            <div className="col-md-6 col-sm-12 col-lg-4">
            <div class="admin-panel panel panel-default">
            <div class="panel-body">Add New Collections</div>
            </div>
            </div>
    </Link>

    <Link to={"/out_of_stock"}>
            <div className="col-md-6 col-sm-12 col-lg-4">
            <div class="admin-panel panel panel-default">
            <div class="panel-body">Out of Stocks Collections</div>
            </div>
            </div>
    </Link>

<Link to={`/all_orders`}>
<div className="col-md-6 col-sm-12 col-lg-4">
<div class="admin-panel panel panel-default">
<div class="panel-body">All Orders</div>
</div>
</div>
</Link>

<Link to={`/all_users`}>
<div className="col-md-6 col-sm-12 col-lg-4">
<div class="admin-panel panel panel-default">
<div class="panel-body">All Users</div>
</div>
</div>
</Link>

<Link to={`/blocked_users`}>
<div className="col-md-6 col-sm-12 col-lg-4">
<div class="admin-panel panel panel-default">
<div class="panel-body">Blocked Users</div>
</div>
</div>
</Link>
</div>
  </div>
  <Footer/>
    </>
)
}

componentDidMount(){
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
export default Dashboard;