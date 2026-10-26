---
sidebar_label: "2021年8月実施 航空宇宙システム学（午前）"
tags:
  - Tokyo-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 航空宇宙システム学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)

航空宇宙システム学（午前）

地球低軌道（円軌道）から出発する深宇宙探査機の地球脱出を、電気推進のような微小推力のスラスタで実施することを検討する。地球低軌道から、連続的にスラスタを噴射して軌道半径を徐々に高めていき、多周回後に地球重力圏を脱出するミッション（スパイラル上昇と呼ぶ）を考えるとき、以下の問いに答えよ。運動はすべて、軌道面内のみを考慮するものとする。

**第1問** 地球低軌道（円軌道）の軌道半径を $r$、地球の重力定数を $\mu$ とするとき、円軌道の軌道速度 $v$ および軌道周期 $T$ を求めよ。また軌道の力学的エネルギー $E$ が以下の式で表されることを示せ。

$$
E=-\frac\mu{2r}
$$

**第2問** 第1問の地球低軌道を出発軌道とし、微小推力スラスタが一定加速度 $a$ で連続的に噴射され、その噴射方向は常に軌道の接線方向に制御されるものとする。軌道一周あたりの軌道変化は小さく（図1参照）、近似的に円軌道まわりに線形化された以下の方程式に従うものとする。

$$
\frac{d^2x(t)}{dt^2}-2\omega\frac{dy(t)}{dt}-3\omega^2x(t)=0
$$

$$
\frac{d^2y(t)}{dt^2}+2\omega\frac{dx(t)}{dt}=a
$$

ここで $x(t)$ は動径方向、$y(t)$ は接線方向の位置であり、$\omega$ は参照軌道（円軌道）の角速度である。時刻 $t=0$ において、参照軌道上にいた探査機（つまり $\dfrac{dx(0)}{dt}=\dfrac{dy(0)}{dt}=x(0)=y(0)=0$）の1周期後の高度変化 $\delta r(T)=x(T)-x(0)$ を求めよ。また、1周期後の軌道が円軌道になっていることを示せ。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_am_systems_original_figure_1.png)

**第3問** 軌道一周あたりの累積増速量を $\delta v=aT$ と置く。第2問から求まる $\delta r$ と $\delta v$ の関係を用いて、軌道半径 $r$ の円軌道から軌道半径 $R$（ただし $R>r$）の円軌道にスパイラル上昇にて遷移する際に必要な総増速量（$\Delta V$）を求めよ。

**第4問** 微小推力スラスタによるスパイラル上昇にて地球低軌道から地球重力圏を脱出（$R\to\infty$）する電気推進宇宙機と、大推力のロケットエンジンにより地球低軌道から瞬発的に1回の $\Delta V$ を実施することで地球重力圏脱出軌道に遷移する通常のロケットを比較する。電気推進宇宙機が地球圏脱出に要する $\Delta V$ は、通常のロケットが地球圏脱出に要する $\Delta V$ の何倍か。

### 题目描述

航空宇宙系统学（上午）

考虑从地球低圆轨道出发的深空探测器，利用电推进等微推力推进器逃逸地球。从低轨道开始持续喷射，逐渐增大轨道半径，经多圈后脱离地球引力场，称为螺旋上升。所有运动只考虑轨道平面内，回答下列问题。

**第1问** 地球低圆轨道半径为 $r$，地球引力常数为 $\mu$。求圆轨道速度 $v$、周期 $T$，并证明轨道机械能为

$$
E=-\frac\mu{2r}.
$$

**第2问** 从第1问的低轨道出发，微推力推进器以恒定加速度 $a$ 连续工作，喷射方向始终控制在轨道切线方向。每一圈的轨道变化很小（图1），近似服从在圆轨道附近线性化的方程

$$
\frac{d^2x(t)}{dt^2}-2\omega\frac{dy(t)}{dt}-3\omega^2x(t)=0,
$$

$$
\frac{d^2y(t)}{dt^2}+2\omega\frac{dx(t)}{dt}=a.
$$

其中 $x(t)$、$y(t)$ 分别为径向和切向位置，$\omega$ 为参考圆轨道角速度。探测器在 $t=0$ 位于参考轨道，即

$$
\frac{dx(0)}{dt}=\frac{dy(0)}{dt}=x(0)=y(0)=0.
$$

求一个周期后的高度变化 $\delta r(T)=x(T)-x(0)$，并证明此时轨道为圆轨道。

**第3问** 令每圈累计增速为 $\delta v=aT$。利用第2问得到的 $\delta r$ 与 $\delta v$ 的关系，求从半径 $r$ 的圆轨道螺旋上升至半径 $R>r$ 的圆轨道所需的总增速 $\Delta V$。

**第4问** 比较两种逃逸方式：电推进航天器通过微推力螺旋上升，从低轨道脱离地球引力场（$R\to\infty$）；普通火箭利用大推力发动机，在低轨道瞬间完成一次 $\Delta V$，转移到地球逃逸轨道。电推进航天器所需的 $\Delta V$ 是普通火箭的多少倍？

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
\begin{gathered}
x(t)=\frac{2a}{\omega^2}(\omega t-\sin\omega t),\\
\dot x(t)=\frac{2a}\omega(1-\cos\omega t),\\
\dot y=at-2\omega x.
\end{gathered}
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
