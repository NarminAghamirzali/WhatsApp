const persons = [
    ['img/pp/me.jpg','Me', '#1'],
    ['img/pp/somebody.jpg','Somebody', '#2'],
    ['img/pp/rasul.jpg','Rasul', '#3'],
    ['img/pp/konul.jpg','Könül', '#4'],
    ['img/pp/somebody.jpg','Somebody', '#5'],
    ['img/pp/rasul.jpg','Rasul', '#6'],
    ['img/pp/konul.jpg','Könül', '#7'],
    ['img/pp/me.jpg','Me', '#8']
  ]
  let personsLen = persons.length;
  class Person {
    constructor(src, title){
      this.src = src
      this.title = title
    }
  }

  const chatList = document.querySelector('.chat-list')
 // const chatInfo = document.querySelector('.chat-info')
  
  const avatar = document.querySelector('.avatar')
  const title = document.querySelector('.person-title')
  let url = window.location.href

  const activeUrl = url.substr((url.length - 2), 2)
const id = url.substr((url.length - 1), 1)

if(personsLen === 0){
  chatList.style.display = "none";
}
for(let i = 0; i < personsLen; i++){

  const person = new Person(persons[i][0], persons[i][1]);
  chatList.innerHTML +=  `
                            <div class="list-item">
                                <a href="${persons[i][2]}" class="list-item-btn" role="button">
                                    <div class="person-pp">
                                        <div class="avatar">
                                            <img src="${person.src}" alt="" >
                                        </div>
                                    </div>
                                    <div class="person-info">
                                        <div class="title-meta">
                                            <div class="person-title">${person.title}</div>
                                            <div class="person-meta">Dünən</div>
                                        </div>
                                        <div class="last-message">Welcome to WhatsApp!</div>
                                    </div>
                                </a>
                            </div>
                        
                        `
  
}
const mainBeginner = document.querySelector('.main-beginner');



const btnContainer = document.querySelector(".chat-list");

// Get all buttons with class="btn" inside the container
const btns = btnContainer.querySelectorAll(".list-item-btn");
const current = document.getElementsByClassName("active");
const main = document.querySelector(".main-chat-wrapper");

if(current.length === 0){
  main.style.display = "none";
  mainBeginner.style.opacity = "1";
}

if(!(btns===null)){
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {

        mainBeginner.style.display = "none";
        main.style.display = "block";
        const avatarImg = document.getElementsByClassName("avatar");
        
        const titleName = document.getElementsByClassName("person-title");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        const activeId = this.href.substr((this.href.length - 2), 2);
        for(var l = 0; l < personsLen; l++){
          if(activeId === persons[l][2]){
            
            console.log(avatarImg[l])
            avatarImg[personsLen].innerHTML = `<img src="${persons[l][0]}"  width="40px">`
            titleName[personsLen].innerHTML = `<h3 class="full-name">${persons[l][1]}</h3>`




            const msgList = document.querySelector(".message-list");
                  msgList.id = activeId;
            const activeChat = document.getElementById(activeId);

            const input = document.querySelector(".message-input");
            const sendBtn = document.querySelector(".msg-btn");

            console.log(sendBtn)
            const stickyDate = document.createElement('div')
            const time = document.createTextNode('22.03.2023')
                  stickyDate.classList = 'sticky-date'
                  stickyDate.appendChild(time)

            sendBtn.addEventListener("click", function(){
                if(activeChat.querySelector('.sticky-date') == null){
                  activeChat.appendChild(stickyDate)
                }
                if(input.value != ""){


                
              const messageListItem = document.createElement('div')
                    messageListItem.classList = 'message-list-item'
                    messageListItem.id = "message1";
                    activeChat.appendChild(messageListItem);
                    
                  
              const textContent = document.createElement('div')
                    textContent.classList = 'text-content'
                    if(messageListItem.querySelector('.text-content') == null){
                      messageListItem.appendChild(textContent);
                    }

              const messageContent = document.createElement('div')
                    messageContent.classList = 'message-content'
                    if(textContent.querySelector('.message-content') == null){
                      textContent.appendChild(messageContent);
                    }
              const messageMeta = document.createElement('span')
                    messageMeta.classList = 'message-meta'
                    if(textContent.querySelector('.message-meta') == null){
                      textContent.appendChild(messageMeta);
                    }
              const messageTime = document.createElement('span')
                    messageTime.classList = 'message-time'
              const d = new Date()
              let timeNow = `${d.getHours()}:${d.getMinutes()}`;
              console.log(timeNow)
                    if(messageMeta.querySelector('.message-time') == null){
                      messageMeta.appendChild(messageTime);
                      messageTime.innerText = timeNow;
                    }
              const seen = document.createElement('img');
                    seen.src = "img/logo/tik.svg";
                    seen.style.width = "12px";
                    if(messageMeta.querySelector('img') == null){
                      messageMeta.appendChild(seen);
                    }
              
                  messageContent.innerText = input.value;
                }
                
                input.value = "";
            });







          }
        }
      this.className += " active";
    });
  }
}
