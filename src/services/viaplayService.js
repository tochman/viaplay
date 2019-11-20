const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = "http://content.viaplay.se/pc-se/serier/samtliga";

export default {
  getData(){
    return fetch(proxyUrl + url);
  }
}