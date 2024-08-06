function getImageUrl(name){
return new URL(`../appsData/appsImages/${name}`,import.meta.url).href
}
export {getImageUrl};