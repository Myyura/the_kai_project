---
sidebar_label: 2020年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Functional-Equation
  - Mathematics.Calculus.Limit
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 数学【II】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/68785ee8000000000d019ff4?xsec_token=ABrcrf5X-L0bZHNo5eUjCdTXGcWyhwY_E6H3CLfh1Lapc=)

## **Description**
### 問1
関数 $f : [-1, 1] \to \mathbb{R}$ は連続関数であり、次式を満たすものとする。

$$
f(2x^2 - 1) = 2x f(x)
$$

さらに、

$$
\mathbb{G} = \{ t \in \mathbb{R} : t \ne n\pi, \ n \in \mathbb{Z} \}
$$

とし、関数 $g : \mathbb{G} \to \mathbb{R}$ を次のように定める。

$$
g(t) = \frac{f(\cos t)}{\sin t}
$$

このとき、以下の設問に答えよ。

(i) $f(-1)$ および $f(1)$ の値を求めよ。

(ii) $g$ が奇関数であることを示せ。

(iii) 任意の $t \in G$ に対して、 $g(t) = g(t/2)$ が成り立つことを示せ。

(iv) 次式が成り立つことを示せ。

$$
g\left(1 + \frac{n\pi}{2^k}\right) = g(1), \quad n, k \in \mathbb{Z}
$$

(v) 関数 $f$ を求めよ。なお、導出過程も示せ。

### 問2
微分可能な関数 $f : (a,b) \to (0,\infty)$ と
$g : (a,b) \to \mathbb{R}$ が以下のいずれかを満たすと仮定する。
ただし、 $a < b$ とする。

- (A) $\lim_{x \to a+0} f(x) = 1$ かつ $\lim_{x \to a+0} g(x) = \pm \infty$
- (B) $\lim_{x \to a+0} f(x) = \infty$ かつ $\lim_{x \to a+0} g(x) = 0$
- (C) $\lim_{x \to a+0} f(x) = 0$ かつ $\lim_{x \to a+0} g(x) = 0$

このとき、次式が成り立つ。

$$
\lim_{x \to a+0} (f(x))^{g(x)} = \exp \left(-\lim_{x \to a+0} \frac{f'(x)(g(x))^2}{f(x) g'(x)} \right)
\tag{1}
$$

(i) 次の値を求めよ。

- (a) $\lim_{x \to +0} (\sin x)^{\sqrt{x}}$
- (b) $\lim_{x \to +0} \left(\frac{2}{\pi} \arctan \frac{1}{x} \right)^{1/x}$ （ $-\frac{\pi}{2} < \arctan y < \frac{\pi}{2}, \ \forall y \in \mathbb{R}$ とする）

(ii) 関数 $h : \mathbb{R} \to \mathbb{R}$ は $2$ 回微分可能であり、
正の実数 $p$ に対して次式を満たすと仮定する。

$$
h''(x) + h(x) = 0, \quad \lim_{x \to +0} (h(x))^{1/x} = p, \quad \lim_{x \to +0} h(x) > 0
$$

関数 $h$ を求めよ。

(iii) (A), (B), (C) のいずれかが満たされるとき、式 (1) が成り立つことを証明せよ。

### 题目描述

回答以下两题。

1. 连续函数 $f:[-1,1]\to\mathbb{R}$ 满足

$$
f(2x^2-1)=2xf(x).
$$

定义

$$
\mathbb{G}
=\{t\in\mathbb{R}\mid
t\ne n\pi,\ n\in\mathbb{Z}\},
$$

以及 $g:\mathbb{G}\to\mathbb{R}$：

$$
g(t)=\frac{f(\cos t)}{\sin t}.
$$

完成下列各问：

   1. 求 $f(-1)$ 和 $f(1)$。
   2. 证明 $g$ 是奇函数。
   3. 证明对任意 $t\in\mathbb{G}$ 都有
      $g(t)=g(t/2)$。
   4. 证明对任意整数 $n,k$，

$$
g\!\left(1+\frac{n\pi}{2^k}\right)=g(1).
$$

   5. 求出函数 $f$，并写明推导过程。

2. 设 $a<b$，可微函数
   $f:(a,b)\to(0,\infty)$ 和
   $g:(a,b)\to\mathbb{R}$ 满足以下三种条件之一：

   - （A）
     $\displaystyle\lim_{x\to a+0}f(x)=1$，且
     $\displaystyle\lim_{x\to a+0}g(x)=\pm\infty$；
   - （B）
     $\displaystyle\lim_{x\to a+0}f(x)=\infty$，且
     $\displaystyle\lim_{x\to a+0}g(x)=0$；
   - （C）
     $\displaystyle\lim_{x\to a+0}f(x)=0$，且
     $\displaystyle\lim_{x\to a+0}g(x)=0$。

