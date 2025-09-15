'use client';

import {useEffect, useState} from 'react';
import Link from "next/link";
import {UserApi} from "@/api/userApi";

export default function KeysPage() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const api = new UserApi()
    api.get()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);


  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const data = await api.get();
  //       console.log("API data:", data);
  //       setUsers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUsers();
  // }, []); // пустой массив → вызов один раз при монтировании


  return (
    <div className='flex flex-col items-center'>
      <h3>Здесь будут твои ключи</h3>
      <Link href='/'
            className='underline hover:text-gray-300 active:text-gray-400 transition-all duration-100'>Назад</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.tgId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}