package com.lemania.sis.client.form.mainpage;

import java.util.Iterator;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Widget;
import com.lemania.sis.client.values.AppSettingValues;
import com.lemania.sis.client.values.NotificationValues;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FocusWidget;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;
import com.lemania.sis.client.CurrentUser;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.TreeItem;

public class MainPageView extends ViewWithUiHandlers<MainPageUiHandler> implements MainPagePresenter.MyView {
	
	interface MainPageViewUiBinder extends UiBinder<Widget, MainPageView>{}
	private static MainPageViewUiBinder uiBinder = GWT.create(MainPageViewUiBinder.class);

	private final Widget widget;
	@UiField FlowPanel mainContentPanel;
	@UiField Hyperlink cmdLogout;
	@UiField Label txtWelcome;
	@UiField Label lblCurrentMonth;
	@UiField Button cmdMenuToggle;
	@UiField Tree treeMenuAdmin;
	@UiField DockPanel dockPanel;
	@UiField Tree treeMenuProf;
	@UiField Tree treeMenuEleve;
	@UiField Tree treeMenuParent;
	@UiField HTML htmlProgressBar;
	@UiField Hyperlink cmdProfileManagement;
	@UiField Hyperlink cmdAttribution;
	@UiField Hyperlink cmdAttributionPerson;
	@UiField Hyperlink cmdHome;
	@UiField Hyperlink cmdMarkInput;
	@UiField Hyperlink cmdMarkView;
	@UiField Hyperlink cmdStudentList;
	@UiField Hyperlink cmdStudentAdd;
	@UiField Hyperlink cmdProfList;
	@UiField Hyperlink cmdProfAdd;
	@UiField Hyperlink cmdBrancheList;
	@UiField Hyperlink cmdBrancheAdd;
	@UiField Hyperlink cmdSubjectList;
	@UiField Hyperlink cmdSubjectAdd;
	@UiField Hyperlink cmdClassList;
	@UiField Hyperlink cmdClassAdd;
	@UiField Hyperlink cmdProgrammeList;
	@UiField Hyperlink cmdProgrammeAdd;
	@UiField Hyperlink cmdSchoolList;
	@UiField Hyperlink cmdSchoolAdd;
	@UiField Hyperlink cmdUserManagement;
	@UiField Hyperlink cmdSettings;
	@UiField Hyperlink cmdPassword;
	@UiField Hyperlink cmdHelp;
	@UiField Hyperlink cmdBulletin;
	@UiField VerticalPanel pnlProgressBarIn;
	@UiField VerticalPanel pnlProgressBar;
	@UiField Hyperlink cmdMarkInputProf;
	@UiField Hyperlink cmdMarkViewProf;
	@UiField Hyperlink cmdPasswordProf;
	@UiField Hyperlink cmdHelpProf;
	@UiField Hyperlink cmdMarkViewStudent;
	@UiField Hyperlink cmdPasswordStudent;
	@UiField Hyperlink cmdHelpStudent;
	@UiField Image imgLogo;
	@UiField Label txtCopyright;
	@UiField Hyperlink cmdEvaluationList;
	@UiField Hyperlink cmdEvaluationInputProf;
	@UiField Hyperlink cmdEvaluationInputEleve;
	@UiField Hyperlink cmdEvaluationInputProfProf;
	@UiField Hyperlink cmdEvaluationInputEleveProf;
	@UiField Hyperlink cmdClassroomPage;
	@UiField Hyperlink cmdMasterAgendaPage;
	@UiField Hyperlink cmdPeriodMgt;
	@UiField Hyperlink cmdStudentAgendaPage;
	@UiField Hyperlink cmdClassAgendaPage;
	@UiField AbsolutePanel pnlNorth;
	@UiField Hyperlink cmdProfessorAgendaPage;
	@UiField Hyperlink cmdParentMgt;
	@UiField Hyperlink cmdMotifAbsence;
	@UiField Hyperlink cmdAttendanceListProf;
	@UiField Hyperlink cmdAbsenceMgt;
	@UiField VerticalPanel leftPanel;
	@UiField TreeItem tiAbsences;
	@UiField TreeItem tiTimetable;
	@UiField TreeItem tiParamAbsences;
	@UiField TreeItem tiAbsencesProf;
	@UiField Hyperlink cmdMarkViewParent;
	@UiField Hyperlink cmdAbsencesViewParent;
	@UiField Hyperlink cmdPasswordParent;
	@UiField Hyperlink cmdHelpParent;
	@UiField Hyperlink cmdAbsencesViewProf;
	
