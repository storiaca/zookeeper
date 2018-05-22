import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectAnimal, getAnimalsList } from '../actions/index';


class AnimalList extends Component {

	// constructor
	constructor() {
		super();
	}

	// lifecycle methods
	//----------------------------
	componentWillMount() {
		this.props.getAnimalList();
	}

	// own method
	//-----------------------------
	renderAnimalsList() {
		return this.props.animalList.map(animal => {
			return (
				<li key={animal.id}
					className="list-group-item"
					onClick={() => { this.props.selectAnimal(animal) }} >
					<p>Name: {animal.name}</p>
				</li>
			)
		});
	}

	// react render
	//-----------------------------
	render() {
		console.log(this.props);

		if(!this.props.animalList) {
			return(<div>Loading...</div>)
		}
		return (
			<div>
				<ul className="list-group mb-3">
					{this.renderAnimalsList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		selectedAnimal: state.selectedAnimal,
		animalList: state.animalList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnimal,
		getAnimalList: getAnimalsList
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);