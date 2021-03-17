import  React , {Component} from "react";

class RemoveFromCart extends Component {

    render() {
        return (
            <>
            </>
        )
    }
componentDidMount(){
    fetch(`https://apibootwale.herokuapp.com/remove_from_cart/${this.props.match.params.id}`, {
        method:"DELETE",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }})
        .then((response)=>{ this.props.history.push('/my_cart') })
}

}

export default RemoveFromCart;