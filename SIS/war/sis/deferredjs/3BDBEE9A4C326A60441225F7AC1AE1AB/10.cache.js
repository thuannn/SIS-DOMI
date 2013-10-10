function $prepareColumn(column){
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Cannot access a column with a negative index: ' + column);
  }
}

defineSeed(436, 404, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.prepareColumn = function prepareColumn(column){
  $prepareColumn(column);
}
;
function $addStyleName(this$static, row){
  var td;
  this$static.this$0.prepareCell(row, 0);
  td = $getCellElement(this$static.this$0.bodyElem, row, 0);
  setStyleName(td, 'spaceCell', true);
}

function $setRowSpan(this$static, row, column, rowSpan){
  (this$static.this$0.prepareCell(row, column) , $getCellElement(this$static.this$0.bodyElem, row, column))['rowSpan'] = rowSpan;
}

defineSeed(440, 436, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.prepareColumn = function prepareColumn_0(column){
  $prepareColumn(column);
  if (column >= this.numColumns) {
    throw new IndexOutOfBoundsException_1('Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}
;
function $ensureColumn(this$static, col){
  this$static.this$0.prepareColumn(col);
  $prepareColumnGroup(this$static);
  $resizeColumnGroup(this$static, col + 1, true);
  return $getChild(this$static.columnGroup, col);
}

function $setWidth_0(this$static, column, width){
  $ensureColumn(this$static, column)['width'] = width;
}

function $drawBulletin(this$static, bulletinId, subjects, branches){
  var rc, rf, x;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire((x = new BulletinRequestFactory_BulletinRequestContextImpl$2X_0(rc, bulletinId) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinViewDetailPresenter$6_0(this$static, subjects, branches));
}

function $getBranches(this$static, bulletinId){
  var rc, rf, x;
  rf = new BulletinBrancheRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl_0(rf);
  $fire((x = new BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$5X_0(rc, bulletinId) , $addInvocation(rc.state.dialect, x) , x), new FrmBulletinViewDetailPresenter$5_0(this$static, bulletinId));
}

function $loadClassList(this$static){
  var rc, rf;
  $showAdminPanel(dynamicCast(this$static.view, Q$FrmBulletinViewDetailPresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  rf = new ClasseRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ClasseRequestFactory_ClasseRequestContextImpl_0(rf);
  $fire($listAllActive(rc), new FrmBulletinViewDetailPresenter$1_0(this$static));
}

function $onBulletinChange(this$static, bulletinId){
  var rc, rf;
  rf = new BulletinSubjectRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinSubjectRequestFactory_BulletinSubjectRequestContextImpl_0(rf);
  $fire($listAll_2(rc, bulletinId), new FrmBulletinViewDetailPresenter$4_0(this$static, bulletinId));
}

function $onClassChange_0(this$static, classId){
  var rc, rf;
  rf = new BulletinRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf);
  $fire($listAllActiveByClass(rc, classId), new FrmBulletinViewDetailPresenter$3_0(this$static));
}

function FrmBulletinViewDetailPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  this.subjects = new ArrayList_0;
}

defineSeed(818, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$FrmBulletinViewDetailPresenter, Q$FrmBulletinViewDetailUiHandler]), FrmBulletinViewDetailPresenter_0);
_.onBind = function onBind_10(){
  dynamicCast(this.view, Q$FrmBulletinViewDetailPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_9(){
  var rf, rc;
  $doFire(this.eventBus, new PageAfterSelectEvent_0('bulletindetail'), null);
  $resetForm_3(dynamicCast(this.view, Q$FrmBulletinViewDetailPresenter$MyView));
  this.currentUser.isAdmin && $loadClassList(this);
  this.currentUser.isProf && $loadClassList(this);
  this.currentUser.isStudent && ($showAdminPanel(dynamicCast(this.view, Q$FrmBulletinViewDetailPresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1)) , rf = new BulletinRequestFactoryImpl_0 , $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus)) , rc = new BulletinRequestFactory_BulletinRequestContextImpl_0(rf) , $fire($listAllByEmail(rc, this.currentUser.userEmail), new FrmBulletinViewDetailPresenter$2_0(this)) , undefined);
}
;
_.revealInParent = function revealInParent_9(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_37(this$static, response){
  $setClasseList_1(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewDetailPresenter$MyView), response);
}

function FrmBulletinViewDetailPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(819, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$1_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_37(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_38(this$static, response){
  $setStudentListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewDetailPresenter$MyView), response);
}

function FrmBulletinViewDetailPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(820, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$2_0);
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_38(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_39(this$static, response){
  $setStudentListData(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewDetailPresenter$MyView), response);
}

function FrmBulletinViewDetailPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(821, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$3_0);
_.onFailure_0 = function onFailure_40(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_40(response){
  $onSuccess_39(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_40(this$static, response){
  $clear_5(this$static.this$0.subjects);
  $addAll_0(this$static.this$0.subjects, response);
  $getBranches(this$static.this$0, this$static.val$bulletinId);
}

function FrmBulletinViewDetailPresenter$4_0(this$0, val$bulletinId){
  this.this$0 = this$0;
  this.val$bulletinId = val$bulletinId;
}

defineSeed(822, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$4_0);
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_40(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$bulletinId = null;
function $onSuccess_41(this$static, response){
  $drawBulletin(this$static.this$0, this$static.val$bulletinId, this$static.this$0.subjects, response);
}

function FrmBulletinViewDetailPresenter$5_0(this$0, val$bulletinId){
  this.this$0 = this$0;
  this.val$bulletinId = val$bulletinId;
}

defineSeed(823, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$5_0);
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_41(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$bulletinId = null;
function $onSuccess_42(this$static, response){
  response.getProgrammeName().toLowerCase().indexOf('matu') != -1?$drawGradeTableMatu(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewDetailPresenter$MyView), this$static.val$subjects, this$static.val$branches, ($clinit_Boolean() , this$static.this$0.currentUser.isStudent?TRUE_1:FALSE_1)):$drawGradeTableNormal(dynamicCast(this$static.this$0.view, Q$FrmBulletinViewDetailPresenter$MyView), this$static.val$subjects, this$static.val$branches, ($clinit_Boolean() , this$static.this$0.currentUser.isStudent?TRUE_1:FALSE_1));
}

function FrmBulletinViewDetailPresenter$6_0(this$0, val$subjects, val$branches){
  this.this$0 = this$0;
  this.val$subjects = val$subjects;
  this.val$branches = val$branches;
}

defineSeed(824, 619, makeCastMap([Q$Receiver]), FrmBulletinViewDetailPresenter$6_0);
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_42(this, dynamicCast(response, Q$BulletinProxy));
}
;
_.this$0 = null;
_.val$branches = null;
_.val$subjects = null;
function $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$_annotation$$none$$) {
    result = new FrmBulletinViewDetailPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$sis$client$view$FrmBulletinViewDetailView$_annotation$$none$$($getFragment_com_lemania_sis_client_view(this$static.injector)), $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$_annotation$$none$$;
}

defineSeed(974, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_113(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$sis$client$presenter$FrmBulletinViewDetailPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $drawGradeTableMatu(this$static, subjects, branches, isStudent){
  var branche, branche$iterator, brancheCount, i, rowCount, subject, subject$iterator;
  $removeAllRows(this$static.tblBulletin);
  rowCount = valueOf_1(-1);
  valueOf_1(0);
  rowCount = valueOf_1(rowCount.value_0 + 1);
  $setText_0(this$static.tblBulletin, rowCount.value_0, 0, 'Mati\xE8re');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 1, 'Coef');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 7, 'T1');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 13, 'T2');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 14, 'Moyenne Semestrielle');
  $setStyleName_2(this$static.tblBulletin.rowFormatter, rowCount.value_0);
  for (subject$iterator = new AbstractList$IteratorImpl_0(subjects); subject$iterator.i < subject$iterator.this$0_0.size_1();) {
    subject = dynamicCast($next_4(subject$iterator), Q$BulletinSubjectProxy);
    rowCount = valueOf_1(rowCount.value_0 + 1);
    $setText_0(this$static.tblBulletin, rowCount.value_0, 0, subject.getSubjectName());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 1, ($clinit_Double() , '' + subject.getSubjectCoef().value_0));
    $setText_0(this$static.tblBulletin, rowCount.value_0, 7, subject.getT1());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 13, subject.getT2());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 14, subject.getAn());
    isStudent.value_0?$setText_0(this$static.tblBulletin, rowCount.value_0 + 1, 14, ''):$setText_0(this$static.tblBulletin, rowCount.value_0 + 1, 14, !subject.getRemarqueT3().length?!subject.getRemarqueT2().length?subject.getRemarqueT1():subject.getRemarqueT2():subject.getRemarqueT3());
    for (i = 0; i < 15; ++i)
      $setStyleName_1(this$static.tblBulletin.cellFormatter, rowCount.value_0, i, 'subjectLine');
    brancheCount = valueOf_1(0);
    for (branche$iterator = branches.iterator(); branche$iterator.hasNext();) {
      branche = dynamicCast(branche$iterator.next_0(), Q$BulletinBrancheProxy);
      if ($equals_4(branche.getBulletinSubjectId(), subject.getId_0())) {
        rowCount = valueOf_1(rowCount.value_0 + 1);
        brancheCount = valueOf_1(brancheCount.value_0 + 1);
        $setText_0(this$static.tblBulletin, rowCount.value_0, 0, branche.getBulletinBrancheName());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 1, '' + branche.getBrancheCoef().value_0);
        $setText_0(this$static.tblBulletin, rowCount.value_0, 2, branche.getT1_1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 3, branche.getT1_2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 4, branche.getT1_3());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 5, branche.getT1_4());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 6, branche.getT1_5());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 7, branche.getT1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 8, branche.getT2_1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 9, branche.getT2_2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 10, branche.getT2_3());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 11, branche.getT2_4());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 12, branche.getT2_5());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 13, branche.getT2());
      }
    }
    brancheCount.value_0 > 0 && $setRowSpan(dynamicCast(this$static.tblBulletin.cellFormatter, Q$FlexTable$FlexCellFormatter), rowCount.value_0 - brancheCount.value_0 + 1, 14, brancheCount.value_0);
    rowCount = valueOf_1(rowCount.value_0 + 1);
    $setText_0(this$static.tblBulletin, rowCount.value_0, 0, '');
    $addStyleName(this$static.tblBulletin.cellFormatter, rowCount.value_0);
  }
  $setWidth_0(this$static.tblBulletin.columnFormatter, 0, '30%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 1, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 7, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 13, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 14, '40%');
  setStylePrimaryName($ensureColumn(this$static.tblBulletin.columnFormatter, 7), 'gradeColumn');
  setStyleName($ensureColumn(this$static.tblBulletin.columnFormatter, 13), 'gradeColumn', true);
  $styleTableMatu(this$static);
}

