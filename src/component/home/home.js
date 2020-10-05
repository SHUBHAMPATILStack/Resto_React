import React from 'react';
import Search from './search';
import QuickSearch1 from './quicksearchApi';

const Home = (props)=>{
	const handleHotel =(data)=>{
		props.history.push(`rest/${data}`)
	}
	return(
		<div>
			<Search restauid={(data) =>{handleHotel(data)}}/>
			<QuickSearch1/>
		</div>	
		)
}
export default Home