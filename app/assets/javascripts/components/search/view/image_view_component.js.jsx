// Composite component that represents viewing an Image
var ImageViewComponent = React.createClass({
  propTypes: {
    giphyObj: React.PropTypes.object,
    giphyId: React.PropTypes.string,
    searchTerm: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      giphyObj: null
    };
  },
  componentDidMount: function() {
    var component = this;
    $('.loading').show();
    GifMe.API.getImageById(this.props.giphyId, {}, function(giphyObj) {
      $('.loading').hide();
      component.setState({giphyObj: giphyObj});
    });
  },
  render: function() {
    if(this.state.giphyObj) {
      var image = this.state.giphyObj;
      return (
        <div className="image-view">
          <Image giphyObj={image} />
          <ImageAttributes sourceUri={image.source} rating={image.rating} dateUploaded={image.import_datetime} />
          <br />
          <RandomButton searchTerm={this.props.searchTerm} />
        </div>
      );
    } else {
      return (
        <div className="image-view">
        </div>
      );
    }
  }
});
