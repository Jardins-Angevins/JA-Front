import { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import PlantBox from '../components/PlantBox.js';

import { getPlantList } from '../services/DataService.js';


class WikiListView extends Component {

	state = {
		buffer: [],
		nextPage: 1,
	};

	componentDidMount() {
		getPlantList(0)
			.then( data => this.setState({buffer:data.species}) )
	}

	endReached() {
		getPlantList( this.state.nextPage )
			.then( data => {
				for(let info of data.species) {
					this.state.buffer.push(data)
				}
			})
		this.setState({nextPage:this.state.nextPage+1})
		console.log(this.state.nextPage)
	}

	advancedNavivate(place) {
		return (function (param) {
			this.props.navigation.navigate(place,param)
		}).bind(this);
	}

	renderItem({index}) {
		return <PlantBox nominalNumber={this.state.buffer[index].nominalNumber} navigator={this.advancedNavivate('wiki-plant')}/>;
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
					style={appStyles.fullWidth}
					/>
			</View>
		);
	}
}

export default WikiListView;
