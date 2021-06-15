import { transitionTemplate } from './variables';

describe('Testing variables functional', () => {
  describe('Testing transitionTemplate function.', () => {
    test('Should return css rule based on input props', () => {
      const timeByDefault = '.5s';
      expect(transitionTemplate(['opacity'])).toBe(`opacity, ${timeByDefault} ease-in`);
    });

    test('Output css rule should include multiple css options with custom time', () => {
      const customTime = '1.5';
      const arrayOfCssOptions = ['opacity', 'font-size', 'color'];
      expect(transitionTemplate(arrayOfCssOptions, customTime)).toBe(`${arrayOfCssOptions.toString()}, ${customTime}s ease-in`);
    });
  });
});
