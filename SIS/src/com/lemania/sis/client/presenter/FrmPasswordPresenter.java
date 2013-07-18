package com.lemania.sis.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.AfterUserLogOutEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.FieldVerifier;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.FrmPasswordUiHandler;
import com.lemania.sis.shared.UserProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.UserRequestFactory;
import com.lemania.sis.shared.service.UserRequestFactory.UserRequestContext;

public class FrmPasswordPresenter 
		extends	Presenter<FrmPasswordPresenter.MyView, FrmPasswordPresenter.MyProxy> 
		implements LoginAuthenticatedHandler, FrmPasswordUiHandler {

	//
	private CurrentUser currentUser;
	//
	
	public interface MyView extends View, HasUiHandlers<FrmPasswordUiHandler> {
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.password)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<FrmPasswordPresenter> {
	}

	@Inject
	public FrmPasswordPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();		
	}
	
	
	// Log out after changing the password
	public void logOut() {
		if (currentUser == null)
			currentUser = new CurrentUser();
		currentUser.setLoggedIn(false);
		History.newItem(NameTokens.homepage, true);
		this.getEventBus().fireEvent(new LoginAuthenticatedEvent(currentUser));
		this.getEventBus().fireEvent(new AfterUserLogOutEvent());		
	}
	

	@Override
	public void changePassword(String current, String new1, String new2) {
		if (current.equals("") || new1.equals("") || new2.equals("")){
			Window.alert("Merci de saisir tous les champs.");
			return;
		}
		
		if (!new1.equals(new2)){
			Window.alert("Le nouveau mot de passe et la confirmation ne sont pas identiques.");
			return;
		}
		
		if ( !FieldVerifier.isValidUserName(new1) || !FieldVerifier.isValidUserName(new2) ){
			Window.alert("Le nouveau mot de passe n'est pas valable (minimum 6 caractères).");
			return;
		}
		
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		
		rc.changePassword(currentUser.getUserName(), current, new1).fire( new Receiver<UserProxy>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(UserProxy response) {
				if (response!= null) {
					Window.alert("Le mot de passe a été changé avec succès.");
					logOut();
				}
				else
					Window.alert("Le mot de passe actuel n'est pas correct.");
			}
		} );
	}
}
