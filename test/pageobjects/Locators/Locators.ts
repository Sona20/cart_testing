const Locators = {
  notification_button: 'button=Ok',
  // navbar section
  address_input: "[name='set-address']",
  login_button: '[aria-label="Sign In"]',
  signUp_button: '[aria-label="Sign Up"]',
  cart_button: '[aria-label="basket"]',
  languages: '[data-id="languages"]',
  ru_lang: "li=ru",
  account_icon: '[data-id="account"]',
  count_on_cart: '.count',


  //   cart modal
  cart_modal: '#content',
  empty_cart_text: 'div=Your shopping cart is empty.',
  close_icon: '[data-id="closeIcon"]',
  cart_modal_button: '.MuiPaper-elevation1.MuiPaper-rounded .MuiButtonBase-root.MuiButton-root',

  //   home page
  restaurant_muchacho: '[title="Muchacho"]',


  //   restaurant page
  dish_title: 'h3[data-id="name"]',
  cart_icon: '[data-id="add-to-cart"]',


  // login modal
  email_input: "[name='user']",
  password_input: "[name='pwd']",
  dialog_modal: '[role="dialog"]',
  sign_in_button: '.MuiDialogContent-root .MuiButtonBase-root.MuiButton-root',

  // dish open modal
  product_img: "header .MuiList-root.MuiList-dense img",
  product_desc: "[data-id='product-desc']",
  add_to_cart_button: 'span=Add to Cart',

};
export default Locators;
