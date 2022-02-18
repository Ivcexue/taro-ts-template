# 轻萤OA小助手

## 初始化

```bash
$ yarn install
```
## 项目运行
### 微信环境
```bash
开发:
$ yarn dev:weapp-dev 

测试:
$ yarn dev:weapp-test 

生产:
$ yarn dev:weapp-prod
```

## 项目打包
### 微信环境
```bash
开发:
$ yarn build:weapp-dev 

测试:
$ yarn build:weapp-test 

生产:
$ yarn build:weapp-prod
```
## 文件目录
```markdown
|-- gd-oa-assistant
    |-- config                  项目配置文件
    |-- dist                    编译结果目录
    |-- src                     源码目录
    |   |-- app.config.ts       项目入口配置
    |   |-- app.scss            项目总通用样式
    |   |-- app.tsx             项目入口文件
    |   |-- index.html
    |   |-- api                 请求服务
    |   |   |-- index.ts        入口文件
    |   |   |-- request.ts      请求封装
    |   |   |-- modules         API-modules
    |   |   |-- common.ts       公共接口文件
    |   |-- assets              静态资源文件
    |   |   |-- images
    |   |-- components          公共组件
    |   |-- hooks               custom-hooks
    |   |-- pages               页面文件目录
    |   |-- plugins             插件引入
    |   |-- store               状态管理
    |   |-- types               @types定义目录
    |   |-- utils               工具类
    |       |-- index.ts        
    |       |-- tokenSDK.ts     token操作SDK
    |-- __JSON__SERVER__        MOCK-SERVER
        |-- db.json
```

## 项目Git 提交流程
```bash
$ git add .
$ git cz || yarn commit
$ yarn release (可忽略操作)
$ git push
```
