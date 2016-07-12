import $ from 'jquery';
import createLoginPage from './views/loginpage';
import createChatPage from './views/chatpage';
import chatUpdate from './models/chatupdate';

function route() {

    let currentHash = location.hash;
    if (currentHash === '#login') {
       let $loginPage = createLoginPage();
        $('main').empty().append($loginPage);
    } else if (currentHash === '#chat') {
        let $chatPage = createChatPage();
        $('main').empty().append($chatPage);
        chatUpdate();
        let interval = window.setInterval(chatUpdate, 1000);
    }
}

export default route;
