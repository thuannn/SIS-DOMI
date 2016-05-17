// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.EvaluationSubjectRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
import com.google.gwt.core.shared.GwtIncompatible;
@GwtIncompatible("Server-side only but loaded through naming convention so must be in same package as shared EvaluationSubjectRequestFactory interface")
public final class EvaluationSubjectRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("o68wJniv4IFPQgtXb3kL2iaY1gI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllByStudent")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withOperation(new OperationKey("oSXiK$lGpBXYgcuoN_SJK1p$Kzk="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("populateEvaluationSubjects")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withOperation(new OperationKey("ikXxg6twlVU$3O1LVe0Sj0bA8n4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationSubject;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withOperation(new OperationKey("EDtQQpngFQzRcWpmiLnNWAD5xIU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationSubject;)V")
  .withMethodName("removeEvaluationSubject")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withOperation(new OperationKey("jD2PEeCgvW4OBviZMX1Uzv0I74I="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationSubjectProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationSubject;)Lcom/lemania/sis/server/bean/evaluations/EvaluationSubject;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withOperation(new OperationKey("DcbeRzgoUx$R4_wYv0pz3a1ONRc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationSubjectRequestFactory$EvaluationSubjectRequestContext")
  .build());
withRawTypeToken("FaopnYaBvC3D84BOuK4iWIgxoFA=", "com.lemania.sis.shared.EvaluationSubjectProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.bean.evaluations.EvaluationSubject", Arrays.asList("com.lemania.sis.shared.EvaluationSubjectProxy"));
}}