	Hyperlink currentSelectedItem;
	
	
	// Thuan
	PopupPanel popup = new PopupPanel(false);
	
//	//
//	private Hyperlink lastPage;
//	private Hyperlink lastPageProf;
//	private Hyperlink lastPageStudent;
	
	/*
	 * */
	public MainPageView() {		
		widget = uiBinder.createAndBindUi(this);
	}
	
	/*
	 * */
	public interface Binder extends UiBinder<Widget, MainPageView> {
	}

	/*
	 * */
	@Override
	public Widget asWidget() {
		return widget;
	}
	
	/*
	 * */
	@Override
	public void setInSlot(Object slot, IsWidget content){
		if (slot == MainPagePresenter.TYPE_SetMainContent) {
			setMainContent(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	private void setMainContent(IsWidget content) {
	    mainContentPanel.clear();
	    
	    if (content != null) {
	      mainContentPanel.add(content);
	    }
	}

	@Override
	public void showUserInfo(CurrentUser currentUser) {
		//
		txtWelcome.setText("Vous êtes connecté(e), " + currentUser.getFullName() + " !");
		cmdLogout.setText("Déconnexion");
		//
//		if (currentUser.getCurrentMonth() < 8)
//			lblCurrentMonth.setText( "L'année scolaire : " + Integer.toString(currentUser.getCurrentYear()-1) + " - " + Integer.toString(currentUser.getCurrentYear()));
//		else
//			lblCurrentMonth.setText( "L'année scolaire : " + Integer.toString(currentUser.getCurrentYear()) + " - " + Integer.toString(currentUser.getCurrentYear()+1));
		//
		lblCurrentMonth.setText( "L'année scolaire : " + AppSettingValues.schoolYearDescription );
	}

	@Override
	public void initializeUi(CurrentUser currentUser) {
		//
		if ( currentUser!=null && currentUser.isLoggedIn() ) {
			//
			showUserInfo(currentUser);
			//		
			if (currentUser.isAdmin())
				showAdminMenu();
			if (currentUser.isProf())
				showProfMenu();
			if (currentUser.isStudent())
				showStudentMenu();
			if ( currentUser.isParent() )
				showParentMenu();
		}
		else {
			txtWelcome.setText("");
			cmdLogout.setText("");
			lblCurrentMonth.setText("");
			//
			hideMenu();
		}
		//
		hideDevFunctions();
	}
	
	
	/*
	 * */
	private void hideDevFunctions() {
//		//
//		tiAbsences.setVisible(false);
//		tiTimetable.setVisible(false);
//		//
//		tiAbsencesProf.setVisible(false);
	}
	

	/*
	 * */
	void showAdminMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
		//
		// 20141110 - After showing the Parent menu, remove completely the others
		addMenuToDom( treeMenuAdmin );
		removeMenuFromDom( treeMenuParent );
		removeMenuFromDom( treeMenuProf );
		removeMenuFromDom( treeMenuEleve );
		//
		cmdMenuToggle.setVisible(true);
	}
	
	/*
	 * */
	void showProfMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
		//
		// 20141110 - After showing the Parent menu, remove completely the others
		addMenuToDom( treeMenuProf );
		removeMenuFromDom( treeMenuAdmin );
		removeMenuFromDom( treeMenuParent );
		removeMenuFromDom( treeMenuEleve );
		//
		cmdMenuToggle.setVisible(true);
	}
	
	
	/*
	 * */
	void showStudentMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
		//
		// 20141110 - After showing the Parent menu, remove completely the others
		addMenuToDom( treeMenuEleve );
		removeMenuFromDom( treeMenuAdmin );
		removeMenuFromDom( treeMenuParent );
		removeMenuFromDom( treeMenuProf );
		//
		cmdMenuToggle.setVisible(true);
	}
	
	
	/*
	 * */
	void showParentMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
		//
		// 20141110 - After showing the Parent menu, remove completely the others
		addMenuToDom( treeMenuParent );
		removeMenuFromDom( treeMenuAdmin );
		removeMenuFromDom( treeMenuProf );
		removeMenuFromDom( treeMenuEleve );
		//
		cmdMenuToggle.setVisible(true);
	}
	
	
	/*
	 * Remove completely the menu from DOM so that one cannot inspect using developer tool
	 * */
	private void removeMenuFromDom( Tree menu) {
		// 
		menu.setVisible(false);
		leftPanel.remove( menu );
	}
	
	/*
	 * Remove completely the menu from DOM so that one cannot inspect using developer tool
	 * */
	private void addMenuToDom( Tree menu) {
		// 
		menu.setVisible(true);
		leftPanel.add( menu );
	}
	

	/*
	 * */
	void hideMenu(){
		//
		dockPanel.remove( leftPanel );
		//
		leftPanel.setVisible(false);
		treeMenuProf.setVisible( false );
		treeMenuEleve.setVisible( false );
		treeMenuAdmin.setVisible( false );
		treeMenuParent.setVisible(false);
		//
		cmdMenuToggle.setVisible(false);
	}

	/*
	 * */
	private void showPanel() {
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
	}

	/*
	 * */
	private void hidePanel() {
		//
		leftPanel.setVisible(false);
		dockPanel.remove( leftPanel );
	}

	
	/*
	 * */
	@Override
	public void showProgressBar(boolean visible) {
		//
		if (!pnlProgressBar.getParent().equals(popup))
			popup.add(pnlProgressBar);
		//
		pnlProgressBar.setVisible(visible);
		popup.setSize( Integer.toString(Window.getClientWidth()) + "px", Integer.toString(Window.getClientHeight()) + "px" );
		popup.setStyleName("progressBarPopup");
		if (visible)
			popup.center();
		else {
			popup.hide();
		}
	}

	
	/*
	 * */
	@Override
	public void enableMainPanel(Boolean enabled) {
		//
		enableAllChildren(enabled, mainContentPanel);
	}
	
	
	/**/
	private void enableAllChildren(boolean enable, Widget widget)
	{
	    if (widget instanceof HasWidgets)
	    {
	        Iterator<Widget> iter = ((HasWidgets)widget).iterator();
	        while (iter.hasNext())
	        {
	            Widget nextWidget = iter.next();
	            enableAllChildren(enable, nextWidget);
	            if (nextWidget instanceof FocusWidget)
	            {
	                ((FocusWidget)nextWidget).setEnabled(enable);
	            }
	        }
	    }
	}

	
	/*
	 * 2014-10-23 : This is not needed anymore. Replaced by the function switchButton()
	 * */
