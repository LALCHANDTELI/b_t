import  React,{Component}  from "react";
import Header2 from "../../Header2";
import {Link} from 'react-router-dom';
import Footer from "../../Footer";
import "../../css/header.css";

class ForgotPassword extends Component {

constructor(props) {
  super(props);
  this.state = {
    email:'',
    user_question:'',
    user_answer:'',
    new_password:''
  }
}


Set_States= (event)=>{
this.setState({[event.target.name]:event.target.value})
}



Check =()=>{
if(this.state.new_password.length>7){

  fetch(`https://apibootwale.herokuapp.com/check_user_by_email`,
  {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({email:this.state.email})
  }
      )
      .then((response)=>{
        return response.json() })
      .then((data)=>{
        if(!(data).length==0){
          if(data[0].email==this.state.email && data[0].question==this.state.user_question && data[0].answer==this.state.user_answer){

fetch(`https://apibootwale.herokuapp.com/update_user_password`,
{
method: 'PUT',
headers: {
  "Accept": "application/json",
  "Content-Type": "application/json"
},
body: JSON.stringify({id:data[0]._id,password:this.state.new_password})
}
)
.then((response) =>{ alert("your password successfully changed") 
this.props.history.push('/login');
})


          }else{
          alert("wrong details")
          }
        }else{
          alert("wrong details")
        }
        
      })


}else{
  alert("password must be at least eight characters")
}


  
}

  render() {
    return(
      <>
      <div className="header">
      <Header2/>
      <div className="container">
                  <ul class="nav nav-tabs">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signup'}>Sign up</Link></li>
                  </ul>
                  <br/>
      </div>
      <div class="container login_form">
                <h2>Forgot Password</h2>
                <form>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input onChange={this.Set_States} required type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                  </div>
                  
                  <div className="form-group">
                            <label for="user_question">Pick Your Security Question:</label>
                                <select onChange={this.Set_States} name="user_question" className="form-control">
                                    <option selected disabled>Select Your Security Question!!!</option>
                                    <option>Who is your super star</option>
                                    <option>What is your childhood name</option>
                                    <option>What is your primary school name</option>
                                    <option>What is your best friend name</option>
                                    <option>What is your lucky number</option>
                                </select>
                            </div>
                            <div className="form-group">
                            <label for="user_answer">Answer:</label>
                            <input onChange={this.Set_States} required type="text" className="form-control" id="user_answer" placeholder="Enter Your answer..." name="user_answer"/>
                            </div>
                            <div className="form-group">
                            <label for="new_password">New Password:</label>
                            <input onChange={this.Set_States} required type="text" className="form-control" id="new_password" placeholder="Enter Your New Password..." name="new_password"/>
                            </div>


                  <button onClick={this.Check} type="button" class="btn btn-warning">Check</button>
                </form>
              </div>
      <Footer/>
      </div>
      </>
      )
  }

}

export default ForgotPassword;
