import { useLinkProps } from "@react-navigation/native";
import { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

export function CameraComponent(props) {

	const devices = useCameraDevices();
	const device = devices.back;
	const camera = useRef();

	this.test = 'hi';

	props.meta.camRef = camera; 

	if(device) {
		return <Camera
			style={StyleSheet.absoluteFill}
			device={device}
			isActive={true}
			ref={camera}
			photo={true}
			/>
	} else {
		<Text>Hi</Text>
	}
}