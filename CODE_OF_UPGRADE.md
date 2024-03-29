### mark15 开发流程

1. 获取项目

   > git clone http://e.coding.byd.com/rsd/chexingxiangmuguanlipingtai/mark15.git

2. 切换开发分支

   > git checkout -b develop

3. 安装依赖(npm > 9.0.0)

   > npm npm-install / pnpm install

4. 启动

   > npm start / pnpm start

5. 开发

> 1. 开发目录结构
>
> ```
> components                  组件目录
> └───_mark-patch             开发目录
> │   └───[组件名称]           修改的组件
> │   |   └───style           样式文文件夹
> |   |   |   └───index.ts    自定义样式文件
> │   |   └───[补充组件].tsx   补充组件文件
> |   └───cssAtomPatch.ts     css变量文件
> └───_mark-style             定制化样式文件
> |   |───markTheme.ts        antd主题定制变量配置文件（全局Token/组件Token）
> ```
>
> 2. 基本准则：优先使用<span style='color:red'>主题定制</span>功能，不能定制的再修改组件源码；
> 3. 所有的源码修改都采用文件外引入的方式，<span style='color:red'>不允许</span>直接修改ant原文件；
> 4. 尽量定义<span style='color:red'>公共变量</span>，便于复用；
> 5. 文件内修改源码的位置增加<span style='color:red'>注释</span>，注释以<span style='color:red'>[mark15]</span>开始；
> 6. 参考示例 collapse

6. 提交
   > git status
   >
   > git add [提交的文件]
   >
   > git commit -m 'message'
   >
   > git pull -r
   >
   > git push mark15 develop
