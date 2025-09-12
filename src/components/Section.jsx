import { CHOICES } from '../data.js';

export default function Section({ section, answers, onAnswer, score }) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{section.title}</h2>
        <span className="text-sm font-medium">{score}%</span>
      </div>
      <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
        <div className="h-full rounded-full bg-gray-900" style={{ width: `${score}%` }}></div>
      </div>
      {section.questions.map((q, idx) => {
        const name = `${section.key}-${idx}`;
        const value = answers[name];
        return (
          <div key={name} className="mb-6">
            <p className="mb-2 font-medium">{q}</p>
            <div className="flex flex-wrap gap-2">
              {CHOICES.map(choice => (
                <label
                  key={choice.value}
                  className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors ${
                    value === choice.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name={name}
                    value={choice.value}
                    className="sr-only"
                    checked={value === choice.value}
                    onChange={() => onAnswer(section.key, idx, choice.value)}
                  />
                  {choice.label}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
