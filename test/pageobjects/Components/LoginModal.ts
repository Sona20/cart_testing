import Locators from '../Locators/Locators';

class LoginModal {
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

    public async logIn(email: string, password: string) {
        await (await this.login_button).click();
        await (await this.dialog_modal).isDisplayed();
        await (await this.email_input).setValue(email);
        await (await this.password_input).setValue(password);
        await (await this.sign_in_button).click();

        await expect(this.account_icon).toBeDisplayed()
    }

}

export default new LoginModal();