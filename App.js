import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.app}>
			<Text style={{color:'#3F3',fontSize:50}}> Hello World </Text>
		</View>
	);
}


const styles = StyleSheet.create({
	app: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});