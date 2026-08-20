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
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

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

## **Kai**

**NP-complete**

NP-complete is an NP decision problem $Y$ to which every NP problem $X$ can be reduced by a polynomial-time many-one (Karp) reduction,

i.e. $Y\in NP\land (\forall X\in NP,X\le_P Y)$, 

where an NP (nondeterministic polynomial-time) problem has, for each yes-instance, a polynomial-size certificate that can be verified in polynomial time, but is not necessarily known to be solvable in polynomial time.

Note that NP-complete problems are the intersection of NP and NP-hard problems: they are exactly the problems that are both in NP and NP-hard.

The “first” NP-complete problem is `Circuit-SAT`, which asks whether there is an $n$-bit input that makes the output of a Boolean circuit 1.

**Tail recursion**

A function is tail-recursive when its recursive call is the final operation, so no pending computation remains. For example, factorial can carry the product in an accumulator: $f(n,a)=f(n-1,na)$ and $f(0,a)=a$. Tail-call optimization then reuses one stack frame, giving $O(1)$ stack space.

**TLB (Translation Lookaside Buffer)**

A TLB caches recent virtual-page to physical-frame translations and access permissions. On a hit, address translation avoids a page-table walk. On a miss, hardware or the OS walks the page table and inserts the translation; an invalid entry ultimately causes a page fault.

**LL(1) parsing**

An LL(1) parser reads input left to right, constructs a leftmost derivation, and uses one lookahead token. A table entry is chosen from the production's FIRST set, and for an $\varepsilon$-production from FOLLOW of its left-hand side. The grammar is LL(1) exactly when these choices create no table conflict.
