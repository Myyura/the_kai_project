---
sidebar_label: '2012年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Nondeterministic-Polynomial-Time-Completeness
  - Computer-Science.Programming.Tail-Recursion
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Signal-Processing.Discrete-Cosine-Transform
  - Computer-Science.Security.Public-Key-Cryptography
  - Computer-Science.Networks.Domain-Name-System
  - Computer-Science.Computer-Architecture.Translation-Lookaside-Buffer
  - Computer-Science.Formal-Languages.Left-to-Right-Leftmost-Derivation-One-Lookahead-Parsing
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) NP 完全性
2) 末尾再帰
3) ステップ応答と伝達関数
4) 離散コサイン変換(DCT)
5) 公開鍵暗号
6) DNS (Domain Name Service)
7) TLB (Translation Lookaside Buffer)
8) LL(1)構文解析

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) NP-complete
2) Tail recursion
3) Step response and transfer function
4) Discrete Cosine Transform, DCT
5) Public-key cryptosystem
6) DNS (Domain Name Service)
7) TLB (Translation Lookaside Buffer)
8) LL(1) parsing

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. NP 完全性。
2. 尾递归。
3. 阶跃响应与传递函数。
4. 离散余弦变换（DCT）。
5. 公钥密码体制。
6. DNS（域名系统）。
7. TLB（地址转换后备缓冲器）。
8. LL(1) 语法分析。

#### 考点

- **NP 完全性**：说明问题属于 NP 且所有 NP 问题均可在多项式时间归约到它的含义。
- **尾递归**：说明递归调用处于函数最后一步时可复用当前栈帧进行优化。
- **阶跃响应与传递函数**：说明线性时不变系统对阶跃输入的输出及其与系统传递函数的关系。
- **离散余弦变换**：说明把有限信号展开到余弦基、实现能量集中的变换与压缩用途。
- **公钥密码**：说明公私钥分离以及加密、数字签名中的不同用法。
- **DNS**：说明分层、分布式名称系统把域名解析为地址等资源记录的过程。
- **TLB**：说明缓存近期页表映射以减少虚拟地址转换访存开销。
- **LL(1) 分析**：说明从左向右读入、构造最左推导并用一个向前看符号选择产生式的预测分析。

## **Kai**

**NP-complete**

NP complete is a NP problem $Y$ that every NP problem $X$ can (Karp) reduce to, 

i.e. $Y\in NP\land (\forall X\in NP,X\le_P Y)$, 

where a NP (nondeterministic polynomial) problem is that can be verified in polynomial time, but not necessarily able to be solved in polynomial time.

Note that NP-Complete problems are the intersection of NP and NP-Hard problems, which means they are the supremum of NP and the infimum of NP-Hard.

The “first” NP-Complete problem is `Circuit-SAT` that asks if there is a way of input (with $n$ bits) to so that the output of a logic digital circuit is 1.
