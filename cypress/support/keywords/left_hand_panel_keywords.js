import { leftHandPanelElement } from "../pageObjects/leftHandPanel_element";

class LeftHandPanel {
    clickMenuProperties(){
        const menuDropdown = cy.get(leftHandPanelElement.manuProperties)
        menuDropdown.click()
        return this
    }

    verifyPersonalName(value){
        const txt = cy.get(leftHandPanelElement.personalname, {timeout  : 10000})
            txt.should(($handle) => {
                expect($handle.text()).to.eql(value)
            })
    }
}

export default new LeftHandPanel();