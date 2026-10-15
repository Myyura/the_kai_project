---
sidebar_label: "2019年度 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Triple-Integral
---

# 九州大学 工学府 機械系専攻 2019年度 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$C$ を初期位置が座標 $(0,r)$ を中心とする $XY$ 平面上の半径 $r$ の円とする。$C$ は $X$ 軸上を正方向へ滑ることなく角度 $\theta\,[\mathrm{rad}]$ だけ転がるとする。$P$ を $C$ の円周上の点とし、$C$ が初期位置にあるとき $P$ は原点 $(0,0)$ と一致する。以下の問いに答えよ。（50点）

1. $P$ の座標 $(x,y)$ を $r$ と $\theta$ を用いて示せ。
2. $C$ が1回転するときの $P$ の軌跡と $X$ 軸に囲まれた面積を求めよ。

次に、$XYZ$ 空間における $S$ を座標 $(0,r,0)$ を中心とする半径 $2r$ の球体とし、$C'$ を $\theta=1$ の時の $C$ を底面とする $Z$ 軸正方向に高さ $2r$ を持つ円柱とする。以下の問に答えよ。

3. $S$ および $C'$ について、$XY$ 平面への投影図を描け。
4. $S$ と $C'$ が重なる空間の体積を求めよ。

#### 题目描述

半径为 $r$ 的圆 $C$ 初始圆心为 $(0,r)$，沿 $X$ 轴正方向无滑动滚动 $\theta$ 弧度。圆周上一点 $P$ 初始位于原点。① 求 $P$ 的坐标；② 求圆滚动一周时 $P$ 的轨迹与 $X$ 轴围成的面积。再取圆心为 $(0,r,0)$、半径为 $2r$ 的球体 $S$，以及以 $\theta=1$ 时的圆 $C$ 为底面、沿 $Z$ 轴正方向高为 $2r$ 的圆柱 $C'$。③ 画出两立体在 $XY$ 平面的投影；④ 求其交集体积。

## **Kai**

### (1)

円の中心は $(r\theta,r)$ に移動し、中心に対する $P$ の位置は $(-r\sin\theta,-r\cos\theta)$。よって

$$
\boxed{x=r(\theta-\sin\theta),\qquad y=r(1-\cos\theta)}.
$$

### (2)

$dx=r(1-\cos\theta)d\theta$ より、面積は

$$
A=\int_0^{2\pi}r^2(1-\cos\theta)^2d\theta
=\boxed{3\pi r^2}.
$$

### (3)

$\theta=1$ のときの円の中心は $(r,r)$ なので、投影領域は

$$
S:\ x^2+(y-r)^2\le4r^2,\qquad
C':\ (x-r)^2+(y-r)^2\le r^2.
$$

半径 $2r$ の円板の内部に半径 $r$ の円板があり、$(2r,r)$ で内接する。

![球体と円柱のXY平面への投影](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/math-3-projection.svg)

### (4)

$v=y-r$ とし、$x=\rho\cos\varphi$、$v=\rho\sin\varphi$ とおく。円柱の底面は

$$
0\le\rho\le2r\cos\varphi,\qquad
-\frac\pi2\le\varphi\le\frac\pi2.
$$

この底面の各点で、共通部分は $0\le z\le\sqrt{4r^2-\rho^2}$ である。したがって

$$
\begin{aligned}
V&=\int_{-\pi/2}^{\pi/2}\int_0^{2r\cos\varphi}
\rho\sqrt{4r^2-\rho^2}\,d\rho\,d\varphi\\
&=\frac{8r^3}{3}\int_{-\pi/2}^{\pi/2}
\left(1-|\sin\varphi|^3\right)d\varphi\\
&=\frac{8r^3}{3}\left(\pi-2\cdot\frac23\right)
=\boxed{\frac{8r^3}{9}(3\pi-4)}.
\end{aligned}
$$
