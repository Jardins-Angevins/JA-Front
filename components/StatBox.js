import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class StatBox extends Component {

	render() {
		return (

			<View style={styles.statBox}>
				<Image
					source={this.props.icon_src}
					style={styles.statLogo}
				/>
				<View style={styles.statText}>
					<Text style={styles.statData}> {this.props.value} </Text>
					<Text style={styles.statDesc}> {this.props.desc} </Text>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	statBox: {
		display: 'flex',
		flexDirection: 'row'
	},
	statLogo: {
		width: 40,
		height: 40,
		margin: 10
	},
	statText: {
		display: 'flex',
		flexDirection: 'column'
	},
	statData: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22
	},
	statDesc: {
		color: 'black',
		fontWeight: '300',
		fontSize: 14,
		fontStyle: 'italic'
	},


});

export default StatBox;