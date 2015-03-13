package com.selfridges.test;

import junit.framework.Assert;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.pages.CheckoutDeliveryTab;
import com.selfridges.pages.CheckoutOrderConfirmationTab;
import com.selfridges.pages.CheckoutPaymentTab;
import com.selfridges.pages.CheckoutYourDetailsTab;
import com.selfridges.pages.DeliveryOptionsChooseAddressPage;
import com.selfridges.pages.DeliveryOptionsPage2;
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
public class ClickAndCollect {
	
	WebController controller;
	GlobalMenu gm = null;
	HomePage hp = null;
	//PaymentPage pp = PageFactory.initElements(controller.driver, PaymentPage.class);
	DeliveryOptionsChooseAddressPage doca;// = PageFactory.initElements(controller.driver, DeliveryOptionsChooseAddressPage.class);
	DeliveryOptionsPage2 dop2; //= PageFactory.initElements(controller.driver, DeliveryOptionsPage2.class);
	CheckoutOrderConfirmationTab coct; // = PageFactory.initElements(controller.driver, OrderConfirmationPage.class);
	CheckoutDeliveryTab cdt;
	CheckoutPaymentTab cpt;
	@Before
	public void setUp(){
		System.out.println("Running before method");
		controller = WebController.getInstance();
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
	    controller.closeBrowser();	
	    controller = null;
	}
	
	@SuppressWarnings("deprecation")
	@Given("^I am on Selfridges website$")
	public void Im_on_Selfridges_website() throws Throwable {
		hp = PageFactory.initElements(controller.driver, HomePage.class);
	  Assert.assertFalse("Sorry You are not on the home page", ((hp.GetHomePageUrl().contains("selfridges.com")) && (!hp.GetHomePageUrl().contains("selfridges.com/"))));
	}
	
	@When("^I searched for \"([^\"]*)\" and added to the basket$")
	public void I_searched_for_and_added_to_the_basket(String arg1) throws Throwable {
		gm = PageFactory.initElements(controller.driver, GlobalMenu.class);
		gm.searchProduct(arg1).goToPDPOfFirstProduct().addToBag();	    
	}

	@When("^being delivered to \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void being_delivered_to_(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		//DeliveryOptionsPage2
		
		gm.clickBasketIcon().continueToCheckOut().continueToCheckoutAsAGuestOrANewUser().continueToDeliveryTabAsAGuestUserWith(arg1, arg2, arg3, arg4);
	}
	
	@When("^I choose collection point as \"([^\"]*)\"$")
	public void I_choose_collection_point_as(String store) throws Throwable {
	   //DeliveryOptionsChooseAddressPage
		cdt = PageFactory.initElements(controller.driver, CheckoutDeliveryTab.class);
		cdt.continueToPaymentTabBySelectingToChooseToCollectFrom(store);
		//gm.clickBasketIcon().continueToCheckOut().continueToCheckoutAsAGuestOrANewUser().chooseClickAndCollect().chooseStore(arg1);	    
	}
 
	@When("^I paid with payment card of \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_paid_with_payment_card_of_(String cardType, String cardNum, String cardName, String expMonth, String expYear, String cvv, String title, String fname, String lname, String phone, String countryName, String postcode, String line1, String line2, String line3, String line4) throws Throwable {
		cpt = PageFactory.initElements(controller.driver, CheckoutPaymentTab.class);
		cpt.placeAnOrderWithOnlyNewDebitCreditCard(cardType, cardNum, cardName, expMonth, expYear, cvv, title, fname, lname, phone, countryName,postcode,  line1, line2, line3, line4);
				
				}
	/*@When("^I paid with payment card of \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_paid_with_payment_card_of_(String cardType, String cardNum, String cardName, String expMonth, String expYear, String cvv, String postcode, String countryName, String line1, String line2, String line3, String line4) throws Throwable {
	    //OrderConfirmationPage
		
		cpt = PageFactory.initElements(controller.driver, CheckoutPaymentTab.class);
		cpt.placeAnOrderWithOnlyNewDebitCreditCard(cardType, cardNum, cardName, expMonth, expYear, cvv, postcode, countryName, line1, line2, line3, line4);
	}*/
	
	@Then("^I should get an order confirmation$")
	public void I_should_get_an_order_confirmation() throws Throwable {
		coct = PageFactory.initElements(controller.driver, CheckoutOrderConfirmationTab.class);
		System.out.println(coct.getOrderConfirmationNumer());
		Assert.assertTrue("Order not placed successfully", coct.isConfirmationNumerGenerated());
		//Assert.assertTrue("ThankYou Message not displayed", ocp.isThankYouMessageTextDispalyed());
		Assert.assertTrue("Email sent confirmation information not displayed", coct.isEmailConfirmationTextDispalyed());
		
	}
	
	/*@Given("^I paid with a gift card \"([^\"]*)\", \"([^\"]*)\"$")
	public void I_paid_with_a_gift_card_(String arg1, String arg2) throws Throwable {
		cpt
	    
	}*/
}
