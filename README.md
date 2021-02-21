## Pokemon GeO

_Voor deze oefening heb je kennis van DOM, (ES Modules,) Fetch API, Geo Location API, Local Storage API, Mapbox API nodig._

Maak een full screen web app waarbij je in een kaartweergave, in een vaste straal rondom je huidige positie een aantal willekeurige pokemons op een willekeurige positie laat verschijnen.

![Pokemon App](./.assets/pokemon-api.png?raw=true)

De pokemons haal je op via de <https://pokeapi.co/>.  
**Haal alleen de eerste originele 151 op.**

- Bewaar de pokemon data in de local storage (als een soort cache). Controleer bij elke reload of je de data lokaal hebt staan, anders (mag die opnieuw gefetcht worden).
- De afbeeldingen kan je van volgende API halen <https://pokeres.bastionbot.org/images/pokemon/15.png>, waarbij het cijfer overeenstemt met de ID van de corresponderende pokemon.
- Maak een kaartje aan, op basis van de Mapbox API.
  - Centreer de kaart rond je eigen accurate en up to date positie
  - Zet een custom marker (`pokeball`) op jouw positie
  - Zet een aantal willekeurige pokemon-markers op een willekeurige positie, binnen een straal van jouw positie op de kaart
- Als je klikt op een marker verschijnt een `Mapbox Popup` met daarin de naam en afstand van de respectievelijke pokemon.
  Je mag deze broncode gebruiken, hoewel je ook van scratch kan starten

**Screencast**
<https://www.youtube.com/watch?v=r3MbmVri-iAk&ab_channel=FrederickRoegiers>
