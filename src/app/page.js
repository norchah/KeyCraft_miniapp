import Link from "next/link";

export default function Home() {
  return (
      <ul className="outline outline-red-500 p-10">
        <li className='outline'>
          <Link href="/">Получить ключ</Link>
        </li>
      </ul>
  );
}