export const SECTIONS = [
  { key: 'strategy', title: 'Strategy & Value', questions: [
    'We have 1–3 clear AI use‑cases tied to business KPIs (e.g., tickets, lead time, cost).',
    'There is an owner for AI outcomes with budget and decision rights.',
    'We measure baseline performance and can compare before/after results.'
  ]},
  { key: 'data', title: 'Data & Knowledge', questions: [
    'Key documents are organized and searchable (Drive/SharePoint) with access controls.',
    'Customer/system data can be exported for pilots (CSV/API) without heavy IT work.',
    'We know which data is sensitive (PII/financial) and where it lives.'
  ]},
  { key: 'process', title: 'Processes & Automation', questions: [
    'We have a documented process that repeats weekly (support, orders, invoicing).',
    'Our tools can be connected via API/Zapier/Make/n8n (or we can email‑parse).',
    'We can pilot changes on one team without blocking the whole company.'
  ]},
  { key: 'security', title: 'Security & Privacy', questions: [
    'We can run pilots inside our tenant (Microsoft 365/Google Workspace).',
    'We apply basic guardrails: least privilege, logging, data retention policies.',
    'We can sign a simple DPA and complete a DPIA‑lite for the pilot.'
  ]},
  { key: 'people', title: 'People & Adoption', questions: [
    'Pilot team is available for 60–90 min of training and gives feedback weekly.',
    'We have a human‑in‑the‑loop step for edge cases and escalation.',
    'Leaders support a 6–8 week pilot and will celebrate quick wins.'
  ]},
  { key: 'ops', title: 'Operations & Scale', questions: [
    'We can monitor usage and outcomes (simple dashboard or sheet).',
    'We budget a small monthly retainer to maintain/improve the solution.',
    'We have a shortlist of next processes if the pilot succeeds.'
  ]},
];

export const CHOICES = [
  { label: 'No', value: 0, hint: 'Not in place' },
  { label: 'Partial', value: 1, hint: 'Somewhat' },
  { label: 'Emerging', value: 2, hint: 'In progress' },
  { label: 'Good', value: 3, hint: 'Mostly' },
  { label: 'Excellent', value: 4, hint: 'Fully in place' },
];
