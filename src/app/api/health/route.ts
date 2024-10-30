import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 서버 상태 체크
    const isServerHealthy = process.uptime() > 0
  
    if (isServerHealthy) {
      return NextResponse.json({ status: 'ok' })
    } else {
      throw new Error('Server is not healthy')
    }
  } catch (error) {
    return NextResponse.json(
      { status: 'error' },
      { status: 500 }
    )
  }
}
