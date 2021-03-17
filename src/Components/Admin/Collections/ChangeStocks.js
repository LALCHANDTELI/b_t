import  React , {Component} from "react";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie'
const check_api_url = "https://apibootwale.herokuapp.com/check_admin";
const change_stocks_api = "https://apibootwale.herokuapp.com/update_product";
const check_product_api = "https://apibootwale.herokuapp.com/check_product";

class ChangeStocks extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <>
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



                    fetch(`${check_product_api}/${this.props.match.params.product_id}`,
                        {
                            method:'POST',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            }
                        
                        })
                        .then((response)=>{ return response.json() })
                        .then((data)=>{
                            data.map((product_data)=>{ 
                                let query = {}             
if(product_data.product_available){
    query = {product_available:false}
}else{
    query = {product_available:true}
}

                            fetch(`${change_stocks_api}/${this.props.match.params.product_id}`,
                        {
                            method:'PUT',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify(query)
                        })


                        this.props.history.push('/all_collections')


                            })
                            
                        
                        })


                        

                    





                
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

export default ChangeStocks;

