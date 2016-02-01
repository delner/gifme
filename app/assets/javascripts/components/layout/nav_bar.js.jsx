// Header component as seen affixed to the top of the page
var NavBar = React.createClass({
  propTypes: {
    searchTerm: React.PropTypes.string
  },
  render: function() {
    return (
      <div className="nav-bar">
        <div className="logo">
          <span className="accent">G</span>
          <span className="accent">I</span>
          <span className="accent">F</span>
          ME
        </div>
        <SearchBar searchTerm={this.props.searchTerm} />
      </div>
    );
  }
});
