'use client';

import {useEffect, useState } from "react";

interface ClienOnlyComponentProps {
    children: React.ReactNode
}

const ClienOnlyComponent: React.FC<ClienOnlyComponentProps> = ({children}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }

    return (
    <>
      {children}
    </>
  )
}

export default ClienOnlyComponent
