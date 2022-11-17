import Locators from './Locators/Locators';

class Restaurantpage {
  public get cart_icon() {
    return $(Locators.cart_icon);
  }

  public get dish_title() {
    return $(Locators.dish_title);
  }

  public get add_to_cart_button() {
    return $(Locators.add_to_cart_button);
  }

  public async clickOnCartIcon() {
    await (await this.cart_icon).click();
  }
  public async clickOnDish() {
    await (await this.dish_title).click();
    expect(await this.add_to_cart_button).toBeDisplayed();
  }

}
export default new Restaurantpage();
