---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つの因子(factor) AとBを取り上げ、因子Aについては3水準,因子 B については4
水準を設定し、繰り返し(the number of replications) が 2 回の二元配置法実験(two-way layout
experiment with replications)をランダムな順序で行った。そのデータに基づき分散分析表(analysis
of variance table)を作成した結果、表1を得た。表1の①②③に入る数値を求めよ。

表1 分散分析表

### 题目描述

选取因子 A、B，其中 A 有 $3$ 个水平，B 有 $4$ 个水平，各水平组合重复 $2$ 次，并以随机顺序实施有重复的双因素配置实验。根据实验数据制成表 1 所示的方差分析表，要求填写其中的 ①、②、③。

现有原始 Description 只保留了“表 1 方差分析表”的引用，表格本体、①②③ 的位置以及任何已知平方和、均方或 $F$ 值均缺失。因此无法唯一确定三个空格所代表的量或其数值。由题干可唯一恢复的只有：总观测数为 $3\times4\times2=24$，A、B、交互作用、误差和总计的自由度依次为 $2,3,6,12,23$；除这些量外不作补写。

## **Kai**

因子 A の水準数を $a=3$ 、因子 B の水準数を $b=4$ 、反復数を $r=2$ とすると、総観測数は

$$
N=abr=3\cdot4\cdot2=24
$$

である。したがって、二元配置分散分析の各自由度は

$$
\begin{array}{c|c}
\text{変動因} & \text{自由度}\\ \hline
A&a-1=2\\
B&b-1=3\\
A\times B&(a-1)(b-1)=6\\
\text{誤差}&ab(r-1)=12\\
\text{全体}&abr-1=23
\end{array}
$$

となり、検算すると $2+3+6+12=23$ で全体の自由度に一致する。

しかし、提供された問題JSONには「表1 分散分析表」という見出ししかなく、**表の行・列、①②③の位置、および既知の平方和・平均平方・ $F$ 値がすべて欠落している**。したがって、①②③が上記のどの自由度を指すのか、あるいは平方和・平均平方・ $F$ 値を指すのかを一意に判定できない。確定できる数値は上記の自由度と総観測数までであり、①②③の一意な数値を復元するには、少なくとも①②③の配置と表中の既知数値を含む表1が必要である。
