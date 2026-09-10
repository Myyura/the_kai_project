---
sidebar_label: '2022年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Surface-Area-by-Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
---

# 東京大学 工学系研究科 2022年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

三次元直交座標系において、領域 $V$ を

$$
x^2+y^2-z^2\ge0,\qquad x^2+y^2+2x\le0
$$

で定義する。

I. $V$ の $z=1$ における断面形状を図示せよ。

II. $V$ の表面積を求めよ。

#### 题目描述

在三维直角坐标系中，区域 $V$ 由

$$
x^2+y^2-z^2\ge0,\qquad x^2+y^2+2x\le0
$$

定义。

I. 画出 $V$ 在 $z=1$ 平面上的截面。

II. 求 $V$ 的表面积。

## **Kai**

### I

$z=1$ を代入すると、断面は

$$
\boxed{x^2+y^2\ge1,\qquad(x+1)^2+y^2\le1}.
$$

すなわち、円 $(x+1)^2+y^2=1$ の内部かつ単位円の外部にある三日月形の領域であり、境界も含む。二円の交点は $(-1/2,\pm\sqrt3/2)$ である。

![z=1の断面、網掛け部分が領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2023/math4-section.svg)

### II

$D=\{(x,y):(x+1)^2+y^2\le1\}$ とおくと、領域は

$$
 (x,y)\in D,\qquad-\sqrt{x^2+y^2}\le z\le\sqrt{x^2+y^2}.
$$

と表せる。上下の円錐面 $z=\pm\sqrt{x^2+y^2}$ の面積要素はともに $\sqrt2\,dx\,dy$ なので、その面積の和は

$$
S_1=2\sqrt2\,\operatorname{Area}(D)=2\sqrt2\pi.
$$

円柱の側面を $x=-1+\cos\phi,y=\sin\phi$（$0\le\phi\le2\pi$）と表すと、円周の弧長要素は $d\phi$、上下の高さの差は $4\sin(\phi/2)$ である。したがって

$$
S_2=\int_0^{2\pi}4\sin\frac\phi2\,d\phi=16.
$$

よって表面積は

$$
\boxed{S=16+2\sqrt2\pi}.
$$

