import React from 'react';
import './quicksearch.css';
import {Link} from 'react-router-dom'


const QuickSearch= (props)=>{	
 const listMeals=({mealData})=>{
	 if(mealData){
		 return mealData.map((item)=>{
			// here it will return block as many  our mealtypes are 
			return(
				<Link to={`/list/${item.mealtype}`}>
					{/* this link is used direct page from one page to other  */}
					<div className="title">	
						<div className="row">
							<div className="col-sm-5 col-md-5 col-lg-5 tilecomponent1">
								<img src={`./images/${item.name}.png`} alt="I"/>
								{/* comment- dyanamic image from local storage adding */}
							</div>
							<div className="col-sm-7 col-md-7 col-lg-7 tilecomponent2">
								<div className="compheading">{item.name}</div>
								<div className="compsubheading">Start your day with exclusive breakfast</div>
							</div>
						</div>
					</div>
				</Link>

			 )
		 })
	 }
 }
	return(
		<div>	
			<div className="container">
				<div className="row px-0">
					<div className="col-12 header">
						<p className="head1">Quick Searches</p>
						<p className="head2">Discover restaurants by meal type</p>
					</div>
				</div>
			</div>

			<div className="container">	 
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12 px-0">
						{listMeals(props)}
						
						
					
						</div>
					</div>
				</div>
			</div>	 
			)

}


export default QuickSearch