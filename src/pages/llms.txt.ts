import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base=site?.toString().replace(/\/$/,'');
  const text=`# AM Digital\n\n> AM Digital is an AI-powered GTM operations agency founded in Hanoi in 2015. We serve DTC ecommerce brands, technology startups and global brands entering new markets.\n\n## Core pages\n- [About](${base}/about/)\n- [Services](${base}/services/)\n- [Case studies](${base}/case-studies/)\n- [Blog](${base}/blog/)\n- [Authors](${base}/authors/)\n- [Contact](${base}/contact/)\n\n## Expertise\n- Influencer and UGC campaign operations\n- SEO, AEO and GEO\n- Go-to-market launch sprints\n- Embedded growth operations\n- AI marketing automation\n\n## Contact\n- Email: info@amdigital.ninja\n- Location: Hanoi, Vietnam\n`;
  return new Response(text,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}});
};
