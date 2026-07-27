---
sidebar_label: "2016年7月実施 統計科学 問題3"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Experimental-Design
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年7月実施 統計科学 問題3

## **Author**
祭音Myyura

## **Description**

表1は因子Aを4水準、繰返し2回とした一元配置実験の結果である。

| 水準 | 1回目 | 2回目 |
| --- | ---: | ---: |
| A1 | 1 | -1 |
| A2 | 2 | 4 |
| A3 | 2 | 4 |
| A4 | -1 | 1 |

1. 一元配置の分散分析表を、平均平方の期待値 $E(V)$ を含めて作成せよ。また $x_{ij}=\mu+a_i+\varepsilon_{ij}$、$\sum_i a_i=0$、$\varepsilon_{ij}\overset{\mathrm{iid}}{\sim}N(0,\sigma^2)$ のとき、$\bar x_{A1}$ と全体平均 $\bar x$ の分布を求めよ。
2. 同じデータを因子Aが4水準、因子Bが2水準、繰返しなしの二元配置とみなし、分散分析表を作成せよ。
3. 実験をランダムな順序で行う必要性を説明せよ。

### 题目描述

表 1 给出一个单因素试验的观测结果，其中因素 A 有 4 个水平，每个水平重复试验 2 次：

| 水平 | 第 1 次 | 第 2 次 |
| --- | ---: | ---: |
| A1 | 1 | -1 |
| A2 | 2 | 4 |
| A3 | 2 | 4 |
| A4 | -1 | 1 |

1. 编制该单因素试验的方差分析表，表中还须包含均方的期望 $E(V)$。此外，在模型
   $$
   x_{ij}=\mu+a_i+\varepsilon_{ij},\qquad
   \sum_i a_i=0,\qquad
   \varepsilon_{ij}\overset{\mathrm{iid}}{\sim}N(0,\sigma^2)
   $$
   下，求水平 A1 的样本均值 $\bar x_{A1}$ 与总样本均值 $\bar x$ 的分布。
2. 将同一组数据视为一个无重复的双因素试验，其中因素 A 有 4 个水平、因素 B 有 2 个水平，编制相应的方差分析表。
3. 说明为什么必须按随机顺序进行试验。

#### 考点

- 试验设计：需要针对同一组数据分别建立单因素重复试验和无重复双因素试验，并说明随机化试验顺序的必要性。
- 方差分析：需要分解平方和、确定自由度与均方，写出单因素表中的 $E(V)$，并求给定正态误差模型下两个均值统计量的分布。

## **Kai**

### [小問 1]

水準平均と全体平均は

$$
(\bar x_{1\cdot},\bar x_{2\cdot},\bar x_{3\cdot},\bar x_{4\cdot})
=(0,3,3,0),\qquad
\bar x_{\cdot\cdot}=\frac32.
$$

平方和は

$$
\begin{aligned}
S_A
&=2\sum_{i=1}^4
(\bar x_{i\cdot}-\bar x_{\cdot\cdot})^2=18,\\
S_E
&=\sum_{i=1}^4\sum_{j=1}^2
(x_{ij}-\bar x_{i\cdot})^2=8,\\
S_T&=S_A+S_E=26.
\end{aligned}
$$

したがって分散分析表は次のとおりである。

| 変動因 | 自由度 | 平方和 | 平均平方 $V$ | $E(V)$ |
| --- | ---: | ---: | ---: | --- |
| 因子A | 3 | 18 | 6 | $\displaystyle \sigma^2+\frac23\sum_{i=1}^4a_i^2$ |
| 誤差 | 4 | 8 | 2 | $\sigma^2$ |
| 全体 | 7 | 26 |  |  |

また

$$
\bar x_{A1}
=\mu+a_1+\frac{\varepsilon_{11}+\varepsilon_{12}}2
\sim
\boxed{N\left(\mu+a_1,\frac{\sigma^2}{2}\right)}.
$$

$\sum_i a_i=0$ なので

$$
\bar x
=\mu+\frac18\sum_{i=1}^4\sum_{j=1}^2\varepsilon_{ij}
\sim
\boxed{N\left(\mu,\frac{\sigma^2}{8}\right)}.
$$

### [小問 2]

列平均は

$$
(\bar x_{\cdot1},\bar x_{\cdot2})=(1,2)
$$

であるから、

$$
S_B=4\sum_{j=1}^{2}
(\bar x_{\cdot j}-\bar x_{\cdot\cdot})^2=2.
$$

繰返しがないため、交互作用は誤差に含める。残差平方和は

$$
S_E=S_T-S_A-S_B=26-18-2=6.
$$

| 変動因 | 自由度 | 平方和 | 平均平方 |
| --- | ---: | ---: | ---: |
| 因子A | 3 | 18 | 6 |
| 因子B | 1 | 2 | 2 |
| 誤差 | 3 | 6 | 2 |
| 全体 | 7 | 26 |  |

### [小問 3]

実験順序をランダム化すると、時間変化、装置のドリフト、温度、作業者の習熟などの未知の外乱が特定の水準へ偏って割り当てられることを防げる。これにより因子効果と順序効果の交絡を避け、誤差の独立性・同一分布という分散分析の前提を妥当なものにし、効果推定と検定の公平性を保つ。
