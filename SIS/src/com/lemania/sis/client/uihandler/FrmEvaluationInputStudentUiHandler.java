package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmEvaluationInputStudentUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String programmeId);
	//
	void onClassSelected(String classId);
	//
	void onBulletinSelected(String classId);
	//
	void onEvaluationHeaderSelected( String classId, String bulletinId, String evaluationHeaderId, String classMasterId );
	//
	void saveEvaluationStudentReport( String bulletinId, String evaluationHeaderId, String commentaire );			
}
