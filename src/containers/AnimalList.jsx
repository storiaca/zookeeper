import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectAnimal, getAnimalsList } from '../actions/index';


class AnimalList extends Component {

	renderAnimalsList() {
		return this.props.animals.map((animal, i) => {
			return (
				<li key={i}
					className="list-group-item"
					onClick={() => { this.props.selectAnimal(animal) }} >
					<p>Name: {animal.name}</p>
				</li>
			)
		});
	}

	render() {
		//console.log(this.props);
		return (
			<div>
				<ul className="list-group mb-3">
					{this.renderAnimalsList()}
				</ul>
				<button
					onClick={() => { this.props.getAnimalList() }}
					className="btn btn-success">Click me to fetch server</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		selectedAnimal: state.selectedAnimal
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnimal,
		getAnimalList: getAnimalsList
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);