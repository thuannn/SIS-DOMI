package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.event.StudentAfterStatusChangeEvent;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.FieldValidation;
import com.lemania.sis.client.NotificationTypes;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.StudentListUiHandler;
import com.lemania.sis.shared.StudentProxy;
import com.lemania.sis.shared.service.StudentRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.StudentRequestFactory.StudentRequestContext;

public class StudentPresenter 
	extends Presenter<StudentPresenter.MyView, StudentPresenter.MyProxy>
	implements StudentListUiHandler {

	public interface MyView extends View, HasUiHandlers<StudentListUiHandler> {
		public void refreshTable();
		public void setTableData( List<StudentProxy> studentList );
		public void initializeTable();
		public void updateEditedStudent(StudentProxy student);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.students)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<StudentPresenter> {
	}

	@Inject
	public StudentPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().initializeTable();
	}
	
	@Override
	protected void onReset(){
		super.onReset();
		
		// Thuan
		loadStudentList();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.students));
	}

	
	/* Load student list when form is opened */
	private void loadStudentList(){
		StudentRequestContext rc = getStudentRequestContext();
		rc.listAll().fire(new Receiver<List<StudentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<StudentProxy> response) {
				getView().setTableData(response);
			}
		});
	}
	
	
	/* Change a student status to be active or inactive */
	@Override
	public void updateStudentStatus( final StudentProxy student, final Boolean value ) {
		StudentRequestContext rc = getStudentRequestContext();
		StudentProxy studentForUpdate = rc.edit( student );
		studentForUpdate.setIsActive(value);
		rc.saveAndReturn(studentForUpdate).fire(new Receiver<StudentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(StudentProxy response) {
				getView().updateEditedStudent(response);
				getEventBus().fireEvent( new StudentAfterStatusChangeEvent(student.getId().toString(), student.getEmail(), value));
			}
		});
	}
	
	
	/* Get the request context for StudenProxy.
	 * Used in every function which call to Request Factory */
	public StudentRequestContext getStudentRequestContext() {
		StudentRequestFactory rf = GWT.create(StudentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.studentRequest();
	}

	
	
	@Override
	public void updateStudentFirstName(StudentProxy student, String firstName) {
		//
		if (student.getFirstName().equals(firstName))
			return;
		//
		if (firstName.equals("")){
			Window.alert( NotificationTypes.invalid_input + " - Prénom");
			return;
		}
		//
		StudentRequestContext rc = getStudentRequestContext();
		StudentProxy studentForUpdate = rc.edit( student );
		studentForUpdate.setFirstName(firstName);
		rc.saveAndReturn(studentForUpdate).fire(new Receiver<StudentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(StudentProxy response) {
				getView().updateEditedStudent(response);
			}
		});
		
	}

	
	
	@Override
	public void updateStudentLastName(StudentProxy student, String lastName) {
		//
		if (student.getLastName().equals(lastName))
			return;
		//
		if (lastName.equals("")){
			Window.alert( NotificationTypes.invalid_input + " - Nom");
			return;
		}
		//
		StudentRequestContext rc = getStudentRequestContext();
		StudentProxy studentForUpdate = rc.edit( student );
		studentForUpdate.setLastName(lastName);
		rc.saveAndReturn(studentForUpdate).fire(new Receiver<StudentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(StudentProxy response) {
				getView().updateEditedStudent(response);
			}
		});
		
	}

	@Override
	public void updateStudentEmail(StudentProxy student, String email) {
		//
		if (student.getEmail().equals(email))
			return;
		//
		if (FieldValidation.isValidEmailAddress(email)){
			Window.alert(NotificationTypes.invalid_input + " - Email");
			return;
		}
		//
		StudentRequestContext rc = getStudentRequestContext();
		StudentProxy studentForUpdate = rc.edit( student );
		studentForUpdate.setEmail(email);
		rc.saveAndReturn(studentForUpdate).fire(new Receiver<StudentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(StudentProxy response) {
				getView().updateEditedStudent(response);
			}
		});
		
	}
}
