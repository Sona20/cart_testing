const Locators = {
  notification_button: 'button=Ok',
  // navbar section
  address_input: "[name='set-address']",
  login_button: '[aria-label="Sign In"]',
  signUp_button: '[aria-label="Sign Up"]',
  cart_button: '[aria-label="basket"]',
  languages: '[data-id="languages"]',
  account_icon: '[data-id="account"]',

  //   cart modal
  cart_modal: '#content',
  empty_cart_text: 'div=Your shopping cart is empty.',
  close_icon: '[data-id="closeIcon"]',

  //   home page
  restauarant_muchacho: '[href*="/restaurants/muchacho" ]',
  //   restaurant page

  // login modal
  email_input: "[name='user']",
  password_input: "[name='pwd']",
  dialog_modal: '[role="dialog"]',
  signIn_button: '.MuiDialogContent-root .MuiButtonBase-root.MuiButton-root',
};

export default Locators;
