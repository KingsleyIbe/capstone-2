import './style.css';
import { postComments, getComments } from './comment.js';

const url = 'https://api.tvmaze.com/shows';
const countUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/likes';
const elem = document.querySelector('.cards');
let data;

const render = (data) => {
  const dataLength = 240;
  document.querySelector('h1').innerText += ` (${dataLength})`;
  elem.innerHTML = '';
  for (let i = 0; i < dataLength; i += 1) {
    elem.innerHTML += `
<div class="cards-info" id='movie-${data[i].id}'>
         <img src=${data[i].image.medium} alt="" class="img">
            <p class=description>${data[i].name}</p>
<div class='likes-count'> 
      <i class="fas fa-heart fa-2x" ></i>
      <span>Likes-${data[i].likes}</span>
      </div>
            <div class="button">
              <button class="cmntBtn-button">Comments</button>
            </div>
          </div>
        </div>`;
  }
  const count = async (obj) => {
    await fetch(countUrl,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
  };

  document.querySelectorAll('i').forEach((like) => {
    like.addEventListener('click', () => {
      const obj = { item_id: like.id };
      const id = Number(like.parentNode.parentNode.id.split('-')[1]);
      const movie = data.find((x) => x.id === id);
      movie.likes += 1;
      obj.likes = movie.likes;
      like.parentNode.querySelector('span').innerText = `Likes-${obj.likes}`;
      count(obj);
    });
  });

  const clearInputsFields = () => {
    const userName = document.querySelector('#username');
    const userComment = document.querySelector('#comment');
    userName.value = '';
    userComment.value = '';
  };

  document.querySelectorAll('.cmntBtn-button').forEach((item) => {
    item.addEventListener('click', async () => {
      elem.style.display = 'none';
      const id = Number(item.parentNode.parentNode.id.split('-')[1]);
      const movie = data.find((x) => x.id === id);
      const showComment = document.querySelector('.commentPopUp');
      showComment.style.display = 'block';
      const comments = await getComments(item.parentNode.parentNode.id);
      showComment.innerHTML = `
    <div class="popup">
    <span>
    <i class="fas fa-times fa-2x"></i>
    </span>
    <div class="popup-box">
        <div class="popup-info">
            <img src=${movie.image.medium} class ="popup-image" alt="">
            <p class="name">${movie.name}</p>
        </div>
        <div class="details">
            <p>Title: ${movie.name}</p>
            <p>Language: ${movie.language}</p>
            <p>Runtime: ${movie.runtime}</p>
            <p>Status: ${movie.status}</p>
        </div>
        </div>
        <div class="comment-section">
            <div class="edit">
            <div>
            <h5 class="comment">comments (${comments.length ? comments.length : 0})</h5>
            <ul id="displayComments">
            ${comments.error ? '' : comments.map((c) => `<li><b>${c.username}: </b> ${c.comment}</li>`)}
            </ul>
            <h5>Add a comment</h5>
            <input type="text" id="username" placeholder="Your name"><br>
            <textarea type="text" id="comment" placeholder="Your comments"></textarea>
            <p id="error"></p>
            </div>
            <button type="submit" id="submit" class="commentBtn">Comment</button>
            </div>
            </div>
    </div>
`;
      document.querySelector('.fa-times').addEventListener('click', () => {
        showComment.style.display = 'none';
        elem.style.display = 'grid';
        elem.style.opacity = 'unset';
      });
      const submitBtn = document.querySelector('#submit');
      submitBtn.addEventListener('click', () => {
        const userName = document.querySelector('#username').value;
        const userComment = document.querySelector('#comment').value;

        if (userName === '' || userComment === '') {
          const displayError = document.querySelector('#error');
          displayError.innerHTML = '*All fields must be filled';
          setTimeout(() => {
            displayError.remove();
          }, 5000);
        } else {
          const obj = {
            item_id: item.parentNode.parentNode.id,
            username: userName,
            comment: userComment,
          };
          postComments(obj);
          clearInputsFields();
          const commentElement = document.querySelector('#displayComments');
          commentElement.innerHTML += `<li><b>${obj.username}</b> ${obj.comment}</li>`;
        }
      });
    });
  });
};

const getShows = async () => {
  const response = await fetch(url);
  data = await response.json();
  const response1 = await fetch(countUrl);
  const countData = await response1.json();
  for (let i = 0; i < data.length; i += 1) {
    const myId = `movie-${data[i].id}`;
    const count = countData.find((x) => x.item_id === myId);
    data[i].likes = count ? count.likes : 0;
  }
  render(data);
};
getShows();
