import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalAdd extends Component {
	constructor() {
		super();

		this.state = {
			name : '',
			species: '',
			gender: 'm',
			age: 0
		}
	}

	onNameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	onSpeciesChange = (e) => {
		this.setState ({
			species: e.target.value
		})
	}

	onAgeChange = (e) => {
		this.setState({
			age: parseInt(e.target.value)
		})
	}

	onSelectGenderChange = (e) => {
		this.setState({
			gender: e.target.value
		})
	}

	onButtonSubmit = () => {
		console.log('submit state', this.state);
	}

  render() {
		//console.log('animal state', this.state);
		return(
			<div className="form-group">
				<form>
					<div className="row">
						<div className="col">
							<label>Name:</label>
							<input type="text" onChange={this.onNameChange.bind(this)} value={this.state.name} className="form-control" />
						</div>

						<div className="col">
							<label>Species:</label>
							<input type="text" onChange={this.onSpeciesChange.bind(this)} value={this.state.species} className="form-control" />
						</div>

						<div className="col">
							<label>Gender:</label>
							<select onChange={this.onSelectGenderChange.bind(this)} className="form-control">
								<option value="m">Male</option>
								<option value="f">Female</option>
							</select>
						</div>

						<div className="col">
							<label>Age:</label>
							<input type="number" onChange={this.onAgeChange.bind(this)} value={this.state.age} className="form-control" />
						</div>
					</div>
				</form>
				<button onClick={this.onButtonSubmit} className="btn btn-danger">Add Animal</button>
			</div>
		);
	}  
}

export default AnimalAdd;