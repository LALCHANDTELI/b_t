import  React, {Component} from "react";
import Cookies from 'universal-cookie';

class LogOut extends Component {

render() {
        const cookies = new Cookies();
        cookies.remove("bootwaleuser")
        cookies.remove("bootwaleuser2")
    return (
        <>
        {this.props.history.push('/login')}
        { window.location.reload()}
        </>
    )
}

}

export default LogOut;