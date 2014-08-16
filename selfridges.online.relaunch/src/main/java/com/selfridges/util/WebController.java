package com.selfridges.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class WebController {
	
	public Properties OR=null;
	public Properties ENV=null;
	public WebDriver driver=null;
	public Actions builder;
	public WebElement menuElement;
	public WebElement subElement;
	public WebElement targetElement;
	public static WebController instance=null;
	public static final Logger logger=Logger.getLogger(WebController.class);
	
	//Initialising logging

	static{
		PropertyConfigurator.configure(System.getProperty("user.dir")+"\\src\\log4j.properties");
	}
	
	
	/***

	@BeforeClass
	public void setUp(){
		PropertyConfigurator.configure(System.getProperty("user.dir")+"\\src\\log4j.properties");
		
	}
	
	**/
	
	//Initialising property file objects
	private WebController(){
		try {
		logger.info("Initializing OR properties file");
		OR=new Properties();
		FileInputStream fis_OR=new FileInputStream(System.getProperty("user.dir")+"//src//main//java//com//selfridges//config//OR.properties");
	
			OR.load(fis_OR);
			System.out.println(OR.getProperty("Environment"));
			System.out.println(OR.getProperty("Browser"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.error("Error in initializing OR porperties file");
			e.printStackTrace();
					}
		
		try {
			logger.info("Initializing ENV properties file");
			ENV=new Properties();
			FileInputStream fis_ENV=new FileInputStream(System.getProperty("user.dir")+"//src//main//java//com//selfridges//config//ENV_"+OR.getProperty("Environment")+".properties");
			ENV.load(fis_ENV);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.error("Error in initializing ENV porperties file ");
			e.printStackTrace();
		}
		System.out.println(ENV.getProperty("URL"));
	}
	
	
	public static WebController getInstance(){
		System.out.println("Initializing the instance");
		logger.info("Initializing WebController instance");
		if(instance == null){
		instance = new WebController();
		
		}
		return instance;
		
	}
	
	/***
	public static void log(String text){
		System.out.println(System.getProperty("user.dir"));
		PropertyConfigurator.configure(System.getProperty("user.dir")+"\\src\\log4j.properties");
		logger.debug(text);
	}
	
	**/
	
	//Initialise the driver based on the browser type mentioned in OR property file
	public void invokeBrowser(){
		logger.info("Invoking the browser if not null ");
		String browserType=OR.getProperty("Browser");
		System.out.println(browserType);
		
		if(driver==null){
			if(browserType.equalsIgnoreCase("Mozilla")){
				System.out.println("Browser type is Mozilla");
				driver=new FirefoxDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				logger.info("Browser is NULL so initialised: "+browserType);
			}
			
			else if(browserType.equals("IE")){
				System.out.println("Browser type is IE");
				System.setProperty("webdriver.ie.driver", "C:\\Softwares\\IEDriverServer.exe");
				driver=new InternetExplorerDriver();
				driver.manage().deleteAllCookies();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				logger.info("Browser is NULL so initialised: "+browserType);
			}
			
			else if(browserType.equalsIgnoreCase("Chrome")){
				System.out.println("Browser type is Chrome");
				System.setProperty("webdriver.chrome.driver", "C:\\Softwares\\chromedriver.exe");
				driver=new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				logger.info("Browser is NULL so initialised: "+browserType);		
			
		}
		
		
		}
				
	}
	
	//Check if an element is present
	public boolean isElementPresent(String object){
		
		try{
			logger.info("Checking if element "+object+" is present");
			driver.findElement(By.xpath(OR.getProperty(object)));
			return true;
		}catch(Exception e){
			logger.info("Element "+object+" not present");
			System.out.println("Element" +object +"not found");
			return false;
		}
	}
	

	//Check if the given text is present
	public boolean isTextPresent(String textExpected, String object){
		logger.info("Checking if text "+textExpected+" is present");
		String textFound=null;
		textFound=driver.findElement(By.xpath(OR.getProperty(object))).getText();
		System.out.println("Text Found ------ "+textFound);
		if(textExpected.equalsIgnoreCase(textFound)){
			logger.info("Text "+textExpected+" is present");
			return true;
		}
		else {
			logger.info("Text "+textExpected+" is not present");
			return false;
		}
			
					
	}
	
	public void clickHiddenLink(String mainLink, String subLink) throws InterruptedException{
		System.out.println(OR.getProperty(mainLink));
		menuElement=driver.findElement(By.xpath(OR.getProperty(mainLink)));
		subElement=driver.findElement(By.xpath(OR.getProperty(subLink)));
		builder=new Actions(driver);
		builder.moveToElement(menuElement).build().perform();
		Thread.sleep(2000);
		subElement.click();
		Thread.sleep(2000);
		
		
	}
	
	public void clickHiddenLinkDragAndDrop(String mainLink, String subLink, String target){
		System.out.println(OR.getProperty(mainLink));
		menuElement=driver.findElement(By.xpath(OR.getProperty(mainLink)));
		subElement=driver.findElement(By.xpath(OR.getProperty(subLink)));
		//targetElement=driver.findElement(By.xpath(OR.getProperty(target)));
		builder=new Actions(driver);
		//builder.moveToElement(menuElement).build().perform();
		//subElement.click();
		//builder.moveToElement(menuElement).dragAndDrop(subElement, targetElement).click().build().perform();
		builder.moveToElement(menuElement).build().perform();
		//builder.dragAndDrop(subElement, targetElement).build().perform();
		builder.moveToElement(subElement).click().build().perform();
		//refresh();
		
		
	}
	
	public void refresh(){
		driver.navigate().refresh();
	}
	
	
	
	public boolean isLoggedIn(){
		
		boolean loggedIn = isTextPresent("My account","MyAccountmenu_link");
		return loggedIn;
	}



	public void moveMouse(String object) {
		builder=new Actions(driver);
		//builder.moveByOffset(10, 10).build().perform();
		//builder.moveToElement(driver.findElement(By.xpath(OR.getProperty(object)))).build().perform();
		
	}
	
	public void goToURL(String URL){
		System.out.println(ENV.getProperty(URL));
		driver.get(ENV.getProperty(URL));
	}
	public void closeBrowser(){
		//System.out.println(ENV.getProperty(URL));
		driver.quit();
	}
	
	

}
