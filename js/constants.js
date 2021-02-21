export const MAP_TOKEN = "YOUR-PERSONAL-ACCESS-TOKEN";
export const MAP_AMOUNT_OF_POKEMON = 20; // how many will appear on the map?
export const MAP_RADIUS = 10000; // in meters
export const MAP_ICON_SIZE = 75; // pixels
export const MAP_OPTIONS = {
  container: "map", // element with id map
  style: "mapbox://styles/mapbox/dark-v10", // default style
  center: [51.034809, 3.729268], // default centered around ghent
  zoom: 11, // starting zoom
};

export const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151"; // 151 original pokemon
export const POKE_IMAGE_API = "https://pokeres.bastionbot.org/images/pokemon/"; // external url with very nize imagez
