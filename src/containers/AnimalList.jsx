import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as _ from 'lodash';

import { selectAnimal, getAnimalsList, deleteAnimal } from '../actions/index';


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

	// own methods
	//-----------------------------
	
	renderAnimalsList() {
		return _.map(this.props.animalList, (animal) => {
			return (
				<li key={animal.id}
					className="list-group-item"
					onClick={() => { this.props.selectAnimal(animal) }} >
					<p>Name: {animal.name}</p>
					<button 
						onClick={() => {this.onDeleteButtonClick(animal.id)}}
						className="btn btn-danger">Delete</button>
				</li>
			)
		});
	}

	onDeleteButtonClick(id) {
		//console.log(id);
		this.props.deleteAnimal(id);
	}

	// react render
	//-----------------------------
	render() {
		//console.log('props', this.props);

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
		getAnimalList: getAnimalsList,
		deleteAnimal
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);