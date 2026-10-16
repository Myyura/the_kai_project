---
sidebar_label: "2019年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 流体工学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

両端が大気開放された内径一定の U 字管に、混ざり合わない液体 A（左側）と液体 B（右側）を入れる。水平部の長さは $2L$、その中央を原点 O とし、右向きを $x$ の正方向とする。鉛直管は $x=\pm L$ にある。重力加速度は $g$。内径は十分小さく、表面張力の影響は無視する。

1. 境界面が O にあり、水平部から測った左右の液面高さが $L_A,L_B$ のとき、液体 A と液体 B の密度比 $\alpha$ を求めよ。
2. (1) の状態から O を通る鉛直軸まわりに一定角速度 $\omega_c$ で回転させたところ、左右の液面高さが等しくなった。境界面の座標 $x_c$ を $L_A,L_B$ で表せ。ただし $|x_c|<L$ とする。
3. $\omega_c$ を $g,L,L_A,L_B$ で表せ。

#### 题目描述

等截面细 U 形管两端通大气，左为液体 A、右为与其不相混合的液体 B。水平管长 $2L$，中点为原点，向右为正，竖管位于 $x=\pm L$。忽略表面张力。① 界面位于原点、两侧液面高为 $L_A,L_B$ 时求密度比。② 绕过原点的竖轴以角速度 $\omega_c$ 转动后两侧液面等高，求界面坐标 $x_c$，且 $|x_c|<L$。③ 求相应角速度。

## **Kai**

### (1)

O における圧力の連続性から $\rho_AgL_A=\rho_BgL_B$。したがって

$$
\boxed{\alpha=\frac{\rho_A}{\rho_B}=\frac{L_B}{L_A}}.
$$

### (2)

回転後の共通液面高さを $H$ とする。各液体の体積保存より

$$
L+L_A=L+x_c+H,\qquad L+L_B=L-x_c+H.
$$

よって

$$
\boxed{x_c=\frac{L_A-L_B}{2}},\qquad H=\frac{L_A+L_B}{2}.
$$

### (3)

剛体回転する液体の圧力は $p=\mathrm{const}+\rho\omega_c^2r^2/2-\rho gz$。左右の自由表面はともに $(r,z)=(L,H)$、界面は $(|x_c|,0)$ にあるから

$$
(\rho_A-\rho_B)\left[gH-\frac{\omega_c^2}{2}(L^2-x_c^2)\right]=0.
$$

$\rho_A\ne\rho_B$（$L_A\ne L_B$）なら

$$
\boxed{\omega_c=2\sqrt{\frac{g(L_A+L_B)}
{(2L-L_A+L_B)(2L+L_A-L_B)}}}.
$$

$|L_A-L_B|<2L$ により分母は正である。$L_A=L_B$ の退化ケースでは密度も等しく、液面はどの角速度でも等高なので、この条件だけから $\omega_c$ は決まらない。

## **Reference**

- [九州大学 2020年度 流体工学 公式問題（PDF 3ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-fluids.pdf)
