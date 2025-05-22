import { NextResponse } from 'next/server';

export async function POST(req) {
  const { code } = await req.json();

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'AI Code Explainer',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-prover-v2:free',
      messages: [
        {
          role: 'user',
          content: `Aşağıdaki kodu sade bir dille açıklar mısın?\n\n${code}`,
        },
      ],
    }),
  });

  const json = await res.json();
  const message = json.choices?.[0]?.message?.content || 'Açıklama alınamadı.';
  return NextResponse.json({ result: message });
}
