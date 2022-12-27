import { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import PlantBox from '../components/PlantBox.js';

import { getStats } from '../services/DataService.js';


class WikiListView extends Component {

	state = {
		buffer: [... new Array(100)].map((_,i)=>null)
	};

	componentDidMount() {
		getStats().then( data => this.setState(data) )
	}

	renderItem({index}) {
		return <PlantBox nominalNumber={index} />;
		if( this.state.buffer[index] == null ) {
			return (
				<Text style={{color:'black'}}>Empty</Text>
			  );
		} else {
			return (
				<Text>Hi</Text>
			  );
		}
	}

	endReached() {
		for(let i=0; i<10 ; i++) {
			this.state.buffer.push(null)
		}
	}

	render() {
		return (
			<View style={appStyles.app}>

				<Decoration/>

				<View style={{marginTop:50}}><Text> </Text></View>

				<View style={appStyles.fullWidth} >
					<AppTitle first="Liste des" last="Espèces" />
				</View>

				<FlatList
					data={this.state.buffer}
					renderItem={this.renderItem.bind(this)}
					onEndReached={this.endReached.bind(this)}
					/>
			</View>
		);
	}
}

export default WikiListView;
