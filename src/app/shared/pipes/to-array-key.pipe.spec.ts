import { ToArrayPipe } from './to-array-key.pipe';

describe('ToArrayKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
