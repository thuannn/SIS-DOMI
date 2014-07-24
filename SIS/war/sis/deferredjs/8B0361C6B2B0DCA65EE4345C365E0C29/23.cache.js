function $setKeyboardPagingPolicy(this$static, policy){
  $setKeyboardPagingPolicy_0(this$static.presenter, policy);
}

function $setKeyboardSelectionPolicy(this$static, policy){
  $setKeyboardSelectionPolicy_0(this$static.presenter, policy);
}

function $setKeyboardPagingPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardPagingPolicy cannot be null');
  }
  this$static.keyboardPagingPolicy = policy;
}

function $setKeyboardSelectionPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardSelectionPolicy cannot be null');
  }
  this$static.keyboardSelectionPolicy = policy;
}

function $onEcoleSelected_5(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAllActive_2(rc, ecoleId), new ProfsPresenter$6_0(this$static));
}

function $onProgrammeSelected_3(this$static, coursId){
  var rc, rf;
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive_1(rc, coursId), new ProfsPresenter$7_0(this$static));
}

function $professorSelected(this$static, prof){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAll_1(rc, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$5_0(this$static));
}

function $saveAssignment(this$static, professorId, classId, subjectId, isActive){
  var rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$11X_0(rc, professorId, classId, subjectId, isActive) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$8_0(this$static));
}

function $updateAssignmentStatus(this$static, assignment, value){
  var a4update, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  a4update = dynamicCast($editProxy(rc, assignment), Q$AssignmentProxy);
  a4update.setActive(value);
  $fire((x = new AssignmentRequestFactory_AssignmentRequestContextImpl$10X_0(rc, a4update) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$9_0(this$static));
}

function $updateProfessorStatus(this$static, prof, status_0){
  var profForUpdate, rc, rf, x;
  if (this$static.currentUser.isReadOnly) {
    alert_0(($clinit_NotificationTypes() , "Vous avez l'acc\xE8s en lecture seule - La modification n'a pas \xE9t\xE9 effectu\xE9e"));
    return;
  }
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfActive(status_0);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$8X_0(rc, profForUpdate) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$3_0(this$static));
}

function ProfsPresenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null);
}

