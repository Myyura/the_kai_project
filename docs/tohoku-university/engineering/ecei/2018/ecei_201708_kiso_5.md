---
sidebar_label: 2017年8月実施 基礎科目 問題5 物理基礎
tags:
  - Tohoku-University
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
  - Physics.Mechanics.Lagrangian-Mechanics
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 基礎科目 問題5 物理基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

地球の表面近くにおける質点（質量 $m$）の運動を考察する。地球は、時間変化しない角速度ベクトル $\boldsymbol\omega$ で自転している。いま、非慣性系 K を参照系として導入し、その原点は自転軸上にあり、その規格直交基準ベクトル $\boldsymbol\epsilon_i$（$i=1,2,3$）は地球と共に回転しているものとする（Fig. 5 参照）。太陽の周りの地球の公転、及び空気抵抗の影響は無視する。

(1) K 系における質点の $i$ 座標成分を $x_i$ とする。このとき、質点の位置ベクトルは $\boldsymbol r=\sum_i x_i\boldsymbol\epsilon_i$、またその時間微分は $d\boldsymbol r/dt=\sum_i(v_i\boldsymbol\epsilon_i+x_i\boldsymbol\omega\times\boldsymbol\epsilon_i)$ で与えられる。ここで $v_i=dx_i/dt$ であり、記号 $\times$ は外積を表す。

(a) 慣性系における運動エネルギー $T=(1/2)m(d\boldsymbol r/dt)^2$ が以下で表せることを示せ。

$$
T=\sum_i\frac12mv_i^2+\sum_{i,j}mv_ix_j\boldsymbol\epsilon_i\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)
+\sum_{i,j}\frac12mx_ix_j(\boldsymbol\omega\times\boldsymbol\epsilon_i)\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)\tag{5A}
$$

(b) Eq. (5A) では、$\boldsymbol\epsilon_i$ の時間変化が $T$ の時間変化に影響しない。その理由を述べよ。

(c) K 系における運動方程式は、Lagrange 方程式 $(d/dt)(\partial L/\partial v_i)=\partial L/\partial x_i$ から得られる。ここで $L=T-U$ で、$U$ は重力ポテンシャルである。以下の運動方程式を導け。

$$
m\frac{dv_i}{dt}=-\sum_j2mv_j\boldsymbol\epsilon_i\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)
+\sum_jmx_j(\boldsymbol\omega\times\boldsymbol\epsilon_i)\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)-\frac{\partial U}{\partial x_i}\tag{5B}
$$

もし必要なら、$\boldsymbol a\cdot(\boldsymbol b\times\boldsymbol c)=\boldsymbol c\cdot(\boldsymbol a\times\boldsymbol b)$ を使ってよい。

(2) 質点が、ある地表地点 X（その位置ベクトルは $\boldsymbol X=\sum_iX_i\boldsymbol\epsilon_i$）近傍でのみ運動するとき、Eq. (5B) 右辺における $x_i$ は $X_i$ で近似的に置き換えられる。このとき Eq. (5B) は以下のように表せる。

$$
m\frac{dv_i}{dt}=-\sum_j2mv_j\boldsymbol\epsilon_i\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)+mg_i\tag{5C}
$$

ここで $g_i=[\sum_jmX_j(\boldsymbol\omega\times\boldsymbol\epsilon_i)\cdot(\boldsymbol\omega\times\boldsymbol\epsilon_j)-\partial U(\boldsymbol X)/\partial X_i]/m$ であり、ベクトル $\boldsymbol g=\sum_i g_i\boldsymbol\epsilon_i$ は $\boldsymbol\omega$ と $\boldsymbol X$ が張る平面内にある（Fig. 5 参照）。今、初期条件 $x_i(0)=X_i-hg_i/|\boldsymbol g|$（$h$ は正の実数）及び $v_i(0)=0$ のもと質点を落下させる。

(a) Eq. (5C) 右辺の $v_j$ を通常の自由落下 $m\,dv_i/dt=mg_i$ の解で近似し、$x_i$ を時間の関数として求めよ。

(b) 質点が地面に到達する時刻 $t^*$ は、条件 $\boldsymbol g\cdot\boldsymbol r=\boldsymbol g\cdot\boldsymbol X$ から決定できる。$t=t^*$ におけるベクトル $\boldsymbol r-\boldsymbol X$ を求めよ。また、得られた $\boldsymbol r-\boldsymbol X$ の向きについて物理的解釈を述べよ。

### 题目描述

