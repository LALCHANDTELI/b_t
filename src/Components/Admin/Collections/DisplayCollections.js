import react,{ Component } from "react";
import {Link} from 'react-router-dom';

class DisplayCollections extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


printFilterData=({filterData})=>{
if(filterData){
if(filterData.length>0){
return filterData.map((item) => {
    if(item.product_available){
        return(
            <>
            
<Link to={`details/${item._id}`}>
            <div class="col-sm-12 col-md-6 admin_product col-lg-4 product_box">
        <div class="panel panel-default">                    
            <div>
                <img class="img" src={item.product_image} height="300px" width="100%"/>
                <div class="my_panel admin_my_panel">

            <i class="admin_product_name">{item.product_name}</i>  <i class="glyphicon glyphicon-star">{item.product_rating}/5</i>
                
                <p>Company:<span>{item.product_company}</span></p>
                <p>Size:<span>{item.product_size}</span></p>
                <p>Color:<span>{item.product_color}</span></p>
                <p>Price:<span>{item.product_price}</span></p>
                <p>Category:<span>{item.product_for}</span></p>
                <Link to={`/change_stocks/${item._id}`}> 
                <input class="btn btn-success btn_available" value="Out Of Stock" type="button"/> 
                </Link>
                        
                            <Link to={`/add_collections/${item._id}`}>
                            <input class="btn btn-warning btn_edit" value="Edit"  type="button"/>     
                            </Link> 
                </div>

            </div>
        </div>
    </div>
    
    </Link>
            
            </>
        )
    }

})


}else{
    return(
        <h3>Collections Not Available</h3>
    )
}
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
        return (
            <>

{this.printFilterData(this.props)}


            </>
        )
    }


    

}


export default DisplayCollections;