import react,{ Component } from "react";
import {Link} from 'react-router-dom';

class DisplayByBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    Print_All_Brands=({filterData})=>{ 
        if(filterData){
if(filterData.length==0){
    return(
        <h1> Not Available Right now</h1>
    )
}else{
    return filterData.map((item)=>{
         
        return(
            <Link to={`/product_details/${item._id}`}>
            <div class="col-sm-12 col-md-6 col-lg-4 product_box">
            <div class="panel panel-default">                    
                <div>
                    <img class="img" src={item.product_image}  alt="Product Image" height="300px" width="100%"/>
                    <div class="my_panel">
                        {item.product_name}<i class="glyphicon glyphicon-star">{item.product_rating}</i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>
                    
                    </div>

                </div>
            </div>
        </div>
        </Link>
        )

})
}


    
        }else{
            return(
                                <div className="page_loader">
                                <h3>Loading...</h3>
                                <img src="/images/loader.gif" alt="Loading Image" height="500px" width="100%"/>
                                </div>
            )
        }
    }

    render() {
        return (
            <>
{this.Print_All_Brands(this.props)}
            </>
        )
    }


    

}


export default DisplayByBrand;