package com.lemania.sis.server.period;

import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.service.MyDAOBase;

public class PeriodDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	/*
	 * */
	public List<Period> listAll(){
		//
		Query<Period> q = ofy().load().type(Period.class);
		List<Period> returnList = q.list();
		Collections.sort(returnList);
		return returnList;
	}
	
	/*
	 * */
	public List<Period> listAllByClass(String classId){
		//
		Query<Period> q = ofy().load().type(Period.class).filter("classe", Key.create(Classe.class, Long.parseLong(classId)));
		List<Period> returnList = q.list();
		Collections.sort(returnList);
		return returnList;
	}

	/*
	 * */
	public void save(Period classroom){
		ofy().save().entities( classroom );
	}
	
	/*
	 * */
	public Period saveAndReturn(Period classroom){
		Key<Period> key = ofy().save().entities( classroom ).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public Period addPeriod( String classId, String description, int order, String note, boolean isActive ) {
		//
		Period period = new Period();
		period.setClasse( Key.create(Classe.class, Long.parseLong(classId)));
		period.setDescription(description);
		period.setOrder(order);
		period.setNote(note);
		period.setActive(isActive);
		//
		Key<Period> key = ofy().save().entities( period ).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public void removePeriod(Period period){
		ofy().delete().entities(period);
	}
}
