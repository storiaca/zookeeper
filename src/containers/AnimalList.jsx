import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAnimal } from '../actions/index';
import { bindActionCreators } from 'redux';

class AnimalList extends Component {

	renderAnimalsList() {
		return this.props.animals.map((animal, i) => {
			//console.log('renderAnimalsList', animal);
			return (
				<li key={i} 
					className="list-group-item" 
					onClick={() => {this.props.selectAnimal(animal)} } >
					<p>Name: {animal.name}</p> 
				</li>
			)
		});
	}

  render() {
		//console.log('animal list', this);
		return(
      <div>
				<ul className="list-group">
					{this.renderAnimalsList()}
				</ul>
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
		selectAnimal
	}, dispatch)
}

//export default AnimalList;

export default connect( mapStateToProps, mapDispatchToProps)(AnimalList);