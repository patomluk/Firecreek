import { addSuccessElement } from "../pageObjects/add_success";

class AddSuccess {
    verifyHeader(){
        const txt = cy.get(addSuccessElement.txt_header, {timeout  : 10000})
            txt.should(($handle) => {
                expect($handle.text()).to.eql('Multiple Units Added ')
            })
    }

    verifyPropertyreference(value){
        const txt = cy.get(addSuccessElement.txt_ref, {timeout  : 10000})
            txt.should(($handle) => {
                expect($handle.text()).to.include(value)
            })
    }

}

export default new AddSuccess();