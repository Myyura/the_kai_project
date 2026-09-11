---
sidebar_label: '2014年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Connected-Particles-and-Tension
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Mechanics.Radial-Small-Oscillation-Frequency
---

# 東京大学 工学系研究科 2014年8月実施 物理学1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半頂角 $45^\circ$、底面半径 $2R_0$ の円錐面を、頂点を下にして軸が鉛直になるように置く。頂点の小穴に細い糸を通し、両端に質量 $m$ の質点 1、2 を付ける。質点 1 は円錐面の内側、質点 2 は頂点の下にある。穴の直径は十分小さく、摩擦、糸の質量・太さ・伸びは無視する。重力加速度を $g$ とする。

### I

質点 1 が円錐面上を半径 $R_0$、速さ $v_0$ で水平に等速円運動している。$v_0$ を求めよ。

### II

I の状態で突然糸を切ると、質点 1 は円錐面を上昇する。

1. 頂点から高さ $H$ に達した瞬間の、円錐軸まわりの角速度と速度の鉛直成分を、$v_0$ を含む式で表せ。
2. 質点 1 が円錐面の上端から外へ飛び出すか、理由とともに答えよ。

### III

I の状態で質点 2 に鉛直方向の摂動を与えると、質点 1 が上下に微小振動を始めた。

1. 円錐頂点を原点、$h$ 軸を鉛直上向きとする円柱座標 $(h,r,\theta)$ で質点 1 の運動を表すと、次式が成り立つ。係数 $a,b$ を求めよ。

$$
\frac{d^2r}{dt^2}+ar\left(\frac{d\theta}{dt}\right)^2+bg=0. \tag{1}
$$

2. $r=R_0+\varepsilon$ とおき、微小変位 $\varepsilon$ の微分方程式と振動周期を求めよ。

![円錐面上の質点と頂点の穴を通る糸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/kyotsu_201408_phys_1_cone_audited.svg)

#### 题目描述

将半顶角 $45^\circ$、底面半径 $2R_0$ 的圆锥面顶点朝下、轴线竖直放置。一根细绳穿过顶点的小孔，两端各连接质量 $m$ 的质点 1、2。质点 1 位于圆锥内表面，质点 2 悬在顶点下方。孔径足够小，忽略摩擦以及绳的质量、粗细和伸长。重力加速度为 $g$。

### I

质点 1 在圆锥面上以半径 $R_0$、速率 $v_0$ 做水平匀速圆周运动，求 $v_0$。

### II

在 I 状态突然剪断绳，质点 1 沿锥面上升。

1. 质点 1 到达距顶点高度 $H$ 时，求绕圆锥轴的角速度及速度的竖直分量，表达式须包含 $v_0$。
2. 判断质点 1 是否会从圆锥上边缘飞出，并说明理由。

### III

在 I 状态给质点 2 一个竖直方向的小扰动，随后质点 1 开始上下微振动。

1. 以锥顶为原点、$h$ 轴竖直向上，使用柱坐标 $(h,r,\theta)$ 描述质点 1。其运动满足下式，求 $a,b$。

$$
\frac{d^2r}{dt^2}+ar\left(\frac{d\theta}{dt}\right)^2+bg=0.
$$

2. 令 $r=R_0+\varepsilon$，推导微小位移 $\varepsilon$ 的方程，并求微振动周期。

## **Kai**

### I

張力を $T$、垂直抗力を $N$ とする。質点 2 は静止しているので $T=mg$。質点 1 の鉛直方向と水平方向について、

$$
\frac{N-T}{\sqrt2}=mg,\qquad
\frac{N+T}{\sqrt2}=\frac{mv_0^2}{R_0}.
$$

これらを解いて、

$$
\boxed{v_0=\sqrt{(1+\sqrt2)gR_0}.}
$$

### II

**1.** 円錐面上では $r=h$ である。軸まわりの角運動量保存より、

$$
mH^2\dot\theta=mR_0v_0
\quad\Longrightarrow\quad
\boxed{\dot\theta=\frac{R_0v_0}{H^2}.}
$$

鉛直速度を $v_h=\dot h$ とすると、動径速度も $v_h$。力学的エネルギー保存より、

$$
\frac m2\left(2v_h^2+\frac{R_0^2v_0^2}{H^2}\right)+mgH
=\frac12mv_0^2+mgR_0.
$$

上昇中なので正の平方根をとり、

$$
\boxed{v_h=\sqrt{g(R_0-H)+\frac{v_0^2}{2}\left(1-\frac{R_0^2}{H^2}\right)}.}
$$

**2.** 上端は $H=2R_0$ である。もしそこまで到達するとすれば、

$$
v_h^2=-gR_0+\frac38v_0^2
=\frac{3\sqrt2-5}{8}gR_0<0
$$

となり不可能である。よって、**上端に達する前に下降へ転じ、外へ飛び出さない。**

### III

**1.** 糸の長さを $\ell$ とすると、質点 2 の高さは $\sqrt2r-\ell$。系全体の運動エネルギーと位置エネルギーは、定数を除いて、

$$
K=\frac m2(2\dot r^2+r^2\dot\theta^2)+\frac m2(\sqrt2\dot r)^2
=2m\dot r^2+\frac12mr^2\dot\theta^2,\qquad
U=mg(1+\sqrt2)r.
$$

$\mathcal L=K-U$ のオイラー・ラグランジュ方程式から、

$$
4\ddot r-r\dot\theta^2+(1+\sqrt2)g=0,
\qquad\boxed{a=-\frac14,\quad b=\frac{1+\sqrt2}{4}.}
$$

**2.** 鉛直方向の摂動は軸まわりの角運動量を変えないので、$r^2\dot\theta=R_0v_0$。したがって、

$$
\ddot\varepsilon-\frac{R_0^2v_0^2}{4(R_0+\varepsilon)^3}
+\frac{1+\sqrt2}{4}g=0.
$$

$(R_0+\varepsilon)^{-3}\simeq R_0^{-3}(1-3\varepsilon/R_0)$ を用いると、

$$
\boxed{\ddot\varepsilon+\frac{3(1+\sqrt2)g}{4R_0}\varepsilon=0,\qquad
\mathcal T=2\pi\sqrt{\frac{4R_0}{3(1+\sqrt2)g}}.}
$$

