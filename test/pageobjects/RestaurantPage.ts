import Locators from './Locators/Locators';

class Restaurantpage {
  public get login_button() {
    return $(Locators.login_button);
  }

  public async visit() {
    await browser.url('https://menu.am/en');
  }

  public async closeNotification() {
      await (await this.login_button).click();
      await browser.pause(5000)
  }
}
export default new Restaurantpage();
