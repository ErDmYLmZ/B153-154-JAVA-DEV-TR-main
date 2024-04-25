import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);
    const handleClick = (val) => {
        if (val < 0) val = 0;
        setCount(val)
    }
    return (
        <>
            <div className='text-center mt-5 '>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success" className='fs-3' onClick={() => setCounter((prev) => prev + 1)}> <AiOutlinePlus /></Button>
                    <Button variant="warning" className='fs-3'>{counter}</Button>
                    <Button variant="danger" className='fs-3' onClick={() => setCounter((prev) => prev - 1)}><AiOutlineMinus /></Button>
                    <Button variant="info" className='fs-3' onClick={() => setCounter(0)}><GrPowerReset /></Button>
                </ButtonGroup>
            </div>



            <div className='text-center mt-5 '>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" className='fs-3' onClick={()=>handleClick(count+1)}><AiOutlinePlus /></Button>
                    <Button variant="warning" className='fs-3'>{count}</Button>
                    <Button variant="success" className='fs-3' onClick={()=>handleClick(count-1)}><AiOutlineMinus /></Button>
                    <Button variant="info" className='fs-3' onClick={() => handleClick(0)}><GrPowerReset /></Button>
                </ButtonGroup>
            </div>
        </>
    )
}
export default Counter