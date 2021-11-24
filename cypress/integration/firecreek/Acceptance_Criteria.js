import LoginPages from '../../../cypress/support/keywords/login_keywords'
import LeftHandPanel from '../../../cypress/support/keywords/left_hand_panel_keywords'
import PropertiesPage from '../../../cypress/support/keywords/properties_keywords'
import AddProperties from '../../support/keywords/add_properties_keywords'
let fixture;
var randomstring = require("randomstring");

before(() => {
    cy.fixture('testdata.json').then(function (data) {
        fixture = data
        cy.visit(fixture.webUrl)
        cy.url().should('include','staging.arthuronline.co.uk')
    })
})

describe(`QA Automation Test`, function () {
    it(`Login to system`, () => {
        LoginPages.inputUsername(fixture.username)
        LoginPages.inputPassword(fixture.password)
        LoginPages.clickButtonLogin()
        cy.url().should('eq',fixture.dashboardUrl)
        LeftHandPanel.verifyPersonalName(fixture.personalName)
    })
    it.only(`Add a property with a multiple rentable units`, () => {
        LoginPages.inputUsername(fixture.username)
        LoginPages.inputPassword(fixture.password)
        LoginPages.clickButtonLogin()
        cy.url().should('eq',fixture.dashboardUrl)
        LeftHandPanel.verifyPersonalName(fixture.personalName)
        LeftHandPanel.clickMenuProperties()
        PropertiesPage.clickButtonAddProperties()
        AddProperties.clickSeleteMultipleUnit()
        const propertiesName = randomstring.generate(10)
        AddProperties.inputPropertiesName(propertiesName)
        AddProperties.selectPropertiesOwner(fixture.add_properties.propertiesOwner)
        const address1 = randomstring.generate(5)
        const address2 = randomstring.generate(5)
        const postcode = randomstring.generate({length: 5,charset: 'numeric'})
        const countUnit = Math.floor(Math.random() * 10) + 1
        AddProperties.inputAddress1(address1)
        AddProperties.inputAddress2(address2)
        AddProperties.inputPostcode(postcode)
        AddProperties.inputCity(fixture.add_properties.city)
        AddProperties.inputCounty(fixture.add_properties.county)
        AddProperties.verifyCheckedMange()
        AddProperties.inputUnitCount(countUnit)
        AddProperties.clickButtonNextPage()
        
    })

})
