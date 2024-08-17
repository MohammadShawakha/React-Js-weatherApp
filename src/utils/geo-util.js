function getGeolocation() {
  return new Promise(function (resolve, reject) {
    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => resolve({ lat: 31.903765, lon: 35.203419 }),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: Infinity }
    );
  });
}
export { getGeolocation };
