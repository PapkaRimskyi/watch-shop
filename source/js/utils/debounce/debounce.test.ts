import debounce from './debounce';

describe('Testing debounce functional', () => {
  const ms = 1000;
  let mockFunc: jest.Mock;
  let returnedFunc: () => void;
  beforeEach(() => {
    jest.useFakeTimers();
    mockFunc = jest.fn();
    returnedFunc = debounce(mockFunc, ms);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('Should return function', () => {
    expect(typeof returnedFunc).toEqual('function');
  });

  test('Debounce should call mockFunc after 1000ms', () => {
    returnedFunc();
    jest.runAllTimers();
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('Debounce will call 2 times, but should call mockFunc just once', () => {
    returnedFunc();
    returnedFunc();
    jest.runAllTimers();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
