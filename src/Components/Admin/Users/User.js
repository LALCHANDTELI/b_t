import react,{ Component } from "react";

class UpdateOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }



    render() {
        return (
            <>
            </>
        )
    }

    componentDidMount(){
        const user_id = sessionStorage.getItem("user_id")
        fetch(`https://apibootwale.herokuapp.com/check_user_by_id`,
        {
            method:'POST',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id:user_id})
        }
        )
        .then((response) => { return response.json() })
        .then((result)=>{
            this.props.UserData(result[0])
            })
    }


}


export default UpdateOrder;