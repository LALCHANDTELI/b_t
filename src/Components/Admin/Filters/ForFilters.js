import  React, { Component} from 'react';
import {Link} from 'react-router-dom';

class ForFilters extends Component{


    filter = (event) => {
        fetch(`https://apibootwale.herokuapp.com/filter_products/for/${event.target.value}`,
{
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}
        )
        .then((response) =>{ return response.json() })
        .then((data) =>{this.props.ForFilter(data)})


    }
    render(){
        return (
            <>
<h3>Search For</h3>
<ul onChange={this.filter}>
                <div class="row">
            

        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Men" />Men</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Woman" />Woman</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Girls" />Girls</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Boys" />Boys</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Baby Girls" />Baby Girls</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Baby Boys" />Baby Boys</li>   
            </label>
        </div>


                </div>
            </ul>


<hr/>
            </>
        )
    }
}


export default ForFilters;