package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class SignInPage {
	WebDriver driver;
	@FindBy(xpath=Constants.loginEmail)
	WebElement loginEmail;
	@FindBy(xpath=Constants.loginPassword)
	WebElement loginPassword;
	@FindBy(xpath=Constants.signInBtn)
	WebElement signInBtn;
	
	public SignInPage(WebDriver dr){
		driver=dr;
	}
	
	
	
	public MyDetails doLogin(String email, String password){
		loginEmail.sendKeys(email);
		loginPassword.sendKeys(password);
		signInBtn.click();
		return PageFactory.initElements(driver, MyDetails.class);
		
	}
	
	public void createAccount(String ttl, String fName, String lName, String password){
		
	}

}
