---
sidebar_label: "2023年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#60cb238c-dc55-4f6d-b676-4bad943ec4e4) refined with GPT 6 Astra)

## **Description**

$3$ 次元ユークリッド空間 $\mathbb R^3$ 上で定義される滑らかな関数 $f:\mathbb R^3\to\mathbb R$ を

$$
f(x,y,z)=x^4-4xy+y^4+z^2\qquad((x,y,z)\in\mathbb R^3)
$$

とし、$S=\{(x,y,z)\in\mathbb R^3\mid f(x,y,z)=1\}$ とおく。以下の問いに答えよ。

(1) $S$ は $\mathbb R^3$ の $2$ 次元部分多様体であることを示せ。

(2) $S$ 上で定義される滑らかな関数 $g:S\to\mathbb R$ を

$$
g(x,y,z)=z
$$

とするとき、$g$ の臨界点をすべて求めよ。

### 题目描述

在三维欧氏空间 $\mathbb R^3$ 上定义光滑函数 $f:\mathbb R^3\to\mathbb R$：

$$
f(x,y,z)=x^4-4xy+y^4+z^2\qquad((x,y,z)\in\mathbb R^3),
$$

并令 $S=\{(x,y,z)\in\mathbb R^3\mid f(x,y,z)=1\}$。回答下列问题。

(1) 证明 $S$ 是 $\mathbb R^3$ 的二维子流形。

(2) 在 $S$ 上定义光滑函数 $g:S\to\mathbb R$ 为

$$
g(x,y,z)=z.
$$

求 $g$ 的全部临界点。

## **Kai**

### (1)

$$
\nabla f=(4x^3-4y,\ 4y^3-4x,\ 2z).
$$

$\nabla f=0$ ならば $y=x^3,\ x=y^3,\ z=0$ であり、$x=x^9$ を満たす。したがって臨界点は

$$
(0,0,0),\qquad(1,1,0),\qquad(-1,-1,0)
$$

のみであり、対応する臨界値は $0,-2,-2$ である。よって $1$ は $f$ の正則値である。$S$ は $(0,0,1)$ を含むので空でなく、正則値定理より $3-1=2$ 次元の部分多様体である。

### (2)

$p=(x,y,z)\in S$ が $g$ の臨界点であることは、ある $\lambda\in\mathbb R$ に対して

$$
(0,0,1)=\lambda(4x^3-4y,\ 4y^3-4x,\ 2z)
$$

となることと同値である。第 $3$ 成分から $\lambda\ne0$ かつ $z\ne0$ なので、最初の二成分から

$$
y=x^3,\qquad x=y^3.
$$

ゆえに $(x,y)=(0,0),(1,1),(-1,-1)$ に限られる。条件 $f=1$ を用いると、臨界点は

$$
\boxed{(0,0,\pm1),\quad(1,1,\pm\sqrt3),\quad(-1,-1,\pm\sqrt3)}
$$

の六点である。各点で $\lambda=1/(2z)$ とすれば上の式が成り立つので、これらはすべて実際に臨界点となる。

## **Reference**

- [東北大学公式問題（2024年度・選択問題、PDF 3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_sentaku.pdf)
- [L^2：2024年度の対応する解答](https://note.com/normalmath/n/n89152917de11#60cb238c-dc55-4f6d-b676-4bad943ec4e4)
