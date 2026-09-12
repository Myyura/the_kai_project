---
sidebar_label: 2013年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Integration
  - Mathematics.Calculus.Mean-Value-Theorem
---
# 京都大学 情報学研究科 システム科学専攻 2013年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$e$ を自然対数の底とする。

### 問1
(i) $\displaystyle\int_0^{\pi/2}\log(\sin\theta)\,d\theta$ を求めよ。

(ii) 積分 $\int_0^\infty ye^{-x^2y^2}dx$ は $1\le y\le2$ において一様収束する。この事実を利用して、次の積分を求めよ。

$$
\int_0^\infty\frac{e^{-t^2}-e^{-4t^2}}{t^2}\,dt.
$$

### 問2
$f$ は $(0,\infty)$ で微分可能とする。$f(x)=0$ は $\ell$ 個の相異なる実数解 $0<x_1<\cdots<x_\ell$ をもつ。

(i) 十分小さい任意の $\varepsilon>0$ と $i\in\{1,\ldots,\ell-1\}$ に対し、$0<\varepsilon_1,\varepsilon_2<\varepsilon$ で

$$
\operatorname{sgn}f'(x_i+\varepsilon_1)=-\operatorname{sgn}f'(x_{i+1}-\varepsilon_2)\ne0
$$

となるものが存在することを、テイラーの定理を用いて示せ。ここで $\operatorname{sgn}y$ は $y>0,y=0,y<0$ に応じて $1,0,-1$ をとる。

(ii) $f'(x)=0$ の実数解の個数を $m$ とする。(i) を用いて $m\ge\ell-1$ を示せ。

(iii) $g(x)=e^xf(x)$ とする。$g'(x)=0$ の実数解の個数を $n$、$f(x)+f'(x)=0$ の実数解の個数を $j$ とすると、$n=j$ を示せ。

(iv) $\lim_{x\to\infty}e^xf(x)=0$ を追加条件とする。$f(x)+f'(x)=0$ の実数解の個数を $k$ とすると、(ii),(iii) を用いて $k\ge\ell$ を示せ。

#### 题目描述

**问1** (i) 求 $\int_0^{\pi/2}\log(\sin\theta)d\theta$。(ii) 已知 $\int_0^\infty ye^{-x^2y^2}dx$ 在 $1\le y\le2$ 上一致收敛，利用这一事实求 $\int_0^\infty(e^{-t^2}-e^{-4t^2})/t^2\,dt$。$e$ 为自然对数的底。

**问2** 设 $f$ 在 $(0,\infty)$ 可微，$f(x)=0$ 的全部互异实根为 $0<x_1<\cdots<x_\ell$。(i) 利用泰勒定理证明：对任意充分小的 $\varepsilon>0$ 和 $i=1,\ldots,\ell-1$，存在 $0<\varepsilon_1,\varepsilon_2<\varepsilon$ 使

$$
\operatorname{sgn}f'(x_i+\varepsilon_1)=-\operatorname{sgn}f'(x_{i+1}-\varepsilon_2)\ne0.
$$

其中 $\operatorname{sgn}$ 为符号函数。(ii) 若 $f'(x)=0$ 有 $m$ 个实根，利用 (i) 证明 $m\ge\ell-1$。(iii) 令 $g=e^xf$，若 $g'=0$ 有 $n$ 个实根，$f+f'=0$ 有 $j$ 个实根，证明 $n=j$。(iv) 增加 $e^xf(x)\to0$ 的条件，利用 (ii),(iii) 证明 $f+f'=0$ 的实根数 $k\ge\ell$。

## **Kai**

### 問1
(i) 積分を $I$ とする。$\theta\mapsto\pi/2-\theta$ により $I=\int_0^{\pi/2}\log(\cos\theta)d\theta$。従って

$$
2I=\int_0^{\pi/2}\log(\sin2\theta)d\theta-\frac\pi2\log2
=I-\frac\pi2\log2,qquad\boxed{I=-\frac\pi2\log2}.
$$

(ii) $e^{-t^2}-e^{-4t^2}=2t^2\int_1^2ye^{-t^2y^2}dy$。与えられた一様収束により積分順序を交換して

$$
\int_0^\infty\frac{e^{-t^2}-e^{-4t^2}}{t^2}dt
=2\int_1^2\!\int_0^\infty ye^{-t^2y^2}dt\,dy
=2\int_1^2\frac{\sqrt\pi}2dy=\boxed{\sqrt\pi}.
$$

### 問2
(i) $(x_i,x_{i+1})$ には零点がないので、連続性から $f$ の符号は一定かつ非零である。小さい $\delta\in(0,\varepsilon)$ をとる。一次のテイラーの定理（平均値の定理）により

$$
f(x_i+\delta)=\delta f'(x_i+\varepsilon_1),\qquad
f(x_{i+1}-\delta)=-\delta f'(x_{i+1}-\varepsilon_2)
$$

を満たす $0<\varepsilon_1,\varepsilon_2<\delta$ が存在する。左辺の符号が等しいことから結論を得る。

(ii) 導関数は中間値の性質をもつので、(i) の二点の間に $f'=0$ の点が存在する。各区間 $(x_i,x_{i+1})$ で一つずつ得られ、$\boxed{m\ge\ell-1}$。

(iii) $g'=e^x(f+f')$ かつ $e^x>0$ なので両方の零点集合は等しい。従って $\boxed{n=j}$。

(iv) (ii),(iii) より $(x_1,x_\ell)$ 内に少なくとも $\ell-1$ 個ある。さらに $a>x_\ell$ をとると $g(a)\ne0$。$g(x)\to0$ なので $b>a$ を $|g(b)|<|g(a)|$ となるように選べる。$g(x_\ell)=0$ より、$|g|$ は $[x_\ell,b]$ の内部に正の最大値をとる。その点で $g'=0$ であり、追加の零点を得る。従って $\boxed{k\ge\ell}$。

