import AbstractPage from './AbstractPage';
import Locators from './Locators/Locators';

class Homepage extends AbstractPage {
  public get notification_button() {
    return $(Locators.notification_button);
  }
  public get restaurant_muchacho() {
    return $(Locators.restaurant_muchacho);
  }

  public  visit() {
    return super.visit('')
  }

  public async closeNotification() {
    if (await (await this.notification_button).isExisting()) {
      await (await this.notification_button).click();
    }
  }
  public async clickOnRestaurant() {
      await (await this.restaurant_muchacho).click();
  }
}
export default new Homepage();
