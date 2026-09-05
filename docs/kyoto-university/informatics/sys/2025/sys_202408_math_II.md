---
sidebar_label: 2024年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Calculus.Double-Integral
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 数学【II】

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/discovery/item/688803a6000000002203ec0d?source=webshare&xhsshare=pc_web&xsec_token=ABtHY7I1RxAUjhEZPeviabm9avt5zS3kxeB1R-bm8HRVc=), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_sys.pdf)
$e$ をネイピア数（自然対数の底）、 $\mathbb{R}$ を実数全体からなる集合とする。また、ベクトル $\boldsymbol{x}$ の転置を $\boldsymbol{x}^\mathrm{T}$ で表す。

### 問題1
以下の設問に答えよ。

(1) 実数 $x > 0$ に対して $f(x) = x \log x$ とする。
- (i) $y = f(x)$ のグラフの概形を、極値をとる点を含めて $xy$ 平面上に描け。また、 $f(x) = y$ となる $x > 0$ が一意に定まるような実数 $y$ の範囲を求めよ。
- (ii) $\int f(x) \, dx$ を求めよ。
- (iii) 設問 (i) で求めた範囲の $y$ について、 $f(x) = y$ となる $x$ を $f^{-1}(y)$ で表す。 $\int f^{-1}(y) \, dy$ を $y$ および関数 $f^{-1}$ を用いて表せ。

----------------------------

(2) $n$ を正の整数とする。実数 $c$ に対して数列 $a_1, a_2, \ldots$ が以下を満たすものとする。

$$
\begin{aligned}
a_1 &= c \\
a_{n+1} &= a_n + 1 - e^{a_n}, \quad n = 1, 2, \ldots
\end{aligned}
$$

- (i) $a_2 < a_1$ となるための $c$ の必要十分条件を求めよ。
- (ii) $c = 1/2$ とする。極限 $\displaystyle \lim_{n \to \infty} a_n$ を求めよ。極限が存在しない場合は、そのことを示せ。ただし $\sqrt{e} = 1.648\ldots$ を用いてもよい。

### 問題2
以下の設問に答えよ。

(i) $a, b$ を $b > a > 0$ を満たす定数とし、 $2$ 次元ユークリッド空間内の楕円

$$
\left\{ (x, y) \in \mathbb{R}^2 \ \middle| \ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \right\}
$$

を考える。点 $P$ がこの楕円上を動くとき、点 $P$ と点 $(a, 0)$ の距離の最大値を求めよ。

-----------------------------------

(ii) $\boldsymbol{c} = (c_1, \ldots, c_n)^\mathrm{T} \neq \boldsymbol{0}$ を $n$ 次元ユークリッド空間の定数ベクトル、 $d$ を定数とし、

$n$ 次元ユークリッド空間内の超平面

$$
\left\{ \boldsymbol{x} = (x_1, \ldots, x_n)^\mathrm{T} \in \mathbb{R}^n \ \middle| \ \boldsymbol{c}^\mathrm{T} \boldsymbol{x} = d \right\}
$$

を考える。原点からこの超平面までの距離を求めよ。ただし、

$$
\boldsymbol{0} = (0, \ldots, 0)^\mathrm{T} \in \mathbb{R}^n
$$

とする。

-------------------------------

(iii) 実数 $p, q$ に対して，

$$
V = \iint_D \left( 2 - e^{p} x^2 - e^{q} y^2 \right) dx dy
$$

を求めよ。ただし，

$$
D = \left\{ (x, y) \in \mathbb{R}^2 \ \middle| \ e^{p} x^2 + e^{q} y^2 \leq 2 \right\}
$$

とする。

### 题目描述

下文中 $e$ 表示自然对数的底，$\mathbb{R}$ 表示实数集，
$\boldsymbol{x}^{\mathrm T}$ 表示向量 $\boldsymbol{x}$ 的转置。回答以下两题。

1. 完成下列各问。

   1. 对 $x>0$ 定义

$$
f(x)=x\log x.
$$

      1. 在 $xy$ 平面上画出 $y=f(x)$ 的大致图形并标明极值点；求所有使方程
         $f(x)=y$ 的正实数解 $x$ 唯一确定的实数 $y$。
      2. 求不定积分 $\int f(x)\,dx$。
      3. 对上一小问所得唯一可解范围内的 $y$，把满足
         $f(x)=y$ 的正数 $x$ 记作 $f^{-1}(y)$。仅用 $y$ 和函数
         $f^{-1}$ 表示

$$
\int f^{-1}(y)\,dy.
$$

   2. 对实数 $c$ 定义数列

$$
a_1=c,\qquad
a_{n+1}=a_n+1-e^{a_n},
\qquad n=1,2,\ldots,
$$

其中 $n$ 为正整数。

      1. 求 $a_2<a_1$ 成立时 $c$ 的充要条件。
      2. 令 $c=\frac12$。求

$$
\lim_{n\to\infty}a_n;
$$

若极限不存在，则证明不存在。可以使用
$\sqrt e=1.648\ldots$。

2. 完成下列各问。

   1. 设常数 $b>a>0$，考虑二维 Euclidean 空间中的椭圆

