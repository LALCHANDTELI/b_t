import  React, { Component}  from "react";
import {Link} from 'react-router-dom';
import  "../../css/home.css";
const rating_filter_api = "https://apibootwale.herokuapp.com/filter_products/rating/<.5";
const new_filter_api = "https://apibootwale.herokuapp.com/Products";

class HomeContainer extends Component{


    constructor(props){
        super(props);
        this.state = {
            TopRatingList:'',
            NewCollectionsList:'',
            TopBrands:''
        }
    }

Print_Top_Rating=(data)=>{
    if(data){
       return data.map((item)=>{ 
          return(
              <Link to={`product_details/${item._id}`}>
            <div class="col-sm-12 col-md-6 col-lg-4 product_box">
            <div class="panel panel-default">                    
                <div>
                    <img class="img" alt="Product Image" src={item.product_image} height="300px" width="100%"/>
                    <div class="my_panel">
                        {item.product_name}<i class="glyphicon glyphicon-star">{item.product_rating}</i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>
                    
                    </div>

                </div>
            </div>
        </div>
        </Link>
          )
        })
    }else{
return(
    <div className="page_loader">
        <h3>Loading...</h3>
    <img src="images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
    </div>
)
    }
}




Print_New_Collections=(data)=>{ 

    if(data){
        let counter = 0;
       return data.map((item)=>{
        if(counter<6){
            return(
                <Link to={`product_details/${item._id}`}>
                <div class="col-sm-12 col-md-6 col-lg-4 product_box">
                <div class="panel panel-default">                    
                    <div>
                        <img class="img" src={item.product_image}  alt="Product Image" height="300px" width="100%"/>
                        <div class="my_panel">
                            {item.product_name}<i class="glyphicon glyphicon-star">{item.product_rating}</i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>
                        
                        </div>
    
                    </div>
                </div>
                <div className="counter">
                {counter++}
                </div>
            </div>
            </Link>
              )
        }
       

        
       
        
        })
    }else{
return(
    <div className="page_loader">
          <h3>Loading...</h3>
    <img src="images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
    </div>
)
    }
}










render() {
return(
<>

<div class="container">
<div class="row">
        <div class="col-col-sm-12 col-md-10 col-lg-10 product_row">
        <div class="row">
            <h3 className="css_text">world's best top brand boots are available here like<br/><span id="brand_name"></span></h3>
            <h3 className="product_category">Popular Boot</h3>

      {this.Print_Top_Rating(this.state.TopRatingList)}

        </div>
       <Link to="/all_collection"><button  class="btn btn-info">See More</button></Link>
    </div>
</div>
<hr/>

    <div class="col-col-sm-12 col-md-2 col-lg-2 filter_box">
        <div class="filters">
            <h3>Search By Brands</h3>
            <ul>
                <div class="row">
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Reebok`}><li>Reebok</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Puma`}><li>Puma</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Woodland`}><li>Woodland</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Redchip`}><li>Redchip</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Adidas`}><li>Adidas</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Jordan`}><li>Jordan</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Vans`}><li>Vans</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Nike`}><li>Nike</li></Link>
</div>
<div class="col-sm-12 col-md-6 col-lg-6 filter_content">
    <Link to={`/brand/Stardox`}><li>Stardox</li></Link>
</div>
                </div>
            </ul>
<hr/>
<h3>Search By Category</h3>
<ul>
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Men"><li>Men</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Woman"><li>Woman</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Girls"><li>Girls</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Boys"><li>Boys</li></Link> 
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Baby Girls"><li>Baby Girls</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/category/Baby Boys"><li>Baby Boys</li></Link>
        </div>
        
                        </div>
</ul>


<hr/>
<h3>Search By Colors</h3>
<ul>
    <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Aqua"><li>Aqua</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Maroon"><li>Maroon</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Purple"><li>Purple</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Olive"><li>Olive</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Gray"><li>Gray</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Silver"><li>Silver</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Red"><li>Red</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Fuchsia"><li>Fuchsia</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Yellow"><li>Yellow</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/White"><li>White</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Green"><li>Green</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Teal"><li>Teal</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Lime"><li>Lime</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Blue"><li>Blue</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Navy"><li>Navy</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Pink"><li>Pink</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Brown"><li>Brown</li></Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 filter_content">
            <Link to="/color/Black"><li>Black</li></Link>
        </div>

        </div>
</ul>

<hr/>
                        </div>


        </div>
</div>

<hr/>

<div class="container">
    <div class="row">
        <h3 className="product_category">New Collections</h3>

            
        {this.Print_New_Collections(this.state.NewCollectionsList)}
            
    </div>
    <Link to="/new_collections">
    <button class="btn btn-info">See More</button>
    </Link>
</div>

<hr/>

</>
)
}


componentDidMount(){
    fetch(`${rating_filter_api}`,
    {
    
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }       
    })
    .then((response)=>{ return response.json() })
            .then((data)=>{
this.setState({TopRatingList:data})
            
            })


            fetch(`${new_filter_api}`,
            {
            
                    method:'GET',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }       
            })
            .then((response)=>{ return response.json() })
                    .then((data)=>{
        this.setState({NewCollectionsList:data})
   
                    
                    })




            

}


}

export default HomeContainer;
