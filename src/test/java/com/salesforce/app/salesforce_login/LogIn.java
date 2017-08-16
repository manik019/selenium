package com.salesforce.app.salesforce_login;
import org.junit.Assert;

import com.salesforce.app.salesforce_login.util.Web_connection;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class LogIn {

	


	
	Web_connection selenium = new Web_connection();

		
		
		@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
		public void I_Go_To_Salesforce(String URL,String browser){
			System.out.println("I am going to "+ URL +" on  "+ browser);
			selenium.openBrowser(browser);
			selenium.navigate(URL);
		}
		@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
		public void I_enter(String objectName, String text){
			selenium.type(text, objectName);
		}
		@And("^I click on \"([^\"]*)\"$")
		public void I_enter(String objectName){
			selenium.click(objectName);
			selenium.log("I click on "+objectName);
		}
		@Then("^Login should be \"([^\"]*)\"$")
		public void Then_login_should_be(String expectedResult){
			System.out.println("Login - "+ expectedResult);
			boolean result=selenium.isElementPresent("searchText");
			String actualResult=null;
			
			if(result)
				actualResult="success";
			else
				actualResult="failure";
			
			Assert.assertEquals(expectedResult, actualResult);
			selenium.driver.close();
		
		}
		

	}



