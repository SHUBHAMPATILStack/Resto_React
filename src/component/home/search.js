import React,{Component} from 'react';
import './search.css';

const lurl="https://shubhamstack.herokuapp.com/location";
const rurl="https://shubhamstack.herokuapp.com/restaurant?city="
class Search extends Component{
	constructor(){
		super()
	this.state={
		location:'',
		restaurants:''
		}
	}	
		renderCity=(data)=>{
			if(data){
				return data.map((item) =>{
					return(
						<option value={item.city}>
						{item.city_name}
						</option>
						)
				})
			}
		}   
		renderRestaurants=(data)=>{
			if(data){
				return data.map((item) =>{
					return(
						<option value={item._id}>
						{item.name}|{item.locality}
						</option>
						)
				})
			}
		} 

		// instead event can take any parameter
		handleCity=(event)=>{
			console.log(event.target.value);
			fetch(`${rurl}${event.target.value}`,{method:'GET'})
			.then((res)=>res.json())
			.then((data)=>{
				this.setState({restaurants:data})
			})

		}
		handleRestaurant=(event)=>{
			this.props.restauid(Number(event.target.value))
		}
	render(){
		return(

		<div className="container px-0">
			<div clasName="row ">
				<div className="px-0 col-12   imagecontainer">
					<img src="https://i.postimg.cc/76kStDSv/food-wallpaper.png" alt="" className="img-responsive fit-image"/>
					<span className="logo">
		                <b>e!</b>
		        	</span>	
		            <div className="heading m-0">
		    		    <p>Find the Best Restaurant, cafes, bars</p>
		    		   
		    		</div>
		    		<div className="locationSelector align-items-center">
		    			<select className="location " required onChange={this.handleCity}>
		                	<option>---select-----</option>
		                    {this.renderCity(this.state.location)}
		                </select>
						<select className="location " required onChange={this.handleRestaurant}>
		                	<option>---select-----</option>
		                    {this.renderRestaurants(this.state.restaurants)}
		                </select>
		    		</div>
				</div>
			</div>
		</div>
		)
		}

	componentDidMount(){
		fetch(lurl,{method:'GET'})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({location:data})
		})
	}
	}
	
export default Search