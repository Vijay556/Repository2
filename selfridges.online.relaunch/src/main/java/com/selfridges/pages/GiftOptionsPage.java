package com.selfridges.pages;

import java.util.ArrayList;
import java.util.List;

import org.apache.bcel.classfile.Constant;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.*;

public class GiftOptionsPage {
	WebDriver driver;
	Logger log=WebController.logger;
	
	@FindBy(xpath=Constants.payNowBtn1)
	WebElement payNowBtn1;
	@FindBy(xpath=Constants.payNowBtn2)
	WebElement payNow2;
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
	
	public GiftOptionsPage(WebDriver dr){
		log.info("Initialising webdriver instance in GiftOptionsPage");
		driver=dr;
	}
	
	public void addGiftOptions(){
		
	}
	
	//Select the delivery date from the available dates
	public GiftOptionsPage slectDeliveryDate(int offsetDate) throws InterruptedException{
		log.info("Selecting " +offsetDate +" option from the available delivery dates list");
		Thread.sleep(5000);
		List<WebElement> options= new ArrayList<WebElement>();
		options=dateDropDown.findElements(By.tagName("option"));
		//options=dropDown.findElements(By.tagName("option"));
		System.out.println("Number of options are "+options.size());
		System.out.println("The available dates are **** ");
		log.info("The available dates are **** ");
		for(int i=0; i<options.size(); i++){
		System.out.println(options.get(i).getText());
		log.info(options.get(i).getText());
		}
		String dateSelected=options.get(offsetDate).getText();
		System.out.println("The selected date is **** "+options.get(offsetDate).getText());
		log.info("The selected date is **** "+options.get(offsetDate).getText());
		dateDropDown.sendKeys(dateSelected);
		return this;
		
	}
	
	//Hit the pay now button on Gift options page
	public PaymentPage payNowByTopBtn(){
		log.info("Clicking on Pay now button in Gift options page");
		payNowBtn1.click();
		return PageFactory.initElements(driver, PaymentPage.class);
		
	}
	
	public void editYourBag(){
		
	}
	
	public void back(){
		
	}
	
	public void clickOnYourItems(){
		
	}
	
	//Change the store in gift options page
	public GiftOptionsPage changeStore(String storeName) throws InterruptedException{
		log.info("Changing the store to "+storeName);
		Thread.sleep(2000);
		if(storeName.equalsIgnoreCase("London"))
			londonStore.click();
		else if(storeName.equalsIgnoreCase("Birmingham"))
			birminghamStore.click();
		else if(storeName.equalsIgnoreCase("Manchester Trafford"))
			manchesterTraffordStore.click();
		else if(storeName.equalsIgnoreCase("Manchester Exchange Square"))
			manchesterExchangeStore.click();
		Thread.sleep(8000);
		
		return this;
			
	}

}