defineSeed(1420, 792, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsPresenter, Q$ProfessorListUiHandler]), ProfsPresenter_0);
_.onBind = function onBind_35(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_6(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  $initializeAssignmentTable(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_53(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_34(){
  var rf, rc, rf_0, rc_0, rf_1, rc_1;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('!profs'), null);
  $resetForm_13(dynamicCast(this.view, Q$ProfsPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAll_7(rc), new ProfsPresenter$2_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAll_6(rc_0), new ProfsPresenter$1_0(this));
  rf_1 = new SubjectRequestFactoryImpl_0;
  $initialize(rf_1, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_1 = new SubjectRequestFactory_SubjectRequestContextImpl_0(rf_1);
  $fire($listAllActive_3(rc_1), new ProfsPresenter$10_0(this));
}
;
_.revealInParent = function revealInParent_26(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_144(this$static, response){
  $setEcoleList_5(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1421, 723, makeCastMap([Q$Receiver]), ProfsPresenter$1_0);
_.onFailure_0 = function onFailure_161(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_161(response){
  $onSuccess_144(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_145(this$static, response){
  $setSubjectList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1422, 723, makeCastMap([Q$Receiver]), ProfsPresenter$10_0);
_.onFailure_0 = function onFailure_162(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_162(response){
  $onSuccess_145(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_146(this$static, response){
  $setData_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1423, 723, makeCastMap([Q$Receiver]), ProfsPresenter$2_0);
_.onFailure_0 = function onFailure_163(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_163(response){
  $onSuccess_146(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_147(this$static, response){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1424, 723, makeCastMap([Q$Receiver]), ProfsPresenter$3_0);
_.onFailure_0 = function onFailure_164(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_164(response){
  $onSuccess_147(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_148(this$static, response){
  $setAssignmentTableData_1(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1425, 723, makeCastMap([Q$Receiver]), ProfsPresenter$5_0);
_.onFailure_0 = function onFailure_165(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_165(response){
  $onSuccess_148(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_149(this$static, response){
  $setCoursList_5(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1426, 723, makeCastMap([Q$Receiver]), ProfsPresenter$6_0);
_.onFailure_0 = function onFailure_166(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_166(response){
  $onSuccess_149(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_150(this$static, response){
  $setClasseList_5(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1427, 723, makeCastMap([Q$Receiver]), ProfsPresenter$7_0);
_.onFailure_0 = function onFailure_167(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_167(response){
  $onSuccess_150(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_151(this$static, response){
  $showAddedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1428, 723, makeCastMap([Q$Receiver]), ProfsPresenter$8_0);
_.onFailure_0 = function onFailure_168(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_168(response){
  $onSuccess_151(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.this$0 = null;
function $onSuccess_152(this$static, response){
  $showUpdatedAssignment(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1429, 723, makeCastMap([Q$Receiver]), ProfsPresenter$9_0);
_.onFailure_0 = function onFailure_169(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_169(response){
  $onSuccess_152(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$) {
    result = new ProfsPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$;
}

defineSeed(1481, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_191(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$ProfsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeAssignmentTable(this$static){
  var cellActive, colActive, colClasseName, colProgrammeName, colSubjectName;
  colProgrammeName = new ProfsView$5_0;
  $addColumn(this$static.tblAssignments, colProgrammeName, 'Programme');
  $setColumnWidth_0(this$static.tblAssignments, colProgrammeName, 25 + ($clinit_Style$Unit() , '%'));
  colSubjectName = new ProfsView$6_0;
  $addColumn(this$static.tblAssignments, colSubjectName, 'Mati\xE8re');
  $setColumnWidth_0(this$static.tblAssignments, colSubjectName, '35%');
  colClasseName = new ProfsView$7_0;
  $addColumn(this$static.tblAssignments, colClasseName, 'Classe');
  $setColumnWidth_0(this$static.tblAssignments, colClasseName, '20%');
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$8_0(cellActive);
  $addColumn(this$static.tblAssignments, colActive, 'Active');
  $setColumnWidth_0(this$static.tblAssignments, colActive, '10%');
  $setFieldUpdater(colActive, new ProfsView$9_0(this$static));
  $addDataDisplay(this$static.assignmentDataProvider, this$static.tblAssignments);
}

function $initializeTable_6(this$static){
  var cellActive, colActive, colName, selectionModel;
  colName = new ProfsView$1_0;
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$2_0(cellActive);
  $addColumn(this$static.tblProfessors, colActive, 'Active');
  $setColumnWidth_0(this$static.tblProfessors, colActive, 20 + ($clinit_Style$Unit() , '%'));
  $setFieldUpdater(colActive, new ProfsView$3_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfsView$4_0(this$static, selectionModel));
  $addDataDisplay(this$static.dataProvider, this$static.tblProfessors);
}

function $onCmdAssignerClick(this$static){
  !!this$static.uiHandlers && $saveAssignment(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), '' + toString_6(this$static.selectedProfessor.getId_0().value_0), $getValue_2(this$static.lstClasses, this$static.lstClasses.element.selectedIndex), $getValue_2(this$static.lstSubjects, this$static.lstSubjects.element.selectedIndex), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $onLstClassesChange_9(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler) , undefined);
}

function $onLstCoursChange_0(this$static){
  if (!$getValue_2(this$static.lstCours, this$static.lstCours.element.selectedIndex).length) {
    $selectClear(this$static.lstClasses.element);
    $setSelectedIndex_0(this$static.lstSubjects, 0);
    return;
  }
  !!this$static.uiHandlers && $onProgrammeSelected_3(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_2(this$static.lstCours, this$static.lstCours.element.selectedIndex));
}

function $onLstEcolesChange_5(this$static){
  if (!$getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex).length) {
    $selectClear(this$static.lstCours.element);
    $selectClear(this$static.lstClasses.element);
    $setSelectedIndex_0(this$static.lstSubjects, 0);
    return;
  }
  !!this$static.uiHandlers && $onEcoleSelected_5(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_2(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $refreshTable_2(this$static, prof){
  $remove_12(this$static.dataProvider.listWrapper, this$static.selectedProf);
  $add_14(this$static.dataProvider.listWrapper, this$static.selectedProf, prof);
  $refresh(this$static.dataProvider);
}

function $resetForm_13(this$static){
  $setSelected_0(this$static.tblProfessors.presenter.selectionModel, this$static.selectedProfessor, false);
  $setText_0(this$static.lblProfNameAssign, '');
  $clear_3(this$static.dataProvider.listWrapper);
  $refresh(this$static.dataProvider);
  $clear_3(this$static.assignmentDataProvider.listWrapper);
  $refresh(this$static.assignmentDataProvider);
  $selectClear(this$static.lstEcoles.element);
  $selectClear(this$static.lstCours.element);
  $selectClear(this$static.lstClasses.element);
  $selectClear(this$static.lstSubjects.element);
}

function $setAssignmentTableData_1(this$static, assignments){
  $clear_3(this$static.assignmentDataProvider.listWrapper);
  $setList(this$static.assignmentDataProvider, assignments);
  $refresh(this$static.assignmentDataProvider);
}

function $setClasseList_5(this$static, classeList){
  var cours, cours$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem_0(this$static.lstClasses, '-', '', -1);
  for (cours$iterator = classeList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$ClasseProxy);
    $insertItem_0(this$static.lstClasses, cours.getClassName(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setCoursList_5(this$static, coursList){
  var cours, cours$iterator;
  $selectClear(this$static.lstCours.element);
  $insertItem_0(this$static.lstCours, '-', '', -1);
  for (cours$iterator = coursList.iterator(); cours$iterator.hasNext();) {
    cours = dynamicCast(cours$iterator.next_0(), Q$CoursProxy);
    $insertItem_0(this$static.lstCours, cours.getCoursNom(), '' + toString_6(cours.getId_0().value_0), -1);
  }
}

function $setData_2(this$static, profs){
  $clear_3(this$static.dataProvider.listWrapper);
  $setList(this$static.dataProvider, profs);
}

function $setEcoleList_5(this$static, ecoleList){
  var ecole, ecole$iterator;
  $selectClear(this$static.lstEcoles.element);
  $insertItem_0(this$static.lstEcoles, '-', '', -1);
  for (ecole$iterator = ecoleList.iterator(); ecole$iterator.hasNext();) {
    ecole = dynamicCast(ecole$iterator.next_0(), Q$EcoleProxy);
    $insertItem_0(this$static.lstEcoles, ecole.getSchoolName(), '' + toString_6(ecole.getId_0().value_0), -1);
  }
}

function $setSubjectList(this$static, subjectList){
  var subject, subject$iterator;
  $selectClear(this$static.lstSubjects.element);
  $insertItem_0(this$static.lstSubjects, '-', '', -1);
  for (subject$iterator = subjectList.iterator(); subject$iterator.hasNext();) {
    subject = dynamicCast(subject$iterator.next_0(), Q$SubjectProxy);
    $insertItem_0(this$static.lstSubjects, subject.getSubjectName(), '' + toString_6(subject.getId_0().value_0), -1);
  }
}

function $showAddedAssignment(this$static, assignment){
  $add_15(this$static.assignmentDataProvider.listWrapper, assignment);
  $refresh(this$static.assignmentDataProvider);
}

function $showUpdatedAssignment(this$static, assignment){
  $remove_12(this$static.assignmentDataProvider.listWrapper, this$static.selectedAssignmentIndex);
  $add_14(this$static.assignmentDataProvider.listWrapper, this$static.selectedAssignmentIndex, assignment);
  $refresh(this$static.assignmentDataProvider);
}

function ProfsView_0(){
  this.dataProvider = new ListDataProvider_0;
  this.assignmentDataProvider = new ListDataProvider_0;
  this.tblProfessors = new DataGrid_0;
  this.tblAssignments = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_30(new ProfsView_BinderImpl$Widgets_0(this));
}

defineSeed(1753, 797, makeCastMap([Q$IsWidget, Q$ProfsPresenter$MyView]), ProfsView_0);
_.asWidget = function asWidget_29(){
  return this.widget;
}
;
_.lblProfNameAssign = null;
_.lstClasses = null;
_.lstCours = null;
_.lstEcoles = null;
_.lstSubjects = null;
_.selectedAssignmentIndex = 0;
_.selectedProf = 0;
_.selectedProfessor = null;
_.widget = null;
function ProfsView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1754, 468, makeCastMap([Q$HasCell, Q$Column]), ProfsView$1_0);
_.getValue = function getValue_114(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function ProfsView$2_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1755, 423, makeCastMap([Q$HasCell, Q$Column]), ProfsView$2_0);
_.getValue = function getValue_115(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
function $update_46(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1756, 1, {}, ProfsView$3_0);
_.update = function update_47(index, prof, value){
  $update_46(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView$4_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1757, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfsView$4_0);
_.onSelectionChange = function onSelectionChange_10(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfNameAssign, this.this$0.selectedProfessor.getProfName());
    $professorSelected(dynamicCast(this.this$0.uiHandlers, Q$ProfessorListUiHandler), this.this$0.selectedProfessor);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfsView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1758, 468, makeCastMap([Q$HasCell, Q$Column]), ProfsView$5_0);
_.getValue = function getValue_116(object){
  return dynamicCast(object, Q$AssignmentProxy).getProgrammeName();
}
;
function ProfsView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1759, 468, makeCastMap([Q$HasCell, Q$Column]), ProfsView$6_0);
_.getValue = function getValue_117(object){
  return dynamicCast(object, Q$AssignmentProxy).getSubjectName();
}
;
function ProfsView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1760, 468, makeCastMap([Q$HasCell, Q$Column]), ProfsView$7_0);
_.getValue = function getValue_118(object){
  return dynamicCast(object, Q$AssignmentProxy).getClasseName();
}
;
function ProfsView$8_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1761, 423, makeCastMap([Q$HasCell, Q$Column]), ProfsView$8_0);
_.getValue = function getValue_119(ecole){
  return dynamicCast(ecole, Q$AssignmentProxy).getActive();
}
;
function $update_47(this$static, index, assignment, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedAssignmentIndex = index;
    $updateAssignmentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), assignment, value);
  }
}

function ProfsView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1762, 1, {}, ProfsView$9_0);
_.update = function update_48(index, assignment, value){
  $update_47(this, index, dynamicCast(assignment, Q$AssignmentProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView_BinderImpl_0(){
}

defineSeed(1763, 1, {}, ProfsView_BinderImpl_0);
function $build_f_HTMLPanel1_30(this$static){
  var attachRecord22, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel6, tblProfessors, lblProfNameAssign, f_Label7, f_Grid8, f_Label9, lstEcoles, f_Label10, lstCours, f_Label11, lstClasses, f_Label12, lstSubjects, cmdAssigner, sb, f_Label14, f_Label15, tblAssignments;
  f_HTMLPanel1 = new HTMLPanel_0($html2_5(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord22 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord22.origParent?$insertBefore(attachRecord22.origParent, attachRecord22.element, attachRecord22.origSibling):orphan(attachRecord22.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_12(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES PROFESSEURS', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_12(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_10(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_12(f_VerticalPanel5, (tblProfessors = this$static.owner.tblProfessors , $setKeyboardPagingPolicy(tblProfessors, ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , INCREASE_RANGE)) , tblProfessors.element.style['height'] = '700px' , tblProfessors.element.style['width'] = '300px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 1000)) , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED_0)) , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '' , f_VerticalPanel5.table['cellSpacing'] = 2 , f_VerticalPanel5)) , $add_10(f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel_0 , $add_12(f_VerticalPanel6, (lblProfNameAssign = new Label_0 , lblProfNameAssign.element['className'] = 'header' , $setTextOrHtml(lblProfNameAssign.directionalTextHelper, '-', false) , $updateHorizontalAlignment(lblProfNameAssign) , this$static.owner.lblProfNameAssign = lblProfNameAssign , lblProfNameAssign)) , $add_12(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Assigner une classe', false) , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '' , f_Label7)) , $add_12(f_VerticalPanel6, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 5) , $setWidget_3(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9.element.style['width'] = '' , f_Label9)) , $setWidget_3(f_Grid8, 0, 1, (lstEcoles = new ListBox_0 , lstEcoles.element['className'] = 'sis_textbox' , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_3(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Programme :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10.element.style['width'] = '' , f_Label10)) , $setWidget_3(f_Grid8, 1, 1, (lstCours = new ListBox_0 , lstCours.element['className'] = 'sis_textbox' , $addDomHandler(lstCours, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstCours = lstCours , lstCours)) , $setWidget_3(f_Grid8, 2, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_3(f_Grid8, 2, 1, (lstClasses = new ListBox_0 , lstClasses.element['className'] = 'sis_textbox' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstClasses = lstClasses , lstClasses)) , $setWidget_3(f_Grid8, 3, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Mati\xE8re :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_3(f_Grid8, 3, 1, (lstSubjects = new ListBox_0 , lstSubjects.element['className'] = 'sis_textbox' , this$static.owner.lstSubjects = lstSubjects , lstSubjects)) , $setWidget_3(f_Grid8, 4, 0, new Label_0) , $setWidget_3(f_Grid8, 4, 1, (cmdAssigner = new Button_0 , $setHTML(cmdAssigner, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , cmdAssigner.element.style['width'] = '100px' , $addDomHandler(cmdAssigner, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAssigner)) , f_Grid8.element['className'] = 'subSection' , f_Grid8.element.style['width'] = '100%' , f_Grid8.tableElem['cellSpacing'] = 2 , f_Grid8.tableElem['cellPadding'] = 2 , f_Grid8)) , $add_12(f_VerticalPanel6, (f_Label14 = new Label_0 , f_Label14.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label14.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $add_12(f_VerticalPanel6, (f_Label15 = new Label_0 , f_Label15.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label15.directionalTextHelper, 'Liste des classes assign\xE9s', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $add_12(f_VerticalPanel6, (tblAssignments = this$static.owner.tblAssignments , tblAssignments.element['className'] = 'subSection' , tblAssignments.element.style['height'] = '425PX' , tblAssignments.element.style['width'] = '650px' , tblAssignments)) , f_VerticalPanel6.element.style['width'] = '' , f_VerticalPanel6.table['cellSpacing'] = 2 , f_VerticalPanel6)) , f_HorizontalPanel4.element.style['width'] = '850px' , f_HorizontalPanel4.table['cellSpacing'] = 5 , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfsView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfsView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1764, 1, {}, ProfsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1765, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_47(event_0){
  $onCmdAssignerClick(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1766, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_41(event_0){
  $onLstEcolesChange_5(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1767, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_42(event_0){
  $onLstCoursChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1768, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_43(event_0){
  $onLstClassesChange_9(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_5(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$) {
    result = new ProfsView_0(new ProfsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$ProfsView$_annotation$$none$$;
}

defineSeed(1788, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]));
_.setActive = function setActive(active){
  dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).setActive(active);
}
;
defineSeed(1789, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]));
_.setActive = function setActive_0(active){
  $setProperty(this.this$0, 'active', active);
}
;
function $listAll_1(this$static, profId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$static, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl$10X_0(this$0, val$a){
  this.val$a = val$a;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1903, 727, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('_YGYQXcLTE0k7sgXwMOAkX_wQms=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$a]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$a = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$11X_0(this$0, val$profId, val$classId, val$subjectId, val$isActive){
  this.val$profId = val$profId;
  this.val$classId = val$classId;
  this.val$subjectId = val$subjectId;
  this.val$isActive = val$isActive;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1904, 727, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_27(){
  return new RequestData_0('YyU4C1i5$5uQlrd47oQKbFqOv2o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$classId, this.val$subjectId, this.val$isActive]), this.propertyRefs, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit, null);
}
;
_.val$classId = null;
_.val$isActive = null;
_.val$profId = null;
_.val$subjectId = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1905, 727, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_28(){
  return new RequestData_0('lMwcXIZKGtBXRAcy4JERU31qNR0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_AssignmentProxy_2_classLit);
}
;
_.val$profId = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$8X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1984, 727, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_72(){
  return new RequestData_0('7vC3$wpOCQmBs0$q0LXfL81qLho=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_sis_shared_ProfessorProxy_2_classLit, null);
}
;
_.val$newProf = null;
var Lcom_lemania_sis_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter', 1420), Lcom_lemania_sis_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$1', 1421), Lcom_lemania_sis_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$2', 1423), Lcom_lemania_sis_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$3', 1424), Lcom_lemania_sis_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$5', 1425), Lcom_lemania_sis_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$6', 1426), Lcom_lemania_sis_client_presenter_ProfsPresenter$7_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$7', 1427), Lcom_lemania_sis_client_presenter_ProfsPresenter$8_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$8', 1428), Lcom_lemania_sis_client_presenter_ProfsPresenter$9_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$9', 1429), Lcom_lemania_sis_client_presenter_ProfsPresenter$10_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'ProfsPresenter$10', 1422), Lcom_lemania_sis_client_view_ProfsView_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView', 1753), Lcom_lemania_sis_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$1', 1754), Lcom_lemania_sis_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$2', 1755), Lcom_lemania_sis_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$3', 1756), Lcom_lemania_sis_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$4', 1757), Lcom_lemania_sis_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$5', 1758), Lcom_lemania_sis_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$6', 1759), Lcom_lemania_sis_client_view_ProfsView$7_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$7', 1760), Lcom_lemania_sis_client_view_ProfsView$8_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$8', 1761), Lcom_lemania_sis_client_view_ProfsView$9_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView$9', 1762), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl', 1763), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets', 1764), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$1', 1765), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$2', 1766), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$3', 1767), Lcom_lemania_sis_client_view_ProfsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.sis.client.view.', 'ProfsView_BinderImpl$Widgets$4', 1768), Lcom_lemania_sis_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$8X', 1984), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', 1905), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$10X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$10X', 1903), Lcom_lemania_sis_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$11X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$11X', 1904);
$entry(onLoad)(23);