function $drawGradeTableNormal(this$static, subjects, branches, isStudent){
  var branche, branche$iterator, brancheCount, i, rowCount, subject, subject$iterator;
  $removeAllRows(this$static.tblBulletin);
  rowCount = valueOf_1(-1);
  valueOf_1(0);
  rowCount = valueOf_1(rowCount.value_0 + 1);
  $setText_0(this$static.tblBulletin, rowCount.value_0, 0, 'Mati\xE8re');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 1, 'Coef');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 7, 'T1');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 13, 'T2');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 19, 'T3');
  $setText_0(this$static.tblBulletin, rowCount.value_0, 20, 'Moyenne Annuelle');
  $setStyleName_2(this$static.tblBulletin.rowFormatter, rowCount.value_0);
  for (subject$iterator = new AbstractList$IteratorImpl_0(subjects); subject$iterator.i < subject$iterator.this$0_0.size_1();) {
    subject = dynamicCast($next_4(subject$iterator), Q$BulletinSubjectProxy);
    rowCount = valueOf_1(rowCount.value_0 + 1);
    $setText_0(this$static.tblBulletin, rowCount.value_0, 0, subject.getSubjectName());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 1, ($clinit_Double() , '' + subject.getSubjectCoef().value_0));
    $setText_0(this$static.tblBulletin, rowCount.value_0, 7, subject.getT1());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 13, subject.getT2());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 19, subject.getT3());
    $setText_0(this$static.tblBulletin, rowCount.value_0, 20, subject.getAn());
    isStudent.value_0?$setText_0(this$static.tblBulletin, rowCount.value_0 + 1, 20, ''):$setText_0(this$static.tblBulletin, rowCount.value_0 + 1, 20, !subject.getRemarqueT3().length?!subject.getRemarqueT2().length?subject.getRemarqueT1():subject.getRemarqueT2():subject.getRemarqueT3());
    for (i = 0; i < 21; ++i)
      $setStyleName_1(this$static.tblBulletin.cellFormatter, rowCount.value_0, i, 'subjectLine');
    brancheCount = valueOf_1(0);
    for (branche$iterator = branches.iterator(); branche$iterator.hasNext();) {
      branche = dynamicCast(branche$iterator.next_0(), Q$BulletinBrancheProxy);
      if ($equals_4(branche.getBulletinSubjectId(), subject.getId_0())) {
        rowCount = valueOf_1(rowCount.value_0 + 1);
        brancheCount = valueOf_1(brancheCount.value_0 + 1);
        $setText_0(this$static.tblBulletin, rowCount.value_0, 0, branche.getBulletinBrancheName());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 1, '' + branche.getBrancheCoef().value_0);
        $setText_0(this$static.tblBulletin, rowCount.value_0, 2, branche.getT1_1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 3, branche.getT1_2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 4, branche.getT1_3());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 5, branche.getT1_4());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 6, branche.getT1_5());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 7, branche.getT1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 8, branche.getT2_1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 9, branche.getT2_2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 10, branche.getT2_3());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 11, branche.getT2_4());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 12, branche.getT2_5());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 13, branche.getT2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 14, branche.getT3_1());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 15, branche.getT3_2());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 16, branche.getT3_3());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 17, branche.getT3_4());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 18, branche.getT3_5());
        $setText_0(this$static.tblBulletin, rowCount.value_0, 19, branche.getT3());
      }
    }
    brancheCount.value_0 > 0 && $setRowSpan(dynamicCast(this$static.tblBulletin.cellFormatter, Q$FlexTable$FlexCellFormatter), rowCount.value_0 - brancheCount.value_0 + 1, 20, brancheCount.value_0);
    rowCount = valueOf_1(rowCount.value_0 + 1);
    $setText_0(this$static.tblBulletin, rowCount.value_0, 0, '');
    $addStyleName(this$static.tblBulletin.cellFormatter, rowCount.value_0);
  }
  $setWidth_0(this$static.tblBulletin.columnFormatter, 0, '20%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 1, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 7, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 13, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 14, '');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 19, '10%');
  $setWidth_0(this$static.tblBulletin.columnFormatter, 20, '40%');
  setStylePrimaryName($ensureColumn(this$static.tblBulletin.columnFormatter, 7), 'gradeColumn');
  setStyleName($ensureColumn(this$static.tblBulletin.columnFormatter, 13), 'gradeColumn', true);
  setStyleName($ensureColumn(this$static.tblBulletin.columnFormatter, 19), 'gradeColumn', true);
  $styleTableNormal(this$static);
}

