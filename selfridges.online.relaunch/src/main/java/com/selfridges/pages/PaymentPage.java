package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.selfridges.util.Constants;

public class PaymentPage {
	
	@FindBy(xpath=Constants.cardNumber)
	WebElement cardNumber;
	@FindBy(xpath=Constants.nameOnCard)
	WebElement nameOnCard;
	@FindBy(xpath=Constants.expiryMonth)
	WebElement expiryMonth;
	@FindBy(xpath=Constants.expiryYear)
	WebElement expiryYear;
	@FindBy(xpath=Constants.issueMonth)
	WebElement issueMonth;
	@FindBy(xpath=Constants.issueYear)
	WebElement issueYear;
	@FindBy(xpath=Constants.cvvNumber)
	WebElement cvvNumber;
	@FindBy(xpath=Constants.billingPostcode)
	WebElement billingPostcode;
	@FindBy(xpath=Constants.billingAddressFindButton)
	WebElement billingAddressFindButton;
	@FindBy(xpath=Constants.billingAddressline1)
	WebElement billingAddressline1;
	@FindBy(xpath=Constants.billingAddressline2)
	WebElement billingAddressline2;
	@FindBy(xpath=Constants.billingAddressline3)
	WebElement billingAddressline3;
	@FindBy(xpath=Constants.billingAddressline4)
	WebElement billingAddressline4;
	@FindBy(xpath=Constants.billingAddressNickName)
	WebElement billingAddressNickName;
	@FindBy(xpath=Constants.placeorderButton)
	WebElement placeorderButton;
	
	
	WebDriver driver;
	public PaymentPage(WebDriver dr){
		driver=dr;
	}
	
	public void usePromotionCode(){
		//placeorderButton.

	}
	
	public void payWithSelfridgesGiftCard(){
		
	}
	
	public void redeemEVoucher(){
		
	}
	
	public OrderConfirmationPage payWithNewCard(String cardNum, String name, String expMonth, String expYear, String cvv, String postcode, String line1, String line2, String line3, String line4){
		cardNumber.clear();
		cardNumber.sendKeys(cardNum);
		nameOnCard.clear();
		nameOnCard.sendKeys(name);
		Select selectExpMonth=new Select(expiryMonth);
		selectExpMonth.selectByVisibleText(expMonth);
		Select selectExpYear=new Select(expiryYear);
		selectExpYear.selectByVisibleText(expYear);
		cvvNumber.clear();
		cvvNumber.sendKeys(cvv);
		billingPostcode.clear();
		billingPostcode.sendKeys(postcode);
		billingAddressline1.clear();
		billingAddressline1.sendKeys(line1);
		billingAddressline2.clear();
		billingAddressline2.sendKeys(line2);
		billingAddressline3.clear();
		billingAddressline3.sendKeys(line3);
		billingAddressline4.clear();
		billingAddressline4.sendKeys(line4);
		placeorderButton.click();
		return PageFactory.initElements(driver, OrderConfirmationPage.class);
	}
	
	public void paywithPaypal(){
		
	}
	
	public void enterAddressDetails(){
		
	}
	
	public void sameAsBillingAddress(){
		
	}
	
	public void back(){
		
	}
	
	public void placeOrder(){
		
	}

}
