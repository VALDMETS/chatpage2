import $ from 'jquery';

const $chatPage = $(`
    <div class="chat-container">
			<div class="chat-window">
			</div>
		</div>`);

const $messageUnit = $(`
	  <div class="message">
			<span>Username</span>
			<span>Timestamp</span>
			<span>Message stuff Blah</span>
		</div>`);
const $newMessage = $(`
    <form class="new-message">
			<textarea name="new-text" rows="4" cols="40"></textarea>
			<input type="submit" name="message-submit" value="SUBMIT">
		</form>`);

export default $chatPage;
