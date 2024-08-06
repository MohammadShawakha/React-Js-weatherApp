function getGeolocation() {
  return new Promise(function (resolve, reject) {
    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => reject({ lat: 0, lon: 0 })
    );
  });
}
export { getGeolocation };
