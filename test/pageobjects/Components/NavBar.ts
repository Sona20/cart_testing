import Locators from '../Locators/Locators';

class NavBar {
  public get address_input() {
    return $(Locators.address_input);
  }
  public get cart_button() {
    return $(Locators.cart_button);
  }
  public get count_on_cart() {
    return $(Locators.count_on_cart);
  }

  public async setaddress(addressName: string) {
    await (await this.address_input).setValue(addressName);
    // await (await $('.Mui-focused input')).isDisplayed()
    await browser.pause(1000);
    await browser.keys(['\uE015', '\uE015', '\uE015', '\uE007']);
  }
  public async clickOnCartButton() {
    await (await this.cart_button).click();
  }
  public async checkNotificationOnCart() {
    await expect(await this.count_on_cart).toBeDisplayed();
  }
}
export default new NavBar();
