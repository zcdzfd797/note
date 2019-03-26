NoSQL = Not Only SQL
论文
《A relational model of data for large shared data banks》
关系型数据库 ---> 事务所、银行🏦
	ACID规则
		A	--- Atomicity 原子性
		C	---	Consistency	一致性
		I	---	Isolation	独立性
		D	---	Durability	持久性
		

分布式系统（distributed system）由多台计算机和通信的软件组件通过计算机网络连接组成。



CAP定理 | 对于一个分布式计算系统来说，不可能同时满足：
			一致性（Consistency） --- 所有节点在同一时间具有相同的数据
			可用性（Availability）---	保证每个请求无论成败都有响应
			分隔容忍（Partition tolerance）---	系统中任意信息的糗事或失败不会影响系统的继续运作
			
		
非关系型数据库


MongoDB 概念解析
	database	数据库
	collection	数据库表/集合
	document	数据记录行/文档
	field		数据字段/域
	index		索引
	primary key 主键（MongoDB自动将_id字段设置为主键）
	
	
	
数据库
	指令：
		show dbs		--- 显示所有数据的列表
		dbs				---	显示当前数据库对象或集合
		use 数据库名	--- 连接指定的数据库
