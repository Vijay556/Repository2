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
public class guest {
	
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
	@When("^I chose to deliver to \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_chose_to_deliver_to_(String country, String postcode, String line1, String line2, String line3, String line4, String phone) throws Throwable {
		cdt = PageFactory.initElements(controller.driver, CheckoutDeliveryTab.class);
		cdt.continueToPaymentTabByChoosingDeliveryTo(country,postcode,line1,line2,line3,line4,phone);
	}

	@When("^I paid using payPal with \"([^\"]*)\",\"([^\"]*)\"$")
	public void I_paid_using_payPal_with_(String paypalemail, String paypalpassword) throws Throwable {
		cpt = PageFactory.initElements(controller.driver, CheckoutPaymentTab.class);
		cpt.placeAnOrderUsingPaypalWith(paypalemail,paypalpassword);
	}
	
}
