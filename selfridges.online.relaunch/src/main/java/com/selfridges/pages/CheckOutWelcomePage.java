package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;
import com.selfridges.util.WebController;

public class CheckOutWelcomePage {
	public WebDriver driver;
	WebController controller=WebController.getInstance();
	@FindBy(linkText = Constants.continueToCheckoutAsAGuestOrANewUserButton)
	WebElement continueToCheckoutAsAGuestOrANewUserButton;
	@FindBy(xpath=Constants.email)
	WebElement email;
	@FindBy(xpath=Constants.password)
	WebElement password;
	@FindBy(xpath=Constants.userCheckOut)
	WebElement userCheckOut;
	@FindBy(xpath=Constants.signUpNow)
	WebElement signUpNow;
	
		
	public CheckOutWelcomePage(WebDriver dr){
		driver = dr;
	}
	
	public DeliveryOptionsChooseAddressPage userCheckOut(String eml, String passwd){
		email.sendKeys(eml);
		password.sendKeys(passwd);
		userCheckOut.click();
		return PageFactory.initElements(driver, DeliveryOptionsChooseAddressPage.class);
		
	}
	
	public DeliveryOptionsChooseAddressPage userCheckOut(){
		email.sendKeys(controller.ENV.getProperty("Email"));
		password.sendKeys(controller.ENV.getProperty("Password"));
		userCheckOut.click();
		return PageFactory.initElements(driver, DeliveryOptionsChooseAddressPage.class);
		
	}
	
	public CheckoutYourDetailsTab continueToCheckoutAsAGuestOrANewUser(){		
		continueToCheckoutAsAGuestOrANewUserButton.click();
		return PageFactory.initElements(driver, CheckoutYourDetailsTab.class);
	}
	
	public SignUpPage signUpNow(){
		signUpNow.click();
		return PageFactory.initElements(driver, SignUpPage.class);
	}

}
