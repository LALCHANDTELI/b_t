import Cookies from 'universal-cookie'

const Logout=(props)=>{
        const cookies = new Cookies();
        cookies.remove("bootwalejwt")
        props.history.push('/admin_login')
        window.location.reload();
}

export default Logout;

