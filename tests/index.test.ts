import { hello } from '../src';

test('prints hello', () => {
  console.log = jest.fn();
  hello();
  expect(console.log).toHaveBeenCalledWith('Hello from my-typescript-lib');
});
