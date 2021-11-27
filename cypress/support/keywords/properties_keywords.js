import { propertiesElement } from "../pageObjects/properties_element";

class Properties {
    clickButtonAddProperties(){
        const button = cy.get(propertiesElement.btn_add_properties)
        button.click()
        return this
    }

}

export default new Properties();