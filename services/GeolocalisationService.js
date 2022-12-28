import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

export default class GeolocalisationService {

	static async handlePermissions() {
		return (
			await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION , { 'title' :'title' ,'message':'t'} )
			===
			PermissionsAndroid.RESULTS.GRANTED
		);
	}

	static get() {
		return new Promise( (resolve,reject) => {
			Geolocation.getCurrentPosition(
				resolve,
				reject,
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			)
		} );
	}
}