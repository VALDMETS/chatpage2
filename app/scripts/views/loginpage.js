import $ from 'jquery';
import user from '../models/username';

function makeLogin() {
  const $loginPage = $(`
      <div class="login-container">
        <h2>WELCOME TO ULTRACHAT</h2>
  			<form class="login-form" >
  				<input type="text" name="login-name" style="text-transform:uppercase" placeholder="YOUR NAME?">
  				<input type="submit" name="login-submit" value="SUBMIT">
  			</form>
  		</div>`);

  $loginPage.find('input[type="submit"]').click(function(evt){
      console.log(evt);
      evt.preventDefault();
      user.username = $loginPage.find('input[type="text"]').val().toUpperCase();
      location.hash = '#chat';
  });

  return $loginPage;
}

export default makeLogin;
