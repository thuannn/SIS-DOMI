function StudentAfterStatusChangeEvent_0(studentId, studentEmail, status_0){
  $clinit_StudentAfterStatusChangeEvent();
  this.studentId = studentId;
  this.studentEmail = studentEmail;
  this.status_0 = status_0;
}

defineSeed(742, 230, {}, StudentAfterStatusChangeEvent_0);
_.dispatch_0 = function dispatch_42(handler){
  dynamicCast(handler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler).onStudentAfterDesactivate(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_43(){
  return TYPE_42;
}
;
_.status_0 = null;
_.studentEmail = '';
_.studentId = '';
function $onStudentAfterDesactivate(this$static, event_0){
  var rc, rf;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($updateBulletinStatus(rc, event_0.studentId, event_0.status_0), new FrmBulletinManagementPresenter$15_0);
}

defineSeed(797, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler, Q$FrmBulletinManagementPresenter, Q$FrmBulletinManagementUiHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate(event_0){
  $onStudentAfterDesactivate(this, event_0);
}
;
function FrmBulletinManagementPresenter$15_0(){
}

defineSeed(804, 619, makeCastMap([Q$Receiver]), FrmBulletinManagementPresenter$15_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(814, 711, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_0(event_0){
  $getPresenter_0(this, new FrmBulletinManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_1(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmBulletinManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmBulletinManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(815, 693, {}, FrmBulletinManagementPresenterMyProxyImpl$1_0);
_.success = function success_3(presenter){
  $success_1(this, dynamicCast(presenter, Q$FrmBulletinManagementPresenter));
}
;
_.val$event = null;
function FrmBulletinManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(816, 1, {}, FrmBulletinManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_28(){
  $onStudentAfterDesactivate(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $getStudentRequestContext(this$static){
  var rf;
  rf = new StudentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  return new StudentRequestFactory_StudentRequestContextImpl_0(rf);
}

function $updateStudentEmail(this$static, student, email){
  var rc, studentForUpdate;
  if ($equals_5(student.getEmail(), email))
    return;
  if (isValidEmailAddress(email)) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Email');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setEmail(email);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$5_0(this$static));
}

function $updateStudentFirstName(this$static, student, firstName){
  var rc, studentForUpdate;
  if ($equals_5(student.getFirstName(), firstName))
    return;
  if ($equals_5(firstName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Pr\xE9nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setFirstName(firstName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$3_0(this$static));
}

function $updateStudentLastName(this$static, student, lastName){
  var rc, studentForUpdate;
  if ($equals_5(student.getLastName(), lastName))
    return;
  if ($equals_5(lastName, '')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom');
    return;
  }
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setLastName(lastName);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$4_0(this$static));
}

function $updateStudentStatus(this$static, student, value){
  var rc, studentForUpdate;
  rc = $getStudentRequestContext(this$static);
  studentForUpdate = dynamicCast($editProxy(rc, student), Q$StudentProxy);
  studentForUpdate.setIsActive(value);
  $fire($saveAndReturn_2(rc, studentForUpdate), new StudentPresenter$2_0(this$static, student, value));
}

function StudentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$StudentPresenter$MyView).setUiHandlers(this);
}

defineSeed(946, 680, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$StudentListUiHandler]), StudentPresenter_0);
_.onBind = function onBind_25(){
  $initializeTable_3(dynamicCast(this.view, Q$StudentPresenter$MyView));
}
;
_.onReset = function onReset_24(){
  var rc, x;
  rc = $getStudentRequestContext(this);
  $fire((x = new StudentRequestFactory_StudentRequestContextImpl$1X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new StudentPresenter$1_0(this));
  $doFire(this.eventBus, new PageAfterSelectEvent_0('students'), null);
}
;
_.revealInParent = function revealInParent_24(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_98(this$static, response){
  $setTableData(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(947, 619, makeCastMap([Q$Receiver]), StudentPresenter$1_0);
_.onFailure_0 = function onFailure_100(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_100(response){
  $onSuccess_98(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_99(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new StudentAfterStatusChangeEvent_0('' + toString_6(this$static.val$student.getId_0().value_0), this$static.val$student.getEmail(), this$static.val$value), null);
}

function StudentPresenter$2_0(this$0, val$student, val$value){
  this.this$0 = this$0;
  this.val$student = val$student;
  this.val$value = val$value;
}

defineSeed(948, 619, makeCastMap([Q$Receiver]), StudentPresenter$2_0);
_.onFailure_0 = function onFailure_101(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_101(response){
  $onSuccess_99(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
_.val$student = null;
_.val$value = null;
function $onSuccess_100(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(949, 619, makeCastMap([Q$Receiver]), StudentPresenter$3_0);
_.onFailure_0 = function onFailure_102(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_102(response){
  $onSuccess_100(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_101(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(950, 619, makeCastMap([Q$Receiver]), StudentPresenter$4_0);
_.onFailure_0 = function onFailure_103(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_103(response){
  $onSuccess_101(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onSuccess_102(this$static, response){
  $updateEditedStudent(dynamicCast(this$static.this$0.view, Q$StudentPresenter$MyView), response);
}

function StudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(951, 619, makeCastMap([Q$Receiver]), StudentPresenter$5_0);
_.onFailure_0 = function onFailure_104(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_104(response){
  $onSuccess_102(this, dynamicCast(response, Q$StudentProxy));
}
;
_.this$0 = null;
function $onStudentAfterDesactivate_0(this$static, event_0){
  var rc, rf;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($updateUserActiveStatus(rc, event_0.studentEmail, event_0.status_0), new UserManagementPresenter$7_0);
}

function UserManagementPresenter$7_0(){
}

defineSeed(961, 619, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_111(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_111(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(962, 711, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ProfessorAfterAddEvent$ProfessorAfterAddHandler, Q$StudentAfterAddEvent$StudentAfterAddHandler, Q$StudentAfterStatusChangeEvent$StudentAfterStatusChangeHandler]));
_.onStudentAfterDesactivate = function onStudentAfterDesactivate_2(event_0){
  $getPresenter_0(this, new UserManagementPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_15(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new UserManagementPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function UserManagementPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(967, 693, {}, UserManagementPresenterMyProxyImpl$3_0);
_.success = function success_17(presenter){
  $success_15(this, dynamicCast(presenter, Q$UserManagementPresenter));
}
;
_.val$event = null;
function UserManagementPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(968, 1, {}, UserManagementPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_42(){
  $onStudentAfterDesactivate_0(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$) {
    result = new StudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$;
}

defineSeed(1003, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_127(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$StudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_3(this$static){
  var cellActive, colActive, colEmail, colFirstName, colLastName;
  colFirstName = new StudentView$1_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colFirstName, 'Nom');
  $setFieldUpdater(colFirstName, new StudentView$2_0(this$static));
  colLastName = new StudentView$3_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colLastName, 'Pr\xE9nom');
  $setFieldUpdater(colLastName, new StudentView$4_0(this$static));
  colEmail = new StudentView$5_0(new EditTextCell_0);
  $addColumn(this$static.tblStudents, colEmail, 'Email');
  $setFieldUpdater(colEmail, new StudentView$6_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new StudentView$7_0(cellActive);
  $addColumn(this$static.tblStudents, colActive, 'Active');
  $setFieldUpdater(colActive, new StudentView$8_0(this$static));
  $addDataDisplay(this$static.dataProvider, this$static.tblStudents);
  $setPageSize(this$static.tblStudents, 1000);
}

function $setTableData(this$static, studentList){
  $setList(this$static.dataProvider, studentList);
  $setHeight(this$static.tblStudents, '' + (studentList.size_1() * ($clinit_NotificationTypes() , lineHeight).value_0 + headerHeight.value_0) + 'px');
}

function $updateEditedStudent(this$static, student){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedStudent);
  $add_13(this$static.dataProvider.listWrapper, this$static.selectedStudent, student);
  $refresh(this$static.dataProvider);
}

function StudentView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.tblStudents = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_22(new StudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1265, 685, makeCastMap([Q$IsWidget, Q$StudentPresenter$MyView]), StudentView_0);
_.asWidget = function asWidget_27(){
  return this.widget;
}
;
_.selectedStudent = -1;
_.widget = null;
function StudentView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1266, 354, makeCastMap([Q$HasCell, Q$Column]), StudentView$1_0);
_.getValue = function getValue_57(object){
  return dynamicCast(object, Q$StudentProxy).getLastName();
}
;
function $update_23(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentLastName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1267, 1, {}, StudentView$2_0);
_.update = function update_24(index, student, value){
  $update_23(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1268, 354, makeCastMap([Q$HasCell, Q$Column]), StudentView$3_0);
_.getValue = function getValue_58(object){
  return dynamicCast(object, Q$StudentProxy).getFirstName();
}
;
function $update_24(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentFirstName(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1269, 1, {}, StudentView$4_0);
_.update = function update_25(index, student, value){
  $update_24(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1270, 354, makeCastMap([Q$HasCell, Q$Column]), StudentView$5_0);
_.getValue = function getValue_59(object){
  return dynamicCast(object, Q$StudentProxy).getEmail();
}
;
function $update_25(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentEmail(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1271, 1, {}, StudentView$6_0);
_.update = function update_26(index, student, value){
  $update_25(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function StudentView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1272, 354, makeCastMap([Q$HasCell, Q$Column]), StudentView$7_0);
_.getValue = function getValue_60(student){
  return dynamicCast(student, Q$StudentProxy).getIsActive();
}
;
function $update_26(this$static, index, student, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedStudent = index;
    $updateStudentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$StudentListUiHandler), student, value);
  }
}

function StudentView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1273, 1, {}, StudentView$8_0);
_.update = function update_27(index, student, value){
  $update_26(this, index, dynamicCast(student, Q$StudentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function StudentView_BinderImpl_0(){
}

defineSeed(1274, 1, {}, StudentView_BinderImpl_0);
function $build_f_HTMLPanel1_22(this$static){
  var attachRecord22, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblStudents;
  f_HTMLPanel1 = new HTMLPanel_0($html1_17(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord22 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord22.origParent?$insertBefore(attachRecord22.origParent, attachRecord22.element, attachRecord22.origSibling):orphan(attachRecord22.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES ELEVES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (tblStudents = this$static.owner.tblStudents , tblStudents.element.style['height'] = '500px' , tblStudents.element.style['width'] = '100%' , tblStudents)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function StudentView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1275, 1, {}, StudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html1_17(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$) {
    result = new StudentView_0(new StudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$StudentView$_annotation$$none$$;
}

defineSeed(1336, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setEmail(email);
}
;
_.setFirstName = function setFirstName(firstName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setFirstName(firstName);
}
;
_.setIsActive = function setIsActive_5(isActive){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setIsActive(isActive);
}
;
_.setLastName = function setLastName(lastName){
  dynamicCast($getWrapped(this.this$0), Q$StudentProxy).setLastName(lastName);
}
;
defineSeed(1337, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$StudentProxy]));
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFirstName = function setFirstName_0(firstName){
  $setProperty(this.this$0, 'firstName', firstName);
}
;
_.setIsActive = function setIsActive_6(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setLastName = function setLastName_0(lastName){
  $setProperty(this.this$0, 'lastName', lastName);
}
;
function $updateBulletinStatus(this$static, studentId, status_0){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$static, studentId, status_0);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl$13X_0(this$0, val$studentId, val$status){
  this.val$studentId = val$studentId;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1369, 623, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$13X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('_detNR3X0jEoy7Vjmne2z8sQm1s=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$studentId, this.val$status]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = null;
_.val$studentId = null;
function $saveAndReturn_2(this$static, newStudent){
  var x;
  x = new StudentRequestFactory_StudentRequestContextImpl$7X_0(this$static, newStudent);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function StudentRequestFactory_StudentRequestContextImpl$1X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1447, 623, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_56(){
  return new RequestData_0('G2KD$kkdT6sFEa2oTck82epBU2U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_StudentProxy_2_classLit);
}
;
function StudentRequestFactory_StudentRequestContextImpl$7X_0(this$0, val$newStudent){
  this.val$newStudent = val$newStudent;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1449, 623, makeCastMap([Q$AbstractRequest]), StudentRequestFactory_StudentRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_58(){
  return new RequestData_0('qI0_B1hYf67V$_VpVTF2RqSn4Ag=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newStudent]), this.propertyRefs, Lcom_lemania_sis_shared_StudentProxy_2_classLit, null);
}
;
_.val$newStudent = null;
function $updateUserActiveStatus(this$static, userEmail, userStatus){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$11X_0(this$static, userEmail, userStatus);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$11X_0(this$0, val$userEmail, val$userStatus){
  this.val$userEmail = val$userEmail;
  this.val$userStatus = val$userStatus;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1462, 623, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_65(){
  return new RequestData_0('u8JubnwSt9DEPIbUYE7UKeV1NWo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userEmail, this.val$userStatus]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$userEmail = null;
_.val$userStatus = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenter$15', 804), Lcom_lemania_sis_client_event_StudentAfterStatusChangeEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'StudentAfterStatusChangeEvent', 742), Lcom_lemania_sis_client_presenter_StudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter', 946), Lcom_lemania_sis_client_presenter_StudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$1', 947), Lcom_lemania_sis_client_presenter_StudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$2', 948), Lcom_lemania_sis_client_presenter_StudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$3', 949), Lcom_lemania_sis_client_presenter_StudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$4', 950), Lcom_lemania_sis_client_presenter_StudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'StudentPresenter$5', 951), Lcom_lemania_sis_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenter$7', 961), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1', 815), Lcom_lemania_sis_client_presenter_FrmBulletinManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinManagementPresenterMyProxyImpl$1$1', 816), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$3', 967), Lcom_lemania_sis_client_presenter_UserManagementPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'UserManagementPresenterMyProxyImpl$3$1', 968), Lcom_lemania_sis_client_view_StudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView', 1265), Lcom_lemania_sis_client_view_StudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$1', 1266), Lcom_lemania_sis_client_view_StudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$2', 1267), Lcom_lemania_sis_client_view_StudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$3', 1268), Lcom_lemania_sis_client_view_StudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$4', 1269), Lcom_lemania_sis_client_view_StudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$5', 1270), Lcom_lemania_sis_client_view_StudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$6', 1271), Lcom_lemania_sis_client_view_StudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$7', 1272), Lcom_lemania_sis_client_view_StudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView$8', 1273), Lcom_lemania_sis_client_view_StudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl', 1274), Lcom_lemania_sis_client_view_StudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'StudentView_BinderImpl$Widgets', 1275), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$13X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$13X', 1369), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$1X', 1447), Lcom_lemania_sis_shared_service_StudentRequestFactory_1StudentRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'StudentRequestFactory_StudentRequestContextImpl$7X', 1449), Lcom_lemania_sis_shared_service_UserRequestFactory_1UserRequestContextImpl$11X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'UserRequestFactory_UserRequestContextImpl$11X', 1462);
$entry(onLoad)(23);