$$
\left\{
(x,y)\in\mathbb{R}^2
\ \middle|\
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1
\right\}.
$$

当点 $P$ 在椭圆上移动时，求 $P$ 到固定点 $(a,0)$ 的最大距离。

   2. 在 $n$ 维 Euclidean 空间中，给定非零常向量

$$
\boldsymbol{c}
=(c_1,\ldots,c_n)^{\mathrm T}
\ne\boldsymbol{0}
$$

和常数 $d$，考虑超平面

$$
\left\{
\boldsymbol{x}
=(x_1,\ldots,x_n)^{\mathrm T}
\in\mathbb{R}^n
\ \middle|\
\boldsymbol{c}^{\mathrm T}\boldsymbol{x}=d
\right\},
$$

其中 $\boldsymbol{0}=(0,\ldots,0)^{\mathrm T}\in\mathbb{R}^n$。求原点到该超平面的距离。

   3. 对实数 $p,q$，计算

$$
V
=\iint_D
\left(2-e^p x^2-e^q y^2\right)\,dx\,dy,
$$

其中区域为

$$
D=
\left\{
(x,y)\in\mathbb{R}^2
\ \middle|\
e^p x^2+e^q y^2\leq2
\right\}.
$$

## **Kai**
### 問題1
#### (1)(i)

$f'(x)=\log x+1$、$f''(x)=1/x>0$ である。従って $f$ は $(0,e^{-1})$ で減少、$(e^{-1},\infty)$ で増加し、最小値 $-e^{-1}$ を $x=e^{-1}$ で取る。また、$\lim_{x\downarrow0}f(x)=0$、$f(1)=0$、$\lim_{x\to\infty}f(x)=\infty$ である。

![関数 y = x log x のグラフ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys/2025/kyoto-sys-2024-xlogx.svg)

$-e^{-1}<y<0$ には解が2個、$y<-e^{-1}$ には解が存在しない。従って正の解が一意になる範囲は

$$
\boxed{\{ -e^{-1}\}\cup[0,\infty)}.
$$

#### (1)(ii)

部分積分より

$$
\boxed{\int x\log x\,dx
=\frac{x^2}2\log x-\frac{x^2}4+C}.
$$

#### (1)(iii)

$y\ge0$ の区間上で $x=f^{-1}(y)$ とおけば、$y=x\log x$、$dy=(1+\log x)dx$ である。よって

$$
\int f^{-1}(y)\,dy
=\int x(1+\log x)\,dx
=\frac{x^2}2\log x+\frac{x^2}4+C.
$$

従って

$$
\boxed{\int f^{-1}(y)\,dy
=\frac y2 f^{-1}(y)+\frac14\bigl(f^{-1}(y)\bigr)^2+C}.
$$

一意可解範囲の孤立点 $y=-e^{-1}$ だけでは、通常の不定積分を定義する区間にはならない。

#### (2)(i)

$a_2-a_1=1-e^c$ だから、条件は $\boxed{c>0}$ である。

#### (2)(ii)

$e^x\ge1+x$ より $x+1-e^x\le0$ である。従って $a_2=3/2-\sqrt e<0$ であり、$n\ge2$ では $a_n\le0$ かつ $a_{n+1}-a_n=1-e^{a_n}\ge0$ となる。上に有界な単調増加列だから有限な極限 $L$ が存在し、漸化式に極限を取ると $e^L=1$ である。よって $\boxed{L=0}$。

### 問題2
#### (i)

楕円上では $y^2=b^2(1-x^2/a^2)$ なので、距離の二乗は

$$
d^2(x)=a^2+b^2-2ax+\left(1-\frac{b^2}{a^2}\right)x^2,
\qquad -a\le x\le a.
$$

これは上に凸な二次関数で、頂点は $x_*=-a^3/(b^2-a^2)$ である。$b^2\le2a^2$ なら $x_*\le-a$ なので最大は $x=-a$、$b^2>2a^2$ なら頂点で最大となる。従って

$$
\boxed{d_{\max}=\begin{cases}
2a,&a<b\le\sqrt2\,a,\\
\dfrac{b^2}{\sqrt{b^2-a^2}},&b>\sqrt2\,a.
\end{cases}}
$$

#### (ii)

Cauchy–Schwarz より $|d|=|\boldsymbol c^{\mathrm T}\boldsymbol x|\le\|\boldsymbol c\|\|\boldsymbol x\|$ である。等号は $\boldsymbol x=d\boldsymbol c/\|\boldsymbol c\|^2$ で達成される。従って距離は

$$
\boxed{\frac{|d|}{\sqrt{\boldsymbol c^{\mathrm T}\boldsymbol c}}}.
$$

#### (iii)

$x=\sqrt2e^{-p/2}r\cos\theta$、$y=\sqrt2e^{-q/2}r\sin\theta$ と置くと、領域は $0\le r\le1$、$0\le\theta<2\pi$ となり、ヤコビアンの絶対値は $2e^{-(p+q)/2}r$ である。従って

$$
V=\int_0^{2\pi}\int_0^1
(2-2r^2)\,2e^{-(p+q)/2}r\,dr\,d\theta
=\boxed{2\pi e^{-(p+q)/2}}.
$$
