import { unitSettingElement } from "../pageObjects/unit_setting_element";

class UnitSetting {
    verifyUnit(value){
        const txt = cy.get(unitSettingElement.header_unit, {timeout  : 10000})
        txt.should(($handle) => {
            expect($handle.text()).to.eql(value+' Units')
        })
        const unit = cy.get(unitSettingElement.tr_unit)
        unit.then(($handle) => {
            expect($handle.length).to.eql(value)
        })
    }

    selectUnitType(value){
        const field = cy.get(unitSettingElement.slt_unit_type)
        field.select(value)
    }

    selectManager(value){
        const field = cy.get(unitSettingElement.slt_manager)
        field.click()
        const search = cy.get(unitSettingElement.txt_search_manager)
        search.type(value+'{enter}')
        return this
    }

    selectAgency(value){
        const field = cy.get(unitSettingElement.slt_agency)
        field.click()
        const search = cy.get(unitSettingElement.txt_search_agency)
        search.type(value+'{enter}')
        return this
    }

    clickButtonApplyall(){
        const button = cy.get(unitSettingElement.btn_apply_all)
        button.click()
        return this

    }
    
    clickButtonAddProperties(){
        const button = cy.get(unitSettingElement.btn_add_properties)
        button.click()
        return this

    }

}

export default new UnitSetting();

