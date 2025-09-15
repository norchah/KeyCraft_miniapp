import { NextResponse } from 'next/server';
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

export async function GET() {
  try {
    const { data } = await axios.get('https://norchah.ru/users/', {
      headers: {
        Authorization: `Bearer ${process.env.SERVICE_JWT}`, // токен серверный
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json(camelcaseKeys(data, { deep: true }));
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
