package com.selfridges.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class CheckoutPaymentTab {
WebDriver driver;
	
	public CheckoutPaymentTab(WebDriver dr){
		this.driver = dr;
	}
	
	@FindBy(id = Constants.payWithNewDebitCreditCardRadio)
	WebElement payWithNewDebitCreditCardRadio;
	@FindBy(linkText = Constants.selectCardTypePleaseChoose)
	WebElement selectCardTypePleaseChoose;
	@FindBy(linkText = Constants.selectVisa)
	WebElement selectVisa;
	@FindBy(linkText = Constants.selectVisaDebit)
	WebElement selectVisaDebit;
	@FindBy(linkText = Constants.selectMasterCard)
	WebElement selectMasterCard;
	@FindBy(linkText = Constants.selectAmericanExpress)
	WebElement selectAmericanExpress;
	@FindBy(linkText = Constants.selectMaestroCard)
	WebElement selectMaestroCard;
	@FindBy(linkText = Constants.selectElectron)
	WebElement selectElectron;
	@FindBy(id = Constants.cardNumberField)
	WebElement cardNumberField;
	@FindBy(id = Constants.nameOnCardField)
	WebElement nameOnCardField;
	@FindBy(linkText = Constants.expiryMonthDropdown)
	WebElement expiryMonthDropdown;
	@FindBy(linkText = Constants.expiryYearDropdown)
	WebElement expiryYearDropdown;
	@FindBy(id = Constants.cv2)
	WebElement cv2;
	@FindBy(id = Constants.payNowButton)
	WebElement payNowButton;
	@FindBy(id = Constants.addNewBillingAddressForNewCard)
	WebElement addNewBillingAddressForNewCard;
	WebElement CardExpiryMonth;
	@FindBy(linkText=Constants.mr)
	WebElement mr;
	@FindBy(linkText=Constants.mrs)
	WebElement mrs;
	@FindBy(linkText=Constants.miss)
	WebElement miss;
	@FindBy(linkText=Constants.ms)
	WebElement ms;
	@FindBy(linkText=Constants.dr)
	WebElement dr;
	@FindBy(linkText=Constants.billingAddressTitle)
	WebElement billingAddressTitle;
	@FindBy(css = Constants.firstNameAddBillingAddress)
	WebElement firstNameAddBillingAddress;
	@FindBy(css = Constants.lastNameAddBillingAddress)
	WebElement lastNameAddBillingAddress;
	@FindBy(id = Constants.contactNumberAddBillingAddress)
	WebElement contactNumberAddBillingAddress;
	@FindBy(id = Constants.housenameOrNumberAddBillingAddress)
	WebElement housenameOrNumberAddBillingAddress;
	@FindBy(id = Constants.postCodeAddBillingAddress)
	WebElement postCodeAddBillingAddress;
	@FindBy(id = Constants.findAddressButtonAddBillingAddress)
	WebElement findAddressButtonAddBillingAddress;
	@FindBy(id = Constants.saveAddressButtonAddBillingAddress)
	WebElement saveAddressButtonAddBillingAddress;
	@FindBy(linkText = Constants.addressAddedConfirmationSuccessContinueButton)
	WebElement addressAddedConfirmationSuccessContinueButton;
	@FindBy(id = Constants.placeOrderButtonButton)
	WebElement placeOrderButtonButton;
	@FindBy(css = Constants.payWithGiftCard)
	WebElement payWithGiftCard;
	
	
public CheckoutOrderConfirmationTab placeAnOrderWithOnlyNewDebitCreditCard(String cardType, String cardNum, String cardName, String expMonth, String expYear, String cvv, String title,String fname, String lname, String phone, String countryName, String postcode, String line1, String line2, String line3, String line4) throws InterruptedException{
		
		payWithNewDebitCreditCardRadio.click();
		  selectCardTypePleaseChoose.click();
		  selectCardType(cardType);
		  cardNumberField.clear();
		  cardNumberField.sendKeys(cardNum);
		  nameOnCardField.clear();
		  nameOnCardField.sendKeys(cardName);
		  expiryMonthDropdown.click();
		  driver.findElement(By.linkText(expMonth)).click();
		  expiryYearDropdown.click();
		  driver.findElement(By.linkText(expYear)).click();
		  cv2.clear();
		  cv2.sendKeys(cvv);
		  addNewBillingAddressForNewCard.click();
		  billingAddressTitle.click();
		  selectTitle(title);
		  firstNameAddBillingAddress.clear();
		  firstNameAddBillingAddress.sendKeys(fname);
		  lastNameAddBillingAddress.clear();
		  lastNameAddBillingAddress.sendKeys(lname);
		  contactNumberAddBillingAddress.clear();
		  contactNumberAddBillingAddress.sendKeys(phone);
		  housenameOrNumberAddBillingAddress.clear();
		  housenameOrNumberAddBillingAddress.sendKeys(line1);
		  postCodeAddBillingAddress.clear();
		  postCodeAddBillingAddress.sendKeys(postcode);
		  findAddressButtonAddBillingAddress.click();
		  Thread.sleep(2000);
		  saveAddressButtonAddBillingAddress.click();
		  addressAddedConfirmationSuccessContinueButton.click();
		  Thread.sleep(2000);
		  payWithNewDebitCreditCardRadio.click();
		  Thread.sleep(2000);
		  cardNumberField.clear();
		  Thread.sleep(2000);
		  cardNumberField.sendKeys(cardNum);
		  Thread.sleep(2000);
		  cv2.clear();
		  Thread.sleep(2000);
		  cv2.sendKeys(cvv);
		  cv2.sendKeys(Keys.TAB);
		  placeOrderButtonButton.click(); 
		  
		  return  PageFactory.initElements(driver, CheckoutOrderConfirmationTab.class);
	}

/*public CheckoutOrderConfirmationTab placeAnOrderWithGiftCardOnly(String cardNumber, String Pin){
	payWithNewDebitCreditCardRadio.click();
	  selectCardTypePleaseChoose.click();
	  selectCardType(cardType);
	  cardNumberField.clear();
	  
}*/

private void selectTitle(String title) {
	if("mr".equalsIgnoreCase(title))
	  mr.click();
	else if("mrs".equalsIgnoreCase(title))
		mrs.click();
	else if("ms".equalsIgnoreCase(title))
		ms.click();
	else if("miss".equalsIgnoreCase(title))
		miss.click();
	else if("dr".equalsIgnoreCase(title))
		dr.click();
}


private void selectCardType(String cardType) {
	if("visa".equalsIgnoreCase(cardType))
		  selectVisa.click();
		else if("visa debit".equalsIgnoreCase(cardType))
			selectVisaDebit.click();
		else if("master card".equalsIgnoreCase(cardType))
			selectMasterCard.click();
		else if("American Express".equalsIgnoreCase(cardType))
			selectAmericanExpress.click();
		else if("Maestro card".equalsIgnoreCase(cardType))
			selectMaestroCard.click();
		else selectElectron.click();
}
	
}
