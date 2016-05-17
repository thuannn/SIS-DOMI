// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.EcoleRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
import com.google.gwt.core.shared.GwtIncompatible;
@GwtIncompatible("Server-side only but loaded through naming convention so must be in same package as shared EcoleRequestFactory interface")
public final class EcoleRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("QctD56dq0clCoXpoz0abeac5ECM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Ecole;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("$705gamI7V3pX6oljf1fDs_16DA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Ecole;)V")
  .withMethodName("removeEcole")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("frA8PV$_Fm2jDqpGdnVYbpjQzws="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("HBx1Wni$Iz7CbIgjDbxQeQJKTtg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Ecole;)Lcom/lemania/sis/server/Ecole;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("Drg88LFR04BUNSPNJOf2_FtWdqs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("50fV5XB3_10H9LwVMzQQW0OFtB8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withRawTypeToken("YDw$y3tEecJwr7ZsLzBbvDxEoGQ=", "com.lemania.sis.shared.EcoleProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Ecole", Arrays.asList("com.lemania.sis.shared.EcoleProxy"));
}}
