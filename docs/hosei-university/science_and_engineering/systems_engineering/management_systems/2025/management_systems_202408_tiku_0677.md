---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $xy$ 平面上の閉領域 $D_1$ を, $D_1 = \{(x,y) | 0 \leq y \leq 2x \leq 2\}$ とする.
(a) 閉領域 $D_1$ を $xy$ 平面上に図示せよ.
(b) 2重積分

$$
I_1 = \iint_{D_1} (x+y) dxdy
$$

の値を求めよ.

(2) $xy$ 平面上の閉領域 $D_2$ を, $D_2 = \{(x,y) | x \geq 0, y \geq 0, 1 \leq x^2 + y^2 \leq 4\}$ とする. 2重積分

$$
I_2 = \iint_{D_2} e^{x^2+y^2} dxdy
$$

の値を求めよ.

### 题目描述

（1）在 $xy$ 平面上定义闭区域

$$
D_1=\{(x,y)\mid 0\le y\le2x\le2\}.
$$

（a）在 $xy$ 平面上画出闭区域 $D_1$。

（b）求二重积分

$$
I_1=\iint_{D_1}(x+y)\,dx\,dy
$$

的值。

（2）在 $xy$ 平面上定义闭区域

$$
D_2=\{(x,y)\mid x\ge0,\ y\ge0,\ 1\le x^2+y^2\le4\}.
$$

求二重积分

$$
I_2=\iint_{D_2}e^{x^2+y^2}\,dx\,dy
$$

的值。

## **Kai**

(1) 平面上の閉領域

$$
D_1=\{(x,y)\mid 0\le y\le 2x\le 2\}
$$

を考える．

(a) 条件 $0\le y\le 2x\le 2$ は

$$
0\le x\le 1,\qquad 0\le y\le 2x
$$

と書き換えられる．したがって $D_1$ は直線 $y=0$ , $y=2x$ , $x=1$ で囲まれる三角形領域
（頂点 $(0,0),(1,0),(1,2)$ ）である．

![積分領域の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hosei_university/science_and_engineering/systems_engineering/management_systems/2025/hosei-2024-triangle.svg)

(b) 二重積分

$$
I_1=\iint_{D_1}(x+y)\,dxdy
$$

を求める．(a) の結果より

$$
I_1=\int_{0}^{1}\int_{0}^{2x}(x+y)\,dy\,dx.
$$

まず内側を積分して

$$
\int_{0}^{2x}(x+y)\,dy
=\left[xy+\frac{y^{2}}{2}\right]_{0}^{2x}
=2x^{2}+2x^{2}=4x^{2}.
$$

したがって

$$
I_1=\int_{0}^{1}4x^{2}\,dx
=\left[\frac{4}{3}x^{3}\right]_{0}^{1}
=\frac{4}{3}.
$$

よって

$$
\boxed{I_1=\dfrac{4}{3}}.
$$

(2) 平面上の閉領域

$$
D_2=\{(x,y)\mid x\ge0,\ y\ge0,\ 1\le x^{2}+y^{2}\le 4\}
$$

を考える．これは第1象限における半径 $1$ と $2$ の円環領域である．
二重積分

$$
I_2=\iint_{D_2} e^{x^{2}+y^{2}}\,dxdy
$$

を極座標を用いて計算する．

極座標変換

$$
x=r\cos\theta,\quad y=r\sin\theta
$$

を用いると， $D_2$ は

$$
1\le r\le 2,\quad 0\le\theta\le\frac{\pi}{2}
$$

に対応し，ヤコビアンは $r$ であるから

$$
I_2=\int_{0}^{\pi/2}\int_{1}^{2} e^{r^{2}}\,r\,dr\,d\theta.
$$

内側の積分は置換 $u=r^{2}$ （ $du=2r\,dr$ ）により

$$
\int_{1}^{2} e^{r^{2}}\,r\,dr
=\frac12\left[e^{r^{2}}\right]_{1}^{2}
=\frac12\left(e^{4}-e\right).
$$

したがって

$$
I_2=\int_{0}^{\pi/2}\frac12\left(e^{4}-e\right)\,d\theta
=\frac12\left(e^{4}-e\right)\cdot\frac{\pi}{2}
=\frac{\pi}{4}\left(e^{4}-e\right).
$$

よって

$$
\boxed{I_2=\dfrac{\pi}{4}\bigl(e^{4}-e\bigr)}.
$$
