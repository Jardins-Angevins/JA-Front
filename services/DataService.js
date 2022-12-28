import config from '../config.json';// assert {type: 'json'};

class BadResponse extends Error {
	constructor( code , res ) {
		super( `[${code}] ${res}` )
		this.code = code;
	}
}

async function fetchBackend( endpoint , param ) {
	if( ! (param instanceof URLSearchParams) ) param = new URLSearchParams(param);

	const URI = `${config.backend.protocol}://${config.backend.adress}:${config.backend.port}${endpoint}?${param}`

	return fetch(URI).then( async res => {
		if( ~~(res.status/100) == 2 )
			return res.json();
		else
			throw BadResponse( res.status , await res.text() ) 
	} );
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
	return fetchBackend('/species/wiki',{nominalNumber});
}

function getPlantList( page ) {
	return fetchBackend(`/species/list`,{page});	
}

export { BadResponse , getStats , getMap , getPlant , getPlantList };