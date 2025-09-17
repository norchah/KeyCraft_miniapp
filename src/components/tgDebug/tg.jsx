'use client';

export function TGMock({children, tg}) {
  return (
    <pre className='text-xs'>
      {tg && (
        <p>[MOCK]{children}: {JSON.stringify(tg, null, 2)}</p>
      )}
    </pre>
  );
}

export function TGReal({children, tg}) {
  return (
    <pre className='text-xs max-w-[375px]'>
      {tg && (
        <p>[REAL]{children}: {JSON.stringify(tg, null, 2)}</p>
      )}
    </pre>
  );
}