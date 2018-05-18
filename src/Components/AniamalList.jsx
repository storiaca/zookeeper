import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalList extends Component {

  render() {
		console.log('animal list', this.props);

    return(
      <div>AnimalList Component</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		foobar: 'kitt',
	}
}

//export default AnimalList;
export default connect(mapStateToProps)(AnimalList);