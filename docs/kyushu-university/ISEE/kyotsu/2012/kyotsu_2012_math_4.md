---
sidebar_label: "2012年度入学 数学 問4（複素関数論）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Laurent-Series
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2012年度入学 数学 問4（複素関数論）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の各問に答えよ。

(1) $f(z) = \frac{1}{z-1}$ を $z=0$ でテイラー展開せよ。

(2) $g(z) = \frac{1}{z(z+1)}$ を $z=-1$ でローラン展開せよ。

### 题目描述

回答下列问题，并为所得级数注明相应的收敛区域：

1. 将

   $$
   f(z)=\frac1{z-1}
   $$

   在 $z=0$ 处作泰勒展开。
2. 将

   $$
   g(z)=\frac1{z(z+1)}
   $$

   在 $z=-1$ 处作洛朗展开。以 $z=-1$ 为中心存在由另一奇点 $z=0$ 分开的内、外两个收敛环域，应分别给出对应展开。

## **Kai**

(1) $f(z) = \frac{1}{z-1} = \frac{-1}{1-z} = -\sum_{n=0}^{\infty} z^n$ ,  $|z| < 1$ .

(2) $\zeta=z+1$ とおくと

$$
g(z)=\frac{1}{z(z+1)}
=\frac{1}{(\zeta-1)\zeta}.
$$

$0<|\zeta|<1$ では

$$
g(z)
=-\frac{1}{\zeta}\frac{1}{1-\zeta}
=-\sum_{n=0}^{\infty}\zeta^{n-1}
=-\frac{1}{z+1}-1-(z+1)-(z+1)^2-\cdots .
$$

また、外側の環域 $|\zeta|>1$ では

$$
g(z)
=\frac{1}{\zeta^2}\frac{1}{1-\zeta^{-1}}
=\sum_{n=0}^{\infty}\zeta^{-n-2}
=\frac{1}{(z+1)^2}+\frac{1}{(z+1)^3}+\cdots .
$$

したがって、中心 $z=-1$ に関する Laurent 展開は環域ごとに上の二通りである。
