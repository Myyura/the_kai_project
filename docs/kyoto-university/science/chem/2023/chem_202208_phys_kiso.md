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

### 题目描述

原 `Description` 未保存题干，无法唯一恢复各问的具体设问、图示、符号定义与全部条件。现有 `Kai` 只能确认以下信息：

- 问 A 的已保存结果为 $-V/d$。
- 问 B 涉及带电粒子在电磁场中的运动，已保存关系为

  $$
  \vec v\times\vec B=(v_yB,-v_xB,0),
  $$

  以及速度分量方程

  $$
  \frac{d v_x}{dt}=\omega A-\omega v_y,
  \qquad
  \frac{d v_y}{dt}=\omega v_x.
  $$

- 问 C 在初始条件 $t=0$ 时 $v_x=v_y=0$ 下，得到

  $$
  v_x=A\sin\omega t,\qquad
  v_y=A(1-\cos\omega t).
  $$

- 问 D 在 $t=0$ 时 $x=0$ 的条件下，得到

  $$
  x=\frac A\omega(1-\cos\omega t).
  $$

- 问 E 的已保存选择结果为“（あ）”，但选项与题干均未保存。
- 问 F(a) 的已保存临界磁场结果为

  $$
  B_c=\frac1d\sqrt{\frac{2mV}{e}}.
  $$

  问 F(b) 涉及含弛豫时间 $\tau$ 的稳态运动；已保存结论是在速度方向与 $x$ 轴成 $45^\circ$、即 $v_x=v_y$ 时，

  $$
  \tau=\frac1\omega.
  $$

由于缺少原始题面，以上内容仅整理已保存解答中明确出现的关系，不补造无法确认的设问。

#### 考点

- **Lorentz 力与带电粒子运动**：由 $\vec v\times\vec B$ 分解平面速度方程。
- **正交电磁场中的回旋运动**：联立速度分量并用复变量求解周期运动。
- **轨迹积分与临界磁场**：由速度积分得到位置，并依据已保存的最大位移条件确定 $B_c$。
- **Drude 弛豫与 Hall 角**：在稳态速度方程中结合 $45^\circ$ 方向条件得到弛豫时间关系。

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
（あ）

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

電子の速度方向とx軸とのなす角が45°になるということは $v_x=v_y$ ということであり、
2番目の式から、 $\tau = 1 / \omega$ を得る。
