---
sidebar_label: 2025年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Constrained-Optimization
---
# 京都大学 情報学研究科 システム科学専攻 2025年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$\log$ は自然対数、$e$ はその底、$\pi$ は円周率、$\mathbb R$ は実数全体とする。

### 問題1
(1) $A=\{(x,y)\in\mathbb R^2:x^2\le1+y\le x\}$ とする。

(i) 実定数 $a$ について、直線 $x=a$ と $A$ との共通部分が空でないための必要十分条件を求めよ。

(ii) 次の集合 $B$ 上の積分を求めよ。

$$
B=\{(s,t)\in\mathbb R^2:s\ge0,\ 0\le t<4\pi,\ s^2\cos^2t\le1+s\sin t\le s\cos t\},\qquad\iint_B s^2\cos t\,ds\,dt.
$$

(2) $x>0$ に対して $f(x)=\log(\max\{x,e\})$ と定め、$f_0(x)=x$、$f_n(x)=f(f_{n-1}(x))$ ($n\ge1$) とする。

(i) $g(x)=(x-e)f(x)$ が微分可能な $x$ をすべて求め、その導関数を求めよ。またグラフの概形を描け。

(ii) $\prod_{n=0}^{\infty}f_n(x)<\infty$ を示せ。

(iii) $\displaystyle\int_e^\infty\frac{dx}{\prod_{n=0}^\infty f_n(x)}<\infty$ が成立するか、理由とともに答えよ。

### 問題2
(1) $a>0$ に対して $f(x)=x^xe^{-ax}$ ($x>0$) の極値があればその位置と極値、および極大・極小の別を求めよ。なければ理由を示せ。

(2) $g(x)=\log((1-x)/(1+x))$ ($-1<x<1$) を $x=0$ のまわりで三次まで Maclaurin 展開し、それに基づく $\log2$ の近似値を計算せよ。

(3) 非負実数 $x,y,z$ に対し $h(x,y,z)=\cos x\cos y\cos z$ とする。制約 $2x+y+z=\pi$ のもとで $h$ の最大値を求めよ。

#### 题目描述

$\log$ 为自然对数，$e$ 为其底，$\pi$ 为圆周率，$\mathbb R$ 为实数集。

问题 1：（1）令 $A=\{(x,y)\in\mathbb R^2:x^2\le1+y\le x\}$。

（i）求直线 $x=a$ 与 $A$ 的交集非空的充要条件，其中 $a$ 为实常数。

（ii）在下列区域上计算积分：

$$
B=\{(s,t)\in\mathbb R^2:s\ge0,\ 0\le t<4\pi,\ s^2\cos^2t\le1+s\sin t\le s\cos t\},\qquad\iint_Bs^2\cos t\,ds\,dt.
$$

（2）对 $x>0$ 定义 $f(x)=\log(\max\{x,e\})$、$f_0(x)=x$ 及 $f_n(x)=f(f_{n-1}(x))$（$n\ge1$）。

（i）求 $g(x)=(x-e)f(x)$ 的全部可微点及相应导数，画出函数概形。

（ii）证明 $\prod_{n=0}^\infty f_n(x)<\infty$。

（iii）判断 $\int_e^\infty(\prod_{n=0}^\infty f_n(x))^{-1}\,dx<\infty$ 是否成立，并说明理由。

问题 2：（1）给定 $a>0$，求 $f(x)=x^xe^{-ax}$（$x>0$）的极值点、极值并判断极大或极小；若无极值则说明原因。

（2）将 $g(x)=\log((1-x)/(1+x))$（$-1<x<1$）在 $0$ 处展开至三次项，并据此计算 $\log2$ 的近似值。

（3）求非负实数 $x,y,z$ 满足 $2x+y+z=\pi$ 时 $h(x,y,z)=\cos x\cos y\cos z$ 的最大值。

## **Kai**

### 問題1
(1)(i) 縦断面は $a^2-1\le y\le a-1$。従って条件は $a^2\le a$、すなわち $\boxed{0\le a\le1}$。

(ii) $x=s\cos t,y=s\sin t$ とすれば $dx\,dy=s\,ds\,dt$ である。$0\le t<4\pi$ は領域を二回覆い、$s^2\cos t\,ds\,dt=x\,dx\,dy$ となる。従って

$$
\boxed{\iint_Bs^2\cos t\,ds\,dt
=2\int_0^1\int_{x^2-1}^{x-1}x\,dy\,dx=2\int_0^1(x^2-x^3)\,dx=\frac16}.
$$

### 問題1 (2)
(i) $f(x)=1$ ($0<x\le e$)、$f(x)=\log x$ ($x>e$) より、$g$ はすべての $x>0$ で微分可能で、

$$
g'(x)=\begin{cases}1,&0<x\le e,\\\log x+1-e/x,&x>e.\end{cases}
$$

$0<x\le e$ では直線 $g=x-e$。$x>e$ では $g'>0$、$g''=(x+e)/x^2>0$ であり、$(e,0)$ で傾き $1$ のまま上に曲がる。
![g(x) の概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2026/sys_202508_math_II_g.svg)

(ii) $u>e$ なら $f(u)=\log u\le u-1$ だから、有限回の反復で値が $e$ 以下になる。その次からはすべて $1$ である。従って無限積は有限個の正の因子の積となり、有限である。

(iii) $a_0=e,a_{k+1}=e^{a_k}$ とする。区間 $(a_k,a_{k+1})$ では

$$
\prod_{n=0}^\infty f_n(x)=x\log x\cdots\log^{\circ(k+1)}x,
$$

従って

$$
\int_{a_k}^{a_{k+1}}\frac{dx}{\prod_n f_n(x)}
=\left[\log^{\circ(k+2)}x\right]_{a_k}^{a_{k+1}}=1.
$$

各区間の和は $\sum_{k\ge0}1=\infty$。よって不等式は成立しない。

### 問題2
(1) $\log f=x\log x-ax$ より $f'/f=\log x+1-a$。これは単調増加して $x=e^{a-1}$ で零になる。従って一意な極小値は

$$
\boxed{f(e^{a-1})=\exp(-e^{a-1})},
$$

極大値は存在しない。

(2) 対数の展開の差をとると

$$
g(x)=-2x-\frac23x^3+O(x^5).
$$

$g(-1/3)=\log2$ より $\boxed{\log2\simeq 2/3+2/81=56/81}$。

(3) $0\le x\le\pi/2$、$y+z=\pi-2x$ だから

$$
\cos y\cos z=\frac{\cos(y-z)+\cos(y+z)}2\le\frac{1-\cos2x}2=\sin^2x.
$$

従って $h\le\cos x\sin^2x=u-u^3$ ($u=\cos x\in[0,1]$)。最大は $u=1/\sqrt3$ であり、$y=z=\pi/2-x$ とすれば等号を達成する。よって

$$
\boxed{h_{\max}=\frac2{3\sqrt3}}.
$$

