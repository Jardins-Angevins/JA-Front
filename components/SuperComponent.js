import { Component } from "react";

// Group every component usefull function
class SuperComponent extends Component {
	
	constructor(...args) {
		super(...args);
	}
	
	navigate(place) {
		return (function () {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	advancedNavivate(place) {
		return (function (param) {
			this.props.navigation.navigate(place,param)
		}).bind(this);
	}
}

export default SuperComponent;