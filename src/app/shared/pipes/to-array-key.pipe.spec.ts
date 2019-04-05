import { ToArrayKeyPipe } from './to-array-key.pipe';

describe('ToArrayKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToArrayKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
