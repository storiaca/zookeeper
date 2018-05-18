import React, { Component } from 'react';

import AnimalList from './AniamalList';

class App extends Component {

    render() {
        return (
          <div className="container app-container">
            <h4>App component</h4>
						<AnimalList />
          </div>
        )
    }
}

export default App;