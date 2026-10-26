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

図のような開放形の2つの円筒容器があり，内側の円筒の底面が外側の円筒の底面より $h$ だけ高い位置で，かつ同心となるように保持されている。内側と外側の円筒の内半径はそれぞれ $R$ および $2R$ であり，内側の円筒の壁面厚さは無視できるものとする。内側および外側の円筒容器には，それぞれの容器の底面より水面高さが $h$ および $3h$ となるように水を入れる。この2つの円筒容器が中心軸まわりに一定の角速度 $\omega$ で一体となって回転しているとき，以下の問に答えよ。なお中心軸からの半径方向距離を $r$ とし，重力加速度を $g$ とする。また容器からの水のあふれや底面の露出はないものとし，さらに水中に気泡が生じることもないものとする。（50点）

**(1)** それぞれの容器の底面を基準として，内側容器の水面高さ $z_1$ および外側容器の水面高さ $z_2$ を，$r$ の関数として求めよ。

**(2)** ある角速度 $\omega_1$ において，内側容器の底面の中心に小さな穴を開けたとき，内側容器と外側容器との間で水の出入りはなく，両容器内の水の体積は変わらなかった。このときの角速度 $\omega_1$ を求めよ。なお穴の大きさは容器の内半径より十分小さいものとする。

**(3)** (2)のとき，この2つの円筒容器内の水面を図内に示せ。

![原題の図：同心円筒容器と水面を記入する図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_fluids-3-original.png)

### 题目描述

如图所示，有两个敞口圆筒容器，内圆筒的底面比外圆筒底面高 $h$，且二者固定为同轴。内、外圆筒的内半径分别为 $R$ 和 $2R$，内圆筒壁厚可忽略。向两容器注水，使内、外容器的水面分别高于各自底面 $h$ 和 $3h$。两个圆筒容器作为整体绕中心轴以恒定角速度 $\omega$ 转动，回答下列问题。距中心轴的径向距离为 $r$，重力加速度为 $g$。假设水不溢出、容器底面不露出水面，而且水中不产生气泡。（50分）

**(1)** 分别以各容器底面为基准，求内侧容器的水面高度 $z_1$ 和外侧容器的水面高度 $z_2$，表示为 $r$ 的函数。

**(2)** 当角速度为某一值 $\omega_1$ 时，在内侧容器底面中心开一个小孔，发现两容器之间没有水流交换，两容器内水的体积均未改变。求此时的角速度 $\omega_1$。设孔的大小远小于容器内半径。

**(3)** 在图中画出(2)情况下两个圆筒容器内的水面。

## **Kai**

### (1)

回転座標系における圧力の全微分は

$$
dp=\rho\omega^2r\,dr-\rho g\,dz.
$$

自由表面上では $dp=0$ なので $z=\omega^2r^2/(2g)+C$ である。内側の体積保存から

$$
\begin{gathered}
\int_0^R2\pi r z_1(r)\,dr=\pi R^2h,\\
\boxed{z_1=h+\frac{\omega^2}{2g}\left(r^2-\frac{R^2}{2}\right)}.
\end{gathered}
$$

外側水域は、$r<R$ の内筒底の下に高さ $h$ の固定体積を持つ。自由表面を持つ環状部 $R\le r\le2R$ の平均水位は $3h$ に保たれる。したがって

$$
\begin{gathered}
\int_R^{2R}2\pi r z_2(r)\,dr=3\pi R^2(3h),\\
\boxed{z_2=3h+\frac{\omega^2}{2g}\left(r^2-\frac{5R^2}{2}\right)}.
\end{gathered}
$$

### (2)

孔の位置は $r=0$、外側容器の底から高さ $h$ である。孔の両側の圧力は

$$
\begin{gathered}
p_{\rm inner}=p_a+\rho g\left(h-\frac{\omega^2R^2}{4g}\right),\\
p_{\rm outer}=p_a+\rho g\left(2h-\frac{5\omega^2R^2}{4g}\right).
\end{gathered}
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
