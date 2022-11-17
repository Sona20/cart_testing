import Locators from './Locators/Locators';

class Restaurantpage {
  public get cart_icon() {
    return $(Locators.cart_icon);
  }
  public async clickOnCartIcon() {
      await (await this.cart_icon).click();
      await browser.pause(5000)
  }
}
export default new Restaurantpage();
