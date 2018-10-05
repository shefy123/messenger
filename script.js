function chatting() {

    for (let i = 0; i < chat.length; i++) {
        let cardEL = document.querySelector('.chat');
        cardEL.innerHTML += `    <li class="other">
    <div class="avatar">
        <img src="images/${chat[i].pic}" draggable="false" />
    </div>
    <div class="msg">
        <p>${chat[i].msg}
        <emoji class="pizza" /></p>
        <time>20:17</time>
    </div>
</li>
<li class="self">

    <div class="msg">
        <p>${chat[i].you}</p>
        <p><i class="fas fa-smile"></i>
        </p>
        <time>20:18</time>
    </div>
</li>
      `
    }
    
}