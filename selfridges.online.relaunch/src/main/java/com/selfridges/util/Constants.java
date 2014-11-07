package com.selfridges.util;
import java.util.concurrent.TimeUnit;

public class Constants {
	
	//PDP Page element identifiers
	public static final String selectColour_1_xpath="//*[@id='main']/div[1]/aside[2]/div/div[2]/form/fieldset[1]/ul/li[1]/span[1]/label/img";
	public static final String selectSize_1_xpath="//ul[@class='size']/li[1]/span[1]/label";
	public static final String incrementQuantiy_xpath="//fieldset[@class='quantity-field']/div/span[2]";
	public static final String decrementQuantity_xpath="//fieldset[@class='quantity-field']/div/span[1]";
	public static final String inputQuantity_xpath="//fieldset[@class='quantity-field']/div/input";
	public static final String btnAddToBag_xpath="//div[@class='actions']/button[@name='addToBagButton']";
	public static final String addToWishList_xpath="//div[@class='actions']/a[@class='addToWishlist']";
	public static final String nextArrow_xpath="//*[@id='main']/div[1]/div[2]/div/div/div/a[2]";
	public static final String previousArrow_xpath="//*[@id='main']/div[1]/div[2]/div/div/div/a[1]";
	
	//PLP Page element identifiers
	public static final String pageviews60="//*[@id='paginationHeader']/div/div[2]/ul/li[1]";
	public static final String pageviews180="//*[@id='paginationHeader']/div/div[2]/ul/li[2]/a";
	public static final String sortByDropdown="//*[@id='fh_sort_by']";
	public static final String previousPageArrow="//*[@id='paginationHeader']/div/div[3]/div/a";
	public static final String nextPageArrow="//*[@id='paginationHeader']/div/div[3]/div/a[2]";
	public static final String brandName_1="//*[@id='leftNav']/div[2]/div/ul/li[1]/label";
	public static final String brandOneCount="//*[@id='leftNav']/div[2]/div/ul/li[1]/span";
	public static final String totalProductsFound="//*[@id='paginationHeader']/div/div[1]/div/strong";
	public static final String addToBagPLP="//*[@id='masterContent']/div/div[1]/div/div[1]/form/span[1]";
	public static final String firstProduct="//*[@id='galImgId0']";
	public static final String secondProduct="//*[@id='galImgId1']";
	public static final String product_part1="//*[@id='galImgId";
	public static final String product_part2="']";
	public static final String lhnHeaderRefineBy = "//a[@id='refineBy']";
	public static final String lhnRefinemntOption1 = "//div[@id='leftNav']/div[2]/h3";
	public static final String lhnRefinemntOption2 = "//div[@id='leftNav']/div[3]/h3";
	public static final String lhnRefinemntOption3 = "//div[@id='leftNav']/div[4]/h3";
	public static final String lhnRefinemntOption4 = "//div[@id='leftNav']/div[5]/h3";
	public static final String lhnRefinemntOption5 = "//div[@id='leftNav']/div[6]/h3";
	public static final String lhnRefinemntOption6 = "//div[@id='leftNav']/div[5]/h3";
	public static final String lhnRefinemntOption7 = "//div[@id='leftNav']/div[6]/h3";
	public static final String lhnRefinemntOptions = "//div[@id='leftNav']/div/h3";
	
	//No Search results page
	public static final String nosearchResultsText = "//form[@id='frmFreeTextSearchForm']/h1";
	public static final String sorryCouldnotFindTheTermText = "//div[@id='noSearchResults_espot_1']/div/div/h3";
	public static final String searchTextField = "//input[@id='searchbox']";
	public static final String recentlyViewedItemsSection = "div.recentViewed > h2";//div[@id='no_search_results']/div/h2";
	public static final String submitButton = "searchSubmit";
	
	//My bag (Shopping summary page)
	
	public static final String checkOutBtn="//button";
	
	
	//Delivery page
	
	public static final String ukDeliveryRadio="//*[@id='radio_whatoptions_hd']";
	public static final String title="//*[@id='home_WC__NameEntryForm_FormInput_personTitle_1']";
	public static final String firstName="//*[@id='home_WC__NameEntryForm_FormInput_firstName_1']";
	public static final String surName="//*[@id='home_WC__NameEntryForm_FormInput_lastName_1']";
	public static final String telePhone="//*[@id='home_phone1']";
	public static final String postCode="//*[@id='postCode']";
	public static final String address1="//*[@id='address1']";
	public static final String address2="//*[@id='address2']";
	public static final String city="//*[@id='city']";
	public static final String county="//*[@id='state']";
	public static final String addressNickName="//*[@id='nickName']";
	public static final String sameAsBillingAddress="//*[@id='addressField1']";
	public static final String continueToDeliveryOptions="//*[@id='groupHD']/div/div[4]/div/button";
	public static final String guestEmail="//*[@id='home_guestEmailAddress']";
	
