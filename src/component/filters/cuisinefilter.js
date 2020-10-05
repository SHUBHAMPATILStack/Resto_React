import React, {Component} from 'react';
import axios from 'axios';

const url="https://shubhamstack.herokuapp.com/restaurantlist";

class CuisineFilter extends Component{
   
    cuisineLogic = (event)=>{
        let mealtype = sessionStorage.getItem('type');
        let cuisineType= event.target.value;
        let curl;
        if(cuisineType===""){
            curl= `${url}/${mealtype}`
        }else{
            curl=  `${url}/${mealtype}?cuisine=${event.target.value}`
        }
        axios.get(curl)
        .then((response)=>{this.props.datapercuisine(response.data)})
        console.log(curl)
    }
    render(){
        return(
            <React.Fragment>
                <center>CuisineFilter</center>
                <div onChange={this.cuisineLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North India
                    </label>
                    
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
            </React.Fragment>
        )
    }
}
export default CuisineFilter