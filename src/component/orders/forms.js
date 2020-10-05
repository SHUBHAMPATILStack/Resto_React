import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url="https://shubhamstack.herokuapp.com/restaurantDetails";
const burl="https://shubhamstack.herokuapp.com/placeorder";



class PlaceOrder extends Component{
    constructor(){
        super()
        
        this.state={
            order_id: Math.floor(Math.random()*10000),
            rest_name:'',
            phone:'',
            address:'',
            person:''
        }

    }

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }
    handleChangePhone=(event)=>{
        this.setState({phone:event.target.value})
    }
    handleChangeAddress=(event)=>{
        this.setState({address:event.target.value})
    }
    handleChangePerson=(event)=>{
        this.setState({person:event.target.value})
    }
    handleSubmit = ()=>{
        var data={
            '_id':this.state.order_id,
            'rest_id':this.state.rest_name,
            'name': this.state.name,
            'phone': this.state.phone,
            'address': this.state.address,
            'person': this.state.person
        }
    // console.log(data)
    
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/vieworder'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className='panel-heading'>
                        <h4>Place Booking</h4>
                    </div>
                    <div className='panel-body'>
                        <form>
                        <div className='form-group'>
                            <label className="control-label">order_id: </label>
                            <input type="text" name="order_id" readOnly className="form-control" value={this.state.order_id}/>
                        </div>
                        <div className='form-group'>
                            <label className="control-label">rest_name: </label>
                            <input type="text" name="rest_name"  readOnly className="form-control" value={this.state.rest_name}/>
                        </div>
                        <div className='form-group'>
                            <label className="control-label">User name: </label>
                            <input type="text" name="name" required className="form-control" value={this.state.name} onChange={this.handleChangeName}/>
                        </div>
                        <div className='form-group'>
                            <label className="control-label">Phone : </label>
                            <input type="text" name="phone" required className="form-control" value={this.state.phone} onChange={this.handleChangePhone}/>
                        </div>
                        <div className='form-group'>
                            <label className="control-label">address : </label>
                            <input type="text" name="address" required className="form-control" value={this.state.address} onChange={this.handleChangeAddress}/>
                        </div>
                        <div className='form-group'>
                            <label className="control-label" required>person no : </label>
                            <select name='person' value={this.state.person} className='form-control' onChange={this.handleChangePerson}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>    
                        </div>
                        <Link to={`/rest/${this.props.match.params.id}`} className="btn btn-danger">Cancel</Link>&nbsp;
                        <button className="btn btn-success"  onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            )
    }
    componentDidMount(){
        let restid=this.props.match.params.id;
        axios.get(`${url}/${restid}`)
        .then((response)=>{
            console.log(response.data.name)
            this.setState({rest_name:response.data[0].name})})
    }
    }
export default PlaceOrder; 