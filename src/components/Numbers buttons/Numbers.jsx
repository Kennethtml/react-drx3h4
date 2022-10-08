import React from 'react'
import './number-buttons.css'

const Numbers = ({setCurrentOperand}) => {
  

  //array containing all the numbers to form the buttons
    const numbers=[1,2,3,
                    4,5,6,
                    7,8,9,
                    '.',0]


    //function to compute the integers as the user types                
    function compute(num) {
      setCurrentOperand((prev) => {

        if(prev[0]==='0' && prev[1]!=='.' && num===0)return prev
        //checks to prevent multiple 0s starting a number

        if(prev.includes('.') && num==='.')return prev
        //checks to prevent multiple decimal on a single number

        return prev + num;
      });
    }


    //fuction for the delete buttton to delete the last integers te usertyped
    function handleDelete(){
       setCurrentOperand((prev) => {
        let numberLength=prev.length
         const newNumber=prev.slice(0,numberLength-1)
         return newNumber
       });
    }

    
  return (
    <div className="number-buttons">
      {numbers.map((number) => {
        return (
          
            <button key={number} onClick={() => compute(number)}>
              {number}
            </button>
          
        );
      })}
      <button className="delete-button" onClick={handleDelete}>
        {"<<"}
      </button>
     
    </div>
  );
}

export default Numbers