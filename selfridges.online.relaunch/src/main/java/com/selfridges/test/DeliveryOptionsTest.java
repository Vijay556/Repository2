/*package com.selfridges.test;

import org.openqa.selenium.By;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import com.selfridges.pages.*;
import com.selfridges.util.WebController;

public class DeliveryOptionsTest{
	
	WebController controller=WebController.getInstance();
	DeliveryOptionsChooseAddressPage dop=PageFactory.initElements(controller.driver, DeliveryOptionsChooseAddressPage.class);
	GiftOptionsPage gop=PageFactory.initElements(controller.driver, GiftOptionsPage.class);
	GlobalMenu gm=PageFactory.initElements(controller.driver, GlobalMenu.class);
	MyBagPage mgp=PageFactory.initElements(controller.driver, MyBagPage.class);
	
	@Before
	public void setUp(){
		System.out.println("Running before method");
		controller.invokeBrowser();
	}
	@After
	public void tearDown(Scenario scenario){
		System.out.println("Running after method");
		//Embed the screenshots to the report if scenario is failed
		 if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) controller.driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	    }	
	}
	
	@After("@clearBasket")
	public MyBagPage clearBasket(){
		controller.goToURL("HomePageURL");
		mgp=gm.viewBag().clearBasket();
		return mgp;
	}
	
	@Given("^I add a \"([^\"]*)\" to the basket$")
	public void I_add_an_item_to_the_basket(String item) throws Throwable {
		
		controller.goToURL("HomePageURL");
		//gm=PageFactory.initElements(controller.driver, GlobalMenu.class);
		gm.searchProduct(item).addToBag().addToBag().close();		
	}


	/*@Then("^I should be able to do click and collect as guest by entering ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*)$")
	public GiftOptionsPage I_should_be_able_to_do_click_and_collect(String ttl, String fName, String lName, String email, String phone, String storeName) throws Throwable {
		
		gop=dop.clickAndCollectAsGuest(ttl, fName, lName, email, phone, storeName).continueToOrderSummaryRight();
		return gop;	
	}*/
	

	/*@Then("^I should be able to do UK delivery as guest by entering ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*)$")
	public GiftOptionsPage I_should_be_able_to_do_UK_delivery(String ttl, String fName, String lName, String email, String phone, String postcode, String adr1, String adr2, String town) throws Throwable {
		dop.ukDeliveryAsGuest(ttl, fName, lName, email, phone, postcode, adr1, adr2, town);
		gop=dop.continueToOrderSummaryRight();
		return gop;	    
	    
}
	
	@Then("^Change the store to \"([^\"]*)\"$")
	public void Change_the_store_to(String store) throws Throwable {	    
		GiftOptionsPage gop1=gop.changeStore(store);
		gop1.payNowByTopBtn();
	}
	
	@Then("^I should be able to do International delivery as guest by entering ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*), ([^\"]*)$")
	public void I_should_be_able_to_do_International_delivery(String ttl, String fName, String lName, String email, String phone, String postcode, String adr1, String adr2, String town, String country) throws Throwable {
		dop.intDeliveryAsGuest(ttl, fName, lName, email,phone, postcode, adr1, adr2, town, country).continueToOrderSummaryRight();
	    
	}
	
	@When("^I do check out as a user$")
	public void I_do_check_out_as_a_user() throws Throwable {
		gm.checkOut().userCheckOut("email", "password").clickAndCollectAsUser("London").continueToOrderSummaryRight();
	    
	}

	@Then("^I should be able to do UK delivery as a user$")
	public void I_should_be_able_to_do_UK_delivery_as_a_user() throws Throwable {
	    
	}
	
	@When("^I do check out as a user with email \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void I_do_check_out_as_a_user_with_email_and_password(String username, String password) throws Throwable {
		gm.checkOut().userCheckOut();	    
	}
	

}
*/