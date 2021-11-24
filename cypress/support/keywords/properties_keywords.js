import { propertiesElement } from "../pageObjects/properties_element";

class PropertiesPage {
    clickButtonAddProperties(){
        const button = cy.get(propertiesElement.btn_add_properties)
        button.click()
        return this
    }

}

export default new PropertiesPage();