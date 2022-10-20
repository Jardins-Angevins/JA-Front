import { Component } from 'react';
import { StyleSheet, Image, Text, View, Animated } from 'react-native';


import AppLogo from '../components/AppLogo.js';

class HomeView extends Component {

	state = {
		fadeAnim: new Animated.Value(0)
	};

	fadeIn = () => {
		Animated.timing(this.state.fadeAnim, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		}).start();
	};
	
	fadeOut = () => {
		Animated.timing(this.state.fadeAnim, {
			toValue: 0,
			duration: 1500,
			useNativeDriver: true,
		}).start();
	};

	componentDidMount() {
		this.fadeIn();
		setTimeout( (this.fadeOut).bind(this) , 3000 );
		setTimeout( () => this.props.navigation.navigate('menu') , 5000 );
		setTimeout( (this.neverComeBackAgainHere).bind(this) , 5555 );
	}

	neverComeBackAgainHere() {
		this.props.navigation.addListener( 'focus', (function() {
			this.props.navigation.navigate('menu')
		}).bind(this) );
	}

	render() {
		return (
			<View style={styles.app}>
				<Animated.View style={{opacity: this.state.fadeAnim,width: '60%'}}>
					<AppLogo/>
				</Animated.View>

				<Animated.Image
					style={{opacity: this.state.fadeAnim,width:200,height:200,position:'absolute',top:'50%',left:'50%',transform:[{ translateX: -20 } , {translateY: -90 }]}}
					source={require('../assets/plante-decorative/a.png')}
					></Animated.Image>
				<Animated.Image
					style={{opacity: this.state.fadeAnim,width:180,height:180,position:'absolute',top:'50%',left:'50%',transform:[{ translateX: -160 } , {translateY: -70 }]}}
					source={require('../assets/plante-decorative/c.png')}
					></Animated.Image>
				<Animated.Image
					style={{opacity: this.state.fadeAnim,width:200,height:200,position:'absolute',top:'50%',left:'50%',transform:[{ translateX: -80 } , {translateY: 120 }]}}
					source={require('../assets/plante-decorative/b.png')}
					></Animated.Image>
				<Animated.Image
					style={{opacity: this.state.fadeAnim,width:200,height:200,position:'absolute',top:'50%',left:'0%',transform:[{translateY: 120 }]}}
					source={require('../assets/plante-decorative/d.png')}
					></Animated.Image>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	app: {
		backgroundColor: '#DAFFE0',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 80,
	},
	partenaire: {
		flexDirection: 'row',marginTop: 80
	},
	partenaireLogo: {
		margin: 10,
		width: 80, height: 80 

	}
});

export default HomeView;

/*
					<Animated.Image
						source={require('../assets/event.png')}
						style={{ width: 100, height: 130 , opacity: this.state.fadeAnim}}/>
					<Animated.Image
						source={require('../assets/logo.png')} 
						style={{ width: 200, height: 200 , opacity: this.state.fadeAnim}}/>
					<Animated.View style={{...styles.partenaire, opacity: this.state.fadeAnim}}>
						<Image
							source={require('../assets/partenaires/ua.png')} 
							style={styles.partenaireLogo}/>
						<Image
							source={require('../assets/partenaires/pci.png')} 
							style={styles.partenaireLogo}/>

						<Image
							source={require('../assets/partenaires/cvec.png')} 
							style={styles.partenaireLogo}/>
					</Animated.View>*/