// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.BrancheRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
import com.google.gwt.core.shared.GwtIncompatible;
@GwtIncompatible("Server-side only but loaded through naming convention so must be in same package as shared BrancheRequestFactory interface")
public final class BrancheRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("rQscii0i6z8jYwfMlvn__MOGUnQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/BrancheProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Branche;)V")
  .withMethodName("removeBranche")
  .withRequestContext("com.lemania.sis.shared.service.BrancheRequestFactory$BrancheRequestContext")
  .build());
withOperation(new OperationKey("s3FFXxss$lI7_CSDrA0GDl$lpLg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/BrancheProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Branche;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.BrancheRequestFactory$BrancheRequestContext")
  .build());
withOperation(new OperationKey("$9BcvfdD2LPuGI_zpqkVb$Ujea0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/BrancheProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Branche;)Lcom/lemania/sis/server/Branche;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.BrancheRequestFactory$BrancheRequestContext")
  .build());
withOperation(new OperationKey("qo9IXsp3yP1WAg9Nh466aqayzXM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.BrancheRequestFactory$BrancheRequestContext")
  .build());
withOperation(new OperationKey("_JUym1B4QtYE68teW63m02qjAog="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.BrancheRequestFactory$BrancheRequestContext")
  .build());
withRawTypeToken("UbixFtEaeOPe3anYEVvFIm96h$s=", "com.lemania.sis.shared.BrancheProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Branche", Arrays.asList("com.lemania.sis.shared.BrancheProxy"));
}}
