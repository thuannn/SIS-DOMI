// Automatically Generated -- DO NOT EDIT
// com.lemania.sis.shared.service.ProfessorRequestFactory
package com.lemania.sis.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
import com.google.gwt.core.shared.GwtIncompatible;
@GwtIncompatible("Server-side only but loaded through naming convention so must be in same package as shared ProfessorRequestFactory interface")
public final class ProfessorRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("DY3VPc3xmVmnL3BTLU52R$hTU2I="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("getByEmail")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("1tE1U1QTgBzRdm7ZwiE8EBSDrrs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Professor;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("XfqPGxXVWqTIW45R1NSL08uZm7g="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllByProfileAndSubject")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("r40nsuspLjsgFmZjsa7kYiKZaMQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Professor;)V")
  .withMethodName("removeProfessor")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("icO8LjOKzxdNAD951nu$Xj20xIs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("7vC3$wpOCQmBs0$q0LXfL81qLho="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/sis/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/sis/server/Professor;)Lcom/lemania/sis/server/Professor;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("y$N9mVb8zTOBoXbs1gbgMOgSN5w="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("FASF6T$HSOeNninmyDnq50cS85c="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.sis.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withRawTypeToken("GRB8BzGrI1tM_EULmiOBQtqIX0o=", "com.lemania.sis.shared.ProfessorProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.sis.server.Professor", Arrays.asList("com.lemania.sis.shared.ProfessorProxy"));
}}
