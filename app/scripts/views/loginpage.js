import $ from 'jquery';
import user from '../models/username';
const $loginPage = $(`
    <div class="login-container">
			<form class="login-form" >
				<input type="text" name="login-name" placeholder="LOGIN">
				<input type="submit" name="login-submit" value="SUBMIT">
			</form>
		</div>`);

export default $loginPage;
