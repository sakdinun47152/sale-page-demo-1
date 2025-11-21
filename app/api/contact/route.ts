import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, lineid } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const message = `
<b>📦 มีออเดอร์ใหม่เข้าครับ!</b>
-----------------------
👤 <b>ชื่อ:</b> ${name}
📞 <b>เบอร์:</b> ${phone}
📱 <b>Line ID:</b> ${lineid || '-'}
-----------------------
⏰ ${new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML' // เพื่อให้ตัวหนาทำงาน
        })
    });

    if (!response.ok) {
      console.error("Telegram Error:", await response.text());
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}