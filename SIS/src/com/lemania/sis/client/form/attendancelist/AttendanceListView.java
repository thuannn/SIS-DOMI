package com.lemania.sis.client.form.attendancelist;

import java.util.List;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.values.AbsenceValues;
import com.lemania.sis.shared.AssignmentProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.bulletinsubject.BulletinSubjectProxy;
import com.lemania.sis.shared.period.PeriodProxy;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.dom.client.Style.VerticalAlign;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.ui.CheckBox;

class AttendanceListView extends ViewWithUiHandlers<AttendanceListUiHandlers>
		implements AttendanceListPresenter.MyView {
	interface Binder extends UiBinder<Widget, AttendanceListView> {
	}

	@Inject
	AttendanceListView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	@UiField FlexTable tblAttendance;
	@UiField ListBox lstProfs;
	@UiField ListBox lstAssignments;
	@UiField Label lblDate;
	@UiField RadioButton optAbsent;
	@UiField RadioButton optLate;
	@UiField RadioButton optExclude;
	@UiField RadioButton optHealth;
	@UiField CheckBox chkComplete;
	@UiField Label lblTitle;
	
	//
	int constantStudentNameCol = 0;
	int constantStudentNameRowStart = 1;
	
	int constantPeriodsColStart = 1;
	int constantPeriodRow = 0;
	
	int clickedCellIndex;
	int clickedRowIndex;
	
	//
	ListDataProvider<AssignmentProxy> providerAssignments = new ListDataProvider<AssignmentProxy>();
	ListDataProvider<BulletinSubjectProxy> providerBulletins = new ListDataProvider<BulletinSubjectProxy>();
	ListDataProvider<PeriodProxy> providerPeriods = new ListDataProvider<PeriodProxy>();
	
	
	/*
	 * */
	@Override
	public void setProfListData(List<ProfessorProxy> profs) {
		//
		lstProfs.clear();
		lstProfs.addItem("-","");
		for (ProfessorProxy prof : profs)
			lstProfs.addItem(prof.getProfName(), prof.getId().toString());
	}
	
	
	/*
	 * */
	@UiHandler("lstProfs")
	void onLstProfsChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfessorSelected(lstProfs.getValue(lstProfs.getSelectedIndex()));
	}
	
	
	/*
	 * */
	@Override
	public void setAssignmentTableData(List<AssignmentProxy> assignments) {
		//
		providerAssignments.getList().clear();
		providerAssignments.getList().addAll(assignments);
		//
		lstAssignments.clear();
		lstAssignments.addItem("-","");
		for ( AssignmentProxy assignment : providerAssignments.getList() ){
			lstAssignments.addItem( 
					assignment.getProgrammeName() + " - "
							+ assignment.getClasseName() + " - "  
							+ assignment.getSubjectName(), 
				assignment.getId().toString());
		}
	}
	
	
	/*
	 * */
	@UiHandler("lstAssignments")
	void onLstAssignmentsChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onAssignmentSelected( providerAssignments.getList().get( lstAssignments.getSelectedIndex() - 1 ));
	}


	/*
	 * */
	@Override
	public void setStudentListData(List<BulletinSubjectProxy> bulletins) {
		//
		providerBulletins.getList().clear();
		providerBulletins.getList().addAll(bulletins);
		//
		tblAttendance.removeAllRows();
		for (int i=0; i < providerBulletins.getList().size(); i++) {
			tblAttendance.setText( constantStudentNameRowStart + i, this.constantStudentNameCol, providerBulletins.getList().get(i).getStudentName() );
		}
	}


	/*
	 * */
	@Override
	public void setPeriodListData(List<PeriodProxy> periods) {
		//
		providerPeriods.getList().clear();
		providerPeriods.getList().addAll(periods);
		//
		for (int i=0; i < providerPeriods.getList().size(); i++) {
			tblAttendance.setText( this.constantPeriodRow, this.constantPeriodsColStart + i, providerPeriods.getList().get(i).getDescription() );
		}
		//
		styleTable();
		//
		onOptAbsentClick( null );
	}
	
	
	/*
	 * */
	public void styleTable(){
		// Add the Remarque column
		tblAttendance.setText(0, tblAttendance.getCellCount(0), "Remarque");

		// Add empty cells
		for (int i= this.constantStudentNameRowStart; i<tblAttendance.getRowCount(); i++) {
			for (int j= this.constantPeriodsColStart; j<tblAttendance.getCellCount(0); j++) {
				tblAttendance.setText(i, j, "");
			}
		}
		
		// Format normal cells
		for (int i=0; i<tblAttendance.getRowCount(); i++) {
			for (int j=0; j<tblAttendance.getCellCount(0); j++) {
				if (tblAttendance.isCellPresent(i, j))
					tblAttendance.getCellFormatter().setStyleName(i, j, "agendaNormal");
			}
		}
		
		// Period cells
		for (int j=0; j<tblAttendance.getCellCount(0); j++) {
			if (tblAttendance.isCellPresent( 0, j))
				tblAttendance.getCellFormatter().setStyleName( 0, j, "agendaTitle");
		}
		
		// Student name cells
		for (int i=0; i<tblAttendance.getRowCount(); i++)
			if (tblAttendance.isCellPresent(i, 0))
				tblAttendance.getCellFormatter().setStyleName(i, 0, "agendaTitle");
		
		//
		tblAttendance.getElement().getStyle().setVerticalAlign( VerticalAlign.BOTTOM );
	}


	
	/*
	 * */
	@Override
	public void initializeUI() {
		//
		tblAttendance.addClickHandler(new ClickHandler(){

			@Override
			public void onClick(ClickEvent event) {
				//
				clickedCellIndex = tblAttendance.getCellForEvent(event).getCellIndex();
				clickedRowIndex = tblAttendance.getCellForEvent(event).getRowIndex();
			}
			
		});
	}
	
	
	
	/*
	 * */
	@UiHandler("optAbsent")
	void onOptAbsentClick(ClickEvent event) {
		//
		lblTitle.setText("Saisir des absences");
		//
		removeAllWidgets();
		//
		prepareAbsentWidget();
	}
	
	
	/*
	 * */
	void removeAllWidgets() {
		//
		for ( int i= this.constantStudentNameRowStart; i < tblAttendance.getRowCount(); i++ ) {
			for ( int j= this.constantPeriodsColStart; j < tblAttendance.getCellCount(0); j++ ) {
				if ( tblAttendance.isCellPresent(i, j) ) {
					if ( tblAttendance.getWidget(i, j) != null)
						tblAttendance.getWidget(i, j).removeFromParent();
				}
			}
		}
	}
	
	
	/*
	 * */
	void prepareAbsentWidget() {
		//
		CheckBox chkAbsent;
		VerticalPanel pnlAbsenceCell;
		int indexRemarqueCol = tblAttendance.getCellCount(0) - 1;
		//
		for ( int i= this.constantStudentNameRowStart; i < tblAttendance.getRowCount(); i++ ) {
			for ( int j= this.constantPeriodsColStart; j < indexRemarqueCol; j++ ) {   	// don't forget the Remarque column
				if ( tblAttendance.isCellPresent(i, j) ) {
					//
					pnlAbsenceCell = new VerticalPanel();
					chkAbsent = new CheckBox();
					pnlAbsenceCell.add( chkAbsent );
					//
					chkAbsent.addClickHandler(new ClickHandler(){

						@Override
						public void onClick(ClickEvent event) {
							//
							clickedCellIndex = tblAttendance.getCellForEvent(event).getCellIndex();
							clickedRowIndex = tblAttendance.getCellForEvent(event).getRowIndex();
							//
							// If user check the box
							if ( ((CheckBox)event.getSource()).getValue() ) {
								//
								BulletinSubjectProxy bulletinSubject = providerBulletins.getList().get(clickedRowIndex - constantStudentNameRowStart );
								PeriodProxy pp = providerPeriods.getList().get(clickedCellIndex - constantPeriodsColStart );
								getUiHandlers().saveAbsenceItem(
										bulletinSubject.getStudentId(),
										pp.getId().toString(),
										bulletinSubject.getProfId(),
										bulletinSubject.getClassId(),
										bulletinSubject.getSubjectId(),
										"",
										getCodeAbsence(),
										((TextBox) tblAttendance.getWidget( clickedRowIndex, tblAttendance.getCellCount(clickedRowIndex)-1 )).getText(),
										-1,
										false,
										false );
							} else {
								//
								if ( tblAttendance.getWidget(clickedRowIndex, clickedCellIndex) != null ) {
									getUiHandlers().removeAbsenceItem( ((Label)((VerticalPanel)((CheckBox)event.getSource()).getParent()).getWidget(1)).getText() );
								}
							}
						}
						
					});
					//
					tblAttendance.setWidget(i, j, pnlAbsenceCell);
				}
			}
		}
		// Remarque column
		for (int i= this.constantStudentNameRowStart; i< tblAttendance.getRowCount(); i++) {
			tblAttendance.setText(i, indexRemarqueCol, "");
			tblAttendance.setWidget(i, indexRemarqueCol, new TextBox() );
		}
	}
	
	
	/*
	 * */
	public String getCodeAbsence(){
		//
		if (optAbsent.getValue())
			return AbsenceValues.absenceType_Absence_Code;
		if (optLate.getValue())
			return AbsenceValues.absenceType_Late_Code;
		if (optExclude.getValue())
			return AbsenceValues.absenceType_Exclude_Code;
		if (optHealth.getValue())
			return AbsenceValues.absenceType_Health_Code;
		return AbsenceValues.absenceType_Absence_Code;
	}
	
	
	/*
	 * */
	void prepareLateWidget() {
		//
		TextBox txtMinutes;
		int indexRemarqueCol = tblAttendance.getCellCount(0) - 1;
		//
		for ( int i= this.constantStudentNameRowStart; i < tblAttendance.getRowCount(); i++ ) {
			for ( int j= this.constantPeriodsColStart; j < indexRemarqueCol; j++ ) {   	// don't forget the Remarque column
				if ( tblAttendance.isCellPresent(i, j) ) {
					txtMinutes = new TextBox();
					txtMinutes.setWidth("20px");
					txtMinutes.addValueChangeHandler(new ValueChangeHandler<String>(){

						@Override
						public void onValueChange(ValueChangeEvent<String> event) {
							//
							Window.alert( providerBulletins.getList().get(clickedRowIndex - constantStudentNameRowStart ).getStudentName() 
									+ " - "
									+ providerPeriods.getList().get(clickedCellIndex - constantPeriodsColStart ).getDescription() );
						}
						
					});
					//
					tblAttendance.setWidget(i, j, txtMinutes);
				}
			}
		}
		// Remarque column
		for (int i= this.constantStudentNameRowStart; i< tblAttendance.getRowCount(); i++) {
			tblAttendance.setText(i, indexRemarqueCol, "");
			tblAttendance.setWidget(i, indexRemarqueCol, new TextBox() );
		}
	}
	

	
	/*
	 * */
	@Override
	public void resetUI( CurrentUser curUser ) {
		//
		// Set date
		lblDate.setText( curUser.getCurrentDay() + "." + curUser.getCurrentMonth() + "." + curUser.getCurrentYear() );
		//
		lstProfs.clear();
		lstAssignments.clear();
	}
	
	
	/*
	 * */
	@UiHandler("optLate")
	void onOptLateClick(ClickEvent event) {
		//
		lblTitle.setText("Saisir des retards");
		//
		removeAllWidgets();
		//
		prepareLateWidget();
	}
	
	
	/*
	 * */
	@UiHandler("optExclude")
	void onOptExcludeClick(ClickEvent event) {
		//
		lblTitle.setText("Saisir des exclusions");
		//
		removeAllWidgets();
		//
		prepareAbsentWidget();
	}
	
	
	/*
	 * */
	@UiHandler("optHealth")
	void onOptHealthClick(ClickEvent event) {
		//
		lblTitle.setText("Saisir des infirmeries");
		//
		removeAllWidgets();
		//
		prepareAbsentWidget();
	}


	/*
	 * */
	@Override
	public void setAddedAbsenceItem(AbsenceItemProxy aip) {
		//
		Label id;
		if ( tblAttendance.getWidget(clickedRowIndex, clickedCellIndex) != null ) {
			id = new Label(aip.getId().toString());
			id.setVisible(false);
			((VerticalPanel)tblAttendance.getWidget(clickedRowIndex, clickedCellIndex)).add( id );
		}
	}


	/*
	 * */
	@Override
	public void removeDeletedAbsenceItemId() {
		//
		if ( tblAttendance.getWidget(clickedRowIndex, clickedCellIndex) != null ) {
			((VerticalPanel)tblAttendance.getWidget(clickedRowIndex, clickedCellIndex)).getWidget(1).removeFromParent();
		}
	}
}