地球以恒定角速度矢量 $\boldsymbol\omega$ 自转。非惯性系 $K$ 的原点位于转轴，正交单位基 $\boldsymbol e_i$ 随地球转动。质量为 $m$ 的质点坐标为 $x_i$，$v_i=\dot x_i$，于是

$$
\boldsymbol r=\sum_i x_i\boldsymbol e_i,\qquad
\frac{d\boldsymbol r}{dt}=\sum_i(v_i\boldsymbol e_i+x_i\boldsymbol\omega\times\boldsymbol e_i).
$$

忽略公转和空气阻力，重力势能为 $U$。

1. (a) 展开惯性系动能，证明
   

$$
T=\frac m2\sum_i v_i^2+m\sum_{i,j}v_ix_j\boldsymbol e_i\cdot(\boldsymbol\omega\times\boldsymbol e_j)+\frac m2\sum_{i,j}x_ix_j(\boldsymbol\omega\times\boldsymbol e_i)\cdot(\boldsymbol\omega\times\boldsymbol e_j).
$$

   (b) 解释基矢的时间变化为何不使上式系数随时间变化；(c) 用 $L=T-U$ 的 Lagrange 方程导出
   

$$
m\dot v_i=-2m\sum_jv_j\boldsymbol e_i\cdot(\boldsymbol\omega\times\boldsymbol e_j)+m\sum_jx_j(\boldsymbol\omega\times\boldsymbol e_i)\cdot(\boldsymbol\omega\times\boldsymbol e_j)-\frac{\partial U}{\partial x_i}.
$$

2. 在地面某点 $\boldsymbol X=\sum_iX_i\boldsymbol e_i$ 附近，将上式非速度项在 $\boldsymbol X$ 处近似为常向量 $m\boldsymbol g$，其中 $\boldsymbol g$ 位于 $\boldsymbol\omega,\boldsymbol X$ 张成的平面。质点从距地面高度 $h>0$ 处静止释放：
   

$$
x_i(0)=X_i-\frac{hg_i}{|\boldsymbol g|},\qquad v_i(0)=0.
$$

   (a) 在科里奥利项中用普通自由落体速度 $v_j\simeq g_jt$ 近似，求 $x_i(t)$；(b) 由落地条件 $\boldsymbol g\cdot\boldsymbol r=\boldsymbol g\cdot\boldsymbol X$ 求落地时间和水平位移，说明方向的物理意义。

## **Kai**

### (1)

**(a)** 将给定速度代入 $T=m|d\boldsymbol r/dt|^2/2$，利用 $\boldsymbol e_i\cdot\boldsymbol e_j=\delta_{ij}$ 展开，即得到题示三项。

**(b)** 基矢始终共同绕固定 $\boldsymbol\omega$ 旋转，彼此内积及 $\boldsymbol\omega$ 在该系的分量恒定。因此题示内积系数均为常数。

**(c)** 记

$$
C_{ij}=\boldsymbol e_i\cdot(\boldsymbol\omega\times\boldsymbol e_j),\qquad
D_{ij}=(\boldsymbol\omega\times\boldsymbol e_i)\cdot(\boldsymbol\omega\times\boldsymbol e_j).
$$

则 $C_{ji}=-C_{ij},D_{ji}=D_{ij}$，且

$$
\frac{d}{dt}\frac{\partial L}{\partial v_i}=m\dot v_i+m\sum_jC_{ij}v_j,
$$

$$
\frac{\partial L}{\partial x_i}=-m\sum_jC_{ij}v_j+m\sum_jD_{ij}x_j-\frac{\partial U}{\partial x_i}.
$$

两式相等即得所证运动方程。

### (2)

近似运动方程为 $\ddot{\boldsymbol r}=\boldsymbol g-2t\boldsymbol\omega\times\boldsymbol g$（分量相对于 $K$），积分得

$$
\boxed{\boldsymbol r(t)=\boldsymbol X-\frac h{|\boldsymbol g|}\boldsymbol g+\frac12\boldsymbol g t^2-\frac13(\boldsymbol\omega\times\boldsymbol g)t^3}.
$$

因 $\boldsymbol g\cdot(\boldsymbol\omega\times\boldsymbol g)=0$，落地条件给出

$$
\boxed{t^*=\sqrt{\frac{2h}{|\boldsymbol g|}}},\qquad
\boxed{\boldsymbol r(t^*)-\boldsymbol X=-\frac13(\boldsymbol\omega\times\boldsymbol g)\left(\frac{2h}{|\boldsymbol g|}\right)^{3/2}}.
$$

该位移垂直于当地子午面，方向向东（转轴处为零）。它是下落运动的科里奥利偏转。
