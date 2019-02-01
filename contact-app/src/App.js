import React, { Component } from 'react';
import PhoneFrom from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
  state = {
    information: [],
  }

  id = 0;

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return { id, ...data, };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <PhoneFrom onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
