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

直交デカルト座標系（$xyz$ 座標系）において、任意の点の位置ベクトルを $\vec r$ とし、$r=|\vec r|$ とする。また、$\phi(r)$ は $r$ のみを変数とするスカラー関数であり、$\phi(r)$ の $r$ による1階、2階微分をそれぞれ $\phi'(r)$、$\phi''(r)$ とする。このとき、以下の問いに答えなさい。

1. $\nabla\cdot[\phi(r)\vec r]$ を展開し、$x,y,z$ を用いずに表しなさい。
2. $\nabla\times[\phi(r)\vec r]$ を展開し、$x,y,z$ を用いずに表しなさい。
3. $\nabla^2\phi(r)$ を展開し、$x,y,z$ を用いずに表しなさい。
4. $\phi(r_1)=p_1$、$\phi(r_2)=p_2$ の条件の下で、$\nabla^2\phi(r)=0$ を満たす $\phi(r)$ を求めなさい。ただし、$r_1,r_2$ は互いに異なる正の定数、$p_1,p_2$ は実数の定数とする。

#### 题目描述

在直角坐标系中，以 $\vec r$ 表示位置向量，$r=|\vec r|$。标量函数 $\phi(r)$ 只依赖于 $r$，其一阶、二阶导数分别记为 $\phi'(r)$、$\phi''(r)$。

1. 展开 $\nabla\cdot[\phi(r)\vec r]$，结果不使用 $x,y,z$。
2. 展开 $\nabla\times[\phi(r)\vec r]$，结果不使用 $x,y,z$。
3. 展开 $\nabla^2\phi(r)$，结果不使用 $x,y,z$。
4. 在 $\phi(r_1)=p_1$、$\phi(r_2)=p_2$ 下求解 $\nabla^2\phi(r)=0$。其中 $r_1,r_2$ 为互不相同的正常数，$p_1,p_2$ 为实常数。

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
