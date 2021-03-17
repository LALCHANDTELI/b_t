import react,{ Component } from "react";

class ChangeUserStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
    status:false
        }
    }
    render() {
        return (
            <>
            </>
        )
    }
    componentDidMount() {
let status = false;
if(this.props.match.params.status=='false'){
status = true;
}


        fetch(`https://apibootwale.herokuapp.com/update_user/${this.props.match.params.id}`,
        {
            method: 'PUT',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({user_active:status})
        }
        )
        .then((response) =>{  this.props.history.push('/all_users') })
    }

}

export default ChangeUserStatus;