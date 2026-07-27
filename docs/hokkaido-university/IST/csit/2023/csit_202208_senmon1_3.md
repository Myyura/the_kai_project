---
sidebar_label: 2022年8月実施 専門科目1 問3 (確率・統計)
tags:
  - Hokkaido-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
---
# 北海道大学 情報科学院 情報科学専攻 情報理工学コース 2022年8月実施 専門科目1 問3 (確率・統計)

## **Author**
祭音Myyura (with GPT 5.5)

## **Description**
確率・統計に関する以下の問いに答えよ。
ただし、答えだけでなく、導出過程もわかるように解答すること。

### \[1\]
連続型確率変数 $X$ の分布関数が

$$
F(x)=
\begin{cases}
0, & (x<0), \\
kx^3, & (0\leq x<2), \\
1, & (2\leq x)
\end{cases}
$$

で与えられるとき、以下の問いに答えよ。

(1) 実数 $k$ の値を求めよ。

(2) 確率 $P(0<X\leq 1)$ を求めよ。

(3) 確率変数 $X$ の確率密度関数 $f(x)$ を求めよ。

(4) 関数 $f$ のグラフの概形を示せ。

(5) 確率変数 $X$ の期待値 $E[X]$ と分散 $V[X]$ を求めよ。

### \[2\]

母平均が $\mu$、母分散が $\sigma^2$ の母集団からの大きさ $n$ の無作為標本を  
$X_1,\ldots,X_n$ とするとき、以下の問いに答えよ。  
ただし、$\mu,\sigma^2$ はともに未知数であるとする。

(1) 標本平均を

$$
\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i
$$

とするとき、$\bar{X}$ は $\mu$ の不偏推定量であること、すなわち、

$$
E[\bar{X}]=\mu
$$

が成り立つことを示せ。

(2) 等式

$$
E[(\bar{X})^2]=\frac{\sigma^2}{n}+\mu^2
$$

が成り立つことを示せ。

(3) 統計量

$$
T_1=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2
$$

は $\sigma^2$ の不偏推定量であることを示せ。

(4) 統計量

$$
T_2=(\bar{X})^2-\frac{1}{n(n-1)}\sum_{i=1}^{n}(X_i-\bar{X})^2
$$

は $\mu^2$ の不偏推定量であることを示せ。

(5) 母集団が正規分布 $N(\mu,\sigma^2)$ であるとき、確率 $P(T_2<0)$ は正であること、すなわち、

$$
P(T_2<0)>0
$$

が成り立つことを示せ。  
ただし、$X_1,\ldots,X_n$ が正規分布 $N(\mu,\sigma^2)$ からの無作為標本であるとき、  
$\bar{X}$ と $T_1$ は独立な確率変数となることを用いてよい。

### 题目描述

回答下列概率统计问题。不能只写答案，还应清楚展示推导过程。

1. 连续型随机变量 $X$ 的分布函数为

   $$
   F(x)=
   \begin{cases}
   0&(x<0),\\
   kx^3&(0\leq x<2),\\
   1&(x\geq2).
   \end{cases}
   $$

   （1）求实数 $k$。

   （2）求 $P(0<X\leq1)$。

   （3）求 $X$ 的概率密度函数 $f(x)$。

   （4）画出 $f$ 的图像概形。

   （5）求期望 $E[X]$ 与方差 $V[X]$。

2. 从总体均值为 $\mu$、总体方差为 $\sigma^2$ 的总体中抽取容量为 $n$ 的随机样本 $X_1,\ldots,X_n$，其中 $\mu,\sigma^2$ 均未知。

   （1）定义样本均值

   $$
   \bar X=\frac1n\sum_{i=1}^nX_i.
   $$

   证明 $\bar X$ 是 $\mu$ 的无偏估计量，即 $E[\bar X]=\mu$。

   （2）证明

   $$
   E[(\bar X)^2]=\frac{\sigma^2}{n}+\mu^2.
   $$

   （3）证明

   $$
   T_1=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X)^2
   $$

   是 $\sigma^2$ 的无偏估计量。

   （4）证明

   $$
   T_2=(\bar X)^2
   -\frac1{n(n-1)}
   \sum_{i=1}^n(X_i-\bar X)^2
   $$

   是 $\mu^2$ 的无偏估计量。

   （5）若总体为正态分布 $N(\mu,\sigma^2)$，证明

   $$
   P(T_2<0)>0.
   $$

   可使用性质：当 $X_1,\ldots,X_n$ 是来自 $N(\mu,\sigma^2)$ 的随机样本时，$\bar X$ 与 $T_1$ 相互独立。

