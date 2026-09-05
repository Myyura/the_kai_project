---
sidebar_label: 2021年7月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cauchy-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Gamma-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Method-of-Moments
---
# 京都大学 情報学研究科 システム科学専攻 2021年7月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6882d22f000000002400da08?xsec_token=ABv7C785zMbXjgoCBH6HH8OmtM8mrsP0iNYk8_4WGnhuQ=), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_sys.pdf)
### 問題1
確率変数 $X$ は確率密度関数

$$
f(x; \theta) =
\begin{cases}
\theta e^{-\theta x}, & x > 0 \\
0, & x \le 0
\end{cases}
$$

の指数分布にしたがう。ただし $\theta > 0$ はパラメータである。
ある定数 $\theta_0 > 0$ に対して、帰無仮説 $H_0 : \theta = \theta_0$、対立仮説 $H_1 : \theta < \theta_0$ の仮説検定を有意水準 $\alpha \ (0 < \alpha < 1)$ で行いたい。
以下の設問に答えなさい。その導出過程も示すこと。

(1) 定数 $b > 0$ を定めておき、$X > b$ のとき $H_0$ を棄却する。
この仮説検定の有意水準が $\alpha$ となるような定数 $b$ を求めよ。

(2) 定数 $c > 0$ を定めておき、パラメータ $\theta$ の信頼区間を

$$
S(x) = \left\{ \theta \mid 0 < \theta \le \frac{c}{x} \right\}
$$

とする。$P(\theta \in S(X)) = 1 - \alpha$ を満たすような定数 $c$ を求めよ。

(3) 与えられた定数 $d > 0$ に対して、事象 $\{ X > d \}$ を条件とする $X$ の条件付き分布にしたがう確率変数 $Y$ を定義する。
すなわち、任意の $y > d$ に対して $P(Y > y) = P(X > y \mid X > d)$ である。
定数 $b' > d$ を定めておき、$Y > b'$ のとき $H_0$ を棄却する。この仮説検定の有意水準が $\alpha$ となるような定数 $b'$ を求めよ。

(4) 設問(3)の確率変数 $Y$ からパラメータ $\theta$ の信頼区間をつくりたい。
ある関数 $h(y)$ を用いて、

$$
T(y) = \{ \theta \mid 0 < \theta \le h(y) \}
$$

とする。$P(\theta \in T(Y)) = 1 - \alpha$ を満たすような関数 $h(y)$ を求めよ。



