(() =>{
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatForm = document.querySelector('form'),
      nameInput = document.querySelector('.nickname'),
      chatMessage = chatForm.querySelector('.message'),
      nickName = null,
      welpage = document.querySelector('.welcome'),
      colorall = document.querySelector('.colorCon'),
      colorsing = colorall.querySelectorAll('.colordiv'),
      enterbutton = document.querySelector('#enter'),
      appliedClass;


  function setNickname() {
    nickName = this.value;
  }

  function appendMessage(msg) {
    //debugger;
    let newMsg = `<li>${msg.message}</li>`;
    messageList.innerHTML += newMsg;
  }

  function appendDiscMessage(msg) {
    //debugger;
    let newMsg = `<li>${msg}</li>`;
    messageList.innerHTML += newMsg;
  }

  function handleSendMessage(e) {
    e.preventDefault(); //block default behaviour (page refresh)
    nickName = (nickName && nickName.length > 0) ? nickName : "A user";

    msg = `${nickName} says ${chatMessage.value}`;

    socket.emit('chat message', msg)
    chatMessage.value = '';
    return false;
  }

  function applycolor(){

    messageList.style.color = this.id;

    colorsing.forEach(function(elements, index){
    elements.classList.remove('choose');
    });

    this.classList.add('choose');
  }

  function enterchat() {
    TweenMax.to(welpage, 1, { css:{top:"-1000"}});
  };







  colorsing.forEach(function(elements){
  elements.addEventListener('click', applycolor, false);
  });
  enterbutton.addEventListener('click', enterchat, false);
  nameInput.addEventListener('change', setNickname, false);
  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
