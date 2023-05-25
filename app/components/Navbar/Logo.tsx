'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image alt="logo" width='80' height='80' className="hidden md:block cursor-pointer" src="/images/logo.png"/>
    )
}

export default Logo