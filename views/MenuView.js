import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppLogo from '../components/AppLogo.js';
import Decoration from '../components/Decoration.js';

class MenuView extends Component {

	render() {
		return (
			<View style={styles.app}>
				<View style={{width: '60%'}}>
					<AppLogo/>
				</View>

				<View style={{marginTop: '20%', width: '70%'}}>
					<Button color={'#333'} title={'📷  Reconaissance'}>📷 </Button>
					<Text></Text>
					<Button color={'#333'} title={'ℹ️  Wiki'}></Button>
					<Text></Text>
					<Button color={'#333'} title={'🗺  Carte'}></Button>
				</View>

				<Decoration/>
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
	},
	menuButton: {
		padding: '5pt'
	}
});

export default MenuView;
