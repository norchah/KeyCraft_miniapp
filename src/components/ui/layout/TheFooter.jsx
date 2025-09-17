'use client';

import React from 'react';
import Link from "next/link";
import {siteConfig} from "@/configs/siteConfig";
import {usePathname} from "next/navigation";

export default function TheFooter() {

  const item = siteConfig.bottomNavMenu.map((item) => {
    const pathname = usePathname()
    let color = ''
    if (pathname === item.href) {
      color = 'text-cyan-600'
    }
    const Icon = item.icon;
    return (
      <li key={item.id} className='w-full h-full'>
        <Link href={item.href} className='flex flex-col justify-center items-center w-full h-full'>
          <Icon className={`size-7 ${color}`}/>
          <p className={`text-xs ${color}`}>{item.name}</p>
        </Link>
      </li>
    )
  })



  return (
    <nav className='fixed bottom-0 max-w-screen h-15 bg-gray-800'>
      <ul className='flex flex-row justify-around w-full h-full'>
        {item}
      </ul>
    </nav>
  );
}