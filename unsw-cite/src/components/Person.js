import React from 'react'

function Person({person, index}) {
    return (
  
        <tr>
            <td>{index}</td>
            <td>{person.name}</td>
            <td>{person.likes}</td>
            <td>{person.age}</td>
        </tr>
 
    )
}

export default Person
