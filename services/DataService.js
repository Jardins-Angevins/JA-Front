import config from '../config.json'; // assert { type : 'application/json'};

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
			throw new BadResponse( res.status , await res.text() ) 
	} );
}

function getStats() {
	return fetchBackend('/statistics',{});
}

function getMap( pos , args ) {
	let param = {
		"lat": pos.latitude,
		"dlat": pos.latitudeDelta,
		"long": pos.longitude,
		"dlong": pos.longitudeDelta
	};
	if( args?.nominalNumber ) {
		param.species = args.nominalNumber;
	}
	if( args?.year ) {
		param.year = args.year;
	}
	return fetchBackend(`/map`,param);
}

function getPlant( nominalNumber ) {
	return fetchBackend('/species/wiki',{nominalNumber});
}

function getPlantList( page ) {
	return fetchBackend(`/species/list`,{page});	
}

function postQuery( lat , long , image64 ) {
	//Params
	const URLparam = new URLSearchParams({lat,long});
	const BODYparam = JSON.stringify({image64});

	//URL
	const URL = `${config.backend.protocol}://${config.backend.adress}:${config.backend.port}/query?${URLparam}`;

	// Query
	return fetch(URL,{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:BODYparam,
	}).then( async res => {
		if( res.status == 201 ) {
			return [201,( await res.json()).prediction]
		} else {
			return [res.status,null];
		}
	})
}

export { BadResponse , getStats , getMap , getPlant , getPlantList , postQuery };