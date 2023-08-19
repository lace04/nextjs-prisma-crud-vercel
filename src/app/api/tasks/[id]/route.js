import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET(request, { params }) {
  try {
    const taskFound = await prisma.task.findUnique({
      where: { id: Number(params.id) },
    });

    if (!taskFound) return NextResponse.json({ message: 'task not found' });
    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function PATCH(request, { params }) {
  try {
    const taskFound = await prisma.task.findUnique({
      where: { id: Number(params.id) },
    });

    if (!taskFound) return NextResponse.json({ message: 'task not found' });

    const data = await request.json();
    const taskUpdated = await prisma.task.update({
      where: { id: Number(params.id) },
      data,
    });
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const taskFound = await prisma.task.findUnique({
      where: { id: Number(params.id) },
    });

    if (!taskFound) return NextResponse.json({ message: 'task not found' });

    const taskRemoved = await prisma.task.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.error(error);
  }
}
