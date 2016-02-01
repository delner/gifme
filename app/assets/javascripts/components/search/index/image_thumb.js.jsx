// Individual thumbnail rendered within an ImageList
var ImageThumb = React.createClass({
  propTypes: {
    giphyObj: React.PropTypes.object.isRequired,
    searchTerm: React.PropTypes.string.isRequired
  },
  imageClicked: function() {
    GifMe.Router.view(this.props.searchTerm, this.props.giphyObj.id);
  },
  imageHover: function(event) {
    event.target.src = this.props.giphyObj.images.fixed_height_small.url;
    event.target.classList.add('focus');
  },
  imageUnhover: function(event) {
    event.target.src = this.props.giphyObj.images.fixed_height_small_still.url;
    event.target.classList.remove('focus');
  },
  render: function() {
    var url = this.props.giphyObj.images.fixed_height_small_still.url;
    return (
      <div className="image-thumb">
        <img src={url} onClick={this.imageClicked} onMouseOver={this.imageHover} onMouseOut={this.imageUnhover} />
      </div>
    );
  }
});
