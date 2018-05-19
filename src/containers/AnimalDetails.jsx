import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {

	render(){
		console.log('details', this.props);

		if(!this.props.selectedAnimal) {
			return (
				<div>...</div>
			)
		}
		
		if(this.props.selectedAnimal) {
			return(
				<div className="card">
					<h6>Details</h6>
					<p>Species: {this.props.selectedAnimal.species}</p>
					<p>Age: {this.props.selectedAnimal.age}</p>
					<p>Gender: {(this.props.selectedAnimal.gender === 'm') ? 'male' : 'fenale'}</p>
	
				</div>
			)
		}
		

	}
}

function mapStateToProps(state) {
	return {
		selectedAnimal: state.selectedAnimal
	}
}

export default connect(mapStateToProps)(AnimalDetails);