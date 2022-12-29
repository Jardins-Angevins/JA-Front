import { FlatList, Text, View } from 'react-native';

import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import PlantBox from '../components/PlantBox.js';
import SuperComponent from '../components/SuperComponent.js';

import { getPlantList } from '../services/DataService.js';


class WikiListView extends SuperComponent {

	state = {
		buffer: [],
		nextPage: 1,
		status: '☑️',
	};

	componentDidMount() {
		this.setState({ status: '📥' })
		getPlantList(0)
			.then(data => this.setState({ buffer: data.species }))
			.then(() => this.setState({ status: '☑️' }))
	}

	endReached() {
		this.setState({ status: '📥' })
		getPlantList(this.state.nextPage)
			.then(data => {
				for (let info of data.species) {
					this.state.buffer.push(info)
				}
			})
			.then(() => this.setState({ status: '☑️' }))
			.catch(() => this.setState({ status: '✅' }))
		this.setState({ nextPage: this.state.nextPage + 1 })
	}

	renderItem({ index }) {
		return <PlantBox nominalNumber={this.state.buffer[index].nominalNumber} navigator={this.advancedNavivate('wiki-plant')} />;
	}

	render() {
		return (
			<View style={appStyles.app}>

				<Decoration />

				<Text
					style={{
						position: 'absolute',
						top: '1%',
						right: '1%',
					}}>
					{this.state.status}
				</Text>

				<View style={{ marginTop: 50 }}><Text> </Text></View>

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
