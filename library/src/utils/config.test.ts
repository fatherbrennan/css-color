import { describe, expect, it } from 'bun:test';

import { pascalCase, rgbAlphaOrNull, rgbOrNull } from './config';

describe('config utilities', () => {
  describe('pascalCase', () => {
    it('should transform text to pascal case', () => {
      expect(pascalCase('Over')).toBe('Over');
      expect(pascalCase('Over The')).toBe('OverThe');
      expect(pascalCase('Over The Hedge')).toBe('OverTheHedge');
    });
  });

  describe('rgbOrNull', () => {
    it('should return null if rgbValue is null', () => {
      expect(rgbOrNull(null)).toBe(null);
    });

    it('should return RGB value if rgbValue is not null', () => {
      expect(rgbOrNull([255, 0, 0])).toBe('rgb(255,0,0)');
      expect(rgbOrNull([255, 255, 0])).toBe('rgb(255,255,0)');
      expect(rgbOrNull([255, 255, 255])).toBe('rgb(255,255,255)');
    });
  });

  describe('rgbAlphaOrNull', () => {
    it('should return null if rgbAlphaValue is null', () => {
      expect(rgbAlphaOrNull(null)).toBe(null);
    });

    it('should return RGBA value if rgbAlphaValue is not null', () => {
      expect(rgbAlphaOrNull([255, 0, 0, 1])).toBe('rgba(255,0,0,1)');
      expect(rgbAlphaOrNull([255, 0, 120, 0])).toBe('rgba(255,0,120,0)');
      expect(rgbAlphaOrNull([0, 0, 120, 0.1])).toBe('rgba(0,0,120,0.1)');
      expect(rgbAlphaOrNull([255, 0, 0, 0.5])).toBe('rgba(255,0,0,0.5)');
      expect(rgbAlphaOrNull([255, 255, 255, 1])).toBe('rgba(255,255,255,1)');
      expect(rgbAlphaOrNull([0, 0, 0, 0])).toBe('rgba(0,0,0,0)');
    });
  });
});
