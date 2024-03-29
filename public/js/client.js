//required for front end communication between client and server
const socket = io('http://localhost:5000/');

const inboxPeople = document.querySelector(".inbox__people");

const inputField = document.querySelector(".message_form__input");
const messageForm = document.querySelector(".message_form");
const messageBox = document.querySelector(".messages__history");


let userName = "";
let id;

const newUserConnected = function (data) {


  //give the user a random unique id
  id = Math.floor(Math.random() * 1000000);
  userName = 'user-' + id;
  //console.log(typeof(userName));   


  //emit an event with the user id
  socket.emit("new user", userName);
  //call
  addToUsersBox(userName);
};

const addToUsersBox = function (userName) {
  //This if statement checks whether an element of the user-userlist
  //exists and then inverts the result of the expression in the condition
  //to true, while also casting from an object to boolean
  if (!!document.querySelector(`.${userName}-userlist`)) {
    return;

  }

  //setup the divs for displaying the connected users
  //id is set to a string including the username
  const userBox = `
    <div class="chat_id ${userName}-userlist">
      <h5>${userName}</h5>
    </div>
  `;
  //set the inboxPeople div with the value of userbox
  inboxPeople.innerHTML += userBox;
};

//call 
newUserConnected();

//message Join?
//when a new user event is detected
socket.on("new user", function (data) {
  data.map(function (user) {
    
    return addToUsersBox(user);
  });
});

socket.on("user joined", function(data){
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
  const messageHTML = `
  <div class="message receiver">
    <div class="message__content">${data} has joined</div>
    <div class="message__info">
      <span class="time_date">${formattedTime}</span>
    </div>
  </div>
`;

  messageBox.innerHTML += messageHTML;

  messageBox.scrollTop = messageBox.scrollHeight;
})

//Leave message?
//when a user leaves
socket.on("user disconnected", function (userName) {
  document.querySelector(`.${userName}-userlist`).remove();
  //add user leave message here
});




const addNewMessage = ({ user, message }) => {
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });

  const messageHTML = `
  <div class="message ${user === userName ? 'sender' : 'receiver'}">
    <div class="message__content">${message}</div>
    <div class="message__info">
      <span class="message__author">${user}</span>
      <span class="time_date">${formattedTime}</span>
    </div>
  </div>
`;

  messageBox.innerHTML += messageHTML;

  messageBox.scrollTop = messageBox.scrollHeight;

  // const receivedMsg = `
  // <div class="incoming__message">
  //   <div class="received__message">
  //   <p>${message}</p>
  //     <div class="message__info">
  //       <span class="message__author">${user}</span>
  //       <span class="time_date">${formattedTime}</span>
  //     </div>
  //   </div>
  // </div>`;

  // const myMsg = `
  // <div class="outgoing__message">
  //   <div class="sent__message">
  //     <p>${message}</p>
  //     <div class="message__info">
  //       <span class="time_date">${formattedTime}</span>
  //     </div>
  //   </div>
  // </div>`;

};

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputField.value) {
    return;
  }

  if (inputField.value.match(/<[^>]+>/g)){
    alert("Can't send html");
    return;
  }

  socket.emit("chat message", {
    message: inputField.value,
    nick: userName,
  });

  inputField.value = "";
});

socket.on("chat message", function (data) {
  addNewMessage({ user: data.nick, message: data.message });
});


var messageContainer = document.querySelector('.message-container');
var messageDiv = document.createElement('div');
messageDiv.classList.add('message');
messageDiv.textContent = message; 
messageContainer.appendChild(messageDiv);

