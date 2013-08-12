package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=BulletinSubject.class, locator=ObjectifyLocator.class)
public interface BulletinSubjectProxy extends EntityProxy {
	//
	Long getId();

	public String getSubjectName();
	public void setSubjectName(String subjectName);
	
	public Double getSubjectCoef();
	public void setSubjectCoef(Double subjectCoef);
	
	public Double getTotalBrancheCoef();
	public void setTotalBrancheCoef(Double totalBrancheCoef);
	
	public String getProfName();
	public void setProfName(String profName);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
	
	public String getT1();
	public void setT1(String t1);

	public String getT2();
	public void setT2(String t2);

	public String getT3();
	public void setT3(String t3);

	public String getAn();
	public void setAn(String an);

	public String getRemarqueT1();
	public void setRemarqueT1(String remarqueT1);

	public String getRemarqueT2();
	public void setRemarqueT2(String remarqueT2);

	public String getRemarqueT3();
	public void setRemarqueT3(String remarqueT3);

	public String getStudentName();
	public void setStudentName(String studentName);
}