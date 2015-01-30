// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class EvaluationStudentReportRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("wmCOemTRKPpGILtFSX3Plf1_GUM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory$EvaluationStudentReportRequestContext")
  .build());
withOperation(new OperationKey("c7S3rrHU3mix_y1cwjSpZVbjMjM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationStudentReportProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationStudentReport;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory$EvaluationStudentReportRequestContext")
  .build());
withOperation(new OperationKey("jjOwShTbKExhemlSGcVr3OTAGec="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory$EvaluationStudentReportRequestContext")
  .build());
withOperation(new OperationKey("Ne7B$3OTJa1FdDTqX_i2DzySwos="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EvaluationStudentReportProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/bean/evaluations/EvaluationStudentReport;)Lcom/lemania/sis/server/bean/evaluations/EvaluationStudentReport;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory$EvaluationStudentReportRequestContext")
  .build());
withOperation(new OperationKey("KWtmJ462MBas1XNFHC_uRLgJfVA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/sis/server/bean/evaluations/EvaluationStudentReport;")
  .withMethodName("load")
  .withRequestContext("com.lemania.sis.shared.service.EvaluationStudentReportRequestFactory$EvaluationStudentReportRequestContext")
  .build());
withRawTypeToken("zDO6nJz4$8Dg$3a6A_gczL9R70U=", "com.lemania.sis.shared.EvaluationStudentReportProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.bean.evaluations.EvaluationStudentReport", Arrays.asList("com.lemania.sis.shared.EvaluationStudentReportProxy"));
}}
