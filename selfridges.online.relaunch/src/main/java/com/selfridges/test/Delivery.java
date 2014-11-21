package com.selfridges.test;

import org.openqa.selenium.support.PageFactory;

import com.selfridges.pages.CheckoutDeliveryTab;
import com.selfridges.pages.GlobalMenu;
import com.selfridges.pages.HomePage;
import com.selfridges.util.WebController;

import cucumber.api.java.en.When;

public class Delivery {

	WebController controller;
	
	CheckoutDeliveryTab cdt = null;
	//PaymentPage pp = PageFactory.initElements(controller.driver, PaymentPage.class);
	
	@When("^I choose to deliver to \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void I_choose_to_deliver_to_(String country, String line1, String line2, String line3, String line4, String postcode, String phone) throws Throwable {
		cdt = PageFactory.initElements(controller.driver, CheckoutDeliveryTab.class);
		cdt.continueToPaymentTabWithDeliveryAddressAs(country,line1,line2,line3,line4,postcode,phone);
	}
	
}
