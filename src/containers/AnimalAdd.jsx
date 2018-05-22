import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalAdd extends Component {
  render() {
		return(
			<div className="form-group">
				<form>
					<label>Name:
						<input type="text" className="form-control"/>
					</label>

					<label>Species:
						<input type="text" className="form-control"/>
					</label>

					<label>Gender:
						<select className="form-control">
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</label>

					<label>Age:
						<input type="number" className="form-control"/>
					</label>
				</form>
			</div>
		);
	}  
}

export default AnimalAdd;