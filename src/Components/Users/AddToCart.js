import  React , {Component} from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";
const add_to_cart_api = "https://apibootwale.herokuapp.com/insert_cart"

class AddToCart extends Component {
constructor(props) {
    super(props);
    this.state = {
        UserId:'',
        Login:false,
        cart_date: new Date().toISOString().split('T')[0]
    }
}

    render() {
        return (
           <>
           </>
        )
    }

    componentDidMount(){
        const productImage = sessionStorage.getItem('product_image');
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
                        this.setState({UserId:dbData._id})
                        this.setState({Login:true})
                        this.setState({User:dbData.name})
                        




                        if(this.state.Login){
                           
                                fetch(add_to_cart_api,
                                    {
                                        method:'POST',
                                        headers:{
                                            "Accept": 'application/json',
                                            "Content-Type":"application/json"
                                        },
                                        body:JSON.stringify({user_id:this.state.UserId,product_id:this.props.match.params.product_id,product_image:productImage,cart_date:this.state.cart_date}) 
                                    })
                            
                            
                                    .then((response)=>{   this.props.history.push("/my_cart") })
                            
                                                        }
                                                    else{
                                                        alert("please login first")
                                                        this.props.history.push("/login")
                                                    }




                    }else{
                this.setState({Login:false})
                alert("please login first")
                this.props.history.push("/login")
                }
                })
                })
        
            }else{
                this.setState({Login:false})
                alert("please login first")
                this.props.history.push("/login")
            }
        
    }


}


export default AddToCart;