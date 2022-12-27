import { Component } from 'react';
import { Text, View , Dimensions } from 'react-native';

class AppTitle extends Component {

	render() {
		const marge = (Dimensions.get('window').width / 2) - 15;
		const margeA = marge - this.props.first.length * 4;
		const margeB = marge - this.props.last.length * 4;
		return (
			<View style={{width:Dimensions.get('window').width}}>
				<Text 
					style={{
						color:'#6AA84F',
						fontWeight:'800',
						fontSize: 30,
						margin: 0,
						padding: 0,
						marginRight: margeA,
						textAlign: 'right',
					}}
					>
					{this.props.first}
				</Text>
				<Text
					style={{
						color:'#703826',
						fontWeight:'900',
						fontSize: 30,
						margin: 0,
						padding: 0,
						marginLeft: margeB,
						textAlign: 'left',
					}}
					>
					{this.props.last}
				</Text>
			</View>
		)
	}

}

export default AppTitle;