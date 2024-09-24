Feature: Login

In order to have a secured access to the system
As a user with different roles where 
James has a admin role and 
John has a standard role and 
Jean has a restricted role
James, John and Jean want to be authenticated through the Azure AD SSO
  
  
@login
 Rule: Successful login via Azure SSO for admin role with correct internal SSO credential
  Example: James is able to login with correct internal SSO credential
    Given James has an active account with admin role
    When he attempts to log in to the system with the correct credential 
    | email               |
    | my@hotmail.com |
    Then he is able to access to the system
   

