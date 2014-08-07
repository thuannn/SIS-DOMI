package com.lemania.sis.server.bean.absenceitem;

import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.bean.assignment.Assignment;
import com.lemania.sis.server.bean.motifabsence.MotifAbsence;
import com.lemania.sis.server.bean.period.Period;
import com.lemania.sis.server.bean.student.Student;
import com.lemania.sis.server.service.MyDAOBase;

public class AbsenceItemDao extends MyDAOBase {

	public void initialize(){
		return;
	}
	
	/*
	 * */
	public List<AbsenceItem> listAll(){
		//
		Query<AbsenceItem> q = ofy().load().type(AbsenceItem.class);
		List<AbsenceItem> returnList = q.list();
		for ( AbsenceItem ai : q ) {
			populateUnsavedValues( ai );
		}
		return returnList;
	}
	
	
	/*
	 * */
	public List<AbsenceItem> listAllByAssignment( String assignmentId, String strAbsenceDate ){
		//
		Assignment asg = ofy().load().key( Key.create(Assignment.class, Long.parseLong(assignmentId)) ).now();
		//
		Query<AbsenceItem> q = ofy().load().type(AbsenceItem.class)
				.filter("strAbsenceDate", strAbsenceDate)
				.filter("keyProf", asg.getProf())
				.filter("keySubject", asg.getSubject())
				.filter("keyClasse", asg.getClasse());
  		List<AbsenceItem> returnList = q.list();
		for ( AbsenceItem ai : q ) {
			populateUnsavedValues( ai );
		}
		return returnList;
	}
	
	
	/*
	 * */
	public List<AbsenceItem> listAllByStudent( String studentId ){
		//
		Query<AbsenceItem> q = ofy().load().type(AbsenceItem.class)
				.filter("keyStudent", Key.create(Student.class, Long.parseLong(studentId)))
				.order("strAbsenceDate");
  		List<AbsenceItem> returnList = q.list();
		for ( AbsenceItem ai : q ) {
			//
			populateUnsavedValues( ai );
		}
		return returnList;
	}
	
	

	/*
	 * */
	public void save(AbsenceItem ai){
		ofy().save().entities( ai );
	}
	
	
	
	/*
	 * */
	public AbsenceItem updateAbsenceLateItem(String aiID, int minutes) {
		AbsenceItem returnAI;
		AbsenceItem ai = ofy().load().key( Key.create(AbsenceItem.class, Long.parseLong(aiID)) ).now();
		ai.setLateMinutes(minutes);
		Key<AbsenceItem> key = ofy().save().entities( ai ).now().keySet().iterator().next();
		try {
			returnAI = ofy().load().key(key).now();
			populateUnsavedValues( returnAI );
			
			return returnAI;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	
	/*
	 * */
	public AbsenceItem saveAbsenceItem(
			String strDate,
			String studentId,
			String periodId,
			String profId,
			String classId,
			String subjectId, 
			String motifId,
			String codeAbsence,
			String profComment,
			int lateMinute,
			boolean justified,
			boolean parentNotified ) {
		//
		AbsenceItem returnAI = new AbsenceItem();
		returnAI.setStrAbsenceDate(strDate);
		returnAI.setKeyStudent( Key.create(Student.class, Long.parseLong(studentId)));
		returnAI.setKeyPeriod( Key.create(Period.class, Long.parseLong(periodId)));
		returnAI.setKeyProf( Key.create(Professor.class, Long.parseLong(profId)));
		returnAI.setKeyClasse( Key.create(Classe.class, Long.parseLong(classId)));
		returnAI.setKeySubject( Key.create(Subject.class, Long.parseLong(subjectId)));
		if ( !motifId.equals("") )
			returnAI.setKeyMotif( Key.create(MotifAbsence.class, Long.parseLong(motifId)));
		returnAI.setCodeAbsenceType(codeAbsence);
		returnAI.setProfComment(profComment);
		returnAI.setLateMinutes(lateMinute);
		returnAI.setJusttified(justified);
		returnAI.setParentNotified(parentNotified);
		//
		Key<AbsenceItem> key = ofy().save().entities( returnAI ).now().keySet().iterator().next();
		try {
			returnAI = ofy().load().key(key).now();
			populateUnsavedValues( returnAI );
			return returnAI;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public AbsenceItem saveAndReturn(AbsenceItem ai){
		//
		AbsenceItem returnAI;
		Key<AbsenceItem> key = ofy().save().entities( ai ).now().keySet().iterator().next();
		try {
			returnAI = ofy().load().key(key).now();
			populateUnsavedValues( returnAI );
			
			return returnAI;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public void removeAbsenceItem(AbsenceItem ai){
		ofy().delete().entities(ai);
	}
	
	
	/*
	 * */
	public void removeAbsenceItem(String aiID){
		ofy().delete().entities( ofy().load().key( Key.create(AbsenceItem.class, Long.parseLong(aiID))).now() );
	}
	
	
	/*
	 * */
	private void populateUnsavedValues(AbsenceItem ai) {
		//
		ai.setStudentId( Long.toString( ai.getKeyStudent().getId() ));
		ai.setPeriodId( Long.toString( ai.getKeyPeriod().getId() ));
		//
		if ( ai.getKeyMotif() != null)
			ai.setMotifId( Long.toString( ai.getKeyMotif().getId() ));
		else
			ai.setMotifId("");
		//
		Subject subject = ofy().load().key( ai.getKeySubject() ).now();
		ai.setSubjectName( subject.getSubjectName() );
		//
		Professor prof = ofy().load().key( ai.getKeyProf() ).now();
		ai.setProfName( prof.getProfName() );
	}
	
}
