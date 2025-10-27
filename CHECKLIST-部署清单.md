# ✅ 沪乐锦公寓系统 - Supabase 版部署清单

## 🎯 完成进度跟踪

请按顺序完成以下步骤，打钩确认：

---

## 第一步：Supabase 数据库配置

### □ 1.1 创建 Supabase 项目
- [ ] 访问 https://supabase.com 并注册/登录
- [ ] 点击 "New Project" 创建新项目
- [ ] 项目名称：`apartment-system` (可自定义)
- [ ] 选择数据库密码（请妥善保管）
- [ ] 选择区域：`Southeast Asia (Singapore)` 或最近的区域
- [ ] 等待项目创建完成（约2分钟）

### □ 1.2 获取连接信息
- [ ] 进入项目 Dashboard
- [ ] 点击左侧 Settings > API
- [ ] 复制 `Project URL`：https://xxxxxxx.supabase.co
- [ ] 复制 `anon public` API Key

### □ 1.3 执行建表 SQL
- [ ] 打开浏览器，访问 `supabase-test.html`
- [ ] 复制页面下方显示的完整 SQL 代码
- [ ] 在 Supabase Dashboard，左侧菜单找到 `SQL Editor`
- [ ] 点击 `New Query`，粘贴 SQL 代码
- [ ] 点击右下角 `Run` 按钮执行
- [ ] 确认返回 "Success. No rows returned"

### □ 1.4 测试数据库连接
- [ ] 回到 `supabase-test.html` 页面
- [ ] 点击 "1️⃣ 测试基础连接" 按钮
- [ ] 确认显示 ✅ 绿色成功提示
- [ ] 依次点击其他测试按钮，确保全部通过
- [ ] 点击 "🗑️ 清空测试数据" 清理测试内容

---

## 第二步：配置代码文件

### □ 2.1 更新 Supabase 配置
打开 `supabase-adapter.js` 文件，找到第6-7行：

```javascript
const SUPABASE_URL = 'https://myfgadrghcodwswfjdwe.supabase.co';
const SUPABASE_KEY = 'eyJhbGci...（很长的字符串）';
```

- [ ] 将 `SUPABASE_URL` 替换为您的项目 URL
- [ ] 将 `SUPABASE_KEY` 替换为您的 anon public key
- [ ] 保存文件

### □ 2.2 配置管理员账号（可选）
打开 `1.html` 文件，找到约477行：

```javascript
const ADMIN_ACCOUNTS = ['15316990186','15021560258',...];
const ADMIN_PASSWORD = '125811234';
```

- [ ] 修改管理员手机号列表
- [ ] 修改管理员密码
- [ ] 保存文件

### □ 2.3 准备部署文件
- [ ] 将 `1.html` 重命名为 `index.html`
- [ ] 确保 `supabase-adapter.js` 在同一目录
- [ ] 确保两个文件编码为 UTF-8

---

## 第三步：本地测试

### □ 3.1 启动本地服务器

**方式1：使用 Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**方式2：使用 Node.js**
```bash
npx http-server -p 8000
```

**方式3：使用 VS Code 插件**
- [ ] 安装 "Live Server" 插件
- [ ] 右键 `index.html` > "Open with Live Server"

### □ 3.2 测试功能
- [ ] 打开浏览器访问 http://localhost:8000
- [ ] 查看首页是否正常显示房源列表
- [ ] 测试添加一个房源（需先登录后台）
- [ ] 刷新页面，确认新房源依然存在
- [ ] 打开浏览器控制台 (F12)，查看是否有错误

### □ 3.3 跨浏览器测试
- [ ] 在 Chrome 添加一条数据
- [ ] 打开 Firefox/Edge 访问相同地址
- [ ] 确认数据已同步显示

---

## 第四步：部署到 GitHub Pages

### □ 4.1 创建 GitHub 仓库
- [ ] 登录 https://github.com
- [ ] 点击右上角 "+" > "New repository"
- [ ] 仓库名称：`apartment-system` (可自定义)
- [ ] 选择 "Public"（私有仓库需要 GitHub Pro）
- [ ] ✅ 勾选 "Add a README file"
- [ ] 点击 "Create repository"

### □ 4.2 上传文件

**方式1：网页上传（推荐新手）**
- [ ] 点击 "Add file" > "Upload files"
- [ ] 拖拽 `index.html` 和 `supabase-adapter.js`
- [ ] 在下方输入提交信息："初始化公寓管理系统"
- [ ] 点击 "Commit changes"

