## 链接数据库 mongod --dbpath 位置
* `show dbs`	查看所有的数据库
* `use 数据库名`		使用数据库
* `db.dropDatabase()`	删除数据库
* `db.集合名.drop()`		删除集合

### 增：
```
 db.tooch.insert({'name':'alice','age':18,'gender':'male'})`
 INSERT INTO table_name ( field1,field2,...fieldN )
				VALUES
				(value1,value2,...valueN);
```

### 删：
```
 db.tooch.remove({'name':'sophe'})
 db.tooch.remove({'name':'marry'},{justOne: true})
```
### 改：
```
 db.tooch.remove({'name':'sophe'})
 db.tooch.remove({'name':'marry'},{justOne: true})
```