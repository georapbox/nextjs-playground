import { NextResponse } from 'next/server';

export async function GET() {
  // const statusCodes = [200, 404, 500];
  // const randomStatusCode = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  // const data = { message: 'Hello, world!' };

  // return NextResponse.json(data);

  return new NextResponse('', {
    status: 500,
    statusText: 'Internal Server Error'
  });

  // return new NextResponse('', {
  //   status: 404,
  //   statusText: 'Not Found'
  // });

  // if (randomStatusCode === 200) {
  //   return NextResponse.json(data);
  // } else {
  //   return new NextResponse('', {
  //     status: randomStatusCode,
  //     statusText: randomStatusCode === 404 ? 'Not Found' : 'Internal Server Error'
  //   });
  // }
}
