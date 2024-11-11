import { NextResponse } from 'next/server';
import { sleep } from '@/lib/utils/sleep';

export async function GET() {
  // eslint-disable-next-line no-unused-vars
  const data = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@example.com'
    },
    {
      id: '3',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com'
    },
    {
      id: '4',
      name: 'Diana Prince',
      email: 'diana.prince@example.com'
    },
    {
      id: '5',
      name: 'Eve Adams',
      email: 'eve.adams@example.com'
    },
    {
      id: '6',
      name: 'Frank Castle',
      email: 'frank.castle@example.com'
    },
    {
      id: '7',
      name: 'Grace Lee',
      email: 'grace.lee@example.com'
    },
    {
      id: '8',
      name: 'Henry Ford',
      email: 'henry.ford@example.com'
    },
    {
      id: '9',
      name: 'Isla Fisher',
      email: 'isla.fisher@example.com'
    },
    {
      id: '10',
      name: 'Jack Daniels',
      email: 'jack.daniels@example.com'
    }
  ];

  await sleep(250);

  // return NextResponse.json(data);

  return new NextResponse('', {
    status: 500,
    statusText: 'Internal Server Error'
  });

  // return new NextResponse('', {
  //   status: 404,
  //   statusText: 'Not Found'
  // });
}