#### 考点

- **分布函数与密度函数**：利用右连续性和总概率确定参数，对分布函数分段求导并计算矩。
- **样本均值的矩**：由独立同分布性推导均值、方差和二阶矩。
- **无偏样本方差**：展开离均差平方和，说明自由度修正 $n-1$ 的来源。
- **无偏估计量构造**：组合 $\bar X^2$ 与样本方差消去偏差，得到 $\mu^2$ 的无偏估计。
- **正态样本的独立性与支持集**：利用 $\bar X$、样本方差独立且在适当区间具有正概率，证明估计量可取负值。

## **Kai**
### \[1\]
#### (1)
$x=2$ における $F(x)$ の連続性より、

$$
\begin{aligned}
\lim_{x \to 2-} F(x) &= F(2) \\
k \cdot 2^3 &= 1 \\
\therefore \ \ 
k &= \frac{1}{8}
\end{aligned}
$$

がわかる。

#### (2)

$$
  \begin{aligned}
  P \left( 0 \lt X \leq 1 \right) &= F(1) - F(0) \\
  &= \frac{1}{8}
  \end{aligned}
$$

#### (3)

$$
\begin{aligned}
  f(x)
  &= \frac{d}{dx} F(x)
  \\
  &= \begin{cases} 0 &(x \lt 0) \\
  \frac{3}{8} x^2 &(0 \leq x \lt 2) \\
  0 &(2 \leq 2) \end{cases}
\end{aligned}
$$

#### (4)
omitted

#### (5)

$$
  \begin{aligned}
  \mathrm{E} \left[ X \right]
  &= \int_{-\infty}^\infty x f(x) dx
  \\
  &= \frac{3}{8} \int_0^2 x^3 dx
  \\
  &= \frac{3}{8} \left[ \frac{x^4}{4} \right]_0^2
  \\
  &= \frac{3}{2}
  \\
  \mathrm{E} \left[ X^2 \right]
  &= \int_{-\infty}^\infty x^2 f(x) dx
  \ \ \ \ \ \ \ \ \left( X^2 \text{ の期待値 } \right)
  \\
  &= \frac{3}{8} \int_0^2 x^4 dx
  \\
  &= \frac{3}{8} \left[ \frac{x^5}{5} \right]_0^2
  \\
  &= \frac{12}{5}
  \\
  \mathrm{Var} \left[ X \right]
  &= \mathrm{E} \left[ X^2 \right] - \mathrm{E} \left[ X \right]^2
  \\
  &= \frac{3}{20}
  \end{aligned}
$$

### \[2\]
$X_1,X_2,\ldots,X_n$ は、母平均 $\mu$、母分散 $\sigma^2$ の母集団からの大きさ $n$ の無作為標本である。  
したがって、

$$
E[X_i]=\mu,\qquad V[X_i]=\sigma^2
$$

であり、

$$
E[X_i^2]=V[X_i]+\{E[X_i]\}^2=\sigma^2+\mu^2
$$

が成り立つ。

#### (1)

