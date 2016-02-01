// The full-size version of an image
var Image = React.createClass({
  propTypes: {
    giphyObj: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className="image">
        <img src={this.props.giphyObj.images.original.url} />
      </div>
    );
  }
});
