import Locators from '../Locators/Locators';

class NavBar {
  public get address_input() {
    return $(Locators.address_input);
  }
  public get cart_button() {
    return $(Locators.cart_button);
  }

  public async setaddress(addressName:string) {
    await (await this.address_input).setValue(addressName);
    // await (await $('.Mui-focused input')).isDisplayed()
    await browser.pause(1000);
    await browser.keys(['\uE015', '\uE015', '\uE015', '\uE007']);
  }
  public async clickOnCartButton() {
    await (await this.cart_button).click();
  }
}
export default new NavBar();
