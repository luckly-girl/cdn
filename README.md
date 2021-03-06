# <div style='text-align:center;width:100%;'>![佰讯云CDN管理云后台](./src/assets/images/logo.png)<br><font face="黑体">佰讯云CDN管理云后台</font></div>
____________________________________________
#### [测试访问地址](https://manage.sheyy.co)
### 版本迭代时间
 | 版本        | 迭代时间    |  开发人员   |
 | :----:      | :----:     | :----:     |
 | v1.0.0      | 2019-11-25 16:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v1.1.0      | 2019-12-05 12:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v1.1.1      | 2019-12-07 18:00  |   佘远怡，刘畅    |
 | v1.1.2      | 2019-12-12 11:00  |   佘远怡，雷博，刘畅    |
 | v2.0.0      | 2019-12-30 11:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v2.1.0      | 2020-02-02 12:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v2.2.0      | 2020-02-20 09:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v2.3.0      | 2020-03-02 15:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v2.3.1      | 2020-03-06 12:00  |   佘远怡，雷博，刘畅   |
 | v2.4.0      | 2020-04-15 12:00  |   佘远怡，雷博，韦琦，刘畅，夏晓杰    |
 | v2.4.1      | 2020-05-14 14:00  |   佘远怡，雷博，韦琦，刘畅   |
 | v2.4.2      | 2020-06-01 12:00  |   佘远怡，雷博，韦琦，刘畅   |
 | v2.4.3      | 2020-06-01 12:00  |   佘远怡，雷博，韦琦，刘畅   |
