// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.EvaluationHeaderRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class EvaluationHeaderRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("3dUtv3o_t6x9$sUQc0nsax9Z6cw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationHeaderProxy;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;")
  .withMethodName("updateEvaluationHeader")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("126E66czbkZUiecjVFcmahGAJ4g="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationHeaderProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("pQAC0S0c6nJxYWec7XsN8Ps_zWs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllByClass")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("CRvGmPbHJeOklgfFcm$xyTSsI_4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("hSjvuZP6wQXPfVESP8gFRwabraw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllByAssignment")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("xI3eZQIpHNexfYcCi43O_q$p6qI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationHeaderProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;)V")
  .withMethodName("removeEvaluationHeader")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("VAZQvgQQf3ugMX44sBVTbtdWYoU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationHeaderProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;)Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withOperation(new OperationKey("cFkXgqB6qt8D6U$cLwxTEveSBSA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/sis/server/bean/evaluations/EvaluationHeader;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationHeaderRequestFactory$EvaluationHeaderRequestContext")
  .build());
withRawTypeToken("hGy7QJB7UThbS$tVxjScXwUF_x0=", "com.lemania.sis.shared.EvaluationHeaderProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.bean.evaluations.EvaluationHeader", Arrays.asList("com.lemania.sis.shared.EvaluationHeaderProxy"));
}}
