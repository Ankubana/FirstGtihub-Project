function openMenu() {
  document.body.classList += " menu--open"
}
function closeMenu() {
  document.body.classList.remove('menu--open')
}
 
async  function onloading(){
      const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
      const usersData=await users.json()
      console.log(usersData)
      const UserListEl=document.querySelector(".project__img")
      UserListEl.innerHTML=usersData.Search.map((userData)=>Movies(userData)).join("")
      console.log(check)
      const loadingPage=document.querySelector(".searchInput__wrapper")
       loadingPage.classList+= ".searchInput__wrapper"
      loadingPage.innerHTML= `<div class="search">
      <input  class="searchInput" type="text" placeholder="search by title,by actor "></input> 
     </div>
     <div class="search" onclick="onloading( )">
      <button class="search__effect" ><i class="fas fa-spinner"></i></i></button>
     </div>`
   }
function Movies(userData)
  { 
  if (check===0){
       return `<div class="project__img--bg" class="fes_img">
            <figure class="Movies__image" >
           <img src="${userData.Poster}" alt="" class="movie_img">
             </figure>
           </div> 
            `} else if(check===1){
         return `<div class="project__img--bg" class="fes_img" >
            </figure>
            <figure class="MoveHalf__img" >
           <img src="${userData.Poster}" alt="" class="movie_img">
            </figure>
           </div>
            ` }
  }

  const check=0,t=0;
   async function searchMovie(event){
    event.preventDefault()
    if (check===0)
    { 
      console.log(check)
      const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
      const usersData=await users.json()
      const UserListEl=document.querySelector(".project__img")
           UserListEl.innerHTML=usersData.Search.map((userData)=>{
     return`<div class="project__img--bg" class="fes_img" >
            </figure>
            <figure class="Movie__image" >
           <img src="${userData.Poster}" alt="" class="movie_img">
           </div> `
       }).join("")   
          check=1;
      }
  }
  searchMovie()