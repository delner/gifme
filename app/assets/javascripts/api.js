// API base class: Describes endpoints we can call to get image data.
// This implementation is considered 'abstract', and should be extended.
GifMe.Lib.API = Class.extend({
  init: function init() { },
  // Abstract behavior
  searchImagesByTag: function requestData(tag, options, callback) { return; },
  getImageById: function requestTargets(id, options, callback) { return; },
  getRandomImage: function requestMessages(tag, options, callback) { return; }
});

// API implementation for Giphy
GifMe.Lib.GiphyAPI = GifMe.Lib.API.extend({
  init: function init(apiKey, options) {
    options = options || {};
    init.base.call(this, options);
    this.apiKey = apiKey || "dc6zaTOxFJmzC"; // Use public GIPHY key by default
  },
  baseUri: "http://api.giphy.com/v1/",
  // Implemented behavior
  searchImagesByTag: function searchImagesByTag(tag, options, callback) {
    var url = this.baseUri + "gifs/search?api_key=" + this.apiKey + "&q=" + this.prepareTag(tag);
    this.makeRequest(url, callback);
    return;
  },
  getImageById: function getImageById(id, options, callback) {
    var url = this.baseUri + "gifs/" + id + "?api_key=" + this.apiKey;
    this.makeRequest(url, callback);
    return;
  },
  getRandomImage: function getRandomImage(tag, options, callback) {
    var url = this.baseUri + "gifs/random?api_key=" + this.apiKey + "&tag=" + this.prepareTag(tag);
    this.makeRequest(url, callback);
    return;
  },
  makeRequest: function makeRequest(endpoint, callback) {
    $.ajax({
      url: endpoint,
      dataType: 'json',
      cache: false,
      success: function(data) {
        callback(data.data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(endpoint, status, err.toString());
      }.bind(this)
    });
    return;
  },
  prepareTag: function prepareTag(tag) {
    return tag.trim().replace(" ","+");
  }
});

// If necessary, we could define another resource to retrieve image data from
// GifMe.Lib.CustomAPI = GifMe.Lib.API.extend({});

// Choose which API we use
GifMe.API = new GifMe.Lib.GiphyAPI();