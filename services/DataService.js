import config from '../config.json';// assert {type: 'json'};

function fetchBackend( endpoint , param ) {
	if( ! (param instanceof URLSearchParams) ) param = new URLSearchParams(param);

	const URI = `${config.backend.protocol}://${config.backend.adress}:${config.backend.port}${endpoint}?${param}`
	console.log(URI)
	return fetch(URI).then( res => res.json() );
}

function getStats() {
	return fetchBackend('/statistics',{});
}

export { getStats };