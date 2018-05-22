import React, { Component } from 'react';

import AnimalList from '../containers/AnimalList';
import AnimalDetails from '../containers/AnimalDetails';
import AnimalAdd from '../containers/AnimalAdd';

class App extends Component {
	render() {
    return (
      <div className="container app-container">
        <h4>App component</h4>
				<div className="form">
					<AnimalAdd />
				</div>
				<div className="row">
					<div className="col-4">
						<AnimalList />
					</div>
					<div className="col-8">
						<AnimalDetails />
					</div>
				</div>
			</div>
    )
  }
}

export default App;