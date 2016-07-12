import $ from 'jquery';
import route from './route';

$(window).on('hashchange', route);

location.hash = '#login';
route();
