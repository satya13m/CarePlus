"use client"
import React from 'react'
import { useEffect,useState } from 'react'

type AnimatedTextProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

const AnimatedText = ({texts,interval=3000,className=""}:AnimatedTextProps) => {
    const [index,setIndex] = useState(0);
    const [fade,setFade] = useState(true);

    useEffect(()=>{
        const time = setInterval(()=>{
            setFade(false);

            setTimeout(()=>{
                setIndex((prev)=>(prev+1)%texts.length);
                setFade(true);
            },300);
        },interval);

        return ()=> clearInterval(time)
    },[texts,interval]);

    return (
        <p
         className={`transition-opacity duration-300 ${fade?'opacity-100':'opacity-0'} ${className}`}>
            {texts[index]}
        </p>
    )
}

export default AnimatedText
