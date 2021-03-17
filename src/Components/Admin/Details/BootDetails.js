import  React ,{Component} from "react";
import Footer from "../../../Footer"
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
import "../../../css/footer.css";
import "../../../css/collections.css";
import Nav from "../Nav";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const check_api_url = "https://apibootwale.herokuapp.com/check_admin";
const check_product_api = "https://apibootwale.herokuapp.com/check_product";


class BootDetails extends Component{
constructor(props) {
    super(props);
    this.state = {
    Details:''
    }
}


Print_product=()=>{


  if(this.state.Details){
    return(

      <>
        <div class="col-sm-12 col-md-12 admin_details_panel  col-lg-12">
                        
            
                <img class="img details_img" src={this.state.Details.product_image} width="100%"/>
                <div class="details_panel">
      
            <i class="admin_product_name">{this.state.Details.product_name}</i>  <i class="glyphicon glyphicon-star">{this.state.Details.product_rating}/5</i>
                
                <p>Company:<span>{this.state.Details.product_company}</span></p>
                <p>Size:<span>{this.state.Details.product_size}</span></p>
                <p>Color:<span>{this.state.Details.product_color}</span></p>
                <p>Price:<span>{this.state.Details.product_price}</span></p>
                <p>Category:<span>{this.state.Details.product_for}</span></p> 
                </div>
      
      
      
      
      
                
      
      </div>
      
      <Tabs>
                                  <TabList>
                                  <Tab className="btn btn-primary">OverView</Tab>
                                  <Tab className="btn btn-primary">Orders</Tab>
                                  </TabList>
      
      <div className="tab_panel">
      <TabPanel>
                                    <div className="overview">
                                    <h2>About This Place</h2>
                                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className="orders">
                                    <h2>Contact Us</h2>
                                      <h3></h3>
                                      <h3>Phone: 9655868686</h3>
                                    </div>
                                  </TabPanel>
      </div>
                              </Tabs>
      
        </>
      )
  }else{
    return(
                            <div className="page_loader">
                            <h3>Loading...</h3>
                            <img src="/images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
                            </div>
    )
  }

}



render(){
  
    return (
        <>
        <Nav/>
        <div className="container">
    <div className="tbl_all_collections">
      <h1>Collections Details</h1>
      <div className="row">
    {this.Print_product()}
      </div>
    </div>
        </div>
        <Footer/>
        </>
        )
}

componentDidMount(){
    const cookies = new Cookies();
    const jwToken = cookies.get("bootwalejwt")
    if(!jwToken==""){
      const admin_id= jwt.verify(jwToken,"mysitebootewalekatokenfromlalchandteli");
      fetch(check_api_url,
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:admin_id})
          
        })
        .then((response)=>{ return response.json() })
        .then((data)=>{
          data.map((dbData)=>{
            if(dbData._id===admin_id){



              fetch(`${check_product_api}/${this.props.match.params.product_id}`,
              {
                  method:'POST',
                  headers:{
                      'Accept':'application/json',
                      'Content-Type':'application/json'
                  }
              
              })
              .then((response)=>{ return response.json() })
              .then((item)=>{

                    this.setState({Details:item[0]})


              })



            
            }else{
              this.props.history.push('/admin_login')
            }
          })
        })
  
    }else{
      this.props.history.push('/admin_login')
    }
  }



}

export default BootDetails;

