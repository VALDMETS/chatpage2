import $ from 'jquery';
import $loginPage from './views/loginpage';
import $chatPage from './views/chatpage';

function route (){

    let currentHash = location.hash;
    if (currentHash === '#login') {
      $('main').empty().append($loginPage);
    } else if (currentHash === '#chat') {
      $('main').empty().append($chatPage);
    }
}

export default route;
