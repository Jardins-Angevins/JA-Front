import config from '../config.json';// assert {type: 'json'};

function fetchBackend( endpoint , param ) {
	if( ! (param instanceof URLSearchParams) ) param = new URLSearchParams(param);

	const URI = `${config.backend.protocol}://${config.backend.adress}:${config.backend.port}${endpoint}?${param}`

	return fetch(URI).then( res => res.json() );
}

function getStats() {
	return fetchBackend('/statistics',{});
}

function getMap( pos ) {
	return fetchBackend(`/map`,{
		"lat": pos.latitude,
		"dlat": pos.latitudeDelta,
		"long": pos.longitude,
		"dlong": pos.longitudeDelta
	});
}

function getPlant( nominalNumber ) {
	return fetchBackend('/species',{nominalNumber});
}

export { getStats , getMap , getPlant };