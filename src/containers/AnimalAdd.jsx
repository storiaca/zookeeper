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
  render() {
		console.log('animal state', this.state.name);
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
							<input type="text" className="form-control" />
						</div>

						<div className="col">
							<label>Gender:</label>
							<select className="form-control">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>

						<div className="col">
							<label>Age:</label>
							<input type="number" className="form-control" />
						</div>
					</div>
				</form>
				<button className="btn btn-danger">Add Animal</button>
			</div>
		);
	}  
}

export default AnimalAdd;