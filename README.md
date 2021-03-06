# Ada Render

### 概要

``adarender``是一个``开箱即用``的``markdown``渲染器，除了对``github``的``markdown``语法支持外，它还有一套自己扩展的图表语法。  
``adarender``可以通过命令行或grpc服务2种方式来渲染页面。  

``adarender``的初衷是提供一套方便的文档输出方案，让用户专注于文档本身，而不需要关注复杂的css排版技巧。  

``adarender``适合用于文档或报表输出的渲染步骤。

### 安装 & 使用

可以通过npm安装，然后命令行方式使用。

``` bash
npm i adarender -g
```

然后，通过这样来渲染。

``` bash
adarender exportmd -o samples/output001.html -t samples/template.hbs samples/sample001.md
```

例子文件[在这里](https://github.com/zhs007/adarender/blob/master/samples/sample001.md)。
最后生成的页面如下:

![output](https://github.com/zhs007/adarender/blob/master/samples/output.png)

