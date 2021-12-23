const url = "https://api.tvmaze.com/shows";
const countUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/likes"

describe('Test for the getShows function', () => {
    async function getShows() {
        const response = await fetch(url);
        data = await response.json();
        const response1 = await fetch(countUrl);
        const countData = await response1.json();
        for (let i = 0; i < data.length; i++) {
            const count = countData.find((x) => x["item_id"] === `movie-${data[i].id}`);
            data[i].likes = count ? count.likes : 0;
        }
        render(data);
    }

    test('should load user data', () => {
        expect(getShows()).toBeDefined()
    });
});