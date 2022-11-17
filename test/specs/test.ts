import CartModal from '../pageobjects/Components/CartModal';
import NavBar from '../pageobjects/Components/NavBar';
import HomePage from '../pageobjects/HomePage';
import LoginModal from '../pageobjects/Components/LoginModal';

describe('test suit for cart functionality', () => {
  it('Verify cart button functionality when cart is empty', async () => {
    await HomePage.visit();
    await HomePage.closeNotification();
    await NavBar.setaddress('Mesrop Mashtots Avenue, 20');
    await NavBar.clickOnCartButton();
    await CartModal.checkEmptyCartMessage();
    await CartModal.closeCartModal()
  });

  // it('Verify that "Sign in to order " button displays in the cart modal when user is not signed in', async () => {
  //   await HomePage.visit();
  //   await HomePage.closeNotification();
  //   await NavBar.setaddress('Mesrop Mashtots Avenue, 20');
  //   await LoginModal.logIn('anna.elez.y@tumo.org','Ltkmabyfhbq059')
  // });

  

});
