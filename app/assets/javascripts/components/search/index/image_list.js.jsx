// Grid of thumbnails from a search 
var ImageList = React.createClass({
  getInitialState: function() {
    return {giphyObjs: []};
  },
  propTypes: {
    searchTerm: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var component = this;
    $('.loading').show();
    GifMe.API.searchImagesByTag(this.props.searchTerm, {}, function(giphyObjs) {
      $('.loading').hide();
      component.setState({giphyObjs: giphyObjs});
    });
  },
  render: function() {
    var component = this;
    var imageNodes = this.state.giphyObjs.map(function(image) {
      return (
        <ImageThumb searchTerm={component.props.searchTerm} giphyObj={image} key={image.id}/>
      );
    });
    return (
      <div className="image-list">
        {imageNodes}
      </div>
    );
  }
});
