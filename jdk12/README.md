
## 注意事项

### 依赖支持

- 使用了新版本，每个版本的使用寿命为六个月,每个版本只有在六个月内提供安全补丁

- 构建工具和 IDE：Maven，Gradle，Checkstyle，JaCoCo，PMD，SpotBugs

- 依赖关系：直接依赖项 技术堆栈中的所有内容 字节码操作库 ByteBuddy 和 ASM

- 框架支持：Spring SpringBoot Jakarta EE

### 云 / 托管 / 部署

- AWS Lambda 中运行代码，则无法控制。AWS Lambda 没有采用 Java 9或10，甚至没有采用 Java 11。所以除非 AWS 提供公共保证以支持每个新的 Java 版本，否则根本无法采用 Java 12。
     
- 托管你CI系统：Jenkins, Travis, Circle, Shippable, GitLab 

### 新版本更新依赖清单

- Amazon AWS
  
- IntelliJ
  
- Eclipse
  
- Travis CI
  
- Shippable CI
  
- Maven
  
- Maven plugins (compile, jar, source, javadoc, etc)
  
- Checkstyle, 以及相关的 IDE 插件和 maven 插件
  
- JaCoCo, 以及相关的 IDE 插件和 maven 插件
  
- PMD 和相关的 maven 插件
  
- SpotBugs 和相关的 maven 插件
  
- OSGi bundle metadata tool
  
- Bytecode 工具(Byte buddy / ASM etc)
  
- 超过 100 个 jar 包依赖项

