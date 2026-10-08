---
sidebar_label: "2022年度 基礎科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
  - Mathematics.Topology.Compactness-and-Connectedness
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

ユークリッド空間 $\mathbb R^4$ の部分空間 $X$ を

$$
X=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2+w^2=1,\ x^3+y^3+z^3+w^3=0\}
$$

で定める。このとき $X$ はコンパクトな微分可能多様体であることを示せ。

#### 题目描述

设

$$
X=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2+w^2=1,\ x^3+y^3+z^3+w^3=0\}.
$$

证明 $X$ 是紧致的可微流形。

## **Kai**

$F:\mathbb R^4\to\mathbb R^2$ を

$$
F(x_1,x_2,x_3,x_4)=\left(\sum_{j=1}^4x_j^2,\sum_{j=1}^4x_j^3\right)
$$

とおく。$X=F^{-1}(1,0)$ 上で $\nabla F_1=2(x_1,x_2,x_3,x_4)\ne0$ である。

もし $dF$ の階数が $2$ 未満ならば、ある $\lambda\in\mathbb R$ が存在して $3x_j^2=2\lambda x_j$ がすべての $j$ で成り立つ。従って非零の座標はすべて同じ値 $c=2\lambda/3$ となる。非零座標の個数を $k\ge1$ とすれば

$$
1=kc^2,\qquad 0=kc^3
$$

となり矛盾する。よって $(1,0)$ は $F$ の正則値であり、正則値定理から $X$ は2次元の微分可能部分多様体である。

さらに $X$ は連続写像 $F$ の閉集合の逆像であり、単位球面に含まれるので閉かつ有界である。従って $X$ はコンパクトである。

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 6ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)
