---
sidebar_label: "2024年度 基礎科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$S^2=\{(x_1,x_2,x_3)\in\mathbb R^3\mid x_1^2+x_2^2+x_3^2=1\}$ とする。写像 $f=(f_1,f_2,f_3):S^2\times S^2\to\mathbb R^3$ を

$$
f((x_1,x_2,x_3),(y_1,y_2,y_3))=(x_1+y_1,x_2+y_2,x_3+y_3)
$$

により定める。この写像の臨界値をすべて求めよ。ただし $q\in\mathbb R^3$ が $f$ の臨界値であるとは、ある $p\in S^2\times S^2$ が存在して $f(p)=q$ であり、$p$ のまわりの局所座標系 $(u_1,u_2,u_3,u_4)$ に関するヤコビ行列

$$
\left(\frac{\partial f_i}{\partial u_j}(p)\right)_{1\le i\le3,\ 1\le j\le4}
$$

の階数が $2$ 以下となることである。

#### 题目描述

设 $S^2=\{x\in\mathbb R^3\mid\|x\|=1\}$，定义 $f:S^2\times S^2\to\mathbb R^3$ 为 $f(x,y)=x+y$。求所有临界值。这里 $q$ 是临界值，是指存在 $p\in S^2\times S^2$ 使 $f(p)=q$，且 $f$ 关于 $p$ 附近任意局部坐标的 $3\times4$ 雅可比矩阵的秩不超过 $2$。

## **Kai**

$x\in S^2$ での接空間は $T_xS^2=x^\perp$ であり、

$$
df_{(x,y)}:x^\perp\oplus y^\perp\longrightarrow\mathbb R^3,
\qquad (u,v)\longmapsto u+v.
$$

その像は $x^\perp+y^\perp$ であり、

$$
(\operatorname{Im}df_{(x,y)})^\perp
=\operatorname{span}(x)\cap\operatorname{span}(y).
$$

従って階数が $2$ 以下となる必要十分条件は $x,y$ が平行であること、すなわち単位ベクトルであることから $y=x$ または $y=-x$ である。そのとき階数は $2$ となる。

$y=x$ のとき $f(x,y)=2x$、$y=-x$ のとき $f(x,y)=0$ なので、臨界値全体は

$$
\boxed{\{0\}\ \cup\ \{q\in\mathbb R^3\mid\|q\|=2\}}.
$$

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 6–7ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
