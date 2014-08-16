package com.selfridges.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class HomePage {
	private WebDriver driver;
	
	public HomePage(WebDriver dr){
		driver=dr;
	}
	public String GetHomePageUrl(){
		return driver.getCurrentUrl();
	}	
	
}
