// imports
import { readFromCache, writeToCache } from "./cache.js";
import { getCoords, randomLocation, shuffleArray } from "./helpers.js";
import * as CS from "./constants.js";

// app functionality
const app = {
  init() {
    this.map = null;
    this.pokemon = [];
    this.userPosition = {};

    this.prepareMap();
  },
  async prepareMap() {
    // wait on pokemon fetch
    await this.fetchPokemon();

    // wait on current position
    await this.getPosition();

    // set random locations for all pokemon
    this.setLocationsForPokemon();

    // create the map
    this.createMap();
  },
  async fetchPokemon() {
    const cache = readFromCache(CS.POKE_API);

    if (!cache) {
      const response = await fetch(CS.POKE_API);
      const data = await response.json();
      this.pokemon = data.results;
      writeToCache(CS.POKE_API, this.pokemon);
    } else {
      this.pokemon = cache;
    }

    // shuffle and limit
    shuffleArray(this.pokemon);
    this.pokemon = this.pokemon.slice(0, CS.MAP_AMOUNT_OF_POKEMON);
  },
  async getPosition() {
    // get position of user
    if (navigator.geolocation) {
      this.userPosition = await getCoords();
      CS.MAP_OPTIONS.center = [this.userPosition.longitude, this.userPosition.latitude];
    }
  },
  setLocationsForPokemon() {
    // give each pokemon a random location, withing the radius
    this.pokemon.map((value) => {
      value.coords = randomLocation(this.userPosition, CS.MAP_RADIUS);
    });
  },
  createMap() {
    // create the map
    mapboxgl.accessToken = CS.MAP_TOKEN;
    this.map = new mapboxgl.Map(CS.MAP_OPTIONS);

    // create a marker of your position
    this.createMarker({
      name: "Your position",
      className: "marker marker-ball",
      imageUrl: "./images/pokeball.png",
      coords: {
        longitude: this.userPosition.longitude,
        latitude: this.userPosition.latitude,
        distance: 0,
      },
    });

    // create a marker for each pokemon
    this.pokemon.forEach((randomPokemon) => {
      // last part of url, before slash is the pokemon id
      const id = randomPokemon.url.split("/").slice(-2, -1)[0];

      const markerData = {
        name: randomPokemon.name,
        className: "marker marker-pokemon",
        imageUrl: CS.POKE_IMAGE_API + id + ".png",
        coords: randomPokemon.coords,
      };

      this.createMarker(markerData);
    });
  },
  createMarker(data) {
    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = `url(${data.imageUrl})`;
    el.style.width = `${CS.MAP_ICON_SIZE}px`;
    el.style.height = `${CS.MAP_ICON_SIZE}px`;

    const popupText = data.coords.distance > 0 ? `De pokemon ${data.name} is ${data.coords.distance}m verwijderd van jou.` : "Jouw positie";
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(popupText);

    new mapboxgl.Marker(el).setLngLat([data.coords.longitude, data.coords.latitude]).setPopup(popup).addTo(this.map);
  },
};

// initialize the app
app.init();
