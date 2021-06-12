import debounce from './debounce';

describe('Testing debounce functional', () => {
  test('Should return function', () => {
    const mockFunc = jest.fn();
    expect(typeof debounce(mockFunc, 1000)).toEqual('function');
  });
});
