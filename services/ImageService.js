export default function transform( originalPath ) {
	// TODO This should take the image located at originalPath which is a jpeg image
	// then take only the 256/256 pixels at the center and convert it to png and save it
	// and return the new path of the image
	// If it's esaier nor better return directly base64 png data

	// for now we will leave the image as it is
	return `file://${originalPath}`;
}