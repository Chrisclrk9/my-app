import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT': 
        return {
            ...state,
            contacts: state.contacts.filter( 
                contact => contact.id !== action.payload
            )
        };

        case 'ADD_CONTACT': 
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        default: 
        return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
            id: 1,
            name: 'Thomas Clark',
            email: 'TClark@gmail.com',
            phone: '555-555-5555'
            },
    
            {
              id: 2,
              name: 'Karen Clark',
              email: 'kClarkgmail.com',
              phone: '222-222-3333'
              },
    
            {
              id: 3,
              name: 'Georgia Clark',
              email: 'Georgia@gmail.com',
              phone: '444-444-5555'
            },

            {
                id: 4,
                name: 'Gemma Catherall',
                email: 'gemgem2001@gmail.com',
                phone: '444-444-5555'
            },

            {
                id: 5,
                name: 'Evie Catherall',
                email: 'EvieCat@gmail.com',
                phone: '444-444-5555'
              }
          ], 

          dispatch: action => this.setState(state => reducer(state, action))
          
    }

    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )

    }

}

export const Consumer = Context.Consumer;