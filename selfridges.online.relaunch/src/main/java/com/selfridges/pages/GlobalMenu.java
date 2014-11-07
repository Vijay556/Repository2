package com.selfridges.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;
import com.selfridges.util.WebController;

public class GlobalMenu {
public WebDriver driver;
	
	@FindBy(xpath=Constants.account)
	WebElement account;
	@FindBy(xpath=Constants.searchIcon)
	WebElement searchIcon;
	@FindBy(xpath=Constants.searchInput)
	WebElement searchInput;
	@FindBy(xpath=Constants.bagIcon)
	WebElement bagIcon;
	@FindBy(xpath=Constants.checkoutMini)
	WebElement checkoutMini;
	@FindBy(xpath=Constants.viewBagMini)
	WebElement viewBagMini;
	@FindBy(xpath=Constants.welcomeTxt)
	WebElement welcomeTxt;
	@FindBy(xpath=Constants.signOut)
	WebElement signOut;
	@FindBy(xpath=Constants.MensL1Link)
	WebElement MensL1Link;
	
	
		
	public GlobalMenu(WebDriver dr){
		driver=dr;
	}
	
	public SignInPage goToSignInPage(){
		account.click();
		return PageFactory.initElements(driver, SignInPage.class);
		
	}
	
	public PLPPage searchProduct(String product){
	
		searchIcon.click();
		searchInput.clear();
		searchInput.sendKeys(product);
		searchInput.sendKeys(Keys.ENTER);
		return PageFactory.initElements(driver, PLPPage.class);
		
	}
	
	public MyBagPage viewBag(){
		//bagIcon.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		Actions builder=new Actions(driver);
		builder.moveToElement(bagIcon).moveToElement(viewBagMini).click().build().perform();;
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//viewBagMini.click();		
		return PageFactory.initElements(driver, MyBagPage.class);
	}
	
	public CheckOutWelcomePage checkOut(){
		
		bagIcon.click();
		checkoutMini.click();
		return PageFactory.initElements(driver, CheckOutWelcomePage.class);
		
	}
	
	public boolean isLoggedIn(){
		if(welcomeTxt.getText().equalsIgnoreCase("Welcome Guest"))		
			return false;
		else 
			return true;
		
	}
	
public MyBagPage clickBasketIcon(){
		
		bagIcon.click();
		return PageFactory.initElements(driver, MyBagPage.class);
		
	}
	
	public HomePage doLogOut(){
		
		Actions builder=new Actions(driver);
		builder.moveToElement(account).moveToElement(signOut).click().build().perform();
		return PageFactory.initElements(driver, HomePage.class);
		
	}	
	
    public void clickMensL1link(){
    	MensL1Link.click();		
	}

}
