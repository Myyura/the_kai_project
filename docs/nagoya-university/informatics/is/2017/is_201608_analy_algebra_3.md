---
sidebar_label: "2016年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2016年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3次元空間中の領域 $K = \{(x,y,z) \in \mathbb{R}^3 | x^2 + y^2 \leq 1, x \geq 0, y \geq 0, 0 \leq z \leq \sqrt{2}\}$ 及び平面 $L = \{(x, y, z) \in \mathbb{R}^3 | x+y-z = 0\}$ について考える。ここで、 $\mathbb{R}$ は実数全体の集合を表す。

(a) $xy$ 平面上の曲線 $C = \{(x, y) \in \mathbb{R}^2 | x^2 + y^2 = 1, x \geq 0, y \geq 0\}$ 上の点について、 $x$ を用いて、その $y$ 座標を表せ.

(b) 領域 $K$ の中で平面 $L$ と $xy$ 平面に挟まれた領域の体積 $V$ を求めよ.


[出典：名古屋大学 入学試験問題](https://web.archive.org/web/20171031151037id_/http://www.is.nagoya-u.ac.jp/exam-old/d21608.pdf)

### 题目描述

在三维空间中定义

$$
K=\left\{(x,y,z)\in\mathbb R^3\ \middle|\
x^2+y^2\le1,\ x\ge0,\ y\ge0,\ 0\le z\le\sqrt2\right\},
$$

以及平面

$$
L=\left\{(x,y,z)\in\mathbb R^3\mid x+y-z=0\right\},
$$

其中 $\mathbb R$ 表示实数集。

1. 对 $xy$ 平面上的曲线

   $$
   C=\left\{(x,y)\in\mathbb R^2\mid
   x^2+y^2=1,\ x\ge0,\ y\ge0\right\},
   $$

   用 $x$ 表示曲线上点的 $y$ 坐标；
2. 求区域 $K$ 内由平面 $L$ 与 $xy$ 平面夹成部分的体积 $V$。

## **Kai**

(a) $x^2 + y^2 = 1$ より、 $y = \sqrt{1-x^2}$ 。ただし、 $0\le x\le1, y \geq 0$ であるので、 $y = \sqrt{1-x^2}$ は条件を満たす。

(b) 領域 $K$ は、 $x^2 + y^2 \leq 1, x \geq 0, y \geq 0, 0 \leq z \leq \sqrt{2}$ であり、平面 $L$ は $z = x+y$ である。$x+y\le\sqrt{2(x^2+y^2)}\le\sqrt2$ なので、平面までの高さは $K$ の上限を超えない。したがって、求める体積 $V$ は、

$$
V = \int_0^1 \int_0^{\sqrt{1-x^2}} (x+y) dy dx = \int_0^1 \left[ xy + \frac{1}{2}y^2 \right]_0^{\sqrt{1-x^2}} dx
$$

$$
= \int_0^1 \left( x\sqrt{1-x^2} + \frac{1}{2}(1-x^2) \right) dx = \int_0^1 x\sqrt{1-x^2} dx + \frac{1}{2} \int_0^1 (1-x^2) dx
$$

第一項は、 $t = 1-x^2$ とおくと、 $dt = -2x dx$ より、 $x dx = -\frac{1}{2} dt$ 。 $x: 0 \to 1$ のとき、 $t: 1 \to 0$ なので、

$$
\int_0^1 x\sqrt{1-x^2} dx = \int_1^0 \sqrt{t} \left(-\frac{1}{2}\right) dt = \frac{1}{2} \int_0^1 \sqrt{t} dt = \frac{1}{2} \left[ \frac{2}{3} t^{3/2} \right]_0^1 = \frac{1}{3}
$$

第二項は、

$$
\frac{1}{2} \int_0^1 (1-x^2) dx = \frac{1}{2} \left[ x - \frac{1}{3}x^3 \right]_0^1 = \frac{1}{2} \left( 1 - \frac{1}{3} \right) = \frac{1}{2} \cdot \frac{2}{3} = \frac{1}{3}
$$

したがって、

$$
V = \frac{1}{3} + \frac{1}{3} = \frac{2}{3}
$$
