import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      isError: false,
      data: {}
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      this.setState({isLoading: false, data: res.data})
    }).catch(() => {
      this.setState({isLoading: false, isError: true})
    })
  }

  _renderData = () => {
    if(this.state.isLoading){
      return <p>Loading...</p>
    } else if(this.state.isError) {
      return <p>Error</p>
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <td>userId</td>
              <td>:</td>
              <td>{this.state.data.userId}</td>
            </tr>
            <tr>
              <td>id</td>
              <td>:</td>
              <td>{this.state.data.id}</td>
            </tr>
            <tr>
              <td>title</td>
              <td>:</td>
              <td>{this.state.data.title}</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

  render() {
    return (
      <div>
        <Header title='Belajar konsumsi api' />
        {this._renderData()}
      </div>
    );
  }
}

export default App;