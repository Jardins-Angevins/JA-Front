import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import SuperComponent from '../components/SuperComponent.js';

class MapMenuView extends SuperComponent {

	render() {
		return (
			<View style={appStyles.app}>
				<View style={appStyles.fullWidth}>
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
						onPress={() => 
							Alert.alert(
								'🛑',
								"Selectionnez une espèce via le menu principal",
								[{ text: '🪴 Ok 🪴' }]
							)}
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