function $onLstBulletinsChange(this$static){
  $removeAllRows(this$static.tblBulletin);
  !!this$static.uiHandlers && $onBulletinChange(dynamicCast(this$static.uiHandlers, Q$FrmBulletinViewDetailUiHandler), $getValue_1(this$static.lstBulletins, this$static.lstBulletins.element.selectedIndex));
}

function $onLstClassesChange_1(this$static){
  !!this$static.uiHandlers && $onClassChange_0(dynamicCast(this$static.uiHandlers, Q$FrmBulletinViewDetailUiHandler), $getValue_1(this$static.lstClasses, this$static.lstClasses.element.selectedIndex));
}

function $resetForm_3(this$static){
  $setSelectedIndex_0(this$static.lstClasses, 0);
  $setSelectedIndex_0(this$static.lstBulletins, 0);
  $removeAllRows(this$static.tblBulletin);
}

function $setClasseList_1(this$static, classes){
  var clazz, clazz$iterator;
  $selectClear(this$static.lstClasses.element);
  $insertItem(this$static.lstClasses, '-', '', -1);
  for (clazz$iterator = classes.iterator(); clazz$iterator.hasNext();) {
    clazz = dynamicCast(clazz$iterator.next_0(), Q$ClasseProxy);
    $insertItem(this$static.lstClasses, clazz.getClassName(), '' + toString_6(clazz.getId_0().value_0), -1);
  }
}

