---
sidebar_label: "2014年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2014年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

開放形の二つの円筒容器が同軸に固定され、内側容器の底面は外側容器の底面より $h$ 高い。内側・外側の内半径はそれぞれ $R,2R$、内側容器の壁厚は無視できる。両容器には、それぞれの底面からの水面高さが $h,3h$ となるよう水を入れる。二つの容器が中心軸まわりに一定角速度 $\omega$ で一体として回転するとき、次に答えよ。

中心軸からの距離を $r$、重力加速度を $g$ とする。水のあふれや底面の露出はなく、キャビテーションも発生しない。（50点）

1. 各容器の底面を基準にした水面高さ $z_1,z_2$ を $r$ の関数として求めよ。
2. 内側容器の底面中心に十分小さい穴を開けても水の出入りがなく、両容器の水の体積が変化しない角速度 $\omega_1$ を求めよ。
3. (2)の水面を図示せよ。

![原題の図（九州大学 2015年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_fluids-3-original.png)

#### 题目描述

两个同轴开口圆筒固定在一起，内筒半径 $R$，外筒半径 $2R$，内筒底比外筒底高 $h$，壁厚忽略。初始内外水面分别高于各自底面 $h,3h$。整体以角速度 $\omega$ 旋转，水不溢出、底面不露出、不发生气蚀。求两侧自由面；再求在内筒底中心开小孔后无液体交换的角速度，并画出此时自由面。

## **Kai**

### (1)

回転座標系における圧力の全微分は

$$
dp=\rho\omega^2r\,dr-\rho g\,dz.
$$

自由表面上では $dp=0$ なので $z=\omega^2r^2/(2g)+C$ である。内側の体積保存から

$$
\int_0^R2\pi r z_1(r)\,dr=\pi R^2h,
\qquad
\boxed{z_1=h+\frac{\omega^2}{2g}\left(r^2-\frac{R^2}{2}\right)}.
$$

外側水域は、$r<R$ の内筒底の下に高さ $h$ の固定体積を持つ。自由表面を持つ環状部 $R\le r\le2R$ の平均水位は $3h$ に保たれる。したがって

$$
\int_R^{2R}2\pi r z_2(r)\,dr=3\pi R^2(3h),
\qquad
\boxed{z_2=3h+\frac{\omega^2}{2g}\left(r^2-\frac{5R^2}{2}\right)}.
$$

### (2)

孔の位置は $r=0$、外側容器の底から高さ $h$ である。孔の両側の圧力は

$$
p_{\rm inner}=p_a+\rho g\left(h-\frac{\omega^2R^2}{4g}\right),\qquad
p_{\rm outer}=p_a+\rho g\left(2h-\frac{5\omega^2R^2}{4g}\right).
$$

外側の式は、同じ流体内の $p/\rho+gz-\omega^2r^2/2=\text{一定}$ を孔まで適用したものである。両者を等しくすれば

$$
\boxed{\omega_1=\frac{\sqrt{gh}}{R}}.
$$

### (3)

$\omega=\omega_1$ のとき

$$
z_1=\frac{3h}{4}+\frac{hr^2}{2R^2},\qquad
z_2=\frac{7h}{4}+\frac{hr^2}{2R^2}.
$$

外側容器の底から測る共通座標 $Z$ では $Z=h+z_1=z_2$ となるため、内外の水面は同じ放物面上にある。代表点は $Z(0)=7h/4$、$Z(R)=9h/4$、$Z(2R)=15h/4$ である。

![角速度ω1における自由表面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_fluids-3-surface.svg)
