import { X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export const Notification1 = (props) => {
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(''); // Store color as a state variable
    const isFirstRender = useRef(true);
    const [message, setMessage] = useState()

    const handleClick = () => {
        console.log("Clicked..");
        setShow(false);
        setColor("sdfsdf"); // Update the color state
        setMessage()

        
    };

    setTimeout(() => {
        setShow(false);
    }, 5000);

    useEffect(() => {
        if (!isFirstRender.current) {
            console.log('Color updated:', color);
            setShow(true);
            setMessage(props?.message)
        } else {
            isFirstRender.current = false;
        }
    }, [color]);

    useEffect(() => {
        // Set the color state based on the props.type when the component mounts or when props.type changes
        if (props.type === "error") setColor('border-red-500 bg-red-200');
        else if (props.type === "success") setColor('border-green-500 bg-green-200');
        else if (props.type === "info") setColor('border-yellow-500 bg-yellow-200');
    }, [props.type]);

    return (
        <>
            {show &&
                <div onClick={handleClick} className='flex justify-center'>
                    <div className={`border rounded-lg px-5 py-2 ${color} fixed bottom-3 `}>
                        <p className='absolute right-1 top-1'><X size={15} /></p>
                        <p className='px-8'>
                            {message}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}
