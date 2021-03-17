import  React,{Component}  from "react";

class Newsletter extends Component{
constructor(props){
    super(props);
    this.state = {
        email:''
    }
}


SetStates=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}





SubmitEmail=()=>{

    fetch("https://apibootwale.herokuapp.com/check_subscriber",
    {
        method: "POST",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email:this.state.email})
    })
    .then((response)=>{ return response.json()})
    .then((data)=>{
        console.log((data).length)
        if((data).length==0){
 


            fetch("https://apibootwale.herokuapp.com/subscribe",
            {
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({email:this.state.email})
            })
            .then((response)=>{
                alert("thank you for Subscribe our news letter")
                window.location.reload()
            })






        }else{
            alert("you have already subscribe our news letter")
        }

    })







}

    render(){
        return(
            <>
            <hr/>
            <div class="container subscribe_form">
                <h3>Subscribe to Our Newsletter for Latest News about offers and new Collections!!!</h3>
                <form>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input onChange={this.SetStates} type="email" class="form-control"  name="email" id="email" placeholder="Enter your email..."/>
                </div>
                <button type="button" onClick={this.SubmitEmail} class="btn btn-success">Submit</button>
                </form>
            </div>
            </>
            )
    }

}

export default Newsletter;
