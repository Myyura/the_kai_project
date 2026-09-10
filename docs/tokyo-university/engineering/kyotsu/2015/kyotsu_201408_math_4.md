---
sidebar_label: '2014年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Cross-Product-Area-and-Scalar-Triple-Product-Volume
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Definite-Integral
---

# 東京大学 工学系研究科 2014年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

原点を $O$ とする3次元直交座標系に、次の3点を取る。

$$
P=(\cos\theta,\sin\theta,1),\quad
Q=(-\cos\theta,-\sin\theta,-1),\quad
R=(\cos2\theta,\sin2\theta,-1).
$$

I. 線分 $PQ$ の長さを求めよ。

II. 三角形 $PQR$ の面積 $S$ を $\theta$ で表せ。

III. 線分 $PR$ と $xy$ 平面との交点を $M$ とする。$M$ の座標を求めよ。

IV. $\theta$ を $0$ から $\pi$ まで連続的に変化させる。$xy$ 平面上に $M$ の軌跡を図示し、線分 $OM$ が掃過する領域の面積を求めよ。

#### 题目描述

在三维直角坐标系中，$O$ 为原点，设

$$
P=(\cos\theta,\sin\theta,1),\quad
Q=(-\cos\theta,-\sin\theta,-1),\quad
R=(\cos2\theta,\sin2\theta,-1).
$$

I. 求线段 $PQ$ 的长度。

II. 用 $\theta$ 表示三角形 $PQR$ 的面积 $S$。

III. 设线段 $PR$ 与 $xy$ 平面的交点为 $M$，求 $M$ 的坐标。

IV. 当 $\theta$ 从 $0$ 连续增加至 $\pi$ 时，画出 $M$ 在 $xy$ 平面内的轨迹，并求线段 $OM$ 扫过区域的面积。

## **Kai**

### I

$\overrightarrow{PQ}=(-2\cos\theta,-2\sin\theta,-2)$ より $\boxed{|PQ|=2\sqrt2}$。

### II

$$
|PR|^2=6-2\cos\theta,\qquad
\overrightarrow{PQ}\cdot\overrightarrow{PR}=6-2\cos\theta.
$$

外積による面積公式から、

$$
\boxed{S=\frac12\sqrt{8(6-2\cos\theta)-(6-2\cos\theta)^2}
=\sqrt{(3-\cos\theta)(1+\cos\theta)}.}
$$

### III

$P,R$ の $z$ 座標はそれぞれ $1,-1$ なので、$M$ は中点である：

$$
\boxed{M=\left(\frac{\cos\theta+\cos2\theta}{2},
\frac{\sin\theta+\sin2\theta}{2},0\right).}
$$

### IV

平面座標を複素数で表すと、

$$
x+iy=\frac{e^{i\theta}+e^{2i\theta}}2
=\cos\frac\theta2\,e^{3i\theta/2}.
$$

したがって極座標表示は

$$
\boxed{r=\cos\frac\phi3,\qquad0\le\phi\le\frac{3\pi}2.}
$$

軌跡は $(1,0)$、$(0,\sqrt3/2)$、$(-1/2,0)$ を順に通り、最後に原点へ至る。矢印は $\theta$ の増加方向を表す。

![Mの軌跡とOMの掃過領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/tokyo-kyotsu-201408-locus.svg)

$r\ge0$ で偏角が単調に増加するので、掃過する領域に重複はない。その面積は

$$
\boxed{\frac12\int_0^{3\pi/2}\cos^2\frac\phi3\,\mathrm d\phi
=\frac{3\pi}{8}.}
$$

