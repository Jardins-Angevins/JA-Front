import { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import Decoration from '../components/Decoration.js';

import { getPlant } from '../services/DataService.js';


class WikiPlantView extends Component {

	state = {
		refImage: require('../assets/plant-placeholder.png')
	};

	componentDidMount() {
		let id = this.props.route.params.nominalNumber;

		if( id == null ) {
			this.props.navigation.goBack();
		}

		getPlant( id )
		    .then( data => { data.refImage = {uri:`data:image/png;base64,${data.refImage}`} ; return data } )
			.then( data => this.setState(data) )
			.catch(this.props.navigation.goBack)
	}
	render() {
		return (
			<View style={{...appStyles.app,height:30}}>

				<View>
					<Image source={this.state.refImage} style={styles.icon}/>
				</View>

				<View style={{margin:50}}>
					<Text style={styles.commonName}>{this.state.name}</Text>
					<Text style={styles.scientificName}>{this.state.scientificName}</Text>
				</View>

				<View>
					<View style={{flexDirection: "row",justifyContent:'flex-start',alignItems:'center'}}>
					<Text style={styles.indicatorText}>Eau</Text>
					{
						([... new Array(5)].map((_,i)=>i)) .map( level =>
							<Image
								key={level}
								style={styles.indicator}
								source={ 
									(this.state.stats?.water > level) 
									? 
									require('../assets/stats-icon/water.png')
									:
									require('../assets/stats-icon/water_.png')
								}
							/>
						)
					}
					</View>
					<View style={{flexDirection: "row",justifyContent:'flex-start',alignItems:'center'}}>
					<Text style={styles.indicatorText}>Lumière</Text>
					{
						([... new Array(5)].map((_,i)=>i)) .map( level =>
							<Image
								key={level} 
								style={styles.indicator}
								source={ 
									(this.state.stats?.light > level) 
									? 
									require('../assets/stats-icon/light.png')
									:
									require('../assets/stats-icon/light_.png')
								}
							/>
						)
					}
					</View>
					<View style={{flexDirection: "row",justifyContent:'flex-start',alignItems:'center'}}>
					<Text style={styles.indicatorText}>Toxicité</Text>
					{
						([... new Array(5)].map((_,i)=>i)) .map( level =>
							<Image
								key={level} 
								style={styles.indicator}
								source={ 
									(this.state.stats?.toxicity > level) 
									? 
									require('../assets/stats-icon/toxicity.png')
									:
									require('../assets/stats-icon/toxicity_.png')
								}
							/>
						)
					}
					</View>
				</View>
			
				<Decoration/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	commonName: {
		color: 'black',
		fontWeight: 'bold',
		width: ( Dimensions.get('window').width ) - 20,
		fontSize: 32
	},
	scientificName: {
		color: 'black',
		fontStyle: 'italic',
	},
	indicatorText: {
		color: 'black',
		width: 70
	},
	indicator: { 
		width: 20,
		height: 20,
	},
	icon: {
		width: 180,
		height: 180,
		borderRadius: 5,
	}
});

export default WikiPlantView;
