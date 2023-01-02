import Canvas, { Image } from "react-native-canvas";

export default class ImageService {

	static renderLocation = null;

	static transform( originalPath ) {
		return new Promise( (resolve) => {
			let cnv = ImageService.renderLocation;
			let ctx = cnv.getContext('2d');
			let img = new Image( ImageService.renderLocation );

			cnv.width = 256;
			cnv.height = 256;

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
				let [dw,dh] = [256,256];
				// Reshape on canvas
				ctx.drawImage( img , sx , sy , sw , sh , dx , dy , dw , dh );
				// Convertion
				cnv.toDataURL().then( resolve )
			});
		});
	}

	static setLocationRendering( ref ) {
		ImageService.renderLocation = ref;
	}
}