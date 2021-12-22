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
}

async function count(obj) {
	const response = await fetch(countUrl, {method: 'POST',headers: {'Content-Type':'application/json'},body:JSON.stringify(obj)});
};




	

