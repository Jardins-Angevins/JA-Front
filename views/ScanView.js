import { Component } from 'react';
import { Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'react-native-vision-camera';

import appStyles from '../assets/appStyles.js';

import Decoration from '../components/Decoration.js';
import CameraComponent from '../components/Camera.js';


class ScanView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			camRef: null
		};

		this.metadataCam = {};
	}
	handleCameraPermission(status) {
		switch (status) {
			case 'authorized':
				// Super ! ^^
				break;

			case 'denied':
				Alert.alert(
					"Permission(s) manquante(s)",
					"L'application requiert l'accès à votre camera",
					[{ text: 'Ok' }]
				);
				break;

			case 'not-determined':
				Camera.requestCameraPermission().then(this.handleCameraPermission.bind(this));
				break;

		}
	}

	componentDidMount() {
		Camera.getCameraPermissionStatus()
			.then(this.handleCameraPermission.bind(this))
	}

	takePicture() {
		this.metadataCam
			.camRef
			.current
			.takePhoto({ flash: 'off' })
			.then(plainData => `file://${plainData.path}`)
			.then(fetch)
			.then(res => res.blob())
			.then(blob => new Promise((resolve, reject) => {
				let reader = new FileReader();
				reader.readAsDataURL(blob);
				reader.onloadend = function () {
					resolve(reader.result)
				}
				reader.onerror = function (err) {
					reject(err);
				}
			}))
			.then(k => fetch('http://192.168.1.16:3000', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: k }) }))
			.then(console.log)
			.catch(console.error)
	}

	render() {

		return (
			<View style={appStyles.app}>
				<CameraComponent
					meta={this.metadataCam} />
				<Decoration />

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
				>
					<Text
						style={{
							fontSize: 22,
							width: 60,
							height: 60,
							textAlign: 'center',
							textAlignVertical: 'center'
						}} 
						onPress={this.takePicture.bind(this)}
					>📷</Text>
				</TouchableOpacity>



				<View
					style={{
						width: 40,
						height: 40,
						position: 'absolute',
						top: '1%',
						right: '1%',
					}}>

					<Button title={"💡"} color={'#303030B0'} />
				</View>
			</View>
		);
	}
}

export default ScanView;
