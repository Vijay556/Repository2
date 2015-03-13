package com.selfridges.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.selfridges.util.Constants;

public class DeliveryOptionsPage2 {

	WebDriver driver;
	
	@FindBy(xpath=Constants.dateDropDown)
	WebElement datedropdown;
	//@FindBy(xpath=Constants.payNowBtn1)
	//WebElement payNowBtn1;
	//@FindBy(xpath=Constants.payNowBtn2)
	//WebElement payNow2;
	@FindBy(xpath=Constants.dateDropDown)
	WebElement dateDropDown;
	@FindBy(xpath=Constants.londonStoreRadio)
	WebElement londonStore;
	@FindBy(xpath=Constants.manchesterExchangeStoreRadio)
	WebElement manchesterExchangeStore;
	@FindBy(xpath=Constants.manchesterTraffordStoreRadio)
	WebElement manchesterTraffordStore;
	@FindBy(xpath=Constants.birminghamStoreRadio)
	WebElement birminghamStore;
	
	public DeliveryOptionsPage2(WebDriver dr){
		driver=dr;
	}
	
	public DeliveryOptionsPage2 selectFirstAvailableCollectionDate() throws InterruptedException{
		Thread.sleep(3000);
		Select chooseCollectionDate=new Select(datedropdown);
		chooseCollectionDate.selectByIndex(1);
		return this;
	}

	public PaymentPage clickOnPayNowButton1() throws InterruptedException{
		//payNowBtn1.click();
		return PageFactory.initElements(driver, PaymentPage.class);
	}
}
