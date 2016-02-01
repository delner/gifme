// Image attributes component rendered on the view page
var ImageAttributes = React.createClass({
  propTypes: {
    dateUploaded: React.PropTypes.string,
    rating: React.PropTypes.string,
    sourceUri: React.PropTypes.string
  },

  render: function() {
    var a = document.createElement('a');
    a.href = this.props.sourceUri;
    var sourceName = a.hostname;
    return (
      <div className="image-attributes">
        <div className="attribute">
          <span className="attr-name">Uploaded:</span> {this.props.dateUploaded}</div>
        <div className="attribute">
          <span className="attr-name">Rating:</span> {this.props.rating}</div>
        <div className="attribute">
          <span className="attr-name">Source:</span> <a href={this.props.sourceUri}>{sourceName}</a></div>
      </div>
    );
  }
});
