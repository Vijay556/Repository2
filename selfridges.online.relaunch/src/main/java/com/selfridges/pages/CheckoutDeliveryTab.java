package com.selfridges.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class CheckoutDeliveryTab {
WebDriver driver;
	
	public CheckoutDeliveryTab(WebDriver dr){
		this.driver = dr;
	}
	
	@FindBy(id=Constants.deliveryRadio1)
	WebElement deliveryRadio1;
	@FindBy(xpath=Constants.deliveryRadio2)
	WebElement deliveryRadio2;
	@FindBy(id=Constants.clickAndCollectRadio1)
	WebElement clickAndCollectRadio1;
	@FindBy(xpath=Constants.clickAndCollectRadio2)
	WebElement clickAndCollectRadio2;
	@FindBy(id=Constants.londonStoreRadio1)
	WebElement londonStoreRadio1;
	@FindBy(xpath=Constants.londonStoreRadio2)
	WebElement londonStoreRadio2;
	@FindBy(id=Constants.birminghamStoreRadio1)
	WebElement birminghamStoreRadio1;
	@FindBy(xpath=Constants.birminghamStoreRadio2)
	WebElement birminghamStoreRadio2;
	@FindBy(id=Constants.traffordStoreradio1)
	WebElement traffordStoreradio1;
	@FindBy(xpath=Constants.traffordStoreradio2)
	WebElement traffordStoreradio2;
	@FindBy(id=Constants.exchangeSquareStroeRadio1)
	WebElement exchangeSquareStroeRadio1;
	@FindBy(xpath=Constants.exchangeSquareStroeRadio2)
	WebElement exchangeSquareStroeRadio2;
	@FindBy(id=Constants.day1Part1)
	WebElement day1Part1;
	@FindBy(xpath=Constants.day1Part2)
	WebElement day1Part2;
	@FindBy(id=Constants.day2Part1)
	WebElement day2Part1;
	@FindBy(xpath=Constants.day2Part2)
	WebElement day2Part2;	
	@FindBy(id=Constants.isThisAGiftCheckBoxPart1)
	WebElement isThisAGiftCheckBoxPart1;
	@FindBy(css=Constants.isThisAGiftCheckBoxPart2)
	WebElement isThisAGiftCheckBoxPart2;
	@FindBy(id = Constants.giftPackagingPart1)
	WebElement giftPackagingPart1;
	@FindBy(css = Constants.giftPackagingPart2)
	WebElement giftPackagingPart2;
	@FindBy(id = Constants.giftMessageTextField)
	WebElement giftMessageTextField;
	@FindBy(id = Constants.continueToPaymentTab)
	WebElement continueToPaymentTab;
	@FindBy(id = Constants.phoneNumber)
	WebElement phoneNumber;
	@FindBy(id = Constants.houseNameOrNumber)
	WebElement houseNameOrNumber;
	@FindBy(id = Constants.deliveryPostcode)
	WebElement deliveryPostcode;
	@FindBy(id = Constants.findAddress)
	WebElement findAddress;
	@FindBy(id = Constants.chooseDeliveryOption)
	WebElement chooseDeliveryOption;
	@FindBy(id = Constants.standardDeliveryPart1)
	WebElement standardDeliveryPart1;
	@FindBy(css = Constants.standardDeliveryPart2)
	WebElement standardDeliveryPart2;
	@FindBy(id = Constants.nominatedDayDeliveryPart1)
	WebElement nominatedDayDeliveryPart1;
	@FindBy(xpath = Constants.nominatedDayDeliveryPart2)
	WebElement nominatedDayDeliveryPart2;
	@FindBy(linkText = Constants.uk)
	WebElement uk;
	@FindBy(id = Constants.address1)
	WebElement address1;
	@FindBy(id = Constants.address2)
	WebElement address2;
	@FindBy(id = Constants.city)
	WebElement city;
	@FindBy(id = Constants.county)
	WebElement county;
	@FindBy(id = Constants.postCode)
	WebElement postCode;
	
   public CheckoutPaymentTab continueToPaymentTabBySelectingToChooseToCollectFrom(String store) throws InterruptedException{
	   selectComplimentaryClickAndCollect();
	   if (store.equalsIgnoreCase("London"))
		   selectLondonStroe();
	   else if (store.equalsIgnoreCase("Birmingham"))
		   selectBirminghamStore();
	   else if (store.equalsIgnoreCase("Trafford"))
		   selectTraffordStroe();
	   else if (store.equalsIgnoreCase("ExchangeSquare"))
		   selectExchangeSquareStore();
	   selectSecondCollectionAvailableDay();
	   Thread.sleep(2000);
	   continueToPaymentTab.click();
	   return  PageFactory.initElements(driver, CheckoutPaymentTab.class);
}
   
   public CheckoutPaymentTab continueToPaymentTabWithDeliveryAddressAs(String country, String line1, String line2, String line3, String line4, String postcode, String phoneString ) throws InterruptedException{
	   selectHomeDelivery();
	   
	   continueToPaymentTab.click();
	   return  PageFactory.initElements(driver, CheckoutPaymentTab.class);
     }
   
   public CheckoutPaymentTab continueToPaymentTabByChoosingDeliveryTo(String country,String postcode,String line1,String line2,String line3,String line4,String phone) throws InterruptedException {
	   selectUkAndInteranationalDelivery();
	   phoneNumber.clear();
	   phoneNumber.sendKeys(phone);
	   fillAddressLines(country,postcode,line1,line2,line3,line4);
	   Thread.sleep(2000);
	   chooseDeliveryOption.click();
	   //nominatedDayDeliveryPart2.click();
	   standardDeliveryPart2.click();
	   addGiftAndPackageMessagaeAs("Vijay's gift message");
	   Thread.sleep(2000);
	   continueToPaymentTab.click();
	   return PageFactory.initElements(driver, CheckoutPaymentTab.class);
		
	}
   private void fillAddressLines(String country, String postcode, String line1,	String line2, String line3, String line4) throws InterruptedException {
	   if (country.equalsIgnoreCase("United Kingdom")){
			   houseNameOrNumber.clear();
			   houseNameOrNumber.sendKeys(line1);
			   deliveryPostcode.clear();
			   deliveryPostcode.sendKeys(postcode);
			   Thread.sleep(2000);
			   findAddress.click();
			   }
	   else {
		  uk.click();
		  driver.findElement(By.linkText(country)).click();
		  Thread.sleep(2000);
		  postCode.clear();
		  postCode.sendKeys(postcode);
		  address1.clear();
		  address1.sendKeys(line1);
		  address2.clear();
		  address2.sendKeys(line2);
		  city.clear();
		  city.sendKeys(line3);
		  county.clear();
		  county.sendKeys(line4);
	   }
	
}

private void addGiftAndPackageMessagaeAs(String giftmeassage) {
	   
	   isThisAGiftCheckBoxPart2.click();
	   giftPackagingPart2.click();
	   giftMessageTextField.sendKeys(giftmeassage);
	   
}

private void selectUkAndInteranationalDelivery() {
	   deliveryRadio2.click();
	
}
   
   private void selectComplimentaryClickAndCollect() {
	   clickAndCollectRadio2.click();
	
}

public void CheckTheCheckBoxIsThisAGift(){
	     if(!isThisAGiftCheckBoxPart1.isSelected())
	    	 isThisAGiftCheckBoxPart1.click();
           }
   
   public void UnCheckTheCheckBoxIsThisAGift(){
	     if(isThisAGiftCheckBoxPart1.isSelected())
	    	 isThisAGiftCheckBoxPart1.click();
           } 

   public CheckoutPaymentTab clickContinueToPaymentTab(){
	   continueToPaymentTab.click();
	   return  PageFactory.initElements(driver, CheckoutPaymentTab.class);
           }

   public void selectHomeDelivery(){
	     //deliveryRadio1.click();
	     deliveryRadio2.click();
          }
   
   public void selectLondonStroe(){
	   //londonStoreRadio1.click();
	   londonStoreRadio2.click();
          }

  public void selectBirminghamStore(){
	 //birminghamStoreRadio1.click();
	 birminghamStoreRadio2.click();
 }
 
   public void selectTraffordStroe(){
	 //traffordStoreradio1.click();
	 traffordStoreradio2.click();
}

  public void selectExchangeSquareStore(){
	//exchangeSquareStroeRadio1.click();
	exchangeSquareStroeRadio2.click();
}

  public void selectFirstCollectionAvailableDay(){
	//day1Part1.click();
	day1Part2.click();
}
  public void selectSecondCollectionAvailableDay(){
	//day2Part1.click();
	day2Part2.click();
}

}


