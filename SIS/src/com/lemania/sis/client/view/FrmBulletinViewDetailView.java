package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmBulletinViewDetailPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinViewDetailUiHandler;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class FrmBulletinViewDetailView extends ViewWithUiHandlers<FrmBulletinViewDetailUiHandler> implements
		FrmBulletinViewDetailPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmBulletinViewDetailView> {
	}

	@Inject
	public FrmBulletinViewDetailView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField FlexTable tblBulletin;
	@UiField ListBox lstBulletins;
	@UiField ListBox lstClasses;
	@UiField HorizontalPanel pnlAdmin;
	
	
	/**/
	@Override
	public void resetForm() {
		//
		lstBulletins.setSelectedIndex(0);
		tblBulletin.removeAllRows();
	}

	
	/**/
	@Override
	public void setStudentListData(List<BulletinProxy> bulletins) {
		//
		lstBulletins.clear();
		lstBulletins.addItem("-","");
		for (BulletinProxy bulletin : bulletins) {
			lstBulletins.addItem( bulletin.getStudentName() + " - " + bulletin.getClasseName() + " - " + bulletin.getYear(), 
					bulletin.getId().toString());
		}
	}

	
	/**/
	@Override
	public void setClasseList(List<ClasseProxy> classes) {
		//
		lstClasses.clear();
		lstClasses.addItem("-","");
		for (ClasseProxy clazz : classes) {
			lstClasses.addItem( clazz.getClassName(), clazz.getId().toString());
		}
	}
	
	
	/**/
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().onClassChange(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	
	/**/
	@Override
	public void showAdminPanel(Boolean show) {
		//
		pnlAdmin.setVisible(show);
	}
	
	
	/**/
	@UiHandler("lstBulletins")
	void onLstBulletinsChange(ChangeEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().onBulletinChange( lstBulletins.getValue(lstBulletins.getSelectedIndex()));
	}

	@Override
	public void drawGradeTableMatu(List<BulletinSubjectProxy> subjects, List<BulletinBrancheProxy> branches, Boolean isStudent) {
		//
		tblBulletin.removeAllRows();
		//
		Integer rowCount = -1;
		Integer brancheCount = 0;
		//
		rowCount++;
		tblBulletin.setText(rowCount, 0, "Matière");
		tblBulletin.setText(rowCount, 1, "Coef");
		tblBulletin.setText(rowCount, 7, "T1");
		tblBulletin.setText(rowCount, 13, "T2");
		tblBulletin.setText(rowCount, 14, "Moyenne Semestrielle");		
		tblBulletin.getRowFormatter().setStyleName(rowCount, "bulletinHeader");
		//
		for (BulletinSubjectProxy subject : subjects){
			rowCount++;
			tblBulletin.setText(rowCount, 0, subject.getSubjectName());
			tblBulletin.setText(rowCount, 1, subject.getSubjectCoef().toString());
			tblBulletin.setText(rowCount, 7, subject.getT1());
			tblBulletin.setText(rowCount, 13, subject.getT2());
			tblBulletin.setText(rowCount, 14, subject.getAn());			
			if (isStudent)
				tblBulletin.setText(rowCount+1, 14, "");
			else
				tblBulletin.setText(rowCount+1, 14, 
					!subject.getRemarqueT3().isEmpty()? subject.getRemarqueT3()
						: !subject.getRemarqueT2().isEmpty()? subject.getRemarqueT2()
							: subject.getRemarqueT1());
			//
			for (int i=0; i<15; i++)
				tblBulletin.getCellFormatter().setStyleName(rowCount, i, "subjectLine");
			//
			brancheCount = 0;
			for (BulletinBrancheProxy branche : branches){
				if (branche.getBulletinSubjectId().equals(subject.getId())){
					//
					rowCount++;
					brancheCount++;
					//
					tblBulletin.setText(rowCount, 0, branche.getBulletinBrancheName());
					tblBulletin.setText(rowCount, 1, branche.getBrancheCoef().toString());
					//
					tblBulletin.setText(rowCount, 2, branche.getT1_1());
					tblBulletin.setText(rowCount, 3, branche.getT1_2());
					tblBulletin.setText(rowCount, 4, branche.getT1_3());
					tblBulletin.setText(rowCount, 5, branche.getT1_4());
					tblBulletin.setText(rowCount, 6, branche.getT1_5());
					tblBulletin.setText(rowCount, 7, branche.getT1());
					//
					tblBulletin.setText(rowCount, 8, branche.getT2_1());
					tblBulletin.setText(rowCount, 9, branche.getT2_2());
					tblBulletin.setText(rowCount, 10, branche.getT2_3());
					tblBulletin.setText(rowCount, 11, branche.getT2_4());
					tblBulletin.setText(rowCount, 12, branche.getT2_5());
					tblBulletin.setText(rowCount, 13, branche.getT2());
				}
			}
			//
			if (brancheCount>0)
				tblBulletin.getFlexCellFormatter().setRowSpan((rowCount-brancheCount+1), 14, brancheCount);
			//
			rowCount++;
			tblBulletin.setText(rowCount, 0, "");
			tblBulletin.getCellFormatter().addStyleName(rowCount, 0, "spaceCell");
		}
		//
		tblBulletin.getColumnFormatter().setStylePrimaryName(7, "gradeColumn");
		tblBulletin.getColumnFormatter().addStyleName(13, "gradeColumn");
		//
		styleTableMatu();
	}

	
	/**/
	private void styleTableMatu() {
		//		
		tblBulletin.setCellSpacing(0);
		tblBulletin.setStyleName("subSection");
		//
		for (int i=0; i<15; i++)
			for (int j=1; j<tblBulletin.getRowCount(); j++) {
				if (tblBulletin.isCellPresent(j, i)) {
					if (tblBulletin.getCellFormatter().getStyleName(j, i).equals(""))
						tblBulletin.getCellFormatter().setStyleName(j, i, "brancheLine");
				}
			}
	}
	
	/**/
	private void styleTableNormal() {
		//		
		tblBulletin.setCellSpacing(0);
		tblBulletin.setStyleName("subSection");
		//
		for (int i=0; i<20; i++)
			for (int j=1; j<tblBulletin.getRowCount(); j++) {
				if (tblBulletin.getCellFormatter().getStyleName(j, i).equals(""))
					tblBulletin.getCellFormatter().setStyleName(tblBulletin.getRowCount(), i, "brancheLine");
			}
	}

	@Override
	public void drawGradeTableNormal(List<BulletinSubjectProxy> subjects, List<BulletinBrancheProxy> branches, Boolean isStudent) {
		//
		tblBulletin.removeAllRows();
		//
		Integer rowCount = -1;
		Integer brancheCount = 0;
		//
		rowCount++;
		tblBulletin.setText(rowCount, 0, "Matière");
		tblBulletin.setText(rowCount, 1, "Coef");
		tblBulletin.setText(rowCount, 7, "T1");
		tblBulletin.setText(rowCount, 13, "T2");
		tblBulletin.setText(rowCount, 19, "T2");
		tblBulletin.setText(rowCount, 20, "Moyenne Annuelle");		
		tblBulletin.getRowFormatter().setStyleName(rowCount, "bulletinHeader");
		//
		for (BulletinSubjectProxy subject : subjects){
			rowCount++;
			tblBulletin.setText(rowCount, 0, subject.getSubjectName());
			tblBulletin.setText(rowCount, 1, subject.getSubjectCoef().toString());
			tblBulletin.setText(rowCount, 7, subject.getT1());
			tblBulletin.setText(rowCount, 13, subject.getT2());
			tblBulletin.setText(rowCount, 19, subject.getT3());
			tblBulletin.setText(rowCount, 20, subject.getAn());			
			if (isStudent)
				tblBulletin.setText(rowCount+1, 20, "");
			else
				tblBulletin.setText(rowCount+1, 20, 
					!subject.getRemarqueT3().isEmpty()? subject.getRemarqueT3()
						: !subject.getRemarqueT2().isEmpty()? subject.getRemarqueT2()
							: subject.getRemarqueT1());
			//
			for (int i=0; i<21; i++)
				tblBulletin.getCellFormatter().setStyleName(rowCount, i, "subjectLine");
			//
			brancheCount = 0;
			for (BulletinBrancheProxy branche : branches){
				if (branche.getBulletinSubjectId().equals(subject.getId())){
					//
					rowCount++;
					brancheCount++;
					//
					tblBulletin.setText(rowCount, 0, branche.getBulletinBrancheName());
					tblBulletin.setText(rowCount, 1, branche.getBrancheCoef().toString());
					//
					tblBulletin.setText(rowCount, 2, branche.getT1_1());
					tblBulletin.setText(rowCount, 3, branche.getT1_2());
					tblBulletin.setText(rowCount, 4, branche.getT1_3());
					tblBulletin.setText(rowCount, 5, branche.getT1_4());
					tblBulletin.setText(rowCount, 6, branche.getT1_5());
					tblBulletin.setText(rowCount, 7, branche.getT1());
					//
					tblBulletin.setText(rowCount, 8, branche.getT2_1());
					tblBulletin.setText(rowCount, 9, branche.getT2_2());
					tblBulletin.setText(rowCount, 10, branche.getT2_3());
					tblBulletin.setText(rowCount, 11, branche.getT2_4());
					tblBulletin.setText(rowCount, 12, branche.getT2_5());
					tblBulletin.setText(rowCount, 13, branche.getT2());
					//
					tblBulletin.setText(rowCount, 14, branche.getT3_1());
					tblBulletin.setText(rowCount, 15, branche.getT3_2());
					tblBulletin.setText(rowCount, 16, branche.getT3_3());
					tblBulletin.setText(rowCount, 17, branche.getT3_4());
					tblBulletin.setText(rowCount, 18, branche.getT3_5());
					tblBulletin.setText(rowCount, 19, branche.getT3());
				}
			}
			if (brancheCount>0)
				tblBulletin.getFlexCellFormatter().setRowSpan((rowCount-brancheCount+1), 20, brancheCount);
		}
		//
		tblBulletin.getColumnFormatter().setStylePrimaryName(7, "gradeColumn");
		tblBulletin.getColumnFormatter().addStyleName(13, "gradeColumn");
		tblBulletin.getColumnFormatter().addStyleName(19, "gradeColumn");
		//
		styleTableNormal();
	}
}
