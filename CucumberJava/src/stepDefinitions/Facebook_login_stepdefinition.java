package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
//import cucumber.api.PendingException;
//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Facebook_login_stepdefinition {
	WebDriver driver;
	
	@Given("^user opens facebook login page$")
	public void user_opens_facebook_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\SELENIUM SOFTWARES 2017\\chromedriver.exe");
		  driver=new ChromeDriver();
		  driver.get("https://www.facebook.com");
		  driver.manage().window().maximize();
		 // throw new PendingException();
	}

	@Then("^user enters email id$")
	public void user_enters_email_id() throws Throwable {
		driver.findElement(By.xpath(".//input[@id='email']")).sendKeys("inetsolv@gmail.com");
		//throw new PendingException();
	}

	@Then("^user enters password$")
	public void user_enters_password() throws Throwable {
		driver.findElement(By.xpath(".//input[@id='pass']")).sendKeys("524123666");
		Thread.sleep(2000);
		//throw new PendingException();
	}

	@Then("^close the browser$")
	public void user_close_the_browser(){
		driver.quit();
	}
	
	@And("^fb login was finished$")
	public void fb_login_was_finished() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}


}


 