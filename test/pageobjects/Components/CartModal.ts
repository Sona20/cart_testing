import AbstractPage from '../AbstractPage';
import Locators from '../Locators/Locators';

class CartModal extends AbstractPage{
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
  public get cart_modal_button() {
    return $(Locators.cart_modal_button);
  }
  public get product_img() {
    return $(Locators.product_img);
  }

  public async closeCartModal() {
    await (await this.close_icon).click()
  }

  public async seeDishDetails() {
    await (await this.product_img).click();
  }


}
export default new CartModal();
