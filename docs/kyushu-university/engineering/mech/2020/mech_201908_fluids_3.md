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

図のように，両端が大気開放された，内径が一定のU字管内の左側に液体A，右側に液体Bが入っている。液体Aと液体Bは混ざり合わないものとし，U字管の水平部の水平方向の長さを $2L$，その中央の位置を原点Oとして，次の問に答えよ。ただし，重力加速度は $g$ とする。また，U字管の内径は十分小さいとみなしてよいが，表面張力の影響は無視できるものとする。（50点）

**(1)** 液体Aと液体Bの境界面が原点Oの位置にあるとき，U字管の水平部からの左右の液面高さはそれぞれ $L_A,L_B$ となった。このとき，液体Aと液体Bの密度比 $\alpha$ を求めよ。

**(2)** (1)の状態から，原点Oを通る鉛直軸まわりにU字管を一定の角速度 $\omega_c$ で回転させたところ，左右の液面高さが等しくなった。原点Oから右方向を正として，液体Aと液体Bの境界面の座標 $x_c$ を，$L_A,L_B$ を用いて表せ。ただし，$|x_c|<L$ とする。

**(3)** (2)における $\omega_c$ を，$g,L,L_A,L_B$ を用いて表せ。

![原題の図：二液体を入れた回転U字管](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_fluids_3_figure_1.png)

#### 题目描述

如图所示，一根内径恒定、两端向大气开放的U形管内，左侧装有液体A，右侧装有液体B，二者互不混溶。U形管水平段的水平长度为 $2L$，以其中点为原点O，回答下列问题。重力加速度为 $g$。可认为U形管内径足够小，但忽略表面张力的影响。（50分）

**(1)** 两种液体的分界面位于原点O时，左、右液面距U形管水平段的高度分别为 $L_A,L_B$。求液体A与液体B的密度比 $\alpha$。

**(2)** 从(1)的状态开始，使U形管绕经过原点O的竖直轴以恒定角速度 $\omega_c$ 转动，结果两侧液面高度相等。以从O向右为正方向，用 $L_A,L_B$ 表示两种液体分界面的坐标 $x_c$。已知 $|x_c|<L$。

**(3)** 用 $g,L,L_A,L_B$ 表示(2)中的 $\omega_c$。

## **Kai**

### (1)

O における圧力の連続性から $\rho_AgL_A=\rho_BgL_B$。したがって

$$
\boxed{\alpha=\frac{\rho_A}{\rho_B}=\frac{L_B}{L_A}}.
$$

### (2)

回転後の共通液面高さを $H$ とする。各液体の体積保存より

$$
\begin{gathered}
L+L_A=L+x_c+H,\\
L+L_B=L-x_c+H.
\end{gathered}
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
