---
sidebar_label: 2020年8月実施 複素関数論
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Complex-Analysis.Residue-Theorem
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年8月実施 複素関数論

## **Author**
Zero, 祭音Myyura

## **Description**
次の各問に答えよ。

(1) 複素関数 $f(z) = \frac{1}{z(z - 2)^2}$ を $z = 0$ でローラン展開せよ。

(2) 複素関数 $g(z) = z\sin\frac{1}{z + 2}$ を $z = -2$ ローラン展開し, 級数が収束する領域を示せ。次に, $z = -2$ における留数を求めよ。

### 题目描述

回答下列问题：

1. 将复函数

$$
f(z)=\frac1{z(z-2)^2}
$$

   在 $z=0$ 处作洛朗展开。除展开中心外，另一奇点位于 $z=2$；Kai 因此分别讨论 $0<|z|<2$ 与 $|z|>2$，应给出各环域对应的展开。
2. 将复函数

$$
g(z)=z\sin\frac1{z+2}
$$

   在 $z=-2$ 处作洛朗展开，指出所得级数的收敛区域，然后求 $z=-2$ 处的留数。

## **Kai**
### (1)
$z = 0$ でローラン展開し $\rightarrow$ $(z)^k$ の級数

(i) $0<|z| < 2$

$$
\begin{aligned}
\frac{1}{(z-2)^2}
&=\frac14\frac{1}{(1-z/2)^2}
=\frac14\sum_{k=0}^{\infty}(k+1)\left(\frac z2\right)^k,\\
f(z)&=\frac{1}{4z}\sum_{k=0}^{\infty}(k+1)\left(\frac z2\right)^k\\
&= \frac{1}{4z} + \frac{1}{4} + \frac{3}{16}z + \cdots
\end{aligned}
$$

(ii) $2 < |z|$

$$
\begin{aligned}
\frac{1}{(z-2)^2}
&=\frac1{z^2}\frac{1}{(1-2/z)^2}
=\frac1{z^2}\sum_{k=0}^{\infty}(k+1)\left(\frac2z\right)^k,\\
f(z)&=\frac1{z^3}\sum_{k=0}^{\infty}(k+1)\left(\frac2z\right)^k\\
&= \frac{1}{z^3} + \frac{4}{z^4} + \frac{12}{z^5} + \cdots
\end{aligned}
$$

### (2)
$z = -2$ でローラン展開し $\rightarrow$ $(z + 2)^k$ の級数

$$
\begin{aligned}
u&=z+2,\\
g(z)&=(u-2)\sin\frac1u\\
&=(u-2)\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)!}u^{-(2k+1)}\\
&=1-\frac2u-\frac{1}{3!u^2}+\frac{2}{3!u^3}
+\frac{1}{5!u^4}-\cdots.
\end{aligned}
$$

収束領域は $0<|z+2|<\infty$ であり、留数は $-2$ である。
