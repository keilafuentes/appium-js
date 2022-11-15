class Login {
  get userNameField() {
    return $(
      '//android.widget.EditText[@resource-id="com.clarord.miclaro:id/username_view"]'
    );
  }
  get passwordField() {
    return $(
      '//android.widget.EditText[@resource-id="com.clarord.miclaro:id/password_view"]'
    );
  }
  get loginBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.clarord.miclaro:id/full_login_button"]'
    );
  }
}
module.exports = new Login();
