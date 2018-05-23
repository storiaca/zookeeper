import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {

	render() {

		if (!this.props.selectedAnimal) {
			return (
				<div>...</div>
			)
		}


		return (
			<div className="card">
				<h6>Details</h6>
				<p>Name : {this.props.selectedAnimal.name}</p>
				<p>Species : {this.props.selectedAnimal.species}</p>
				<p>Age : {this.props.selectedAnimal.age}</p>
				<p>Gender : {(this.props.selectedAnimal.gender === 'm') ? 'male' : (this.props.selectedAnimal.gender === 'f') ? 'female' : 'undefined gender'}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedAnimal: state.selectedAnimal
	}
}

export default connect(mapStateToProps)(AnimalDetails);