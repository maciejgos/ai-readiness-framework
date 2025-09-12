import { useState } from 'react';
import { SECTIONS } from './data.js';
import Section from './components/Section.jsx';
import Summary from './components/Summary.jsx';

export default function App() {
  const [answers, setAnswers] = useState({});

  const totalQuestions = SECTIONS.reduce((acc, s) => acc + s.questions.length, 0);

  const handleAnswer = (sectionKey, idx, value) => {
    setAnswers(prev => ({ ...prev, [`${sectionKey}-${idx}`]: value }));
  };

  const sectionScores = SECTIONS.map(sec => {
    const max = sec.questions.length * 4;
    const sum = sec.questions.reduce(
      (total, _, idx) => total + (answers[`${sec.key}-${idx}`] ?? 0),
      0
    );
    const pct = Math.round((sum / max) * 100) || 0;
    return { ...sec, score: pct };
  });

  const overall =
    Math.round(
      sectionScores.reduce((total, s) => total + s.score, 0) /
        sectionScores.length
    ) || 0;

  const progress = Math.round(
    (Object.keys(answers).length / totalQuestions) * 100
  );

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-8">
      <Summary overall={overall} progress={progress} />
      {sectionScores.map(sec => (
        <Section
          key={sec.key}
          section={sec}
          answers={answers}
          onAnswer={handleAnswer}
          score={sec.score}
        />
      ))}
    </div>
  );
}
