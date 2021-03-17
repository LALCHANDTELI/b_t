import  React,{Component}  from "react";
import Header2 from "../../Header2";
import {Link} from 'react-router-dom';
import Footer from "../../Footer";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import "../../css/header.css";
const check_user_api = "https://apibootwale.herokuapp.com/check_user";
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";

class Login extends Component {

constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    Checkbox:false
  }
}


Set_States= (event)=>{
this.setState({[event.target.name]:event.target.value})
}

Checkbox=()=>{
  if(this.state.Checkbox){
    this.setState({Checkbox:false})
  }else{
    this.setState({Checkbox:true})
  }
}

Login =()=>{ 
  fetch(check_user_api,
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:this.state.email,password:this.state.password})
    })


    .then((response)=>{return response.json()})
  .then((data)=>{

if((data).length==0){
  alert("wrong mail and password")
}else{

  data.map((dbData)=>{

    if(dbData.isActive){

      const token = jwt.sign(dbData._id,"mysitebootewalekatokenfromlalchandteli");
      const cookies = new Cookies();
  if(this.state.Checkbox){
  
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+30);
  cookies.set('bootwaleuser',token, {expires: tomorrow });
  }
  
  
  cookies.set('bootwaleuser2',token);
  
  this.props.history.push('/');


    }else{

      alert("your account are blocked, please contact to admin");
    }



  })
}


  })



}

  render() {
    return(
      <>
      <div className="header">
      <Header2/>
      <div className="container">
                  <ul class="nav nav-tabs">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'} className="active">Login</Link></li>
                    <li><Link to={'/signup'}>Sign up</Link></li>
                  </ul>
                  <br/>
      </div>
      <div class="container login_form">
                <h2>Customer Login</h2>
                <form>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input onChange={this.Set_States} required type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input onChange={this.Set_States} required type="password" class="form-control" id="password" placeholder="Enter password" name="password"/>
                  </div>
                  <div class="checkbox">
                    <label><input  onClick={this.Checkbox} type="checkbox" name="remember"/> Remember me</label>
                  <Link to={'/forgot_password'}> <a>Forgot password</a> </Link>
                  </div>
                  <button onClick={this.Login} type="button" class="btn btn-warning">Login</button>
                </form>
              </div>
      <Footer/>
      </div>
      </>
      )
  }


  componentDidMount(){
    const cookies = new Cookies();
    const jwToken = cookies.get("bootwaleuser");

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


              this.props.history.push('/')
            }else{
              this.props.history.push('/login')
            }
          })
        })
  
    }else{
      this.props.history.push('/login')
    }


  }

}




export default Login;
