// get random coordinates, based on a center and a radius in meters
export const randomLocation = (center, radius) => {
  var y0 = center.latitude;
  var x0 = center.longitude;
  var rd = radius / 111300; //about 111300 meters in one degree

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x / Math.cos(y0);

  var newlat = y + y0;
  var newlon = xp + x0;

  return {
    latitude: newlat.toFixed(5),
    longitude: newlon.toFixed(5),
    distance: distance(center.latitude, center.longitude, newlat, newlon).toFixed(2),
  };
};

// calculate the distance between two coordinates
export const distance = (lat1, lon1, lat2, lon2) => {
  var R = 6371000;
  var a = 0.5 - Math.cos(((lat2 - lat1) * Math.PI) / 180) / 2 + (Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * (1 - Math.cos(((lon2 - lon1) * Math.PI) / 180))) / 2;
  return R * 2 * Math.asin(Math.sqrt(a));
};

// shuffle an array
export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// handle geolocation coordinates as a Promise
export const getCoords = async () => {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return {
    longitude: pos.coords.longitude,
    latitude: pos.coords.latitude,
  };
};
