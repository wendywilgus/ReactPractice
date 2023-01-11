import { render } from '@testing-library/react';
import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
        )
    }

    //simple Component.  data stored in App.js.  Pass the props through as a parameter, and map through the array to return a table row for each object in the array. 
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            //always use keys when making lists in React to help identify each list item
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody> 
}

//class componentne must contain render
const Table = (props) => {
      const { characterData, removeCharacter } = props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  
                

export default Table;