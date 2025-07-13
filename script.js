let Detailcontact= document.querySelector(".contact-btn")
let container= document.querySelector(".container")
let editForm = document.querySelector("#editForm")
let editcontainer = document.querySelector(".edit-container")
let totalcontact= document.querySelector(".TotalContact")
let cancelbtn= document.querySelector(".TotalContact .cancel")
Detailcontact.addEventListener("click",function(){
    container.style.display = 'none'
    totalcontact.style.display ='block'  
})

cancelbtn.addEventListener("click",function(){
    container.style.display='block'
    totalcontact.style.display='none'
    
})

let inputTag = document.querySelector(".name-group .input-group .first")
let lastTag = document.querySelector(".name-group .input-group .last")
let EmailTag = document.querySelector(".email")
console.log(EmailTag);



let phoneno = document.querySelector("form .phone input")
let contactDetail =document.querySelector(".contactDetail")
let button =document.querySelector("form button")


let arr=[]
let saved =localStorage.getItem("contacts")

if(saved){
    arr =JSON.parse(saved)
    contacts()
}


button.addEventListener("click",function(event){
    event.preventDefault()
    
    let name =inputTag.value+" "+lastTag.value
    let phoneNumber =phoneno.value

    if(inputTag.value == '' || phoneno.value == ''){
        alert("please Enter a Both Task Name or Phoneno")
        inputTag.value=''
        phoneno.value=''
        lastTag.value=''

        return
    }
    

    arr.push({
        name:`${name}`,
        mobileNo:`${phoneNumber}`
    })

    localStorage.setItem("contacts",JSON.stringify(arr))
    contacts()
    
    totalcontact.style.display='block'
    container.style.display = 'none'

    inputTag.value=''
    phoneno.value=''
    lastTag.value=''
    EmailTag.value=''
  
    
})



function contacts(){
    let sum=''
    arr.forEach(function(el,idx){
        sum=sum+`<div class="contact">
                <div class="info">
                <h1>${el.name}</h1>
                <h6>+91 ${el.mobileNo}</h6>
                </div>
                <div class="actions">
                    <button class="edit" id=${idx}>Edit</button>
                    <button class="delete">Delete</button>
                </div>
        </div>`
        })
        contactDetail.innerHTML=sum

        let deleteBtn =document.querySelectorAll(".contact .delete")
        
    
    
    deleteBtn.forEach(function(el,id){
    el.addEventListener("click",function(){
        let index =id
        arr.splice(id,1)
        contacts()

        localStorage.setItem("contacts",JSON.stringify(arr))
    })
    })

    let editbtn = document.querySelectorAll(".contact .edit")
    let editDetail = document.querySelector(".edit-container")
    let formHTML=`
    
    <div class="input-group">
        

        <label>Full Name</label>
        <input type="text" id="editName" oninput="this.value = this.value.replace(/[^a-zA-Z\\s]/g, '')" required>
      </div>


      <div class="input-group">
        <label>Phone Number</label>
        <input type="tel" id="editPhone" pattern="[0-9]{10}" maxlength="10" required>
      </div>

      <div class="button-group">
        <button type="submit" id="change">Save Changes</button>
        <button type="button" class="cancel-btn" id="cancelBtn">Cancel</button>
      </div>`

      
      
      
      
      function EditHistory(){
          editbtn.forEach(function(el,idx){
              el.addEventListener("click",function(){  
                            
                  editForm.innerHTML=formHTML

                  let editName = document.querySelector("#editName")
                  editName.focus()
                  
                  let editphone = document.querySelector("#editPhone")
                  

                  let detail = arr[idx]
                  editName.value = detail.name
                  editphone.value =detail.mobileNo


                  let changecontact = document.querySelector("#change")
                  changecontact.addEventListener("click",function(el){
                    el.preventDefault()
                    arr[idx].name = editName.value
                    arr[idx].mobileNo = editphone.value
                    

                    localStorage.setItem("contacts",JSON.stringify(arr))
                    contacts()
                    
                    editName.value=''
                    
                    editphone.value=''   
                    editcontainer.style.display='none'
                    totalcontact.style.display='block'

                    
                    
                  })
                  let cancelChange = document.querySelector(".cancel-btn")
                  cancelChange.addEventListener("click",function(){
                  editcontainer.style.display='none'
                  totalcontact.style.display='block'

                  })

                  editcontainer.style.display='block'
                  totalcontact.style.display='none'
                    
                  
                  
                })


            })
            
        }  
        EditHistory()
        
        
}