---
sidebar_label: "2018年2月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Constrained-Optimization
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年2月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 【1】

$f(x)=\sin^{n-1}x\cos x$ とする。このとき以下の各問に答えよ。ただし $n$ は正の整数である。

#### (1)

$\dfrac{df}{dx}$ を求めよ。

#### (2)

$$
\frac{df}{dx}=a\sin^n x+b\sin^{n-2}x
$$

としたとき定数 $a$ と $b$ を求めよ。

#### (3)

$$
I_n=\int_0^{\pi/2}\sin^n x\,dx
$$

と置く。$\displaystyle\int_0^{\pi/2}\dfrac{df}{dx}\,dx$ を計算することによって、

$$
nI_n=(n-1)I_{n-2}
$$

が成立することを示せ。

#### (4)

$\displaystyle\int_0^{\pi/2}\sin^n x\,dx$ を求めよ。

### 【2】

$2$ 変数関数 $g(x,y)=e^{-xy}$ について以下の各問に答えよ。

#### (1)

$\dfrac{\partial g}{\partial x}$ と $\dfrac{\partial g}{\partial y}$ を求めよ。

#### (2)

関数 $g(x,y)$ が条件 $x^2+y^2=1$ のもとで極値を取る候補点を求めよ。

### 题目描述

1. 对 $f(x)=\sin^{n-1}x\cos x$ 求导，并由其积分推导

   $$
   nI_n=(n-1)I_{n-2},\qquad
   I_n=\int_0^{\pi/2}\sin^n x\,dx,
   $$

   进而求 $I_n$。
2. 对 $g(x,y)=e^{-xy}$ 求两个偏导数，并求其在单位圆上可能取得极值的点。

## **Kai**

### 【1】

#### (1), (2)

積の微分より、$n\ge2$ では

$$
\begin{aligned}
f'(x)
&=(n-1)\sin^{n-2}x\cos^2x-\sin^n x\\
&=(n-1)\sin^{n-2}x-n\sin^n x.
\end{aligned}
$$

したがって

$$
\boxed{a=-n,\qquad b=n-1}.
$$

$n=1$ では $f(x)=\cos x$ なので $f'(x)=-\sin x$ であり、$a=-1,b=0$ である。

#### (3)

$n\ge2$ では $f(0)=f(\pi/2)=0$ だから

$$
0=\int_0^{\pi/2}f'(x)\,dx
=(n-1)I_{n-2}-nI_n.
$$

よって

$$
\boxed{nI_n=(n-1)I_{n-2}\qquad(n\ge2)}.
$$

#### (4)

$I_0=\pi/2$、$I_1=1$ と漸化式を用いると

$$
\boxed{
I_n=
\begin{cases}
\dfrac{(2m-1)!!}{(2m)!!}\dfrac\pi2,&n=2m,\\[3mm]
\dfrac{(2m)!!}{(2m+1)!!},&n=2m+1
\end{cases}}
$$

を得る。

### 【2】

#### (1)

$$
\boxed{
\frac{\partial g}{\partial x}=-ye^{-xy},
\qquad
\frac{\partial g}{\partial y}=-xe^{-xy}
}.
$$

#### (2)

単位円を $x=\cos\theta,\ y=\sin\theta$ とおくと、

$$
\frac{d}{d\theta}g(\cos\theta,\sin\theta)
=-\cos2\theta\,e^{-\sin2\theta/2}.
$$

したがって停留点は $\cos2\theta=0$、すなわち $x=\pm y$ に限られる。

$g=e^{-xy}$ は $xy$ の狭義単調減少関数なので、単位円上で $xy$ が極値を取る点を調べればよい。

$$
2xy\le x^2+y^2=1,\qquad
-2xy\le x^2+y^2=1
$$

より $-1/2\le xy\le1/2$ であり、等号条件は $x=\pm y$ である。したがって候補点は

$$
\boxed{
\left(\frac1{\sqrt2},\frac1{\sqrt2}\right),
\left(-\frac1{\sqrt2},-\frac1{\sqrt2}\right),
\left(\frac1{\sqrt2},-\frac1{\sqrt2}\right),
\left(-\frac1{\sqrt2},\frac1{\sqrt2}\right)
}.
$$

前二点で最小値 $e^{-1/2}$、後二点で最大値 $e^{1/2}$ を取る。
