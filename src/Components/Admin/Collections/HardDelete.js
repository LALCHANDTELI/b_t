import  React , {Component} from "react";
const delete_product_api = "https://apibootwale.herokuapp.com/delete_product";

class HardDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return(
          <>
          </>
        )
    }


    componentDidMount(){
        fetch(`${delete_product_api}/${this.props.match.params.product_id}`,
        {
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then((response)=>{ 
            this.props.history.push("/out_of_stock");
         })
        
    }
}

export default HardDelete;