import  React, { Component} from 'react';


class BrandsFilters extends Component{

    filter = (event) => {
        fetch(`https://apibootwale.herokuapp.com/filter_products/company/${event.target.value}`,
{
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}
        )
        .then((response) =>{ return response.json() })
        .then((data) =>{this.props.BrandsFilter(data)})


    }



    render(){
        return (
            <>

                        <h3>Search By Brands</h3>
            <ul onChange={this.filter}>
                <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Stardox" />Stardox</li>   
            </label>
        </div>
<div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Nike" />Nike</li>   
            </label>
        </div>
<div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Vans" />Vans</li>   
            </label>
        </div>
<div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Jordan" />Jordan</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Adidas" />Adidas</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Redchip" />Redchip</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Woodland" />Woodland</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Puma" />Puma</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio">
            <li><input type="radio" name="bootFilter" value="Reebok" />Reebok</li>   
            </label>
        </div>
        

                </div>
            </ul>
<hr/>
            </>
        )
    }
}


export default BrandsFilters;