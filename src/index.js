import './style.css';
import { postComments, getComments } from './comment';

const url = "https://api.tvmaze.com/shows";
const countUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/likes"
const elem = document.querySelector('.cards');
let data;

async function getShows() {
  const response = await fetch(url);
    data = await response.json();
  const response1 = await fetch(countUrl);
  const countData = await response1.json();
  for (let i = 0; i < data.length; i++){
    const count = countData.find(x => x['item_id'] === `movie-${data[i].id}`);
    data[i].likes = count ? count.likes : 0;
  }
  render(data);
}
getShows();

 function render(data){
	elem.innerHTML = '';
for (let i = 0; i < data.length; i++){
	elem.innerHTML += `
	<div class="cards-info">
         <img src=${data[i].image.medium} alt="" class="img">
            <p class=description>${data[i].name}</p>
			<div class='likes-count'> 
      <i class="fas fa-heart fa-3x" id='movie-${data[i].id}'></i>
      <span>Likes-${data[i].likes}</span>
      </div>
            <div class="button">
              <button class="cmntBtn-button">Comments</button>
              <button class='reBtn'>Reservations</button>
            </div>
          </div>
        </div>`	
}
document.querySelectorAll('i').forEach((like) => {
	like.addEventListener('click', ()=> {
      const obj = {'item_id': like.id};
      const id = Number(like.id.split("-")[1]);
      const movie = data.find(x => x.id === id);
      movie.likes++;
      obj.likes =movie.likes;
      like.parentNode.querySelector('span').innerText = 'likes-' + obj.likes;
      count(obj);
	})
})

document.querySelectorAll('.cmntBtn-button').forEach((item) => {
  item.addEventListener('click', (id) => {
    // const obj = {'item_id': item.id};
    // id = Number(item.id.split("-")[1]);
    id = data.id;
    
    const showComment = document.querySelector('.commentPopUp');
    elem.style.display = 'none';
    for (let i = 0; i < data.length; i++){
      // obj.item = data.find(x => x.id === id)
      console.log(id)
      showComment.innerHTML = `
    <div class="popup">
    <span>
    <i class="fas fa-times 4x"></i>
    </span>
        <div class="popup-info">
            <img src=${data[i].image.medium} alt="">
        </div>
        <p class="name">${data[i].name}</p>
        <div class="details">
            <p>${data[i].name}</p>
            <p>${data[i].language}</p>
            <p>${data[i].runtime}</p>
            <p>${data[i].status}</p>
        </div>
        <h5 class="comment">comments(count)</h5>
        <ul id="displayComments"></ul>
        <form action="" class="commentForm">
            <label>Add a comment</label>
            <input type="text" id="username" placeholder="Your name">
            <textarea type="text" id="comment" placeholder="Your comments"></textarea>
            <p id="error"></p>
            <button type="submit" id="submit" class="commentBtn">Comment</button>
        </form>
    </div>
`
    }
showComment.style.display = 'block';
 
document.querySelector('.fa-times').addEventListener('click', () => {
  showComment.style.display = 'none';
  elem.style.display = 'grid';
});

  });
});
}

async function count(obj) {
	const response = await fetch(countUrl, 
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(obj)});
    const countData = await response.json();
};


const clearInputsFields = () => {
  const userName = document.querySelector('#username');
  const userComment = document.querySelector('#comment');

  userName.value = '';
  userComment.value = '';
};

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', (e) => {
  const userName = document.querySelector('#username').value;
  const userComment = document.querySelector('#comment').value;
  const itemId = data.length++;

  e.preventDefault();

  if (userName === '' || userComment === '') {
    const displayError = document.querySelector('#error');
    displayError.innerHTML = '*All fields must be filled';
    setTimeout(() => {
      displayError.remove();
    }, 5000);
  } else {
    postComments(itemId, userName, userComment);
    clearInputsFields();
  }
});

const commentElement = document.querySelector('#displayComments')
const showComments = (username, comment) => {
  const listElem = document.createElement('li');
  const listElem1 = document.createElement('li');

  listElem1.innerHTML = `${username}: ${comment} `;

  listElem.appendChild(listElem1);
  commentElement.appendChild(listElem);
};

const displayComments = async () => {
  const allComments = await getComments();
  allComments.forEach((comment) => showComments(comment.username, comment.comment));
};
displayComments();