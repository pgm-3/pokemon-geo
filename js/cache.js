// local storage acting as a json data cache
const writeToCache = (url, data) => localStorage.setItem(url, JSON.stringify(data));
const readFromCache = (url) => JSON.parse(localStorage.getItem(url)) || null;

export { readFromCache, writeToCache };
