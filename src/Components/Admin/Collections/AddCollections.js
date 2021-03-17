import  React, { Component}  from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
import Footer from "../../../Footer"
import "../../../css/footer.css";
import Nav from "../Nav";
const product_api_url = "https://apibootwale.herokuapp.com/check_product";
const api_url = 'https://apibootwale.herokuapp.com/add_product';
const update_api_url = 'https://apibootwale.herokuapp.com/update_product';
const check_api_url = "https://apibootwale.herokuapp.com/check_admin";
class AddCollections extends Component {
constructor(props) {
    super(props);
    this.state = {
        product_company:'',
        product_name:'',
        product_for:'',
        product_color:'',
        product_size:'',
        product_price:'',
        product_image:'',
        product_rating:''
    }


}


set_states=(event)=>{
    this.setState({[event.target.name]:event.target.value})
        }
    
    
        add_product=()=>{

          if(this.props.location.pathname.split("/")[2]!=undefined){
            let id= this.props.location.pathname;
            let product_id = id.split("/")[2];

            fetch(update_api_url,
              {
                  method:'PUT',
                  headers:{
                      'Accept':'application/json',
                      'Content-Type':'application/json'
                  },
                  body:JSON.stringify({
                    id:product_id,
                    product_name: this.state.product_name, 
                    product_company: this.state.product_company, 
                    product_size: this.state.product_size, 
                    product_color: this.state.product_color, 
                    product_price: this.state.product_price, 
                    product_for: this.state.product_for, 
                    product_image: this.state.product_image, 
                    product_rating: this.state.product_rating
                  })
              })
              .then(this.props.history.push('/all_collections'))
          }
          
          else{
            fetch(api_url,
              {
                  method:'POST',
                  headers:{
                      'Accept':'application/json',
                      'Content-Type':'application/json'
                  },
                  body:JSON.stringify(this.state)
              })
              .then(this.props.history.push('/all_collections'))
          }

        }

    render(){
        return (
            <>
                <Nav/>
                <div className="tbl_add_collections container">
                <form>
                <div class="form-group">
                <select name="product_company" value={this.state.product_company} onChange={this.set_states} required class="form-control">
                    <option value="" selected disabled>Select Company Name...</option>
                    <option value="Woodland">Woodland</option>
                    <option value="Puma">Puma</option>
                    <option value="Reebok">Reebok</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Nike">Nike</option>
                    <option value="Stardox">Stardox</option>
                    <option value="Vans">Vans</option>
                    <option value="Redchip">Redchip</option>
                    <option value="Adidas">Adidas</option>
                </select>

              </div>
              <div class="form-group">
                <select name="product_for" value={this.state.product_for} onChange={this.set_states} required class="form-control">
                    <option value="" selected disabled>Select Product Category</option>
                    <option value="Girls">Girls</option>
                    <option value="Boys">Boys</option>
                    <option value="Baby Girls">Baby Girls</option>
                    <option value="Baby Boys">Baby Boys</option>
                    <option value="Men">Men</option>
                    <option value="Womans">Womans</option>
                </select>
              </div>
              <div class="form-group">


              <select name="product_color" value={this.state.product_color} onChange={this.set_states} required class="form-control">
                    <option value="" selected disabled>Select Product Color...</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Fuchsia">Fuchsia</option>
                    <option value="Red">Red</option>
                    <option value="Silver">Silver</option>
                    <option value="Gray">Gray</option>
                    <option value="Olive">Olive</option>
                    <option value="Purple">Purple</option>
                    <option value="Maroon">Maroon</option>
                    <option value="Aqua">Aqua</option>
                    <option value="Lime">Lime</option>
                    <option value="Teal">Teal</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Navy">Navy</option>
                    <option value="Black">Black</option>
                    <option value="Pink">Pink</option>
                    <option value="Brown">Brown</option>
                    
                </select>

              </div>
              
              <div class="form-group">
                <label>Product Name:</label>
                <input placeholder="Enter Product Name..." value={this.state.product_name} onChange={this.set_states} required type="text" class="form-control"name="product_name" />
              </div>

              <div class="form-group">
                <label >Product Size:</label>
                <input placeholder="Enter Product Size..." value={this.state.product_size} onChange={this.set_states} required type="number" class="form-control" name="product_size" />
              </div>

              <div class="form-group">
                <label >Product Price:</label>
                <input placeholder="Enter Product Price..." value={this.state.product_price} onChange={this.set_states}  required type="number" class="form-control" name="product_price" />
              </div>
              <div class="form-group">
                <label >Product Image URL:</label>
                <input placeholder="Paste Product Image URL..." value={this.state.product_image} onChange={this.set_states}  required type="text" class="form-control" name="product_image" />
              </div>
             
              <div class="form-group">
                <label >Set Product Default Rating:</label>
                <input placeholder="Enter Product Rating..." value={this.state.product_rating} onChange={this.set_states} required type="number" class="form-control" name="product_rating" />
              </div>
              <button onClick={this.add_product} type="button" class="btn btn-default">Add</button>
            </form>
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
                console.log(this.props.location.pathname)
                if(this.props.location.pathname.split("/")[2]!=undefined){
                  let id= this.props.location.pathname;
                  console.log(this.props.location.pathname)
                  let product_id = id.split("/")[2];
                  console.log(product_id)
                  fetch(`${product_api_url}/${product_id}`,
                    {
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        }
                    })
                    .then((response)=>{ return response.json() })
                    .then((data)=>{ 
                      data.map((dbData)=>{

                        this.setState({product_company:dbData.product_company});
                        this.setState({product_name:dbData.product_name});
                        this.setState({product_for:dbData.product_for});
                        this.setState({product_color:dbData.product_color});
                        this.setState({product_size:dbData.product_size});
                        this.setState({product_price:dbData.product_price});
                        this.setState({product_image:dbData.product_image});
                        this.setState({product_rating:dbData.product_rating});








                      })

                    })



                }


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

export default AddCollections;

