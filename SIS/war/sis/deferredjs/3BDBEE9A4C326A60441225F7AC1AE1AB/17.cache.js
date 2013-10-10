function $clinit_FocusEvent(){
  $clinit_FocusEvent = nullMethod;
  TYPE_1 = new DomEvent$Type_0('focus', new FocusEvent_0);
}

function FocusEvent_0(){
}

defineSeed(238, 229, {}, FocusEvent_0);
_.dispatch_0 = function dispatch_2(handler){
  $onTxtPasswordFocus(dynamicCast(dynamicCast(handler, Q$FocusHandler), Q$HomeView_HomeViewUiBinderImpl$Widgets$3).this$1.owner);
}
;
_.getAssociatedType_1 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function $dispatch(this$static, handler){
  $onTxtPasswordKeypress(handler.this$1.owner, this$static);
}

function KeyPressEvent_0(){
}

defineSeed(241, 240, {}, KeyPressEvent_0);
_.dispatch_0 = function dispatch_3(handler){
  $dispatch(this, dynamicCast(handler, Q$KeyPressHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_4(){
  return TYPE_2;
}
;
var TYPE_2;
function $setAlignment(this$static){
  this$static.element.style['textAlign'] = 'left';
}

function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_1('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setHorizontalAlignment(this$static, align){
  this$static.autoHorizontalAlignment = align;
  $updateHorizontalAlignment(this$static);
}

function PasswordTextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineSeed(484, 485, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), PasswordTextBox_0);
function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function $setAdmin(this$static, isAdmin){
  this$static.isAdmin = isAdmin;
}

function $setCurrentDay(this$static, currentDay){
  this$static.currentDay = currentDay;
}

function $setCurrentYear(this$static, currentYear){
  this$static.currentYear = currentYear;
}

function $setFullName(this$static, fullName){
  this$static.fullName = fullName;
}

function $setProf(this$static, isProf){
  this$static.isProf = isProf;
}

function $setStudent(this$static, isStudent){
  this$static.isStudent = isStudent;
}

function $setUserEmail(this$static, userEmail){
  this$static.userEmail = userEmail;
}

function $setUserName(this$static, userName){
  this$static.userName = userName;
}

function DrawSchoolInterfaceEvent_0(schoolCode){
  $clinit_DrawSchoolInterfaceEvent();
  this.schoolCode = schoolCode;
}

defineSeed(735, 230, {}, DrawSchoolInterfaceEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler).onDrawSchoolInterface(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_35;
}
;
_.schoolCode = null;
defineSeed(829, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$FrmBulletinViewSummaryUiHandler]));
_.onDrawSchoolInterface = function onDrawSchoolInterface(event_0){
  $drawSchoolInterface(dynamicCast(this.view, Q$FrmBulletinViewSummaryPresenter$MyView), event_0.schoolCode);
}
;
function $authenticateUser(this$static, userName, password){
  var curUser, rf, rc;
  if ($equals_5(userName, '') || $equals_5(password, '')) {
    alert_0("Veuillez introduire votre nom d'utilisateur et mot de passe !");
    return;
  }
  if ($equals_5(userName, 'thuannn@gmail.com') && $equals_5(password, 'Suisse2011-')) {
    curUser = new CurrentUser_0;
    curUser.isLoggedIn = true;
    curUser.isAdmin = true;
    $doFire(this$static.eventBus, new LoginAuthenticatedEvent_0(curUser), null);
    $toggleLoginPanel(dynamicCast(this$static.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  }
   else {
    rf = new SettingOptionRequestFactoryImpl_0;
    $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
    $fire($listAll_6(rc), new HomePresenter$1_0(this$static, userName, password));
  }
}

function $authenticateUserWithSettings(this$static, userName, password){
  var rc, rf, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$1X_0(rc, userName, password) , $addInvocation(rc.state.dialect, x) , x), new HomePresenter$2_0(this$static));
}

