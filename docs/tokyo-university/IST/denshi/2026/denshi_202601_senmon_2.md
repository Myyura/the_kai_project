---
sidebar_label: 2026年1月実施 専門 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing
  - Electrical-Electronic.Digital-Logic.Rising-Edge-Detector
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2026年1月実施 専門 第2問

## **Author**
[瑞穂](https://github.com/LiRunyi2001)

## **Description**
A system gets input $A$ (1 bit), and outputs $Y$ (1 bit). $Y$ is $1$ only when the former CLK time $A$ is $0$, and current CLK time $A$ is $1$. Suppose the initial state outputs $0$ no matter what $A$ is.  

(1) Draw the state transition diagram. 

(2) Draw the state transition table. 

(3) Give the expression of the state output $s_i^N$, output $A$, given input state $s_i$ and $A$. Use Karnough graph to simplify. 

(4) Draw the circuit using AND, OR, NOT and D-flip-flop.

### 题目描述

某系统有一位输入 $A$ 和一位输出 $Y$。仅当前一时钟时刻的 $A$ 为 $0$、当前时钟时刻的 $A$ 为 $1$ 时，$Y=1$；初始状态下，无论 $A$ 为何，输出均为 $0$。

(1) 画出状态转移图。

(2) 写出状态转移表。

(3) 原 Description 要求：给定输入状态 $s_i$ 和 $A$，写出“状态输出 $s_i^N$、输出 $A$”的表达式，并用卡诺图化简。但原文此前明确把 $A$ 定义为输入、$Y$ 定义为输出，且没有定义 $s_i$、$s_i^N$，因此此小问的输出变量与状态符号存在冲突；此处保留这一缺失边界，不把“输出 $A$”擅自改成 $Y$。

(4) 使用 AND、OR、NOT 门和 D 触发器画出电路。
