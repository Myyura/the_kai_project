---
sidebar_label: "2020年度 基礎科目 問題6"
tags:
  - Kyoto-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
  - Mathematics.Topology.Compactness-and-Connectedness
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$2$ 次元球面 $S^2=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1\}$ に対し、$S^2\times S^2$ の部分空間

$$
X=\{(u,v)\in S^2\times S^2\mid u\cdot v=0\}
$$

を考える。ここで $u=(u_1,u_2,u_3),v=(v_1,v_2,v_3)\in\mathbb R^3$ に対して $u\cdot v=u_1v_1+u_2v_2+u_3v_3$ とする。このとき $X$ はコンパクトな微分可能多様体であることを示せ。

#### 题目描述

设 $S^2=\{u\in\mathbb R^3:\|u\|=1\}$，令 $X=\{(u,v)\in S^2\times S^2:u\cdot v=0\}$，其中 $u\cdot v$ 为通常的欧氏内积。证明 $X$ 是紧致可微流形。

## **Kai**

$F:\mathbb R^3\times\mathbb R^3\to\mathbb R^3$ を

$$
F(u,v)=(\|u\|^2,\|v\|^2,u\cdot v)
$$

と定めると、$F$ は $C^\infty$ 級であり、$X=F^{-1}(1,1,0)$ である。$(u,v)\in X$ における微分行列の三つの行ベクトルは

$$
(2u,0),\qquad(0,2v),\qquad(v,u)
$$

である。これらの線形結合が零、すなわち

$$
2au+cv=0,\qquad2bv+cu=0
$$

とする。$\|u\|=\|v\|=1$、$u\cdot v=0$ を用い、第 $1$ 式と $u,v$ の内積を取ると $a=c=0$、第 $2$ 式から $b=0$ を得る。よって $dF$ の階数は $3$ である。

したがって $(1,1,0)$ は正則値であり、正則値定理より $X$ は $6-3=3$ 次元の $C^\infty$ 級部分多様体である。また、$X$ はコンパクト空間 $S^2\times S^2$ の閉部分集合なのでコンパクトである。

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 7ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
