import  React , {Component} from "react";

class SortingPrice extends Component {


SetFilterData=(event)=>{

    fetch(`https://apibootwale.herokuapp.com/sort_company_by_price/${this.props.Brand}/${event.target.value}`,
    {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
            )
            .then((response) =>{ return response.json() })
            .then((data) =>{this.props.SortingData(data)})
}


    render() {
        return(
            <>

<h3>Sorting Price...</h3>
<ul onChange={this.SetFilterData}>
                <div class="row">
        

        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio price-sorting-1 form-control">
            <li><input type="radio" name="sorting" value="1" />Low To High</li>   
            </label>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 ">
            <label className="radio price-sorting-2 form-control">
            <li><input type="radio" name="sorting" value="-1" />High To Low</li>   
            </label>
        </div>
       
       
       
       


                </div>
            </ul>


<hr/>
           
            </>
        )
    }
}

export default SortingPrice;