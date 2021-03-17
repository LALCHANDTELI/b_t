import  React, { Component} from 'react';
import {Link} from 'react-router-dom';

class PriceFilters extends Component{


    filter = (event) => {
        fetch(`https://apibootwale.herokuapp.com/filter_products/price/${event.target.value}`,
{
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}
        )
        .then((response) =>{ return response.json() })
        .then((data) =>{this.props.PriceFilter(data)})


    }
    render(){
        return (
            <>
<h3>Price</h3>
<ul onChange={this.filter}>
                <div class="row">
            
        <div class="col-sm-6 col-md-3 col-lg-2 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="500" />500</li>   
            </label>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-2 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value=">.1000" />Under 1000</li>   
            </label>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-2 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value=">.3000" />Under 5000</li>   
            </label>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-2 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="<.10000" />Above 10000</li>   
            </label>
        </div>



                </div>
            </ul>


<hr/>
            </>
        )
    }
}


export default PriceFilters;