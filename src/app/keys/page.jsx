'use client';

import {useState} from 'react';
import Link from "next/link";


export default function KeysPage() {
  const [users, setUsers] = useState([]);


  return (
    <div className='flex flex-col items-center'>
      <h3>Здесь будут твои ключи</h3>
      <Link href='/'
       className='underline hover:text-gray-300 active:text-gray-400 transition-all duration-100'>Назад</Link>
    </div>
  );
}