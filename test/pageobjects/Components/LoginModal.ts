import Locators from '../Locators/Locators';
import AbstractPage from '../AbstractPage';
class LoginModal extends AbstractPage {
    public get login_button() {
        return $(Locators.login_button);
    }

    public get dialog_modal() {
        return $(Locators.dialog_modal);
    }

    public get email_input() {
        return $(Locators.email_input);
    }

    public get password_input() {
        return $(Locators.password_input);
    }

    public get sign_in_button() {
        return $(Locators.sign_in_button);
    }

    public get account_icon() {
        return $(Locators.account_icon);
    }

}

export default new LoginModal();