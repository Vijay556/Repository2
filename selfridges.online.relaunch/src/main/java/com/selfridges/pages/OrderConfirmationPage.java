package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.selfridges.util.Constants;

public class OrderConfirmationPage {

	@FindBy(xpath=Constants.orderConfirmationNumber)
	WebElement orderConfirmationNumber;
	@FindBy(xpath=Constants.emailSentConfirmationText)
	WebElement emailSentConfirmationText;
	@FindBy(xpath=Constants.printreceiptButton)
	WebElement printreceiptButton;
	@FindBy(xpath=Constants.continueShoppingButton)
	WebElement continueShoppingButton;
	@FindBy(xpath=Constants.thankYouForYourOrderText)
	WebElement thankYouForYourOrderText;
	
	WebDriver driver;
	public OrderConfirmationPage(WebDriver dr){
		driver=dr;
	}
	
	public String getOrderConfirmationNumer(){
		
		return orderConfirmationNumber.getText();
		
	}
	
	public boolean isConfirmationNumerGenerated(){
		
		return orderConfirmationNumber.isDisplayed();
	}
	
	 public boolean isThankYouMessageTextDispalyed(){
			
			return thankYouForYourOrderText.isDisplayed();
		}
	 
	 public boolean isEmailConfirmationTextDispalyed(){
		
		return emailSentConfirmationText.isDisplayed();
	}
	 
	 public void clickOnContinueShoppingButton(){
			
		 continueShoppingButton.click();
		}
	 
	 public void clickOnPrintReceiptButton(){
			
		 printreceiptButton.click();
		}
}
