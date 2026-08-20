---
sidebar_label: 2011年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Databases.Relational-Model-and-Structured-Query-Language
  - Computer-Science.Databases.Relational-Algebra
  - Computer-Science.Databases.Query-Optimization
  - Computer-Science.Databases.Schema-Design-and-Aggregation
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2011年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

Answer the following questions on database management systems.

(1) Discuss the differences between file systems and database management systems.

(2) Describe the features of SQL language in a relational database system.

(3) Consider a database for a book lending system in a library. The database comprises of the following three relational tables.

- `Users (UserID, Name, Address, Phone _Number)`,
- `Books (BookID, Title, Author, Publisher)`,
- `Lending_Status (UserID, BookID, Lent_Date)`.

Here, users have been assigned their user IDs through the registration process. The relational table Users manages the name, the address, and the phone number foreach user. The relational table Books is for managing information of the books in the library, each of which is identified by a unique number BookID. In addition, the Books table contains other kinds of information such as book title, author name,and publisher name. Here, we assume that each book has one author. The relational table `Lending_Status` manages when and which book has been lent to whom.

Describe an SQL statement for enumerating the name and the phone number of users who borrowed books published by publisher "A" no less than 10 days before. Here, we assume that the subtraction operation on date-type data is available.

(4) Represent the answer of (3) in relational algebra. Discuss the relationship between the order of executing operations and the time required to execute the query.

(5) We want to derive a table (popular author list) which lists authors according to the total lending count in descending order. How should we change the schema? Describe an SQL statement for deriving that table.

### 题目描述

回答下列数据库管理系统问题。

(1) 讨论文件系统与数据库管理系统的区别。

(2) 说明关系数据库系统中 SQL 语言的特点。

(3) 某图书馆借阅系统的数据库由以下三个关系表组成：

- `Users (UserID, Name, Address, Phone_Number)`；
- `Books (BookID, Title, Author, Publisher)`；
- `Lending_Status (UserID, BookID, Lent_Date)`。

用户在注册时获得用户 ID；`Users` 表保存每位用户的姓名、地址和电话号码。馆内每本书由唯一的 `BookID` 标识，`Books` 表还保存书名、作者和出版社，并假设每本书只有一位作者。`Lending_Status` 表记录哪位用户在何时借了哪本书。写出一条 SQL 语句，列举至少在 10 天前借过出版社 `"A"` 所出版图书的用户姓名与电话号码；可假定日期类型支持减法。

(4) 用关系代数表示 (3) 的查询，并讨论关系运算的执行次序与查询耗时之间的关系。

(5) 希望得到“热门作者列表”，按作者所著图书的总借阅次数降序列出作者。说明应如何改变模式，并写出生成该表的 SQL 语句。

## **Kai**
### (1)

| | File system | Database management systems |
| :--- | :--- | :--- |
| Data Independence | Couple with application code | Logical and physical data independence |
| Transactions | Atomic updates and recovery must be implemented by each application | ACID transactions provide atomicity, consistency, isolation, and durability |
| Concurrency | Implemented by application | Concurrent access managed automatically |
| Security | Rely on OS protections | Offers granular security and integrity constraints |

### (2)

Declarative; Comprehensive; Set-oriented; Standardized

### (3)

```sql
Select Distinct U.Name, U.Phone_Number
    From Users U, Lending_Status L, Books B
    Where U.UserID = L.UserID
    And L.BookID = B.BookID
    And B.Publisher = 'A'
    And (current_date - L.Lent_Date ) >= 10
```

### (4)

$$
\pi_{\text{Name}, \text{Phone\_Number}} \left( \sigma_{\text{Publisher}='A' \land (\text{current\_date} - \text{Lent\_Date} \ge 10)} \left( \text{Users} \bowtie \text{Lending\_Status} \bowtie \text{Books} \right) \right)
$$

Relationship:
- Naive execution: Compute all Cartesian product/Join of all the tables first leading to high cost
- Optimized execution: Apply the selection operations as early as possible.

### (5)

A derived relation can be added as follows:

```sql
Create table Author_Stats AS
    Select B.Author, Count(*) as Lending_Count
    From Books B, Lending_Status L
    Where B.BookID = L.BookID
    Group by B.Author
    Order by Lending_Count Desc;
```
