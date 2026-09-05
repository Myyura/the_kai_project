---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

極座標から直交座標への変換

$f: (r, \theta) \mapsto (x, y) = (r \cos\theta, r \sin\theta)$ を考える。ただし $r, \theta$ は $0 < r, -\frac{\pi}{2} < \theta < \frac{\pi}{2}$ を動くものとする。

(1) 変換 $f$ のヤコビ行列式

$$
det\begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix}
$$

をもとめよ。

(2) 極座標表示 $(r, \theta)$ における領域 $D$

$$
D = \{(r, \theta) | -\frac{\pi}{2} < \theta < \frac{\pi}{2}, 0 < r < \cos\theta \}
$$

の、変換 $f$ による像 $E$ を図示せよ。 $E$ の境界に現れる曲線の方程式も明示すること。

(3) 次の重積分を求めよ。

$$
\iint_E \frac{x}{x^2 + y^2} dxdy
$$

### 题目描述

考虑从极坐标到直角坐标的变换

$$
f:(r,\theta)\longmapsto(x,y)=(r\cos\theta,r\sin\theta),
$$

其中

$$
r>0,\qquad -\frac{\pi}{2}<\theta<\frac{\pi}{2}.
$$

（1）求变换 $f$ 的 Jacobi 行列式

$$
\det
\begin{pmatrix}
\dfrac{\partial x}{\partial r}&\dfrac{\partial x}{\partial\theta}\\[4pt]
\dfrac{\partial y}{\partial r}&\dfrac{\partial y}{\partial\theta}
\end{pmatrix}.
$$

（2）极坐标中的区域 $D$ 为

$$
D=\left\{(r,\theta)\,\middle|\,
-\frac{\pi}{2}<\theta<\frac{\pi}{2},\ 0<r<\cos\theta
\right\}.
$$

画出 $D$ 在变换 $f$ 下的像 $E$，并明确写出 $E$ 的边界曲线方程。

（3）求重积分

$$
\iint_E\frac{x}{x^2+y^2}\,dx\,dy.
$$

## **Kai**

(1) ヤコビ行列式を求める。
$x = r\cos\theta, y = r\sin\theta$ なので、
$\frac{\partial x}{\partial r} = \cos\theta, \frac{\partial x}{\partial \theta} = -r\sin\theta$
$\frac{\partial y}{\partial r} = \sin\theta, \frac{\partial y}{\partial \theta} = r\cos\theta$

したがって、ヤコビ行列式は

$$
det\begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix} = r\cos^2\theta + r\sin^2\theta = r
$$

(2) $D = \{(r, \theta) | -\frac{\pi}{2} < \theta < \frac{\pi}{2}, 0 < r < \cos\theta \}$ を $f$ で変換すると、 $x = r\cos\theta, y = r\sin\theta$ なので、

$$
x^2+y^2=r^2<r\cos\theta=x.
$$

逆に $x^2+y^2<x$ ならば $x>0$ であり、 $r=\sqrt{x^2+y^2}>0$ と取れば $-\pi/2<\theta<\pi/2$ かつ $r<\cos\theta$ となる。したがって

$$
E=\left\{(x,y)\ \middle|\ \left(x-\frac12\right)^2+y^2<\left(\frac12\right)^2\right\}.
$$

すなわち、 $E$ は中心 $(1/2,0)$ 、半径 $1/2$ の開円板である。その境界は円

$$
x^2+y^2=x
\quad\left(\text{すなわち }
\left(x-\frac12\right)^2+y^2=\left(\frac12\right)^2\right)
$$

のみであり、 $y$ 軸全体は境界ではない（円と $y$ 軸が接するのは原点だけである）。

![積分領域の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hosei_university/science_and_engineering/systems_engineering/management_systems/2022/hosei-2021-open-disk.svg)

(3) 重積分を計算する。
領域 $E$ を極座標で表すと、 $0 < r < \cos\theta, -\frac{\pi}{2} < \theta < \frac{\pi}{2}$ である。

$$
\iint_E \frac{x}{x^2 + y^2} dxdy = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \int_0^{\cos\theta} \frac{r\cos\theta}{r^2} r dr d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \int_0^{\cos\theta} \cos\theta dr d\theta
$$

$$
= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} [r\cos\theta]_0^{\cos\theta} d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2\theta d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1 + \cos(2\theta)}{2} d\theta
$$

$$
= \left[ \frac{\theta}{2} + \frac{\sin(2\theta)}{4} \right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} = \frac{\pi}{4} + \frac{\sin(\pi)}{4} - \left(-\frac{\pi}{4} + \frac{\sin(-\pi)}{4} \right) = \frac{\pi}{4} + \frac{\pi}{4} = \frac{\pi}{2}
$$
