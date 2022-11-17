import CartModal from '../pageobjects/Components/CartModal';
import NavBar from '../pageobjects/Components/NavBar';
import HomePage from '../pageobjects/HomePage';
import RestaurantPage from '../pageobjects/RestaurantPage';

describe('test suit for cart functionality', () => {
  it('Verify cart button functionality when cart is empty', async () => {
    await HomePage.visit();
    await HomePage.closeNotification();
    await NavBar.setaddress('Mesrop Mashtots Avenue, 20');
    await NavBar.clickOnCartButton();
    await CartModal.checkEmptyCartMessage();
    await CartModal.closeCartModal()
  });

  it.only('Verify that counter appears on the cart icon after adding an item to the cart', async () => {
    await HomePage.visit();
    await HomePage.closeNotification();
    await NavBar.setaddress('Mesrop Mashtots Avenue, 20');
    await HomePage.clickOnRestaurant()
  });
});
