---
sidebar_label: "2019年8月実施 専門科目 確率統計"
sidebar_position: 4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 専門科目 確率統計

## **Author**
Miyake

## **Description**
### 日本語版
#### 問題1
確率変数 $X$ の確率分布が以下の確率密度関数で与えられたとき、$X$ の期待値と分散を求めなさい。$\mu$ は実定数である。

$$
f(x) = \left\{
    \begin{aligned}
    &\frac{1}{\sqrt{2\pi}x} \exp \big(-\frac{1}{2} (\log x - \mu)^2\big), &x > 0 \\
    &0, &x \le 0
    \end{aligned}
\right.
$$

#### 問題2
確率密度 $X$ は確率密度関数

$$
f(x; \mu) = \left\{ 
    \begin{aligned}
    &\frac{1}{\mu} \exp \big(-\frac{x}{\mu} \big), &x > 0 \\    
    &0, &x \le 0
    \end{aligned}
\right.
$$

の指数分布にしたがう。ただし $\mu > 0$ はパラメータである。以下の設問に答えなさい。

**(1)** パラメータ $\mu$ は未知とする。

(1-1) $X$ に基づく $\mu$ の最尤推定量 $\hat{\mu}$ を求めよ。

(1-2) $\hat{\mu}$ が $\mu$ の不偏推定量であることを示せ。

(1-3) ある定数 $\mu_0 > 0$ に対して、帰無仮説 $H_0: \mu=\mu_0$、対立仮説 $H_1: \mu > \mu_0$ の仮設検定を有意水準 $\alpha (0 < \alpha < 1)$ で行いたい。そのための定数 $c>0$ を定めておき、 $X > c$ のとき帰無仮説を棄却する。定数 $c$ を求めよ。

(1-4) ある関数 $L: (0, \infty) \rightarrow \mathbb{R}$ を用いた集合 $S(x) = \{z \mid z \ge L(x)\} \subsetneq \mathbb{R}$ を定義する。このとき $P(\mu \in S(X)) = 1 - \alpha$ となるように関数 $L(x)$ を定めよ。ただし $P(A)$ は事象 $A$ の確率を表し、$0 < \alpha < 1$ は定数である。

**(2)** 機械Mは $2$ 個の部品で構成されており、Mの運転開始から部品 $i$ が故障するまでの経過時間を確率変数 $X_i$ で表す $(i = 1,2)$。 $X_1, X_2$ は独立に確率密度関数 $f(x; \mu)$ の指数分布にしたがう。ただし $\mu=1$ とする。

(2-1) $2$ 個の部品のいずれか故障するとMは警告を発する。このとき、Mの運転開始からMが警告を発するまでの経過時間を確率変数 $U$ で表す、$U$ の確率密度関数を求めよ。

(2-2) $2$ 個の部品が共に故障したらMは停止する。このとき、Mの運転開始からMの停止するまでの経過時間を確率変数 $V$ で表す。$V$ の確率密度関数を求めよ。

(2-3) 上で定義した $U, V$ の同時確率密度関数を求めよ。

## **Kai**
### 問題1
$y = \log x$ とおくと、
$x = \exp(y), dx = \exp(y) dy$ である。

期待値を $E$ , 分散を $V$ で表して、次のように計算する：

$$
\begin{aligned}
E(X)
&=
\int_0^\infty x f(x) dx
\\
&=
\frac{1}{\sqrt{2 \pi}}
\int_0^\infty
\exp \left[ - \frac{1}{2} \left( \log x - \mu \right)^2 \right]
dx
\\
&=
\frac{1}{\sqrt{2 \pi}}
\int_{- \infty}^\infty
\exp \left[ - \frac{1}{2} \left( y - \mu \right)^2 \right]
\exp(y) dy
\\
&=
\frac{\exp \left( \mu + \frac{1}{2} \right) }{\sqrt{2 \pi}}
\int_{- \infty}^\infty
\exp \left[ - \frac{1}{2} \left\{ y - (\mu + 1) \right\}^2 \right]
dy
\\
&=
\exp \left( \mu + \frac{1}{2} \right)
\\
E \left( X^2 \right)
&=
\int_0^\infty x^2 f(x) dx
\\
&=
\frac{1}{\sqrt{2 \pi}}
\int_0^\infty
x
\exp \left[ - \frac{1}{2} \left( \log x - \mu \right)^2 \right]
dx
\\
&=
\frac{1}{\sqrt{2 \pi}}
\int_{- \infty}^\infty
\exp \left[ - \frac{1}{2} \left( y - \mu \right)^2 \right]
\exp(2y) dy
\\
&=
\frac{\exp \left( 2 \mu + 2 \right) }{\sqrt{2 \pi}}
\int_{- \infty}^\infty
\exp \left[ - \frac{1}{2} \left\{ y - (\mu + 2) \right\}^2 \right]
dy
\\
&=
\exp \left( 2 \mu + 2 \right)
\\
V(X)
&=
E \left( X^2 \right) - E(X)^2
\\
&=
\exp \left( 2 \mu + 2 \right)
- \exp \left( 2 \mu + 1 \right)
\\
&=
\exp \left( 2 \mu + 1 \right) (e-1)
\end{aligned}
$$

### 問題2
#### (1)
##### (1-1)

$$
\begin{aligned}
\frac{d}{d \mu} \log f(x;\mu)
&=
\frac{d}{d \mu} \log
\left[ \frac{1}{\mu} \exp \left( - \frac{x}{\mu} \right) \right]
\\
&=
\frac{d}{d \mu} \left( - \log \mu - \frac{x}{\mu} \right)
\\
&=
- \frac{1}{\mu} + \frac{x}{\mu^2}
\\
&=
\frac{\mu - x}{\mu^2}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\hat{\mu} = X
\end{aligned}
$$

##### (1-2)
期待値を $E$ を表すと、

$$
\begin{aligned}
E(X)
&=
\int_0^\infty x f(x; \mu) dx
\\
&=
\frac{1}{\mu}
\int_0^\infty x \exp \left( - \frac{x}{\mu} \right) dx
\\
&=
- \left[ x \exp \left( - \frac{x}{\mu} \right) \right]_0^\infty
+ \int_0^\infty x \exp \left( - \frac{x}{\mu} \right) dx
\\
&=
- \mu \left[ \exp \left( - \frac{x}{\mu} \right) \right]_0^\infty
\\
&= \mu
\end{aligned}
$$

であるから、
$E(\hat{\mu}) = \mu$ であり、
$\hat{\mu}$ は $\mu$ の不偏推定量である。

##### (1-3)
$\alpha$ と $c$ は次のように関係付けられる：

$$
\begin{aligned}
\alpha
&=
\int_c^\infty f(x; \mu_0) dx
\\
&=
\frac{1}{\mu_0}
\int_c^\infty \exp \left( - \frac{x}{\mu_0} \right) dx
\\
&=
- \left[ \exp \left( - \frac{x}{\mu_0} \right) \right]_c^\infty
\\
&=
\exp \left( - \frac{c}{\mu_0} \right)
\\
\therefore \ \ 
c &= - \mu_0 \log \alpha
\end{aligned}
$$

##### (1-4)

#### (2)
##### (2-1)
まず、確率を $P$ で表すと、

$$
\begin{aligned}
P (a \leq X_i \leq b)
&=
\int_a^b f(x; 1) dx
\\
&=
\int_a^b \exp (-x) dx
\\
&=
- \left[ \exp (-x) \right]_a^b
\\
&=
\exp (-a) - \exp (-b)
\end{aligned}
$$

である。

$U$ の確率密度関数 $f_U(u)$ を求めるために、次のように計算する：

$$
\begin{aligned}
P (U \leq u)
&=
P(X_1 \leq u \text{ and } X_2 \leq u)
+ P(X_1 \leq u \lt X_2) + P(X_2 \leq u \lt X_1)
\\
&=
P(X_1 \leq u) P(X_2 \leq u)
+ P(X_1 \leq u) P(u \lt X_2) + P(X_2 \leq u) P(u \lt X_1)
\\
&=
\left( 1 - \exp (-u) \right) \left( 1 - \exp (-u) \right)
+ \left( 1 - \exp (-u) \right) \exp (-u)
+ \left( 1 - \exp (-u) \right) \exp (-u)
\\
&=
1 - \exp (-2u)
\\
\therefore \ \ 
f_U(u)
&=
\frac{d}{du} P (U \leq u)
\\
&=
\frac{d}{du} \left( 1 - \exp (-2u) \right)
\\
&=
2 \exp (-2u)
\end{aligned}
$$

##### (2-2)
$V$ の確率密度関数 $f_V(v)$ を求めるために、次のように計算する：

$$
\begin{aligned}
P (V \leq v)
&=
P(X_1 \leq v \text{ and } X_2 \leq v)
\\
&=
P(X_1 \leq v) P(X_2 \leq v)
\\
&=
\left( 1 - \exp (-v) \right)^2
\\
\therefore \ \ 
f_V(v)
&=
\frac{d}{dv} P (V \leq v)
\\
&=
\frac{d}{dv} \left( 1 - \exp (-v) \right)^2
\\
&=
2 \exp (-v) \left( 1 - \exp (-v) \right)
\end{aligned}
$$

##### (2-3)
$U,V$ の同時確率密度関数 $f(u,v)$ を求めるために、次の2通りを考える。

(i) $v \lt u$ のとき、

$$
\begin{aligned}
P (U \leq u \text{ and } V \leq v)
&=
P (V \leq v)
\\
&=
\left( 1 - \exp (-v) \right)^2
\\
\therefore \ \ 
f(u,v)
&=
\frac{\partial}{\partial u}
\frac{\partial}{\partial v}
P (U \leq u \text{ and } V \leq v)
\\
&= 0
.
\end{aligned}
$$

(ii) $u \leq v$ のとき、

$$
\begin{aligned}
P (U \leq u \text{ and } V \leq v)
&=
P(X_1 \leq u \text{ and } X_2 \leq u)
+ P(X_1 \leq u \lt X_2 \leq v) + P(X_2 \leq u \lt X_1 \leq v)
\\
&=
P(X_1 \leq u) P(X_2 \leq u)
+ P(X_1 \leq u) P(u \lt X_2 \leq v) + P(X_2 \leq u) P(u \lt X_1 \leq v)
\\
&=
\left( 1 - \exp (-u) \right) \left( 1 - \exp (-u) \right)
+ \left( 1 - \exp (-u) \right) \left( \exp (-u) - \exp (-v) \right)
+ \left( 1 - \exp (-u) \right) \left( \exp (-u) - \exp (-v) \right)
\\
&=
\left( 1 - \exp (-u) \right)
\left( 1 + \exp (-u) - 2 \exp (-v) \right)
\end{aligned}
$$

$$
\begin{aligned}
\therefore \ \ 
f(u,v)
&=
\frac{\partial}{\partial u}
\frac{\partial}{\partial v}
P (U \leq u \text{ and } V \leq v)
\\
&=
2 \exp(-(u+v))
.
\end{aligned}
$$