import  React, {Component}  from "react";
import {Link} from 'react-router-dom';
import  "./css/home.css";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            Login: false,
            User: '',
            Cart:''
        }
    }


ReturnLinks=()=>{
    if(this.state.Login){
        return(
            <li><Link to={'/my_orders'}>My Orders</Link></li>
        )
       
    }
}


ReturnNav=()=>{
if(this.state.Login){
return(
    <>
     <ul class="nav navbar-nav navbar-right">
                                <li><Link to={`/signup`}><span class="glyphicon glyphicon-user"></span> Hello {this.state.User}</Link></li>
                                <li><Link to={`/my_cart`}><span class="glyphicon glyphicon-unchecked"></span>Cart</Link></li>
                                <li><Link to={`/logout`}><span class="glyphicon glyphicon-log-out"></span>Logout</Link></li>
                                </ul>
    </>
)
}else{
return(
    <>
     <ul class="nav navbar-nav navbar-right">
                                <li><Link to={`/signup`}><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to={`/login`}><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                                </ul>
    </>
)
}
}

    render() {
        return(
            <>
                <nav class="navbar navbar-inverse navbar-fixed-top">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>                        
                                </button>
                                <Link to={'/'} class="navbar-brand" >BOOT WALE</Link> 
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                                <ul class="nav navbar-nav">
                                    <li><Link to={'/'}>Home</Link> </li>
                                    <li class="dropdown">
                                        <Link class="dropdown-toggle" data-toggle="dropdown" >Top Brands <span class="caret"></span></Link> 
                                        <ul class="dropdown-menu">
                                            <li><Link to={`/brand/Nike`}>Nike</Link></li>
                                            <li><Link to={`/brand/Adidas`}>Adidas</Link></li>
                                            <li><Link to={`/brand/Reebok`}>Reebok</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link class="dropdown-toggle" data-toggle="dropdown" >Category <span class="caret"></span></Link> 
                                        <ul class="dropdown-menu">
                                        <li><Link to={`/category/Boys`}>Boys</Link></li>
                                        <li><Link to={`/category/Girls`}>Girls</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/new_collections'}>New Collections</Link> </li>
                                    {this.ReturnLinks()}
                                </ul>
                            {this.ReturnNav()}
                            </div>
                        </div>
                    </nav>
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
                        this.setState({Login:true})

                        this.setState({User:dbData.name})
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

export default Nav;
