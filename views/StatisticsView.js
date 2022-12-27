import { Component } from 'react';
import { View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import StatBox from '../components/StatBox.js';

import { getStats } from '../services/DataService.js';


class StatisticsView extends Component {

	state = {
		pictureCount: '...',
		contributionCount: '...',
		downloadCount: '...',
		speciesCount: '...',
		plantsCount: '...'
	};

	componentDidMount() {
		getStats().then( data => this.setState(data) )
	}
	render() {
		return (
			<View style={appStyles.app}>

				<View style={appStyles.fullWidth}>
					<AppTitle first="Données" last="Statistiques" />
				</View>

				<View style={{marginTop: '20%', width: '80%'}}>
					<StatBox
						value={this.state.speciesCount}
						desc="Nombre d'essences différentes"
						icon_src={require("../assets/stats-icon/A.png")} />
					
					<StatBox
						value={this.state.plantsCount}
						desc="Nombre de specimens recencés"
						icon_src={require("../assets/stats-icon/B.png")} />
					
					<StatBox
						value={this.state.downloadCount}
						desc="Nombre de téléchargement"
						icon_src={require("../assets/stats-icon/C.png")} />

					<StatBox
						value={this.state.contributionCount}
						desc="Nombre de contributions"
						icon_src={require("../assets/stats-icon/D.png")} />

					<StatBox
						value={this.state.pictureCount}
						desc="Nombre de photos stockées"
						icon_src={require("../assets/stats-icon/E.png")} />
				</View>

				<Decoration/>
			</View>
		);
	}
}

export default StatisticsView;