function $setStudentListData(this$static, bulletins){
  var bulletin, bulletin$iterator;
  $selectClear(this$static.lstBulletins.element);
  $insertItem(this$static.lstBulletins, '-', '', -1);
  for (bulletin$iterator = bulletins.iterator(); bulletin$iterator.hasNext();) {
    bulletin = dynamicCast(bulletin$iterator.next_0(), Q$BulletinProxy);
    $insertItem(this$static.lstBulletins, bulletin.getStudentName() + ' - ' + bulletin.getClasseName() + ' - ' + bulletin.getYear(), '' + toString_6(bulletin.getId_0().value_0), -1);
  }
}

function $showAdminPanel(this$static, show){
  $setVisible_0(this$static.pnlAdmin, show.value_0);
}

function $styleTableMatu(this$static){
  var i, j;
  this$static.tblBulletin.tableElem['cellSpacing'] = 0;
  this$static.tblBulletin.tableElem['cellPadding'] = 3;
  $setStyleName(this$static.tblBulletin, 'subSection');
  for (i = 0; i < 15; ++i)
    for (j = 1; j < this$static.tblBulletin.bodyElem.rows.length; ++j) {
      $isCellPresent(this$static.tblBulletin, j, i) && $equals_5($getPropertyString($getElement(this$static.tblBulletin.cellFormatter, j, i), 'className'), '') && $setStyleName_1(this$static.tblBulletin.cellFormatter, j, i, 'brancheLine');
    }
}