**方式2：Git 命令行**
```bash
git init
git add index.html supabase-adapter.js
git commit -m "初始化公寓管理系统"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

- [ ] 命令执行成功，无错误提示

### □ 4.3 启用 GitHub Pages
- [ ] 进入仓库，点击 "Settings"
- [ ] 左侧菜单找到 "Pages"
- [ ] Source 选择 "Deploy from a branch"
- [ ] Branch 选择 "main"，文件夹选择 "/ (root)"
- [ ] 点击 "Save"
- [ ] 等待约 1-2 分钟

### □ 4.4 访问部署网站
- [ ] 页面顶部会显示：`Your site is live at https://xxx.github.io/xxx/`
- [ ] 点击链接访问
- [ ] 确认网站正常显示
- [ ] 测试添加数据功能

---

## 第五步：初始化数据

### □ 5.1 登录后台
- [ ] 点击右上角 "管理员入口"
- [ ] 输入账号：`15021560258`（或您配置的账号）
- [ ] 输入密码：`125811234`（或您配置的密码）
- [ ] 成功进入后台管理界面

### □ 5.2 检查初始数据
- [ ] 确认房源列表显示4条示例房源
- [ ] 确认租户列表显示2名示例租户
- [ ] 确认订单列表有示例预约/留言

### □ 5.3 修改公告
- [ ] 点击 "公告配置" 标签
- [ ] 修改公告文案为您的内容
- [ ] 点击 "保存公告"
- [ ] 返回前台查看效果

### □ 5.4 配置合同模板
- [ ] 点击 "合同管理" 标签
- [ ] 点击 "📑 编辑合同模板与预览"
- [ ] 修改右侧关键字段（月租、押金等）
- [ ] 在左侧直接编辑合同内容
- [ ] 输入房东/管理员签名
- [ ] 点击 "💾 保存所有修改"

---

## 第六步：功能验证

### □ 6.1 前台功能测试
- [ ] 点击分类标签切换房源
- [ ] 填写预约看房表单并提交
- [ ] 点击客服热线测试一键拨号

### □ 6.2 租户中心测试
- [ ] 点击 "我的租约"
- [ ] 使用 "张三" 或 "13800001111" 登录
- [ ] 查看租约信息和剩余天数
- [ ] 测试提交报修申请
- [ ] 测试预约公共设施
- [ ] 测试一键留言功能
- [ ] 退出登录

### □ 6.3 后台管理测试
- [ ] 新增一个房源（含图片）
- [ ] 编辑房源信息
- [ ] 标记房源为已出租
- [ ] 新增一名租户
- [ ] 生成一份合同
- [ ] 处理一个订单/留言

---

## 第七步：性能优化（可选）

### □ 7.1 图片优化
- [ ] 房源图片压缩至 200KB 以内
- [ ] 考虑使用图床服务（如 Cloudinary）

### □ 7.2 监控设置
- [ ] 在 Supabase Dashboard 查看 API 使用情况
- [ ] 记录每日请求量，确保不超过免费额度

### □ 7.3 备份策略
- [ ] 定期导出 Supabase 数据（Settings > Database > Backup）
- [ ] 保存重要合同 PDF 到本地

---

## 🎉 部署完成！

### 记录您的系统信息：

- **网站地址**：https://_________________.github.io/_____________/
- **Supabase 项目名**：_______________________
- **管理员账号**：_______________________
- **管理员密码**：_______________________（请妥善保管）
- **部署日期**：_______________________

---

## 📞 遇到问题？

### 常见问题速查：

| 问题 | 解决方案 |
|------|---------|
| 表不存在错误 | 重新执行建表 SQL |
| 数据无法保存 | 检查 Supabase URL 和 Key |
| 页面空白 | 打开控制台 (F12) 查看错误 |
| GitHub Pages 404 | 检查文件名是否为 index.html |
| 数据未同步 | 刷新页面，检查网络连接 |

---

## 📚 下一步

- [ ] 阅读 `README-Supabase.md` 了解详细功能
- [ ] 自定义界面颜色和品牌 Logo
- [ ] 添加更多房源和租户数据
- [ ] 分享网站给团队成员
- [ ] 配置自定义域名（可选）

---

**恭喜！您已成功部署沪乐锦公寓管理系统 Supabase 版本！** 🎊

如有任何问题，请查看控制台错误信息或 Supabase Dashboard 日志。

