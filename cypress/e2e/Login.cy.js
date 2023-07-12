// import userDetails from '../fixtures/userDetails.json';
import envDetails from '../fixtures/envDetails.json';
import Login from './PageObjects/Login';

describe('Login', () => {
    it.skip('Load Login Screen', () => {
  
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      // open page url
      cy.visit(`${envDetails.backendApiUrl}/login`)
  
      //check if buttons are visible 
      cy.get('button.ant-btn-primary').should('be.visible')
      cy.get('button.ant-btn-default').should('be.visible')
      cy.get('.flex > .ant-typography > a').should('be.visible').contains('Sign Up')
  
    });
  
    it.only('Fill Login form', () => { 
   
        Login();

    });

    it.skip('Load Profile Accounts Screen', () => {
  
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
    
        // open page url
        cy.visit(`${envDetails.backendApiUrl}/profiles/accounts`)
    
        //check screen title 
        cy.get('section h3.fai-text__size--h3').should('be.visible').should('eq','Account Profiles')
    
      });
    
  
  })