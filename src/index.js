import './style.css';

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
      <i class="far fa-heart fa-3x" id='movie-${data[i].id}'></i>
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
      obj.likes = data.find(x => x.id === id).likes+1;
      count(obj)
      getShows()
	})
})

document.querySelectorAll('.cmntBtn-button').forEach((item) => {
  item.addEventListener('click', () => {
    const showComment = document.querySelector('.commentPopUp');
    console.log('Clicked');
    elem.style.display = 'none';
    for (let i = 0; i < data.length; i++){
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
        <form action="" class="commentForm">
            <label>Add a comment</label>
            <input type="text" placeholder="Your name">
            <textarea type="text" placeholder="Your comments"></textarea>
            <button type="submit" class="commentBtn">Comment</button>
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
