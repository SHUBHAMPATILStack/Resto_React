import React, {Component} from 'react';
import axios from 'axios';
// another way to call 
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisinefilter';
import CostFilter from '../filters/costfilter';


const lurl="https://shubhamstack.herokuapp.com/restaurant?mealtype=";


class Listing extends Component{
    constructor(props){
        super(props)
        this.state={
            restListing:''
        }
    }
    setDataPerFilter(sortedData){
        this.setState({restListing:sortedData})
    }

    render(){
                console.log(this.props.match.params.id)

        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <CuisineFilter datapercuisine={(data)=>{this.setDataPerFilter(data)}}/>
                        <hr/>
                        <CostFilter datapercost={(data)=>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restdata={this.state.restListing}/>
                    </div>
                </div>
            </div>
        )
    }

    
    componentDidMount(){
        var mealId=this.props.match.params.id;
        sessionStorage.setItem('type',mealId);
        axios.get(`${lurl}${mealId}`)
        .then((response) => {this.setState({restListing:response.data})})
    }
}



export default Listing