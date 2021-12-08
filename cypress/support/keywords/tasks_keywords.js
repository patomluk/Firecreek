import { tasksElement } from "../pageObjects/tasks_element";

class Tasks {
    clickButtonAddTasks(){
        const button = cy.get(tasksElement.btn_add_tasks)
        button.click()
        return this
    }

    verifyHeaderTaskRelated(value){
        const txt = cy.get(tasksElement.txt_heder_task, {timeout  : 10000})
        txt.should(($handle) => {
            expect($handle.text()).to.include(value)
        })
    }

    verifyRelationRelated(value){
        const txt = cy.get(tasksElement.txt_related, {timeout  : 10000})
        txt.should(($handle) => {
            expect($handle.text()).to.include(value)
        })
    }

}

export default new Tasks();