import $ from 'jquery';
import route from './route';
// import $loginPage from './views/loginpage';
// import $chatPage from './views/chatpage';

$(location.hash).on('hashchange',route);

route();
