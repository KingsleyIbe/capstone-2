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
    showComment.innerHTML = `
    <div class="popup">
        <div class="popup-info">
            <img src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="">
        </div>
        <p>Name</p>
        <div>
            <p>something</p>
            <p>something</p>
            <p>something</p>
            <p>something</p>
        </div>
        <h5>comments(count)</h5>
        <form action="">
            <input type="text">
            <input type="text">
            <input type="submit" value="Submit">
        </form>
    </div>
`
showComment.style.display = 'block';
    
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
