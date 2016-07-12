import $ from 'jquery';
import moment from 'moment';
import createChatPage from '../views/chatpage';
import user from './username';

function chatUpdate() {
    $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/benscoolchat',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $('.chat-window').empty();
            data.forEach(function(item) {
                // var chatMessage = new ChatMessage(item);
                let divBuilder = `
                <div class="message" data-id="${item._id}">
          			   <span class="msgname">${item.name}:</span>
          		     <span class="msgbody">${item.body}</span>
                   <span class="msgtime">- ${moment(item.timestamp).fromNow()}</span>`;
                if (user.username === item.name) {
                    divBuilder += '<input type="button" class="delete" value="DELETE"></div>';
                } else {
                    divBuilder += '</div>';
                }
                $('.chat-window').prepend(divBuilder);
            });
            $('.delete').click(function(evt) {
              // chatMessage.delete();
                console.log('will this work');
                let currentID = ($(evt.target).parent()[0].dataset.id);
                console.log(currentID);
                $.ajax({
                    url: 'https://tiny-za-server.herokuapp.com/collections/benscoolchat/' + currentID,
                    type: 'DELETE',
                    dataType: 'json',
                    success: function() {
                        console.log('deleted!');
                    }
                });
            });
        }
    });
}

export default chatUpdate;
