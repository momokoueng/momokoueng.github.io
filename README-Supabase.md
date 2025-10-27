# 沪乐锦公寓系统 - Supabase 版本

## 🎯 改造完成！

原 localStorage 版本已成功迁移至 Supabase 云数据库，实现真正的数据持久化和多设备同步。

---

## 📋 部署步骤

### 步骤1: 在 Supabase 创建数据库表

1. 打开浏览器访问测试页面：
   ```
   supabase-test.html
   ```

2. 登录 [Supabase Dashboard](https://supabase.com)

3. 进入您的项目，找到左侧菜单 `SQL Editor`

4. 复制测试页面下方的完整 SQL 建表语句

5. 在 SQL Editor 中粘贴并点击 `Run` 执行

6. 执行成功后，回到测试页面，依次点击测试按钮验证连接

---

### 步骤2: 部署到 GitHub Pages

#### 方式1: 直接部署（推荐新手）

1. 在 GitHub 创建新仓库，例如：`my-apartment-system`

2. 上传以下文件到仓库：
   - `1.html` (主文件，重命名为 `index.html`)
   - `supabase-adapter.js` (数据库适配器)

3. 进入仓库 Settings > Pages

4. Source 选择 `main` 分支，点击 Save

5. 等待几分钟，访问：`https://你的用户名.github.io/仓库名/`

#### 方式2: 使用 Git 命令行

```bash
# 初始化本地仓库
git init
git add 1.html supabase-adapter.js
git commit -m "初始化沪乐锦公寓系统 - Supabase版"

# 重命名主文件为 index.html（GitHub Pages默认首页）
mv 1.html index.html
git add index.html
git commit -m "重命名为index.html"

# 关联远程仓库并推送
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

---

## 🔧 配置说明

### Supabase 连接配置

如需更改 Supabase 项目，请修改 `supabase-adapter.js` 文件：

```javascript
const SUPABASE_URL = 'https://你的项目.supabase.co';
const SUPABASE_KEY = '你的anon-key';
```

### 管理员账号配置

在 `1.html` (或 `index.html`) 中修改：

```javascript
const ADMIN_ACCOUNTS = ['15316990186','15021560258']; // 管理员手机号
const ADMIN_PASSWORD = '125811234'; // 管理员密码
```

---

## 📊 数据库表结构

系统包含5张核心表：

| 表名 | 说明 | 主要字段 |
|------|------|---------|
| `listings` | 房源信息 | id, title, category, price, status |
| `tenants` | 租户信息 | id, user_name, phone, house, idcard |
| `orders` | 订单/预约/留言 | id, type, name, phone, content |
| `contracts` | 合同记录 | id, contract_no, tenant_name, house |
| `settings` | 系统配置 | key, value (公告、合同模板、签名) |

---

## ✨ 新特性

### 相比 localStorage 版本的优势：

✅ **多设备同步** - 手机、电脑、平板实时同步数据  
✅ **永久保存** - 数据存储在云端，不会因浏览器清理而丢失  
✅ **多人协作** - 多个管理员可同时管理系统  
✅ **数据备份** - Supabase 自动备份，数据更安全  
✅ **跨浏览器** - 不同浏览器访问同一数据  
✅ **免费额度** - 每月 500MB 存储 + 50k 读取，足够小型公寓使用  

---

## 🚀 使用指南

### 前台功能（租户/访客）

1. **浏览房源** - 按分类查看可租房源
2. **预约看房** - 填写表单提交预约
3. **租户中心** - 使用姓名/手机号登录
4. **提交报修** - 在线提交报修申请
5. **设施预约** - 预约 KTV、棋牌室等公共设施
6. **留言反馈** - 给管理员留言

### 后台功能（管理员）

登录账号：`15021560258`  
登录密码：`125811234`

1. **房源管理** - 新增/编辑/上架/下架房源
2. **租户管理** - 录入租户信息，查看租约
3. **合同管理** - 生成电子合同，打印/导出 PDF
4. **订单处理** - 处理预约、报修、服务预约
5. **留言管理** - 查看并回复租客留言
6. **公告配置** - 修改首页公告内容

---

## 🔍 测试验证

### 测试步骤：

1. 打开 `supabase-test.html` 进行连接测试
2. 确保所有测试按钮都显示 ✅ 绿色成功
3. 访问主页面，检查数据是否正常加载
4. 尝试添加一个房源，刷新页面查看是否保存
5. 使用另一个浏览器或设备访问，验证数据同步

---

## 🐛 常见问题

### 1. 页面显示"表不存在"错误

**解决方案**：请确保在 Supabase SQL Editor 中执行了完整的建表 SQL

### 2. 数据无法保存

**解决方案**：
- 检查 Supabase URL 和 Key 是否正确
- 打开浏览器控制台 (F12) 查看错误信息
- 确认 RLS (行级安全策略) 已正确配置

### 3. CORS 跨域错误

**解决方案**：Supabase 默认允许所有域名访问，通常不会出现此问题。如果出现，请在 Supabase Dashboard > Settings > API 中检查 CORS 配置。

### 4. GitHub Pages 部署后样式丢失

**解决方案**：确保所有资源路径使用相对路径，CSS 和 JS 都已内联在 HTML 中。

---

## 📈 性能优化建议

### 当数据量增大时：

1. **图片优化** - 房源图片建议使用图床服务（如 Cloudinary）
2. **分页查询** - 当房源超过100条时，建议实现分页
3. **索引优化** - 在 Supabase 中为常用查询字段添加索引
4. **缓存策略** - 使用浏览器缓存减少 API 调用

---

## 🔐 安全建议

⚠️ **重要提示**：当前配置适用于开发/演示环境

### 生产环境建议：

1. **修改默认密码** - 更改管理员默认密码
2. **启用 RLS** - 配置更严格的行级安全策略
3. **API Key 保护** - 使用环境变量隐藏 Supabase Key
4. **添加认证** - 使用 Supabase Auth 进行用户认证
5. **HTTPS 访问** - GitHub Pages 默认支持 HTTPS

---

## 📞 技术支持

如有问题，请检查：
- 浏览器控制台 (F12) 中的错误信息
- Supabase Dashboard 中的日志
- 网络请求是否正常

---

## 📝 更新日志

### v2.0 (Supabase 版本)
- ✅ 迁移至 Supabase 云数据库
- ✅ 实现数据持久化和多设备同步
- ✅ 优化异步数据加载
- ✅ 添加预约看房表单处理
- ✅ 完善错误处理和日志

### v1.0 (localStorage 版本)
- 基础功能实现
- 本地数据存储

---

## 🎉 部署成功后

访问您的网站：`https://你的用户名.github.io/仓库名/`

享受云端数据带来的便捷体验！

---

**祝您使用愉快！** 🏠✨

