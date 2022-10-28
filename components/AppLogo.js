import { Component } from 'react';
import { Text, View } from 'react-native';

class AppLogo extends Component {

	render() {
		return (
			<View style={{width: '100%'}}>
				<Text style={{color:'#6AA84F', fontWeight:'800', fontSize: 40, margin: 0, padding: 0, textAlign: 'left'}}> Jardins </Text>
				<Text style={{color:'#703826', fontWeight:'900', fontSize: 40, margin: 0, padding: 0, textAlign: 'right'}}> Angevins </Text>
			</View>
		)
	}

}

export default AppLogo;