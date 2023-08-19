import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma.js';

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const task = await prisma.task.create({ data });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.error(error);
  }
}
