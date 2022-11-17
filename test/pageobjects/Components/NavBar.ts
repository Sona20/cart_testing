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
  public get languages() {
    return $(Locators.languages);
  }
  public get ru_lang() {
    return $(Locators.ru_lang);
  }

  public async setaddress(addressName: string) {
    await (await this.address_input).setValue(addressName);
    await browser.pause(1000);
    await browser.keys(['\uE015', '\uE015', '\uE015', '\uE007']);
  }

  public async clickOnCartButton() {
    await (await this.cart_button).click();
  }

  public async checkNotificationOnCart() {
    await expect(await this.count_on_cart).toBeDisplayed();
  }

  public async changeLanguage() {
    await (await this.languages).click()
    await browser.pause(2000)
    await (await this.ru_lang).click()

  }
}
export default new NavBar();
