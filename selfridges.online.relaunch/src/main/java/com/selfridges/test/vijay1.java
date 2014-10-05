package com.selfridges.test;

import junit.framework.Assert;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.pages.GlobalMenu;
import com.selfridges.pages.HomePage;
import com.selfridges.pages.OrderConfirmationPage;
import com.selfridges.pages.PaymentPage;
import com.selfridges.util.WebController;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@SuppressWarnings("deprecation")
public class vijay1 {
	
	WebController controller=WebController.getInstance();
	GlobalMenu gm = null;
	HomePage hp = PageFactory.initElements(controller.driver, HomePage.class);
	PaymentPage pp = PageFactory.initElements(controller.driver, PaymentPage.class);
	OrderConfirmationPage ocp = PageFactory.initElements(controller.driver, OrderConfirmationPage.class);
	
	@Before
	public void setUp(){
		System.out.println("Running before method");
		controller.invokeBrowser();
		controller.goToURL("HomePageURL");
	}
	
	@After
	public void tearDown(Scenario scenario){
		System.out.println("Running after method");
		//Embed the screenshots to the report if scenario is failed
		 if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) controller.driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	    }
	   // controller.closeBrowser();		
	}
	
	@SuppressWarnings("deprecation")
	@Given("^Im on Selfridges website$")
	public void Im_on_Selfridges_website() throws Throwable {
	    //Assert.assertTrue("Sorry You are not on the home page", ((hp.GetHomePageUrl().contains("selfridges.com")) && (!hp.GetHomePageUrl().contains("selfridges.com/"))));
	}

	@When("^I add \"([^\"]*)\" to the basket$")
	public void I_add_to_the_basket(String arg1) throws Throwable {
		gm = PageFactory.initElements(controller.driver, GlobalMenu.class);
		//gm.clickMensL1link();
		gm.searchProduct(arg1).goToPDPOfSecondProduct().addToBag();
	}
		
	@When("^I choose collection point as \"([^\"]*)\" with deliver to \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public PaymentPage I_choose_collection_point_as_with_deliver_to_(String storename, String title, String fname, String lname, String email, String phonenum) throws Throwable {
		pp = gm.clickBasketIcon().continueToCheckOut().guestCheckOut().clickAndCollectAsGuest(title,fname,lname,email,phonenum).
		clickOnOrderSummaryButtonOnRight().selectFirstAvailableCollectionDate().clickOnPayNowButton1();
		return pp;
	}
 
	/*@When("^I paid towards my product with \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_paid_towards_my_product_with_(String cardNumber, String nameOnCard, String expMonth, String expYear, String cvv, String postcode, String line1, String line2, String line3, String line4) throws Throwable {
		pp.payWithNewCard(cardNumber,nameOnCard,expMonth,expYear,cvv,postcode,line1,line2,line3,line4);
	}*/	
	    
	@Then("^I should get an order confirmation$")
	public void I_should_get_an_order_confirmation() throws Throwable {
		System.out.println(ocp.getOrderConfirmationNumer());
		Assert.assertTrue("Order not placed successfully", ocp.isConfirmationNumerGenerated());
		Assert.assertTrue("ThankYou Message not displayed", ocp.isThankYouMessageTextDispalyed());
		Assert.assertTrue("Email sent confirmation information not displayed", ocp.isEmailConfirmationTextDispalyed());
		
	}
	
	@When("^I hover over \"([^\"]*)\" and I selected \"([^\"]*)\" and added a first item in the basket$")
	public void I_hover_over_Mens_and_I_selected_All_categories_and_added_a_first_item_in_the_basket(String arg1, String arg2) throws Throwable {
	   
	}
}
