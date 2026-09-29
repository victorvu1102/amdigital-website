const MAX_LENGTHS = { name:100, email:160, company:120, service:100, message:3000 } as const;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function send(res: any, status: number, payload: Record<string, unknown>) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8').send(JSON.stringify(payload));
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return send(res, 405, { success:false, message:'Method not allowed.' });

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return send(res, 503, { success:false, message:'The contact form is not configured yet. Please email info@amdigital.ninja.' });

  const body = typeof req.body === 'string' ? Object.fromEntries(new URLSearchParams(req.body)) : (req.body ?? {});
  if (clean(body.botcheck, 200)) return send(res, 200, { success:true });

  const name = clean(body.name, MAX_LENGTHS.name);
  const email = clean(body.email, MAX_LENGTHS.email).toLowerCase();
  const company = clean(body.company, MAX_LENGTHS.company);
  const service = clean(body.service, MAX_LENGTHS.service);
  const message = clean(body.message, MAX_LENGTHS.message);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || message.length < 20) {
    return send(res, 400, { success:false, message:'Please check your name, work email and project details.' });
  }

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
      body:JSON.stringify({
        access_key:accessKey,
        subject:`New AM Digital enquiry — ${service || 'General enquiry'}`,
        from_name:'AM Digital Website',
        name,
        email,
        company,
        service,
        message,
        replyto:email,
      }),
    });
    const result = await upstream.json() as { success?:boolean; message?:string };
    if (!upstream.ok || !result.success) return send(res, 502, { success:false, message:'Your message could not be sent. Please try again or email info@amdigital.ninja.' });
    return send(res, 200, { success:true });
  } catch {
    return send(res, 502, { success:false, message:'The form service is temporarily unavailable. Please email info@amdigital.ninja.' });
  }
}
