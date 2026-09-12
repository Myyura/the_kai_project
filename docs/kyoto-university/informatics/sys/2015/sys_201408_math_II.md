---
sidebar_label: 2014年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Local-Extrema
---
# 京都大学 情報学研究科 システム科学専攻 2014年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
領域

$$
D=\{(x,y)\in\mathbb R^2\mid x^2\le y\le4x^2,\ y^2\le x\le2y^2\}
$$

の面積を、変数変換 $u=y/x^2,\ v=x/y^2$ を用いて求めよ。

### 問題2
(1) $\tan\theta$ の微分を求めよ。

(2) $\displaystyle\int_1^\infty\frac{dx}{1+x^2}=\frac\pi4$ を示せ。

(3) $f(1)=1$、$f'(x)=1/(x^2+f(x)^2)$ を満たす関数 $f$ について、$x>1$ で $f(x)<1+\pi/4$ となることを示せ。

### 問題3
$\alpha>0$、$e$ は自然対数の底とする。

(1) $x>0$ 上の関数 $g(x)=e^x/x^\alpha$ が最小値をもつことを示せ。

(2) すべての $x>0$ で $e^x>x^\alpha$ となるための $\alpha$ の条件を、理由とともに述べよ。

(3) $(8.6)^{8.7}$ と $(8.7)^{8.6}$ のどちらが大きいか、理由とともに述べよ。必要なら $e<3$ を用いてよい。

#### 题目描述

**问题1** 利用变量代换 $u=y/x^2,\ v=x/y^2$ 求区域

$$
D=\{(x,y):x^2\le y\le4x^2,\ y^2\le x\le2y^2\}
$$

的面积。

**问题2** (1) 求 $\tan\theta$ 的导数。(2) 证明 $\int_1^\infty(1+x^2)^{-1}dx=\pi/4$。(3) 若 $f(1)=1$ 且 $f'(x)=1/(x^2+f(x)^2)$，证明 $x>1$ 时 $f(x)<1+\pi/4$。

**问题3** 设 $\alpha>0$，$e$ 为自然对数的底。(1) 证明 $g(x)=e^x/x^\alpha$ 在 $x>0$ 上有最小值。(2) 求使所有 $x>0$ 均满足 $e^x>x^\alpha$ 的 $\alpha$ 的条件并说明理由。(3) 比较 $(8.6)^{8.7}$ 与 $(8.7)^{8.6}$ 并说明理由；可使用 $e<3$。

## **Kai**

### 問題1
原点以外では $x,y>0$ であり、変換後の領域は $1\le u\le4,\ 1\le v\le2$ である。

$$
x=u^{-2/3}v^{-1/3},\quad y=u^{-1/3}v^{-2/3},\qquad
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\frac1{3u^2v^2}.
$$

従って面積は

$$
\boxed{\int_1^4\int_1^2\frac{dv\,du}{3u^2v^2}=\frac13\left(1-\frac14\right)\left(1-\frac12\right)=\frac18}.
$$

### 問題2
(1) $\boxed{(\tan\theta)'=1/\cos^2\theta}$。

(2) $\displaystyle\int_1^R\frac{dx}{1+x^2}=\arctan R-\frac\pi4\to\boxed{\frac\pi4}$。

(3) $f'>0$ より $x>1$ で $f(x)>1$。従って

$$
f(x)-1=\int_1^x\frac{dt}{t^2+f(t)^2}
<\int_1^x\frac{dt}{t^2+1}<\frac\pi4.
$$

### 問題3
(1) $g'(x)=e^xx^{-\alpha-1}(x-\alpha)$ より、$x=\alpha$ で最小値 $\boxed{(e/\alpha)^\alpha}$ をとる。

(2) この最小値が $1$ より大きいことと同値なので、$\boxed{0<\alpha<e}$。

(3) $h(x)=\log x/x$ は $x>e$ で $h'(x)=(1-\log x)/x^2<0$。$8.6,8.7>e$ より

$$
\frac{\log8.6}{8.6}>\frac{\log8.7}{8.7}
\quad\Longrightarrow\quad\boxed{(8.6)^{8.7}>(8.7)^{8.6}}.
$$

