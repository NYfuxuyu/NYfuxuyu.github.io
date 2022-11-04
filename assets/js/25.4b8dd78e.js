(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{505:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("Spring框架")])]),t._v(" "),s("h2",{attrs:{id:"使用spring框架的好处是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用spring框架的好处是什么？"}},[t._v("#")]),t._v(" 使用Spring框架的好处是什么？")]),t._v(" "),s("ul",[s("li",[t._v("**轻量：**Spring 是轻量的，基本的版本大约2MB")]),t._v(" "),s("li",[t._v("**控制反转：**Spring通过控制反转实现了松散耦合，对象们给出它们的依赖，而不是创建或查找依赖的对象们")]),t._v(" "),s("li",[t._v("**面向切面的编程(AOP)：**Spring支持面向切面的编程，并且把应用业务逻辑和系统服务分开")]),t._v(" "),s("li",[t._v("**容器：**Spring 包含并管理应用中对象的生命周期和配置")]),t._v(" "),s("li",[t._v("**MVC框架：**Spring的WEB框架是个精心设计的框架，是Web框架的一个很好的替代品")]),t._v(" "),s("li",[t._v("**事务管理：**Spring 提供一个持续的事务管理接口，可以扩展到上至本地事务下至全局事务（JTA）")]),t._v(" "),s("li",[t._v("**异常处理：**Spring 提供方便的API把具体技术相关的异常（比如由JDBC，Hibernate or JDO抛出的）转化为一致的unchecked 异常。")])]),t._v(" "),s("h2",{attrs:{id:"spring-ioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc"}},[t._v("#")]),t._v(" Spring Ioc")]),t._v(" "),s("h3",{attrs:{id:"什么是spring-ioc-容器？有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是spring-ioc-容器？有什么用"}},[t._v("#")]),t._v(" 什么是Spring IoC 容器？有什么用")]),t._v(" "),s("p",[t._v("简单来说就是将创建对象的控制权交给Spring框架，IoC是控制反转的意思，这里的"),s("strong",[t._v("控制")]),t._v("就是指创建对象的控制权，"),s("strong",[t._v("反转")]),t._v("是指将本来在程序中创建对象的权力交给Spring。")]),t._v(" "),s("p",[t._v("IoC并不是Spring独有的，而是一种思想，IoC主要的优点有两个，"),s("strong",[t._v("降低代码之间的耦合度")]),t._v("和"),s("strong",[t._v("集中资源同一管理，简化开发")])]),t._v(" "),s("p",[t._v("在Spring框架中，mian方法中创建对象的活是由Spring做的，程序员只需要通过Xml或者注解的形式进行配置就行了。")]),t._v(" "),s("p",[t._v("IoC还有一种说法就是DI（Dependency Injection），依赖注入。至于IoC和DI的关系有一种说法是，IoC是一种思想，而DI是IoC的一种实现方式。那什么是依赖注入呢？其实很好理解，就是将你现在需要的对象给你注入进来，比如上述代码中，Grade类中需要C对象，就可以搞个注解或者Xml配置文件，告诉Spring需要C对象，让他创建好了注入进来。")]),t._v(" "),s("h3",{attrs:{id:"ioc容器初始化过程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ioc容器初始化过程？"}},[t._v("#")]),t._v(" IOC容器初始化过程？")]),t._v(" "),s("p",[t._v("ioc 容器初始化过程：BeanDefinition 的资源定位、解析和注册。")]),t._v(" "),s("ol",[s("li",[t._v("从XML中读取配置文件。")]),t._v(" "),s("li",[t._v("将bean标签解析成 BeanDefinition，如解析 property 元素， 并注入到 BeanDefinition 实例中。")]),t._v(" "),s("li",[t._v("将 BeanDefinition 注册到容器 BeanDefinitionMap 中。")]),t._v(" "),s("li",[t._v("BeanFactory 根据 BeanDefinition 的定义信息创建实例化和初始化 bean。")])]),t._v(" "),s("p",[t._v("单例bean的初始化以及依赖注入一般都在容器初始化阶段进行，只有懒加载（lazy-init为true）的单例 bean是在应用第一次调用getBean()时进行初始化和依赖注入。")]),t._v(" "),s("p",[t._v("多例bean 在容器启动时不实例化，即使设置 lazy-init 为 false 也没用，只有调用了getBean()才进行实 例化。")]),t._v(" "),s("p",[t._v("loadBeanDefinitions 采用了模板模式，具体加载 BeanDefinition 的逻辑由各个子类完成。")]),t._v(" "),s("h3",{attrs:{id:"什么是依赖注入？可以通过多少种方式完成依赖注入？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是依赖注入？可以通过多少种方式完成依赖注入？"}},[t._v("#")]),t._v(" 什么是依赖注入？可以通过多少种方式完成依赖注入？")]),t._v(" "),s("p",[t._v("在依赖注入中，您不必创建对象，但必须描述如何创建它们。您不是直接在代码中将组件和服务连接在一起，而是描述配置文件中哪些组件需要哪些服务。由 IoC 容器将它们装配在一起。")]),t._v(" "),s("p",[t._v("通常，依赖注入可以通过三种方式完成，即：")]),t._v(" "),s("ul",[s("li",[t._v("构造函数注入")]),t._v(" "),s("li",[t._v("setter 注入（属性注入）")])]),t._v(" "),s("p",[t._v("在 Spring Framework 中，仅使用构造函数和 setter 注入。")]),t._v(" "),s("h3",{attrs:{id:"如何选择合适的依赖注入方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的依赖注入方式？"}},[t._v("#")]),t._v(" 如何选择合适的依赖注入方式？")]),t._v(" "),s("p",[t._v("在实际应用中，没有最好的依赖注入方式，只有最合适的依赖注入方式")]),t._v(" "),s("p",[s("strong",[t._v("选择构造函数注入的理由：")])]),t._v(" "),s("ul",[s("li",[t._v("不需要为每个属性提供Setter方法，减少了类的方法个数")]),t._v(" "),s("li",[t._v("构造函数可以保证一些重要的属性在Bean实例化时就设置好，避免因为一些重要属性没有提供而导致一个无用Bean实例的情况")]),t._v(" "),s("li",[t._v("可以吧更好地封装变量，不需要为每个属性指定Setter的方法，避免外部错误调用")])]),t._v(" "),s("p",[s("strong",[t._v("选择属性注入的理由：")])]),t._v(" "),s("ul",[s("li",[t._v("如果类的属性很多，构造函数将会变得非常臃肿，可读性较差")]),t._v(" "),s("li",[t._v("构造函数注入不够灵活，如果有些属性是可选的，也需要为可选参数提供null值")]),t._v(" "),s("li",[t._v("存在多个构造函数，需要配置文件和构造函数配置歧义问题，配置比较复杂")]),t._v(" "),s("li",[t._v("构造函数不利于类的集成和扩展，因为子类需要引用父类复杂的构造函数")]),t._v(" "),s("li",[t._v("构造函数注入可能产生循环依赖问题")])]),t._v(" "),s("h3",{attrs:{id:"spring-ioc-的实现机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc-的实现机制"}},[t._v("#")]),t._v(" Spring IoC 的实现机制")]),t._v(" "),s("p",[t._v("其实这里主要涉及三块知识点，xml文件的配置及解析、工厂模式、反射，可能有些人对反射比较陌生，反射是指是 Java 在运行时（Run time）可以访问、检测和修改它本身状态或行为的一种能力，它允许运行中的 Java 程序获取自身的信息，并且可以操作类或对象的内部属性。")]),t._v(" "),s("p",[t._v("简单来说就是通过解析xml文件获取到对象信息，通过反射获取字节码文件，然后通过字节码文件创建对象，并且在创建对象的过程中使用了工厂模式。")]),t._v(" "),s("h3",{attrs:{id:"beanfactory-和-applicationcontext有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-和-applicationcontext有什么区别？"}},[t._v("#")]),t._v(" BeanFactory 和 ApplicationContext有什么区别？")]),t._v(" "),s("p",[t._v("BeanFactory和ApplicationContext是Spring的两大核心接口，都可以当做Spring的容器。至于它们之间的关系，可以打开idea，查看它们的UML类图，如下，从可以看出ApplicationContext是BeanFactory的子接口")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://guli-file-fxy.oss-cn-shanghai.aliyuncs.com/img/202205302120828.png",alt:"图片"}})]),t._v(" "),s("p",[s("strong",[t._v("两者之间的区别")]),t._v("：")]),t._v(" "),s("p",[s("strong",[t._v("作用")])]),t._v(" "),s("p",[t._v("BeanFactory接口作用：是Spring里面最底层的接口，包含了各种Bean的定义，读取bean配置文档，管理bean的加载、实例化，控制bean的生命周期，维护bean之间的依赖关系。")]),t._v(" "),s("p",[t._v("ApplicationContext接口作用：ApplicationContext接口作为BeanFactory的派生，除了提供BeanFactory所具有的功能外，还有额外的功能")]),t._v(" "),s("ul",[s("li",[t._v("提供在监听器中注册bean的事件")]),t._v(" "),s("li",[t._v("载入多个（有继承关系）上下文 ，使得每一个上下文都专注于一个特定的层次，比如应用的web层")]),t._v(" "),s("li",[t._v("同时加载多个配置文件")]),t._v(" "),s("li",[t._v("统一的资源文件访问方式")]),t._v(" "),s("li",[t._v("继承MessageSource，因此支持国际化")])]),t._v(" "),s("p",[s("strong",[t._v("加载方式")])]),t._v(" "),s("p",[t._v("BeanFactroy：采用的是延迟加载形式来注入Bean，也就是只有在使用到某个bean时，才会对该bean进行加载实例化，这样的弊端很明显，就是如果spring的配置存在问题，那么只有BeanFactory加载后，使用到这个bean时才可以发现问题。")]),t._v(" "),s("p",[t._v("ApplicationContext：ApplicationContext采用的是预加载机制，在容器启动时，一次性创建所有的bean。这种可以避免BeanFactory接口中出现的问题，容器启动时就可以发现Spring配置中存在的错误，但缺点是会占用内存空间，并且当配置的bean较多时，程序启动会变慢。")]),t._v(" "),s("p",[s("strong",[t._v("创建方式")])]),t._v(" "),s("p",[t._v("BeanFactroy：采用编程的方式创建，如"),s("code",[t._v('BeanFactory factory = new XmlBeanFactory (new ClassPathResource("beans.xml"));')])]),t._v(" "),s("p",[t._v("ApplicationContext：除了采用编程的方式创建，还可以使用声明的方式创建，在web.xml文件添加如下代码")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--指定Spring配置文件的位置，有多个配置文件时，以逗号分隔--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("context-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("contextConfigLocation"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--spring将加载spring目录下的applicationContext.xml文件--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        classpath:spring/applicationContext.xml\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("context-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--指定以ContextLoaderListener方式启动Spring容器--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        org.springframework.web.context.ContextLoaderListener\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("注册方式")])]),t._v(" "),s("p",[t._v("BeanFactory和ApplicationContext都支持BeanPostProcessor、BeanFactoryPostProcessor的使用，但两者之间的区别是：BeanFactory需要手动注册，而ApplicationContext则是自动注册。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("BeanFactory")]),t._v(" "),s("th",[t._v("ApplicationContext")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("它使用懒加载")]),t._v(" "),s("td",[t._v("它使用即时加载")])]),t._v(" "),s("tr",[s("td",[t._v("它使用语法显式提供资源对象")]),t._v(" "),s("td",[t._v("它自己创建和管理资源对象")])]),t._v(" "),s("tr",[s("td",[t._v("不支持国际化")]),t._v(" "),s("td",[t._v("支持国际化")])]),t._v(" "),s("tr",[s("td",[t._v("不支持基于依赖的注解")]),t._v(" "),s("td",[t._v("支持基于依赖的注解")])])])]),t._v(" "),s("h2",{attrs:{id:"spring-aop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[t._v("#")]),t._v(" Spring AOP")]),t._v(" "),s("p",[t._v("面向切面编程，作为面向对象的一种补充，将公共逻辑（事务管理、日志、缓存等）封装成切面，跟业 务代码进行分离，可以减少系统的重复代码和降低模块之间的耦合度。切面就是那些与业务无关，但所 有业务模块都会调用的公共逻辑。")]),t._v(" "),s("h3",{attrs:{id:"aop有哪些实现方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aop有哪些实现方式？"}},[t._v("#")]),t._v(" AOP有哪些实现方式？")]),t._v(" "),s("p",[t._v("AOP有两种实现方式：静态代理和动态代理。")]),t._v(" "),s("p",[s("strong",[t._v("静态代理")])]),t._v(" "),s("p",[t._v("静态代理：代理类在编译阶段生成，在编译阶段将通知织入Java字节码中，也称编译时增强。AspectJ使 用的是静态代理。 缺点：代理对象需要与目标对象实现一样的接口，并且实现接口的方法，会有冗余代码。同时，一旦接 口增加方法，目标对象与代理对象都要维护。")]),t._v(" "),s("p",[s("strong",[t._v("动态代理")])]),t._v(" "),s("p",[t._v("动态代理：代理类在程序运行时创建，AOP框架不会去修改字节码，而是在内存中临时生成一个代理对 象，在运行期间对业务方法进行增强，不会生成新类。")]),t._v(" "),s("h3",{attrs:{id:"jdk动态代理和cglib动态代理的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk动态代理和cglib动态代理的区别"}},[t._v("#")]),t._v(" JDK动态代理和CGLIB动态代理的区别")]),t._v(" "),s("p",[t._v("Spring AOP中的动态代理主要有两种方式：JDK动态代理和CGLIB动态代理。")]),t._v(" "),s("p",[s("strong",[t._v("JDK动态代理")])]),t._v(" "),s("p",[t._v("如果目标类实现了接口，Spring AOP会选择使用JDK动态代理目标类。代理类根据目标类实现的接口动 态生成，不需要自己编写，生成的动态代理类和目标类都实现相同的接口。JDK动态代理的核心是 InvocationHandler 接口和 Proxy 类。")]),t._v(" "),s("p",[t._v("缺点：目标类必须有实现的接口。如果某个类没有实现接口，那么这个类就不能用JDK动态代理")]),t._v(" "),s("p",[s("strong",[t._v("CGLIB来动态代理")])]),t._v(" "),s("p",[t._v("通过继承实现。如果目标类没有实现接口，那么Spring AOP会选择使用CGLIB来动态代理目标类。 CGLIB（Code Generation Library）可以在运行时动态生成类的字节码，动态创建目标类的子类对象， 在子类对象中增强目标类。")]),t._v(" "),s("p",[t._v("CGLIB是通过继承的方式做的动态代理，因此如果某个类被标记为 final ，那么它是无法使用CGLIB做动态代理的。")]),t._v(" "),s("p",[t._v("优点：目标类不需要实现特定的接口，更加灵活。")]),t._v(" "),s("p",[t._v("什么时候采用哪种动态代理？")]),t._v(" "),s("ol",[s("li",[t._v("如果目标对象实现了接口，默认情况下会采用JDK的动态代理实现AOP")]),t._v(" "),s("li",[t._v("如果目标对象实现了接口，可以强制使用CGLIB实现AOP")]),t._v(" "),s("li",[t._v("如果目标对象没有实现了接口，必须采用CGLIB库")])]),t._v(" "),s("p",[s("strong",[t._v("两者的区别：")])]),t._v(" "),s("ol",[s("li",[t._v("jdk动态代理使用jdk中的类Proxy来创建代理对象，它使用反射技术来实现，不需要导入其他依 赖。cglib需要引入相关依赖：asm.jar，它使用字节码增强技术来实现。")]),t._v(" "),s("li",[t._v("当目标类实现了接口的时候Spring Aop默认使用jdk动态代理方式来增强方法，没有实现接口的时 候使用cglib动态代理方式增强方法。")])]),t._v(" "),s("h3",{attrs:{id:"spring-aop相关术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop相关术语"}},[t._v("#")]),t._v(" Spring AOP相关术语")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://guli-file-fxy.oss-cn-shanghai.aliyuncs.com/img/202206011636820.png",alt:"image-20220601163647715"}})]),t._v(" "),s("h2",{attrs:{id:"spring-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean"}},[t._v("#")]),t._v(" Spring Bean")]),t._v(" "),s("h3",{attrs:{id:"什么是spring-bean？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是spring-bean？"}},[t._v("#")]),t._v(" 什么是Spring bean？")]),t._v(" "),s("p",[t._v("Spring bean是Spring框架在运行时管理的对象，比如在xml进行配置的bean。")]),t._v(" "),s("h3",{attrs:{id:"将一个类声明为spring的-bean-的注解有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将一个类声明为spring的-bean-的注解有哪些"}},[t._v("#")]),t._v(" 将一个类声明为Spring的 bean 的注解有哪些?")]),t._v(" "),s("p",[t._v("Spring中将类声明为Bean的注解主要有以下几个：")]),t._v(" "),s("ul",[s("li",[t._v("@Component，通用的注解，可标注任意类为 Spring 组件。如果一个Bean不知道属于哪个层，通常使用这个")]),t._v(" "),s("li",[t._v("@Controller，对应 Spring MVC控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面。")]),t._v(" "),s("li",[t._v("@Repostory，对应持久层即 Dao 层，主要用于数据库相关操作。")]),t._v(" "),s("li",[t._v("@Service，对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao层。")])]),t._v(" "),s("h3",{attrs:{id:"bean注入容器有哪些方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean注入容器有哪些方式"}},[t._v("#")]),t._v(" Bean注入容器有哪些方式")]),t._v(" "),s("p",[t._v("1、使用 @Configuration 与 @Bean 注解")]),t._v(" "),s("p",[t._v("2、使用 @Controller 、 @Service 、 @Repository 、 @Component 注解标注该类，然后启用 @ComponentScan 自动扫描")]),t._v(" "),s("p",[t._v("3、使用 @Import 方法。使用@Import注解把bean导入到当前容器中，代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*把用到的资源导入到当前容器中*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigurableApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tcontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"如何给spring-容器提供配置元数据？spring有几种配置方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何给spring-容器提供配置元数据？spring有几种配置方式？"}},[t._v("#")]),t._v(" 如何给Spring 容器提供配置元数据？Spring有几种配置方式？")]),t._v(" "),s("p",[t._v("Spring配置元数据的方式主要有三种方式：")]),t._v(" "),s("ul",[s("li",[t._v("基于XML文件配置元数据")]),t._v(" "),s("li",[t._v("基于注解配置元数据")]),t._v(" "),s("li",[t._v("基于Java类配置元数据")])]),t._v(" "),s("p",[t._v("之前举了很多例子都是基于XML文件配置元数据，下面简单说说基于注解和基于Java类配置元数据")]),t._v(" "),s("h5",{attrs:{id:"基于注解配置元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于注解配置元数据"}},[t._v("#")]),t._v(" 基于注解配置元数据")]),t._v(" "),s("p",[t._v("其实无论是XML文件还是注解，本质上都是为Spring容器提供Bean定义的信息，采用XML文件和采用注解的区别就是，采用XML文件配置元数据时，Bean定义信息和Bean实现类本身是分离的，而采用注解配置元数据时，Bean定义信息可以在Bean实现类上直接标注注解实现。")]),t._v(" "),s("p",[t._v("前面刚提到将一个类声明名为bean的注解有哪些，其实用注解配置元数据还是非常简单的，就是在类上面加上注解就好了，如下")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" freebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("除了在类上面直接加注解，还得在XML文件中定义下扫描包用于扫描注解定义的Bean，如下")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans\n       http://www.springframework.org/schema/beans/spring-beans.xsd\n       http://www.springframework.org/schema/context\n       http://www.springframework.org/schema/context/spring-context-3.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后就可以进行依赖注入了，通过@Autowired注解，如下")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" freebugService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将上面定义的Bean注入")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LuRenZhang")]),t._v(" luRenZhang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"基于java类配置元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于java类配置元数据"}},[t._v("#")]),t._v(" 基于Java类配置元数据")]),t._v(" "),s("p",[t._v("基于Java类配置元数据也很简单，需要两个注解，在类上标注@Configuration，标注这个注解的类表示其是作为Bean定义的来源，在类中的方法上标注@Bean定义Bean，如下")]),t._v(" "),s("p",[t._v("先写个User类")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名字："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 年龄："')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再写个Bean配置类")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"路人张"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过"),s("code",[t._v("AnnotationConfigApplicationContext")]),t._v("实例化Spring容器，如下")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" application "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也可以通过注解@Autowired注入")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("School")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    .......")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("类比XML文件配置元数据，@Configuration相当于XML文件中beans的，@Bean相当于XML文件中bean的，就好理解多了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);