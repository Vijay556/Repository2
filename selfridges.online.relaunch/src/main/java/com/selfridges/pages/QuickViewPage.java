package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.WebController;

public class QuickViewPage {
	WebDriver driver;
	@FindBy(className="addToBag")
	WebElement addToBag;
	@FindBy(className="closeIcon")
	WebElement closeIcon;
	
		
	public QuickViewPage(WebDriver dr){
		driver=dr;
	}
	
	public void selectColour(){
		
	}
	
	public void selectSize(){
		
	}
	
	public QuickViewPage addToBag(){
		addToBag.click();
		return this;
		
	}
	
	public void addToWishList(){
		
	}
	
	public void viewDetails(){
		
	}
	
	public void changeImage(){
		
	}
	
	public PLPPage close(){
		closeIcon.click();
		return PageFactory.initElements(driver, PLPPage.class);
	}
	

}
