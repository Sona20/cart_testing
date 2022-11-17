import Locators from './Locators/Locators';

class Homepage {
  public get notification_button() {
    return $(Locators.notification_button);
  }
  public get restauarant_muchacho() {
    return $(Locators.restauarant_muchacho);
  }

  public async visit() {
    await browser.url('https://menu.am/en');
  }

  public async closeNotification() {
    if (await (await this.notification_button).isExisting()) {
      await (await this.notification_button).click();
    }
  }
  public async clickOnRestaurant() {
      await (await this.restauarant_muchacho).click();
  }
}
export default new Homepage();
