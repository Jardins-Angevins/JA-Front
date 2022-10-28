import { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

export function CameraComponent(props) {

	// Grab the device who run the stream
	const devices = useCameraDevices();
	const device = devices.back;

	// Create a reference for the stream and forward it to the parent
	const camera = useRef();
	props.meta.camRef = camera; 

	if(device) {
		return (
			<Camera
				style={StyleSheet.absoluteFill}

				device={device}
				ref={camera}

				isActive={true}
				photo={true}
				/>
		);
	} else {
		return (
			<View style={StyleSheet.absoluteFill} >
				<Text style={{fontSize:32}}>⏳</Text>
			</View>
		);
		
	}
}