import { useState } from "react";

const newArr: (number|string)[] = [] 

export default function FizzBuzz(): JSX.Element {
    const [num, setNum] = useState(0)

    const handleNext = () => {

        setNum(num + 1)

        const nextNum= num + 1

        if (nextNum % 3 === 0){
            newArr.push("Fizz")
        } 
        else if (nextNum % 5 === 0){
            newArr.push("Buzz")
        }
        else if (nextNum % 15 === 0){
            newArr.push("FizzBuzz")
        }
        else{
            newArr.push(nextNum)
        }
    }
    return (
        <>
        <h1>Current array : {newArr.join(', ')}</h1>
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}