package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=Bulletin.class, locator=ObjectifyLocator.class)
public interface BulletinProxy extends EntityProxy {
	//
	Long getId();
	
	public String getBulletinName();
	public void setBulletinName(String profileName);

	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
	
	public String getClasseName();	
	public void setClasseName(String classeName);
	
	public String getStudentName();	
	public void setStudentName(String studentName);
	
	public String getYear();
	public void setYear(String year);
}
