function CheckClassMasterRoleEvent_0(profId){
  $clinit_CheckClassMasterRoleEvent();
  this.profId = profId;
}

defineSeed(846, 271, {}, CheckClassMasterRoleEvent_0);
_.dispatch_0 = function dispatch_41(handler){
  dynamicCast(handler, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler).onCheckClassMasterRole(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_42(){
  return TYPE_41;
}
;
_.profId = '';
function EvaluationStudentReportLoadEvent_0(bulletinId, evaluationHeaderId){
  $clinit_EvaluationStudentReportLoadEvent();
  this.bulletinId = bulletinId;
  this.evaluationHeaderId = evaluationHeaderId;
}

defineSeed(851, 271, {}, EvaluationStudentReportLoadEvent_0);
_.dispatch_0 = function dispatch_46(handler){
  dynamicCast(handler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler).onEvaluationStudentReportLoad(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_47(){
  return TYPE_46;
}
;
_.bulletinId = '';
_.evaluationHeaderId = '';
function $onBulletinSelected_0(this$static, classId){
  var rc, rf;
  rf = new EvaluationHeaderRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationHeaderRequestFactory_EvaluationHeaderRequestContextImpl_0(rf);
  $fire($listAllByClass_0(rc, classId), new FrmEvaluationInputStudentPresenter$5_0(this$static));
}

function $onCheckClassMasterRole(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isAdmin) {
    $enableCommentEditing(dynamicCast(this$static.view, Q$FrmEvaluationInputStudentPresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($checkClassMasterRole(rc, '' + toString_6(this$static.currentUser.userId.value_0), event_0.profId), new FrmEvaluationInputStudentPresenter$7_0(this$static));
}

function $onClassSelected_0(this$static, classId){
  var rc, rf;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($listAllActiveByClass(rc, classId), new FrmEvaluationInputStudentPresenter$4_0(this$static));
}

function $onEcoleSelected_3(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new FrmEvaluationInputStudentPresenter$2_0(this$static));
}

function $onEvaluationHeaderSelected(this$static, classId, bulletinId, evaluationHeaderId, classMasterId){
  var rc, rf, x;
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  if (!bulletinId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - El\xE8ve');
    return;
  }
  if (!evaluationHeaderId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Evaluation');
    return;
  }
  rf = new EvaluationSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl_0(rf);
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(rc, classId, bulletinId, evaluationHeaderId) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$6_0(this$static, classMasterId, bulletinId, evaluationHeaderId));
}

function $onEvaluationStudentReportLoad(this$static, event_0){
  var rc, rf;
  rf = new EvaluationStudentReportRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(rf);
  $fire($load(rc, event_0.bulletinId, event_0.evaluationHeaderId), new FrmEvaluationInputStudentPresenter$9_0(this$static));
}

function $onProgrammeSelected_1(this$static, programmeId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, programmeId), new FrmEvaluationInputStudentPresenter$3_0(this$static));
}

function $removeEvaluationSubject(this$static, es){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!this$static.currentUser.isAdmin) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new EvaluationSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl_0(rf);
  $fire((x = new EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$4X_0(rc, es) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$10_0(this$static));
}

function $saveEvaluationStudentReport(this$static, bulletinId, evaluationHeaderId, commentaire){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new EvaluationStudentReportRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(rf);
  $fire((x = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0(rc, bulletinId, evaluationHeaderId, commentaire) , $addInvocation(rc.state.dialect, x) , x), new FrmEvaluationInputStudentPresenter$8_0);
}

function FrmEvaluationInputStudentPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1317, 787, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmEvaluationInputStudentPresenter, Q$FrmEvaluationInputStudentUiHandler]), FrmEvaluationInputStudentPresenter_0);
_.onBind = function onBind_26(){
  var rf, rc;
  dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView).setUiHandlers(this);
  $initializeUI_5(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_6(rc), new FrmEvaluationInputStudentPresenter$1_0(this));
}
;
_.onCheckClassMasterRole = function onCheckClassMasterRole(event_0){
  $onCheckClassMasterRole(this, event_0);
}
;
_.onEvaluationStudentReportLoad = function onEvaluationStudentReportLoad(event_0){
  $onEvaluationStudentReportLoad(this, event_0);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_35(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_25(){
  $doFire(this.eventBus, new PageAfterSelectEvent_0('evaluationinputstudent'), null);
  $resetForm_7(dynamicCast(this.view, Q$FrmEvaluationInputStudentPresenter$MyView));
}
;
_.revealInParent = function revealInParent_17(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_97(this$static, response){
  $setEcoleList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1318, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$1_0);
_.onFailure_0 = function onFailure_114(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_114(response){
  $onSuccess_97(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_98(this$static){
  $removeDeletedEvaluationSubject(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView));
}

function FrmEvaluationInputStudentPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1319, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$10_0);
_.onFailure_0 = function onFailure_115(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_115(response){
  $onSuccess_98(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_99(this$static, response){
  $setCoursList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1320, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$2_0);
_.onFailure_0 = function onFailure_116(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_116(response){
  $onSuccess_99(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_100(this$static, response){
  $setClasseList_3(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1321, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$3_0);
_.onFailure_0 = function onFailure_117(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_117(response){
  $onSuccess_100(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_101(this$static, response){
  $setStudentListData_2(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1322, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$4_0);
_.onFailure_0 = function onFailure_118(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_118(response){
  $onSuccess_101(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_102(this$static, response){
  $setEvaluationHeaderListData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1323, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$5_0);
_.onFailure_0 = function onFailure_119(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_119(response){
  $onSuccess_102(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_103(this$static, response){
  $setEvaluationSubjectTableData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
  $doFire(this$static.this$0.eventBus, new CheckClassMasterRoleEvent_0(this$static.val$classMasterId), null);
  $doFire(this$static.this$0.eventBus, new EvaluationStudentReportLoadEvent_0(this$static.val$bulletinId, this$static.val$evaluationHeaderId), null);
}

function FrmEvaluationInputStudentPresenter$6_0(this$0, val$classMasterId, val$bulletinId, val$evaluationHeaderId){
  this.this$0 = this$0;
  this.val$classMasterId = val$classMasterId;
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
}

defineSeed(1324, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$6_0);
_.onFailure_0 = function onFailure_120(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_120(response){
  $onSuccess_103(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$bulletinId = null;
_.val$classMasterId = null;
_.val$evaluationHeaderId = null;
function $onSuccess_104(this$static, response){
  $enableCommentEditing(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1325, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$7_0);
_.onFailure_0 = function onFailure_121(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_121(response){
  $onSuccess_104(this, dynamicCast(response, Q$Boolean));
}
;
_.this$0 = null;
function FrmEvaluationInputStudentPresenter$8_0(){
}

defineSeed(1326, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$8_0);
_.onFailure_0 = function onFailure_122(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_122(response){
  throwClassCastExceptionUnlessNull(response);
  alert_0('Donn\xE9es sauvegard\xE9es');
}
;
function $onSuccess_105(this$static, response){
  !!response && $setStudentReportData(dynamicCast(this$static.this$0.view, Q$FrmEvaluationInputStudentPresenter$MyView), response);
}

function FrmEvaluationInputStudentPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1327, 718, makeCastMap([Q$Receiver]), FrmEvaluationInputStudentPresenter$9_0);
_.onFailure_0 = function onFailure_123(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_123(response){
  $onSuccess_105(this, dynamicCast(response, Q$EvaluationStudentReportProxy));
}
;
_.this$0 = null;
defineSeed(1328, 815, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$CheckClassMasterRoleEvent$CheckClassMasterRoleHandler, Q$EvaluationStudentReportLoadEvent$EvaluationStudentReportLoadHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onCheckClassMasterRole = function onCheckClassMasterRole_0(event_0){
  $getPresenter_0(this, new FrmEvaluationInputStudentPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
_.onEvaluationStudentReportLoad = function onEvaluationStudentReportLoad_0(event_0){
  $getPresenter_0(this, new FrmEvaluationInputStudentPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_34(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function FrmEvaluationInputStudentPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1329, 800, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$1_0);
_.success = function success_36(presenter){
  $success_34(this, dynamicCast(presenter, Q$FrmEvaluationInputStudentPresenter));
}
;
_.val$event = null;
function FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1330, 1, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_62(){
  $onCheckClassMasterRole(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $success_36(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function FrmEvaluationInputStudentPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1333, 800, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$3_0);
_.success = function success_38(presenter){
  $success_36(this, dynamicCast(presenter, Q$FrmEvaluationInputStudentPresenter));
}
;
_.val$event = null;
function FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1334, 1, {}, FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_64(){
  $onEvaluationStudentReportLoad(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$) {
    result = new FrmEvaluationInputStudentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$;
}

defineSeed(1463, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_183(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmEvaluationInputStudentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $enableCommentEditing(this$static, isClassMaster){
  $setEnabled(this$static.cmdSave, isClassMaster.value_0);
}

function $initializeUI_5(this$static){
  var colDelete, colObjective1, colObjective2, colObjective3, colObjective4, colObjective5, colObjective6, colProfName, colSubjectName;
  $selectClear(this$static.lstYears.element);
  $insertItem_0(this$static.lstYears, '-', '', -1);
  $insertItem_0(this$static.lstYears, '2013 - 2014', '2013', -1);
  colSubjectName = new FrmEvaluationInputStudentView$1_0;
  $addColumn(this$static.tblEvaluations, colSubjectName, 'Mati\xE8re');
  colProfName = new FrmEvaluationInputStudentView$2_0;
  $addColumn(this$static.tblEvaluations, colProfName, 'Professeur');
  colObjective1 = new FrmEvaluationInputStudentView$3_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective1, 10 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblEvaluations, colObjective1, "Comprend le contexte du cours, est capable d'en discuster et d'en appliquer les principes.");
  colObjective2 = new FrmEvaluationInputStudentView$4_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective2, '10%');
  $addColumn(this$static.tblEvaluations, colObjective2, "Est capable d'identifier des probl\xE8mes et de chercher des solutions.");
  colObjective3 = new FrmEvaluationInputStudentView$5_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective3, '10%');
  $addColumn(this$static.tblEvaluations, colObjective3, 'Est capable de synth\xE9tiser et de faire des propositions dans le cadre de contextes similaires.');
  colObjective4 = new FrmEvaluationInputStudentView$6_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective4, '10%');
  $addColumn(this$static.tblEvaluations, colObjective4, 'Est bien structur\xE9 dans son travail et parvient \xE0 hi\xE9rachiser ses priorit\xE9s.');
  colObjective5 = new FrmEvaluationInputStudentView$7_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective5, '10%');
  $addColumn(this$static.tblEvaluations, colObjective5, 'Travaille correctement et accomplit les t\xE2ches demand\xE9es.');
  colObjective6 = new FrmEvaluationInputStudentView$8_0;
  $setColumnWidth_0(this$static.tblEvaluations, colObjective6, '10%');
  $addColumn(this$static.tblEvaluations, colObjective6, "Participe positivement en classes en tant qu'individu et au sein du groupe.");
  colDelete = new FrmEvaluationInputStudentView$9_0(new ButtonCell_0);
  $setFieldUpdater(colDelete, new FrmEvaluationInputStudentView$10_0(this$static));
  $addColumn(this$static.tblEvaluations, colDelete, '');
  $addDataDisplay(this$static.providerEvaluationSubject, this$static.tblEvaluations);
}

function $onCmdPrintClick_0(this$static){
  var popup;
  popup = new FrmEvaluationInputStudentView$11_0;
  $setVisible_0(this$static.cmdSave, false);
  $setColumnWidth_0(this$static.tblEvaluations, $getColumn(this$static.tblEvaluations, this$static.tblEvaluations.columns.size_0 - 1), 0 + ($clinit_Style$Unit() , 'px'));
  $getParentElement($getFirstChildElement(popup.element))['className'] = 'evaluation';
  $add_4(popup, this$static.pnlEvaluationPrint);
  $addHandler_0(popup, new FrmEvaluationInputStudentView$12_0(this$static), TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type_0));
  $show(popup);
}

function $onCmdSaveClick_3(this$static){
  $saveEvaluationStudentReport(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getValue_2(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), $getPropertyString(this$static.txtCommentaire.element, 'value'));
}

function $onLstBulletinsChange_1(this$static){
  $setText_0(this$static.lblFromDate, '');
  $setText_0(this$static.lblToDate, '');
  $setText_0(this$static.lblClass, '');
  $setText_0(this$static.lblClassMaster, '');
  $setText_0(this$static.lblStudentName, '');
  $setText_0(this$static.lblObjective, '');
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
  $setText_1(this$static.txtCommentaire, '');
  $setText_0(this$static.lblStudentName, $getItemText(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex));
  $onBulletinSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstClassesChange_6(this$static){
  $onClassSelected_0(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstEcolesChange_3(this$static){
  if (!$getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstProgrammes.element);
    $selectClear(this$static.lstClasses.element);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_3(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $onLstEvaluationHeadersChange(this$static){
  var eh;
  if ($equals_6($getValue_2(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), ''))
    return;
  eh = dynamicCast($get_9(this$static.evaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex - 1), Q$EvaluationHeaderProxy);
  $setText_0(this$static.lblFromDate, eh.getFromDate());
  $setText_0(this$static.lblToDate, eh.getToDate());
  $setText_0(this$static.lblObjective, eh.getObjective());
  $setText_0(this$static.lblClass, $getItemText(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
  $setText_0(this$static.lblClassMaster, eh.getClassMasterName());
  $onEvaluationHeaderSelected(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_2(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex), $getValue_2(this$static.lstEvaluationHeaders, this$static.lstEvaluationHeaders.element.selectedIndex), eh.getClassMasterId());
}

function $onLstProgrammesChange_1(this$static){
  if (!$getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex).length)
    return;
  !!this$static.uiHandlers && $onProgrammeSelected_1(dynamicCast(this$static.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex));
}

function $removeDeletedEvaluationSubject(this$static){
  $remove_12(this$static.providerEvaluationSubject.listWrapper, this$static.selectedEvaluationSubjectIndex);
}

function $resetForm_7(this$static){
  $setSelectedIndex_0(this$static.lstBulletins, 0);
  $selectClear(this$static.lstEvaluationHeaders.element);
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
}

function $setClasseList_3(this$static, classes){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_3(this$static, programmes){
  var cours, cours$iterator;
  $selectClear(this$static.lstProgrammes.element);
  $insertItem_0(this$static.lstProgrammes, '-', '', -1);
  for (cours$iterator = programmes.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem_0(this$static.lstProgrammes, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setEcoleList_3(this$static, ecoles){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem_0(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoles.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem_0(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setEvaluationHeaderListData(this$static, headers){
  var evh, evh$iterator;
  $selectClear(this$static.lstEvaluationHeaders.element);
  $insertItem_0(this$static.lstEvaluationHeaders, '-', '', -1);
  for (evh$iterator = headers.iterator(); evh$iterator.hasNext();) {
    evh = dynamicCast(evh$iterator.next_0(), Q$EvaluationHeaderProxy);
    $insertItem_0(this$static.lstEvaluationHeaders, evh.getFromDate() + ' - ' + evh.getToDate(), '' + toString_6(evh.getId_0().value_0), -1);
  }
  $clear_5(this$static.evaluationHeaders);
  $addAll_1(this$static.evaluationHeaders, headers);
}

function $setEvaluationSubjectTableData(this$static, evaluationSubject){
  $clear_3(this$static.providerEvaluationSubject.listWrapper);
  $setList(this$static.providerEvaluationSubject, evaluationSubject);
  $setHeight(this$static.tblEvaluations, ($clinit_NotificationTypes() , lineHeight).value_0 * (evaluationSubject.size_1() + 1) + 100 + 'px');
}

function $setStudentListData_2(this$static, bulletins){
  var bulletin, bulletin$iterator;
  !!this$static.bulletins && $clear_5(this$static.bulletins);
  $addAll_1(this$static.bulletins, bulletins);
  $selectClear(this$static.lstBulletins.element);
  $insertItem_0(this$static.lstBulletins, '-', '', -1);
  for (bulletin$iterator = bulletins.iterator(); bulletin$iterator.hasNext();) {
    bulletin = dynamicCast(bulletin$iterator.next_0(), Q$BulletinProxy);
    $insertItem_0(this$static.lstBulletins, bulletin.getStudentName(), '' + toString_6(bulletin.getId_0().value_0), -1);
  }
}

function $setStudentReportData(this$static, report){
  $setText_1(this$static.txtCommentaire, report.getEvaluationNote());
}

function FrmEvaluationInputStudentView_0(){
  this.bulletins = new ArrayList_0;
  this.evaluationHeaders = new ArrayList_0;
  this.providerEvaluationSubject = new ListDataProvider_0;
  this.tblEvaluations = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_20(new FrmEvaluationInputStudentView_BinderImpl$Widgets_0(this));
}

defineSeed(1611, 792, makeCastMap([Q$IsWidget, Q$FrmEvaluationInputStudentPresenter$MyView]), FrmEvaluationInputStudentView_0);
_.asWidget = function asWidget_19(){
  return this.widget;
}
;
_.cmdSave = null;
_.lblClass = null;
_.lblClassMaster = null;
_.lblFromDate = null;
_.lblObjective = null;
_.lblStudentName = null;
_.lblToDate = null;
_.lstBulletins = null;
_.lstClasses = null;
_.lstEcoles = null;
_.lstEvaluationHeaders = null;
_.lstProgrammes = null;
_.lstYears = null;
_.pnlEvaluationMain = null;
_.pnlEvaluationPrint = null;
_.selectedEvaluationSubjectIndex = -1;
_.txtCommentaire = null;
_.widget = null;
function FrmEvaluationInputStudentView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1612, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$1_0);
_.getValue = function getValue_69(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getSubjectName();
}
;
function $update_32(this$static, index, es){
  this$static.this$0.selectedEvaluationSubjectIndex = index;
  $removeEvaluationSubject(dynamicCast(this$static.this$0.uiHandlers, Q$FrmEvaluationInputStudentUiHandler), es);
}

function FrmEvaluationInputStudentView$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1613, 1, {}, FrmEvaluationInputStudentView$10_0);
_.update = function update_33(index, es, value){
  $update_32(this, index, dynamicCast(es, Q$EvaluationSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function FrmEvaluationInputStudentView$11_0(){
  PopupPanel_0.call(this, true);
}

defineSeed(1614, 514, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$PopupPanel, Q$UIObject, Q$Widget, Q$Iterable]), FrmEvaluationInputStudentView$11_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_5(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
  $eventGetTypeInt(event_0.nativeEvent.type) == 128 && (event_0.nativeEvent.keyCode || 0) == 27 && $hide(this);
}
;
function FrmEvaluationInputStudentView$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1615, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), FrmEvaluationInputStudentView$12_0);
_.onClose = function onClose_4(event_0){
  $add_12(this.this$0.pnlEvaluationMain, this.this$0.pnlEvaluationPrint);
  $setHeight(this.this$0.pnlEvaluationPrint, '100%');
  $setColumnWidth_0(this.this$0.tblEvaluations, $getColumn(this.this$0.tblEvaluations, this.this$0.tblEvaluations.columns.size_0 - 1), 5 + ($clinit_Style$Unit() , '%'));
  $setVisible_0(this.this$0.cmdSave, true);
}
;
_.this$0 = null;
function FrmEvaluationInputStudentView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1616, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$2_0);
_.getValue = function getValue_70(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getProfessorName();
}
;
function FrmEvaluationInputStudentView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1617, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$3_0);
_.getValue = function getValue_71(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective1();
}
;
function FrmEvaluationInputStudentView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1618, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$4_0);
_.getValue = function getValue_72(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective2();
}
;
function FrmEvaluationInputStudentView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1619, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$5_0);
_.getValue = function getValue_73(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective3();
}
;
function FrmEvaluationInputStudentView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1620, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$6_0);
_.getValue = function getValue_74(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective4();
}
;
function FrmEvaluationInputStudentView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1621, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$7_0);
_.getValue = function getValue_75(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective5();
}
;
function FrmEvaluationInputStudentView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1622, 466, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$8_0);
_.getValue = function getValue_76(object){
  return dynamicCast(object, Q$EvaluationSubjectProxy).getObjective6();
}
;
function FrmEvaluationInputStudentView$9_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1623, 421, makeCastMap([Q$HasCell, Q$Column]), FrmEvaluationInputStudentView$9_0);
_.getValue = function getValue_77(es){
  return dynamicCast(es, Q$EvaluationSubjectProxy) , 'X';
}
;
function FrmEvaluationInputStudentView_BinderImpl_0(){
}

defineSeed(1624, 1, {}, FrmEvaluationInputStudentView_BinderImpl_0);
function $build_f_HTMLPanel1_20(this$static){
  var attachRecord14, f_HTMLPanel1, pnlEvaluationMain, f_Label2, f_HorizontalPanel3, f_Grid4, f_Label5, f_Label6, lstYears, f_Label7, f_Label8, lstClasses, f_Label9, f_Label10, lstEcoles, f_Label11, f_Label12, lstBulletins, f_Label13, f_Label14, lstProgrammes, f_Label15, f_Label16, lstEvaluationHeaders, cmdPrint, sb, pnlEvaluationPrint, f_VerticalPanel17, f_HorizontalPanel18, f_Image19, f_VerticalPanel20, f_HorizontalPanel25, f_Grid26, f_Label27, lblStudentName, f_Label28, lblClass, f_Label29, lblClassMaster, f_Grid30, f_Label31, lblObjective, f_VerticalPanel32, f_VerticalPanel38, f_Label39, f_Label40, tblEvaluations, f_HorizontalPanel41, f_Label42, txtCommentaire, cmdSave, sb_0, f_Label21, f_Grid22, f_Label23, lblFromDate, f_Label24, lblToDate, f_Label33, f_Label34, f_Label35, f_Label36, f_Label37;
  f_HTMLPanel1 = new HTMLPanel_0($html3_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (pnlEvaluationMain = new VerticalPanel_0 , $add_12(pnlEvaluationMain, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_12(pnlEvaluationMain, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel3, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 6) , $resizeRows(f_Grid4, 4) , $setWidget_3(f_Grid4, 0, 0, (f_Label5 = new Label_0 , f_Label5.element['className'] = 'step' , $setTextOrHtml(f_Label5.directionalTextHelper, '1', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_3(f_Grid4, 0, 1, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_3(f_Grid4, 0, 2, (lstYears = new ListBox_0 , lstYears.element['className'] = 'sis-combobox' , this$static.owner.lstYears = lstYears , lstYears)) , $setWidget_3(f_Grid4, 0, 3, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'step' , $setTextOrHtml(f_Label7.directionalTextHelper, '4', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_3(f_Grid4, 0, 4, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Classes :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_3(f_Grid4, 0, 5, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis-combobox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_3(f_Grid4, 1, 0, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'step' , $setTextOrHtml(f_Label9.directionalTextHelper, '2', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_3(f_Grid4, 1, 1, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_3(f_Grid4, 1, 2, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis-combobox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_3(f_Grid4, 1, 3, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'step' , $setTextOrHtml(f_Label11.directionalTextHelper, '5', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid4, 1, 4, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'El\xE8ves :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid4, 1, 5, (lstBulletins = new ListBox_0 , lstBulletins.element['className'] = 'sis-combobox' , $addDomHandler(lstBulletins, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstBulletins = lstBulletins , lstBulletins)) , $setWidget_3(f_Grid4, 2, 0, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'step' , $setTextOrHtml(f_Label13.directionalTextHelper, '3', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_3(f_Grid4, 2, 1, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Programmes :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_3(f_Grid4, 2, 2, (lstProgrammes = new ListBox_0 , lstProgrammes.element['className'] = 'sis-combobox' , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_3(f_Grid4, 2, 3, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'step' , $setTextOrHtml(f_Label15.directionalTextHelper, '6', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_3(f_Grid4, 2, 4, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, "Rapport d'Evaluations :", false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_3(f_Grid4, 2, 5, (lstEvaluationHeaders = new ListBox_0 , lstEvaluationHeaders.element['className'] = 'sis-combobox' , $addDomHandler(lstEvaluationHeaders, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE) , this$static.owner.lstEvaluationHeaders = lstEvaluationHeaders , lstEvaluationHeaders)) , f_Grid4.tableElem['cellSpacing'] = 3 , f_Grid4.tableElem['cellPadding'] = 2 , f_Grid4)) , $add_10(f_HorizontalPanel3, (cmdPrint = new Button_0 , $setHTML(cmdPrint, (sb = new StringBuilder_0 , sb.impl.string += 'Version imprimm\xE9' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setInnerText(cmdPrint.element, 'Version imprimm\xE9e') , $addDomHandler(cmdPrint, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPrint)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3)) , $add_12(pnlEvaluationMain, (pnlEvaluationPrint = new VerticalPanel_0 , $add_12(pnlEvaluationPrint, (f_VerticalPanel17 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel17, ALIGN_CENTER) , $add_12(f_VerticalPanel17, (f_HorizontalPanel18 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel18, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_10(f_HorizontalPanel18, (f_Image19 = new Image_1 , f_Image19.element.style['height'] = '80px' , f_Image19.element.style['width'] = '234px' , $setUrl(f_Image19, ($clinit_UriUtils() , new SafeUriString_0('images/logo_lemania.png'))) , f_Image19)) , $add_10(f_HorizontalPanel18, (f_VerticalPanel20 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel20, ALIGN_CENTER) , $add_12(f_VerticalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'bulletinTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'EVALUATION INTERMEDIAIRE', false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $add_12(f_VerticalPanel20, (f_Grid22 = new Grid_0 , $resizeColumns(f_Grid22, 4) , $resizeRows(f_Grid22, 1) , $setWidget_3(f_Grid22, 0, 0, (f_Label23 = new Label_0 , f_Label23.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label23.directionalTextHelper, 'DU :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_3(f_Grid22, 0, 1, (lblFromDate = new Label_0 , lblFromDate.element['className'] = 'evaluationText' , $setTextOrHtml(lblFromDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblFromDate) , this$static.owner.lblFromDate = lblFromDate , lblFromDate)) , $setWidget_3(f_Grid22, 0, 2, (f_Label24 = new Label_0 , f_Label24.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label24.directionalTextHelper, 'AU :', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_3(f_Grid22, 0, 3, (lblToDate = new Label_0 , lblToDate.element['className'] = 'evaluationText' , $setTextOrHtml(lblToDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblToDate) , this$static.owner.lblToDate = lblToDate , lblToDate)) , f_Grid22.tableElem['border'] = '0' , f_Grid22.tableElem['cellSpacing'] = 2 , f_Grid22.tableElem['cellPadding'] = 3 , f_Grid22)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20)) , f_HorizontalPanel18.element.style['width'] = '100%' , f_HorizontalPanel18)) , $add_12(f_VerticalPanel17, (f_HorizontalPanel25 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel25, ALIGN_LEFT) , $add_10(f_HorizontalPanel25, (f_Grid26 = new Grid_0 , $resizeColumns(f_Grid26, 2) , $resizeRows(f_Grid26, 3) , $setWidget_3(f_Grid26, 0, 0, (f_Label27 = new Label_0 , f_Label27.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label27.directionalTextHelper, 'El\xE8ve :', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_3(f_Grid26, 0, 1, (lblStudentName = new Label_0 , lblStudentName.element['className'] = 'evaluationText' , $setTextOrHtml(lblStudentName.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblStudentName) , lblStudentName.element.style['width'] = '250px' , this$static.owner.lblStudentName = lblStudentName , lblStudentName)) , $setWidget_3(f_Grid26, 1, 0, (f_Label28 = new Label_0 , f_Label28.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label28.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_3(f_Grid26, 1, 1, (lblClass = new Label_0 , lblClass.element['className'] = 'evaluationText' , $setTextOrHtml(lblClass.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblClass) , this$static.owner.lblClass = lblClass , lblClass)) , $setWidget_3(f_Grid26, 2, 0, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label29.directionalTextHelper, 'Ma\xEEtre de classe :', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $setWidget_3(f_Grid26, 2, 1, (lblClassMaster = new Label_0 , lblClassMaster.element['className'] = 'evaluationText' , $setTextOrHtml(lblClassMaster.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblClassMaster) , this$static.owner.lblClassMaster = lblClassMaster , lblClassMaster)) , f_Grid26.tableElem['cellSpacing'] = 2 , f_Grid26.tableElem['cellPadding'] = 3 , f_Grid26)) , $add_10(f_HorizontalPanel25, (f_Grid30 = new Grid_0 , $resizeColumns(f_Grid30, 1) , $resizeRows(f_Grid30, 2) , $setWidget_3(f_Grid30, 0, 0, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'fieldTitle' , $setTextOrHtml(f_Label31.directionalTextHelper, 'Objectif sp\xE9cifique du semestre :', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $setWidget_3(f_Grid30, 1, 0, (lblObjective = new Label_0 , lblObjective.element['className'] = 'evaluationNote' , $setTextOrHtml(lblObjective.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblObjective) , lblObjective.element.style['height'] = '' , lblObjective.element.style['width'] = '600px' , this$static.owner.lblObjective = lblObjective , lblObjective)) , f_Grid30)) , $add_10(f_HorizontalPanel25, (f_VerticalPanel32 = new VerticalPanel_0 , $add_12(f_VerticalPanel32, (f_Label33 = new Label_0 , f_Label33.element['className'] = 'evaluationNote' , $setTextOrHtml(f_Label33.directionalTextHelper, 'TB = Tr\xE8s Bien', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $add_12(f_VerticalPanel32, (f_Label34 = new Label_0 , f_Label34.element['className'] = 'evaluationNote' , $setTextOrHtml(f_Label34.directionalTextHelper, 'B = Bien', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $add_12(f_VerticalPanel32, (f_Label35 = new Label_0 , f_Label35.element['className'] = 'evaluationNote' , $setTextOrHtml(f_Label35.directionalTextHelper, 'AB = Assez Bien', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $add_12(f_VerticalPanel32, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'evaluationNote' , $setTextOrHtml(f_Label36.directionalTextHelper, 'S = Suffisant', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_12(f_VerticalPanel32, (f_Label37 = new Label_0 , f_Label37.element['className'] = 'evaluationNote' , $setTextOrHtml(f_Label37.directionalTextHelper, 'NA = Non atteint', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , f_VerticalPanel32.element['className'] = 'subSection' , f_VerticalPanel32.element.style['width'] = '90px' , f_VerticalPanel32.table['cellSpacing'] = 3 , f_VerticalPanel32)) , f_HorizontalPanel25.element.style['width'] = '100%' , f_HorizontalPanel25)) , f_VerticalPanel17.element.style['width'] = '100%' , f_VerticalPanel17)) , $add_12(pnlEvaluationPrint, (f_VerticalPanel38 = new VerticalPanel_0 , $add_12(f_VerticalPanel38, (f_Label39 = new Label_0 , f_Label39.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label39.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $add_12(f_VerticalPanel38, (f_Label40 = new Label_0 , f_Label40.element['className'] = 'bulletinTitle' , $setTextOrHtml(f_Label40.directionalTextHelper, "Objectifs d'apprentissage pour l'\xE9l\xE8ve", false) , $updateHorizontalAlignment(f_Label40) , f_Label40)) , $add_12(f_VerticalPanel38, (tblEvaluations = this$static.owner.tblEvaluations , tblEvaluations.element['className'] = 'evaluationNote' , tblEvaluations.element.style['height'] = '200px' , tblEvaluations.element.style['width'] = '100%' , tblEvaluations)) , $add_12(f_VerticalPanel38, (f_HorizontalPanel41 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel41, (f_Label42 = new Label_0 , $setTextOrHtml(f_Label42.directionalTextHelper, "Commentaire(s) \xE9ventuel(s) et pistes d'am\xE9lioration :", false) , $updateHorizontalAlignment(f_Label42) , f_Label42)) , $add_10(f_HorizontalPanel41, (txtCommentaire = new TextArea_1 , txtCommentaire.element['className'] = 'sis-TextArea' , txtCommentaire.element.rows = 5 , txtCommentaire.element.cols = 100 , this$static.owner.txtCommentaire = txtCommentaire , txtCommentaire)) , $add_10(f_HorizontalPanel41, (cmdSave = new Button_0 , $setHTML(cmdSave, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Enregister' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , cmdSave.element['disabled'] = true , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE_0) , this$static.owner.cmdSave = cmdSave , cmdSave)) , f_HorizontalPanel41.element.style['width'] = '100%' , f_HorizontalPanel41.table['cellSpacing'] = 5 , f_HorizontalPanel41)) , f_VerticalPanel38.element.style['width'] = '100%' , f_VerticalPanel38.table['cellSpacing'] = 2 , f_VerticalPanel38)) , pnlEvaluationPrint.element.style['width'] = '100%' , this$static.owner.pnlEvaluationPrint = pnlEvaluationPrint , pnlEvaluationPrint)) , pnlEvaluationMain.element.style['width'] = '100%' , pnlEvaluationMain.table['cellSpacing'] = 2 , this$static.owner.pnlEvaluationMain = pnlEvaluationMain , pnlEvaluationMain), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmEvaluationInputStudentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new FrmEvaluationInputStudentView_BinderImpl$Widgets$7_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1625, 1, {}, FrmEvaluationInputStudentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1626, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_25(event_0){
  $onLstEcolesChange_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1627, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_26(event_0){
  $onLstProgrammesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1628, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_27(event_0){
  $onLstClassesChange_6(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1629, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_28(event_0){
  $onLstBulletinsChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1630, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$5_0);
_.onChange = function onChange_29(event_0){
  $onLstEvaluationHeadersChange(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1631, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$6_0);
_.onClick = function onClick_33(event_0){
  $onCmdSaveClick_3(this.this$1.owner);
}
;
_.this$1 = null;
function FrmEvaluationInputStudentView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1632, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), FrmEvaluationInputStudentView_BinderImpl$Widgets$7_0);
_.onClick = function onClick_34(event_0){
  $onCmdPrintClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html3_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$) {
    result = new FrmEvaluationInputStudentView_0(new FrmEvaluationInputStudentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmEvaluationInputStudentView$_annotation$$none$$;
}

function $$init_18(this$static){
  this$static.shim = new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_18(this);
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_18(this);
}

defineSeed(1811, 679, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_16(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_16(){
  return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_24(){
  return Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_15(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = ($clinit_Boolean() , $isPublished(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'published'), Z_classLit);
  visitor.visitValueProperty('published', value, propertyContext);
  value = $getEvaluationNote(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'evaluationNote'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('evaluationNote', value, propertyContext);
}
;
function $getEvaluationNote(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EvaluationStudentReportProxy).getEvaluationNote();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $isPublished(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EvaluationStudentReportProxy).isPublished();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1812, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationStudentReportProxy]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_44(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).equals$(o);
}
;
_.getEvaluationNote = function getEvaluationNote(){
  return $getEvaluationNote(this);
}
;
_.hashCode$ = function hashCode_44(){
  return dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).hashCode$();
}
;
_.isPublished = function isPublished(){
  return $isPublished(this);
}
;
_.toString$ = function toString_33(){
  return dynamicCast($getWrapped(this.this$0), Q$EvaluationStudentReportProxy).toString$();
}
;
_.this$0 = null;
function EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1813, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EvaluationStudentReportProxy]), EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_45(other){
  return equals_14(this.this$0, other);
}
;
_.getEvaluationNote = function getEvaluationNote_0(){
  return dynamicCast($getOrReify(this.this$0, 'evaluationNote'), Q$String);
}
;
_.hashCode$ = function hashCode_45(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.isPublished = function isPublished_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'published'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
_.this$0 = null;
function $clinit_EvaluationStudentReportRequestFactoryImpl(){
  $clinit_EvaluationStudentReportRequestFactoryImpl = nullMethod;
  tokensToTypes_14 = new HashMap_0;
  typesToTokens_14 = new HashMap_0;
  entityProxyTypes_14 = new HashSet_0;
  valueProxyTypes_14 = new HashSet_0;
  tokensToTypes_14.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_14.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_14, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_14.put('zDO6nJz4$8Dg$3a6A_gczL9R70U=', Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit);
  typesToTokens_14.put(Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, 'zDO6nJz4$8Dg$3a6A_gczL9R70U=');
  $add_21(entityProxyTypes_14, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit);
}

function EvaluationStudentReportRequestFactoryImpl_0(){
  $clinit_EvaluationStudentReportRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1961, 713, {}, EvaluationStudentReportRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_14(){
  return 'com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_14(typeToken){
  return dynamicCast(tokensToTypes_14.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_18(type){
  return dynamicCast(typesToTokens_14.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_15(type){
  return $contains_1(entityProxyTypes_14, type);
}
;
_.isValueType = function isValueType_15(type){
  return $contains_1(valueProxyTypes_14, type);
}
;
var entityProxyTypes_14, tokensToTypes_14, typesToTokens_14, valueProxyTypes_14;
function $load(this$static, bulletinId, evaluationHeaderId){
  var x;
  x = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0(this$static, bulletinId, evaluationHeaderId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1962, 723, makeCastMap([Q$AbstractRequestContext]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_14(){
  return !FACTORY_15 && (FACTORY_15 = new EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0) , FACTORY_15;
}
;
var FACTORY_15 = null;
function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0(this$0, val$bulletinId, val$evaluationHeaderId){
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1963, 722, makeCastMap([Q$AbstractRequest]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_62(){
  return new RequestData_0('KWtmJ462MBas1XNFHC_uRLgJfVA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$evaluationHeaderId]), this.propertyRefs, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$evaluationHeaderId = null;
function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0(this$0, val$bulletinId, val$evaluationHeaderId, val$commentaire){
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  this.val$commentaire = val$commentaire;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1964, 722, makeCastMap([Q$AbstractRequest]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_63(){
  return new RequestData_0('wmCOemTRKPpGILtFSX3Plf1_GUM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId, this.val$evaluationHeaderId, this.val$commentaire]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$bulletinId = null;
_.val$commentaire = null;
_.val$evaluationHeaderId = null;
function $getConstructors_com_lemania_sis_shared_EvaluationStudentReportProxy(){
  return [function(factory){
    return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1965, 651, makeCastMap([Q$EnumMap]), EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_15(map){
  $add_16(map, Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit, $getConstructors_com_lemania_sis_shared_EvaluationStudentReportProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_15(){
}
;
function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0(this$0, val$classId, val$bulletinId, val$evaluationHeaderId){
  this.val$classId = val$classId;
  this.val$bulletinId = val$bulletinId;
  this.val$evaluationHeaderId = val$evaluationHeaderId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1968, 722, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_64(){
  return new RequestData_0('o68wJniv4IFPQgtXb3kL2iaY1gI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$classId, this.val$bulletinId, this.val$evaluationHeaderId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_EvaluationSubjectProxy_2_classLit);
}
;
_.val$bulletinId = null;
_.val$classId = null;
_.val$evaluationHeaderId = null;
function EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$4X_0(this$0, val$ecole){
  this.val$ecole = val$ecole;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1970, 722, makeCastMap([Q$AbstractRequest]), EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_66(){
  return new RequestData_0('EDtQQpngFQzRcWpmiLnNWAD5xIU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecole]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$ecole = null;
function $checkClassMasterRole(this$static, userId, profId){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$3X_0(this$static, userId, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$3X_0(this$0, val$userId, val$profId){
  this.val$userId = val$userId;
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(2036, 722, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_100(){
  return new RequestData_0('VCJZhVfd7Zlw_38bJChI8YlsSRs=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userId, this.val$profId]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profId = null;
_.val$userId = null;
var Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter', 1317), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$1', 1318), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$2', 1320), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$3', 1321), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$4', 1322), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$5', 1323), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$6', 1324), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$7', 1325), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$8', 1326), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$9', 1327), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenter$10', 1319), Lcom_lemania_sis_client_event_CheckClassMasterRoleEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'CheckClassMasterRoleEvent', 846), Lcom_lemania_sis_client_event_EvaluationStudentReportLoadEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'EvaluationStudentReportLoadEvent', 851), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$1', 1329), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$1$1', 1330), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$3', 1333), Lcom_lemania_sis_client_presenter_FrmEvaluationInputStudentPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmEvaluationInputStudentPresenterMyProxyImpl$3$1', 1334), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView', 1611), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$1', 1612), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$2', 1616), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$3', 1617), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$4', 1618), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$5', 1619), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$6', 1620), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$7', 1621), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$8', 1622), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$9', 1623), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$10', 1613), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$11', 1614), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView$12', 1615), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl', 1624), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets', 1625), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$1', 1626), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$2', 1627), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$3', 1628), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$4', 1629), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$5', 1630), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$6', 1631), Lcom_lemania_sis_client_view_FrmEvaluationInputStudentView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmEvaluationInputStudentView_BinderImpl$Widgets$7', 1632), Lcom_lemania_sis_shared_EvaluationStudentReportProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'EvaluationStudentReportProxy'), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactoryImpl', 1961), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl', 1962), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$2X', 1963), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl$4X', 1964), Lcom_lemania_sis_shared_user_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.user.', 'UserRequestFactory_UserRequestContextImpl$3X', 2036), Lcom_lemania_sis_shared_service_EvaluationStudentReportRequestFactory_1EvaluationStudentReportRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationStudentReportRequestFactory_EvaluationStudentReportRequestContextImpl_FactoryImpl', 1965), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1811), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1812), Lcom_lemania_sis_shared_EvaluationStudentReportProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'EvaluationStudentReportProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1813), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$2X', 1968), Lcom_lemania_sis_shared_service_EvaluationSubjectRequestFactory_1EvaluationSubjectRequestContextImpl$4X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'EvaluationSubjectRequestFactory_EvaluationSubjectRequestContextImpl$4X', 1970);
$entry(onLoad)(15);
