---
sidebar_label: "2022年8月実施 物理学 基礎"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Lorentz-Force-and-Charged-Particle-Motion
  - Physics.Electromagnetism.Crossed-Electric-and-Magnetic-Fields
  - Physics.Electromagnetism.Cyclotron-Motion
  - Physics.Electromagnetism.Drude-Relaxation-Time
  - Physics.Electromagnetism.Hall-Angle
---
# 京都大学 理学研究科 化学専攻 2022年8月実施 物理学 基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 問題要約

[大学公表の原題](https://www.kuchem.kyoto-u.ac.jp/master_past_issues/r5_butsuri_kiso.pdf)

間隔 $d$ の無限平行平板に電位差 $V>0$ を与える。陰極を $x=0$、陽極を $x=d$ とし、$y$ 軸を板に平行に取る。磁場は $\boldsymbol B=(0,0,B)$（$B>0$）で、$xy$ 図では紙面の奥向きである。質量 $m$、電荷 $-e$（$e>0$）の電子を、時刻 $t=0$ に陰極の原点から初速度ゼロで放出する。電子間の相互作用を無視し、

$$
A=\frac{V}{Bd},\qquad \omega=\frac{eB}{m}
$$

と置く。速度成分を $v_x,v_y,v_z$ とする。

- **問 A**：電場 $\boldsymbol E=(E_x,0,0)$ の $E_x$ を求める。
- **問 B**：ローレンツ力から $\dot v_x,\dot v_y$ を $\omega,A,v_x,v_y$ で表す。
- **問 C**：初期条件を用いて次の速度を導く。

  $$
  v_x=A\sin\omega t,\tag{6}
  $$

  $$
  v_y=A(1-\cos\omega t).\tag{7}
  $$

- **問 D**：$x(t)$ を求める。その結果を式 (8) とする。もう一方の座標は $y(t)=A(\omega t-\sin\omega t)/\omega$ である。
- **問 E**：$B$ が十分大きい場合の電子軌道を、次の候補から選ぶ。上向きが $x$、右向きが $y$ の正方向である。

![電子軌道の六つの候補を示す模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/science/chem/2023/kyoto-chem-2022-trajectories.svg)

- **問 F(a)**：軌道の $x$ 座標の最大値が $d$ を下回ると電極間の電流は急減する。その境界となる磁場 $B_c$ を $d,V,m,e$ で表す。
- **問 F(b)**：$B>B_c$ で、問 B の二式にそれぞれ減衰項 $-v_x/\tau,-v_y/\tau$ を加えた式を (10) とする。$t\gg\tau$ の定常速度を求め、速度と $x$ 軸との角が $45^\circ$ になる $\tau$ を $\omega$ で表す。

### 题目描述

间距为 $d$ 的无限大平行板间电势差为 $V>0$，阴极位于 $x=0$、阳极位于 $x=d$，$y$ 轴平行于板。磁场为 $\boldsymbol B=(0,0,B)$，$B>0$，在题图中指向纸面内。质量为 $m$、电荷为 $-e$（$e>0$）的电子在 $t=0$ 从阴极原点由静止释放，忽略电子间相互作用。令 $A=V/(Bd)$、$\omega=eB/m$。

- 问 A：求电场 $\boldsymbol E=(E_x,0,0)$ 的 $E_x$。
- 问 B：由 Lorentz 力，用 $\omega,A,v_x,v_y$ 表示 $\dot v_x,\dot v_y$。
- 问 C：用初始条件导出 $v_x=A\sin\omega t$、$v_y=A(1-\cos\omega t)$。
- 问 D：求 $x(t)$。另一坐标为 $y(t)=A(\omega t-\sin\omega t)/\omega$。
- 问 E：当 $B$ 足够大时，从上图六个选项中选出电子轨道；图中向上为 $+x$、向右为 $+y$。
- 问 F(a)：轨道最大 $x$ 坐标低于 $d$ 时，板间电流急剧下降。求临界磁场 $B_c$。
- 问 F(b)：在 $B>B_c$ 时，分别在两条速度方程中加入 $-v_x/\tau,-v_y/\tau$。求 $t\gg\tau$ 的稳态速度，并求使速度与 $x$ 轴成 $45^\circ$ 的 $\tau$。

## **Kai**
### 問 A
$-V/d$

### 問 B
$\vec{v} \times \vec{B} = (v_yB, -v_xB, 0)$ なので、 $x,y$ 成分の運動方程式は

$$
\begin{aligned}
\frac{d}{dt} v_x
&= \frac{-e}{m} \left( - \frac{V}{d} + v_yB \right)
\\
&= \omega A - \omega v_y
\\
\frac{d}{dt} v_y
&= \frac{-e}{m} \left( - v_xB \right)
\\
&= \omega v_x
\end{aligned}
$$

となる。

### 問 C
虚数単位を $i$ とすると、問 B の運動方程式から、

$$
\begin{aligned}
\frac{d}{dt} (v_x + iv_y)
&= \omega A - \omega v_y + i \omega v_x
\\
&= i \omega (v_x + i v_y - iA)
\end{aligned}
$$

が得られるので、 $\xi = v_x + iv_y - iA$ とおくと、

$$
\begin{aligned}
\frac{d}{dt} \xi &= i \omega \xi
\end{aligned}
$$

となるので、これを積分すると、

$$
\begin{aligned}
\xi &= c e^{i \omega t}
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 } )
\end{aligned}
$$

