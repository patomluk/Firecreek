import { propertiesElement } from "../pageObjects/properties_element";

class Properties {
    clickButtonAddProperties(){
        const button = cy.get(propertiesElement.btn_add_properties)
        button.click()
        return this
    }

    inputSearchProperties(value){
        const field = cy.get(propertiesElement.input_search)
        field.type(value+'{enter}')
        return this
    }

    verifyPropertiesAfterAdd(value){
        const txt = cy.get(propertiesElement.txt_propreties, {timeout  : 10000})
        txt.should(($handle) => {
            expect($handle.text()).to.include(value)
        })
    }
}

export default new Properties();