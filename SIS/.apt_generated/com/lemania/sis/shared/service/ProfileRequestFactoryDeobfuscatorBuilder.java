// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.ProfileRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class ProfileRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("4ZW3fByoCzqlWnOKyk3o7CsXeGI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Profile;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("jQbxl0EOmrBp6ryMzwU7MV2URkE="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Profile;)V")
  .withMethodName("removeProfile")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("Y4ttalgWTxG4B8KpSodI3WUiu6Q="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("mROjoNsnTj_BlFzWjghGLNwSFKs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllActiveByClass")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("T7k6hUHng5$gJuT9eeCExXQPVW0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("JEA2guWtUXYp9hXVJOdjyimKW_0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/sis/server/Profile;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("zpgzeB_8zimk9XCQ7fYF8kSBtQg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfileProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Profile;)Lcom/lemania/sis/server/Profile;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withOperation(new OperationKey("HiX5LIFGnQLtq$CMQi1JaxjUNqg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.ProfileRequestFactory$ProfileRequestContext")
  .build());
withRawTypeToken("4f6x2X$iTZunF$uRKvzBsMVHE8Q=", "com.lemania.sis.shared.ProfileProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Profile", Arrays.asList("com.lemania.sis.shared.ProfileProxy"));
}}
