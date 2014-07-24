function $addNewBranche(this$static, brancheName, brancheCoef, brancheActive){
  var ep, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!brancheName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom de la branche.');
    return;
  }
  if ($matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    if (($clinit_Double() , __parseAndValidateDouble(brancheCoef)) < 0) {
      alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
      return;
    }
  }
   else {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient');
    return;
  }
  rf = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf);
  ep = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_BrancheProxy_2_classLit), Q$BrancheProxy);
  ep.setBrancheName(brancheName);
  ep.setDefaultCoef(($clinit_Double() , new Double_0(__parseAndValidateDouble(brancheCoef))));
  ep.setIsActive(brancheActive);
  $fire((x = new BrancheRequestFactory_BrancheRequestContextImpl$4X_0(rc, ep) , $addInvocation(rc.state.dialect, x) , x), new FrmBrancheAddPresenter$1_0(this$static));
}

function FrmBrancheAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1241, 805, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBrancheAddPresenter, Q$FrmBrancheAddUiHandler]), FrmBrancheAddPresenter_0);
_.onBind = function onBind_18(){
  dynamicCast(this.view, Q$FrmBrancheAddPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_19(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_17(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('brancheadd'), null);
  dynamicCast(this.view, Q$FrmBrancheAddPresenter$MyView).setUiHandlers(this);
}
;
_.revealInParent = function revealInParent_9(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_57(this$static){
  $showStatus(dynamicCast(this$static.this$0.view, Q$FrmBrancheAddPresenter$MyView), ($clinit_NotificationTypes() , 'La nouvelle branche a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s.'));
  $resetForm_1(dynamicCast(this$static.this$0.view, Q$FrmBrancheAddPresenter$MyView));
}

function FrmBrancheAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1242, 736, makeCastMap([Q$Receiver]), FrmBrancheAddPresenter$1_0);
_.onFailure_0 = function onFailure_70(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_70(response){
  $onSuccess_57(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$_annotation$$none$$) {
    result = new FrmBrancheAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBrancheAddView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$_annotation$$none$$;
}

defineSeed(1508, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_198(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBrancheAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_1(this$static){
  !!this$static.uiHandlers && $addNewBranche(dynamicCast(this$static.uiHandlers, Q$FrmBrancheAddUiHandler), $getPropertyString(this$static.txtBrancheName.element, 'value'), $getPropertyString(this$static.txtBrancheCoef.element, 'value'), $getValue_0(this$static.chkBrancheActive));
}

function $resetForm_1(this$static){
  $setText_1(this$static.txtBrancheName, '');
  $setText_1(this$static.txtBrancheCoef, '');
  $setValue_0(this$static.chkBrancheActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $showStatus(this$static, msg){
  var t;
  $setText_0(this$static.lblStatus, msg);
  t = new FrmBrancheAddView$1_0(this$static);
  $schedule(t, 3000);
}

function FrmBrancheAddView_0(){
  this.widget = $build_f_HTMLPanel1_13(new FrmBrancheAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1549, 810, makeCastMap([Q$IsWidget, Q$FrmBrancheAddPresenter$MyView]), FrmBrancheAddView_0);
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.chkBrancheActive = null;
_.lblStatus = null;
_.txtBrancheCoef = null;
_.txtBrancheName = null;
_.widget = null;
function FrmBrancheAddView$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1550, 10, makeCastMap([Q$Timer]), FrmBrancheAddView$1_0);
_.run = function run_2(){
  $setText_0(this.this$0.lblStatus, '');
}
;
_.this$0 = null;
function FrmBrancheAddView_BinderImpl_0(){
}

defineSeed(1551, 1, {}, FrmBrancheAddView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord6, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtBrancheName, f_Label6, txtBrancheCoef, f_Label7, chkBrancheActive, f_Label8, f_HorizontalPanel9, cmdSave, f_Label10, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord6 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord6.origParent?$insertBefore(attachRecord6.origParent, attachRecord6.element, attachRecord6.origSibling):orphan(attachRecord6.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UNE NOUVELLE BRANCHE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 5) , $setWidget_3(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de la branche :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_3(f_Grid4, 0, 1, (txtBrancheName = new TextBox_0 , txtBrancheName.element['className'] = 'sis_textbox' , this$static.owner.txtBrancheName = txtBrancheName , txtBrancheName)) , $setWidget_3(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid4, 1, 1, (txtBrancheCoef = new TextBox_0 , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_3(f_Grid4, 2, 0, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label7.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid4, 2, 1, (chkBrancheActive = new CheckBox_0 , $setTextOrHtml(chkBrancheActive.directionalTextHelper, 'Active', false) , $setValue_0(chkBrancheActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkBrancheActive = chkBrancheActive , chkBrancheActive)) , $setWidget_3(f_Grid4, 3, 0, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid4, 3, 1, (f_HorizontalPanel9 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel9, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_HorizontalPanel9)) , $setWidget_3(f_Grid4, 4, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid4, 4, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid4.element.style['width'] = '80%' , f_Grid4.tableElem['cellSpacing'] = 5 , f_Grid4.tableElem['cellPadding'] = 5 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBrancheAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBrancheAddView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1552, 1, {}, FrmBrancheAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBrancheAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1553, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmBrancheAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_27(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_11(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$FrmBrancheAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheAddView$_annotation$$none$$) {
    result = new FrmBrancheAddView_0(new FrmBrancheAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBrancheAddView$_annotation$$none$$;
}

function BrancheRequestFactory_BrancheRequestContextImpl$4X_0(this$0, val$branche){
  this.val$branche = val$branche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1925, 740, makeCastMap([Q$AbstractRequest]), BrancheRequestFactory_BrancheRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_32(){
  return new RequestData_0('s3FFXxss$lI7_CSDrA0GDl$lpLg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$branche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$branche = null;
var Lcom_lemania_sis_client_presenter_FrmBrancheAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheAddPresenter', 1241), Lcom_lemania_sis_client_presenter_FrmBrancheAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBrancheAddPresenter$1', 1242), Lcom_lemania_sis_client_view_FrmBrancheAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheAddView', 1549), Lcom_lemania_sis_client_view_FrmBrancheAddView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheAddView$1', 1550), Lcom_lemania_sis_client_view_FrmBrancheAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheAddView_BinderImpl', 1551), Lcom_lemania_sis_client_view_FrmBrancheAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheAddView_BinderImpl$Widgets', 1552), Lcom_lemania_sis_client_view_FrmBrancheAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBrancheAddView_BinderImpl$Widgets$1', 1553), Lcom_lemania_sis_shared_service_BrancheRequestFactory_1BrancheRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BrancheRequestFactory_BrancheRequestContextImpl$4X', 1925);
$entry(onLoad)(7);
