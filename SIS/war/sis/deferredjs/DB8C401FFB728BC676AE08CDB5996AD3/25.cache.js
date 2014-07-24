function StudentAfterAddEvent_0(student){
  $clinit_StudentAfterAddEvent();
  this.student = student;
}

defineSeed(870, 276, {}, StudentAfterAddEvent_0);
_.dispatch_0 = function dispatch_56(handler){
  dynamicCast(handler, Q$StudentAfterAddEvent$StudentAfterAddHandler).onStudentAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_57(){
  return TYPE_56;
}
;
_.student = null;
function $onStudentAfterAdd(this$static, event_0){
  var rc, rf, student, updatedUser;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  student = event_0.student;
  updatedUser = dynamicCast($create_1(rc, Lcom_lemania_sis_shared_UserProxy_2_classLit), Q$UserProxy);
  updatedUser.setFullName(student.getFirstName() + ' ' + student.getLastName());
  updatedUser.setActive(student.getIsActive());
  updatedUser.setAdmin(($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  updatedUser.setIsProf(FALSE_1);
  updatedUser.setIsStudent(TRUE_1);
  updatedUser.setEmail(student.getEmail());
  updatedUser.setUserName(student.getEmail());
  updatedUser.setPassword($substring(toPowerOfTwoString_0(doubleToLongBits(Math.random())), 8));
  $fire($save_3(rc, updatedUser), new UserManagementPresenter$4_0);
}

function UserManagementPresenter$4_0(){
}

defineSeed(1111, 727, makeCastMap([Q$Receiver]), UserManagementPresenter$4_0);
_.onFailure_0 = function onFailure_50(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_50(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0(($clinit_NotificationTypes() , "Un code d'acc\xE8s a \xE9t\xE9 cr\xE9\xE9 pour cet \xE9l\xE8ve."));
}
;
defineSeed(1115, 824, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterAdd = function onStudentAfterAdd_0(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_11(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1116, 809, {}, UserManagementPresenterMyProxyImpl$1_0);
_.success = function success_13(presenter){
  $success_11(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1117, 1, {}, UserManagementPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_40(){
  $onStudentAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $createStudent(this$static, firstName, lastName, email, active){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!firstName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Pr\xE9nom');
    return;
  }
  if (!lastName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom');
    return;
  }
  if (!isValidEmailAddress(email)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Email');
    return;
  }
  rc = (rf = new StudentRequestFactoryImpl_0 , $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus)) , new StudentRequestFactory_StudentRequestContextImpl_0(rf));
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$8X_0(rc, firstName, lastName, email, active) , $addInvocation(rc.state.dialect, x) , x), new StudentAddPresenter$1_0(this$static));
}

function StudentAddPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
  dynamicCast(this.view, Q$StudentAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(1449, 796, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$StudentAddPresenter, Q$StudentAddUiHandler]), StudentAddPresenter_0);
_.onBind = function onBind_37(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_57(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_36(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('studentadd'), null);
}
;
_.revealInParent = function revealInParent_28(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_158(this$static, response){
  $doFire(this$static.this$0.eventBus, new StudentAfterAddEvent_0(response), null);
  $statusMessage(dynamicCast(this$static.this$0.view, Q$StudentAddPresenter$MyView), ($clinit_NotificationTypes() , "L'\xE9l\xE8ve a \xE9t\xE9 cr\xE9e avec succ\xE8s."));
}

function StudentAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1450, 727, makeCastMap([Q$Receiver]), StudentAddPresenter$1_0);
_.onFailure_0 = function onFailure_176(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_176(response){
  $onSuccess_158(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$) {
    result = new StudentAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$;
}

defineSeed(1489, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_193(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$StudentAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdSaveClick_9(this$static){
  !!this$static.uiHandlers && $createStudent(dynamicCast(this$static.uiHandlers, Q$StudentAddUiHandler), $getPropertyString(this$static.txtFirstName.element, 'value'), $getPropertyString(this$static.txtLastName.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'), $getValue_0(this$static.blnActive));
}

function $onTxtFirstNameKeyUp(this$static){
  $equals_6($getPropertyString(this$static.txtFirstName.element, 'value'), '')?$setText_1(this$static.txtEmail, $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_6($getPropertyString(this$static.txtLastName.element, 'value'), '')?$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function $onTxtLastNameKeyUp(this$static){
  $equals_6($getPropertyString(this$static.txtFirstName.element, 'value'), '')?$setText_1(this$static.txtEmail, $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch'):$equals_6($getPropertyString(this$static.txtLastName.element, 'value'), '')?$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '@eprofil.ch'):$setText_1(this$static.txtEmail, $getPropertyString(this$static.txtFirstName.element, 'value').substr(0, 1 - 0).toLowerCase() + '.' + $trim($getPropertyString(this$static.txtLastName.element, 'value')).toLowerCase() + '@eprofil.ch');
}

function $statusMessage(this$static, msg){
  $setText_0(this$static.lblStatus, msg);
  $setText_1(this$static.txtLastName, '');
  $setText_1(this$static.txtFirstName, '');
  $setText_1(this$static.txtEmail, '');
  $setValue_0(this$static.blnActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function StudentAddView_0(){
  this.widget = $build_f_HTMLPanel1_32(new StudentAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1783, 801, makeCastMap([Q$IsWidget, Q$StudentAddPresenter$MyView]), StudentAddView_0);
_.asWidget = function asWidget_31(){
  return this.widget;
}
;
_.blnActive = null;
_.lblStatus = null;
_.txtEmail = null;
_.txtFirstName = null;
_.txtLastName = null;
_.widget = null;
function StudentAddView_BinderImpl_0(){
}

defineSeed(1784, 1, {}, StudentAddView_BinderImpl_0);
function $build_f_HTMLPanel1_32(this$static){
  var attachRecord24, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_Grid5, f_Label6, txtLastName, f_Label7, txtFirstName, f_Label8, txtEmail, f_Label9, blnActive, f_Label10, f_Label11, cmdSave, f_Label12, lblStatus;
  f_HTMLPanel1 = new HTMLPanel_0($html1_23(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord24 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord24.origParent?$insertBefore(attachRecord24.origParent, attachRecord24.element, attachRecord24.origSibling):orphan(attachRecord24.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'RAJOUTER UN ELEVE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_12(f_VerticalPanel2, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 7) , $setWidget_3(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid5, 0, 1, (txtLastName = new TextBox_0 , txtLastName.element['className'] = 'sis_textbox' , txtLastName.element.style['width'] = '' , $addDomHandler(txtLastName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_3)) , this$static.owner.txtLastName = txtLastName , txtLastName)) , $setWidget_3(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid5, 1, 1, (txtFirstName = new TextBox_0 , txtFirstName.element['className'] = 'sis_textbox' , txtFirstName.element.style['width'] = '' , $addDomHandler(txtFirstName, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_3) , this$static.owner.txtFirstName = txtFirstName , txtFirstName)) , $setWidget_3(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, "E-mail (nom d'utilisateur) :", false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid5, 2, 1, (txtEmail = new TextBox_0 , txtEmail.element['className'] = 'sis_textbox' , txtEmail.element.style['width'] = '' , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_3(f_Grid5, 3, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid5, 3, 1, (blnActive = new CheckBox_0 , $setTextOrHtml(blnActive.directionalTextHelper, 'Actif', false) , $setValue_0(blnActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.blnActive = blnActive , blnActive)) , $setWidget_3(f_Grid5, 4, 0, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid5, 5, 0, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid5, 5, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $setWidget_3(f_Grid5, 6, 0, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid5, 6, 1, (lblStatus = new Label_0 , this$static.owner.lblStatus = lblStatus , lblStatus)) , f_Grid5.tableElem['cellSpacing'] = 5 , f_Grid5.tableElem['cellPadding'] = 5 , f_Grid5)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new StudentAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new StudentAddView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new StudentAddView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1785, 1, {}, StudentAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function StudentAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1786, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_53(event_0){
  $onCmdSaveClick_9(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1787, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$2_0);
_.onKeyUp = function onKeyUp_2(event_0){
  $onTxtLastNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function StudentAddView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1788, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), StudentAddView_BinderImpl$Widgets$3_0);
_.onKeyUp = function onKeyUp_3(event_0){
  $onTxtFirstNameKeyUp(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_23(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$) {
    result = new StudentAddView_0(new StudentAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$StudentAddView$_annotation$$none$$;
}

function StudentRequestFactory_StudentRequestContextImpl$8X_0(this$0, val$firstName, val$lastName, val$email, val$active){
  this.val$firstName = val$firstName;
  this.val$lastName = val$lastName;
  this.val$email = val$email;
  this.val$active = val$active;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2043, 731, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_103(){
  return new RequestData_0('b5Po$dZwx7bS6q$t466V7T4H7jA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$firstName, this.val$lastName, this.val$email, this.val$active]), this.propertyRefs, Lcom_lemania_sis_shared_student_StudentProxy_2_classLit, null);
}
;
_.val$active = null;
_.val$email = null;
_.val$firstName = null;
_.val$lastName = null;
var Lcom_lemania_sis_client_presenter_StudentAddPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentAddPresenter', 1449), Lcom_lemania_sis_client_presenter_StudentAddPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentAddPresenter$1', 1450), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenter$4', 1111), Lcom_lemania_sis_client_event_StudentAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'StudentAfterAddEvent', 870), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$1', 1116), Lcom_lemania_sis_client_form_usermgt_UserManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.form.usermgt.', 'UserManagementPresenterMyProxyImpl$1$1', 1117), Lcom_lemania_sis_client_view_StudentAddView_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView', 1783), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl', 1784), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets', 1785), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$1', 1786), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$2', 1787), Lcom_lemania_sis_client_view_StudentAddView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentAddView_BinderImpl$Widgets$3', 1788), Lcom_lemania_sis_shared_student_StudentRequestFactory_1StudentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.student.', 'StudentRequestFactory_StudentRequestContextImpl$8X', 2043);
$entry(onLoad)(25);