//	@Override
//	public void showCurrentPageOnMenu(String tokenName) {
//		//
//		if (tokenName.equals(NameTokens.homepage)) switchStyle(this.cmdHome, false, false);
//		if (tokenName.equals(NameTokens.profilemgt)) switchStyle(this.cmdProfileManagement, false, false);
//		if (tokenName.equals(NameTokens.bulletincreation)) switchStyle(this.cmdAttribution, false, false);
//		if (tokenName.equals(NameTokens.bulletinmanagement)) switchStyle(this.cmdAttributionPerson, false, false);
//		if (tokenName.equals(NameTokens.bulletindetail)) {
//			switchStyle(this.cmdMarkView, false, false);
//			switchStyle(this.cmdMarkViewProf, true, false);
//			switchStyle(this.cmdMarkViewStudent, false, true);
//		}
//		if (tokenName.equals(NameTokens.markinput)) {
//			switchStyle(this.cmdMarkInput, false, false);
//			switchStyle(this.cmdMarkInputProf, true, false);			
//		}
//		if (tokenName.equals(NameTokens.students)) switchStyle(this.cmdStudentList, false, false);
//		if (tokenName.equals(NameTokens.studentadd)) switchStyle(this.cmdStudentAdd, false, false);
//		if (tokenName.equals(NameTokens.profs)) switchStyle(this.cmdProfList, false, false);
//		if (tokenName.equals(NameTokens.profsadd)) switchStyle(this.cmdProfAdd, false, false);
//		if (tokenName.equals(NameTokens.branchelist)) switchStyle(this.cmdBrancheList, false, false);
//		if (tokenName.equals(NameTokens.brancheadd)) switchStyle(this.cmdBrancheAdd, false, false);
//		if (tokenName.equals(NameTokens.subjectlist)) switchStyle(this.cmdSubjectList, false, false);
//		if (tokenName.equals(NameTokens.subjectadd)) switchStyle(this.cmdSubjectAdd, false, false);
//		if (tokenName.equals(NameTokens.classlist)) switchStyle(this.cmdClassList, false, false);
//		if (tokenName.equals(NameTokens.classeadd)) switchStyle(this.cmdClassAdd, false, false);
//		if (tokenName.equals(NameTokens.cours)) switchStyle(this.cmdProgrammeList, false, false);
//		if (tokenName.equals(NameTokens.coursadd)) switchStyle(this.cmdProgrammeAdd, false, false);
//		if (tokenName.equals(NameTokens.ecolepage)) switchStyle(this.cmdSchoolList, false, false);
//		if (tokenName.equals(NameTokens.addecole)) switchStyle(this.cmdSchoolAdd, false, false);
//		if (tokenName.equals(NameTokens.usermanagement)) switchStyle(this.cmdUserManagement, false, false);
//		if (tokenName.equals(NameTokens.settings)) switchStyle(this.cmdSettings, false, false);
//		if (tokenName.equals(NameTokens.password)) {
//			switchStyle(this.cmdPassword, false, false);
//			switchStyle(this.cmdPasswordProf, true, false);
//			switchStyle(this.cmdPasswordStudent, false, true);
//		}
//		if (tokenName.equals(NameTokens.contact)) {
//			switchStyle(this.cmdHelp, false, false);
//			switchStyle(this.cmdHelpProf, true, false);
//			switchStyle(this.cmdHelpStudent, false, true);
//		}
//		if (tokenName.equals(NameTokens.bulletin)) switchStyle(this.cmdBulletin, false, false);
//		//		
//		if (tokenName.equals(NameTokens.evaluationlist)) switchStyle(this.cmdEvaluationList, false, false);
//		//
//		if (tokenName.equals(NameTokens.evaluationinput)) { 
//			switchStyle(this.cmdEvaluationInputProf, false, false);
//			switchStyle(this.cmdEvaluationInputProfProf, true, false);
//		}
//		//
//		if (tokenName.equals(NameTokens.evaluationinputstudent)) {
//			switchStyle(this.cmdEvaluationInputEleve, false, false);
//			switchStyle(this.cmdEvaluationInputEleveProf, true, false);
//		}
//		
//		// Profiles
//		if (tokenName.equals(NameTokens.parentmgt)) switchStyle(this.cmdParentMgt, false, false);
//		
//		// Agenda
//		if (tokenName.equals(NameTokens.masteragenda)) switchStyle(this.cmdMasterAgendaPage, false, false);
//		if (tokenName.equals(NameTokens.classroom)) switchStyle(this.cmdClassroomPage, false, false);
//		if (tokenName.equals(NameTokens.periodmgt)) switchStyle(this.cmdPeriodMgt, false, false);
//		if (tokenName.equals(NameTokens.studentagenda)) switchStyle(this.cmdStudentAgendaPage, false, false);
//		if (tokenName.equals(NameTokens.profagenda)) switchStyle(this.cmdProfessorAgendaPage, false, false);
//		
//		// Attendance
//		if (tokenName.equals(NameTokens.motifabsence)) switchStyle(this.cmdMotifAbsence, false, false);
//		if (tokenName.equals(NameTokens.attendancelist)) switchStyle(this.cmdAttendanceList, false, false);
//		if (tokenName.equals(NameTokens.attendancelist)) {
//			switchStyle(this.cmdAttendanceList, false, false);
//			switchStyle(this.cmdAttendanceListProf, true, false);
//		}
//		if (tokenName.equals(NameTokens.absencesmgt)) switchStyle(this.cmdAbsenceMgt, false, false);
//	}
	
	
//	/*
//	 * */
//	private void switchStyle( Hyperlink link, Boolean prof, Boolean student ){		
//		//
//		if (!prof && !student) {
//			if (lastPage != null) lastPage.setStyleName("");
//			if (lastPageProf != null) lastPageProf.setStyleName("");
//			if (lastPageStudent != null) lastPageStudent.setStyleName("");
//		}
//		
//		link.setStyleName("currentPage");
//		
//		if (prof) lastPageProf = link;
//		if (student) lastPageStudent = link;
//		if (!prof && !student) lastPage = link;
//	}
	

	/*
	 * */
	@Override
	public void drawSchoolInterface(String schoolCode) {
		//
		if (schoolCode.equals(NotificationValues.pierreViret)) {
			imgLogo.setUrl("images/logo-pv.png");
			txtCopyright.setText("Copyright © Pierre Viret -");
		}
		//
		if (schoolCode.equals(NotificationValues.ecoleLemania)) {
			imgLogo.setUrl("images/logo.png");
			txtCopyright.setText("Copyright © Ecole Lémania -");
		}
		//
		if (schoolCode.equals(NotificationValues.domi)) {
			imgLogo.setUrl("images/logo-domi.png");
			txtCopyright.setText("Copyright © Institut DOMI -");
		}
	}
	
	
	/*
	 * */
	@UiHandler("cmdMenuToggle")
	void onCmdMenuToggleClick(ClickEvent event) {
		//
		if ( leftPanel.isVisible() )
			hidePanel();
		else
			showPanel();
	}
	
	
	/*
	 * */
	@UiHandler("cmdLogout")
	void onCmdLogoutClick(ClickEvent event) {
		if (getUiHandlers() != null) {			
			getUiHandlers().logOut();
		}
	}
	

	/*
	 * */
	@Override
	public void setWindowEventHanlder() {
		//
		Window.addResizeHandler( new ResizeHandler() {

			@Override
			public void onResize(ResizeEvent event) {
				//
				leftPanel.setHeight( Window.getClientHeight() - pnlNorth.getOffsetHeight() - 20 + "px");
			}
			
		});
	}
	
	
	/*
	 * Hight light the selected item
	 * */
	public void switchButton(Hyperlink button) {
		//
		if (currentSelectedItem != null)
			currentSelectedItem.setStyleName("");
		//
		button.setStyleName("currentPage");
		currentSelectedItem = button;
	}
	
	/*
	 * */
	@UiHandler("cmdAbsencesViewParent")
	void onCmdAbsencesViewParentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	
	/*
	 * */
	@UiHandler("cmdMarkViewParent")
	void onCmdMarkViewParentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	
	/*
	 * */
	@UiHandler("cmdPasswordParent")
	void onCmdPasswordParentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	
	/*
	 * */
	@UiHandler("cmdHelpParent")
	void onCmdHelpParentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	
	/*
	 * */
	@UiHandler("cmdAbsencesViewProf")
	void onCmdAbsencesViewProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdHome")
	void onCmdHomeClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdStudentList")
	void onCmdStudentListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdStudentAdd")
	void onCmdStudentAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProfList")
	void onCmdProfListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProfAdd")
	void onCmdProfAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdParentMgt")
	void onCmdParentMgtClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProfileManagement")
	void onCmdProfileManagementClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdAttribution")
	void onCmdAttributionClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdAttributionPerson")
	void onCmdAttributionPersonClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMarkInput")
	void onCmdMarkInputClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMarkView")
	void onCmdMarkViewClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdBulletin")
	void onCmdBulletinClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdAttendanceList")
	void onCmdAttendanceListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdAbsenceMgt")
	void onCmdAbsenceMgtClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdEvaluationList")
	void onCmdEvaluationListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdEvaluationInputProf")
	void onCmdEvaluationInputProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdEvaluationInputEleve")
	void onCmdEvaluationInputEleveClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMasterAgendaPage")
	void onCmdMasterAgendaPageClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdStudentAgendaPage")
	void onCmdStudentAgendaPageClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProfessorAgendaPage")
	void onCmdProfessorAgendaPageClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdClassAgendaPage")
	void onCmdClassAgendaPageClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMotifAbsence")
	void onCmdMotifAbsenceClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMarkViewStudent")
	void onCmdMarkViewStudentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdPasswordStudent")
	void onCmdPasswordStudentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdHelpStudent")
	void onCmdHelpStudentClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdHelpProf")
	void onCmdHelpProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdPasswordProf")
	void onCmdPasswordProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdEvaluationInputEleveProf")
	void onCmdEvaluationInputEleveProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdEvaluationInputProfProf")
	void onCmdEvaluationInputProfProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMarkViewProf")
	void onCmdMarkViewProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdMarkInputProf")
	void onCmdMarkInputProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdAttendanceListProf")
	void onCmdAttendanceListProfClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdHelp")
	void onCmdHelpClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdPassword")
	void onCmdPasswordClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdBrancheList")
	void onCmdBrancheListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdBrancheAdd")
	void onCmdBrancheAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdSubjectList")
	void onCmdSubjectListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdSubjectAdd")
	void onCmdSubjectAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdPeriodMgt")
	void onCmdPeriodMgtClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdClassList")
	void onCmdClassListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdClassAdd")
	void onCmdClassAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProgrammeList")
	void onCmdProgrammeListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdProgrammeAdd")
	void onCmdProgrammeAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdClassroomPage")
	void onCmdClassroomPageClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdSchoolList")
	void onCmdSchoolListClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdSchoolAdd")
	void onCmdSchoolAddClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdUserManagement")
	void onCmdUserManagementClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
	@UiHandler("cmdSettings")
	void onCmdSettingsClick(ClickEvent event) {
		//
		switchButton( (Hyperlink)event.getSource() );
	}
}
