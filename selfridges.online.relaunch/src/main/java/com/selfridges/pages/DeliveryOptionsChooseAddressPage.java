package com.selfridges.pages;

import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.selfridges.util.Constants;
import com.selfridges.util.WebController;

public class DeliveryOptionsChooseAddressPage {
	
	WebDriver driver;
	
	public DeliveryOptionsChooseAddressPage(WebDriver dr){
		this.driver = dr;
	}
	
	String expectedOSHeader="ORDER SUMMARY";
	String expectedOSItemsCount=null;
	String expectedOSPrice=null;
	String expectedOSText1="Delivery";
	String expectedOSText2="Details on the next page";
	String expectedOSLink1="More info";
	String expectedOrderTotal=null;
	String actualSummaryHeader=null;
	
	
	
	@FindBy(xpath=Constants.ukDeliveryRadio)
	WebElement ukDeliveryOption;
	@FindBy(xpath=Constants.title)
	WebElement title;	
	@FindBy(xpath=Constants.firstName)
	WebElement firstNmae;
	@FindBy(xpath=Constants.surName)
	WebElement surName;
	@FindBy(xpath=Constants.telePhone)
	WebElement telephone;
	@FindBy(xpath=Constants.postCode)
	WebElement postCode;	 
	@FindBy(xpath=Constants.address1)
	WebElement address1;
	@FindBy(xpath=Constants.address2)
	WebElement address2;
	@FindBy(xpath=Constants.city)
	WebElement city;
	@FindBy(xpath=Constants.county)
	WebElement county;
	@FindBy(xpath=Constants.addressNickName)
	WebElement addressName;
	@FindBy(xpath=Constants.sameAsBillingAddress)
	WebElement sameAsBilling;
	@FindBy(xpath=Constants.continueToDeliveryOptions)
	WebElement continueToDelivery;
	@FindBy(xpath=Constants.title_cc)
	WebElement title_cc;
	@FindBy(xpath=Constants.clickAndCollectRadio)
	WebElement clickAndCollectRadio;
	@FindBy(xpath=Constants.firstName_cc)
	WebElement firstName_cc;
	@FindBy(xpath=Constants.surName_cc)
	WebElement lastName_cc;
	@FindBy(xpath=Constants.telePhone_cc)
	WebElement telephone_cc;
	@FindBy(xpath=Constants.londonStore_cc)
	WebElement londonStore_cc;
	@FindBy(xpath=Constants.birminghamStore_cc)
	WebElement birminghamStore_cc;
	@FindBy(xpath=Constants.manchesterExchangeSotre_cc)
	WebElement manchesterExchangeSotre_cc;
	@FindBy(xpath=Constants.manchesterTraffordStore_cc)
	WebElement manchesterTraffordStore_cc;	
	@FindBy(xpath=Constants.orderSummaryContinueOnRight)
	WebElement orderSummaryContinueBtn;
	@FindBy(xpath=Constants.guestEmail)
	WebElement guestEmail;
	@FindBy(xpath=Constants.guestEmail_cc)
	WebElement guestEmail_cc;
	@FindBy(xpath=Constants.intDeliveryRadio)
	WebElement intDeliveryOption;
	@FindBy(xpath=Constants.intTitle)
	WebElement intTitle;
	@FindBy(xpath=Constants.intfName)
	WebElement intfName;
	@FindBy(xpath=Constants.intsName)
	WebElement intlName;
	@FindBy(xpath=Constants.intEmail)
	WebElement intEmail;
	@FindBy(xpath=Constants.intPhone)
	WebElement intPhone;
	@FindBy(xpath=Constants.intCountry)
	WebElement intCountry;
	@FindBy(xpath=Constants.intZipCode)
	WebElement intZipCode;
	@FindBy(xpath=Constants.intCity)
	WebElement intCity;
	@FindBy(xpath=Constants.intAddress1)
	WebElement intAddress1;
	@FindBy(xpath=Constants.intAddress2)
	WebElement intAddress2;
	@FindBy(xpath=Constants.intCounty)
	WebElement intCounty;
		
	
	

	//Select UK delivery as guest and enter the fields required
	public DeliveryOptionsChooseAddressPage ukDeliveryAsGuest(String ttl, String fName, String lName, String email, String phone, String postcode, String adr1, String adr2, String town ) throws InterruptedException{
		
		ukDeliveryOption.click();
		//title.sendKeys(ttl);
		Select select=new Select(title);
		select.selectByVisibleText(ttl);
		Thread.sleep(1000);
		firstNmae.clear();
		firstNmae.sendKeys(fName);
		surName.clear();
		surName.sendKeys(lName);
		guestEmail.clear();
		guestEmail.sendKeys(email);
		telephone.clear();
		telephone.sendKeys(phone);
		postCode.clear();
		postCode.sendKeys(postcode);
		address1.clear();
		address1.sendKeys(adr1);
		address2.clear();
		address2.sendKeys(adr2);
		city.clear();
		city.sendKeys(town);		
	
		return this;
	}
	
