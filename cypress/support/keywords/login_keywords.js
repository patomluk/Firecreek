import { loginElement } from "../pageObjects/login_element";

class LoginPages {
    inputUsername(value){
        const field = cy.get(loginElement.txt_username)
        field.type(value)
        return this
    }

    inputPassword(value){
        const field = cy.get(loginElement.txt_password)
        field.type(value)
        return this
    }

    clickButtonLogin(){
        const button = cy.get(loginElement.btn_login)
        button.click()
        return this
    }

}

export default new LoginPages();