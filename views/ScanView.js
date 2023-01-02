import { View, Alert, Image, TouchableOpacity } from 'react-native';

import appStyles from '../assets/appStyles.js';

import Decoration from '../components/Decoration.js';
import CameraComponent from '../components/Camera.js';
import SuperComponent from '../components/SuperComponent.js';

import CameraService from '../services/CameraService.js';
import GeolocalisationService from '../services/GeolocalisationService.js';
import { postQuery } from '../services/DataService.js';
import ImageService from '../services/ImageService.js';
import Canvas from 'react-native-canvas';

class ScanView extends SuperComponent {

	constructor(props) {
		super(props);

		this.state = {
			camRef: null,
			flashA: require('../assets/interface/flash-light-button.png'),
			flashB: require('../assets/interface/flash-light-button_.png'),
			flash: require('../assets/interface/flash-light-button.png'),
		};

		this.metadataCam = {};
	}

	componentDidMount() {
		// Handle permissions
		CameraService
			.handlePermissions()
			.then( granted => { 
				if( ! granted ) 
					Alert.alert(
						'Permission(s) manquante(s)',
						"L'application requiert l'accès à votre camera",
						[{ text: 'Ok' }]
					);
			});
		GeolocalisationService
			.handlePermissions()
			.then( granted => { 
				if( ! granted ) 
					Alert.alert(
						'Permission(s) manquante(s)',
						"L'application requiert l'accès à votre position",
						[{ text: 'Ok' }]
					);
			});
		CameraService
			.setDevice( this.metadataCam )
	}

	async takePicture() {
		const img64 = await CameraService.takePicture();
		const pos = await GeolocalisationService.get();
		const [ code , id ] = await postQuery( pos.coords.latitude , pos.coords.longitude , img64 );
		if(id) {
			this.advancedNavivate('wiki-plant')({nominalNumber:id});
		} else {
			Alert.alert( 'Erreur' , `${code}` , [{ text: '😔' }] );
		}
	}

	render() {

		return (
			<View style={appStyles.app}>
				<CameraComponent
					meta={this.metadataCam} />
				<Decoration />
				<View
					style={{
						position: 'absolute',
						top: '0%',
						
						elevation: 0,
						width: 256,
						height: 256,
					}}><Canvas ref={ImageService.setLocationRendering} style={{width:256,height:256}} width={256} height={256} /></View>
				<TouchableOpacity 
					style={{
						position: 'absolute',
						bottom: '3%',
						
						borderRadius: 400,
						backgroundColor: '#703826',
						elevation: 0,
						width: 60,
						height: 60,

						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
					onPress={this.takePicture.bind(this)}
				>
					<Image
						source={require('../assets/interface/capture-button.png')}
						style={{
							fontSize: 22,
							width: 60,
							height: 60,
							textAlign: 'center',
							textAlignVertical: 'center'
						}}
					/>
				</TouchableOpacity>



				<TouchableOpacity 
					style={{
						position: 'absolute',
						top: '1%',
						right: '1%',
						
						borderRadius: 400,
						elevation: 0,
						width: 40,
						height: 40,

						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}

					onPress={()=>{
						this.setState({flash:CameraService.getFlashState().current ? this.state.flashB : this.state.flashA });
						CameraService.toggleFlash()}}
					
				>
					<Image
					source={ this.state.flash }
						style={{
							fontSize: 22,
							width: 40,
							height: 40,
							position: 'absolute',
							top: '1%',
							right: '1%',
							textAlign: 'center',
							textAlignVertical: 'center'
						}} 
					/>
					</TouchableOpacity>
			</View>
		);
	}
}

export default ScanView;
