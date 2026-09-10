---
sidebar_label: '2020年8月実施 数学1'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Logarithmic-Differentiation
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Integral-of-Inverse-Function
  - Mathematics.Differential-Equations.Systems-of-ODEs
---

# 東京大学 工学系研究科 2020年8月実施 数学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_1.pdf)

### I.
1. $0<x<1$、$0<\arccos x<\pi/2$ における $y=(\arccos x)^{\log x}$ の導関数を求める。
2. 実定数 $p$ に対し $\int (x^2+x+2)/(x^3-px^2)\,dx$ を計算する。
3. $0<\theta<\pi/2$ に対し

$$
\int_0^{\sin\theta}\frac{\arctan(\arcsin x)}{\sqrt{1-x^2}}\,dx
$$

を求める。

### II.
実定数 $a,b$ と複素数値関数 $p,q$ が

$$
p'=-ibq\,e^{-2iax},\qquad q'=-ibp\,e^{2iax}
$$

を満たす。

1. $f=pe^{iax}$、$g=qe^{-iax}$ と変換して $f,g$ の連立微分方程式を導く。
2. $|f|^2+|g|^2$ が $x$ に依存しないことを示す。
3. $a=0.8,b=0.6,f(0)=1,g(0)=0$ の場合の $f,g$ を求める。

#### 题目描述

I. (1) 对 $0<x<1$，求 $y=(\arccos x)^{\log x}$ 的导数，其中 $0<\arccos x<\pi/2$。
(2) 对实参数 $p$，求 $\int(x^2+x+2)/(x^3-px^2)\,dx$。
(3) 对 $0<\theta<\pi/2$，求 $\int_0^{\sin\theta}\arctan(\arcsin x)/\sqrt{1-x^2}\,dx$。

II. 设 $a,b$ 为实数，复函数满足 $p'=-ibq e^{-2iax},q'=-ibp e^{2iax}$。
(1) 令 $f=pe^{iax},g=qe^{-iax}$，导出其方程组。
(2) 证明 $|f|^2+|g|^2$ 与 $x$ 无关。
(3) 在 $a=0.8,b=0.6,f(0)=1,g(0)=0$ 时求 $f,g$。

## **Kai**

### I

#### 1

$\log y=\log x\log(\arccos x)$ を微分すると、

$$
\boxed{y'=(\arccos x)^{\log x}
\left(\frac{\log(\arccos x)}x-
\frac{\log x}{\arccos x\sqrt{1-x^2}}\right)}.
$$

#### 2

$p=0$ のとき、項別に積分して、

$$
\boxed{\log|x|-\frac1x-\frac1{x^2}+C}.
$$

$p\ne0$ のとき、部分分数分解

$$
\frac{x^2+x+2}{x^2(x-p)}
=-\frac{p+2}{p^2x}-\frac2{px^2}+\frac{p^2+p+2}{p^2(x-p)},
$$

を用いて、

$$
\boxed{-\frac{p+2}{p^2}\log|x|+\frac2{px}
+\frac{p^2+p+2}{p^2}\log|x-p|+C}.
$$

各式は被積分関数が定義された区間で考える。

#### 3

$t=\arcsin x$ と置換して部分積分すると、

$$
I=\int_0^\theta\arctan t\,dt
=\left[t\arctan t-\frac12\log(1+t^2)\right]_0^\theta.
$$

従って $\boxed{I=\theta\arctan\theta-\tfrac12\log(1+\theta^2)}$ である。

### II

#### 1

変換式を微分し原方程式を代入すると、

$$
\boxed{f'=iaf-ibg,\qquad g'=-ibf-iag}.
$$

#### 2

$\boldsymbol u=(f,g)^T$、$H=\begin{pmatrix}a&-b\\-b&-a\end{pmatrix}$ とおく。
$\boldsymbol u'=iH\boldsymbol u$、$H^*=H$ より、

$$
\frac d{dx}(|f|^2+|g|^2)
=\boldsymbol u^*(-iH+iH)\boldsymbol u=0.
$$

#### 3

$a=4/5,b=3/5$ のとき $H^2=I$ なので、
$e^{ixH}=I\cos x+iH\sin x$。初期条件 $(f(0),g(0))=(1,0)$ より、

$$
\boxed{f(x)=\cos x+\frac{4i}5\sin x,\qquad
 g(x)=-\frac{3i}5\sin x}.
$$

