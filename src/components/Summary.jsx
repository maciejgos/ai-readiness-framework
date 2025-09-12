function band(score) {
  if (score >= 80) return { label: 'Ready now', color: 'text-green-600', message: 'Start your PoC now.' };
  if (score >= 60) return { label: 'Ready with light prep', color: 'text-blue-600', message: 'Tidy guardrails, then proceed.' };
  if (score >= 40) return { label: 'Needs preparation', color: 'text-amber-600', message: 'Address gaps before piloting.' };
  return { label: 'Prepare first', color: 'text-red-600', message: 'Lay foundations before piloting.' };
}

export default function Summary({ overall, progress }) {
  const { label, color, message } = band(overall);
  return (
    <div className="mb-8 rounded-xl bg-white p-6 text-center shadow-sm">
      <h1 className="mb-2 text-2xl font-bold">AI Readiness</h1>
      <p className="mb-4 text-lg">
        <span className={color}>{label}</span> ({overall}%)
      </p>
      <p className="mb-4 text-gray-700">{message}</p>
      <div className="mx-auto mb-2 h-2 w-full max-w-md overflow-hidden rounded-full bg-gray-200">
        <div className="h-full bg-gray-900" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600">{progress}% questions answered</p>
    </div>
  );
}
