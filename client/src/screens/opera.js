// import React from 'react';
import React from 'react';

export default function Opareta() {

 
 // The array for the input
 let arr = [2,5,{car:"monica"}, "house",99]

  return (
    <div>
        <DateFormat input={false}/>
        <Array input={arr}/>
        <AnyOtherInput input="john"/>
    </div>
  );
}
 
// Date function
  function DateFormat(input) {
    let newDate=input;
    newDate = new Date().toString();
   return (
     <div>
       {newDate}
     </div>
   )  
   }
// Array input
function Array(input) {
  let arr = [2,5,"monica", "house",99]
  return (
    <div>
    {
      arr.map(item=>(
        <div key={item}>
          {item}
          </div>
      ))
    }
  </div>
  );
}

// Any other input for prop
function AnyOtherInput(props) {
  
  return <div>{props.input}</div>;
}


    
    
 
  
       
    
  