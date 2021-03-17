import { React } from "react";
import HomeContainer  from "./HomeContainer";
import Nav from "../../Nav";
import Newsletter from "../../Newsletter";
import Footer from "../../Footer";
import Header from "../../Header";

const Home=()=>{
    return (
        <>
<Header/>
<Nav/>
<HomeContainer/>
<Newsletter/>
<Footer/>
</>
    )
}

export default Home;
