package com.selfridges.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.selfridges.util.Constants;

public class CheckoutYourDetailsTab {
WebDriver driver;
	
	public CheckoutYourDetailsTab(WebDriver dr){
		this.driver = dr;
	}
	
	@FindBy(xpath=Constants.yourDetailsText)
	WebElement yourDetailsText;
	@FindBy(linkText=Constants.titleDropDown)
	WebElement titleDropDown;
	@FindBy(linkText=Constants.mr)
	WebElement mr;
	@FindBy(linkText=Constants.mrs)
	WebElement mrs;
	@FindBy(linkText=Constants.ms)
	WebElement ms;
	@FindBy(linkText=Constants.miss)
	WebElement miss;
	@FindBy(linkText=Constants.dr)
	WebElement dr;
	@FindBy(id=Constants.firstNameField)
	WebElement firstNameField;
	@FindBy(id=Constants.lastNameField)
	WebElement lastNameField;
	@FindBy(id = Constants.emailAddressField)
	WebElement emailAddressField;
	@FindBy(xpath=Constants.phoneNumberField)
	WebElement phoneNumberField;
	@FindBy(xpath=Constants.whyEmailIsUsedForText)
	WebElement whyEmailIsUsedForText;
	@FindBy(xpath=Constants.createPasswordRadioButton)
	WebElement createPasswordRadioButton;
	@FindBy(id=Constants.continueToDeliveryButton)
	WebElement continueToDeliveryButton;
	@FindBy(xpath=Constants.passwordForAutoRecognisedEmail)
	WebElement passwordForAutoRecognisedEmail;
	@FindBy(xpath=Constants.resetPasswordLinkForAutoRecognisedEmail)
	WebElement resetPasswordLinkForAutoRecognisedEmail;
	@FindBy(xpath=Constants.creatingANewUserPasswordField)
	WebElement creatingANewUserPasswordField;
	@FindBy(xpath=Constants.creatingANewUserRepeatPasswordField)
	WebElement creatingANewUserRepeatPasswordField;
	@FindBy(xpath=Constants.emailOptoutCheckBox)
	WebElement emailOptoutCheckBox;
	@FindBy(xpath=Constants.AutoRecognisedEmailText)
	WebElement AutoRecognisedEmailText;	


public CheckoutDeliveryTab continueToDeliveryTabAsAGuestUserWith(String ttl, String fName, String lName, String email) throws InterruptedException{
	
	Thread.sleep(5000);
	titleDropDown.click();
	if("mr".equalsIgnoreCase(ttl))
		mr.click();
	else if("mrs".equalsIgnoreCase(ttl))
		mrs.click();
	else if("ms".equalsIgnoreCase(ttl))
		ms.click();
	else if("miss".equalsIgnoreCase(ttl))
		miss.click();
	else dr.click();
	firstNameField.clear();
	firstNameField.sendKeys(fName);
	lastNameField.clear();
	lastNameField.sendKeys(lName);
	emailAddressField.clear();
	emailAddressField.sendKeys(email);
	//emailAddressField.sendKeys(Keys.TAB);
	//phoneNumberField.clear();
	//phoneNumberField.sendKeys(phone);
	//driver.action.send_keys(elementVisible, :tab).send_keys(elementVisible, :return).perform;
	//continueToDeliveryButton.w
	
	Thread.sleep(2000);
	emailAddressField.sendKeys(Keys.ENTER);
	//continueToDeliveryButton.click();
	//continueToDeliveryButton.click();
	//((JavascriptExecutor)driver).executeScript("arguments[0].checked = true;", continueToDeliveryButton);
	return PageFactory.initElements(driver, CheckoutDeliveryTab.class);
 }
}

