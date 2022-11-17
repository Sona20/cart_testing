import Locators from '../Locators/Locators';

class DishModal {
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

  public async dishDesc() {
    await expect(await this.product_desc).toHaveTextContaining('тако с курицей 2шт, тако с говядиной 2шт, соус Ранч 2 порции, кесадилья с курицей 1шт, Кока Кола 0.5л 2шт')
  }
}

export default new DishModal();
