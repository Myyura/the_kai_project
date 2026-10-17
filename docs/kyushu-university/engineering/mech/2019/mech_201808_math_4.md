---
sidebar_label: "2018年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Calculus.Improper-Integral
---

# 九州大学 工学府 機械系専攻 2018年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ。必要に応じて留数定理

$$
\oint f(z)\,dz=2\pi i\sum_j\operatorname{Res}(a_j,f)
$$

を用いてよい。ここで、$i$ は虚数、$\operatorname{Res}(a_j,f)$ は留数、$a_j$ は特異点を表す。（50点）

(1) 定積分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^2}$ を求めよ。

(2) 恒等式

$$
\frac1{1+z^4}=\sum_j\frac{\delta_j}{z-\lambda_j}
$$

が成立するように、複素数の定数 $\delta_j,\lambda_j$ を定めよ。ここで、$\lambda_j$ は方程式 $z^4=-1$ の解である。

(3) 定積分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^4}$ を求めよ。

#### 题目描述

回答以下各问，必要时可以使用留数定理

$$
\oint f(z)\,dz=2\pi i\sum_j\operatorname{Res}(a_j,f).
$$

其中 $i$ 表示虚数，$\operatorname{Res}(a_j,f)$ 表示留数，$a_j$ 表示奇点。（50分）

(1) 求定积分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^2}$。

(2) 确定复常数 $\delta_j,\lambda_j$，使恒等式

$$
\frac1{1+z^4}=\sum_j\frac{\delta_j}{z-\lambda_j}
$$

成立。其中 $\lambda_j$ 是方程 $z^4=-1$ 的解。

(3) 求定积分 $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^4}$。

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
\boxed{\begin{gathered}
\lambda_j=\exp\left(\frac{(2j+1)\pi i}{4}\right),\\
j=0,1,2,3
\end{gathered}}.
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
