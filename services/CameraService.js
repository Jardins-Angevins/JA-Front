import { Camera } from 'react-native-vision-camera';
import React from 'react';
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
		console.log(CameraService.flashEnabled)
	}

	static getFlashState() {
		return CameraService.flashEnabled;
	}

	static async takePicture() {

	}
}