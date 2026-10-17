---
sidebar_label: "2021年8月実施 推進工学（午前）"
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 推進工学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)

推進工学（午前）

図1のように半径 $a$、質量 $m$ の軸対称で剛な物体を水平面上に静止させておき、中心 O から $h$ だけ上の点に時刻 $t=0$ に撃力 $P$ を水平に加える。ただし、撃力の作用点と物体の重心は同じ鉛直面内にあり、物体の密度は一様である。

**第1問** 以下のそれぞれの場合について、この軸対称物体が滑ることなく転がるための $h$ を求めよ。

1. 軸対称物体が円板のとき。
2. 軸対称物体が球のとき。
3. 軸対称物体が薄い球殻のとき。

以降の問いにおいて、任意の $h\ (0\le h<a)$ について検討せよ。ただし、軸対称物体と水平面の間の動摩擦係数を $\mu$、重力加速度を $g$、回転軸まわりの慣性モーメントを $I$ とする。

**第2問** 撃力を加えた後の軸対称物体の重心の移動速度 $u(t)$、および回転角速度 $\omega(t)$ を時間の関数として求めよ。

**第3問** 軸対称物体が図1に示す高さ $H\ (0\le H<a)$ の段差を乗り越えるための撃力 $P$ の条件を求めよ。ただし、段差に到達するまでに軸対称物体は滑ることなく転がり始めており、その後の軸対称物体と水平面の間の摩擦はなく、軸対称物体は段差の角で滑りもはねかえりもしない。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_am_propulsion_original_figure_1.png)

#### 题目描述

推进工学（上午）

如图1，将半径 $a$、质量 $m$ 的轴对称刚体静置于水平面上，在 $t=0$ 时刻向比中心 O 高 $h$ 的点施加水平冲量 $P$。冲量作用点与物体质心位于同一竖直平面，物体密度均匀。

**第1问** 分别求下列轴对称物体不发生滑动而纯滚动所需的 $h$。

1. 圆盘。
2. 球。
3. 薄球壳。

以下各问考虑任意 $h\ (0\le h<a)$。物体与水平面间动摩擦系数为 $\mu$，重力加速度为 $g$，绕转轴的转动惯量为 $I$。

**第2问** 求施加冲量后，物体质心移动速度 $u(t)$ 和转动角速度 $\omega(t)$ 随时间的函数。

**第3问** 求物体越过图1中高度为 $H\ (0\le H<a)$ 的台阶所需满足的冲量 $P$ 的条件。假设物体到达台阶前已开始无滑动滚动，此后物体与水平面之间没有摩擦，且物体在台阶棱角处既不滑动也不反弹。

## **Kai**

### 第1問

並進・回転の力積から $u(0^+)=P/m,\ \omega(0^+)=Ph/I$。純転がり条件 $u=a\omega$ より $h=I/(ma)$。したがって

$$
\boxed{h_{\rm disk}=\frac a2,\qquad h_{\rm sphere}=\frac{2a}5,\qquad h_{\rm shell}=\frac{2a}3}.
$$

### 第2問

$I\ne mah$ のとき $s=\operatorname{sgn}(I-mah)$ とおく。接触点の初速度は $P(I-mah)/(mI)$ なので、滑り中の摩擦力は $-s\mu mg$。したがって

$$
\boxed{u(t)=\frac Pm-s\mu gt,\qquad
\omega(t)=\frac{Ph}{I}+s\frac{\mu mga}{I}t\quad(0\le t\le t_1)}.
$$

$u(t_1)=a\omega(t_1)$ より

$$
\boxed{t_1=\frac{P|I-mah|}{\mu mg(I+ma^2)}}.
$$

その後は一定速度の純転がりとなり、

$$
\boxed{u_f=\frac{Pa(a+h)}{I+ma^2},\qquad\omega_f=\frac{P(a+h)}{I+ma^2}\quad(t\ge t_1)}.
$$

$I=mah$ の場合は $t_1=0$ で、最初からこの純転がり状態である。

### 第3問

段差の角を $Q$ とする。衝突中の $Q$ まわりの角運動量を保存すると、衝突直後の角速度 $\Omega$ は

$$
(I+ma^2)\Omega=I\omega_f+m u_f(a-H),
$$

すなわち

$$
\Omega=\frac{P(a+h)[I+ma(a-H)]}{(I+ma^2)^2}.
$$

角を中心に回転して重心が真上へ来るまでに位置エネルギーは $mgH$ 増える。問題の接触条件の下で、乗り越えるには

$$
\frac12(I+ma^2)\Omega^2>mgH.
$$

よって

$$
\boxed{P>\frac{(I+ma^2)^{3/2}\sqrt{2mgH}}{(a+h)[I+ma(a-H)]}}.
$$

等号は重心が角の真上に来るとき速度がゼロになる限界値である。
