// Search box component embedded within the nav bar
var SearchBar = React.createClass({
  propTypes: {
    searchTerm: React.PropTypes.string
  },
  getInitialState: function() {
    return {value: this.props.searchTerm};
  },
  onKeyPressed: function(event) {
    // If the key pressed was "Enter"...
    if(event.charCode == 13 || event.keyCode == 13) {
      GifMe.Router.search(this.state.value);
    }
  },
  iconClicked: function(event) {
    GifMe.Router.search(this.state.value);
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var searchTerm = this.props.searchTerm || "";
    return (
      <div className="search-bar">
        <label htmlFor="search-input" onClick={this.iconClicked}>
          <i className="fa fa-search"></i>
        </label>
        <input id="search-input" type="text" defaultValue={searchTerm.trim().replace("+"," ")} onChange={this.handleChange} onKeyPress={this.onKeyPressed} />
      </div>
    );
  }
});
