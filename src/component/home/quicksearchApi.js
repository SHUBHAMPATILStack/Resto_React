import React,{Component} from 'react';
import QuickSearch from './quicksearch';

const Murl="https://shubhamstack.herokuapp.com/mealtype"

class QuickSearchApi extends Component{
    constructor(){
        super()

        this.state={
           mealType:''
        }
    }

    render(){
        return(
            <QuickSearch mealData={this.state.mealType}/>
        )
    }

    componentDidMount(){
        fetch(Murl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearchApi