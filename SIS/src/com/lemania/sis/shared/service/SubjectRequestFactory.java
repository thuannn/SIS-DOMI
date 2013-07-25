package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.SubjectDao;
import com.lemania.sis.shared.SubjectProxy;

public interface SubjectRequestFactory extends RequestFactory {
	@Service(value=SubjectDao.class, locator=DaoServiceLocator.class)
	interface SubjectRequestContext extends RequestContext {
	//
		//
		Request<List<SubjectProxy>> listAll();
		
		Request<Void> save( SubjectProxy subject );
		Request<SubjectProxy> saveAndReturn( SubjectProxy subject );
		
		Request<Void> removeSubject( SubjectProxy subject );
		
		Request<Void> initialize();
		//
	}
	
	SubjectRequestContext subjectRequest();
	//

}
