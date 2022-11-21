import AbstractPage from '../AbstractPage';
import Locators from '../Locators/Locators';

class DishModal extends AbstractPage {
  public get add_to_cart_button() {
    return $(Locators.add_to_cart_button);
  }
  public get dialog_modal() {
    return $(Locators.dialog_modal);
  }
  public get product_desc() {
    return $(Locators.product_desc);
  }


  public async clickOnAddToCartButton() {
    await (await this.add_to_cart_button).click();
  }

}

export default new DishModal();
