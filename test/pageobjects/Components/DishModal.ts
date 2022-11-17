import Locators from '../Locators/Locators';

class DishModal {
  public get add_to_cart_button() {
    return $(Locators.add_to_cart_button);
  }
  public get dialog_modal() {
    return $(Locators.dialog_modal);
  }

  public async clickOnAddToCartButton() {
    await (await this.add_to_cart_button).click();
  }
}

export default new DishModal();
