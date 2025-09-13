import { describe, it, expect } from 'vitest'
import {
  mapAnswerToValue,
  calculateSectionPercent,
  calculateOverallPercent,
  determineReadinessBand,
  calculateProgress,
} from './scoring'

describe('mapAnswerToValue', () => {
  it('maps known choices', () => {
    expect(mapAnswerToValue('No')).toBe(0)
    expect(mapAnswerToValue('Partial')).toBe(1)
    expect(mapAnswerToValue('Emerging')).toBe(2)
    expect(mapAnswerToValue('Good')).toBe(3)
    expect(mapAnswerToValue('Excellent')).toBe(4)
  })
  it('defaults unknown to 0', () => {
    expect(mapAnswerToValue('Unknown')).toBe(0)
  })
})

describe('calculateSectionPercent', () => {
  it('calculates percent for a section', () => {
    expect(calculateSectionPercent([3, 2, 2])).toBe(58) // 7/12 *100 ->58
  })
  it('handles empty answers', () => {
    expect(calculateSectionPercent([])).toBe(0)
  })
})

describe('calculateOverallPercent', () => {
  it('averages sections with equal weight', () => {
    const sections = [70, 50, 80, 60, 90, 40]
    expect(calculateOverallPercent(sections)).toBe(65)
  })
  it('applies custom weights', () => {
    const sections = [80, 60]
    const weights = [2, 1]
    // (80*2 + 60*1) / 3 = 73.33 -> 73
    expect(calculateOverallPercent(sections, weights)).toBe(73)
  })
})

describe('determineReadinessBand', () => {
  it('returns correct banding', () => {
    expect(determineReadinessBand(85).label).toBe('Ready now')
    expect(determineReadinessBand(65).label).toBe('Ready with light prep')
    expect(determineReadinessBand(50).label).toBe('Needs preparation')
    expect(determineReadinessBand(20).label).toBe('Prepare first')
  })
})

describe('calculateProgress', () => {
  it('calculates completion percent', () => {
    expect(calculateProgress(3, 10)).toBe(30)
    expect(calculateProgress(0, 0)).toBe(0)
  })
})
