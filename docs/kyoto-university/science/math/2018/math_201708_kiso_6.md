---
sidebar_label: "2017年8月実施 基礎科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
  - Mathematics.Calculus.Constrained-Optimization
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [6]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mathbb R^4$ の部分空間 $M$ を

$$
M=\{(x,y,z,w)\in\mathbb R^4
\mid x^2+y^2+z^2+w^2=1,\ xy+zw=0\}
$$

で定める。

(1) $M$ が二次元微分可能多様体になることを示せ。

(2) $M$ 上の関数 $f$ を $f(x,y,z,w)=x$ で定めるとき、$f$ の臨界点をすべて求めよ。ただし、$q\in M$ が $f$ の臨界点であるとは、$q$ における $M$ の局所座標 $(u,v)$ に関して

$$
\frac{\partial f}{\partial u}(q)=\frac{\partial f}{\partial v}(q)=0
$$

となることである。

#### 题目描述

设

$$
M=\{(x,y,z,w)\in\mathbb R^4
\mid x^2+y^2+z^2+w^2=1,\ xy+zw=0\}.
$$

(1) 证明 $M$ 是二维可微流形。

(2) 求函数 $f:M\to\mathbb R$，$f(x,y,z,w)=x$ 的全部临界点。这里 $q\in M$ 为临界点，是指在 $q$ 附近的局部坐标 $(u,v)$ 下，

$$
\frac{\partial f}{\partial u}(q)=\frac{\partial f}{\partial v}(q)=0.
$$

## **Kai**

### (1)

$$
F_1=x^2+y^2+z^2+w^2,\qquad F_2=xy+zw
$$

と置く。$q=(x,y,z,w)\in M$ では

$$
\nabla F_1=2(x,y,z,w),\qquad
\nabla F_2=(y,x,w,z).
$$

これらは

$$
\|\nabla F_1\|^2=4,\qquad
\|\nabla F_2\|^2=1,\qquad
\nabla F_1\cdot\nabla F_2=4(xy+zw)=0
$$

を満たすので、一次独立である。したがって $(F_1,F_2):\mathbb R^4\to\mathbb R^2$ の微分は $M$ 上で階数 $2$ を持つ。陰関数定理より $M=(F_1,F_2)^{-1}(1,0)$ は $4-2=2$ 次元微分可能多様体である。

### (2)

臨界点では $\nabla f=(1,0,0,0)$ が法空間に属するので、ある実数 $\lambda,\mu$ について

$$
(1,0,0,0)=2\lambda(x,y,z,w)+\mu(y,x,w,z).
$$

両辺と $(x,y,z,w)$、$(y,x,w,z)$ との内積を取ると、それぞれ $2\lambda=x$、$\mu=y$ を得る。よって第一成分から

$$
1=x^2+y^2.
$$

これと $F_1=1$ より $z=w=0$ である。さらに $F_2=0$ より $xy=0$ なので、候補は

$$
\boxed{(1,0,0,0),\ (-1,0,0,0),\ (0,1,0,0),\ (0,-1,0,0)}
$$

の四点である。各点で上の法空間の式が $\lambda=x/2,\ \mu=y$ により成立するので、これらはすべて臨界点である。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 8–10ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
