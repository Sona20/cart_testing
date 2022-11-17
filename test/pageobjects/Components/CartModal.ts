import Locators from '../Locators/Locators';

class CartModal {
  public get cart_modal() {
    return $(Locators.cart_modal);
  }
  public get empty_cart_text() {
    return $(Locators.empty_cart_text);
  }
  public get cart_button() {
    return $(Locators.cart_button);
  }
  public get close_icon() {
    return $(Locators.close_icon);
  }
  public async checkEmptyCartMessage() {
    await expect( this.empty_cart_text).toHaveTextContaining("Your shopping cart is empty")
  }
  public async closeCartModal() {
   await (await this.close_icon).click()
   await expect(this.cart_modal).not.toBeDisplayed()
  }

}
export default new CartModal();
