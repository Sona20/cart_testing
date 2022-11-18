import CartModal from '../pageobjects/Components/CartModal';
import NavBar from '../pageobjects/Components/NavBar';
import HomePage from '../pageobjects/HomePage';
import RestaurantPage from '../pageobjects/RestaurantPage';
import LoginModal from '../pageobjects/Components/LoginModal';
import DishModal from '../pageobjects/Components/DishModal';

describe('test suit for cart functionality', () => {
  beforeEach(async () => {
    await HomePage.visit();
    await HomePage.closeNotification();
    await NavBar.setaddress('Mesrop Mashtots Avenue, 20');
  });

  afterEach(async () => {
    await browser.reloadSession();
  });

  it.only('Verify cart button functionality when cart is empty', async () => {
    await NavBar.clickOnCartButton();
    await CartModal.checkEmptyCartMessage();
    await CartModal.closeCartModal();
  });

  it('Verify that counter appears on the cart icon after adding an item to the cart', async () => {
    await HomePage.clickOnRestaurant();
    await RestaurantPage.clickOnCartIcon();
    await NavBar.checkNotificationOnCart();
  });

  it('Verify that counter appears on the cart icon after after clicking on "Add to cart" button', async () => {
    await HomePage.clickOnRestaurant();
    await RestaurantPage.clickOnDish();
    await DishModal.clickOnAddToCartButton();
    await NavBar.checkNotificationOnCart();
  });

  // it('Verify that "Sign in to order " button displays in the cart modal when user is not signed in', async () => {
  //   await LoginModal.logIn('anna.elez.y@tumo.org', 'Ltkmabyfhbq059');
  // });

  it('Verify that "Sign in to order " button displays in the cart modal when user is not signed in', async () => {
    await HomePage.clickOnRestaurant();
    await RestaurantPage.clickOnCartIcon();
    await NavBar.clickOnCartButton();
    await CartModal.checkSignInButtonText();
  });

  it('Check if cart items details are translated after changing language', async () => {
    await HomePage.clickOnRestaurant();
    await RestaurantPage.clickOnCartIcon();
    await NavBar.changeLanguage();
    await browser.pause(2000);
    await NavBar.clickOnCartButton();
    await CartModal.seeDishDetails();
    await browser.pause(2000);
    await DishModal.dishDesc();
  });

  it('Check if cart button have Go to checkout text after signing up', async () => {
    await HomePage.clickOnRestaurant();
    await RestaurantPage.clickOnCartIcon();
    await NavBar.clickOnCartButton();
    await (await CartModal.cart_button).click();
    await LoginModal.logIn('anna.elez.y@tumo.org', 'Ltkmabyfhbq059');
    await NavBar.clickOnCartButton();
    await expect(CartModal.cart_modal_button).toHaveTextContaining(
      'Go to Checkout'
    );
  });
});
