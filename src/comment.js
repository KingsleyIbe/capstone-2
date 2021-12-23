
const commentId = 'Q4ShCASnnzP55bg7hv5u';
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';


const postComments = async (item_id, username, comment) => {
    const data = await fetch(`${commentURL}/${commentId}/comments/`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id, username, comment}),
    })
    console.log(data);
  };
  
  const getComments = async (id) => {
    const response = await fetch(`${commentURL}/${commentId}/comments/?item_id=id`);
    const resData = await response.json();
    const data = await resData.result;
    const obj = {'item_id': item_id};
    id = Number(item.id.split("-")[1]);
    // return data;
    console.log(data);
  };

  export { postComments, getComments };