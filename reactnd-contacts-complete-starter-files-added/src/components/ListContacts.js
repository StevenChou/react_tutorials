import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const ListContacts = (props) => (  
//   <ol className="contact-list">
//         {props.contacts.map(contact => (
//           <li key={contact.id} className="contact-list-item">
//             <div className="contact-avatar" style={{
//               backgroundImage: `url(${contact.avatarURL})`
//             }} />
//             <div className="contact-details">
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//             <button onClick={() => props.onDeleteContract(contact)} className="contact-remove">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ol>
// );

// function ListContacts(props) {
//   return (
//       <ol className="contact-list">
//         {props.contacts.map(contact => (
//           <li key={contact.id} className="contact-list-item">
//             <div className="contact-avatar" style={{
//               backgroundImage: `url(${contact.avatarURL})`
//             }} />
//             <div className="contact-details">
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//             <button className="contact-remove">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ol>
//     ); 
// }

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContract: PropTypes.func.isRequired
  }

  state = { 
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />
        </div>
        <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id} className="contact-list-item">
            <div className="contact-avatar" style={{
              backgroundImage: `url(${contact.avatarURL})`
            }} />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => this.props.onDeleteContract(contact)} className="contact-remove">
              Remove
            </button>
          </li>
        ))}
      </ol>
      </div>      
    );
  }
}

// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContract: PropTypes.func.isRequired
// };

export default ListContacts;