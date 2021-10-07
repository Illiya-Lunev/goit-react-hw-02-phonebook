import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import FormPhoneBook from './FormPhoneBook/FormPhoneBook';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhoneBook />
        <h2>Contacts</h2>
      </div>
    );
  }
}
