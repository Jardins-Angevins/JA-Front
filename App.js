import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

import HomeView from './views/HomeView.js';
import MenuView from './views/MenuView.js';
import StatisticsView from './views/StatisticsView.js';
import ScanView from './views/ScanView.js';
import MapMenuView from './views/MapMenuView.js';
import MapGeneralView from './views/MapGeneralView.js';
import MapSpecimenView from './views/MapSpecimenView.js';
import MapEvolView from './views/MapEvolView.js';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer >
			<Stack.Navigator>
				<Stack.Screen name="home" component={HomeView} options={{ headerShown: false }} />

				<Stack.Screen name="menu" component={MenuView} options={{ headerShown: false }} />

				<Stack.Screen name="statistics" component={StatisticsView} options={{ headerShown: false }} />

				<Stack.Screen name="scan" component={ScanView} options={{ headerShown: false }} />

				<Stack.Screen name="map-menu" component={MapMenuView} options={{ headerShown: false }} />
				<Stack.Screen name="map-general" component={MapGeneralView} options={{ headerShown: false }} />
				<Stack.Screen name="map-specimen" component={MapSpecimenView} options={{ headerShown: false }} />
				<Stack.Screen name="map-evol" component={MapEvolView} options={{ headerShown: false }} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}