### 問題2
以下の設問に答えなさい。
ただし、$N(\mu, \sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布、$E[\cdot]$ は期待値を表す。

(1) 独立ではないが無相関であるような実確率変数の組 $(X, Y)$ の例を1つ挙げよ。
またそれが独立ではないこと、無相関であることの証明も示せ。

(2) $X$ と $Y$ を独立な $N(0, 1)$ に従う確率変数とする。
$Z = X / Y$ が従う確率分布の確率密度関数を求めよ。

以下の設問では、次のように定義される関数 $\Gamma(a)$

$$
\Gamma(a) = \int_0^\infty x^{a-1} e^{-x} dx
$$

および $a, b > 0$ なるパラメータを持つ確率密度関数 $g(x; a, b)$

$$
g(x; a, b) =
\begin{cases}
(b^a \Gamma(a))^{-1} x^{a-1} e^{-\frac{x}{b}}, &x > 0 \\
0, &x \le 0
\end{cases}
$$

を用いる。
確率密度関数 $g(x; a, b)$ を持つ確率分布を $G(a, b)$ とする。
また必要であれば $a > 0$ に対して $\Gamma(a+1) = a\Gamma(a)$ を用いてよい。

(3) $G(a, b)$ に従う確率変数 $X$ について、そのモーメント母関数

$$
M_X(r) = E[e^{rX}]
$$

が有限であるような実数 $r$ の条件を示し、そのときの $M_X(r)$ の値を求めよ。

(4) 確率変数 $X_1, X_2, \ldots, X_n$ は独立で $N(0, v)$ に従うものとする。
このとき $Y = \sum_{i=1}^n X_i^2$ は、あるパラメータ $a_1, b_1$ を持つ $G(a_1, b_1)$ に従うことを示すとともに、$a_1, b_1$ を $v, n$ を用いて表せ。

(5) $G(a, b)$ に従う確率変数 $X$ の期待値 $\mu$ と分散 $\sigma^2$ を $a, b$ を用いて表せ。

(6) $x_1, x_2, \ldots, x_n$ をパラメータ $a, b$ が未知である $G(a, b)$ からの無作為標本とする。
設問(5)の結果とモーメント法を用いて、$a, b$ に対する推定値 $\hat{a}, \hat{b}$ を標本平均

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i, \quad
s^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2
$$

の関数として表せ。ただしモーメント法とは、パラメータを $K$ 個持つ確率密度関数 $f(x; \theta_1, \theta_2, \ldots, \theta_K)$ のモーメント

$$
m_k(\theta_1, \theta_2, \ldots, \theta_K)
= \int_{-\infty}^\infty x^k f(x; \theta_1, \theta_2, \ldots, \theta_K) dx
$$

を標本モーメント

$$
\hat{m}_k = \frac{1}{n} \sum_{i=1}^n x_i^k
$$

と等しいと置き、$\hat{m}_k = m_k(\theta_1, \theta_2, \ldots, \theta_K)$
$(k = 1, \ldots, K)$ なる $K$ 個の連立方程式を $\theta_1, \theta_2, \ldots, \theta_K$ について解くことで、推定値 $\theta_1, \theta_2, \ldots, \theta_K$ を得る方法である。

### 题目描述

1. 随机变量 $X$ 服从密度为

   $$
   f(x;\theta)=
   \begin{cases}
   \theta e^{-\theta x}&(x>0),\\
   0&(x\leq0)
   \end{cases}
   $$

   的指数分布，其中 $\theta>0$。对给定常数 $\theta_0>0$，希望在显著性水平 $\alpha$（$0<\alpha<1$）下检验

   $$
   H_0:\theta=\theta_0,\qquad
   H_1:\theta<\theta_0.
   $$

   回答下列问题并写出推导过程。

   （1）预先取常数 $b>0$，当 $X>b$ 时拒绝 $H_0$。求使该检验的显著性水平为 $\alpha$ 的 $b$。

   （2）预先取常数 $c>0$，定义参数 $\theta$ 的置信区间

   $$
   S(x)=\left\{\theta\ \middle|\ 0<\theta\leq\frac cx\right\}.
   $$

   求使 $P(\theta\in S(X))=1-\alpha$ 的 $c$。

   （3）对给定常数 $d>0$，定义随机变量 $Y$ 服从事件 $\{X>d\}$ 条件下的 $X$ 的条件分布，即对任意 $y>d$，

   $$
   P(Y>y)=P(X>y\mid X>d).
   $$

   预先取 $b'>d$，当 $Y>b'$ 时拒绝 $H_0$。求使该检验显著性水平为 $\alpha$ 的 $b'$。

   （4）希望用第（3）问的 $Y$ 构造 $\theta$ 的置信区间。对某函数 $h(y)$，令

   $$
   T(y)=\{\theta\mid0<\theta\leq h(y)\}.
   $$

   求使 $P(\theta\in T(Y))=1-\alpha$ 的函数 $h(y)$。

2. 以下 $N(\mu,\sigma^2)$ 表示均值为 $\mu$、方差为 $\sigma^2$ 的正态分布，$E[\cdot]$ 表示期望。

   （1）给出一组不独立但不相关的实随机变量 $(X,Y)$，并证明二者不独立且不相关。

   （2）设 $X,Y$ 相互独立且均服从 $N(0,1)$。求

   $$
   Z=\frac XY
   $$

   的概率密度函数。

   以下各问使用 Gamma 函数

   $$
   \Gamma(a)=\int_0^\infty x^{a-1}e^{-x}\,dx
   $$

   以及参数 $a,b>0$ 的密度

   $$
   g(x;a,b)=
   \begin{cases}
   \dfrac{x^{a-1}e^{-x/b}}{b^a\Gamma(a)}&(x>0),\\
   0&(x\leq0).
   \end{cases}
   $$

   将具有该密度的分布记为 $G(a,b)$。必要时可使用

   $$
   \Gamma(a+1)=a\Gamma(a)\qquad(a>0).
   $$

   （3）若 $X\sim G(a,b)$，求使矩母函数

   $$
   M_X(r)=E[e^{rX}]
   $$

   有限的实数 $r$ 的条件，并在该条件下求 $M_X(r)$。

   （4）设 $X_1,\ldots,X_n$ 相互独立且均服从 $N(0,v)$。证明

   $$
   Y=\sum_{i=1}^nX_i^2
   $$

   服从某个 $G(a_1,b_1)$，并用 $v,n$ 表示 $a_1,b_1$。

   （5）若 $X\sim G(a,b)$，用 $a,b$ 表示其均值 $\mu$ 与方差 $\sigma^2$。

   （6）设 $x_1,\ldots,x_n$ 是参数 $a,b$ 未知的 $G(a,b)$ 的随机样本。利用第（5）问和矩估计法，把 $a,b$ 的估计值 $\hat a,\hat b$ 表示为

   $$
   \bar x=\frac1n\sum_{i=1}^nx_i,\qquad
   s^2=\frac1n\sum_{i=1}^n(x_i-\bar x)^2
   $$

   的函数。这里，矩估计法是指：对含 $K$ 个参数 $\theta_1,\ldots,\theta_K$ 的密度 $f(x;\theta_1,\ldots,\theta_K)$，将总体矩

   $$
   m_k(\theta_1,\ldots,\theta_K)
   =
   \int_{-\infty}^{\infty}
   x^kf(x;\theta_1,\ldots,\theta_K)\,dx
   $$

   与样本矩

   $$
   \hat m_k=\frac1n\sum_{i=1}^nx_i^k
   $$

   相等，解联立方程

   $$
   \hat m_k=m_k(\theta_1,\ldots,\theta_K),
   \qquad k=1,\ldots,K,
   $$

   从而得到各参数估计。

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_prob_stat_p1_s.png" width="700" alt=""/>
</figure>


### 問題2

(1) $X$ を $\{-1,0,1\}$ 上の一様分布、$Y=X^2$ とする。$E[X]=E[X^3]=0$ なので $\operatorname{Cov}(X,Y)=0$。一方

$$P(Y=0\mid X=0)=1\ne P(Y=0)=1/3$$

より独立ではない。

(2) 変数変換 $(X,Y)=(zy,y)$ のヤコビアンの絶対値は $|y|$ なので

$$f_Z(z)=\int_{-\infty}^{\infty}\frac{|y|}{2\pi}e^{-(1+z^2)y^2/2}\,dy=\boxed{\frac1{\pi(1+z^2)}}\quad(z\in\mathbb R).$$

これは標準コーシー分布である。

(3) $r<1/b$ のとき $t=(1/b-r)x$ とおけば

$$M_X(r)=\frac1{b^a\Gamma(a)}\int_0^\infty x^{a-1}e^{-(1/b-r)x}dx=(1-br)^{-a}.$$

$r=1/b$ では無限遠で $x^{a-1}$ の積分が発散し、$r>1/b$ でも発散する。従って有限となる条件は $\boxed{r<1/b}$。

(4) $X_i\sim N(0,v)$ の平方の矩母関数は、ガウス積分より $E[e^{rX_i^2}]=(1-2vr)^{-1/2}$ ($r<1/(2v)$)。独立性より $Y$ の矩母関数は $(1-2vr)^{-n/2}$ となり、(3) と一致する。従って $\boxed{a_1=n/2,\ b_1=2v}$。

(5) 矩母関数を微分して

$$E[X]=M_X'(0)=ab,\qquad E[X^2]=M_X''(0)=a(a+1)b^2,$$

従って $\boxed{\mu=ab,\ \sigma^2=ab^2}$。

(6) $\bar x=ab$、$s^2=ab^2$ を解くと

$$\boxed{\hat a=\bar x^2/s^2,\qquad \hat b=s^2/\bar x}.$$

これは $s^2>0$ のときの解である。$s^2=0$（特に標本数 $n=1$）では、$a,b>0$ を満たす有限なモーメント解は存在しない。
