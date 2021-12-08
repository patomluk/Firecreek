import { leftHandPanelElement } from "../pageObjects/leftHandPanel_element";

class LeftHandPanel {
    clickMenuProperties(){
        const menuDropdown = cy.get(leftHandPanelElement.menuProperties)
        menuDropdown.click()
        return this
    }

    verifyPersonalName(value){
        const txt = cy.get(leftHandPanelElement.personalname, {timeout  : 10000})
            txt.should(($handle) => {
                expect($handle.text()).to.eql(value)
            })
    }

    clickMenuTasks(){
        const menuDropdown = cy.get(leftHandPanelElement.menuTasks)
        menuDropdown.click()
        return this
    }

    clickMenuNoti(){
        const menuDropdown = cy.get(leftHandPanelElement.menuNoti)
        menuDropdown.click()
        return this
    }    
}

export default new LeftHandPanel();