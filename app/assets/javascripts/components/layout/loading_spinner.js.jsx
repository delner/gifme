// Loading spinner (for when AJAX requests are taking a long time)
var LoadingSpinner = React.createClass({
  render: function() {
    return (
      <div className="loading">
        <div className="spinner">
          <i className="earth fa fa-globe" />
          <i className="orbit fa fa-paper-plane-o" />
        </div>
      </div>
    );
  }
});
