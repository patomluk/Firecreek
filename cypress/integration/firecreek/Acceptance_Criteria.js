import LoginPages from '../../../cypress/support/keywords/login_keywords'
import LeftHandPanel from '../../../cypress/support/keywords/left_hand_panel_keywords'
import Properties from '../../../cypress/support/keywords/properties_keywords'
import AddProperties from '../../support/keywords/add_properties_keywords'
import UnitSetting from '../../support/keywords/unit_setting_keywords'
import AddSuccess from '../../support/keywords/add_success_keywords'  

let fixture;
var randomstring = require("randomstring");

before(() => {
    cy.fixture('testdata.json').then(function (data) {
        fixture = data
        cy.visit(fixture.webUrl)
        cy.url().should('include','arthuronline.co.uk')
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
        Properties.clickButtonAddProperties()
        AddProperties.clickSeleteMultipleUnit()
        AddProperties.inputPropertiesName(fixture.add_properties.propertiesName)
        AddProperties.selectPropertiesOwner(fixture.add_properties.propertiesOwner)
        let address1 = randomstring.generate(8)
        let address2 = randomstring.generate(8)
        AddProperties.inputAddress1(address1)
        AddProperties.inputAddress2(address2)
        AddProperties.inputPostcode(fixture.add_properties.postcode)
        AddProperties.inputCity(fixture.add_properties.city)
        AddProperties.inputCounty(fixture.add_properties.county)
        AddProperties.verifyCheckedMange()
        AddProperties.inputUnitCount(fixture.add_properties.countUnit)
        AddProperties.clickButtonNextPage()
        UnitSetting.verifyUnit(fixture.add_properties.countUnit)
        UnitSetting.selectUnitType(fixture.unit_setting.unit_type)
        UnitSetting.selectManager(fixture.unit_setting.manage)
        UnitSetting.selectAgency(fixture.unit_setting.agent)
        UnitSetting.clickButtonApplyall()
        UnitSetting.clickButtonAddProperties()
        AddSuccess.verifyHeader()
        AddSuccess.verifyPropertyreference(fixture.add_properties.propertiesName)
        LeftHandPanel.clickMenuProperties()
    })

})
