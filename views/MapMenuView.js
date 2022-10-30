import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';

class MapMenuView extends Component {

	navigate(place) {
		return (function () {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	render() {
		return (
			<View style={appStyles.app}>
				<View style={{ width: '60%' }}>
					<AppTitle first="Cartographie" last="Angevine" />
				</View>

				<View style={{ marginTop: '20%', width: '70%' }}>
					<Button
						color={'#333'}
						title={'📅  Vue général'}
						onPress={this.navigate('map-general')} 
						/>
					<Text style={styles.menuDesc}>Vue d’ensemble de tous les specimens recencés</Text>

					<Button 
						color={'#333'}
						title={'🪴  Habitat specimen'}
						onPress={this.navigate('map-specimen')}
						/>
					<Text style={styles.menuDesc}>Vue de l’habitat actuel d’un specimen en particulier</Text>

					<Button
						color={'#333'}
						title={'🌹  Évolution specimen'}
						onPress={this.navigate('map-evol')}
						/>
					<Text style={styles.menuDesc}>Vue de l’évolution de l’habitat d’un certain specimen</Text>
				</View>

				<Decoration />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menuDesc: {
		color: '#333',
		fontStyle: 'italic',
		marginBottom: 20
	}
});

export default MapMenuView;
