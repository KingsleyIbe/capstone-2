// import { count } from './index.js';

const url = "https://api.tvmaze.com/shows";
const countUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/likes"
describe('Test for count function', () => {
  test('returns a string', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  })
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  });
})