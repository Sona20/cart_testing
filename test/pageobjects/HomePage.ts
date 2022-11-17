import Locators from './Locators/Locators';

class Homepage {
  public get notification_button() {
    return $(Locators.notification_button);
  }

  public async visit() {
    await browser.url('https://menu.am/en');
  }

  public async closeNotification() {
    if (await (await this.notification_button).isExisting) {
      await (await this.notification_button).click();
    }
  }
}
export default new Homepage();
