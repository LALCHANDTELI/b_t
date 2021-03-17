import  React , {Component} from "react";

class CancelOrder extends Component {

    render() {
        return (
            <>
            </>
        )
    }


    componentDidMount(){

        
        fetch(`https://apibootwale.herokuapp.com/order_details`, {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:this.props.match.params.id})
        }
            )
            .then(response =>{return response.json();})
            .then((data) =>{
                if(data[0].product_status=="Pending"){
        fetch(`https://apibootwale.herokuapp.com/remove_from_order/${this.props.match.params.id}`, {
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }})
            .then((response)=>{ this.props.history.push('/my_orders') })
                }else{
                    alert("this product is on the way now you can't cancel this orders")
                    this.props.history.push(`/order_details/${this.props.match.params.id}`)
                }
            })




    }
}

export default CancelOrder;