function $styleTableNormal(this$static){
  var i, j;
  this$static.tblBulletin.tableElem['cellSpacing'] = 0;
  this$static.tblBulletin.tableElem['cellPadding'] = 3;
  $setStyleName(this$static.tblBulletin, 'subSection');
  for (i = 0; i < 20; ++i)
    for (j = 1; j < this$static.tblBulletin.bodyElem.rows.length; ++j) {
      $isCellPresent(this$static.tblBulletin, j, i) && $equals_5($getPropertyString($getElement(this$static.tblBulletin.cellFormatter, j, i), 'className'), '') && $setStyleName_1(this$static.tblBulletin.cellFormatter, j, i, 'brancheLine');
    }
}

function FrmBulletinViewDetailView_0(){
  this.widget = $build_f_HTMLPanel1_8(new FrmBulletinViewDetailView_BinderImpl$Widgets_0(this));
}

defineSeed(1113, 685, makeCastMap([Q$IsWidget, Q$FrmBulletinViewDetailPresenter$MyView]), FrmBulletinViewDetailView_0);
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.lstBulletins = null;
_.lstClasses = null;
_.pnlAdmin = null;
_.tblBulletin = null;
_.widget = null;
function FrmBulletinViewDetailView_BinderImpl_0(){
}

defineSeed(1114, 1, {}, FrmBulletinViewDetailView_BinderImpl_0);
function $build_f_HTMLPanel1_8(this$static){
  var attachRecord9, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_VerticalPanel4, f_VerticalPanel5, tblBulletin, pnlAdmin, f_Label6, lstClasses, f_HorizontalPanel7, f_Label8, lstBulletins;
  f_HTMLPanel1 = new HTMLPanel_0($html1_8(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord9 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord9.origParent?$insertBefore(attachRecord9.origParent, attachRecord9.element, attachRecord9.origSibling):orphan(attachRecord9.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_11(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONSULTER LES NOTES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel2, (f_VerticalPanel4 = new VerticalPanel_0 , $add_11(f_VerticalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_11(f_VerticalPanel5, (pnlAdmin = new HorizontalPanel_0 , $setHorizontalAlignment_0(pnlAdmin, ALIGN_RIGHT) , $add_9(pnlAdmin, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Classe :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_9(pnlAdmin, (lstClasses = new ListBox_0 , lstClasses.element.style['width'] = '300px' , $addDomHandler(lstClasses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstClasses = lstClasses , lstClasses)) , setVisible(pnlAdmin.element, false) , pnlAdmin.element.style['width'] = '400px' , pnlAdmin.table['cellSpacing'] = 2 , this$static.owner.pnlAdmin = pnlAdmin , pnlAdmin)) , $add_11(f_VerticalPanel5, (f_HorizontalPanel7 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel7, ALIGN_RIGHT) , $add_9(f_HorizontalPanel7, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Bulletin(s) :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_9(f_HorizontalPanel7, (lstBulletins = new ListBox_0 , lstBulletins.element.style['width'] = '300px' , $addDomHandler(lstBulletins, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstBulletins = lstBulletins , lstBulletins)) , f_HorizontalPanel7.element.style['width'] = '400px' , f_HorizontalPanel7.table['cellSpacing'] = 2 , f_HorizontalPanel7)) , f_VerticalPanel5.element['className'] = 'subSection' , f_VerticalPanel5.table['cellSpacing'] = 5 , f_VerticalPanel5)) , $add_11(f_VerticalPanel4, (tblBulletin = new FlexTable_0 , tblBulletin.element.style['width'] = '100%' , this$static.owner.tblBulletin = tblBulletin , tblBulletin)) , f_VerticalPanel4.element.style['width'] = '100%' , f_VerticalPanel4.table['cellSpacing'] = 5 , f_VerticalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function FrmBulletinViewDetailView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmBulletinViewDetailView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FrmBulletinViewDetailView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1115, 1, {}, FrmBulletinViewDetailView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function FrmBulletinViewDetailView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1116, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinViewDetailView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_7(event_0){
  $onLstClassesChange_1(this.this$1.owner);
}
;
_.this$1 = null;
function FrmBulletinViewDetailView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1117, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), FrmBulletinViewDetailView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_8(event_0){
  $onLstBulletinsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_8(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$sis$client$view$FrmBulletinViewDetailView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewDetailView$_annotation$$none$$) {
    result = new FrmBulletinViewDetailView_0(new FrmBulletinViewDetailView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewDetailView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$sis$client$view$FrmBulletinViewDetailView$_annotation$$none$$;
}

function BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$5X_0(this$0, val$bulletinId){
  this.val$bulletinId = val$bulletinId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1361, 623, makeCastMap([Q$AbstractRequest]), BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_8(){
  return new RequestData_0('_JfwBXhV35eSNnhXxKBCajwuUeo=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinBrancheProxy_2_classLit);
}
;
_.val$bulletinId = null;
function $listAllByEmail(this$static, email){
  var x;
  x = new BulletinRequestFactory_BulletinRequestContextImpl$8X_0(this$static, email);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function BulletinRequestFactory_BulletinRequestContextImpl$2X_0(this$0, val$bulletinId){
  this.val$bulletinId = val$bulletinId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1371, 623, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('AtQGFav8TRxCArvZawTbVeWaVzg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$bulletinId]), this.propertyRefs, Lcom_lemania_sis_shared_BulletinProxy_2_classLit, null);
}
;
_.val$bulletinId = null;
function BulletinRequestFactory_BulletinRequestContextImpl$8X_0(this$0, val$email){
  this.val$email = val$email;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1374, 623, makeCastMap([Q$AbstractRequest]), BulletinRequestFactory_BulletinRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('5FanhILEQVOHIeFfutMXXFGmCkM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$email]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_sis_shared_BulletinProxy_2_classLit);
}
;
_.val$email = null;
var Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter', 818), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$1_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$1', 819), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$2_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$2', 820), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$3_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$3', 821), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$4_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$4', 822), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$5_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$5', 823), Lcom_lemania_sis_client_presenter_FrmBulletinViewDetailPresenter$6_2_classLit = createForClass('com.lemania.sis.client.presenter.', 'FrmBulletinViewDetailPresenter$6', 824), Lcom_lemania_sis_client_view_FrmBulletinViewDetailView_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewDetailView', 1113), Lcom_lemania_sis_client_view_FrmBulletinViewDetailView_1BinderImpl_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewDetailView_BinderImpl', 1114), Lcom_lemania_sis_client_view_FrmBulletinViewDetailView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewDetailView_BinderImpl$Widgets', 1115), Lcom_lemania_sis_client_view_FrmBulletinViewDetailView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewDetailView_BinderImpl$Widgets$1', 1116), Lcom_lemania_sis_client_view_FrmBulletinViewDetailView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.sis.client.view.', 'FrmBulletinViewDetailView_BinderImpl$Widgets$2', 1117), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$2X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$2X', 1371), Lcom_lemania_sis_shared_service_BulletinRequestFactory_1BulletinRequestContextImpl$8X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinRequestFactory_BulletinRequestContextImpl$8X', 1374), Lcom_lemania_sis_shared_service_BulletinBrancheRequestFactory_1BulletinBrancheRequestContextImpl$5X_2_classLit = createForClass('com.lemania.sis.shared.service.', 'BulletinBrancheRequestFactory_BulletinBrancheRequestContextImpl$5X', 1361);
$entry(onLoad)(10);
