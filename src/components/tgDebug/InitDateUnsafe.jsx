'use client';

export default function InitDateUnsafe({tg}) {
  return (
    <div className=''>
      <h3 className=''>InitDate:</h3>
        <pre className="p-2 text-xs max-w-100">
            {tg}
        </pre>
    </div>
  );
}