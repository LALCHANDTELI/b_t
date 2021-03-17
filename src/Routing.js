import { React } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home  from "./Components/Home/Home";
import Login from "./Components/Logs/Login";
import Signup from "./Components/Logs/Signup";
import ForgotPassword from "./Components/Logs/ForgotPassword";
import AdminLogin from "./Components/Admin/Log/Login";
import AdminLogout from "./Components/Admin/Log/Logout";
import AdminDashboard from "./Components/Admin/Log/Dashboard";
import AllCollections from "./Components/Admin/Collections/AllCollections";
import AddCollections from "./Components/Admin/Collections/AddCollections";
import HardDelete from "./Components/Admin/Collections/HardDelete";
import OutOFStocks from "./Components/Admin/Collections/OutOFStocks";
import ChangeStocks from "./Components/Admin/Collections/ChangeStocks"
import BootDetails from "./Components/Admin/Details/BootDetails";
import ProductDetails from "./Components/Display/ProductDetails";
import Logout from "./Components/Logs/LogOut";
import NewCollections from "./Components/Home/NewCollections";
import AllCollection from "./Components/Home/AllCollections";
import SearchByBrand from "./Components/Filters/SearchByBrand";
import SearchByColor from "./Components/Filters/SearchByColor";
import SearchByCategory from "./Components/Filters/SearchByCategory";
import AddToCart from "./Components/Users/AddToCart";
import BuyNow from "./Components/Users/BuyNow";
import MyOrders from "./Components/Users/MyOrders";
import MyCart from "./Components/Users/MyCart";
import OrderDetails from "./Components/Users/OrderDetails";
import CartDetails from "./Components/Users/CartDetails";
import RemoveFromCart from "./Components/Users/RemoveFromCart";
import CancelOrder from "./Components/Users/CancelOrder";
import AllUsers from "./Components/Admin/Users/AllUsers";
import ActiveUsers from "./Components/Admin/Users/ActiveUsers";
import BlockedUsers from "./Components/Admin/Users/BlockedUsers";
import ChangeUserStatus from "./Components/Admin/Users/ChangeUserStatus";
import AllOrders from "./Components/Admin/Orders/AllOrders";
import UpdateOrder from "./Components/Admin/Orders/UpdateOrders";
import Subscribers from "./Components/Admin/Users/Subscribes";

const Routing=()=>{
return(
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/forgot_password" component={ForgotPassword}/>
    <Route path="/admin_login" component={AdminLogin}/>
    <Route path="/admin_logout" component={AdminLogout}/>
    <Route path="/admin_dashboard" component={AdminDashboard}/>
    <Route path="/all_collections" component={AllCollections}/>
    <Route path="/add_collections" component={AddCollections}/>
    <Route path="/out_of_stock" component={OutOFStocks}/>
    <Route path="/change_stocks/:product_id" component={ChangeStocks}/>
    <Route path="/details/:product_id" component={BootDetails}/>
    <Route path="/hard_delete/:product_id" component={HardDelete}/>
    <Route path="/product_details/:product_id" component={ProductDetails}/>
    <Route path="/new_collections" component={NewCollections}/>
    <Route path="/all_collection" component={AllCollection}/>
    <Route path="/brand/:name" component={SearchByBrand}/>
    <Route path="/color/:name" component={SearchByColor}/>
    <Route path="/category/:name" component={SearchByCategory}/>
    <Route path="/add_to_cart/:product_id" component={AddToCart}/>
    <Route path="/buy_now/:product_id/:quantity" component={BuyNow}/>
    <Route path="/my_orders" component={MyOrders}/>
    <Route path="/my_cart" component={MyCart}/>
    <Route path="/order_details/:order_id" component={OrderDetails}/>
    <Route path="/cart_details/:cart_id" component={CartDetails}/>
    <Route path="/remove_from_cart/:id" component={RemoveFromCart}/>
    <Route path="/cancel_order/:id" component={CancelOrder}/>
    <Route path="/all_users" component={AllUsers}/>
    <Route path="/active_users" component={ActiveUsers}/>
    <Route path="/blocked_users" component={BlockedUsers}/>
    <Route path="/change_user_status/:id/:status" component={ChangeUserStatus}/>
    <Route path="/all_orders" component={AllOrders}/>
    <Route path="/update_user_order/:id" component={UpdateOrder}/>
    <Route path="/all_subscribes" component={Subscribers}/>


    </BrowserRouter>
)
}

export default Routing;
