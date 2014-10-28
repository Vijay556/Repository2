package com.selfridges.test;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@Cucumber.Options(format={"pretty", "html:target/cucumber"}, features = {"src/main/resources/com/selfridges/test/vijay1.feature"})

@Cucumber.Options(		
		             features = {"src/main/resources/vijay1.feature"},
                     format = {"json:target/cucumber.json", "html:target/cucumber"},
                     tags = {"@RunOnlyThis"}
		          )

//@Dcucumber.options(--tags @runThis --tags ~@ignore --format json-pretty:target/cucumber-report-myReport.json --format html:target/cucumber-html-report-myReport)
public class TestRunner {

}
