import React from 'react';
import Image from "next/image";
import {textsConfig} from "@/configs/textsConfig";
import {layoutConfig} from "@/configs/layoutConfig";

export default function TheHeader() {
  return (
    <header className={`${layoutConfig.flexColItemsJustify} pt-15`}>
      <Image src="/logo-free-bg.svg" alt="logo" width={80} height={80}/>
      <h1 className='text-bold text-xl'>KeyCraft</h1>
      <p className='max-w-[320px] text-center text-gray-200'>{textsConfig.mainDescription}</p>
    </header>
  );
}