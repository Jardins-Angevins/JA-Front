import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';

class MapMenuView extends Component {

	navigate(place) {
		return (function() {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	render() {
		return (
			<View style={styles.app}>
				<View style={{width: '60%'}}>
					<AppTitle first="Cartographie" last="Angevine"/>
				</View>

				<View style={{marginTop: '20%', width: '70%'}}>
					<Button color={'#333'} title={'📅  Vue général'} onPress={this.navigate('mapgeneral')}/>
					<Text style={styles.menuDesc}>Vue d’ensemble de tous les specimens recencés</Text>
					<Button color={'#333'} title={'🪴  Habitat specimen'} />
					<Text style={styles.menuDesc}>Vue de l’habitat actuel d’un specimen en particulier</Text>
					<Button color={'#333'} title={'🌹  Évolution specimen'} />
					<Text style={styles.menuDesc}>Vue de l’évolution de l’habitat d’un certain specimen</Text>
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
	menuDesc: {
		color: '#333',
		fontStyle: 'italic',
		marginBottom: 20
	}
});

export default MapMenuView;
