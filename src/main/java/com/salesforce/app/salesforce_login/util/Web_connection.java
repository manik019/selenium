package com.salesforce.app.salesforce_login.util;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Web_connection {
	Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
		Properties OR = null;
		Properties CONFIG=null;
		public WebDriver driver;

			public Web_connection(){
			if(OR==null){
				try{
					// initialize OR
					OR = new Properties();
					FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\salesforce\\app\\salesforce_login\\config\\OR.properties");
					OR.load(fs);
					
					// initialize CONFIG to corresponding env
					CONFIG= new Properties();
					fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\salesforce\\app\\salesforce_login\\config\\CONFIG.properties");
					CONFIG.load(fs);
					
					//System.out.println(OR.getProperty("loginusername"));
					//System.out.println(CONFIG.getProperty("loginURL"));
					
					
				}catch(Exception e){
					System.out.println("Error on intializing properties files");
				}
				
				
				
			}
			
		}
		
		/// ****************Application Independent functions************************ ///

		// opening the browser
		public void openBrowser(String browserType){
			
			if(browserType.equals("Mozilla")){
				System.setProperty("webdriver.gecko.driver", "C:\\selenium java 3.4\\geckodriver-v0.18.0-win64\\geckodriver.exe");
				driver = new FirefoxDriver();
			}else if(browserType.equals("Chrome") ){
				System.setProperty("webdriver.chrome.driver", "C:\\selenium java 3.4\\chromedriver_win32\\chromedriver.exe");
				driver=new ChromeDriver();
			}
			
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		}
		// navigates to a URL
		public void navigate(String URL){
			driver.get(CONFIG.getProperty(URL));
		}
		// clicking on any object
		public void click(String objectName){
			driver.findElement(By.xpath(OR.getProperty(objectName))).click();
		}
		
		public void type(String text, String objectName){
			driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
		}
		
		public void select(String text, String objectName){
			driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
		}
		
		public boolean isElementPresent(String objectName){
			int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
			if(count==0)
				return false;
			else
				return true;
		}


		
		public void log(String msg) {
			APPLICATION_LOGS.debug(msg);
		}
}
