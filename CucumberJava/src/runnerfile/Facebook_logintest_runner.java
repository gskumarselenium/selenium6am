package runnerfile;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features={"Features"},
		glue={"stepDefinitions"},
		format={"pretty","html:E:/SELENIUM WORKSPACE 2017/ONLINE 6AM/CucumberJava/target/reports"}
				
		)

public class Facebook_logintest_runner {

}
