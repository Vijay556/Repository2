package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.selfridges.util.Constants;
import com.selfridges.util.WebController;

public class PDPPage {
	WebDriver driver=null;
	public int num;
	@FindBy(xpath=Constants.incrementQuantiy_xpath)
	WebElement incrementQuantiy;
	@FindBy(xpath=Constants.decrementQuantity_xpath)
	WebElement decrementQuantity;
	@FindBy(xpath=Constants.inputQuantity_xpath)
	WebElement enerQuantity;
	@FindBy(xpath=Constants.btnAddToBag_xpath)
	WebElement addToBag;
	@FindBy(xpath=Constants.addToWishList_xpath)
	WebElement addToWishList;
	@FindBy(xpath=Constants.selectColour_1_xpath)
	WebElement selectFirstColour;
	@FindBy(xpath=Constants.selectSize_1_xpath)
	WebElement selectFirstSize;
	//@FindBy(xpath="//*[@id='main']/div[1]/aside[1]/div/div/div[1]/ul/li["+num+"]/img");
	//WebElement selectImage;
	@FindBy(xpath=Constants.nextArrow_xpath)
	WebElement nextArrow;
	@FindBy(xpath=Constants.previousArrow_xpath)
	WebElement previousArrow;
	
	WebController selenium=WebController.getInstance();
	
	public PDPPage(WebDriver dr){
		driver=dr;
	}
public void addToBag(){
	
	WebController.logger.info("Adding to basket");
	addToBag.click();
	//return this;
	
	}
	
	public void addToWishList(){
		WebController.logger.info("Adding to wish list");
		addToWishList.click();
		
	}
	
	public void facebookShare(){
		
	}
	
	public void tweetShare(){
		
	}
	
	public void googlePlusShare(){
		
	}
	
	public void emailShare(){
		
	}
	
	public void selectFirstColour(){
		//Need to implement check for stock availability
		WebController.logger.info("Selecting the first available colour");
		selectFirstColour.click();
		
	}
	
	public void selectFirstSize(){
		
		WebController.logger.info("Selecting the first available size");
		selectFirstSize.click();
		
		
	}
	
	public void incrementQuantity(){
		WebController.logger.info("Incrementing the quantity using + sign");
		incrementQuantiy.click();		
		
	}
	
	public void decrementQuantity(){
		WebController.logger.info("Decrementing the quantity using - sign");
		decrementQuantity.click();
		
	}
	
	public void enerQuantity(int quant){
		WebController.logger.info("Clearing the existing quantity");
		enerQuantity.clear();
		WebController.logger.info("Adding the quantity *** "+quant);
		enerQuantity.sendKeys(String.valueOf(quant));
	}
	
	public void changeImage(){
		
	}
	
	public void selfridgesSays(){
		
	}
	
	public void sizeGuide(){
		
	}
	
	public void deliveryAndReturns(){
		
	}
	
	public void nextImage(){
		WebController.logger.info("Clicking on he next available impage");
		nextArrow.click();
		
		
	}
	
	public void previousImage(){
		WebController.logger.info("Clicking on previous image");
		previousArrow.click();
		
	}

	

}
