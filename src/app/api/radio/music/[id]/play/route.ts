import { NextResponse } from 'next/server'
import apiClient from '@/lib/api'

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    await apiClient.post(`/api/music/${id}/play/`)
    return NextResponse.json({ success: true })
  } catch {
    // Don't surface backend errors — play count is best-effort
    return NextResponse.json({ success: false }, { status: 200 })
  }
}