题面给出在上述任一情形下成立的公式

$$
\lim_{x\to a+0}(f(x))^{g(x)}
=
\exp\!\left(
-\lim_{x\to a+0}
\frac{f'(x)(g(x))^2}{f(x)g'(x)}
\right).
\tag{1}
$$

完成：

   1. 求

$$
\lim_{x\to+0}(\sin x)^{\sqrt{x}}
$$

和

$$
\lim_{x\to+0}
\left(\frac{2}{\pi}\arctan\frac1x\right)^{1/x},
$$

其中反正切取值满足
$-\frac{\pi}{2}<\arctan y<\frac{\pi}{2}$（$y\in\mathbb{R}$）。
   2. 设 $h:\mathbb{R}\to\mathbb{R}$ 二阶可微，并对某个正实数 $p$ 满足

$$
h''(x)+h(x)=0,\qquad
\lim_{x\to+0}(h(x))^{1/x}=p,\qquad
\lim_{x\to+0}h(x)>0.
$$

求函数 $h$。
   3. 证明只要条件（A）、（B）、（C）中任一项成立，公式 (1) 就成立。

## **Kai**
### 問1

(i) $x=1$ を代入すると $f(1)=2f(1)$ より $f(1)=0$。$x=0$ より $f(-1)=0$。

(ii) $\cos(-t)=\cos t$、$\sin(-t)=-\sin t$ より $g(-t)=-g(t)$。

(iii) $t\in\mathbb G$ なら $\sin(t/2)$、$\cos(t/2)$ はともに $0$ でない。二倍角公式と関数方程式により

$$g(t)=\frac{f(2\cos^2(t/2)-1)}{2\sin(t/2)\cos(t/2)}=\frac{f(\cos(t/2))}{\sin(t/2)}=g(t/2).$$

(iv) $g$ は定義から $2\pi$ 周期である。$k\geq0$ のとき、(iii) を $k+1$ 回用いると

$$g\left(1+\frac{n\pi}{2^k}\right)=g(2^{k+1}+2n\pi)=g(2^{k+1})=g(1).$$

ここで関係する点はすべて $\mathbb G$ 内にある。$k<0$ のときは $n\pi/2^k$ が $2\pi$ の整数倍なので周期性から従う。

(v) 集合 $\{1+n\pi/2^k:n,k\in\mathbb Z\}$ は実数全体で稠密である。$g$ は $\mathbb G$ 上連続なので、(iv) より $g(t)=g(1)$ がすべての $t\in\mathbb G$ で成立する。(ii) の奇関数性から、この定数は $0$。任意の $x\in(-1,1)$ を $x=\cos t$ と書けば $f(x)=0$ であり、端点も (i) より $0$。従って $\boxed{f\equiv0}$。

### 問2

(i-a) $\sin x/x\to1$ を用いると

$$\sqrt x\log\sin x=\sqrt x\log x+\sqrt x\log\frac{\sin x}{x}\longrightarrow0,$$

従って極限は $\boxed1$。

(i-b) $x>0$ で $\arctan(1/x)=\pi/2-\arctan x$ なので

$$\frac1x\log\left(\frac2\pi\arctan\frac1x\right)=\frac1x\log\left(1-\frac2\pi\arctan x\right)\longrightarrow-\frac2\pi.$$

従って極限は $\boxed{e^{-2/\pi}}$。

(ii) 微分方程式の一般解は $h(x)=A\cos x+B\sin x$。$h(0)=A>0$ であり、$h(x)^{1/x}$ が正の有限値に収束するには $A=1$ が必要である。このとき

$$\lim_{x\to0+}\frac{\log h(x)}x=h'(0)=B=\log p.$$

従って $\boxed{h(x)=\cos x+(\log p)\sin x}$。

(iii) $g,g'$ が $a$ の十分近くで $0$ でなく、右辺の導関数比の極限が拡張実数として存在するとする。このロピタルの定理の適用条件の下で、

$$g(x)\log f(x)=\frac{\log f(x)}{1/g(x)}$$

は (A) では $0/0$ 型、(B),(C) では $\infty/\infty$ 型となる。従って

$$\lim_{x\to a+}g(x)\log f(x)=\lim_{x\to a+}\frac{f'(x)/f(x)}{-g'(x)/g(x)^2}=-\lim_{x\to a+}\frac{f'(x)g(x)^2}{f(x)g'(x)}.$$

指数関数をとれば式 (1) を得る。条件 (A)～(C) だけでは極限の存在は保証されない。例えば $a=0$、$f(x)=e^{x(2+\sin(1/x))}$、$g(x)=1/x$ は (A) を満たすが、$f(x)^{g(x)}=e^{2+\sin(1/x)}$ は収束しない。
