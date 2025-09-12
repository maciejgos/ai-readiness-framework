export function mapAnswerToValue(choice) {
  const mapping = {
    No: 0,
    Partial: 1,
    Emerging: 2,
    Good: 3,
    Excellent: 4,
  };
  return mapping[choice] ?? 0;
}

export function calculateSectionPercent(answerValues) {
  const totalPossible = answerValues.length * 4;
  const sum = answerValues.reduce((a, b) => a + b, 0);
  return totalPossible ? Math.round((sum / totalPossible) * 100) : 0;
}

export function calculateOverallPercent(sectionPercents, weights) {
  const w = weights && weights.length ? weights : Array(sectionPercents.length).fill(1);
  const weightedSum = sectionPercents.reduce((acc, pct, idx) => acc + pct * (w[idx] ?? 1), 0);
  const weightTotal = sectionPercents.reduce((acc, _, idx) => acc + (w[idx] ?? 1), 0);
  return weightTotal ? Math.round(weightedSum / weightTotal) : 0;
}

export function determineReadinessBand(overallPercent) {
  if (overallPercent >= 80) {
    return { label: 'Ready now', color: 'green', guidance: 'Proceed to PoC / scale' };
  }
  if (overallPercent >= 60) {
    return { label: 'Ready with light prep', color: 'blue', guidance: 'Minor improvements first' };
  }
  if (overallPercent >= 40) {
    return { label: 'Needs preparation', color: 'amber', guidance: 'Address gaps before starting' };
  }
  return { label: 'Prepare first', color: 'red', guidance: 'Build foundational capability' };
}

export function calculateProgress(answeredCount, totalCount) {
  return totalCount ? Math.round((answeredCount / totalCount) * 100) : 0;
}