$$
  \begin{aligned}
  \mathrm{E} \left[ \bar{X} \right]
  &= \frac{1}{n} \sum_{i=1}^n \mathrm{E} \left[ X_i \right]
  \\
  &= \mu
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  &= \frac{1}{n^2} \sum_{i=1}^n \sum_{j=1}^n \mathrm{E} \left[ X_i X_j \right]
  \\
  &= \frac{1}{n^2} \left( \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  + \sum_{i,j \ (i \ne j)} \mathrm{E} \left[ X_i X_j \right] \right)
  \\
  &= \frac{1}{n^2} \left( \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  + \sum_{i,j \ (i \ne j)} \mathrm{E} \left[ X_i \right]
  \mathrm{E} \left[ X_j \right] \right)
  \\
  &= \frac{1}{n^2} \left( n \left( \sigma^2 + \mu^2 \right)
  + \left( n^2 - n \right) \mu^2 \right)
  \\
  &= \frac{\sigma^2}{n} + \mu^2
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  T_1
  &= \frac{1}{n-1} \sum_{i=1}^n \left( X_i - \bar{X} \right)^2
  \\
  &= \frac{1}{n-1} \sum_{i=1}^n
  \left( X_i^2 - 2 \bar{X} X_i + \left( \bar{X} \right)^2 \right)
  \\
  &= \frac{1}{n-1}
  \left( \sum_{i=1}^n X_i^2 - n \left( \bar{X} \right)^2 \right)
  \\
  &= \frac{1}{n-1} \sum_{i=1}^n X_i^2
  - \frac{n}{n-1} \left( \bar{X} \right)^2
  \\
  \therefore \ \ 
  \mathrm{E} \left[ T_1 \right]
  &= \frac{1}{n-1} \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  - \frac{n}{n-1} \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  \\
  &= \frac{n}{n-1} \left( \sigma^2 + \mu^2 \right)
  - \frac{n}{n-1} \left( \frac{\sigma^2}{n} + \mu^2 \right)
  \\
  &= \sigma^2
  \end{aligned}
$$

#### (4)

$$
  \begin{aligned}
  T_2
  &= \left( \bar{X} \right)^2 - \frac{1}{n} T_1
  \\
  \therefore \ \ 
  \mathrm{E} \left[ T_2 \right]
  &= \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  - \frac{1}{n} \mathrm{E} \left[ T_1 \right]
  \\
  &= \frac{\sigma^2}{n} + \mu^2 - \frac{1}{n} \sigma^2
  \\
  &= \mu^2
  \end{aligned}
$$

#### (5)
母集団が正規分布 $N(\mu,\sigma^2)$ であるとする。

(4) より、

$$
T_2=(\bar{X})^2-\frac{1}{n}T_1
$$

である。したがって、

$$
T_2<0
$$

となるためには、

$$
(\bar{X})^2<\frac{1}{n}T_1
$$

が成り立てばよい。

任意の正の数 $a>0$ をとる。  
このとき、

$$
|\bar{X}|<a
$$

かつ

$$
T_1>na^2
$$

が成り立てば、

$$
(\bar{X})^2<a^2
$$

かつ

$$
\frac{1}{n}T_1>a^2
$$

となるので、

$$
(\bar{X})^2<\frac{1}{n}T_1
$$

である。したがって、

$$
T_2<0
$$

が成り立つ。

よって、

$$
\{|\bar{X}|<a,\ T_1>na^2\}
\subset
\{T_2<0\}
$$

であるから、

$$
P(T_2<0)
\geq
P(|\bar{X}|<a,\ T_1>na^2)
$$

となる。

ここで、母集団が正規分布 $N(\mu,\sigma^2)$ であるから、

$$
\bar{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)
$$

である。正規分布は任意の区間に正の確率をもつので、

$$
P(|\bar{X}|<a)>0
$$

である。

また、正規母集団からの標本について、

$$
\frac{(n-1)T_1}{\sigma^2}\sim \chi^2_{n-1}
$$

である。$\chi^2$ 分布は正の方向に広がりをもつので、

$$
P(T_1>na^2)>0
$$

である。

さらに、問題文より、$\bar{X}$ と $T_1$ は独立である。したがって、

$$
\begin{aligned}
P(|\bar{X}|<a,\ T_1>na^2)
&=
P(|\bar{X}|<a)P(T_1>na^2) \\
&>0
\end{aligned}
$$

となる。

以上より、

$$
P(T_2<0)\geq P(|\bar{X}|<a,\ T_1>na^2)>0
$$

であるから、

$$
P(T_2<0)>0
$$

が示された。
