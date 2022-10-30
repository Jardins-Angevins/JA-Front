import { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

class AppLogo extends Component {

	render() {
		return (
			<View style={StyleSheet.absoluteFill}>
				<Image
					style={{
						width:200,
						height:200,
						position:'absolute',
						top:'0%',
						left:'0%',
						transform:[{ translateX: -50 } , {translateY: -40 } , {rotate: '0deg'}]
					}}
					source={require('../assets/plante-decorative/c.png')}
					/>
				<Image
					style={{
						width:200,
						height:200,
						position:'absolute',
						top:'0%',
						right:'0%',
						transform:[{ translateX: 40 } , {translateY: -110 } , {rotate: '-40deg'}]
					}}
					source={require('../assets/plante-decorative/d.png')}
					/>
				<Image
					style={{
						width:200,
						height:200,
						position:'absolute',
						bottom:'0%',
						left:'0%',
						transform:[{ translateX: -75 } , {translateY: 60 } , {rotate: '40deg'}]
					}}
					source={require('../assets/plante-decorative/b.png')}
					/>
				<Image
					style={{
						width:200,
						height:200,
						position:'absolute',
						bottom:'0%',
						right:'0%',
						transform:[{ translateX: 70 } , {translateY: 70 } , {rotate: '0deg'}]
					}}
					source={require('../assets/plante-decorative/b.png')}
					/>
			</View>
		);
	}

}

export default AppLogo;