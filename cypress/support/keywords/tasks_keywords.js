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

    getTaskID(){
        const txt = cy.get(tasksElement.txt_tasks_id, {timeout  : 10000})
        txt.then(($handle) => {
            cy.wrap($handle.text().replace("Task / ", "")).as('taskId')
        })
    }

    verifyTaskId(){
        const txt = cy.get(tasksElement.txt_related, {timeout  : 10000})
        txt.should(($handle) => {
            expect($handle.text()).to.include(value)
        })
    }

    inputSearchTasks(value){
        const field = cy.get(tasksElement.txt_search_tasks)
        field.type(value+'{enter}')
        return this

    }
}

export default new Tasks();