'use client';

export function TG({children, tg}) {
  return (
    <pre className='text-xs max-w-[375px]'>
      {tg && (
        <p>{children}: {JSON.stringify(tg, null, 2)}</p>
      )}
    </pre>
  );
}