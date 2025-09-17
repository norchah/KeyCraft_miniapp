'use client';

export default function InitDate({data, isVisible}) {
  return (
    <div className=''>
      <h3 className=''>InitDate:</h3>
      {isVisible &&
        <pre className="p-2 text-xs max-w-100">
            {data}
        </pre>
      }
    </div>
  );
}
