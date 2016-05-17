// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.SettingOptionRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
import com.google.gwt.core.shared.GwtIncompatible;
@GwtIncompatible("Server-side only but loaded through naming convention so must be in same package as shared SettingOptionRequestFactory interface")
public final class SettingOptionRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("mE$sXySUoh0RlN8rssNZaDvx1uY="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/SettingOptionProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/SettingOption;)V")
  .withMethodName("removeSettingOption")
  .withRequestContext("com.lemania.sis.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("NnkxwQJ8$x3Hd9pypFvVJfCdkfw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("9SnuM79qbpPWxxdpDu75gAR13cM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/SettingOptionProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/SettingOption;)Lcom/lemania/sis/server/SettingOption;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("13omw$hbNhHtwcYVY4ljn$M4vMw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("9OtpVjaZhsMx0CKdUzXSYDjQr7I="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withRawTypeToken("g6NMIe_XPgibzcVVmqYF7GEq47E=", "com.lemania.sis.shared.SettingOptionProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.SettingOption", Arrays.asList("com.lemania.sis.shared.SettingOptionProxy"));
}}
