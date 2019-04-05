import { ToArrayValuePipe } from './to-array-value.pipe';

describe('ToArrayValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ToArrayValuePipe();
    expect(pipe).toBeTruthy();
  });
});
