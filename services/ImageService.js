import ImageResizer from 'react-native-image-resizer';

export default class ImageService {

	static async transform( originalPath ) {
		let img = await ImageService._reshape( originalPath );
		let b64 = await ImageService._format( img );
		return b64.replace(/^data:image\/png;base64,/,'')
	}

	static async _reshape( sourcePath ) {
		let reshapedImage = await ImageResizer.createResizedImage( 
			sourcePath , 256 , 256 , 'PNG' , 80 
			,
			undefined , undefined , false , { mode : 'stretch' } 
		);
		let reshapedPath = reshapedImage.uri;
		return reshapedPath;
	}

	static async _format( sourcePath ) {
		let binImage = await fetch(sourcePath);
		let blobImage = await binImage.blob();
		return new Promise( 
			(resolve, reject) => {
				let reader = new FileReader();
				reader.readAsDataURL(blobImage);
				reader.onloadend = () => resolve(reader.result);
				reader.onerror = (err) => reject(err);
			}
		);
	}

}