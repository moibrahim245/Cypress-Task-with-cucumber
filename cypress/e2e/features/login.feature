
Feature: Jumia website

        Background: Visit jumia website
            Given I am on the Jumia website


        Scenario: 01 Creating a new account
             When I navigate to identification page
              And I fill in the registration form with data from the  file and submit the form
             Then I should be redirected to the Home page

        Scenario: 02 Adding items to the cart
            Given I am logged in to the Jumia website
             When I hover over the supermarket menu
              And I click on the bakery submenu
              And I add "2" product to the cart
             When I navigate to cart page
             Then I can see the subtotal is calculated correctly according to the added item prices