	public static final String clickAndCollectRadio="//*[@id='radio_whatoptions_cc']";
	public static final String title_cc="//*[@id='cc_WC__NameEntryForm_FormInput_personTitle_1']" ;
	public static final String firstName_cc="//*[@id='cc_WC__NameEntryForm_FormInput_firstName_1']";
	public static final String surName_cc="//*[@id='cc_WC__NameEntryForm_FormInput_lastName_1']";
	public static final String telePhone_cc="//*[@id='cc_phone1']";
	public static final String guestEmail_cc="//*[@id='cc_guestEmailAddress']";
	public static final String londonStore_cc="//*[@id='radio_activestores_1']";
	public static final String birminghamStore_cc="//*[@id='radio_activestores_3']";
	public static final String manchesterTraffordStore_cc="//*[@id='radio_activestores_2']";
	public static final String manchesterExchangeSotre_cc="//*[@id='radio_activestores_1']";
	
	public static final String intDeliveryRadio="//*[@id='radio_whatoptions_intl']";
	public static final String intCountry="//*[@id='intlCountry']";
	public static final String intTitle="//*[@id='intl_WC__NameEntryForm_FormInput_personTitle_1']";
	public static final String intfName="//*[@id='intl_WC__NameEntryForm_FormInput_firstName_1']";
	public static final String intsName="//*[@id='intl_WC__NameEntryForm_FormInput_lastName_1']";
	public static final String intEmail="//*[@id='intl_guestEmailAddress']";
	public static final String intPhone="//*[@id='intl_phone1']";
	public static final String intAddress1="//*[@id='address1']";
	public static final String intAddress2="//*[@id='address2']";
	public static final String intCity="//*[@id='city']";
	public static final String intCounty="//*[@id='state']";
	public static final String intZipCode="//*[@id='zipCode']";
	
	
	
	
	//*[@id='state']
	
	public static final String orderSummaryContinueOnRight="//*[@id='orderSummaryPanel']/div/button";
		
	//Gift Options page
	
	public static final String payNowBtn1="//*[@id='deliveryOptionsSection']/div[3]/div[1]/div/ul/li[1]/input";
	public static final String payNowBtn2="//*[@id='deliveryOptionsSection']/div[3]/div[4]/ul/li[2]/input";
	public static final String dateDropDown="//*[@id='storeCollectionDate_1']";
	public static final String londonStoreRadio="//*[@id='radio_activestores_1_1']";
	public static final String birminghamStoreRadio="//*[@id='radio_activestores_3_1']";
	public static final String manchesterTraffordStoreRadio="//*[@id='radio_activestores_2_1']";
	public static final String manchesterExchangeStoreRadio="//*[@id='radio_activestores_4_1']";
	
	//SignIn page
	
	public static final String loginEmail="//*[@id='logonId']";
	public static final String loginPassword="//*[@id='logonPassword']";
	public static final String signInBtn="//*[@id='sign_in']/div[2]/div/div/form/fieldset/button";
	public static final String regTitle="//*[@id='dk_container_personTitle']/a";
	public static final String regFName="//*[@id='firstName']";
	public static final String regLName="//*[@id='lastName']";
	public static final String regEmail="//*[@id='registerLogonId']";
	
	
	//Home page
	
	
	//Global menu
	public static final String searchIcon="//a[contains(text(),'Search')]";
	public static final String searchInput="//input[@name='freeText']";
	public static final String account="//*[@id='xhrUncachedNav']/ul/li[2]/a";
	public static final String bagIcon="//*[@class='counter']";
	public static final String viewBagMini="//*[@class='viewBag']";
	public static final String checkoutMini="//*[@class='checkout']";
	public static final String welcomeTxt="//*[@id='xhrUncachedNav']/ul/li[1]/span";
	public static final String signOut="//*[@id='myaccountnavInner']/ul/li[5]/a";
	public static final String MensL1Link="//a[contains(text(),'Mens')]";
	
	
	//Checkout options page
	public static final String continueToCheckoutAsAGuestOrANewUserButton = "CONTINUE TO THE CHECKOUT";
	public static final String userCheckOut="//*[@id='signInSection']/div[2]/div[2]/form/fieldset/div[4]/button";
	public static final String signUpNow="//*[@id='signInSection']/div[3]/div[2]/ul/li[1]/a/span";
	public static final String email="//*[@id='logonId']";
	public static final String password="//*[@id='logonPassword']";		
	public static final String forgotPassword="//*[@id='signInSection']/div[2]/div[2]/form/fieldset/div[3]/a";
	
			
	//Payment page
	public static final String cardNumber="//input[@id='cardnumber']";
	public static final String nameOnCard="//input[@id='cardholder']";
	public static final String expiryMonth="//*[@id='expirymonth']";
	public static final String expiryYear="//*[@id='expiryyear']";
	public static final String issueMonth="//*[@id='validmonth']";
	public static final String issueYear="//*[@id='validyyear']";
	public static final String issueNumber="//input[@id='issue']";
	public static final String cvvNumber="//input[@id='cv2']";
	public static final String billingPostcode_NonUK="//input[@id='zipCode']";
	public static final String billingPostcode_UK="//input[@id='postCode']";
	public static final String billingAddressFindButton="//button[@id='findaddress']";
	public static final String billingAddressline1="//input[@id='address1']";
	public static final String billingAddressline2="//input[@id='address2']";
	public static final String billingAddressline3="//input[@id='city']";
	public static final String billingAddressline4="//input[@id='state']";
	public static final String billingAddressNickName="//input[@id='nickName']";
	public static final String placeorderButton="//button[@id='summaryPlaceOrder1']";

