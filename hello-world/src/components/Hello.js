import React, { createElement } from 'react'
const Hello = () =>{
//return(
//    <div>
 //       <h1>Hello Ishaan!</h1>
 //   </div>
//)
return React.createElement('div',
{id:'hello',className:'dummyClass'},
React.createElement('h1',null,"Hello Ishaan!"))
}
export default Hello