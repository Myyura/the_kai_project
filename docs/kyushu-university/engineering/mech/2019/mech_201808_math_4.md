---
sidebar_label: "2019年度 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Calculus.Improper-Integral
---

# 九州大学 工学府 機械系専攻 2019年度 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ。必要に応じて留数定理

$$
\oint f(z)\,dz=2\pi i\sum_j\operatorname{Res}(a_j,f)
$$

を用いてよい。ここで、$i$ は虚数単位、$\operatorname{Res}(a_j,f)$ は留数、$a_j$ は特異点を表す。（50点）

1. 定積分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^2}$ を求めよ。
2. 恒等式 $\displaystyle\frac1{1+z^4}=\sum_j\frac{\delta_j}{z-\lambda_j}$ が成立するように、複素数の定数 $\delta_j,\lambda_j$ を定めよ。ここで、$\lambda_j$ は方程式 $z^4=-1$ の解である。
3. 定積分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^4}$ を求めよ。

#### 题目描述

可使用留数定理。① 计算 $\int_{-\infty}^{\infty}(1+x^2)^{-1}dx$。② 求使 $(1+z^4)^{-1}=\sum_j\delta_j/(z-\lambda_j)$ 恒成立的复数 $\lambda_j,\delta_j$，其中 $\lambda_j$ 为 $z^4=-1$ 的根。③ 计算 $\int_{-\infty}^{\infty}(1+x^4)^{-1}dx$。

## **Kai**

### (1)

$$
\int_{-\infty}^{\infty}\frac{dx}{1+x^2}
=\left[\arctan x\right]_{-\infty}^{\infty}
=\boxed{\pi}.
$$

### (2)

$z^4=-1$ の4根は相異なり、

$$
\boxed{\lambda_j=\exp\left(\frac{(2j+1)\pi i}{4}\right),\qquad j=0,1,2,3}.
$$

各極での留数が部分分数の係数なので

$$
\boxed{\delta_j=\frac1{4\lambda_j^3}=-\frac{\lambda_j}{4}}.
$$

最後の等号では $\lambda_j^4=-1$ を用いた。

### (3)

上半平面内の極は $\lambda_0=e^{i\pi/4}$、$\lambda_1=e^{3i\pi/4}$。半径 $R$ の上半円弧上の積分は $R\to\infty$ で $O(R^{-3})\to0$ なので、留数定理から

$$
\begin{aligned}
\int_{-\infty}^{\infty}\frac{dx}{1+x^4}
&=2\pi i\left(-\frac{\lambda_0+\lambda_1}{4}\right)\\
&=2\pi i\left(-\frac{i\sqrt2}{4}\right)
=\boxed{\frac\pi{\sqrt2}}.
\end{aligned}
$$
