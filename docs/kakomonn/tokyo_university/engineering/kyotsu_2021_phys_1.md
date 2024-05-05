---
comments: false
description: 東京大学 大学院 工学系研究科 2021年度 物理学1
keywords: Tokyo-University, 2021
---

## **Source**
[東京大学 大学院 工学系研究科 2021年度 物理学1 (力学)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## **Description**

## **Kai**
### I.
#### 1.
衝突直後の B （および A）の速度を $V$ とすると、運動量保存則より、

$$
\begin{aligned}
mv &= (m+M)V
\\
\therefore \ \ 
V &= \frac{m}{m+M} v
\end{aligned}
$$

である。
$x$ の速度および加速度をそれぞれ $\dot{x}, \ddot{x}$ と書く。
衝突後の A および B の運動方程式は、

$$
\begin{aligned}
(m+M) \ddot{x} = -kx
\end{aligned}
$$

であるから、 角振動数を $\omega = \sqrt{k/(m+M)}$ として、
$t=0$ で $x=0, \dot{x}=V$ であることを考慮して、

$$
\begin{aligned}
x(t)
&= \frac{V}{\omega} \sin \omega t
\\
&= \frac{mv}{\sqrt{(m+M)k}} \sin \left( \sqrt{\frac{k}{m+M}} t \right)
\end{aligned}
$$

を得る。

#### 2.
求める時刻は $\pi / \omega = \pi \sqrt{(m+M)/k}$ である。
また、このときの速度はエネルギー保存則より $-V = -mv/(m+M)$ である。

### II.
#### 1.
衝突直後の A, B の速度をそれぞれ $v_A, v_B$ とする。
運動量保存則より、

$$
mv = mv_A + mv_B
$$

が成り立つ。
また、完全弾性衝突なので、エネルギー保存則

$$
\begin{aligned}
\frac{1}{2} mv^2 = \frac{1}{2} mv_A^2 + \frac{1}{2} mv_B^2
\end{aligned}
$$

が成り立つ。
この連立方程式には2通りの解があるが、
$v_A = v, v_B = 0$ は衝突せずに通り過ぎるということなので、
求める解は、

$$
\begin{aligned}
v_A &= \frac{m-M}{m+M} v
\\
v_B &= \frac{2m}{m+M} v
\end{aligned}
$$

である。

#### 2.
時刻 $t$ における A, B の位置をそれぞれ $x_A(t), x_B(t)$ とする。
上の 1. で得た式は $M=m$ のとき、$v_A = 0, v_B = v$ となるので、
$\omega_0 = \sqrt{k/m}, t_0 = \pi / \omega_0 = \pi \sqrt{m/k}$ として、

$$
\begin{aligned}
x_A (t) &=
\begin{cases}
  0 & 0 \leq t \leq t_0 \\
-vt & t_0 \lt t
\end{cases}
\\
x_B (t) &=
\begin{cases}
\frac{v}{\omega_0} \sin \omega_0 t & 0 \leq t \leq t_0 \\
0 & t_0 \lt t
\end{cases}
\end{aligned}
$$

がわかる。

### III.
#### 1.
時刻 $t$ における A, B の位置をそれぞれ $x_A(t), x_B(t)$ とする。

1回目の衝突直後の A, B の速度をそれぞれ $v_A, v_B$ とすると、
運動量保存則

$$
\begin{aligned}
mv = mv_A + 2mv_B
\end{aligned}
$$

および
反発係数が $e$ であること

$$
\begin{aligned}
e = \frac{v_B - v_A}{v}
\end{aligned}
$$

から、

$$
\begin{aligned}
v_A &= \frac{1-2e}{3} v
\\
v_B &= \frac{1+e}{3} v
\end{aligned}
$$

がわかる。

2回目の衝突の時刻を $t_2 = (7 \sqrt{2} \pi / 6) \sqrt{m/k}$ とする。

時刻 $0 \lt t \lt t_2$ において、
B の角振動数は $\omega_2 = \sqrt{k/(2m)}$ であるから、

$$
\begin{aligned}
x_A(t) &= v_A t
\\
x_B(t) &= \frac{v_B}{\omega_2} \sin \omega_2 t
\end{aligned}
$$

であり、 $x_B(t)$ の $t$ による微分は、

$$
\begin{aligned}
\dot{x}_B(t) &= v_B \cos \omega_2 t
\end{aligned}
$$

である。
よって、2回目の衝突の直前の A, B の速度をそれぞれ $V_A, V_B$ とすると、

$$
\begin{aligned}
V_A
&= v_A
\\
&= \frac{1-2e}{3} v
\\
V_B
&= \dot{x}_B(t_2)
\\
&= v_B \cos \omega_2 t_2
\\
&= - \frac{1+e}{2 \sqrt{3}} v
\end{aligned}
$$

である。

#### 2.
$x_A(t_2) = x_B(t_2)$ から、

$$
\begin{aligned}
e = \frac{7 \pi + 3}{14 \pi - 3}
\end{aligned}
$$

を得る。