### 版本迭代功能
> #### V 1.*
>> 迭代版本号v 1.0.0
>>> * 迭代时间
>>>   >2019-11-25 16:00
>>> * 迭代功能： 前后台分离，首次提交，第一个版本，包含
>>>  1. CDN管理<br>
>>>  节点管理，产品管理，站点管理，安全管理，站点管理，站点检测，DNS管理，转移记录，封禁记录
>>>  2. 系统管理<br>
>>>  用户管理，角色管理，权限管理，操作日志
>>>  3. 账号管理<br>
>>>  个人详情
>>____________________________________________
>> 迭代版本号v 1.1.0
>>> * 迭代时间
>>>   >2019-12-05 12:00
>>> * 迭代功能： 
>>>  1. 新增
>>>     *  新增 版本更新功能
>>>     *  新增 换肤功能（暂时仅支持昼夜模式）
>>>     *  新增 导航栏图标
>>>     *  新增 登录记住密码加密存储本地
>>>     *  新增 站点管理 => 线路类型功能
>>>     *  新增 站点管理 => 重定向功能
>>>     *  新增 权限管理 => 新增及编辑上传导航栏图标功能
>>>  2. 调整
>>>     *  修改 导航条及头部样式
>>>     *  修改 验证用户信息方式由cookie修改为请求头token传输
>>>     *  修改 节点管理 => 监控属性的部分样式
>>>     *  修改 用户管理 => 添加及编辑的部分样式
>>>     *  修改 个人详情 => 整个页面布局调整，加入部分字段（用户名，邮箱，手机号）
>>>  3. 修复
>>>     *  修复 登录传输用户密码从明文修改为密文传输
>>>     *  修复 站点检测 => ping检测速度计算
>>>     *  修复 站点检测 => 域名检测速度计算
>>>     *  修复 产品管理 => 查看节点信息无法重置的问题
>>>     *  修复 角色管理 => 开通角色及编辑角色无法重置的问题
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 1.1.1
>>> * 迭代时间
>>>   >2019-12-07 18:00
>>> * 迭代功能： 
>>>  1. 新增
>>>     *  无
>>>  2. 调整
>>>     *  修改 安全管理 => 白名单安全组、黑名单安全组ip、国家安全组超出显示省略号并可以提供用户复制
>>>     *  修改 安全管理 => 白名单安全组、黑名单安全组ip编辑由单行输入框变成文本域输入框
>>>  3. 修复
>>>     *  修复 用户管理 => 编辑用户操作时不填写密码无法提交问题
>>>     *  修复 个人详情 => 线上老数据不规范手机号与邮箱无法提交问题
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 1.1.2
>>> * 迭代时间
>>>   >2019-12-12 11:00
>>> * 迭代功能： 
>>>  1. 新增
>>>     *  新增 站点管理 => '反代理'开启开关
>>>  2. 调整
>>>     *  修改 产品管理 => 选择节点信息同时需要选择线路类型
>>>     *  修改 产品管理 => 选择节点信息无法选择重复节点
>>>  3. 修复
>>>     *  修复所有弹窗关闭不方便点击问题
>>>  4. 移除
>>>     *  移除 站点管理 => 线路类型选择
>____________________________________________
> #### V 2.*
>> 迭代版本号v 2.0.0
>>> * 迭代时间
>>>   >2019-12-30 11:00
>>> * 迭代功能： 
>>>  1. 新增
>>>     *  新增 组织架构模块功能
>>>         1. 查看机构树
>>>         2. 新增机构及子机构
>>>         3. 编辑机构及子机构
>>>         4. 删除机构及子机构
>>>     *  新增 消息模块功能
>>>         1. 未读消息列表
>>>         2. 全部消息列表
>>>         3. 消息详情查看
>>>         4. 消息全部已读
>>>         5. 消息删除
>>>         6. 及时获取消息
>>>     *  新增 首页信息采集仪表盘功能
>>>     *  新增 前端单点登录模块功能
>>>     *  新增 角色管理 => 新增，编辑角色'增删改查'功能
>>>     *  新增 按钮级权限
>>>     *  新增 用户管理 => 新增，编辑用户'组织架构'功能
>>>  2. 调整
>>>     *  调整 权限功能整体重构
>>>     *  调整 抽离所有消息提示，统一在请求封装函数中处理
>>>     *  调整 用户管理 => 新增，编辑用户'授予角色'功能由多选变为单选
>>>     *  调整 所有分配人员板块调整为分配部门
>>>  3. 修复
>>>     *  修复 所有POST请求数据传输形式由FORM DATA改变为JSON
>>>     *  修复 个人详情 => 修改密码处不采用MD5加密
>>>     *  修复 所有弹窗点击model层关闭问题
>>>     *  修复 部分输入框样式bug，限制输入框最大输入限制等样式问题
>>>     *  修复 节点管理 => 新增、编辑部分样式
>>>     *  修复 登录页面回车键盘事件影响其他页面键盘事件
>>>     *  修复 节点管理 => 性能监控优化`echarts`部分样式
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.1.0
>>> * 迭代时间
>>>   >2020-02-02 12:00
>>> * 迭代功能： 
>>>  1. 新增
>>>     *  新增 CDN管理 => 解析记录模块
>>>     *  新增 站点管理 => DNS解析表格项
>>>     *  新增 站点管理 => 日志统计模块
>>>     *  新增 站点管理 => 列表`状态`查询条件
>>>     *  新增 节点管理 => 列表`状态`查询条件
>>>     *  新增 首页 => 点击个数跳转
>>>  2. 调整
>>>     *  前端代码层面所有请求方式合并
>>>     *  封装权限查询公共函数
>>>     *  抽取分页功能模块
>>>  3. 修复
>>>     *  优化 节点管理 => 性能监控
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.2.0
>>> * 迭代时间
>>>   >2020-02-20 09:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  新增 站点管理统计 => 柱形图与热力图切换
>>>     *  新增 站点管理统计 => 柱形图统计ip访问次数地区
>>>     *  新增 站点管理统计 => ip访问次数地区国家与省／州切换
>>>     *  新增 站点管理列表 => 证书状态，DNS解析状态，部署状态 表头状态筛选功能
>>>     *  新增 站点管理 => 新增／编辑支持IP或域名均可添加（其中不可与站点域名重复）功能
>>>     *  新增 CDN管理 => nginx菜单页
>>>  2. 调整
>>>     *  首页正常／异常状态站点筛选条件变调整为部署成功／部署失败站点
>>>     *  站点管理 => 修改站点的产品名称时增加判断条件`prohibit`
>>>     *  公共样式(全页面查询按钮样式调整)
>>>  3. 修复
>>>     *  当用户token过期后，页面访问多个接口，跳转至登录页时多提示弹窗的bug
>>>     *  去除打包后控制台打印
>>>  4. 移除
>>>     *  移除 站点管理 => 列表中端口号一项
>>____________________________________________
>> 迭代版本号v 2.3.0
>>> * 迭代时间
>>>   >2020-03-02 15:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  节点管理 => 转移站点点击查看后跳转至站点管理处自动删选出选择的站点
>>>     *  站点管理 => 日志统计新增pv,uv统计图和爬虫数量统计图
>>>     *  站点管理 => 日志统计新增流量统计图和IPtop20统计图
>>>     *  站点管理 => 编辑站点域名新增收起/展开功能
>>>     *  站点管理 => 编辑站点 waf 防护 cookie安全防护，参数检测，url过滤的规则，User-Agent的过滤
>>>  2. 调整
>>>     *  节点管理 => 头部状态搜索修改为表头搜索
>>>     *  封禁记录 => 头部状态搜索修改为表头搜索
>>>     *  所有头部搜索只有输入框的页面统一样式，统一为放大镜点击搜索或回车搜索
>>>     *  所有头部有添加按钮页面统一样式，统一添加按钮在搜索框前
>>>     *  站点管理 => 列表中域名超出显示省略号
>>>     *  站点管理 => 所有折线统计图辅助线调整为虚线，颜色变浅
>>>     *  隐藏节点列表，监控的设置参数规则
>>>  3. 修复
>>>     *  站点管理搜索后翻页搜索数据消失的bug
>>>     *  修复 站点管理 => 域名过长导致的页面布局混乱
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.3.1
>>> * 迭代时间
>>>   >2020-03-16 17:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  站点管理 => 编辑 => 路径及路径ip校验
>>>  2. 调整
>>>     *  节点管理 => 新增／编辑 => ssh密码采用密文传输
>>>     *  节点管理 => 新增／编辑 => ssh密码显示改为明文
>>>     *  站点管理 => 部署状态 => 部署失败调整为显示节点列表，可单独部署或一键部署
>>>     *  站点管理 => DNS解析状态 => 解析失败调整为显示节点列表，可单独解析或一键解析
>>>     *  站点管理 => 编辑 => 更多 => cc防护访问频次暂时屏蔽
>>>     *  站点管理 => 新增／编编 => 暂时屏蔽端口号填写
>>>     *  站点管理 => 编编 => 路径对应ip可填写多个
>>>  3. 修复
>>>     *  修复首次登陆 DNS页面 编辑弹框布局（input框和文字布局混乱）
>>>     *  修复用户管理 编辑/添加 组织结构下拉框展示（改为只能看到下级部门）
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.4.0
>>> * 迭代时间
>>>   >2020-04-15 12:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  节点管理 => 防火墙状态切换
>>>     *  站点管理 => 编辑中信息填写tab（403页面展示）
>>>     *  站点管理 => 编辑/新增 => ip填写处暂停/开启功能
>>>     *  站点管理 => 列表新增状态栏
>>>     *  站点管理 => 列表状态`预部署`行高亮提醒
>>>     *  站点管理 => 列表状态`预部署`点击执行手动部署任务
>>>     *  首页 => 站点信息处新增预部署状态
>>>     *  新增流量修改页面
>>>  2. 调整
>>>     *  解析纪录 => 列表处理状态的失败状态由2改为3
>>>     *  站点管理 => 新增／编编 => 开放端口号填写
>>>     *  站点管理 => 新增／编编 => 域名默认收起状态
>>>     *  站点管理 => 新增／编编 => 安全 => 关闭开启日志分析黑名单不再重置封禁时间与封禁规则改为提交时判断
>>>     *  站点管理 => 列表中证书申请状态去除取消申请的状态以及取消申请操作
>>>     *  首页 => 部分权限用户显示全列表，数据为0，数据变灰无法跳转
>>>     *  站点管理 => 列表状态由`未部署`调整为`预部署`
>>>     *  站点管理 => 列表中dns解析状态列、证书申请状态列、部署状态列提前到域名之后
>>>     *  站点管理 => 列表中证书状态申请成功修改为复合状态，包含自动/手动申请状态判断
>>>  3. 修复
>>>     *  无权限操作特殊状态码处理
>>>     *  解决权限导致列表数据显示不正常的bug（重新接入新的列表接口，包括白名单，黑名单，国家安全组，用户授予角色，dns列表，产品列表，节点列表）
>>>     *  解决权限导致安全组接口报错bug（后台新增判断字段safeType）
>>>     *  解决节点管理新增编辑提交时ssh密码瞬间显示密文的bug
>>>     *  解决操作日志列表 => 请求参数过长超出屏幕的bug
>>>     *  解决新增顶级菜单样式错乱问题
>>>  4. 移除
>>>     *  站点管理 => 列表移除http/https类型列
>>____________________________________________
>> 迭代版本号v 2.4.1
>>> * 迭代时间
>>>   >2020-05-18 14:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  新增注册功能
>>>     *  系统管理 => 工单管理（暂时仅针对admin用户）
>>>     *  头部 => 新增提交工单与历史工单功能
>>>  2. 调整
>>>     *  所有列表页列表数据请求添加loading动画
>>>     *  节点管理 => 编辑 => SSH用户名、SSH密码、SSH端口号、备注修改为非必填字段
>>>     *  站点管理 => 编辑/新增 => 端口号不可填写为‘22’
>>>  3. 修复
>>>     *  修复用户未登录直接访问登录以外页面白屏问题
>>>     *  所有带有分配的页面加入原有的权限控制分配的显示
>>>     *  用户管理开通与编辑用户加入4-16位英文或数字的校验
>>>     *  站点管理 => 编辑 => 域名处大于两个域名可以删除第一个域名
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.4.2
>>> * 迭代时间
>>>   >2020-06-01 12:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  新增系统管理 => 高危IP模块
>>>     *  高危IP => 新增黑名单组功能
>>>     *  站点管理 => 更多 => 新增DNS劫持测试
>>>  2. 调整
>>>     *  安全组名限制长度为20个字符
>>>     *  产品管理、站点管理中添加/删除切换按钮调整为iconfont形式，数组长度大于1时第一项可以删除
>>>     *  节点管理，产品管理，安全管理名称增加不能填写空格的校验
>>>  3. 修复
>>>     *  站点管理 => 列表日志统计 => 当产品管理中日志采集为切换中时新增提示无法开启
>>>     *  站点管理 => 新增查询条件后同样支持回车搜索
>>>  4. 移除
>>>     *  无
>>____________________________________________
>> 迭代版本号v 2.4.3
>>> * 迭代时间
>>>   >2020-06-18 12:00
>>> * 迭代功能：
>>>  1. 新增
>>>     *  新增系统管理 => 新闻管理模块
>>>     *  新增系统管理 => 加入我们模块
>>>     *  站点管理 => 部署失败新增步骤条
>>>     *  站点管理 => 编辑 => 基础 => 新增反向代理路径
>>>     *  节点管理 => 新增版本更新状态以及版本号
>>>     *  左下侧 => 版本更新中显示成功，更新中，失败的节点个数
>>>  2. 调整
>>>     *  站点管理 => 解析失败与部署失败合并
>>>  3. 修复
>>>     *  修复初始化访问其他路由重定向到登录页的bug
>>>  4. 移除
>>>     *  无
