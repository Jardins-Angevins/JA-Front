/*
 * rateLimit is a closure function taking an callback and a rate
 * the returned function will call the callback only if the last call was made more than rate milliseconds ago
 */
export default function rateLimit( callback , rate ) {
	return (function( ...args ) {
		let now = +(new Date());
		if( ( now - this.timestamp ) >= rate ) {
			this.timestamp = now;
			this.callback( ...args );
		}
	}).bind({
		callback,
		rate,
		timestamp: 0 
	})
}