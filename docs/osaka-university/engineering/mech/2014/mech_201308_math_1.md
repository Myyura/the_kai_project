---
sidebar_label: "2013年8月実施 問題1（数学）"
tags:
  - Osaka-University
  - Mathematics.Vector-Calculus.Gradient-Divergence-and-Curl
  - Mathematics.Vector-Calculus.Laplacian
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 数学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

直交デカルト座標系（$xyz$ 座標系）において、任意の点の位置ベクトルを $\vec r$ とし、$r=|\vec r|$ とする。また、$\phi(r)$ は、$r$ のみを変数とするスカラー関数であり、$\phi(r)$ の $r$ による1階、2階微分をそれぞれ $\phi'(r)$、$\phi''(r)$ とする。このとき以下の問いに答えなさい。

(1) $\nabla\cdot[\phi(r)\vec r]$ を展開し、$x,y,z$ を用いずに表しなさい。

(2) $\nabla\times[\phi(r)\vec r]$ を展開し、$x,y,z$ を用いずに表しなさい。

(3) $\nabla^2\phi(r)$ を展開し、$x,y,z$ を用いずに表しなさい。

(4) $\phi(r_1)=p_1$ および $\phi(r_2)=p_2$ であるとき、$\nabla^2\phi(r)=0$ の解を求めなさい。ただし、$r_1$ と $r_2$ はいずれも正の定数、$p_1$ と $p_2$ はいずれも実数の定数であり、$r_1\ne r_2$ とする。

#### 题目描述

问题1（使用红色答题纸）

在直角笛卡尔坐标系（$xyz$ 坐标系）中，任一点的位置向量为 $\vec r$，令 $r=|\vec r|$。$\phi(r)$ 是只以 $r$ 为变量的标量函数，其关于 $r$ 的一阶、二阶导数分别记为 $\phi'(r)$、$\phi''(r)$。回答下列问题。

(1) 展开 $\nabla\cdot[\phi(r)\vec r]$，用不含 $x,y,z$ 的式子表示。

(2) 展开 $\nabla\times[\phi(r)\vec r]$，用不含 $x,y,z$ 的式子表示。

(3) 展开 $\nabla^2\phi(r)$，用不含 $x,y,z$ 的式子表示。

(4) 在 $\phi(r_1)=p_1$、$\phi(r_2)=p_2$ 的条件下，求 $\nabla^2\phi(r)=0$ 的解。$r_1,r_2$ 均为正常数且 $r_1\ne r_2$，$p_1,p_2$ 均为实常数。

## **Kai**

以下では $r>0$ とする。まず、$\nabla r=\vec r/r$ より

$$
\nabla\phi(r)=\phi'(r)\frac{\vec r}{r}
$$

である。

### (1)

積の微分と $\nabla\cdot\vec r=3$ から

$$
\nabla\cdot[\phi(r)\vec r]
=\nabla\phi(r)\cdot\vec r+\phi(r)\nabla\cdot\vec r
=\boxed{r\phi'(r)+3\phi(r)}.
$$

### (2)

$\nabla\times\vec r=\vec 0$ であり、$\nabla\phi(r)$ と $\vec r$ は平行なので

$$
\nabla\times[\phi(r)\vec r]
=\nabla\phi(r)\times\vec r+\phi(r)\nabla\times\vec r
=\boxed{\vec 0}.
$$

### (3)

(1) を $\phi'(r)/r$ に適用すると

$$
\begin{aligned}
\nabla^2\phi(r)
&=\nabla\cdot\left[\frac{\phi'(r)}r\vec r\right]\\
&=r\frac{d}{dr}\left(\frac{\phi'(r)}r\right)+3\frac{\phi'(r)}r
=\boxed{\phi''(r)+\frac2r\phi'(r)}.
\end{aligned}
$$

### (4)

(3) より $(r^2\phi')'=0$ であるから、一般解は $\phi(r)=A/r+B$ となる。境界条件を代入すると

$$
A=\frac{r_1r_2(p_1-p_2)}{r_2-r_1},\qquad
B=\frac{p_2r_2-p_1r_1}{r_2-r_1}.
$$

したがって

$$
\boxed{\phi(r)=\frac{r_1r_2(p_1-p_2)}{(r_2-r_1)r}
+\frac{p_2r_2-p_1r_1}{r_2-r_1}}.
$$
