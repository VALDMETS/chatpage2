import $ from 'jquery';
import user from '../models/username';

function createChatPage() {
  const $chatPage = $(`
    <div class="chat-container">
			<div class="chat-window">
			</div>
      <form class="new-message">
        <input type="text" id="new-text">
        <input type="submit" id="message-submit" value="SUBMIT">
      </form>
		</div>`);

    $chatPage.find('#message-submit').click(function(evt){
        evt.preventDefault();
        let messageContent = $chatPage.find('#new-text').val();
        $.ajax({
            url: 'http://tiny-za-server.herokuapp.com/collections/benscoolchat',
            type: 'POST',
            dataType: 'application/json',
            data: {
                name: user.username,
                  body: messageContent,
                timestamp: new Date()
            },
            success: function (response) {
                console.log('wow it posted');
            }
        });
        $chatPage.find('#new-text').val('');
    });
  return $chatPage;
}

export default createChatPage;
