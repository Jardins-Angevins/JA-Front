import { Camera } from 'react-native-vision-camera';
import React from 'react';
import ImageService from './ImageService.js';


export default class CameraService {

	static device = null;

	static flashEnabled = React.createRef();

	static async handlePermissions() {
		const cameraState = await Camera.getCameraPermissionStatus();

		switch (cameraState) {
			case 'authorized':
				return true;

			case 'denied':
				return false;

			case 'not-determined':
				await Camera.requestCameraPermission();
				return CameraService.handlePermissions();

			default: 
				return null;
		}
	}

	static setDevice( device ) {
		CameraService.device = device;
	}

	static toggleFlash() {
		CameraService.flashEnabled.current = !(CameraService.flashEnabled.current);
	}

	static getFlashState() {
		return CameraService.flashEnabled;
	}

	static async takePicture() {
		return await CameraService
			//Take photo (jpg)
			.device
			.camRef
			.current
			.takePhoto({ flash: CameraService.getFlashState().current ? 'on' : 'off' })
			.then(plainData => plainData.path)

			//Convert it to png and crop it
			.then( ImageService.transform )
			.then( k => {console.log(k);return k;} )

	}
}