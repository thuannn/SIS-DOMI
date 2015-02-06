// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.CoursRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class CoursRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("7mwAIWGDEaPg9HeaCAD_XVziTPQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/CoursProxy;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Cours;Ljava/lang/String;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("w$sQ02DJfdAlgUX3WvOacGsQSJA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Cours;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("7AzSlNP61DrFnEy8h2GAE3jqZTU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("BNAm7BVlQVkBO2XHugvmFs5nYu8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("x_fkToQbKVkw2QgciwI9Odx8bjA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Cours;)V")
  .withMethodName("removeCours")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("K1zlzZSuskrku2VPPhppvJx6X08="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("bZ11ulTEuMD8bzCGNU7yvXKNopc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Cours;)Lcom/lemania/sis/server/Cours;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("qaRfMYyWbi7$Q57xIuI7nb8NDLQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withRawTypeToken("y14WGzt2YIBX7Es0viykmBagpww=", "com.lemania.sis.shared.CoursProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Cours", Arrays.asList("com.lemania.sis.shared.CoursProxy"));
}}
