import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AppLogo from '../components/AppLogo.js';
import Decoration from '../components/Decoration.js';

class StatisticsView extends Component {

	render() {
		return (
			<View style={styles.app}>
				<View style={{width: '60%'}}>
					<Text style={{color:'#6AA84F', fontWeight:'800', fontSize: 30, margin: 0, padding: 0, textAlign: 'left'}}> Données </Text>
					<Text style={{color:'#703826', fontWeight:'900', fontSize: 30, margin: 0, padding: 0, textAlign: 'right'}}> Statistiques </Text>
				</View>

				<View style={{marginTop: '20%', width: '80%'}}>
					<View style={styles.statBox}>
						<Image
							source={require('../assets/stats-icon/A.png')}
							style={styles.statLogo}
							/>
						<View style={styles.statText}>
							<Text style={styles.statData}> 6521 </Text>
							<Text style={styles.statDesc}> Nombre d'essences différentes </Text>
						</View>
					</View>

					<View style={styles.statBox}>
						<Image
							source={require('../assets/stats-icon/B.png')}
							style={styles.statLogo}
							/>
						<View style={styles.statText}>
							<Text style={styles.statData}> 6521 </Text>
							<Text style={styles.statDesc}> Nombre de specimens recencés </Text>
						</View>
					</View>

					<View style={styles.statBox}>
						<Image
							source={require('../assets/stats-icon/C.png')}
							style={styles.statLogo}
							/>
						<View style={styles.statText}>
							<Text style={styles.statData}> 6521 </Text>
							<Text style={styles.statDesc}> Nombre de téléchargement </Text>
						</View>
					</View>

					<View style={styles.statBox}>
						<Image
							source={require('../assets/stats-icon/D.png')}
							style={styles.statLogo}
							/>
						<View style={styles.statText}>
							<Text style={styles.statData}> 6521 </Text>
							<Text style={styles.statDesc}> Nombre de contributions </Text>
						</View>
					</View>

					<View style={styles.statBox}>
						<Image
							source={require('../assets/stats-icon/E.png')}
							style={styles.statLogo}
							/>
						<View style={styles.statText}>
							<Text style={styles.statData}> 6521 </Text>
							<Text style={styles.statDesc}> Nombre de photos stockées </Text>
						</View>
					</View>
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


	statBox: {
		display:'flex',
		flexDirection:'row'
	},
	statLogo: {
		width:40,
		height:40,
		margin:10
	},
	statText: {
		display:'flex',
		flexDirection:'column'
	},
	statData: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22
	},
	statDesc: {
		color: 'black',
		fontWeight: '300',
		fontSize: 14,
		fontStyle: 'italic'
	}
});

export default StatisticsView;
