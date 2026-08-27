---
sidebar_label: 2022年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Numerical-Analysis
  - Mathematics.Calculus.Sequence-Convergence
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 選択問題 数値計算

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

区間 $[0,\infty)$ で唯一の解 $\alpha$ をもつ方程式 $f(x)=0$ に Newton 法を適用する。反復式を導き、$f'>0$、$f''>0$ のもとで反復列が $\alpha$ に単調収束すること、誤差が 2 次収束すること、および有効桁数の変化を示せ。

### 题目描述

对具有唯一根的非线性方程应用 Newton 法：推导迭代式，证明在一阶、二阶导数为正时从根右侧单调收敛，并求二次收敛的误差常数和有效数字变化。

## **Kai**

### 1.

$x=x_n$ における 1 次近似は

$$
f(x)\simeq f(x_n)+f'(x_n)(x-x_n)
$$

である。右辺を $0$ とする $x$ を $x_{n+1}$ とすれば、

$$
\boxed{x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}}.
$$

### 2.

$x_n>\alpha$ とする。$f'>0$ と $f(\alpha)=0$ より $f(x_n)>0$ なので、

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}<x_n.
$$

また、与えられた Taylor の公式から

$$
f(x_n)=f'(x_n)(x_n-\alpha)
-\frac12f''(\xi)(x_n-\alpha)^2
$$

である。したがって、

$$
\boxed{
x_{n+1}-\alpha
=\frac{f''(\xi)}{2f'(x_n)}(x_n-\alpha)^2>0}.
$$

よって

$$
\boxed{\alpha<x_{n+1}<x_n}.
$$

### 3.

(2) より $\{x_n\}$ は単調減少し、$\alpha$ を下界にもつので、ある $l\geq\alpha$ に収束する。また、

$$
f(x_n)=f'(x_n)(x_n-x_{n+1}).
$$

$f'$ は閉区間 $[\alpha,x_0]$ で有界であり、$x_n-x_{n+1}\to0$ であるから $f(x_n)\to0$。連続性と解の一意性より $f(l)=0$、すなわち

$$
\boxed{\lim_{n\to\infty}x_n=\alpha}.
$$

### 4.

$e_n=x_n-\alpha$ とおく。(2) の式より、ある $\xi_n\in[\alpha,x_n]$ が存在して

$$
\frac{e_{n+1}}{e_n^2}
=\frac{f''(\xi_n)}{2f'(x_n)}.
$$

$x_n\to\alpha$ かつ $\xi_n\to\alpha$ であるから、

$$
\boxed{
\lim_{n\to\infty}\frac{e_{n+1}}{e_n^2}
=\frac{f''(\alpha)}{2f'(\alpha)}}.
$$

### 5.

十分大きい $n$ では $|e_{n+1}|\simeq C|e_n|^2$ である。$|e_n|\simeq10^{-p}$ なら $|e_{n+1}|\simeq C10^{-2p}$ となるので、

$$
\boxed{\text{有効桁数は 1 反復ごとにほぼ 2 倍になる}}.
$$
