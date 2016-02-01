// Random button component which redirects to an image in the same category
var RandomButton = React.createClass({
  propTypes: {
    searchTerm: React.PropTypes.string.isRequired
  },
  buttonClicked: function() {
    var component = this;
    GifMe.API.getRandomImage(this.props.searchTerm, {}, function(giphyObj) {
      component.loadRandomImage(giphyObj);
    });
  },
  loadRandomImage: function(image) {
    GifMe.Router.view(this.props.searchTerm, image.id);
  },
  render: function() {
    return (
      <button className="random-button" onClick={this.buttonClicked}>Show me a random GIF!</button>
    );
  }
});
