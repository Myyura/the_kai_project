---
sidebar_label: "2018年8月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 大阪大学 情報科学研究科 情報数理学専攻 2018年8月実施 情報数理学 数理基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 1

$n\ge3$ とし、線形計画問題

$$
\begin{aligned}
\mathrm P:\quad\min\ &\sum_{i=1}^n x_i\\
\text{subject to }&2x_1+x_2\ge1,\\
&x_{i-1}+2x_i+x_{i+1}\ge1\quad(i=2,\ldots,n-1),\\
&x_{n-1}+2x_n\ge1,\qquad x_i\ge0
\end{aligned}
$$

を考える。(1) 双対問題、(2) $n=3$ の最適値、(3) $n$ が奇数の場合の最適値を求めよ。

### 2

長さ $L$ の棒を一様な位置で2つに折り、短い方を捨てる。残る棒の長さを $X$ とする。

(1) $E[X]$ と $V[X]$ を求めよ。

(2) 長さ $X$ の棒をさらに同様に折って短い方を捨て、残る長さを $Y$ とする。$E[Y]$ と $V[Y]$ を求めよ。

### 3

体温 $u$ を推定する。時刻 $t\ge0$ の測定値 $X_t$ は各時刻で独立であり、平均 $u+\alpha^t(u_0-u)$、分散 $\sigma^2$ の正規分布に従う。室温 $u_0$、$\sigma^2>0$、$0<\alpha<1$ は既知とする。

(1) ある時刻 $t>0$ で $X_t=x$ を観測したときの $u$ の最尤推定量を求めよ。

(2) $t=1,\ldots,n$ で $X_t=x_t$ を観測したときの最尤推定量 $\hat u_n$ を求めよ。

(3) $\hat u_n$ は不偏推定量か。

## **Kai**

### 1

(1) 双対変数 $y_1,\ldots,y_n$ を用いると

$$
\boxed{\begin{aligned}
\max\ &\sum_{i=1}^n y_i\\
\text{subject to }&2y_1+y_2\le1,\\
&y_{i-1}+2y_i+y_{i+1}\le1\quad(i=2,\ldots,n-1),\\
&y_{n-1}+2y_n\le1,\qquad y_i\ge0.
\end{aligned}}
$$

(2) $x=(1/2,0,1/2)$ と $y=(1/2,0,1/2)$ はそれぞれ主・双対実行可能で、目的値はともに1である。弱双対性から最適値は $\boxed{1}$。

(3) $n$ が奇数のとき

$$
x_i=y_i=\begin{cases}1/2&i\text{ が奇数},\\0&i\text{ が偶数}\end{cases}
$$

とすれば、主・双対の各制約の左辺はすべて1となる。目的値も一致するので、最適値は $\boxed{(n+1)/4}$。

### 2

(1) 切断点を $U\sim U[0,L]$ とすれば、$X=\max(U,L-U)$ は $[L/2,L]$ 上の一様分布である。したがって

$$
\boxed{E[X]=\frac{3L}4,\qquad V[X]=\frac{L^2}{48}},\qquad E[X^2]=\frac{7L^2}{12}.
$$

(2) 条件付き分布 $Y\mid X=x$ は $U[x/2,x]$ なので

$$
E[Y\mid X]=\frac34X,\qquad E[Y^2\mid X]=\frac7{12}X^2.
$$

よって

$$
\boxed{E[Y]=\frac{9L}{16}},\qquad
\boxed{V[Y]=\frac7{12}\frac{7L^2}{12}-\left(\frac{9L}{16}\right)^2=\frac{55L^2}{2304}}.
$$

### 3

(1) 平均は $(1-\alpha^t)u+\alpha^tu_0$ である。尤度最大化は観測値と平均の差の二乗を最小化することに等しく、

$$
\boxed{\hat u=\frac{x-\alpha^tu_0}{1-\alpha^t}}.
$$

(2) $b_t=1-\alpha^t$ とおけば、最小化すべき量は $\sum_{t=1}^n(x_t-\alpha^tu_0-b_tu)^2$。$u$ で微分して

$$
\boxed{\hat u_n=\frac{\sum_{t=1}^n(1-\alpha^t)(x_t-\alpha^tu_0)}{\sum_{t=1}^n(1-\alpha^t)^2}}.
$$

(3) $E[X_t-\alpha^tu_0]=(1-\alpha^t)u$ より $E[\hat u_n]=u$。したがって不偏推定量である。
