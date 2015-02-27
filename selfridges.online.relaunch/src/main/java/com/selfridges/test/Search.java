package com.selfridges.test;

import junit.framework.Assert;

import org.junit.BeforeClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.pages.GlobalMenu;
import com.selfridges.pages.NoSearchResultsPage;
import com.selfridges.pages.PDPPage;
import com.selfridges.pages.PLPPage;
import com.selfridges.util.WebController;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@SuppressWarnings("deprecation")
public class Search {
	WebController controller;
	GlobalMenu gm = null;
	PLPPage plp = null;
	PDPPage pdp = null;
	NoSearchResultsPage nsrp = null;
		
	@Before
	public void setUp(){
		System.out.println("Running before method");
		controller = WebController.getInstance();
		controller.invokeBrowser();
		controller.goToURL("HomePageURL");	
	}
	
	@After
	public void tearDown(Scenario scenario){
		System.out.println("Running after method");
		//Embed the screenshots to the report if scenario is failed
		 if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) controller.driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	    }
	        controller.closeBrowser();	
	   	}

	/*
	 * @Given("^I am on Selfridges website$")
	public void I_am_on_Selfridges_website() throws Throwable {
		
	}
	*/

	@When("^I enter a search term \"([^\"]*)\" in search field$")
	public void I_enter_a_search_term_in_search_field(String arg1) throws Throwable {
		gm = PageFactory.initElements(controller.driver, GlobalMenu.class);
		gm.searchProduct(arg1);
	}

	@SuppressWarnings("deprecation")
	@Then("^I should see search results displayed$")
	public void I_should_see_seacrh_results_displayed() throws Throwable {
		plp = PageFactory.initElements(controller.driver, PLPPage.class);
		Assert.assertTrue("This is not a PLP page", plp.isThisPLPPage());
	   }

	@SuppressWarnings("deprecation")
	@Then("^I should see no search results with \"([^\"]*)\" displayed$")
	public void I_should_see_no_search_results_with_displayed(String arg1) throws Throwable {
		nsrp = PageFactory.initElements(controller.driver, NoSearchResultsPage.class);
		Assert.assertTrue("'No search results' text doesn't exist", nsrp.isnoSearchResultsTextExist());
		Assert.assertTrue("'We are sorry we couldn't find' text doesn't exist", nsrp.isWeAreSorryWecouldnotFindTextExist());
		Assert.assertTrue(" Search term we entered is not pulling on to the No search results page", nsrp.isSearchTermDisplayed(arg1));
			}
	
	@SuppressWarnings("deprecation")
	@Then("^I should not see recently viewed items section displayed$")
	public void I_should_not_see_recently_viewed_items_section_displayed() throws Throwable {
		nsrp = PageFactory.initElements(controller.driver, NoSearchResultsPage.class);
		Assert.assertFalse("Recently viewed item section is not expected as user not visited any items recently", nsrp.isRecentlyViewedItemsSectionExist());
	    }

	@When("^I clear existing term from search field and I searched for a new product \"([^\"]*)\"$")
	public void I_clear_existing_term_from_search_field_and_I_searched_for_a_new_product(String arg1) throws Throwable {
		  nsrp = PageFactory.initElements(controller.driver, NoSearchResultsPage.class);
		   nsrp.clearAndSearchForANewTerm(arg1);
		}

	@When("^I navigated to PDP of the first product$")
	public void I_navigated_to_PDP_of_the_first_product() throws Throwable {
		plp = PageFactory.initElements(controller.driver, PLPPage.class);
		plp.goToPDPOfFirstProduct();		
	    }

	@SuppressWarnings("deprecation")
	@Then("^I should see recently viewed items section displayed$")
	public void I_should_see_recently_viewed_items_section_displayed() throws Throwable {
		nsrp = PageFactory.initElements(controller.driver, NoSearchResultsPage.class);
		Assert.assertTrue("Recently viewed item section doesn't exist", nsrp.isRecentlyViewedItemsSectionExist());
	    }
	}

