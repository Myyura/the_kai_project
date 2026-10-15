---
sidebar_label: "2019年度 力学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Projectile-Motion
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 大阪大学 工学研究科 機械工学専攻 2019年度 力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質点は重力のほかに、大きさが質量に比例する水平左向きの力を受ける。質量に対する比例係数を $p>0$、重力加速度の大きさを $g$ とする。質点を点 A から水平面と角 $\alpha$（$0<\alpha<\pi/2$）をなす方向へ初速 $v_0$ で投げ出す。

1. 図1のように、質点が再び A を含む水平面上の点 B に達するとき、A と B の距離を求めよ。
2. (1) で A と B の距離が $0$ になる $\alpha$ を求めよ。
3. 質点が軌道の最高点 C に達した瞬間、図2のように右側から水平左向きに速さ $v_1$ で進む同質量の別の質点と完全非弾性衝突する。衝突直後の質点の速度を求めよ。
4. (3) の後、図3のように質点が再び A を含む水平面上の点 D に達するとする。A と D の距離が $0$ となる $v_1$ を求めよ。
5. (4) の場合、C から D までの軌道は放物線の一部となる。この放物線の軸と D の距離を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2019/mech_201808_mechanics_1-question-fig1.png)

#### 题目描述

质点除重力外，还受到大小与质量成正比、方向水平向左的恒力，比例系数为 $p>0$，重力加速度为 $g$。从 A 点以初速 $v_0$、与水平夹角 $\alpha\in(0,\pi/2)$ 向右上方发射质点。

1. 质点再次到达通过 A 的水平面上 B 点时，求 A、B 的距离。
2. 求 B 与 A 重合时的发射角。
3. 质点到达最高点 C 时，与从右侧水平向左以速率 $v_1$ 运动的同质量质点发生完全非弹性碰撞，求碰撞后速度。
4. 碰撞后的质点再次落到通过 A 的水平面上 D 点，求使 D 与 A 重合的 $v_1$。
5. 在 (4) 情况下，碰撞后轨道属于一条抛物线，求 D 点到该抛物线轴线的距离。

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
