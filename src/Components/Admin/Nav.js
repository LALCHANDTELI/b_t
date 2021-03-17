import  React  from "react";
import '../../css/header.css';
import Header from "../../Header2";
import {Link} from 'react-router-dom';


const Nav=()=>{
    return(
        <>
        <Header/>
        <nav id="admin_nav" class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <Link to={"/admin_dashboard"} class="navbar-brand" >BOOT WALE</Link>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="dropdown"><Link class="dropdown-toggle" data-toggle="dropdown" >Accounts <span class="caret"></span></Link> 
                            <ul class="dropdown-menu">
                            <li><Link to={'/all_users'}>All </Link> </li>
                                <li><Link to={'/blocked_users'}>Blocked</Link> </li>
                                <li><Link to={'/active_users'}>Active</Link> </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <Link class="dropdown-toggle" data-toggle="dropdown" >Collections<span class="caret"></span></Link> 
                            <ul class="dropdown-menu">
                            <li><Link to={'/all_collections'}>Available Collections</Link> </li>
                                <li><Link to={'/add_collections'}>Add New Collections</Link> </li>
                                <li><Link to={'/out_of_stock'}>Out Of Stocks</Link> </li>
                                
                                
                            </ul>
                        </li>
                        <li><Link to={'/all_orders'}>All Orders </Link> </li>
                        <li><Link to={'/out_of_stock'}>Out of Stock Collections</Link> </li>
                        <li><Link to={'/blocked_users'}>Blocked Users</Link> </li>
                        <li><Link to={'/all_collections'}>Available Collections</Link> </li>
                        <li><Link to={'/all_subscribes'}>Subscribes</Link> </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li><Link to={`/admin_logout`}><span class="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Nav;