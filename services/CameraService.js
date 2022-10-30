import { Camera } from 'react-native-vision-camera';

export default class CameraService {

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
}