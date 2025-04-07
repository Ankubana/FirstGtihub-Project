
    async  function onloading(){
      const users=await(fetch("https://omdbapi.com/?apikey=4cfe7eb4&s=fast"))
      const usersData=await users.json()
      console.log(usersData)
      try{ 
        if (usersData.Response === "True")
        {
      const UserListEl=document.querySelector(".project")
      UserListEl.innerHTML=usersData.map((userData)=>carsMovies(userData)).join("")
   
      const loadingPage=document.querySelector(".searchInput__wrapper")
       loadingPage.classList+= ".searchInput__wrapper"
      loadingPage.innerHTML=
    `<div class="search">
   <input  class="searchInput" type="text" placeholder="search by title,by actor "></input> 
  </div>
  <div class="search" onclick="onloading( )">
   <button class="search__effect" ><i class="fas fa-spinner"></i></i></button>
  </div>`}}
   catch(error) {
    console.error(error);
}
   }
   function carsMovies(userData)
  {   
    console.log(userData)
      return`<figure class="poject__img" >
         <img src="/Assets/FSE_img.png" alt="" class="fes_img">
         <figure class="cars_image" >
           <img src="${userData.Poster}" alt="" class="car_img">
       </figure>`
  }
  

