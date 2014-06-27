function $redrawRow(this$static, absRowIndex){
  var relRowIndex;
  relRowIndex = absRowIndex - $getVisibleRange(this$static.presenter).start;
  $checkRowBounds(this$static, relRowIndex);
  $setRowData(this$static, absRowIndex, ($clinit_Collections() , new Collections$SingletonList_0(($checkRowBounds(this$static, relRowIndex) , $getVisibleItem(this$static.presenter, relRowIndex)))));
}

function ProfileBrancheAfterAddEvent_0(profileSubjectId, lastPosition){
  $clinit_ProfileBrancheAfterAddEvent();
  this.subjectLastPosition = valueOf_1(-1);
  this.profileSubjectId = profileSubjectId;
  this.subjectLastPosition = lastPosition;
}

defineSeed(799, 235, {}, ProfileBrancheAfterAddEvent_0);
_.dispatch_0 = function dispatch_51(handler){
  dynamicCast(handler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler).onProfileBrancheAfterAdd(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_52(){
  return TYPE_51;
}
;
_.profileSubjectId = '';
function $addBrancheToProfile(this$static, profileSubjectId, brancheId, brancheCoef, subjectLastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileSubjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Mati\xE8re');
    return;
  }
  if (!brancheId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Branche');
    return;
  }
  if (!$matches(brancheCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la branche');
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(rc, profileSubjectId, brancheId, brancheCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$8_0(this$static, profileSubjectId, subjectLastPosition));
}

function $addSubjectToProfile(this$static, profileId, subjectId, professorId, subjectCoef){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  if (!subjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Mati\xE8re');
    return;
  }
  if (!$matches(subjectCoef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la mati\xE8re');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(rc, profileId, subjectId, professorId, subjectCoef) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$7_0(this$static));
}

function $createNewProfile(this$static, profileName, classId){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!profileName.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Nom du profil');
    return;
  }
  if (!classId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Classe');
    return;
  }
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire((x = new ProfileRequestFactory_ProfileRequestContextImpl$8X_0(rc, profileName, classId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$5_0(this$static, classId));
}

function $loadProfessorList_0(this$static, subjectId, classId){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAllProfessorBySubject(rc, subjectId, classId), new ProfileManagementPresenter$6_0(this$static));
}

function $loadProfileList(this$static, classId){
  var rc, rf;
  rf = new ProfileRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileRequestFactory_ProfileRequestContextImpl_0(rf);
  $fire($listAllActiveByClass_0(rc, classId), new ProfileManagementPresenter$4_0(this$static));
}

function $onClassChanged_1(this$static, classId){
  if (!classId.length)
    return;
  $loadProfileList(this$static, classId);
}

function $onProfileBrancheAfterAdd(this$static, event_0){
  var rc, rf;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($calculateTotalBrancheCoef(rc, event_0.profileSubjectId), new ProfileManagementPresenter$12_0(this$static, event_0));
}

function $onProfileChanged_0(this$static, profileId){
  var rc, rf;
  if (!profileId.length) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Profil');
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire($listAll_7(rc, profileId), new ProfileManagementPresenter$9_0(this$static));
}

function $onSubjectSelected_1(this$static, profileSubjectId){
  var rc, rf, x;
  if (!profileSubjectId.length) {
    alert_0(($clinit_NotificationTypes() , 'Merci de choisir une mati\xE8re.'));
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(rc, profileSubjectId) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$11_0(this$static));
}

function $removeBranche_0(this$static, bp, profileSubjectId, subjectLastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(rc, bp) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$13_0(this$static, profileSubjectId, subjectLastPosition));
}

function $removeSubject_0(this$static, ps){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$14_0(this$static));
}

function $updateProfileBranche(this$static, pb, coef, profileSubjectId, lastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la branche');
    return;
  }
  if (pb.getBrancheCoef().value_0 == ($clinit_Double() , __parseAndValidateDouble(coef)))
    return;
  rf = new ProfileBrancheRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(rf);
  pb = dynamicCast($editProxy(rc, pb), Q$ProfileBrancheProxy);
  pb.setBrancheCoef(new Double_0(__parseAndValidateDouble(coef)));
  $fire((x = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0(rc, pb) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$15_0(this$static, profileSubjectId, lastPosition));
}

function $updateProfileSubject(this$static, ps, coef, isActive, lastPosition){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!$matches(coef, '-?\\d+(\\.\\d+)?')) {
    alert_0(($clinit_NotificationTypes() , 'Donn\xE9e Invalide') + ' - Coefficient de la mati\xE8re');
    return;
  }
  if (ps.getSubjectCoef().value_0 == ($clinit_Double() , __parseAndValidateDouble(coef)))
    if ($equals_3(ps.getIsActive(), isActive))
      return;
  rf = new ProfileSubjectRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl_0(rf);
  ps = dynamicCast($editProxy(rc, ps), Q$ProfileSubjectProxy);
  ps.setSubjectCoef(new Double_0(__parseAndValidateDouble(coef)));
  ps.setIsActive(isActive);
  $fire((x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(rc, ps) , $addInvocation(rc.state.dialect, x) , x), new ProfileManagementPresenter$10_0(this$static, lastPosition));
}

function ProfileManagementPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1141, 731, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler, Q$ProfileManagementPresenter, Q$ProfileManagementUiHandler]), ProfileManagementPresenter_0);
_.onBind = function onBind_26(){
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView).setUiHandlers(this);
  $initializeTables_1(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_45(event_0){
  this.currentUser = event_0.currentUser;
  dynamicCast(this.view, Q$ProfileManagementPresenter$MyView);
}
;
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd(event_0){
  $onProfileBrancheAfterAdd(this, event_0);
}
;
_.onReset = function onReset_25(){
  var rf, rc, rf_0, rc_0, rf_1, rc_1;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('profilemgt'), null);
  $resetForm_12(dynamicCast(this.view, Q$ProfileManagementPresenter$MyView));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc), new ProfileManagementPresenter$1_0(this));
  rf_0 = new SubjectRequestFactoryImpl_0;
  $initialize_0(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf_0);
  $fire($listAllActive_3(rc_0), new ProfileManagementPresenter$3_0(this));
  rf_1 = new BrancheRequestFactoryImpl_0;
  $initialize_0(rf_1, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_1 = new BrancheRequestFactory_BrancheRequestContextImpl_0(rf_1);
  $fire($listAll_1(rc_1), new ProfileManagementPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_22(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_105(this$static, response){
  $setClassList_1(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1142, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$1_0);
_.onFailure_0 = function onFailure_114(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_114(response){
  $onSuccess_105(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_106(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$lastPosition);
}

function ProfileManagementPresenter$10_0(this$0, val$lastPosition){
  this.this$0 = this$0;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(1143, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$10_0);
_.onFailure_0 = function onFailure_115(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_115(response){
  $onSuccess_106(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
function $onSuccess_107(this$static, response){
  $setBrancheTableData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1144, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$11_0);
_.onFailure_0 = function onFailure_116(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_116(response){
  $onSuccess_107(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_108(this$static, response){
  $showUpdatedProfileSubject(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response, this$static.val$event.subjectLastPosition);
}

function ProfileManagementPresenter$12_0(this$0, val$event){
  this.this$0 = this$0;
  this.val$event = val$event;
}

defineSeed(1145, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$12_0);
_.onFailure_0 = function onFailure_117(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_117(response){
  $onSuccess_108(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
_.val$event = null;
function $onSuccess_109(this$static){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $removeProfileBrancheFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
}

function ProfileManagementPresenter$13_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(1146, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$13_0);
_.onFailure_0 = function onFailure_118(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_118(response){
  $onSuccess_109(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_110(this$static, deleted){
  deleted.value_0?$removeProfileSubjectFromTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView)):alert_0(($clinit_NotificationTypes() , 'Merci de supprimer toutes les branches de cette mati\xE8re avant la supprimer.'));
}

function ProfileManagementPresenter$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1147, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$14_0);
_.onFailure_0 = function onFailure_119(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_119(deleted){
  $onSuccess_110(this, dynamicCast(deleted, Q$Boolean));
}
;
_.this$0 = null;
function $onSuccess_111(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$lastPosition), null);
  $showUpdatedProfileBranche(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$15_0(this$0, val$profileSubjectId, val$lastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$lastPosition = val$lastPosition;
}

defineSeed(1148, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$15_0);
_.onFailure_0 = function onFailure_120(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_120(response){
  $onSuccess_111(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$lastPosition = null;
_.val$profileSubjectId = null;
function $onSuccess_112(this$static, response){
  $setBrancheListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1149, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$2_0);
_.onFailure_0 = function onFailure_121(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_121(response){
  $onSuccess_112(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_113(this$static, response){
  $setSubjectListData_2(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1150, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$3_0);
_.onFailure_0 = function onFailure_122(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_122(response){
  $onSuccess_113(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_114(this$static, response){
  $setProfileListData_1(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1151, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$4_0);
_.onFailure_0 = function onFailure_123(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_123(response){
  $onSuccess_114(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_115(this$static){
  $resetForm_12(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView));
  $loadProfileList(this$static.this$0, this$static.val$classId);
}

function ProfileManagementPresenter$5_0(this$0, val$classId){
  this.this$0 = this$0;
  this.val$classId = val$classId;
}

defineSeed(1152, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$5_0);
_.onFailure_0 = function onFailure_124(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_124(response){
  $onSuccess_115(this, dynamicCast(response, Q$ProfileProxy));
}
;
_.this$0 = null;
_.val$classId = null;
function $onSuccess_116(this$static, response){
  $setProfessorListData_0(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1153, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$6_0);
_.onFailure_0 = function onFailure_125(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_125(response){
  $onSuccess_116(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_117(this$static, response){
  $addNewProfileSubjectToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1154, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$7_0);
_.onFailure_0 = function onFailure_126(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_126(response){
  $onSuccess_117(this, dynamicCast(response, Q$ProfileSubjectProxy));
}
;
_.this$0 = null;
function $onSuccess_118(this$static, response){
  $doFire(this$static.this$0.eventBus, new ProfileBrancheAfterAddEvent_0(this$static.val$profileSubjectId, this$static.val$subjectLastPosition), null);
  $addNewProfileBrancheToTable(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$8_0(this$0, val$profileSubjectId, val$subjectLastPosition){
  this.this$0 = this$0;
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$subjectLastPosition = val$subjectLastPosition;
}

defineSeed(1155, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$8_0);
_.onFailure_0 = function onFailure_127(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_127(response){
  $onSuccess_118(this, dynamicCast(response, Q$ProfileBrancheProxy));
}
;
_.this$0 = null;
_.val$profileSubjectId = null;
_.val$subjectLastPosition = null;
function $onSuccess_119(this$static, response){
  $setSubjectTableData(dynamicCast(this$static.this$0.view, Q$ProfileManagementPresenter$MyView), response);
}

function ProfileManagementPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1156, 670, makeCastMap([Q$Receiver]), ProfileManagementPresenter$9_0);
_.onFailure_0 = function onFailure_128(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_128(response){
  $onSuccess_119(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(1157, 762, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfileBrancheAfterAddEvent$ProfileBrancheAfterAddHandler]));
_.onProfileBrancheAfterAdd = function onProfileBrancheAfterAdd_0(event_0){
  $getPresenter_0(this, new ProfileManagementPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_36(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new ProfileManagementPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function ProfileManagementPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1158, 744, {}, ProfileManagementPresenterMyProxyImpl$1_0);
_.success = function success_38(presenter){
  $success_36(this, dynamicCast(presenter, Q$ProfileManagementPresenter));
}
;
_.val$event = null;
function ProfileManagementPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(1159, 1, {}, ProfileManagementPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_64(){
  $onProfileBrancheAfterAdd(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$) {
    result = new ProfileManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$;
}

defineSeed(1254, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_170(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfileManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addNewProfileBrancheToTable(this$static, branche){
  $add_15(this$static.brancheDataProvider.listWrapper, branche);
  $refresh(this$static.brancheDataProvider);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.brancheDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $addNewProfileSubjectToTable(this$static, profileSubject){
  $add_15(this$static.subjectDataProvider.listWrapper, profileSubject);
  $refresh(this$static.subjectDataProvider);
  $setHeight(this$static.tblSubjects, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * this$static.subjectDataProvider.listWrapper.list.size_1() + headerHeight.value_0) + 'px');
}

function $initializeTables_1(this$static){
  var colSubjectName, colCoef, colProf, cellActive, colActive, colTotalBrancheCoef, colDelete, selectionModel, colBrancheName, colCoef_0, colDelete_0;
  colSubjectName = new ProfileManagementView$1_0;
  $setColumnWidth_0(this$static.tblSubjects, colSubjectName, 30 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblSubjects, colSubjectName, 'Mati\xE8re');
  colCoef = new ProfileManagementView$2_0(new EditTextCell_0);
  $setFieldUpdater(colCoef, new ProfileManagementView$3_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colCoef, '10%');
  $addColumn(this$static.tblSubjects, colCoef, 'Coefficient');
  colProf = new ProfileManagementView$4_0;
  $addColumn(this$static.tblSubjects, colProf, 'Professeur');
  cellActive = new CheckboxCell_0;
  colActive = new ProfileManagementView$5_0(cellActive);
  $setFieldUpdater(colActive, new ProfileManagementView$6_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colActive, '10%');
  $addColumn(this$static.tblSubjects, colActive, 'Active');
  colTotalBrancheCoef = new ProfileManagementView$7_0;
  $setColumnWidth_0(this$static.tblSubjects, colTotalBrancheCoef, '10%');
  $addColumn(this$static.tblSubjects, colTotalBrancheCoef, 'Branche Coefs');
  colDelete = new ProfileManagementView$8_0(new ButtonCell_0);
  $setFieldUpdater(colDelete, new ProfileManagementView$9_0(this$static));
  $setColumnWidth_0(this$static.tblSubjects, colDelete, '10%');
  $addColumn(this$static.tblSubjects, colDelete, '');
  $addDataDisplay(this$static.subjectDataProvider, this$static.tblSubjects);
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblSubjects, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfileManagementView$10_0(this$static, selectionModel));
  colBrancheName = new ProfileManagementView$11_0;
  $setColumnWidth_0(this$static.tblBranches, colBrancheName, '60%');
  $addColumn(this$static.tblBranches, colBrancheName, 'Branche');
  colCoef_0 = new ProfileManagementView$12_0(new EditTextCell_0);
  $setFieldUpdater(colCoef_0, new ProfileManagementView$13_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colCoef_0, '20%');
  $addColumn(this$static.tblBranches, colCoef_0, 'Coefficient');
  colDelete_0 = new ProfileManagementView$14_0(new ButtonCell_0);
  $setFieldUpdater(colDelete_0, new ProfileManagementView$15_0(this$static));
  $setColumnWidth_0(this$static.tblBranches, colDelete_0, '20%');
  $addColumn(this$static.tblBranches, colDelete_0, '');
  $addDataDisplay(this$static.brancheDataProvider, this$static.tblBranches);
}

function $onCmdAddBrancheClick_0(this$static){
  if (!this$static.selectedSubject) {
    alert_0(($clinit_NotificationTypes() , 'Merci de choisir une mati\xE8re.'));
    return;
  }
  !!this$static.uiHandlers && !!this$static.selectedSubject && $addBrancheToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this$static.selectedSubject.getId_0().value_0), $getValue_2(this$static.lstBranches, this$static.lstBranches.element.selectedIndex), $getPropertyString(this$static.txtBrancheCoef.element, 'value'), valueOf_1(this$static.selectedSubjectIndex));
}

function $onCmdAddSubjectClick_0(this$static){
  !!this$static.uiHandlers && $addSubjectToProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstProfessors, this$static.lstProfessors.element.selectedIndex), $getPropertyString(this$static.txtSubjectCoef.element, 'value'));
}

function $onCmdCreateNewProfileClick(this$static){
  $setText_1(this$static.txtNewProfileName, '');
  $setVisible_0(this$static.pnlAddNewProfile, true);
}

function $onCmdSaveNewProfileClick(this$static){
  !!this$static.uiHandlers && $createNewProfile(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getPropertyString(this$static.txtNewProfileName.element, 'value'), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstClassesChange_7(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onClassChanged_1(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $onLstProfilesChange_0(this$static){
  $setSelected_0(this$static.tblSubjects.presenter.selectionModel, this$static.selectedSubject, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  !!this$static.uiHandlers && $onProfileChanged_0(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstProfiles, this$static.lstProfiles.element.selectedIndex));
}

function $onLstSubjectsChange_0(this$static){
  !!this$static.uiHandlers && $loadProfessorList_0(dynamicCast(this$static.uiHandlers, Q$ProfileManagementUiHandler), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $removeProfileBrancheFromTable(this$static){
  $remove_12(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex);
  $refresh(this$static.brancheDataProvider);
}

function $removeProfileSubjectFromTable(this$static){
  $remove_12(this$static.subjectDataProvider.listWrapper, this$static.selectedSubjectIndex);
  $refresh(this$static.subjectDataProvider);
}

function $resetForm_12(this$static){
  $setVisible_0(this$static.pnlAddNewProfile, false);
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $selectClear(this$static.lstProfiles.element);
  $selectClear(this$static.lstSubjects.element);
  $selectClear(this$static.lstProfessors.element);
  $selectClear(this$static.lstBranches.element);
  $setText_1(this$static.txtSubjectCoef, '');
  $setText_1(this$static.txtBrancheCoef, '');
}

function $setBrancheListData_0(this$static, brancheList){
  var branche, branche$iterator;
  $selectClear(this$static.lstBranches.element);
  $insertItem(this$static.lstBranches, '-', '', -1);
  for (branche$iterator = brancheList.iterator(); branche$iterator.hasNext();) {
    branche = dynamicCast(branche$iterator.next_0(), Q$BrancheProxy);
    $insertItem(this$static.lstBranches, branche.getBrancheName(), '' + toString_6(branche.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstBranches, 0);
}

function $setBrancheTableData_0(this$static, branches){
  $clear_3(this$static.brancheDataProvider.listWrapper);
  $setList(this$static.brancheDataProvider, branches);
  $setHeight(this$static.tblBranches, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * branches.size_1() + headerHeight.value_0) + 'px');
}

function $setClassList_1(this$static, classes){
  var classe, classe$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (classe$iterator = classes.iterator(); classe$iterator.hasNext();) {
    classe = dynamicCast(classe$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, classe.getClassName(), '' + toString_6(classe.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstClasses, 0);
}

function $setProfessorListData_0(this$static, profs){
  var prof, prof$iterator;
  $selectClear(this$static.lstProfessors.element);
  $insertItem(this$static.lstProfessors, '-', '', -1);
  for (prof$iterator = profs.iterator(); prof$iterator.hasNext();) {
    prof = dynamicCast(prof$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfessors, prof.getProfName(), '' + toString_6(prof.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfessors, 0);
}

function $setProfileListData_1(this$static, profiles){
  var profile, profile$iterator;
  $selectClear(this$static.lstProfiles.element);
  $insertItem(this$static.lstProfiles, '-', '', -1);
  for (profile$iterator = profiles.iterator(); profile$iterator.hasNext();) {
    profile = dynamicCast(profile$iterator.next_0(), Q$ProfileProxy);
    $insertItem(this$static.lstProfiles, profile.getProfileName(), '' + toString_6(profile.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstProfiles, 0);
}

function $setSubjectListData_2(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
  $setSelectedIndex_0(this$static.lstSubjects, 0);
}

function $setSubjectTableData(this$static, subjects){
  $clear_3(this$static.subjectDataProvider.listWrapper);
  $addAll(this$static.subjectDataProvider.listWrapper, subjects);
  $flushNow(this$static.subjectDataProvider.listWrapper);
  $refresh(this$static.subjectDataProvider);
  $ensurePendingState(this$static.tblSubjects.presenter).redrawRequired = true;
  $setHeight(this$static.tblSubjects, '' + (($clinit_NotificationTypes() , lineHeightShortList).value_0 * subjects.size_1() + headerHeight.value_0) + 'px');
}

function $showUpdatedProfileBranche(this$static, pb){
  $set_1(this$static.brancheDataProvider.listWrapper, this$static.selectedBrancheIndex, pb);
}

function $showUpdatedProfileSubject(this$static, ps, subjectLastIndex){
  $set_1(this$static.subjectDataProvider.listWrapper, subjectLastIndex.value_0, ps);
}

function ProfileManagementView_0(){
  this.subjectDataProvider = new ListDataProvider_0;
  this.brancheDataProvider = new ListDataProvider_0;
  this.tblSubjects = new DataGrid_0;
  this.tblBranches = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_23(new ProfileManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1500, 736, makeCastMap([Q$IsWidget, Q$ProfileManagementPresenter$MyView]), ProfileManagementView_0);
_.asWidget = function asWidget_25(){
  return this.widget;
}
;
_.lstBranches = null;
_.lstClasses = null;
_.lstProfessors = null;
_.lstProfiles = null;
_.lstSubjects = null;
_.pnlAddNewProfile = null;
_.selectedBrancheIndex = 0;
_.selectedSubject = null;
_.selectedSubjectIndex = 0;
_.txtBrancheCoef = null;
_.txtNewProfileName = null;
_.txtSubjectCoef = null;
_.widget = null;
function ProfileManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1501, 413, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$1_0);
_.getValue = function getValue_72(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getSubjectName();
}
;
function ProfileManagementView$10_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1502, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfileManagementView$10_0);
_.onSelectionChange = function onSelectionChange_6(event_0){
  this.this$0.selectedSubject = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfileSubjectProxy);
  if (this.this$0.selectedSubject) {
    this.this$0.selectedSubjectIndex = $indexOf_0(this.this$0.subjectDataProvider.listWrapper, this.this$0.selectedSubject);
    $onSubjectSelected_1(dynamicCast(this.this$0.uiHandlers, Q$ProfileManagementUiHandler), '' + toString_6(this.this$0.selectedSubject.getId_0().value_0));
    $redrawRow(this.this$0.tblSubjects, this.this$0.selectedSubjectIndex);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfileManagementView$11_0(){
  TextColumn_0.call(this);
}

defineSeed(1503, 413, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$11_0);
_.getValue = function getValue_73(object){
  return dynamicCast(object, Q$ProfileBrancheProxy).getProfileBrancheName();
}
;
function $getValue_12(object){
  return $clinit_Double() , '' + object.getBrancheCoef().value_0;
}

function ProfileManagementView$12_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1504, 386, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$12_0);
_.getValue = function getValue_74(object){
  return $getValue_12(dynamicCast(object, Q$ProfileBrancheProxy));
}
;
function $update_32(this$static, index, branche, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedBrancheIndex = index;
    $updateProfileBranche(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), branche, value, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1505, 1, {}, ProfileManagementView$13_0);
_.update = function update_33(index, branche, value){
  $update_32(this, index, dynamicCast(branche, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$14_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1506, 386, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$14_0);
_.getValue = function getValue_75(bp){
  return dynamicCast(bp, Q$ProfileBrancheProxy) , 'X';
}
;
function $update_33(this$static, index, bp){
  this$static.this$0.selectedBrancheIndex = index;
  $removeBranche_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), bp, '' + toString_6(this$static.this$0.selectedSubject.getId_0().value_0), valueOf_1(this$static.this$0.selectedSubjectIndex));
}

function ProfileManagementView$15_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1507, 1, {}, ProfileManagementView$15_0);
_.update = function update_34(index, bp, value){
  $update_33(this, index, dynamicCast(bp, Q$ProfileBrancheProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function $getValue_13(object){
  return $clinit_Double() , '' + object.getSubjectCoef().value_0;
}

function ProfileManagementView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1508, 386, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$2_0);
_.getValue = function getValue_76(object){
  return $getValue_13(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function $update_34(this$static, index, subject, value){
  if (!subject.equals$(this$static.this$0.selectedSubject))
    return;
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, value, subject.getIsActive(), valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1509, 1, {}, ProfileManagementView$3_0);
_.update = function update_35(index, subject, value){
  $update_34(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1510, 413, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$4_0);
_.getValue = function getValue_77(object){
  return dynamicCast(object, Q$ProfileSubjectProxy).getProfName();
}
;
function ProfileManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1511, 386, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$5_0);
_.getValue = function getValue_78(subject){
  return dynamicCast(subject, Q$ProfileSubjectProxy).getIsActive();
}
;
function $update_35(this$static, index, subject, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedSubjectIndex = index;
    $updateProfileSubject(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), subject, ($clinit_Double() , '' + subject.getSubjectCoef().value_0), value, valueOf_1(this$static.this$0.selectedSubjectIndex));
  }
}

function ProfileManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1512, 1, {}, ProfileManagementView$6_0);
_.update = function update_36(index, subject, value){
  $update_35(this, index, dynamicCast(subject, Q$ProfileSubjectProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function $getValue_14(object){
  return $clinit_Double() , '' + object.getTotalBrancheCoef().value_0;
}

function ProfileManagementView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1513, 413, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$7_0);
_.getValue = function getValue_79(object){
  return $getValue_14(dynamicCast(object, Q$ProfileSubjectProxy));
}
;
function ProfileManagementView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1514, 386, makeCastMap([Q$HasCell, Q$Column]), ProfileManagementView$8_0);
_.getValue = function getValue_80(bp){
  return dynamicCast(bp, Q$ProfileSubjectProxy) , 'X';
}
;
function $update_36(this$static, index, ps){
  this$static.this$0.selectedSubjectIndex = index;
  $removeSubject_0(dynamicCast(this$static.this$0.uiHandlers, Q$ProfileManagementUiHandler), ps);
}

function ProfileManagementView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1515, 1, {}, ProfileManagementView$9_0);
_.update = function update_37(index, ps, value){
  $update_36(this, index, dynamicCast(ps, Q$ProfileSubjectProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfileManagementView_BinderImpl_0(){
}

defineSeed(1516, 1, {}, ProfileManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_23(this$static){
  var attachRecord20, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_Grid5, f_Label6, lstClasses, f_Label7, lstProfiles, cmdCreateNewProfile, pnlAddNewProfile, f_Grid8, f_VerticalPanel9, f_VerticalPanel18, txtNewProfileName, cmdSaveNewProfile, f_Label10, tblSubjects, f_VerticalPanel11, f_Label12, f_Grid13, f_Label14, lstSubjects, f_Label15, txtSubjectCoef, f_Label16, lstProfessors, f_Label17, cmdAddSubject, f_Label19, tblBranches, f_VerticalPanel20, f_Label21, f_Grid22, f_Label23, lstBranches, f_Label24, txtBrancheCoef, f_Label25, cmdAddBranche, f_Label26;
  f_HTMLPanel1 = new HTMLPanel_0($html1_16(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord20 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord20.origParent?$insertBefore(attachRecord20.origParent, attachRecord20.element, attachRecord20.origSibling):orphan(attachRecord20.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'GESTION DES PROGRAMMES / CLASSES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_12(f_VerticalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 4) , $resizeRows(f_Grid5, 2) , $setWidget_2(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir une classe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_2(f_Grid5, 0, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_2(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Liste des programmes de la classe choisie :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_2(f_Grid5, 1, 1, (lstProfiles = new ListBox_0 , lstProfiles.element['className'] = 'sis_textbox' , $addDomHandler(lstProfiles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.lstProfiles = lstProfiles , lstProfiles)) , $setWidget_2(f_Grid5, 1, 2, (cmdCreateNewProfile = new Button_0 , $setInnerText(cmdCreateNewProfile.element, 'Cr\xE9er un nouveau programme') , $addDomHandler(cmdCreateNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCreateNewProfile)) , $setWidget_2(f_Grid5, 1, 3, (pnlAddNewProfile = new FlowPanel_0 , $add_8(pnlAddNewProfile, (txtNewProfileName = new TextBox_0 , this$static.owner.txtNewProfileName = txtNewProfileName , txtNewProfileName)) , $add_8(pnlAddNewProfile, (cmdSaveNewProfile = new Button_0 , $setInnerText(cmdSaveNewProfile.element, 'Enregistrer') , $addDomHandler(cmdSaveNewProfile, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdSaveNewProfile)) , setVisible(pnlAddNewProfile.element, false) , this$static.owner.pnlAddNewProfile = pnlAddNewProfile , pnlAddNewProfile)) , f_Grid5.tableElem['cellSpacing'] = 2 , f_Grid5.tableElem['cellPadding'] = 3 , f_Grid5)) , $add_12(f_VerticalPanel4, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 1) , $setWidget_2(f_Grid8, 0, 0, (f_VerticalPanel9 = new VerticalPanel_0 , $add_12(f_VerticalPanel9, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Liste des mati\xE8re du programme choisi', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_12(f_VerticalPanel9, (tblSubjects = this$static.owner.tblSubjects , tblSubjects.element.style['height'] = '350px' , tblSubjects.element.style['width'] = '100%' , tblSubjects)) , $add_12(f_VerticalPanel9, (f_VerticalPanel11 = new VerticalPanel_0 , $add_12(f_VerticalPanel11, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label12.directionalTextHelper, 'Rajouter une mati\xE8re', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_12(f_VerticalPanel11, (f_Grid13 = new Grid_0 , $resizeColumns(f_Grid13, 4) , $resizeRows(f_Grid13, 3) , $setWidget_2(f_Grid13, 0, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_2(f_Grid13, 0, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , lstSubjects.element.style['width'] = '' , $addDomHandler(lstSubjects, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_2(f_Grid13, 0, 2, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_2(f_Grid13, 0, 3, (txtSubjectCoef = new DoubleBox_0 , txtSubjectCoef.element.style['width'] = '50px' , this$static.owner.txtSubjectCoef = txtSubjectCoef , txtSubjectCoef)) , $setWidget_2(f_Grid13, 1, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_2(f_Grid13, 1, 1, (lstProfessors = new ListBox_0 , lstProfessors.element['className'] = 'sis_textbox' , lstProfessors.element.style['width'] = '' , this$static.owner.lstProfessors = lstProfessors , lstProfessors)) , $setWidget_2(f_Grid13, 2, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_2(f_Grid13, 2, 1, (cmdAddSubject = new Button_0 , $setInnerText(cmdAddSubject.element, 'Ajouter la mati\xE8re') , $addDomHandler(cmdAddSubject, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdAddSubject)) , f_Grid13.element.style['width'] = '' , f_Grid13.tableElem['cellSpacing'] = 5 , f_Grid13.tableElem['cellPadding'] = 5 , f_Grid13)) , f_VerticalPanel11.element.style['width'] = '100%' , f_VerticalPanel11.table['cellSpacing'] = 2 , f_VerticalPanel11)) , f_VerticalPanel9.element['className'] = 'subSection' , f_VerticalPanel9.element.style['width'] = '100%' , f_VerticalPanel9.table['cellSpacing'] = 2 , f_VerticalPanel9)) , $setWidget_2(f_Grid8, 0, 1, (f_VerticalPanel18 = new VerticalPanel_0 , $add_12(f_VerticalPanel18, (f_Label19 = new Label_0 , f_Label19.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label19.directionalTextHelper, 'Liste des branches de la mati\xE8re choisie', false) , $updateHorizontalAlignment(f_Label19) , f_Label19)) , $add_12(f_VerticalPanel18, (tblBranches = this$static.owner.tblBranches , tblBranches.element.style['height'] = '250px' , tblBranches.element.style['width'] = '100%' , tblBranches)) , $add_12(f_VerticalPanel18, (f_VerticalPanel20 = new VerticalPanel_0 , $add_12(f_VerticalPanel20, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label21.directionalTextHelper, 'Rajouter une branche', false) , $updateHorizontalAlignment(f_Label21) , f_Label21.element.style['width'] = '' , f_Label21)) , $add_12(f_VerticalPanel20, (f_Grid22 = new Grid_0 , $resizeColumns(f_Grid22, 4) , $resizeRows(f_Grid22, 2) , $setWidget_2(f_Grid22, 0, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Branche :', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_2(f_Grid22, 0, 1, (lstBranches = new ListBox_0 , lstBranches.element['className'] = 'sis_textbox' , lstBranches.element.style['width'] = '200px' , this$static.owner.lstBranches = lstBranches , lstBranches)) , $setWidget_2(f_Grid22, 0, 2, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Coefficient :', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_2(f_Grid22, 0, 3, (txtBrancheCoef = new DoubleBox_0 , txtBrancheCoef.element.style['width'] = '50px' , this$static.owner.txtBrancheCoef = txtBrancheCoef , txtBrancheCoef)) , $setWidget_2(f_Grid22, 1, 0, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label25.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_2(f_Grid22, 1, 1, (cmdAddBranche = new Button_0 , $setInnerText(cmdAddBranche.element, 'Ajouter la branche') , $addDomHandler(cmdAddBranche, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, TYPE_0) , cmdAddBranche)) , $setWidget_2(f_Grid22, 1, 2, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , f_Grid22.tableElem['cellSpacing'] = 5 , f_Grid22.tableElem['cellPadding'] = 5 , f_Grid22)) , f_VerticalPanel20.element.style['width'] = '100%' , f_VerticalPanel20.table['cellSpacing'] = 2 , f_VerticalPanel20)) , f_VerticalPanel18.element['className'] = 'subSection' , f_VerticalPanel18.element.style['height'] = '300px' , f_VerticalPanel18.element.style['width'] = '100%' , f_VerticalPanel18.table['cellSpacing'] = 2 , f_VerticalPanel18)) , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 3 , f_Grid8)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 2 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfileManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfileManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfileManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfileManagementView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfileManagementView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ProfileManagementView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ProfileManagementView_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ProfileManagementView_BinderImpl$Widgets$7_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1517, 1, {}, ProfileManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfileManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1518, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_26(event_0){
  $onCmdCreateNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1519, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_27(event_0){
  $onCmdSaveNewProfileClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1520, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_33(event_0){
  $onLstSubjectsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1521, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_28(event_0){
  $onCmdAddSubjectClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1522, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_29(event_0){
  $onCmdAddBrancheClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1523, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_34(event_0){
  $onLstProfilesChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfileManagementView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1524, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfileManagementView_BinderImpl$Widgets$7_0);
_.onChange = function onChange_35(event_0){
  $onLstClassesChange_7(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_16(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$) {
    result = new ProfileManagementView_0(new ProfileManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfileManagementView$_annotation$$none$$;
}

function $$init_22(this$static){
  this$static.shim = new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_22(this);
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_22(this);
}

defineSeed(1635, 631, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_20(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_20(){
  return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_28(){
  return Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_19(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getBrancheCoef_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'brancheCoef'), Ljava_lang_Double_2_classLit);
  visitor.visitValueProperty('brancheCoef', value, propertyContext);
  value = $getId_13(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getProfileBrancheName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profileBrancheName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profileBrancheName', value, propertyContext);
}
;
function $getBrancheCoef_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getBrancheCoef();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Double);
  return toReturn;
}

function $getId_13(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getProfileBrancheName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfileBrancheProxy).getProfileBrancheName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1636, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_52(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).equals$(o);
}
;
_.getBrancheCoef = function getBrancheCoef_1(){
  return $getBrancheCoef_0(this);
}
;
_.getId_0 = function getId_23(){
  return $getId_13(this);
}
;
_.getProfileBrancheName = function getProfileBrancheName(){
  return $getProfileBrancheName(this);
}
;
_.hashCode$ = function hashCode_52(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).hashCode$();
}
;
_.setBrancheCoef = function setBrancheCoef_1(brancheCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).setBrancheCoef(brancheCoef);
}
;
_.toString$ = function toString_36(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfileBrancheProxy).toString$();
}
;
_.this$0 = null;
function ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1637, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileBrancheProxy]), ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_53(other){
  return equals_14(this.this$0, other);
}
;
_.getBrancheCoef = function getBrancheCoef_2(){
  return dynamicCast($getOrReify(this.this$0, 'brancheCoef'), Q$Double);
}
;
_.getId_0 = function getId_24(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getProfileBrancheName = function getProfileBrancheName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profileBrancheName'), Q$String);
}
;
_.hashCode$ = function hashCode_53(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setBrancheCoef = function setBrancheCoef_2(brancheCoef){
  $setProperty(this.this$0, 'brancheCoef', brancheCoef);
}
;
_.this$0 = null;
defineSeed(1642, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]));
_.setIsActive = function setIsActive_3(isActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setIsActive(isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_1(subjectCoef){
  dynamicCast($getWrapped(this.this$0), Q$ProfileSubjectProxy).setSubjectCoef(subjectCoef);
}
;
defineSeed(1643, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfileSubjectProxy]));
_.setIsActive = function setIsActive_4(isActive){
  $setProperty(this.this$0, 'isActive', isActive);
}
;
_.setSubjectCoef = function setSubjectCoef_2(subjectCoef){
  $setProperty(this.this$0, 'subjectCoef', subjectCoef);
}
;
function $clinit_ProfileBrancheRequestFactoryImpl(){
  $clinit_ProfileBrancheRequestFactoryImpl = nullMethod;
  tokensToTypes_15 = new HashMap_0;
  typesToTokens_15 = new HashMap_0;
  entityProxyTypes_15 = new HashSet_0;
  valueProxyTypes_15 = new HashSet_0;
  tokensToTypes_15.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_15.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_21(entityProxyTypes_15, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_15.put('kvY7Ut1y4xJ7SS$RicdCHpatpKU=', Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
  typesToTokens_15.put(Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, 'kvY7Ut1y4xJ7SS$RicdCHpatpKU=');
  $add_21(entityProxyTypes_15, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}

function ProfileBrancheRequestFactoryImpl_0(){
  $clinit_ProfileBrancheRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1779, 665, {}, ProfileBrancheRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_15(){
  return 'com.lemania.sis.shared.service.ProfileBrancheRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_15(typeToken){
  return dynamicCast(tokensToTypes_15.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_19(type){
  return dynamicCast(typesToTokens_15.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_16(type){
  return $contains_1(entityProxyTypes_15, type);
}
;
_.isValueType = function isValueType_16(type){
  return $contains_1(valueProxyTypes_15, type);
}
;
var entityProxyTypes_15, tokensToTypes_15, typesToTokens_15, valueProxyTypes_15;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1780, 675, makeCastMap([Q$AbstractRequestContext]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_15(){
  return !FACTORY_16 && (FACTORY_16 = new ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0) , FACTORY_16;
}
;
var FACTORY_16 = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1781, 674, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_63(){
  return new RequestData_0('V7dv6KIgirTxSag8or0MDidZdzI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit);
}
;
_.val$profileSubjectId = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0(this$0, val$profileBranche){
  this.val$profileBranche = val$profileBranche;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1782, 674, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_64(){
  return new RequestData_0('t8kqVv8_9B9EkA9eL0dp9$MGjjk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileBranche]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$profileBranche = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1783, 674, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_65(){
  return new RequestData_0('busCLMtE1Va69lWCQgfLt745jGQ=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProfileSubject]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, null);
}
;
_.val$newProfileSubject = null;
function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0(this$0, val$profileSubjectId, val$brancheId, val$brancheCoef){
  this.val$profileSubjectId = val$profileSubjectId;
  this.val$brancheId = val$brancheId;
  this.val$brancheCoef = val$brancheCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1784, 674, makeCastMap([Q$AbstractRequest]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_66(){
  return new RequestData_0('RZwwL53l7WUUCEffE8YqcIlkS6Y=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId, this.val$brancheId, this.val$brancheCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, null);
}
;
_.val$brancheCoef = null;
_.val$brancheId = null;
_.val$profileSubjectId = null;
function $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy(){
  return [function(factory){
    return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1785, 603, makeCastMap([Q$EnumMap]), ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_16(map){
  $add_16(map, Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit, $getConstructors_com_lemania_sis_shared_ProfileBrancheProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_16(){
}
;
function ProfileRequestFactory_ProfileRequestContextImpl$8X_0(this$0, val$profileName, val$classId){
  this.val$profileName = val$profileName;
  this.val$classId = val$classId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1789, 674, makeCastMap([Q$AbstractRequest]), ProfileRequestFactory_ProfileRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_68(){
  return new RequestData_0('JEA2guWtUXYp9hXVJOdjyimKW_0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileName, this.val$classId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$profileName = null;
function $calculateTotalBrancheCoef(this$static, profileSubjectId){
  var x;
  x = new ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$static, profileSubjectId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0(this$0, val$profileSubjectId){
  this.val$profileSubjectId = val$profileSubjectId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1793, 674, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_69(){
  return new RequestData_0('qTOdZ6XT2bC4RQ$sfLmvUoGt3gg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubjectId]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$profileSubjectId = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0(this$0, val$profileSubject){
  this.val$profileSubject = val$profileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1795, 674, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_71(){
  return new RequestData_0('4oslgQo44QiRUaRMww77Wr0Ja8E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileSubject]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$profileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0(this$0, val$newProfileSubject){
  this.val$newProfileSubject = val$newProfileSubject;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1796, 674, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_72(){
  return new RequestData_0('DiLXneANl$CK767vopw82RFxJQw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProfileSubject]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$newProfileSubject = null;
function ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0(this$0, val$profileId, val$subjectId, val$professorId, val$subjectCoef){
  this.val$profileId = val$profileId;
  this.val$subjectId = val$subjectId;
  this.val$professorId = val$professorId;
  this.val$subjectCoef = val$subjectCoef;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1797, 674, makeCastMap([Q$AbstractRequest]), ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_73(){
  return new RequestData_0('8SLCmloTUXnDwqJAzEjz$AwsCug=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profileId, this.val$subjectId, this.val$professorId, this.val$subjectCoef]), this.propertyRefs, Lcom_lemania_sis_shared_ProfileSubjectProxy_2_classLit, null);
}
;
_.val$professorId = null;
_.val$profileId = null;
_.val$subjectCoef = null;
_.val$subjectId = null;
var Lcom_lemania_sis_client_presenter_ProfileManagementPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter', 1141), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$1', 1142), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$2', 1149), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$3', 1150), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$4', 1151), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$5', 1152), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$6', 1153), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$7', 1154), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$8', 1155), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$9', 1156), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$10', 1143), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$11_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$11', 1144), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$12_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$12', 1145), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$13_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$13', 1146), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$14_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$14', 1147), Lcom_lemania_sis_client_presenter_ProfileManagementPresenter$15_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenter$15', 1148), Lcom_lemania_sis_client_event_ProfileBrancheAfterAddEvent_2_classLit = createForClass('com.lemania.sis.client.event.', 'ProfileBrancheAfterAddEvent', 799), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1', 1158), Lcom_lemania_sis_client_presenter_ProfileManagementPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfileManagementPresenterMyProxyImpl$1$1', 1159), Lcom_lemania_sis_client_view_ProfileManagementView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView', 1500), Lcom_lemania_sis_client_view_ProfileManagementView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$1', 1501), Lcom_lemania_sis_client_view_ProfileManagementView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$2', 1508), Lcom_lemania_sis_client_view_ProfileManagementView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$3', 1509), Lcom_lemania_sis_client_view_ProfileManagementView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$4', 1510), Lcom_lemania_sis_client_view_ProfileManagementView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$5', 1511), Lcom_lemania_sis_client_view_ProfileManagementView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$6', 1512), Lcom_lemania_sis_client_view_ProfileManagementView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$7', 1513), Lcom_lemania_sis_client_view_ProfileManagementView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$8', 1514), Lcom_lemania_sis_client_view_ProfileManagementView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$9', 1515), Lcom_lemania_sis_client_view_ProfileManagementView$10_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$10', 1502), Lcom_lemania_sis_client_view_ProfileManagementView$11_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$11', 1503), Lcom_lemania_sis_client_view_ProfileManagementView$12_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$12', 1504), Lcom_lemania_sis_client_view_ProfileManagementView$13_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$13', 1505), Lcom_lemania_sis_client_view_ProfileManagementView$14_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$14', 1506), Lcom_lemania_sis_client_view_ProfileManagementView$15_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView$15', 1507), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl', 1516), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets', 1517), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$1', 1518), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$2', 1519), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$3', 1520), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$4', 1521), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$5', 1522), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$6', 1523), Lcom_lemania_sis_client_view_ProfileManagementView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfileManagementView_BinderImpl$Widgets$7', 1524), Lcom_lemania_sis_shared_ProfileBrancheProxy_2_classLit = createForInterface('com.lemania.sis.shared.', 'ProfileBrancheProxy'), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactoryImpl', 1779), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$1X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$1X', 1793), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$6X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$6X', 1795), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$8X', 1796), Lcom_lemania_sis_shared_service_ProfileSubjectRequestFactory_1ProfileSubjectRequestContextImpl$9X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileSubjectRequestFactory_ProfileSubjectRequestContextImpl$9X', 1797), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl', 1780), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$3X', 1781), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$5X', 1782), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$7X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$7X', 1783), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl$8X', 1784), Lcom_lemania_sis_shared_service_ProfileRequestFactory_1ProfileRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileRequestFactory_ProfileRequestContextImpl$8X', 1789), Lcom_lemania_sis_shared_service_ProfileBrancheRequestFactory_1ProfileBrancheRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfileBrancheRequestFactory_ProfileBrancheRequestContextImpl_FactoryImpl', 1785), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1635), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1636), Lcom_lemania_sis_shared_ProfileBrancheProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.sis.shared.', 'ProfileBrancheProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1637);
$entry(onLoad)(21);
