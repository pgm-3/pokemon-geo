// imports

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
    // get pokemon from cache or api
  },
  async getPosition() {
    // get position of user
  },
  setLocationsForPokemon() {
    // give each pokemon a random location, withing the radius
  },
  createMap() {
    // create the map
    // create a marker of your position
    // create a marker for each pokemon
  },
  createMarker(data) {
    // create dom element
    // create marker and add to map
  },
};

// initialize the app
app.init();

// made with <3 for PGM by Frederick Roegiers
