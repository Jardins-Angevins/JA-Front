import { Component } from 'react';
import { Text, View } from 'react-native';

class AppTitle extends Component {

	render() {
		return (
			<View style={{width: '100%'}}>
				<Text style={{color:'#6AA84F', fontWeight:'800', fontSize: 30, margin: 0, padding: 0, textAlign: 'left'}}> {this.props.first} </Text>
				<Text style={{color:'#703826', fontWeight:'900', fontSize: 30, margin: 0, padding: 0, textAlign: 'right'}}> {this.props.last} </Text>
			</View>
		)
	}

}

export default AppTitle;