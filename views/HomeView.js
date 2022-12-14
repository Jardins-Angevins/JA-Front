import { StyleSheet, View, Animated } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppLogo from '../components/AppLogo.js';
import SuperComponent from '../components/SuperComponent.js';

class HomeView extends SuperComponent {

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
		setTimeout((this.fadeOut).bind(this), 3000);
		setTimeout( this.navigate('menu'), 5000);
		setTimeout((this.neverComeBackAgainHere).bind(this), 5555);
	}

	neverComeBackAgainHere() {
		this.props.navigation.addListener('focus', this.navigate('menu').bind(this) );
	}

	render() {
		return (
			<View style={{...appStyles.app,paddingTop:80}}>
				<Animated.View style={{ opacity: this.state.fadeAnim, width: '60%' }}>
					<AppLogo />
				</Animated.View>

				<Animated.Image
					style={{ opacity: this.state.fadeAnim, width: 200, height: 200, position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -20 }, { translateY: -90 }] }}
					source={require('../assets/plante-decorative/a.png')}
				></Animated.Image>
				<Animated.Image
					style={{ opacity: this.state.fadeAnim, width: 180, height: 180, position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -160 }, { translateY: -70 }] }}
					source={require('../assets/plante-decorative/c.png')}
				></Animated.Image>
				<Animated.Image
					style={{ opacity: this.state.fadeAnim, width: 200, height: 200, position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -80 }, { translateY: 120 }] }}
					source={require('../assets/plante-decorative/b.png')}
				></Animated.Image>
				<Animated.Image
					style={{ opacity: this.state.fadeAnim, width: 200, height: 200, position: 'absolute', top: '50%', left: '0%', transform: [{ translateY: 120 }] }}
					source={require('../assets/plante-decorative/d.png')}
				></Animated.Image>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	partenaire: {
		flexDirection: 'row',
		marginTop: 80,
	},
	partenaireLogo: {
		margin: 10,
		width: 80,
		height: 80,

	}
});

export default HomeView;