let searchBtn =document.querySelector(".search")
let input = document.querySelector(".usernameinp")
let card = document.querySelector(".card")

function getUserProfile(username){
    return fetch(`https://api.github.com/users/${username}`).then(raw=>{
      if(!raw.ok)
      {
        throw new Error("user not found")
      }
      return raw.json()
        
    })
}

function decorateProfiledata(detail){
    console.log(detail);
    
    let data=`<div
                class="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-500 animate-pulse shadow-inner border-4 border-[#0f172a]"><img src=${detail.avatar_url} class="rounded-full">
            </div>

            <!-- INFO -->
            <div class="flex-1 text-white space-y-2">
                <h2 class="text-xl font-bold">${detail.name} <span class="text-gray-300 font-normal">N/A</span></h2>
                <p class="text-sm text-gray-400">Username: <span class="text-cyan-400">${detail.login}</span></p>
                <p class="text-sm text-gray-400">Followers: <span class="text-white">${detail.followers} </span>Following: <span
                        class="text-white">${detail.following}</span></p>
                <p class="text-sm italic text-gray-500">${detail.bio}</p>
            </div>`

    card.innerHTML=data
}

searchBtn.addEventListener("click",function(){
    let inputType = input.value.trim()

    if(inputType.length >0){
        getUserProfile(inputType).then(data=>{
            decorateProfiledata(data);
            
        })
    }
    else{
        alert()
    }
    
      
})
