
const commentId = 'd4136b259e9746d4b14cfb48fd0d234c';
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi'

const postComments = async (itemId, username, comment) => {
    await fetch(`${commentURL}/${commentId}/comments/`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId, username, comment}),
    })
  };
  
  const getComments = async () => {
    const response = await fetch(`${commentURL}/${commentId}/comments/`);
    const resData = await response.json();
    const data = await resData.result;
    return data;
    console.log(data)
  };

  export { postComments, getComments };