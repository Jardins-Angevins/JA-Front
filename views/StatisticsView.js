import { Component } from 'react';
import { View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import StatBox from '../components/StatBox.js';

class StatisticsView extends Component {

	render() {
		return (
			<View style={appStyles.app}>

				<View style={{width: '60%'}}>
					<AppTitle first="Données" last="Statistiques" />
				</View>

				<View style={{marginTop: '20%', width: '80%'}}>
					<StatBox
						value={6521}
						desc=" Nombre d'essences différentes"
						icon_src={require("../assets/stats-icon/A.png")} />
					
					<StatBox
						value={6521}
						desc="Nombre de specimens recencés"
						icon_src={require("../assets/stats-icon/B.png")} />
					
					<StatBox
						value={6521}
						desc="Nombre de téléchargement"
						icon_src={require("../assets/stats-icon/C.png")} />

					<StatBox
						value={6521}
						desc="Nombre de contributions"
						icon_src={require("../assets/stats-icon/D.png")} />

					<StatBox
						value={6521}
						desc="Nombre de photos stockées"
						icon_src={require("../assets/stats-icon/E.png")} />
				</View>

				<Decoration/>
			</View>
		);
	}
}

export default StatisticsView;
