import  React, {Component}  from "react";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import {Link} from 'react-router-dom';
import "../../css/header.css";
const new_user_api = "https://apibootwale.herokuapp.com/new_user";
const user_by_email_api = "https://apibootwale.herokuapp.com/check_user_by_email";

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_name:'',
            user_contact:'',
            email:'',
            user_address:'',
            user_pinCode:'',
            user_password:'',
            user_re_password:'',
            user_question:'',
            user_answer:''
        }
    }



Set_States=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}




Validations=()=>{
if(this.state.user_name!="" && this.state.user_contact!="" && this.state.user_address!="" && this.state.user_pinCode!="" && this.state.user_question!="" && this.state.user_answer!="" && this.state.user_password!="" && this.state.user_re_password!=""){

if(this.state.user_contact.length==10){
    if(this.state.user_password == this.state.user_re_password && this.state.user_password.length>7){


        fetch(user_by_email_api,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:this.state.email})
            })
            .then((response)=>{ return response.json()})
            .then((data)=>{ 
             

if((data).length>0){
    alert("this email is already in use")
   
}else{
    fetch(new_user_api,
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:this.state.user_name,contact:this.state.user_contact,email:this.state.email,address:this.state.user_address,pinCode:this.state.user_pinCode,password:this.state.user_password,isActive:true,question:this.state.user_question,answer:this.state.user_answer})
        })
        .then((response)=>{ this.props.history.push('/login')})
}

            })
    
    
    
    
    }else{
        alert("password dose not match and password must be at least eight characters")
       
    }
}else{
    alert("Please enter correct contact number")
}

}else{
   alert("all fields are required")
  
}

}




SubmitData=()=>{

this.Validations()
    

}


    render(){
        return(
            <>
            <div className="header">
            <Header2/>
            
            <div className="container header">
                        <ul className="nav nav-tabs">
                          <li><Link to={'/'}>Home</Link></li>
                          <li><Link to={'/login'}>Login</Link></li>
                          <li><Link className="active" to={'/signup'}>Sign up</Link></li>
                        </ul>
                        <br/>
            </div>
            
            <div className="container sign_up_form">
                    <h2>Customer Sign Up</h2>
                    <form>
                        <div className="form-group">
                            <label for="user_name">Full Name:</label>
                            <input required type="text" onChange={this.Set_States} className="form-control" id="user_name" placeholder="Enter Full Name..." name="user_name"/>
                            </div>
                            <div className="form-group">
                            <label for="user_contact">Contact:</label>
                            <input required type="number" onChange={this.Set_States} id="user_contact"className="form-control" id="user_contact" placeholder="Enter Your Contact No. ..." name="user_contact"/>
                            </div>
                            <div className="form-group">
                            <label for="email">Email:</label>
                            <input required type="email" onChange={this.Set_States} className="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div className="form-group">
                            <label for="user_address">Address:</label>
                            <input required type="text" onChange={this.Set_States} className="form-control" id="user_address" placeholder="Enter Full Address..." name="user_address"/>
                            </div>
                            <div className="form-group">
                            <label for="user_pinCode">Pin code:</label>
                            <input required type="number" onChange={this.Set_States} className="form-control" id="user_pinCode" placeholder="Area Pin Code..." name="user_pinCode"/>
                            </div>
                            <div className="form-group">
                            <label for="user_password">Password:</label>
                            <input required type="password" onChange={this.Set_States} className="form-control" id="user_password" placeholder="Enter Your Password..." name="user_password"/>
                            </div>
                            <div className="form-group">
                            <label for="user_re_password">Confirm Password:</label>
                            <input required type="password" onChange={this.Set_States} className="form-control" id="user_re_password" placeholder="Re Enter Your Password..." name="user_re_password"/>
                            </div>
                            <div className="form-group">
                            <label for="user_question">Pick Your Security Question:</label>
                                <select className="form-control" onChange={this.Set_States} name="user_question">
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
                            <input required type="text" onChange={this.Set_States} className="form-control" id="user_answer" placeholder="Enter Your answer..." name="user_answer"/>
                            </div>
                        
                        
                        
                        <button type="button" onClick={this.SubmitData} className="btn btn-success">Submit</button>
                        </form>
                    </div>
            
                    <Footer/>
                </div>
            </>
            )
    }


}

export default Signup;
