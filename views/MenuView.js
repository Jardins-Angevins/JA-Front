import { Text, View, Button } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppLogo from '../components/AppLogo.js';
import Decoration from '../components/Decoration.js';
import SuperComponent from '../components/SuperComponent.js';


class MenuView extends SuperComponent {

	render() {
		return (
			<View style={appStyles.app}>
				<View style={{width: '60%'}}>
					<AppLogo/>
				</View>

				<View style={{marginTop: '20%', width: '70%'}}>
					<Button color={'#333'} title={'📷  Photographier'} onPress={this.navigate('scan')}/>
					<Text></Text>
					<Button color={'#333'} title={'ℹ️  Espèces'} onPress={this.navigate('wiki-list')}/>
					<Text></Text>
					<Button color={'#333'} title={'🗺  Cartographie'} onPress={this.navigate('map-menu')}/>
					<Text></Text>
					<Button color={'#333'} title={'📊  Statistiques'} onPress={this.navigate('statistics')}/>
				</View>

				<Decoration/>
			</View>
		);
	}
}

export default MenuView;
