---
sidebar_label: 2026年1月実施 専門 第5問
tags:
  - Tokyo-University
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Channel-Capacity
  - Computer-Science.Information-Theory.Cyclic-Redundancy-Check
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2026年1月実施 専門 第5問

## **Author**
[瑞穂](https://github.com/LiRunyi2001)

## **Description**
(1) Calculate entropy of a system $S$ with $p(0)=0.9$ and $p(1)=0.1$, and its second-level entropy $H(S^2)$. Also give a Huffman coding for this system, and calculate the average code length. 

(2) Given system transation diagram, calculate stable probability. 

(3) Calculate the capacity of channel, where $(a)$ not stable $S$, and $(b)$ stable $S$. 

(4) Give the transation matrix of $S$ with error probability $p$ and error code average length $l$. 

(5) What is CRC code, and give the capacity of CRC with $G(x)=x^{16}+x^{12}+x^{5}+1$. 

### 题目描述

(1) 对满足 $p(0)=0.9$、$p(1)=0.1$ 的系统 $S$，计算其熵及二阶扩展熵 $H(S^2)$；再给出该系统的一种霍夫曼编码并计算平均码长。原 Description 没有明确霍夫曼编码的对象是单符号信源 $S$ 还是二阶扩展 $S^2$，此处不替其选择。

(2) 对“给定的系统状态转移图”计算平稳概率。当前 Description 中没有该状态转移图，也没有列出任何转移概率，因此具体系统边界缺失。

(3) 计算信道容量，分别讨论“(a) 非平稳 $S$”与“(b) 平稳 $S$”。原 Description 未定义“非平稳/平稳 $S$”所对应的信道，也没有给出输入、输出字母表或转移概率，因而不能补出具体信道模型。

(4) 对错误概率为 $p$、错误码平均长度为 $l$ 的 $S$，写出其转移矩阵。原 Description 未说明错误机制、矩阵所对应的状态或符号，也未定义“错误码平均长度 $l$”如何参与转移概率，故保留这些缺失条件。

(5) 说明什么是 CRC 码，并对生成多项式

$$
G(x)=x^{16}+x^{12}+x^5+1
$$

给出 CRC 的“capacity”。原 Description 未定义这里的 capacity 是码率、冗余长度还是检错能力，也未给出消息/码字长度，因此不将其擅自解释成某一项。
