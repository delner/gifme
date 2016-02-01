// Router base class: Describes URIs in our application.
// This implementation is considered 'abstract', and should be extended.
// (NOTE: By abstracting a router, this could permit us to more easily switch
//        to a single-page application implementation, if we wanted to.)
GifMe.Lib.Router = Class.extend({
  init: function init() { },
  // Abstract behavior
  home: function home() { return; },
  search: function search(term) { return; },
  view: function requestTargets(term, id) { return; }
});

// 'Location' implentation, which simply changes window location.
// It will generate a request back to our webserver to load the next page.
// (NOTE: This mimics a more 'traditional' web-application lifecycle.)
GifMe.Lib.LocationRouter = GifMe.Lib.Router.extend({
  init: function init(options) {
    options = options || {};
    init.base.call(this, options);

    // Extracts base URI for routing
    var a = document.createElement('a');
    a.href = window.location.href;
    this.baseUri = "http://" + a.host + '/'
  },
  // Implemented behavior
  home: function home() {
    this.goTo('');
  },
  search: function search(term) {
    this.goTo(this.prepareTerm(term));
  },
  view: function view(term, id) {
    this.goTo(this.prepareTerm(term) + '/' + id);
  },
  // Custom behavior
  prepareTerm: function prepareTerm(term) {
    return term.trim().replace(" ","+")
  },
  goTo: function goTo(endpoint) {
    window.location.href = this.baseUri + endpoint;
  }
});

// If necessary, we could define another router to change views differently.
// For the purposes of our application, we probably don't even need to hit our
// web server more than once per session! If we used a single page MVC framework,
// We could render our React components as the user navigates, saving us bandwidth.
// For the purposes of this demo, however, this was not implemented.
// GifMe.Lib.MVCRouter = GifMe.Lib.Router.extend({});

// Choose which router we use
GifMe.Router = new GifMe.Lib.LocationRouter();