	//Order confirmation page
    public static final String orderConfirmationNumber="//p[@class='ordernumber']";
	public static final String emailSentConfirmationText="//p[@class='multipleDelivery']";
	public static final String printreceiptButton="//a[@class='printReceipt btnR btnR3']";
	public static final String continueShoppingButton="//a[@class='btnR']";
	public static final String thankYouForYourOrderText="//h2";
	public static final String billingCountryName = "//select[@id='country']";
	public static final String cardType = "//select[@id='checkoutCardType']";
	
	//Your details tab
	public static final String yourDetailsText = "h3";
	public static final String titleDropDown = "TITLE";
	public static final String mr = "MR";
	public static final String mrs = "MRS";
	public static final String ms = "MS";
	public static final String miss = "MISS";
	public static final String dr = "DR";
	public static final String firstNameField = "firstName";
	public static final String lastNameField = "lastName";
	public static final String emailAddressField = "registerLogonId";
	//createPasswordRadio_no
	//div.singleInput.radioGroup > label
	//createPasswordRadio_yes
	////div[@id='guestPwd']/div/div[2]/label[2]
	public static final String phoneNumberField = "";
	public static final String whyEmailIsUsedForText = "";
	public static final String createPasswordRadioButton = "";
	public static final String continueToDeliveryButton = "checkoutSubmit1";
	public static final String passwordForAutoRecognisedEmail = "";
	public static final String resetPasswordLinkForAutoRecognisedEmail = "";
	public static final String creatingANewUserPasswordField = "logonPassword";
	public static final String creatingANewUserRepeatPasswordField = "logonPasswordVerify";
	public static final String emailOptoutCheckBox = "";
	public static final String AutoRecognisedEmailText = "";//We've noticed that you've entered a registered e-mail address.\n Please enter your password.\n If you don't know your password you can reset your password.
		
	
	//Delivery tab
	public static final String deliveryRadio1 = "selectHomeDelivery";
	public static final String deliveryRadio2 = "//div[@id='deliveryChoices']/div/label";
	public static final String clickAndCollectRadio1 = "selectClickAndCollect";
	public static final String clickAndCollectRadio2 = "//div[@id='deliveryChoices']/div[2]/label";
	
	public static final String londonStoreRadio1 = "address_1";
	public static final String londonStoreRadio2 = "//div[@id='clickCollectStoresSelect']/div[1]/div/label";
	public static final String birminghamStoreRadio1 = "address_3";
	public static final String birminghamStoreRadio2 = "//div[@id='clickCollectStoresSelect']/div[2]/div/label";
	public static final String traffordStoreradio1 = "address_2";
	public static final String traffordStoreradio2 = "//div[@id='clickCollectStoresSelect']/div[3]/div/label";
	public static final String exchangeSquareStroeRadio1 = "address_4";
	public static final String exchangeSquareStroeRadio2 = "//div[@id='clickCollectStoresSelect']/div[4]/div/label";
		
	public static final String day1Part1 = "selectedCalendarDate_1";
	public static final String day1Part2 = "//div[@id='calendar']/table/tbody/tr[1]/td[1]/label";
	public static final String day2Part1 = "selectedCalendarDate_2";
	public static final String day2Part2 = "//div[@id='calendar']/table/tbody/tr[1]/td[2]/label";
	public static final String isThisAGiftCheckBoxPart1 = "item-is-gift-1";
	public static final String isThisAGiftCheckBoxPart2 = "div.giftWrapDetails > label";
	public static final String giftPackagingPart1 = "Gift-998-1-1-1";
	//public static final String giftPackagingPart2 = "div.giftWrapAndMessage > label";
	public static final String giftMessageTextField = "Gift-999-1-1";
	public static final String continueToPaymentTab = "giftingContinueToPaymentButton";
	
}
