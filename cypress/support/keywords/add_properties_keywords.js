import { addPropertiesElement } from "../pageObjects/add_properties_element";

class AddProperties {
    clickSeleteMultipleUnit(){
        const button = cy.get(addPropertiesElement.btn_multiple_unit)
        button.click()
        return this
    }

    clickSeleteSingleUnit(){
        const button = cy.get(addPropertiesElement.btn_single_unit)
        button.click()
        return this
    }

    inputPropertiesName(value){
        const field = cy.get(addPropertiesElement.txt_profile_address_name)
        field.type(value)
        return this
    }

    selectPropertiesOwner(value){
        const field = cy.get(addPropertiesElement.ddw_properties_owner)
        field.click()
        const search = cy.get(addPropertiesElement.txt_search_owner)
        search.type(value+'{enter}')
        return this

    }

    inputAddress1(value){
        const field = cy.get(addPropertiesElement.txt_profile_address1)
        field.type(value)
        return this
    }

    inputAddress2(value){
        const field = cy.get(addPropertiesElement.txt_profile_address2)
        field.type(value)
        return this
    }

    inputPostcode(value){
        const field = cy.get(addPropertiesElement.txt_profile_postcode)
        field.type(value)
        return this
    }

    inputCity(value){
        const field = cy.get(addPropertiesElement.txt_profile_city)
        field.type(value)
        return this
    }

    inputCounty(value){
        const field = cy.get(addPropertiesElement.txt_profile_county)
        field.type(value)
        return this
    }

    verifyCheckedMange(){
        const checkbox = cy.get(addPropertiesElement.chk_manage)
        checkbox.should('be.checked')
        return this

    }

    inputUnitCount(value){
        const field = cy.get(addPropertiesElement.txt_unit_count)
        field.clear()
        field.type(value)
        return this
    }

    clickButtonNextPage(){ 
        const button = cy.get(addPropertiesElement.btn_next_page)
        button.click()
        return this
    }
}

export default new AddProperties();