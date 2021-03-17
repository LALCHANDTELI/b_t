import react,{ Component } from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import Footer from "../../../Footer";
import Nav from "../Nav";
const check_api_url = "https://apibootwale.herokuapp.com/check_admin"

class Subscribes extends Component {
    constructor(props){
        super(props);
        this.state = {
            Subscribes:''
        }
    }

print=(data)=>{
if(data){
return data.map((item)=>{
return(
    <div className="col-md-12">
<label class="form-control subscribers_email" >{item.email}</label>
</div>
)
})
}else{
<div className="col-md-12">
<div className="page_loader">
                <h3>Loading...</h3>
                <img src="images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
                </div>
</div>
}
}


    render() {
        return (
            <>
<Nav/>
<div className="container">
<h1>Subscribers Email...</h1>
<div className="row">
{this.print(this.state.Subscribes)}
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
                

fetch(`https://apibootwale.herokuapp.com/Subscribers`,
{
    method: 'GET',
    headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
}
)
.then((data)=>{ return data.json() })
.then((data)=>{this.setState({Subscribes:data})})


    
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


export default Subscribes;