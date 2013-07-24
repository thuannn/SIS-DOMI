package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=com.lemania.sis.server.Student.class, locator=ObjectifyLocator.class)
public interface StudentProxy extends EntityProxy {
	
	public String getFirstName();
	public void setFirstName(String firstName);	
	
	public String getLastName();
	public void setLastName(String lastName);
	
	public String getEmail();
	public void setEmail(String email);
	
	public Boolean getIsActive();	
	public void setIsActive(Boolean isActive);
}
