import React from 'react';
import Link from "next/link";

export default function GetKeysPage(props) {
  return (
    <ul className="flex flex-col gap-2 text-center">
      <h2 className='mb-5'>Тут можно купить ключики:</h2>
      <li>
        <button className='bg-cyan-700 p-3 rounded-xl hover:cursor-pointer hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>первый вариант</button>
      </li>
      <li>
        <button className='bg-cyan-700 p-3 rounded-xl hover:cursor-pointer hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>первый вариант</button>
      </li>
      <li>
        <button className='bg-cyan-700 p-3 rounded-xl hover:cursor-pointer hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>второй вариант</button>
      </li>
      <li>
        <button className='bg-cyan-700 p-3 rounded-xl hover:cursor-pointer hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>третий вариант</button>
      </li>
      <li className='mt-3'>
        <Link href='/' className='underline hover:text-gray-300 active:text-gray-400 transition-all duration-100'>Назад</Link>
      </li>
    </ul>
  );
}
