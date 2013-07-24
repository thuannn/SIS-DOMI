package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.ProfessorProxy;

public interface ProfessorListUiHandler extends UiHandlers {
	
	void updateProfessorStatus(ProfessorProxy prof, Boolean status);
	void updateProfessorName(ProfessorProxy prof, String name);
	
	void professorSelected(ProfessorProxy prof);
}