import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      id: '1',
      title: 'Complete project proposal',
      completed: false
    },
    {
      id: '2',
      title: 'Buy groceries',
      completed: true
    },
    {
      id: '3',
      title: 'Schedule dentist appointment',
      completed: false
    },
    {
      id: '4',
      title: 'Read a new book',
      completed: true
    },
    {
      id: '5',
      title: 'Organize workspace',
      completed: false
    },
    {
      id: '6',
      title: 'Prepare presentation slides',
      completed: false
    },
    {
      id: '7',
      title: 'Respond to client emails',
      completed: true
    },
    {
      id: '8',
      title: 'Plan weekend trip',
      completed: false
    },
    {
      id: '9',
      title: 'Exercise for 30 minutes',
      completed: true
    },
    {
      id: '10',
      title: 'Backup files',
      completed: false
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(data);
}
