---
sidebar_label: "2020年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

区間 $[0, 1]$ 上の $C^1$ 級関数 $\varphi(t)$ で $\varphi(0) = 0, \varphi(1) = 1$ を満たすもの全体の集合を $\Gamma$ とする。 $\varphi \in \Gamma$ に対して、

$$
I(\varphi) = \int_0^1 (\dot{\varphi}(t))^2 dt, \quad J(\varphi) = \int_0^1 (t\dot{\varphi}(t))^2 dt
$$

とおく。ここで、 $\dot{\varphi}(t)$ は $\varphi(t)$ の導関数 $\frac{d\varphi}{dt}(t)$ である。また、

$$
A = \inf_{\varphi \in \Gamma} I(\varphi), \quad B = \inf_{\varphi \in \Gamma} J(\varphi)
$$

とおく。以下の問いに答えよ。

(i) $A$ を求めよ。また、 $I(\varphi) = A$ となる $\varphi \in \Gamma$ を求めよ。

(ii) 正の整数 $n$ に対して、 $\varphi_n(t) = 1 - (1 - t)^n$ とおく。 $J(\varphi_n)$ を求めよ。

(iii) $B$ を求めよ。

(iv) $J(\varphi) = B$ となる $\varphi \in \Gamma$ は存在しないことを示せ。

### 题目描述

令 $\Gamma$ 为区间 $[0,1]$ 上所有满足

$$
\varphi\in C^1[0,1],
\qquad
\varphi(0)=0,
\qquad
\varphi(1)=1
$$

的函数所成的集合。对 $\varphi\in\Gamma$，定义

$$
I(\varphi)
=
\int_0^1\dot{\varphi}(t)^2\,dt,
\qquad
J(\varphi)
=
\int_0^1\bigl(t\dot{\varphi}(t)\bigr)^2\,dt,
$$

其中

$$
\dot{\varphi}(t)
=
\frac{d\varphi}{dt}(t).
$$

再定义

$$
A=\inf_{\varphi\in\Gamma}I(\varphi),
\qquad
B=\inf_{\varphi\in\Gamma}J(\varphi).
$$

回答：

1. 求 $A$，并求所有满足
   $I(\varphi)=A$ 的 $\varphi\in\Gamma$。
2. 对正整数 $n$，令

$$
\varphi_n(t)=1-(1-t)^n.
$$

求 $J(\varphi_n)$。
3. 求 $B$。
4. 证明不存在满足
   $J(\varphi)=B$ 的 $\varphi\in\Gamma$。

## **Kai**

### (i) 下限値と等号成立条件

境界条件とコーシー・シュワルツの不等式から

$$
\begin{aligned}
1
&=\varphi(1)-\varphi(0)
=\int_0^1\dot{\varphi}(t)\,dt,\\
1
&\leq
\left(\int_0^1 1^2\,dt\right)
\left(\int_0^1\dot{\varphi}(t)^2\,dt\right)
=I(\varphi).
\end{aligned}
$$

一方、 $\varphi(t)=t$ は $\Gamma$ に属し、 $I(\varphi)=1$ を満たす。したがって

$$
A=1.
$$

コーシー・シュワルツの等号条件より、 $I(\varphi)=1$ ならば $\dot{\varphi}$ は定数である。二つの境界条件を使うと、その定数は $1$ である。ゆえに、等号を達成する関数は

$$
\varphi(t)=t
$$

だけである。

### (ii) 近似列に対する計算

$$
\dot{\varphi}_n(t)=n(1-t)^{n-1}
$$

であるから、

$$
\begin{aligned}
J(\varphi_n)
&=n^2\int_0^1 t^2(1-t)^{2n-2}\,dt\\
&=n^2 B(3,2n-1)\\
&=n^2\frac{\Gamma(3)\Gamma(2n-1)}{\Gamma(2n+2)}\\
&=\frac{2n^2(2n-2)!}{(2n+1)!}\\
&=\frac{n}{4n^2-1}.
\end{aligned}
$$

### (iii) 下限値

被積分関数が非負なので $J(\varphi)\geq 0$ であり、 $B\geq 0$ である。一方、(ii) より

$$
\lim_{n\to\infty}J(\varphi_n)
=\lim_{n\to\infty}\frac{n}{4n^2-1}
=0.
$$

各 $\varphi_n$ は $\Gamma$ に属するので $B\leq J(\varphi_n)$ である。したがって

$$
B=0.
$$

### (iv) 下限値を達成する関数の非存在

$J(\varphi)=0$ と仮定する。連続な非負関数 $(t\dot{\varphi}(t))^2$ の積分が $0$ なので、この関数は $[0,1]$ 上で恒等的に $0$ でなければならない。したがって $t>0$ では $\dot{\varphi}(t)=0$ であり、 $\varphi$ は $(0,1]$ 上で定数である。

$\varphi$ の連続性から、その定数は $\varphi(0)$ にも等しくなる。これは $\varphi(0)=0$ と $\varphi(1)=1$ に矛盾する。ゆえに、 $J(\varphi)=B$ を満たす $\varphi\in\Gamma$ は存在しない。
