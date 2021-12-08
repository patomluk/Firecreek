import { addTasksElement } from "../pageObjects/add_tasks_element";

class AddTask {
    inputSearchProperties(value){
        const field = cy.get(addTasksElement.txt_search)
        field.click()
        const search = cy.get(addTasksElement.txt_search_properties)
        search.type(value+'{enter}')
        return this
    }
    clickPropertiesAfterSearch(){
        const field = cy.get(addTasksElement.txt_properties)
        field.click()
    }

    clickButtonAddTask(){
        const button = cy.get(addTasksElement.btn_add_task)
        button.click()
    }
    inputTasksDescription(value){
        const field = cy.get(addTasksElement.txt_description)
        field.type(value+'{enter}')
        return this
    }

    inputDueDate(value){
        const field = cy.get(addTasksElement.txt_date)
        field.type(value)
        return this
    }

    inputTime(value){
        const field = cy.get(addTasksElement.txt_time)
        field.type(value)
        return this
    }

    inputAssign(value){
        const field = cy.get(addTasksElement.txt_assign)
        field.type(value+'{enter}')
        return this
    }

    selectTasksType(value){
        const field = cy.get(addTasksElement.sle_tasks_type, {timeout  : 10000})
        field.select(value)
        return this
    }

}

export default new AddTask();