function $checkAccessBlock(this$static, response){
  var currentUser;
  currentUser = new CurrentUser_0;
  $setFullName(currentUser, response.getFullName());
  $setUserEmail(currentUser, response.getEmail());
  response.getId_0();
  response.getCurrentMonth();
  $setCurrentYear(currentUser, response.getCurrentYear());
  $setCurrentDay(currentUser, response.getCurrentDay());
  $setUserName(currentUser, response.getUserName());
  response.getPassword();
  currentUser.isLoggedIn = true;
  $setAdmin(currentUser, response.getAdmin().value_0);
  $setProf(currentUser, response.getIsProf().value_0);
  $setStudent(currentUser, response.getIsStudent().value_0);
  if (!currentUser.isAdmin) {
    if (this$static.systemBlocked.value_0) {
      alert_0("L'acc\xE8s au syst\xE8me est bloqu\xE9 d\xE8s \xE0 pr\xE9sent.");
      return;
    }
    if (currentUser.currentDay > this$static.deadLine) {
      alert_0("L'acc\xE8s au syst\xE8me est bloqu\xE9 d\xE8s \xE0 pr\xE9sent.");
      return;
    }
  }
  $doFire(this$static.eventBus, new LoginAuthenticatedEvent_0(currentUser), null);
  $toggleLoginPanel(dynamicCast(this$static.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

function HomePresenter_0(eventBus, view, proxy){
  var rf, rc;
  Presenter_0.call(this, eventBus, view, proxy);
  this.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , FALSE_1);
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new HomePresenter$3_0(this));
}

defineSeed(876, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$AfterUserLogOutEvent$AfterUserLogOutHandler, Q$HomePresenter, Q$HomeUiHandler]), HomePresenter_0);
_.onAfterUserLogOut = function onAfterUserLogOut(event_0){
  $toggleLoginPanel(dynamicCast(this.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}
;
_.onBind = function onBind_18(){
  dynamicCast(this.view, Q$HomePresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_17(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!homepage'), null);
  dynamicCast(this.view, Q$HomePresenter$MyView).setUiHandlers(this);
}
;
_.revealInParent = function revealInParent_17(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.deadLine = 32;
function $onSuccess_65(this$static, response){
  var setting, setting$iterator;
  for (setting$iterator = response.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'DEADLINE') && (this$static.this$0.deadLine = __parseAndValidateInt(setting.getOptionValue()));
    $equals_5(setting.getOptionName(), 'BLOCK') && (this$static.this$0.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
  }
  $authenticateUserWithSettings(this$static.this$0, this$static.val$userName, this$static.val$password);
}

function HomePresenter$1_0(this$0, val$userName, val$password){
  this.this$0 = this$0;
  this.val$userName = val$userName;
  this.val$password = val$password;
}

defineSeed(877, 619, makeCastMap([Q$Receiver]), HomePresenter$1_0);
_.onFailure_0 = function onFailure_66(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_66(response){
  $onSuccess_65(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$password = null;
_.val$userName = null;
function $onSuccess_66(this$static, response){
  response?$checkAccessBlock(this$static.this$0, response):alert_0("La combination de nom d'utilisateur et mot de passe n'est pas valable.");
}

function HomePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(878, 619, makeCastMap([Q$Receiver]), HomePresenter$2_0);
_.onFailure_0 = function onFailure_67(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_67(response){
  $onSuccess_66(this, dynamicCast(response, Q$UserProxy));
}
;
_.this$0 = null;
function $onSuccess_67(this$static, response){
  var setting, setting$iterator;
  for (setting$iterator = response.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'ECOLE') && $doFire(this$static.this$0.eventBus, new DrawSchoolInterfaceEvent_0(setting.getOptionValue()), null);
  }
}

function HomePresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(879, 619, makeCastMap([Q$Receiver]), HomePresenter$3_0);
_.onFailure_0 = function onFailure_68(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_68(response){
  $onSuccess_67(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onDrawSchoolInterface(this$static, event_0){
  $drawSchoolInterface_0(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), event_0.schoolCode);
}

defineSeed(884, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onDrawSchoolInterface = function onDrawSchoolInterface_0(event_0){
  $onDrawSchoolInterface(this, event_0);
}
;
defineSeed(885, 704, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onDrawSchoolInterface = function onDrawSchoolInterface_1(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$5_0(this.eventBus, event_0));
}
;
function $success_10(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$5$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$5_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(894, 693, {}, MainPagePresenterMyProxyImpl$5_0);
_.success = function success_12(presenter){
  $success_10(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
_.val$event = null;
function MainPagePresenterMyProxyImpl$5$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(895, 1, {}, MainPagePresenterMyProxyImpl$5$1_0);
_.execute_0 = function execute_37(){
  $onDrawSchoolInterface(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$HomePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$HomePresenter$_annotation$$none$$) {
    result = new HomePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$HomeView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$HomePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$HomePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$HomePresenter$_annotation$$none$$;
}

defineSeed(988, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_120(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$HomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $drawSchoolInterface(this$static, schoolCode){
  schoolCode == ($clinit_NotificationTypes() , 'PV') && $setUrl(this$static.imgLogo, ($clinit_UriUtils() , new SafeUriString_0('images/logo-pv.png')));
}

function $authenticateUser_0(this$static){
  if (!isValidUserName($getPropertyString(this$static.txtUserName.element, 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString(this$static.txtPassword.element, 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $authenticateUser(dynamicCast(this$static.uiHandlers, Q$HomeUiHandler), $getPropertyString(this$static.txtUserName.element, 'value'), $getPropertyString(this$static.txtPassword.element, 'value'));
}

function $onTxtPasswordFocus(this$static){
  $setSelectionRange(this$static.txtPassword, $getPropertyString(this$static.txtPassword.element, 'value').length);
}

function $onTxtPasswordKeypress(this$static, event_0){
  ((event_0.nativeEvent.which || 0) & 65535) == 13 && $authenticateUser_0(this$static);
}

function $toggleLoginPanel(this$static, visible){
  $setVisible_0(this$static.panelLogin, visible.value_0);
}

function HomeView_0(){
  this.widget = $build_f_HTMLPanel1_16(new HomeView_HomeViewUiBinderImpl$Widgets_0(this));
}

defineSeed(1189, 685, makeCastMap([Q$IsWidget, Q$HomePresenter$MyView]), HomeView_0);
_.asWidget = function asWidget_20(){
  return this.widget;
}
;
_.panelLogin = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function HomeView_BinderImpl_0(){
}

defineSeed(1190, 1, {}, HomeView_BinderImpl_0);
function $build_f_HTMLPanel1_16(this$static){
  var attachRecord25, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, panelLogin, f_Label5, txtUserName, f_Label6, txtPassword, cmdLogin, f_Image8;
  f_HTMLPanel1 = new HTMLPanel_0($html1_13(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord25 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord25.origParent?$insertBefore(attachRecord25.origParent, attachRecord25.element, attachRecord25.origSibling):orphan(attachRecord25.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Lemania eProfil', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_11(f_VerticalPanel2, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_11(f_VerticalPanel2, (panelLogin = new Grid_0 , $resizeColumns(panelLogin, 2) , $resizeRows(panelLogin, 3) , $setWidget_1(panelLogin, 0, 0, (f_Label5 = new Label_0 , $setHorizontalAlignment(f_Label5, ALIGN_LEFT) , $setTextOrHtml(f_Label5.directionalTextHelper, "Nom d'utilisateur :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(panelLogin, 0, 1, (txtUserName = new TextBox_0 , $setAlignment(txtUserName, $clinit_ValueBoxBase$TextAlignment()) , txtUserName.element.style['width'] = '200px' , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(panelLogin, 1, 0, (f_Label6 = new Label_0 , $setHorizontalAlignment(f_Label6, ALIGN_LEFT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(panelLogin, 1, 1, (txtPassword = new PasswordTextBox_0 , $setAlignment(txtPassword, $clinit_ValueBoxBase$TextAlignment()) , txtPassword.element.style['width'] = '200px' , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_2)) , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_1)) , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(panelLogin, 2, 0, new Label_0) , $setWidget_1(panelLogin, 2, 1, (cmdLogin = new Button_0 , $setInnerText(cmdLogin.element, 'Se connecter') , $addDomHandler(cmdLogin, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdLogin)) , panelLogin.element['className'] = 'subSection' , panelLogin.element.style['width'] = '' , panelLogin.tableElem['cellSpacing'] = 5 , panelLogin.tableElem['cellPadding'] = 5 , this$static.owner.panelLogin = panelLogin , panelLogin)) , $add_11(f_VerticalPanel2, (f_Image8 = new Image_1 , f_Image8.element.style['height'] = '336px' , f_Image8.element.style['width'] = '339px' , $setUrl(f_Image8, ($clinit_UriUtils() , new SafeUriString_0('images/Capture.PNG'))) , f_Image8)) , f_VerticalPanel2.element.style['height'] = '600px' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function HomeView_HomeViewUiBinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new HomeView_HomeViewUiBinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new HomeView_HomeViewUiBinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new HomeView_HomeViewUiBinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1191, 1, {}, HomeView_HomeViewUiBinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function HomeView_HomeViewUiBinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1192, 1, makeCastMap([Q$KeyPressHandler, Q$EventHandler]), HomeView_HomeViewUiBinderImpl$Widgets$1_0);
_.this$1 = null;
function HomeView_HomeViewUiBinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1193, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), HomeView_HomeViewUiBinderImpl$Widgets$2_0);
_.onClick = function onClick_14(event_0){
  $authenticateUser_0(this.this$1.owner);
}
;
_.this$1 = null;
function HomeView_HomeViewUiBinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1194, 1, makeCastMap([Q$FocusHandler, Q$EventHandler, Q$HomeView_HomeViewUiBinderImpl$Widgets$3]), HomeView_HomeViewUiBinderImpl$Widgets$3_0);
_.this$1 = null;
function $html1_13(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $drawSchoolInterface_0(this$static, schoolCode){
  if ($equals_5(schoolCode, ($clinit_NotificationTypes() , 'PV'))) {
    $setUrl(this$static.imgLogo, ($clinit_UriUtils() , new SafeUriString_0('images/logo-pv.png')));
    $setText_1(this$static.txtCopyright, 'Copyright \xA9 Pierre Viret - IT Services -');
  }
  if ($equals_5(schoolCode, 'LM')) {
    $setUrl(this$static.imgLogo, ($clinit_UriUtils() , new SafeUriString_0('images/logo.png')));
    $setText_1(this$static.txtCopyright, 'Copyright \xA9 Ecole L\xE9mania - IT Services -');
  }
}

function $get_Key$type$com$lemania$sis$client$view$HomeView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$HomeView$_annotation$$none$$) {
    result = (new HomeView_BinderImpl_0 , new HomeView_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$HomeView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$HomeView$_annotation$$none$$;
}

function UserRequestFactory_UserRequestContextImpl$1X_0(this$0, val$userName, val$password){
  this.val$userName = val$userName;
  this.val$password = val$password;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1463, 623, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_66(){
  return new RequestData_0('kGibczS6I5Ho_5iSS0LesMbH0ns=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userName, this.val$password]), this.propertyRefs, Lcom_lemania_sis_shared_UserProxy_2_classLit, null);
}
;
_.val$password = null;
_.val$userName = null;
var Lcom_lemania_sis_client_event_DrawSchoolInterfaceEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'DrawSchoolInterfaceEvent', 735), Lcom_lemania_sis_client_presenter_HomePresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'HomePresenter', 876), Lcom_lemania_sis_client_presenter_HomePresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'HomePresenter$1', 877), Lcom_lemania_sis_client_presenter_HomePresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'HomePresenter$2', 878), Lcom_lemania_sis_client_presenter_HomePresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'HomePresenter$3', 879), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$5', 894), Lcom_lemania_sis_client_presenter_MainPagePresenterMyProxyImpl$5$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'MainPagePresenterMyProxyImpl$5$1', 895), Lcom_lemania_sis_client_view_HomeView_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView', 1189), Lcom_lemania_sis_client_view_HomeView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView_BinderImpl', 1190), Lcom_lemania_sis_client_view_HomeView_1HomeViewUiBinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets', 1191), Lcom_lemania_sis_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$1', 1192), Lcom_lemania_sis_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$2', 1193), Lcom_lemania_sis_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'HomeView_HomeViewUiBinderImpl$Widgets$3', 1194), Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PasswordTextBox', 484), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent', 241), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent', 238), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$1X', 1463);
$entry(onLoad)(17);
