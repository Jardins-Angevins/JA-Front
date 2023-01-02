import { PixelRatio } from "react-native";
import Canvas, { Image } from "react-native-canvas";

export default class ImageService {

	static renderLocation = null;

	static transform( originalPath ) {
		return new Promise( (resolve) => {
			let cnv = ImageService.renderLocation;

			cnv.width = Math.ceil(256/PixelRatio.get());
			cnv.height = Math.ceil(256/PixelRatio.get());

			let ctx = cnv.getContext('2d');
			
			let img = new Image( ImageService.renderLocation );

			img.crossOrigin = '*';
			img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Hain_Eiche_Herbst_121696.jpg';//`file://${originalPath}`;
			img.addEventListener('load',() => {
				// Intermediate calculations
				let [w,h] = [img.width,img.height];
				let d = ~~( ((w>h) ? (w-h) : (h-w)) / 2 );
				// Position and size calculation
				let [sx,sy] = (w>h) ? ([d,0]) : ([0,d]);
				let [sw,sh] = (w>h) ? ([h,h]) : ([w,w]);
				let [dx,dy] = [0,0];
				let [dw,dh] = [Math.ceil(256/PixelRatio.get()),Math.ceil(256/PixelRatio.get())];
				// Reshape on canvas
				ctx.drawImage( img , sx , sy , sw , sh , dx , dy , dw , dh );
				// Convertion
				cnv.toDataURL()
					.then( img64 => img64.substr(1,img64.length-2)) // Patch for : https://github.com/iddan/react-native-canvas/issues/124
					.then( img64 => img64.replace(/^data:image\/png;base64,/,'') ) // Remove the leading "data:image/png;base64," metadata
					.then( resolve )
					.then( () => ctx.clearRect(0,0,256,256))
			});
		});
	}

	static setLocationRendering( ref ) {
		ImageService.renderLocation = ref;
	}
}