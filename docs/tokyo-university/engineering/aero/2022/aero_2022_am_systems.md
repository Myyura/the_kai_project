---
sidebar_label: "航空宇宙システム学（午前）"
tags:
  - Tokyo-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2022年度 航空宇宙システム学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)。図の条件は以下に文章で明記する。

地球低軌道の円軌道から、電気推進のような微小推力スラスタを連続噴射して軌道半径を徐々に高め、多周回後に地球重力圏を脱出するスパイラル上昇を考える。運動は軌道面内に限る。

**第1問** 軌道半径 $r$、地球の重力定数 $\mu$ に対して、円軌道の速度 $v$ と周期 $T$ を求めよ。また単位質量当たりの力学的エネルギーが $E=-\mu/(2r)$ となることを示せ。

**第2問** 第1問の軌道から出発し、常に接線方向へ一定加速度 $a$ を与える。1周当たりの変化は小さく、参照円軌道に対して径方向外向きを $x(t)$、接線方向を $y(t)$、参照軌道の角速度を $\omega$ とすると、次の線形近似に従う。

$$
\ddot x-2\omega\dot y-3\omega^2x=0,\qquad \ddot y+2\omega\dot x=a.
$$

$t=0$ で $x=y=\dot x=\dot y=0$ とする。1周期後の高度変化 $\delta r(T)=x(T)-x(0)$ を求め、1周期後の軌道が円軌道となることを示せ。

**第3問** 1周当たりの累積増速量を $\delta v=aT$ とおく。第2問の $\delta r,\delta v$ の関係から、半径 $r$ の円軌道から半径 $R>r$ の円軌道までのスパイラル上昇に必要な総増速量 $\Delta V$ を求めよ。

**第4問** スパイラル上昇による脱出 $R\to\infty$ と、大推力ロケットによる低軌道上の瞬間的な1回の増速での脱出を比較する。前者の $\Delta V$ は後者の何倍か。

#### 题目描述

从半径 $r$ 的地球低圆轨道出发，持续施加沿轨道切线方向的微小推力，经过多圈螺旋上升后脱离地球引力场。只考虑轨道平面内运动，地球引力参数为 $\mu$。

1. 求圆轨道速度、周期，并证明单位质量能量 $E=-\mu/(2r)$。
2. 切向加速度恒为 $a$，每圈变化很小。在随参考圆轨道转动的坐标系中，径向外侧和切向坐标分别为 $x,y$，参考角速度为 $\omega$，满足题给的两条 CW 方程，四个初值均为零。求一圈后的半径变化，并在该线性近似内证明此时状态对应圆轨道。
3. 令每圈累计增速 $\delta v=aT$，由半径与增速的微分关系求从 $r$ 到 $R>r$ 所需的总 $\Delta V$。
4. 令 $R\to\infty$，比较这种脱离方式与在原圆轨道上一次瞬时增速脱离所需的 $\Delta V$，求其比值。

## **Kai**

### 第1問

$v^2/r=\mu/r^2$ より

$$
\boxed{v=\sqrt{\frac\mu r},\qquad T=2\pi\sqrt{\frac{r^3}\mu}},\qquad
E=\frac{v^2}2-\frac\mu r=\boxed{-\frac\mu{2r}}.
$$

### 第2問

第2式を積分して $\dot y+2\omega x=at$。第1式に代入すると

$$
\ddot x+\omega^2x=2\omega at.
$$

初期条件を用いて

$$
x(t)=\frac{2a}{\omega^2}(\omega t-\sin\omega t),\qquad
\dot x(t)=\frac{2a}\omega(1-\cos\omega t),\qquad
\dot y=at-2\omega x.
$$

$T=2\pi/\omega$ では

$$
\boxed{\delta r=\frac{4\pi a}{\omega^2}},\qquad
\dot x(T)=0,\quad\dot y(T)=-\frac{6\pi a}\omega=-\frac32\omega\delta r.
$$

半径 $r+\delta r$ の円軌道速度は、一次までで $v_c(r+\delta r)=v_c(r)-\omega\delta r/2$。回転座標系ではこれから座標系の速度 $\omega(r+\delta r)$ を引くため、相対接線速度は $-3\omega\delta r/2$ となる。径方向速度もゼロなので、得られた状態は線形近似の範囲で円軌道の状態と一致する。

### 第3問

$\delta v=2\pi a/\omega$ なので $\delta r=2\delta v/\omega$。各周回で参照半径を更新して

$$
dV=\frac12\sqrt{\frac\mu{r^3}}\,dr.
$$

したがって

$$
\boxed{\Delta V=\int_r^R\frac{\sqrt\mu}{2\tilde r^{3/2}}d\tilde r
=\sqrt{\frac\mu r}-\sqrt{\frac\mu R}}.
$$

### 第4問

スパイラル上昇では $\Delta V_{\rm spiral}=\sqrt{\mu/r}$。瞬間増速では、脱出速度 $\sqrt{2\mu/r}$ と初期円軌道速度との差が必要なので

$$
\Delta V_{\rm impulse}=(\sqrt2-1)\sqrt{\frac\mu r}.
$$

よって

$$
\boxed{\frac{\Delta V_{\rm spiral}}{\Delta V_{\rm impulse}}=\sqrt2+1\simeq2.414}.
$$
