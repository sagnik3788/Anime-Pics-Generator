const btnE1=document.getElementById("btn");/*use for target the id*/
const animecontainerE1=document.querySelector(".anime-container");/*use for target the class*/
const animeImgE1=document.querySelector(".anime-img")
const animeNameE1=document.querySelector(".anime-name")

btnE1.addEventListener("click",async function(){
      try {
        btnE1.disabled=true;
        btnE1.innerText="loading..."
        animeNameE1.innerText="Updating..."
        const response=await fetch("https://api.catboys.com/img")
        const data=await response.json();
        btnE1.disabled=false;
        btnE1.innerText="Get Anime"
        animecontainerE1.style.display="block";
        animeImgE1.src=data.url;
        animeNameE1.innerText=data.artist;
      } catch (error) {
        console.log(error);
      }
})