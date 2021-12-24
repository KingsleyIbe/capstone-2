const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/comments';

const postComments = async (obj) => {
  await fetch(commentURL, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
};

const getComments = async (id) => {
  const response = await fetch(`${commentURL}?item_id=${id}`);
  const resData = await response.json();
  return resData;
};

export { postComments, getComments };
