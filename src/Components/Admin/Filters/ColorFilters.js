import  React, { Component} from 'react';
import {Link} from 'react-router-dom';

class ColorFilters extends Component{

    filter = (event) => {
        fetch(`https://apibootwale.herokuapp.com/filter_products/color/${event.target.value}`,
{
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}
        )
        .then((response) =>{ return response.json() })
        .then((data) =>{this.props.ColorFilter(data)})


    }

    render(){
        return (
            <>
<h3>Search By Color</h3>
<ul onChange={this.filter}>
                <div class="row">
               

                <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Aqua" />Aqua</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Maroon" />Maroon</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Purple" />Purple</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Olive" />Olive</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Gray" />Gray</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Silver" />Silver</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Red" />Red</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Fuchsia" />Fuchsia</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Yellow" />Yellow</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="White" />White</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Green" />Green</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Teal" />Teal</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Lime" />Lime</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Blue" />Blue</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Navy" />Navy</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Pink" />Pink</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Brown" />Brown</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Black" />Black</li>   
            </label>
        </div>

                </div>
            </ul>

<hr/>
            </>
        )
    }
}


export default ColorFilters;