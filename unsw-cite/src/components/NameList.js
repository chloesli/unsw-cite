import React from 'react'
import Person from '../components/Person'
function NameList() {
    const names=["hi", "two", "three"];
    const persons = [
        {
            id: 1, 
            name:"Chloe",
            likes:"John",
            age:"2"
        },
        {
            id: 2,
            name:"John",
            likes:"Hearthstone",
            age:"1"
        },
        {
            id:3,
            name: "archie",
            likes: "toys",
            age:"0"
        },
        {
            id:4,
            name:"oscar",
            likes:"cuddles",
            age:"0"
        }
    ]
    const render = persons.map((person, index) => 
        <Person key={person.id} person={person} index={index}></Person>
    )
    const namesList = names.map((name, index) => <h2 key={index}>{index}. {name}</h2>)
    return (
        <div>
            <table>
            <thead>
            <tr>
            <th>ID</th>
                <th>Firstname</th>
                <th>Likes</th>
                <th>Age</th>
            </tr>
            </thead>
            
                {render}
            </table>
            <h2>Names</h2>
            {namesList}
            
        </div>
    )
}

export default NameList
