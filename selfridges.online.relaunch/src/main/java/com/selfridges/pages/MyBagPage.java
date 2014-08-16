package com.selfridges.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.selfridges.util.Constants;


public class MyBagPage {
	
	String removeItem_xpath_part1="//*[@id='bagItems']/div/table/tbody/tr[";
	String removeItem_xpath_part2="]/td[6]/p/a";
	@FindBy(xpath=Constants.checkOutBtn)
	WebElement checkOutBtn;
	
	WebDriver driver;
	public MyBagPage(WebDriver dr){
		driver=dr;
	}
	
	public CheckOutWelcomePage continueToCheckOut(){
	     checkOutBtn.click();
	     return PageFactory.initElements(driver, CheckOutWelcomePage.class);
		
	}
	public MyBagPage clearBasket(){
		
		//List<WebElement> basketProducts=driver.findElements(By.xpath("//*[@id='bagItems']/div/table/tbody/tr"));
		List<WebElement> basketProducts=driver.findElements(By.xpath("//*[@id='bagItems']/div/table/tbody/tr"));
		System.out.println("total number of rows: "+basketProducts.size());
		
		for(int i_RowNum=basketProducts.size(); i_RowNum>=1; i_RowNum--){
			
			String txt=driver.findElement(By.xpath(removeItem_xpath_part1+i_RowNum+removeItem_xpath_part2)).getText();
			System.out.println(txt);
			driver.findElement(By.xpath("//*[@id='bagItems']/div/table/tbody/tr["+i_RowNum+"]/td[6]/p/a")).click();
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
						
		}

		return this;
		
	}

}
