---
sidebar_label: "2021年7月実施 数理基礎 問題E"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年7月実施 数理基礎 問題E

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問E2

確率変数(random variable) $x$ の累積分布関数 $F(x)$ (cumulative distribution function) が次式であるとき, 確率密度関数 $f(x)$ (probability density function) を求めよ。

$$
F(x) = 1 - \exp(-5x) \quad (x > 0)
$$

#### 小問E3

5行4列の分割表(contingency table)に基づき、カイ2乗分布近似(chi-square distribution approximation)により行属性と列属性に関する独立性の検定(test for independence)を行うとする。このとき、自由度(degrees of freedom)はいくらになるか。

#### 小問E4

二元配置実験 (two-way layout experiment) に基づいて交互作用 (interaction) について説明せよ。

### 题目描述

#### 小问E2

随机变量 $x$ 的累积分布函数在 $x>0$ 时为

$$
F(x)=1-\exp(-5x).
$$

求其概率密度函数 $f(x)$，并完整写出定义域各区间上的取值。

#### 小问E3

基于一个 $5$ 行 $4$ 列的列联表，使用卡方分布近似检验行属性与列属性的独立性。求该独立性检验的自由度。

#### 小问E4

结合双因素配置实验，说明什么是交互作用。

## **Kai**

### 小問E2

The probability density function $f(x)$ is the derivative of the cumulative distribution function $F(x)$ with respect to $x$ .

$$
f(x) = \frac{d}{dx} F(x) = \frac{d}{dx} (1 - \exp(-5x))
$$

$$
f(x) = 0 - (\exp(-5x) \cdot (-5)) = 5\exp(-5x)
$$

Since $x > 0$ , $f(x) = 5e^{-5x}$ for $x > 0$ and $f(x) = 0$ for $x \leq 0$ .
Thus,

$$
f(x) = \begin{cases} 5e^{-5x}, & x > 0 \\ 0, & x \leq 0 \end{cases}
$$

### 小問E3

分割表における独立性の検定における自由度(degrees of freedom)は、以下のように計算されます。

自由度 = (行数 - 1) × (列数 - 1)

この問題では、行数は5、列数は4なので、

自由度 = (5 - 1) × (4 - 1) = 4 × 3 = 12

したがって、自由度は12です。

### 小問E4

交互作用とは、二つ以上の要因が組み合わさることによって、各要因の主効果だけでは説明できない効果が現れる現象のことです。

二元配置実験では、2つの要因（AとBとします）が、それぞれ複数の水準を持つ場合、各要因の水準の組み合わせを変えて実験を行い、結果を分析します。

交互作用がない場合、要因Aの効果は要因Bの水準によらず一定であり、要因Bの効果は要因Aの水準によらず一定です。

交互作用がある場合、要因Aの効果は要因Bの水準によって変化し、要因Bの効果は要因Aの水準によって変化します。

例えば、肥料Aと肥料Bの組み合わせを変えて作物の収量を調べる二元配置実験を考えます。

*   肥料Aの効果：肥料Aを使用すると、肥料Aを使用しない場合に比べて収量が増加する効果
*   肥料Bの効果：肥料Bを使用すると、肥料Bを使用しない場合に比べて収量が増加する効果

もし交互作用がない場合、肥料Aの効果（収量増加量）は肥料Bの使用有無にかかわらず一定であり、肥料Bの効果（収量増加量）は肥料Aの使用有無にかかわらず一定です。

交互作用は、両肥料を同時に使った収量が、それぞれの増収量を単純に足し合わせた予測からずれる場合に現れる。例えば各処理の平均を $\mu_{00},\mu_{10},\mu_{01},\mu_{11}$ とすれば、交互作用がない条件は $\mu_{11}-\mu_{10}-\mu_{01}+\mu_{00}=0$ である。同時使用の収量が各肥料の単独使用より大きいだけでは、交互作用があるとは限らない。

交互作用の有無は、分散分析などの統計的手法を用いて検定することができます。交互作用が有意である場合、各要因の主効果だけではなく、要因の組み合わせによる効果も考慮して結果を解釈する必要があります。
