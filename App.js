import React, { Component } from "react";
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
        ]
    }
    removeCharacter = (index) => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    //now pass the data through to the child componenet (Table) with properties.  Now access in Table.js
    render () {
        const { characters } = this.state
            return (
                <div className="container">
                    <Table characterData={characters} removeCharacter={this.removeCharacter} />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            );
    }
}


export default App;