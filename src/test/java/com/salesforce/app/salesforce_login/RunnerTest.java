package com.salesforce.app.salesforce_login;






import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resource",
		plugin={"html:output"})
public class RunnerTest {
	
}