を得る。
$t=0$ のとき $v_x=0, v_y=0$ であり $\xi=-iA$ であるから、 $c=-iA$ であり、

$$
\begin{aligned}
\xi &= -iA e^{i \omega t}
\\
\therefore \ \
v_x + iv_y - iA &= -iA \left( \cos \omega t + i \sin \omega t \right)
\\
\therefore \ \
v_x + iv_y &= A \sin \omega t + iA \left( 1 - \cos \omega t \right)
\end{aligned}
$$

となって、式 (6), (7) が得られる。

### 問 D
式 (6) を積分すると、

$$
\begin{aligned}
x = - \frac{A}{\omega} \cos \omega t + c
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 })
\end{aligned}
$$

となるが、 $t=0$ のとき $x=0$ であるから、 $c=A/\omega$ であり、

$$
\begin{aligned}
x = \frac{A}{\omega} (1 - \cos \omega t)
\end{aligned}
$$

を得る。

### 問 E
（い）。$v_y=A(1-\cos\omega t)\ge0$ なので $y$ は単調非減少であり、軌道にループはない。
また $0\le x\le2A/\omega$ で、$t=2\pi n/\omega$ では $x=0$ と $v_x=v_y=0$ が同時に成立する。したがって、$y$ の正方向に進むサイクロイドである。

### 問 F
#### (a)
式 (8) によると $x$ の最大値は $2A/\omega$ であるから、求める $B_c$ は

$$
\begin{aligned}
\frac{2A}{\omega} = d
\end{aligned}
$$

が成り立つときの $B$ であり、

$$
\begin{aligned}
B_c = \frac{1}{d} \sqrt{\frac{2mV}{e}}
\end{aligned}
$$

がわかる。

#### (b)
定常運動のとき、式 (10) は次のようになる：

$$
\begin{aligned}
0 &= \omega A - \omega v_y - \frac{1}{\tau} v_x
\\
0 &= \omega v_x - \frac{1}{\tau} v_y
\end{aligned}
$$

連立方程式を解くと、

$$
v_x=\frac{\omega A\tau}{1+\omega^2\tau^2},\qquad
v_y=\frac{\omega^2 A\tau^2}{1+\omega^2\tau^2}.
$$

電子の速度方向とx軸とのなす角が45°になるということは $v_x=v_y$ ということであり、
2番目の式から、 $\tau = 1 / \omega$ を得る。
