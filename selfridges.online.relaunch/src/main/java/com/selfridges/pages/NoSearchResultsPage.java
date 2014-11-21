package com.selfridges.pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;

public class NoSearchResultsPage {

	@FindBy(xpath=Constants.nosearchResultsText)
	WebElement nosearchResultsText;
	@FindBy(xpath=Constants.sorryCouldnotFindTheTermText)
	WebElement SorryCouldnotFindTheTermText;
	@FindBy(xpath=Constants.searchTextField)
	WebElement searchTextField;
	@FindBy(css=Constants.recentlyViewedItemsSection)
	List<WebElement> recentlyViewedItemsSection;
	@FindBy(id = Constants.submitButton)
	WebElement submitButton;

	WebDriver driver;
	
	public NoSearchResultsPage(WebDriver dr){
		driver=dr;
	}

	public boolean isnoSearchResultsTextExist() {
		if (nosearchResultsText.getText().equalsIgnoreCase("No Results For"))
		    return true;
		else 
			return false;
	}
	
	public boolean isWeAreSorryWecouldnotFindTextExist() {
		//System.out.println(SorryCouldnotFindTheTermText.getText());
		if (SorryCouldnotFindTheTermText.getText().equalsIgnoreCase("We're sorry, we couldn't find anything to match your search."))
		    return true;
		else 
			return false;
	}
	
	public boolean isSearchTermDisplayed(String arg1) {
		//System.out.println(searchTextField.getAttribute("value"));
		if (searchTextField.getAttribute("value").equalsIgnoreCase(arg1))
		    return true;
		else 
			return false;
	}
	
	public boolean isRecentlyViewedItemsSectionExist() {
		if(recentlyViewedItemsSection.size()== 0)
		   return false;
		else 
		   return true;
	}
	
	public PLPPage clearAndSearchForANewTerm(String arg1) {
		searchTextField.clear();
		searchTextField.sendKeys(arg1);
		submitButton.click();
		return  PageFactory.initElements(driver, PLPPage.class);
	}
}
