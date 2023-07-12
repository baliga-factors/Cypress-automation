import userDetails from '../../fixtures/userDetails.json';
import envDetails from '../../fixtures/envDetails.json';

const Login = () => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  

      // open login page url
      let abc = cy.visit(`${envDetails.backendApiUrl}/login`) 
  
      //Login form elements - visible + fill
      cy.get('#login_form_username').should('be.visible').type(userDetails.email).should('have.value', userDetails.email)
      cy.get('#login_form_password').should('be.visible').type(userDetails.password).should('have.value', userDetails.password)
    
      //click on login button
      cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()
      
      cy.wait(2000) //wait till the api loads
      
      //successful redirect to dashboard
      cy.url().should('eq',`${envDetails.backendApiUrl}/`) 

      cy.wait(2000) //wait till the api loads

      cy.get('div.opacity-80').should('be.visible').contains(userDetails.email)
}


export default Login