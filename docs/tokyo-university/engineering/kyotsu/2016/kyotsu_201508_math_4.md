---
sidebar_label: '2015年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Calculus.Definite-Integral
---

# 東京大学 工学系研究科 2015年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

3次元空間内の三つの平面

$$
a_{i1}x+a_{i2}y+a_{i3}z=b_i\quad(i=1,2,3)
$$

と球面 $x^2+y^2+z^2=3$ を考える。係数行列を $A=(a_{ij})$、拡大係数行列を $B=(A\mid\boldsymbol b)$ とする。

I. 次の行列を考える。

$$
A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&1&1&3\\1&1&1&1\\1&1&1&-c\end{pmatrix},\quad c>0.
$$

1. $\operatorname{rank}A,\operatorname{rank}B$ を求めよ。
2. $P=(1,1,1)$ で球に接する平面を平面1と呼ぶ。残る二平面のうち $P$ との距離が小さいものを平面2と呼ぶ。$P$ と平面2との距離、および平面1と平面2の間にある球の部分の体積を求めよ。

II. 三平面が一直線で交わるとき、$\operatorname{rank}A,\operatorname{rank}B$ を求めよ。

III. 三平面が球の互いに異なる3点で接するとする。三平面と球の可能な位置関係をすべて図示し、それぞれの $\operatorname{rank}A,\operatorname{rank}B$ を求めよ。

#### 题目描述

三维空间中有三个平面

$$
a_{i1}x+a_{i2}y+a_{i3}z=b_i\quad(i=1,2,3)
$$

及球面 $x^2+y^2+z^2=3$。记系数矩阵为 $A=(a_{ij})$，增广矩阵为 $B=(A\mid\boldsymbol b)$。

I. 设

$$
A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&1&1&3\\1&1&1&1\\1&1&1&-c\end{pmatrix},\quad c>0.
$$

1. 求 $\operatorname{rank}A,\operatorname{rank}B$。
2. 在 $P=(1,1,1)$ 处与球相切的平面称为平面 1；余下两个平面中距 $P$ 较近者称为平面 2。求 $P$ 到平面 2 的距离，以及两平面之间的球体部分的体积。

II. 若三平面交于一条直线，求 $\operatorname{rank}A,\operatorname{rank}B$。

III. 若三平面分别在三个不同点与球相切，画出三平面与球的全部可能位置关系，并分别求 $\operatorname{rank}A,\operatorname{rank}B$。

## **Kai**

### I.1

$A$ の三つの行は同一である。$B$ の行空間は $(1,1,1,0)$ と $(0,0,0,1)$ で張られる。したがって

$$
\boxed{\operatorname{rank}A=1,\qquad\operatorname{rank}B=2.}
$$

### I.2

平面1は $x+y+z=3$。$P$ と残る二平面との距離はそれぞれ

$$
\frac2{\sqrt3},\qquad\frac{3+c}{\sqrt3}.
$$

よって平面2は $x+y+z=1$、求める距離は $\boxed{2/\sqrt3}$。

$s=(x+y+z)/\sqrt3$ を法線方向の座標に取ると、断面積は $\pi(3-s^2)$。したがって球冠の体積は

$$
\boxed{V=\pi\int_{1/\sqrt3}^{\sqrt3}(3-s^2)\,\mathrm ds
=\frac{28\sqrt3\pi}{27}.}
$$

### II

解集合の次元は $3-\operatorname{rank}A=1$ であり、連立方程式は解を持つので、

$$
\boxed{\operatorname{rank}A=\operatorname{rank}B=2.}
$$

### III

位置関係は次の3種類である。図は各場合の代表例で、すべての平面は球に接している。

![三つの接平面と球の位置関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/tokyo-kyotsu-201508-tangent-planes.svg)

| 位置関係 | $\operatorname{rank}A$ | $\operatorname{rank}B$ |
|---|---:|---:|
| 三平面がただ1点で交わる | 3 | 3 |
| 二平面が平行で、第三の平面が両方と交わる | 2 | 3 |
| 三平面は互いに交わるが、三つの交線は平行で共通点を持たない | 2 | 3 |

これらで尽くされることを示す。異なる3点での接平面がすべて平行になることはないので、$\operatorname{rank}A\ge2$。階数が3なら第1の場合である。階数が2の場合、三平面は共通の直線を持てない。その直線に垂直な断面を取ると、一点を通る円の異なる接線が3本必要になるが、円外の一点から引ける接線は高々2本だからである。したがって拡大係数行列の階数は3であり、平行な二平面があるかどうかで残りの二つの場合に分かれる。
