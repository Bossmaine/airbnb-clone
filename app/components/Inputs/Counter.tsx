'use client';

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps>= ({
    title,
    subtitle,
    value,
    onChange
}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1)
    }, [onChange, value])

    const onReduce = useCallback(() => {
        if (value === 1) {
            return;
        }

        onChange(value - 1)
    }, [onChange, value])

  return (
    <div className=" flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">
            {title}
        </div>
        <div className="font-light text-gray-600">
            {subtitle}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div onClick={onReduce} className="flex items-center justify-center rounded-full text-neutral-600 cursor-pointer
         w-10 h-10 border border-neutral-400 transition hover:opacity-50 ">
            <AiOutlineMinus />
        </div>
        <div className="font-ligth text-xl text-neutral-600">
            {value}
        </div>
        <div onClick={onAdd} className="flex items-center justify-center rounded-full text-neutral-600 cursor-pointer
         w-10 h-10 border border-neutral-400 transition hover:opacity-50 ">
            <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Counter
