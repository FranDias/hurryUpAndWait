import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {txt: 'this is state'}
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({txt: e.target.value})

  }
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <input type="text" onChange={this.update}/>
        <div>{this.state.txt}</div>
      </div>
    )}
}

App.propTypes = {
  txt: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number
}

App.defaultProps = {
  txt: "Hello World",
  cat: 0
}


ReactDOM.render(
  <App
    txt="this is text"
    cat={5} />,
  document.getElementById('app')
)

export default App
