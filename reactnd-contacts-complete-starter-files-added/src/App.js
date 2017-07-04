import React, { Component } from 'react';

import ListContacts from './components/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './components/CreateContact';

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
      screen: 'list', // list, create
      contacts: []
    };
  }

  componentDidMount(){
    // return promise
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }))

    // delete server contact
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        { this.state.screen === 'list' && (
          <ListContacts
            onDeleteContract={this.removeContact} 
            contacts={this.state.contacts}
            onNavigate={() => {
              this.setState({ screen: 'create' })
            }}/>
        )}
        { this.state.screen === 'create' && (
          <CreateContact />    
        )}    
      </div>
    )
  }
}

export default App;
