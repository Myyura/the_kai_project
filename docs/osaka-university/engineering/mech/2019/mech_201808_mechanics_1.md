---
sidebar_label: "2018年8月実施 力学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Projectile-Motion
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 大阪大学 工学研究科 機械工学専攻 2018年8月実施 力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図1のように、質点は重力のほかに大きさが質量に比例する水平左向きの力を受ける。質点を点 A から水平面と $\alpha$ の角をなす方向に初速 $v_0$ で投げ出した。以下の問いに答えなさい。ただし、重力加速度の大きさを $g$、水平左向きの力の大きさの質量に対する比例係数を $p$ とし、$0<\alpha<\pi/2$、$p>0$ とする。

(1) 質点が、点 A から投げ出された後、図1のように、再び点 A を含む水平面上の点 B に達する場合を考える。このとき、点 A と点 B の距離を求めなさい。

(2) 小問 (1) において、点 A と点 B の距離が $0$ になるときの $\alpha$ を求めなさい。

(3) 質点が、点 A から投げ出された後、軌道の最上点 C に達した瞬間に、図2のように右方向から水平に速さ $v_1$ で移動する同じ質量の別の質点と完全非弾性衝突をする場合を考える。この衝突の直後の質点の速度を求めなさい。

(4) 小問 (3) において、その後、質点が図3のように再び点 A を含む水平面上の点 D に達した。点 A と点 D の距離が $0$ になる $v_1$ を求めなさい。

(5) 小問 (4) のときに質点が点 C から点 D に至る軌跡は放物線の一部となる。その放物線の軸と点 D の距離を求めなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_1_original_figure_1.png)

![原題の図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_1_original_figure_2.png)

![原題の図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_1_original_figure_3.png)

### 题目描述

问题1（使用红色答题纸）

如图1，质点除受到重力外，还受到大小与质量成正比、水平向左的力。将质点从 A 点以初速率 $v_0$、沿与水平面成 $\alpha$ 角的方向抛出。重力加速度大小为 $g$，水平向左力的大小与质量之间的比例系数为 $p$，且 $0<\alpha<\pi/2$、$p>0$。回答下列问题。

(1) 质点从 A 点抛出后，如图1再次到达包含 A 点的水平面上的 B 点。求 A、B 两点间的距离。

(2) 在 (1) 中，求使 A、B 间距离为 $0$ 的 $\alpha$。

(3) 质点到达轨迹最高点 C 的瞬间，与另一相同质量、从右方以速率 $v_1$ 水平移来的质点发生完全非弹性碰撞，如图2所示。求碰撞刚结束时质点的速度。

(4) 在 (3) 中，碰撞后质点如图3再次到达包含 A 点的水平面上的 D 点。求使 A、D 间距离为 $0$ 的 $v_1$。

(5) 在 (4) 的情形下，质点从 C 到 D 的轨迹为一段抛物线。求该抛物线的轴与 D 点间的距离。

## **Kai**

### (1)

A を原点、右向きを $x$、上向きを $y$ とする。運動方程式と初期条件から

$$
x=v_0\cos\alpha\,t-\frac12pt^2,
\qquad
y=v_0\sin\alpha\,t-\frac12gt^2.
$$

$y=0$ に戻る時刻は $t_B=2v_0\sin\alpha/g$ なので

$$
x_B=\frac{2v_0^2\sin\alpha}{g}
\left(\cos\alpha-\frac pg\sin\alpha\right).
$$

距離としては

$$
\boxed{AB=\frac{2v_0^2\sin\alpha}{g}
\left|\cos\alpha-\frac pg\sin\alpha\right|}.
$$

図1のように B が A の右側にある場合、絶対値内は正である。

### (2)

$0<\alpha<\pi/2$ より $\sin\alpha\ne0$。従って

$$
\cos\alpha-\frac pg\sin\alpha=0,
\qquad
\boxed{\alpha=\arctan\frac gp}.
$$

### (3)

最高点に達する時刻とその水平速度を

$$
t_c=\frac{v_0\sin\alpha}{g},\qquad
w=v_0\cos\alpha-pt_c
=v_0\left(\cos\alpha-\frac pg\sin\alpha\right)
$$

とする。最高点では鉛直速度は $0$ である。衝突中の外力の力積は無視でき、二つの質量は等しいので、完全非弾性衝突直後の速度は

$$
\boxed{(v_x,v_y)=\left(\frac{w-v_1}{2},\ 0\right)}.
$$

負の $v_x$ は左向きの運動を表す。

### (4)

C の座標は

$$
x_c=v_0\cos\alpha\,t_c-\frac12pt_c^2,
\qquad y_c=\frac12gt_c^2.
$$

衝突後も加速度は $(-p,-g)$ であるため、C から水平面までの落下時間は $t_c$。よって

$$
x_D=x_c+\frac{w-v_1}{2}t_c-\frac12pt_c^2
=\frac{t_c}{2}(3w-v_1).
$$

従って

$$
\boxed{v_1=3w=3v_0\left(\cos\alpha-\frac pg\sin\alpha\right)}.
$$

左向きの速さ $v_1>0$ が実現するには $w>0$、すなわち $\alpha<\arctan(g/p)$ が必要である。この場合、衝突直後の速度は $(-w,0)$ となる。

### (5)

$G=\sqrt{p^2+g^2}$ とし、C を原点として、合加速度に垂直な座標 $X$ と、その反対向きの座標 $Y$ を取る。

$$
X=\frac{g(x-x_c)-p(y-y_c)}{G},\qquad
Y=\frac{p(x-x_c)+g(y-y_c)}{G}.
$$

C からの経過時間を $\tau$ とすると

$$
X=-\frac{gw}{G}\tau,
\qquad
Y=-\frac{pw}{G}\tau-\frac12G\tau^2.
$$

放物線の頂点では $\dot Y=0$ であるから、軸は

$$
X=X_{\mathrm{axis}}=\frac{pgw^2}{G^3}
$$

という直線である。一方、D では $\tau=t_c$ より $X_D=-gwt_c/G$。したがって求める垂直距離は

$$
\begin{aligned}
d&=\frac{gwt_c}{G}+\frac{pgw^2}{G^3}\\
&=\boxed{\frac{v_0^2(g\cos\alpha-p\sin\alpha)
(g\sin\alpha+p\cos\alpha)}{(p^2+g^2)^{3/2}}}.
\end{aligned}
$$

ここでは (4) の $w>0$ を用いた。放物線の軸は合加速度に平行であり、鉛直線ではない。
