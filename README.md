# 沪乐锦公寓系统 - Supabase 版本

## 🎯 项目简介

沪乐锦公寓系统是一个基于 Supabase 云数据库的公寓管理系统，实现真正的数据持久化和多设备同步。

**主要功能：**
- 房源管理：新增、编辑、上架/下架房源
- 租户管理：录入租户信息，查看租约
- 合同管理：生成电子合同，支持打印/导出 PDF
- 订单处理：处理预约、报修、服务预约
- 留言管理：查看并回复租客留言
- 公告配置：修改首页公告内容

---

## 🚀 快速开始

### 本地开发

项目使用 Docker 和 Nginx 提供本地开发环境：

```bash
# 启动本地服务器
docker-compose up -d

# 访问地址
# http://localhost:8080
```

---

### 部署到 GitHub Pages

#### 步骤1: 准备 Supabase 数据库

1. 登录 [Supabase Dashboard](https://supabase.com)

2. 创建新项目或使用现有项目

3. 进入 SQL Editor，执行以下建表 SQL：

```sql
-- 房源表
CREATE TABLE listings (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL NOT NULL,
  layout TEXT,
  img TEXT,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 租户表
CREATE TABLE tenants (
  id TEXT PRIMARY KEY,
  user_name TEXT NOT NULL,
  gender TEXT,
  phone TEXT,
  house TEXT,
  price DECIMAL,
  idcard TEXT,
  start_date TEXT,
  end_date TEXT,
  stars INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 订单表
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  house TEXT,
  time TEXT,
  content TEXT,
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 合同表
CREATE TABLE contracts (
  id TEXT PRIMARY KEY,
  contract_no TEXT,
  tenant_name TEXT,
  idcard TEXT,
  house TEXT,
  period TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 配置表
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 步骤2: 配置 Supabase 连接

修改 `supabase-adapter.js` 文件中的连接信息：

```javascript
const SUPABASE_URL = 'https://你的项目.supabase.co';
const SUPABASE_KEY = '你的anon-key';
```

#### 步骤3: 推送到 GitHub

项目已配置好 Git，直接推送即可：

```bash
git add .
git commit -m "更新项目"
git push origin main
```

#### 步骤4: 启用 GitHub Pages

1. 进入仓库 Settings > Pages
2. Source 选择 `main` 分支
3. 等待几分钟，访问：`https://momokoueng.github.io`

---

## 🔧 配置说明

### Supabase 连接配置

如需更改 Supabase 项目，请修改 `supabase-adapter.js` 文件：

```javascript
const SUPABASE_URL = 'https://你的项目.supabase.co';
const SUPABASE_KEY = '你的anon-key';
```

### 管理员账号配置

在 `index.html` 中修改：

```javascript
const ADMIN_ACCOUNTS = ['15316990186','15021560258']; // 管理员手机号
const ADMIN_PASSWORD = '125811234'; // 管理员密码
```

**当前默认账号：**
- 账号：`15021560258`
- 密码：`125811234`

---

## 📊 数据库表结构

系统包含5张核心表：

| 表名 | 说明 | 主要字段 |
|------|------|---------|
| `listings` | 房源信息 | id, title, category, price, status, img |
| `tenants` | 租户信息 | id, user_name, phone, house, idcard, stars |
| `orders` | 订单/预约/留言 | id, type, name, phone, content, status |
| `contracts` | 合同记录 | id, contract_no, tenant_name, house, period |
| `settings` | 系统配置 | key, value (公告、合同模板、签名) |

**项目文件结构：**
- `index.html` - 主应用文件（前端界面）
- `supabase-adapter.js` - Supabase 数据层适配器
- `docker-compose.yml` - Docker 本地开发配置
- `nginx.conf` - Nginx 服务器配置
- `.gitignore` - Git 忽略文件配置

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

1. 确保 Supabase 数据库表已创建
2. 检查 `supabase-adapter.js` 中的连接配置
3. 访问 `http://localhost:8080`，检查数据是否正常加载
4. 登录后台（账号：15021560258，密码：125811234）
5. 尝试添加一个房源，刷新页面查看是否保存
6. 使用另一个浏览器或设备访问，验证数据同步

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

**访问地址：**
- 本地开发：`http://localhost:8080`
- GitHub Pages：`https://momokoueng.github.io`

**管理员入口：**
- 账号：`15021560258`
- 密码：`125811234`

享受云端数据带来的便捷体验！

---

**祝您使用愉快！** 🏠✨

