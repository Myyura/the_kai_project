---
sidebar_label: 2016年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Geometric-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Weibull-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
---
# 京都大学 情報学研究科 システム科学専攻 2016年8月実施 専門科目 確率統計

## **Author**
[uogxtc](https://zhuanlan.zhihu.com/p/697551899), 祭音Myyura

## **Description**

### 問題1
下記の確率密度関数にしたがう確率変数 $X$ について、以下の設問に答えよ。
ただし、$\alpha > 0$, $\beta > 0$ はパラメータ（母数）である。

$$
f(x) = \begin{cases}
\frac{\alpha x^{\alpha-1}}{\beta^\alpha} \exp \left( - \left( \frac{x}{\beta} \right)^\alpha \right) & (x > 0) \\
0 & (x \leq 0)
\end{cases}
$$

(1) 確率変数 $X$ の平均を、以下のガンマ関数とパラメータを用いて表せ。

$$
\Gamma(\theta) = \int_0^\infty x^{\theta-1} e^{-x} dx \quad (\theta > 0)
$$

(2) 確率密度関数 $f(x)$ が規定する確率分布から、大きさ $n$ の無作為標本

$$
\{X_1, X_2, \ldots, X_n\}
$$

が得られたとする。このとき、パラメータ $\alpha = \alpha_0$ を既知として、パラメータ $\beta$ の最尤推定量を求めよ。

### 問題2
以下の設問に答えよ。

(1) $X_1, X_2, \ldots, X_n$ を、独立かつ同一の確率分布（確率密度関数を $f(x)$、累積分布関数を $F(x)$ とする）にしたがう確率変数とする。
このとき、$X_1, X_2, \ldots, X_n$ の最小値

$$
Z = \min(X_1, X_2, \ldots, X_n)
$$

もまた確率変数となるが、その確率密度関数 $g(z)$ を $f$ と $F$ を用いて表せ。

(2) 設問 (1) の $X_1, X_2, \ldots, X_n$ の確率分布が区間 $[0, b]$ の一様分布 $(b > 0)$ であるとき、

$$
Z = \min(X_1, X_2, \ldots, X_n)
$$

の期待値を求めよ。

### 問題3
以下の設問に答えよ。

(1) 半径 $a$ の円 $C$ 内に、2 点 $A,B$ を独立かつそれぞれ円 $C$ 内の一様分布にしたがうようにとる。
$AB$ 間の距離を $R$ としたとき、$R^2$ の期待値を求めよ。

(2) 設問 (1) において、点 $A$ を中心とし $AB$ 間の距離 $R$ を半径とする円が、円 $C$ 内に全て含まれる確率を求めよ。

#### 题目描述

1. 随机变量 $X$ 的概率密度函数为

$$
   f(x)=
   \begin{cases}
   \dfrac{\alpha x^{\alpha-1}}{\beta^\alpha}
   \exp\!\left[-\left(\dfrac{x}{\beta}\right)^\alpha\right]
   & (x>0),\\
   0 & (x\leq0),
   \end{cases}
$$

   其中 $\alpha>0,\beta>0$ 为参数。

   （1）使用 Gamma 函数

$$
   \Gamma(\theta)=\int_0^\infty x^{\theta-1}e^{-x}\,dx
   \qquad(\theta>0)
$$

   和上述参数表示 $X$ 的均值。

   （2）从该密度所规定的分布中得到容量为 $n$ 的随机样本

$$
   \{X_1,X_2,\ldots,X_n\}.
$$

   已知 $\alpha=\alpha_0$，求参数 $\beta$ 的最大似然估计量。

2. 回答下列问题。

   （1）设 $X_1,\ldots,X_n$ 独立同分布，其密度函数和累积分布函数分别为 $f(x),F(x)$。令

$$
   Z=\min(X_1,X_2,\ldots,X_n).
$$

   用 $f,F$ 表示 $Z$ 的概率密度函数 $g(z)$。

   （2）若第（1）问中的 $X_1,\ldots,X_n$ 均服从区间 $[0,b]$ 上的均匀分布，其中 $b>0$，求 $Z$ 的期望。

3. 回答下列问题。

   （1）在半径为 $a$ 的圆盘 $C$ 内，独立地按圆盘上的均匀分布选取两点 $A,B$。令两点距离为 $R$，求 $E[R^2]$。

   （2）在第（1）问中，以 $A$ 为圆心、以 $R=AB$ 为半径的圆完全包含在圆盘 $C$ 内的概率是多少？


## **Kai**

### 問題1

(1) $u=(x/\beta)^\alpha$ とおくと

$$
E[X]=\beta\int_0^\infty u^{1/\alpha}e^{-u}\,du
=\boxed{\beta\Gamma(1+1/\alpha)}.
$$

(2) $\beta$ に関係する対数尤度は $-n\alpha_0\log\beta-\beta^{-\alpha_0}\sum_iX_i^{\alpha_0}$ である。微分して

$$
\frac{d\ell}{d\beta}=\frac{\alpha_0}{\beta}\left(-n+\beta^{-\alpha_0}\sum_iX_i^{\alpha_0}\right).
$$

符号が正から負に変わる点で最大となり、

$$
\boxed{\widehat\beta=\left(\frac1n\sum_{i=1}^nX_i^{\alpha_0}\right)^{1/\alpha_0}}.
$$

### 問題2

(1) 独立性から $P(Z>z)=\{1-F(z)\}^n$。微分して

$$
\boxed{g(z)=n\{1-F(z)\}^{n-1}f(z)}.
$$

(2) $0<z<b$ では $P(Z>z)=(1-z/b)^n$ なので

$$
\boxed{E[Z]=\int_0^b(1-z/b)^n\,dz=\frac b{n+1}}.
$$

### 問題3

(1) $O$ を円の中心とする。円盤上一様分布の半径の密度は $2r/a^2$ だから

$$
E[|OA|^2]=\int_0^ar^2\frac{2r}{a^2}\,dr=\frac{a^2}{2},\qquad E[\overrightarrow{OA}]=0.
$$

$A,B$ の独立性より

$$
E[R^2]=E[|OA|^2]+E[|OB|^2]-2E[\overrightarrow{OA}]\cdot E[\overrightarrow{OB}]
=\boxed{a^2}.
$$

(2) $|OA|=r$ を固定すると、求める条件は $B$ が $A$ を中心とする半径 $a-r$ の円盤内にあることと同値。この円盤は元の円盤内に含まれるので条件付き確率は $(a-r)^2/a^2$。したがって

$$
\boxed{P=\int_0^a\frac{(a-r)^2}{a^2}\frac{2r}{a^2}\,dr=\frac16}.
$$

![条件を満たす B の領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2017/sys_201608_senmon_stat_disk.svg)

