import  React , {Component} from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
const check_user_api_by_id = "https://apibootwale.herokuapp.com/check_user_by_id";
const buy_now_api = "https://apibootwale.herokuapp.com/insert_order";


class BuyNow extends Component {
constructor(props) {
    super(props);
    this.state = {
        UserId:'',
        Login:false,
        order_date: new Date().toISOString().split('T')[0]
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
            .then((response)=>{return response.json() })
            .then(async(data)=>{
               await data.map((dbData)=>{
                    if(dbData._id==user_id){
                        this.setState({Login:true})
                        this.setState({UserId:dbData._id})
                        this.setState({User:dbData.name})


                        if(this.state.Login){
if(this.props.match.params.quantity>=1){
    let productPrice = sessionStorage.getItem('product_price');
    let price = Number(this.props.match.params.quantity*productPrice)


    fetch(buy_now_api,
        {
            method:'POST',
            headers:{
                "Accept": 'application/json',
                "Content-Type":"application/json"
            },
            body:JSON.stringify({user_id:this.state.UserId,product_id:this.props.match.params.product_id,product_image:productImage,product_quantity:this.props.match.params.quantity,product_price: price,product_status:"Pending",order_date:this.state.order_date,arrival_date:"8 to 7 days"}) 
        })


        .then((response)=>{   this.props.history.push("/my_orders") })
}else{
    alert("Product quantity should be greater than zero")
    this.props.history.push(`/product_details/${this.props.match.params.product_id}`)
}
 
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


export default BuyNow;