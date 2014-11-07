package com.selfridges.pages;

//import java.awt.List;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class PLPPage {
	
	@FindBy(xpath=Constants.pageviews60)
	WebElement pageViews60;
	@FindBy(xpath=Constants.pageviews180)
	WebElement pageViews180;
	@FindBy(xpath=Constants.sortByDropdown)
	WebElement sortByDropdown;
	@FindBy(xpath=Constants.nextPageArrow)
	WebElement nextPageArrow;
	@FindBy(xpath=Constants.previousPageArrow)
	WebElement previousPageArrow;
	@FindBy(xpath=Constants.brandName_1)
	WebElement brand1;
	@FindBy(xpath=Constants.brandOneCount)
	WebElement brandCount1;
	@FindBy (xpath=Constants.totalProductsFound)
	WebElement totalProductsFound;
	@FindBy(xpath=Constants.firstProduct)
	WebElement firstProduct;
	@FindBy(xpath=Constants.secondProduct)
	WebElement secondProduct;
	@FindBy(xpath=Constants.addToBagPLP)
	WebElement addToBagPLP;
	@FindBy(xpath=Constants.lhnHeaderRefineBy)
	WebElement lhnHeaderRefineBy;
	@FindBy(xpath=Constants.lhnRefinemntOption1)
	WebElement lhnRefinemntOption1;
	@FindBy(xpath=Constants.lhnRefinemntOption2)
	WebElement lhnRefinemntOption2;
	@FindBy(xpath=Constants.lhnRefinemntOption3)
	WebElement lhnRefinemntOption3;
	@FindBy(xpath=Constants.lhnRefinemntOption4)
	WebElement lhnRefinemntOption4;
	@FindBy(xpath=Constants.lhnRefinemntOption5)
	WebElement lhnRefinemntOption5;
	@FindBy(xpath=Constants.lhnRefinemntOption6)
	WebElement lhnRefinemntOption6;
	@FindBy(xpath=Constants.lhnRefinemntOption7)
	WebElement lhnRefinemntOption7;
	@FindBy(xpath=Constants.lhnRefinemntOptions)
	List<WebElement> lhnRefinemntOptions;
	
	WebDriver driver;
	
	public PLPPage(WebDriver dr){
		driver=dr;
	}
	
	public boolean isThisPLPPage() {
		String[] refinementOptions;
		refinementOptions = availableRefinemntOptions();
		System.out.println("Number of refinement options are: " + refinementOptions.length + "  and they are: ");
		for (String temp: refinementOptions)
			System.out.println(temp);
		if(firstProduct.isDisplayed() && lhnHeaderRefineBy.isDisplayed() && refinementOptions.length >= 1)			
			return true; 
		else 
			return false;
	}
	
	public String[] availableRefinemntOptions(){
		String[] temp;
		List<WebElement> options = lhnRefinemntOptions;
		 temp = new String[options.size()];
		    for(int i=0; i<options.size(); i++) 
		       temp[i] = options.get(i).getText();
		 return temp;
		}
	
	public void selectPageViews(int views){
		
		if(views == 60){		
			pageViews60.click();
			
		}
		else if(views == 120){
			pageViews180.click();
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		}
			
		else
			System.out.println("Invalid number of items per page");
		
	}
	
	public void sortProducts(String sortyBy){
		sortByDropdown.sendKeys(sortyBy);
		sortByDropdown.sendKeys(Keys.ENTER);
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	
	public void goToNextPage(){
			
	}
	
	public void goToPreviousPage(){
	
		
	}
	
	public void refineByBrandName(){
		String brandName;
		String brandCountText;
		int brandCount;
		int productsCountPLP;
		String brandNameOnProduct;
		//Extract the brand name and count
		brandName=brand1.getText();
		brandCountText=brandCount1.getText();
		brandCount=Integer.valueOf(brandCountText.substring(1, brandCountText.length()-1));
		
		//Refine the results by first brand
		brand1.click();
		System.out.println(brandName);
		System.out.println(brandCount1.getText());	
		System.out.println(brandCount);
		
		productsCountPLP=Integer.valueOf(totalProductsFound.getText());
		System.out.println(productsCountPLP);
		
		int i=1;
		String productXpathFirstPart="//*[@id='contentWrapper']/div[2]/div[1]/div/div[";
		String productXpathLastPart="]/form/ul/li[1]";
		
		while(isElementPresent(productXpathFirstPart+i+productXpathLastPart)){
		
			System.out.println("Counting number of elements ****** "+i);
			System.out.println(driver.findElement(By.xpath(productXpathFirstPart+i+productXpathLastPart)).getText());
			brandNameOnProduct=driver.findElement(By.xpath(productXpathFirstPart+i+productXpathLastPart)).getText();
			System.out.println("Brand name on product and filter selection are same ***** "+brandNameOnProduct.equals(brandName));
			i++;
		}
	}
	
	public boolean isElementPresent(String xpath){
		
		try{
			driver.findElement(By.xpath(xpath));
			return true;
		}catch(Exception e){
			System.out.println("Element not found");
			return false;
		}
		
	}
	
	public void refineByColour(){
		
	}
	
	public void refineBySize(){
		
	}
	
	public void refineByPrice(){
		
	}
	
	public void refineByDelivery(){
		
	}
	
	public void addToWishList(){
		
	}
	
	public void quickView(){
		
	}
	
	public PDPPage goToPDPOfFirstProduct(){
		
		firstProduct.click();
		return PageFactory.initElements(driver, PDPPage.class);
		
	}
	
public PDPPage goToPDPOfSecondProduct(){
		secondProduct.click();
		return PageFactory.initElements(driver, PDPPage.class);
	}
	
	public QuickViewPage addToBag(){
		addToBagPLP.click();
		return PageFactory.initElements(driver, QuickViewPage.class);
	}
}
