import react,{ Component } from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import Nav from "../Nav";
import Footer from "../../../Footer";
const check_api_url = "https://apibootwale.herokuapp.com/check_admin"

class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users:'',
            UsersNo:''
        }
    }


    CheckUsers(User){
        if(User){
            return(
            <div className="all-user-2-3">
            <p>Active:<span>True</span></p>
            </div>
            )
        }else{
            return(
                <div className="all-user-2-2">
                <p>Active:<span>False</span></p>
                </div>
            )
        }

    }




    PrintUsers=()=>{
        if(this.state.Users){
return this.state.Users.map((user)=>{

return(
    <div className="col-lg-6">
<div className="row all-user">
{this.CheckUsers(user.isActive)}
<div className="col-lg-6 col-md-6 col-sm-12 all-user-1">
    <p>Name :<span>{user.name}</span></p>
    <p>Contact:<span>{user.contact}</span></p>
    <p>Email:<span>{user.email}</span></p>
    <p>Address:<span>{user.address}</span></p>
    <p>Pin Code:<span>{user.pinCode}</span></p>
</div>
</div>
    </div>
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
                <p className="UsersNo">Users : {this.state.UsersNo}</p>
            {this.PrintUsers()}
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
            
fetch('https://apibootwale.herokuapp.com/all_users',
{
    method:'POST',
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
}
)
.then((response)=>{ return response.json() })
.then((data)=>{
    this.setState({UsersNo:(data).length})
    this.setState({Users:data})
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

export default AllUsers;