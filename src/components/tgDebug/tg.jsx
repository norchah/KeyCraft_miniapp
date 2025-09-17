'use client';

export default function TG({children, tg}) {
  return (
    <pre className='text-xs'>
      {tg && (
        <p>{children}: {JSON.stringify(tg, null, 2)}</p>
      )}
    </pre>
  );
}