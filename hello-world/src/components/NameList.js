import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Bruce','Clarke','Diana','Bruce']
    const persons=[
      {
        id:1,
        name : 'Bruce',
        age:30,
        skill:'React JS'
      },
      {
        id:2,
        name:'Clarke',
        age:25,
        skill:'Java'
      },
      {
        id:3,
        name:'Diana',
        age:26,
        skill:'Javascript'
      },
    ]
    const nameList=names.map((name,index) =><h2 key={index}>{index} {name}</h2>)
    const personList=persons.map(person =><Person key={person.name} person={person}/>)
  return <div>{nameList}</div>
}
export default NameList