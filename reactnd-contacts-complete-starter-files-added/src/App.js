import React, { Component } from 'react';

import ListContacts from './components/ListContacts';

// const contacts = [
//   {
//     "id": "ryan",
//     "name": "Ryan Florence",
//     "email": "ryan@reacttraining.com",
//     "avatarURL": "http://localhost:5001/ryan.jpg"
//   },
//   {
//     "id": "michael",
//     "name": "Michael Jackson",
//     "email": "michael@reacttraining.com",
//     "avatarURL": "http://localhost:5001/michael.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "email": "tyler@reacttraining.com",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [
        {
          "id": "ryan",
          "name": "Ryan Florence",
          "email": "ryan@reacttraining.com",
          "avatarURL": "http://localhost:5001/ryan.jpg"
        },
        {
          "id": "michael",
          "name": "Michael Jackson",
          "email": "michael@reacttraining.com",
          "avatarURL": "http://localhost:5001/michael.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "email": "tyler@reacttraining.com",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
      ]
    };
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts
          onDeleteContract={this.removeContact} 
          contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
