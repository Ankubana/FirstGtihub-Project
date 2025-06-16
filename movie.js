function openMenu() {
  document.body.classList += " menu--open"
}
function closeMenu() {
  document.body.classList.remove('menu--open')
}
const check=0;
async  function onloading(){
  const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
  const usersData=await users.json()
  console.log(usersData)
  const UserListEl=document.querySelector(".project__img")
  UserListEl.innerHTML=usersData.Search.map((userData)=>Movies(userData)).join("")

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
  console.log(check)
   if (check===0){
   return `<div class="project__img--bg" class="fes_img" >
        </figure>
        <figure class="Movies__image" >
       <img src="${userData.Poster}" alt="" class="movie_img">
       </div> 
        `} else if(check===1){
     return `<div class="project__img--bg" class="fes_img" >
        </figure>
        <figure class="MoveHalf__img" >
       <img src="${userData.Poster}" alt="" class="movie_img">
       </div>
        ` }
}

async function searchMovie(event){
  event.preventDefault()
      let str=event.target.value
           str=str.replace(/\s/g,'');
           console.log(str) 
           if (((str==="Fast" || str==="fast")) ||((str==="Fast" || str==="fast")&& event.keyCode===13))
           {
            const UserListElem=document.querySelector(".movies__project")
            UserListElem.innerHTML= 
          `<section class="movies__project">
           <div data-v-66aecfa2="" data-v-040c1d60="" id="filter" class="content-wrapper justify-between">
           <h1 data-v-66aecfa2="" class="search-info">
           <div data-v-66aecfa2=""><span class="black-txt">Search results:</span><span class"text_purple">"${str}"</span"></div>
           </h1><div data-v-66aecfa2="" class="price-filter flex flex-col">
              <h2 data-v-66aecfa2=""><span data-v-66aecfa2="" class="black-txt" style="margin-right: 8px;">Price range:</span>$0 to $100,000 </h2>
              <div data-v-66aecfa2="" class="slider-wrapper"><div data-v-66aecfa2="" role="slider" aria-valuemin="0" aria-valuemax="100000" aria-orientation="horizontal" class="el-slider" aria-valuetext="0-100000" aria-label="slider between 0 and 100000">
                 <!----><div class="el-slider__runway">
               <div class="el-slider__bar" style="width: 100%; left: 0%;"></div>
               <div tabindex="0" class="el-slider__button-wrapper" style="left: 0%;">
               <div class="el-tooltip el-slider__button" aria-describedby="el-tooltip-4826" tabindex="0"></div></div>
               <div tabindex="0" class="el-slider__button-wrapper" style="left: 100%;">
              <div class="el-tooltip el-slider__button" aria-describedby="el-tooltip-9271" tabindex="0"></div></div><div>
              <div class="el-slider__stop el-slider__marks-stop" style="left: 0%;"></div>
              <div class="el-slider__stop el-slider__marks-stop" style="left: 100%;"></div></div>
              <div class="el-slider__marks"><div class="el-slider__marks-text" style="left: 0%;">$0</div>
              <div class="el-slider__marks-text" style="left: 100%;">$100,000</div></div></div></div></div>
              <div class="project__img-bg">
               <figure class="project__img" >
                 <i class="fas fa-spinner"></i>
               </div></div>
            </section>
           `
     const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
     const usersData=await users.json()
     const UserListEl=document.querySelector(".project__img")
       console.log(usersData)
       UserListEl.innerHTML=usersData.Search.slice(0,6).map((userData)=>{
 return`<div class="project__img--bg" class="fes_img" >
        <figure class="Movie__image">
       <img src="${userData.Poster}" alt="" class="movie_img">
       </figure>
       <div ><span class="Movie__title">Title</span>:${userData.Title}</div>
        <div><span class="Movie__year">Year:</span>${userData.Year}</div>
         <div class=Movie__Type><span class="Movie__type">Type:</span>${userData.Type}</div>
       </div> 
       `
   }).join("")   
           }else{
           const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
           const usersData=await users.json()
           const UserListEl=document.querySelector(".project__img")
             console.log(usersData)
             UserListEl.innerHTML=usersData.Search.slice(0,6).map((userData)=>{
               const str2 = userData.Title.replace(/\s/g,'');
              if (str===str2)
              {
       return`<div class="project__img--bg" class="fes_img" >
              <figure class="Movie__image">
             <img src="${userData.Poster}" alt="" class=""style="width:30%">
             </figure>
             <div ><span class="Movie__title">Title</span>:${userData.Title}</div>
              <div><span class="Movie__year">Year:</span>${userData.Year}</div>
               <div class=Movie__Type><span class="Movie__type">Type:</span>${userData.Type}</div>
             </div> 
             `
         }}).join("")  

}}
searchMovie()