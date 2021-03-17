import  React ,{Component} from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
import Header2 from "../../../Header2";
import Footer from "../../../Footer";
import "../../../css/header.css";
const api_url = "https://apibootwale.herokuapp.com/admin_dashboard";
const check_api_url = "https://apibootwale.herokuapp.com/check_admin";




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

  
    




checkData= ()=>{

  fetch(api_url,
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then((response)=>{return response.json()})
  .then((data)=>{
    data.map((dbData)=>{
      if(dbData.email===this.state.email&&dbData.password===this.state.password){
        const token = jwt.sign(dbData._id,"mysitebootewalekatokenfromlalchandteli");
        const cookies = new Cookies();
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate()+30);
        cookies.set('bootwalejwt',token, {expires: tomorrow });
        this.props.history.push('/admin_dashboard')
      }
    })
  })




}

set_states = (event)=>{
  this.setState({[event.target.name]:event.target.value})
}


    render() {
            return(
                <>
        <div className="header">
    <Header2/>
    <div class="container login">
              <h2>Admin Login</h2>
              <>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input required type="email" class="form-control" value={this.state.email}  onChange={this.set_states} id="email" placeholder="Enter email" name="email"/>
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input required type="password" class="form-control" value={this.state.password} onChange={this.set_states} id="password" placeholder="Enter password" name="password"/>
                </div>
                <button id="admin_login" onClick={this.checkData}  type="button" class="btn btn-success">Login</button>
              </>
            </div>
    <Footer/>
    </div>
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
                this.props.history.push('/admin_dashboard')
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

export default Login;