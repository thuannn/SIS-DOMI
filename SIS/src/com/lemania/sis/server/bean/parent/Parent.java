package com.lemania.sis.server.bean.parent;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Load;
import com.lemania.sis.server.DatastoreObject;
import com.lemania.sis.server.bean.student.Student;

@Entity
@Index
public class Parent extends DatastoreObject implements Comparable<Parent> {
	
	private String title;
	private String firstName;
	private String lastName;
	private String eMail;
	private String phoneMobile;
	private String phoneHome;
	private String phoneWork;
	boolean acceptSMS = false;
	boolean acceptEmail = false;
	
	@Load List<Ref<Student>> children = new ArrayList<Ref<Student>>();
	
	
	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String geteMail() {
		return eMail;
	}


	public void seteMail(String eMail) {
		this.eMail = eMail;
	}


	public String getPhoneMobile() {
		return phoneMobile;
	}


	public void setPhoneMobile(String phoneMobile) {
		this.phoneMobile = phoneMobile;
	}


	public String getPhoneHome() {
		return phoneHome;
	}


	public void setPhoneHome(String phoneHome) {
		this.phoneHome = phoneHome;
	}


	public String getPhoneWork() {
		return phoneWork;
	}


	public void setPhoneWork(String phoneWork) {
		this.phoneWork = phoneWork;
	}


	public boolean isAcceptSMS() {
		return acceptSMS;
	}


	public void setAcceptSMS(boolean acceptSMS) {
		this.acceptSMS = acceptSMS;
	}


	public boolean isAcceptEmail() {
		return acceptEmail;
	}


	public void setAcceptEmail(boolean acceptEmail) {
		this.acceptEmail = acceptEmail;
	}


	public List<Student> getChildren() {
		//
		Map<Key<Student>, Student> c = ObjectifyService.ofy().load().refs(children);
		return (List<Student>) c.values();
	}


	@Override
	public int compareTo(Parent o) {
		//
		int result = -1;
		return result;
	}
	
}
