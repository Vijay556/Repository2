/*package com.selfridges.test;

import java.lang.reflect.Field;

import org.apache.log4j.Category;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.picocontainer.behaviors.Intercepted.Controller;

import com.selfridges.pages.GlobalMenu;
import com.selfridges.pages.HomePage;
import com.selfridges.pages.MyDetails;
import com.selfridges.pages.SignInPage;
import com.selfridges.util.WebController;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.ExecutionUnitRunner;
import cucumber.runtime.junit.JUnitReporter;
import cucumber.runtime.model.CucumberBackground;
import cucumber.runtime.model.CucumberScenario;

public class LoginTest {
	
	WebController controller=WebController.getInstance();
	//WebDriver driver;
	HomePage hp=null;
	SignInPage sp=null;
	MyDetails md=null;
	GlobalMenu gm=null;
	Logger log=WebController.logger;
	
	@Before
	public void setUp(Scenario scenario){
		log.info("Running before method");	
		       				
	}
	@After
	public void tearDown(Scenario scenario){
		log.info("Running after method");
		 if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) controller.driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png"); //stick it in the report
	    }
		 
	}
	
	@Given("^Im not logged in$")
	public void Im_not_logged_in() throws Throwable {
	    //Check if the user is already logged in
		//controller.invokeBrowser();
		log.info("Going to Home page and login page");
		controller.goToURL("HomePageURL");
		gm=PageFactory.initElements(controller.driver, GlobalMenu.class);
		if(gm.isLoggedIn())
			gm.doLogOut();		
		
	}
	
	@Given("^I go to login page$")
	public SignInPage I_go_to_login_page() throws Throwable {
		log.info("Executing go to login page step");
		sp=gm.goToSignInPage();
		return sp;	    
	}

	@When("^I login with username and password$")
	public MyDetails I_login_with_username_and_password() throws Throwable {
		
		log.info("Executing login step");		
		System.out.println(controller.ENV.getProperty("Email"));
		System.out.println(controller.ENV.getProperty("Password"));
		md=sp.doLogin(controller.ENV.getProperty("Email"), controller.ENV.getProperty("Password"));
		return md;			    
	}

	@Then("^I should be able login and see \"([^\"]*)\" header$")
	public void I_should_be_able_login_and_see_header(String myDetails) throws Throwable {
		log.info(myDetails);
	  
	}

	@Then("^I should see \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" on left nav bar$")
	public void I_should_see_and_on_left_nav_bar(String myDetails, String ordersAndReturns, String address, String payment) throws Throwable {
	   log.info(myDetails);
	   log.info(ordersAndReturns);
	}
}
*/