	public DeliveryOptionsChooseAddressPage ukDeliveryAsUser() throws InterruptedException{
		ukDeliveryOption.click();
	
		return this;
	}
	
	//Select the click and collect option as Guest user and enter the values

	public DeliveryOptionsChooseAddressPage chooseClickAndCollect(){
		clickAndCollectRadio.click();
		return this;
	}
	
	public DeliveryOptionsChooseAddressPage clickAndCollectAsGuest(String ttl, String fName, String lName, String email, String phone) throws InterruptedException{
		
		//actualSummaryHeader=driver.findElement(By.xpath("//*[@id='orderSummaryPanel']/div/h2")).getText();
		//System.out.println(actualSummaryHeader);
		//Assert.assertEquals("Order summary header is not right", expectedOSHeader, actualSummaryHeader);
				
		Select select=new Select(title_cc);
		select.selectByVisibleText(ttl);
		//title_cc.sendKeys(ttl);
		firstName_cc.clear();
		firstName_cc.sendKeys(fName);
		lastName_cc.clear();
		lastName_cc.sendKeys(lName);
		guestEmail_cc.clear();
		guestEmail_cc.sendKeys(email);
		telephone_cc.clear();
		telephone_cc.sendKeys(phone);
		return this;
	}
	
	public DeliveryOptionsChooseAddressPage chooseStore(String storeName){ 
		if(storeName.equalsIgnoreCase("London"))
			londonStore_cc.click();
		else if(storeName.equalsIgnoreCase("Birmingham"))
			birminghamStore_cc.click();
		else if(storeName.equalsIgnoreCase("Trafford"))
			manchesterTraffordStore_cc.click();
		else if(storeName.equalsIgnoreCase("ExchangeSquare"))
			manchesterExchangeSotre_cc.click();
		actualSummaryHeader=driver.findElement(By.xpath("//*[@id='orderSummaryPanel']/div/h2")).getText();
		System.out.println(actualSummaryHeader);						
		return this;
		
	}
	
	public DeliveryOptionsChooseAddressPage clickAndCollectAsUser(String storeName ){		
			
		if(storeName.equalsIgnoreCase("London"))
			londonStore_cc.click();
		else if(storeName.equalsIgnoreCase("Birmingham"))
			birminghamStore_cc.click();
		else if(storeName.equalsIgnoreCase("Manchester Trafford"))
			manchesterTraffordStore_cc.click();
		else if(storeName.equalsIgnoreCase("Manchester Exchange Square"))
			manchesterExchangeSotre_cc.click();		
		return this;
		
	} 
	
	
	public DeliveryOptionsChooseAddressPage intDeliveryAsGuest(String ttl, String fName, String lName, String email, String phone, String postcode, String adr1, String adr2, String town, String country ) throws InterruptedException{
		
		intDeliveryOption.click();
		Thread.sleep(1000);
		Select select=new Select(intCountry);
		select.selectByVisibleText(country);
		Thread.sleep(1000);
		intCountry.sendKeys(Keys.ENTER);
		//intTitle.sendKeys(ttl);
		Select selecttitle=new Select(intTitle);
		selecttitle.selectByVisibleText(ttl);
		Thread.sleep(1000);
		intfName.clear();
		intfName.sendKeys(fName);
		intlName.clear();
		intlName.sendKeys(lName);
		intEmail.clear();
		intEmail.sendKeys(email);
		intPhone.clear();
		intPhone.sendKeys(phone);
		Thread.sleep(1000);	
		intPhone.sendKeys(Keys.TAB);
		intAddress1.clear();
		intAddress1.sendKeys(adr1);
		intAddress2.clear();
		intAddress2.sendKeys(adr2);
		intCity.clear();
		intCity.sendKeys(town);
		intZipCode.clear();
		intZipCode.sendKeys(postcode);	
		return this;
		
	}
	
	public void addGiftOptions(){
		
	}
	
	public void continueToOrderSummary(){
		
		
	}
	
	public DeliveryOptionsPage2 clickOnOrderSummaryButtonOnRight() throws InterruptedException{
		Thread.sleep(3000);
		orderSummaryContinueBtn.click();
		return PageFactory.initElements(driver, DeliveryOptionsPage2.class);
		
	}
	
	public DeliveryOptionsPage2 clickOnOrderSummaryButtonOnPage() throws InterruptedException{
		Thread.sleep(3000);
		orderSummaryContinueBtn.click();
		return PageFactory.initElements(driver, DeliveryOptionsPage2.class);
		
	}
	
	/*public DeliveryOptionPage2 clickontinueToOrderSummaryRight() throws InterruptedException{
		Thread.sleep(3000);
		orderSummaryContinueBtn.click();
		return PageFactory.initElements(driver, GiftOptionsPage.class);
		
	}*/
	
	public void clickOnYourItems(){
		
	}
	
	

}
