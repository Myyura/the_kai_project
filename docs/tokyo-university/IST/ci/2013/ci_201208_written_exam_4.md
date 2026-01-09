---
sidebar_label: '2012年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) NP 完全性
2) 末尾再帰
3) ステップ応答と伝達関数
4) 離散コサイン変換(DCT)
5) 公開鍵暗号
6) DNS (Domain Name Service)
7) TLB (Translation Lookaside Buffer)
8) LL(1)構文解析

## **Description (English)**
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

## **Kai**

**NP-complete**

NP complete is a NP problem $Y$ that every NP problem $X$ can (Karp) reduce to, 

i.e. $Y\in NP\land (\forall X\in NP,X\le_P Y)$, 

where a NP (nondeterministic polynomial) problem is that can be verified in polynomial time, but not necessarily able to be solved in polynomial time.

Note that NP-Complete problems are the intersection of NP and NP-Hard problems, which means they are the supremum of NP and the infimum of NP-Hard.

The “first” NP-Complete problem is `Circuit-SAT` that asks if there is a way of input (with $n$ bits) to so that the output of a logic digital circuit is 1.