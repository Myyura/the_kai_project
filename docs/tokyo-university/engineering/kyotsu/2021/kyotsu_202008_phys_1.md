---
sidebar_label: '2020年8月実施 物理学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 物理学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

大学院入学試験問題
[物理学 1 (力学)](https://github.com/Myyura/the_kai_project_assets/blob/a905474b4bb06464ac697009cb18bb114db3fabc/kakomonn/tokyo_university/engineering/Description/2021_P_1.pdf)


### 题目描述

原 Description 仅提供 2021 年“物理学 1（力学）”原卷链接，图示和具体题干缺失。根据本地 Kai，只能确认这是质点碰撞与水平弹簧振子组合题：

1. 第一部分中，质量 $m$ 的物体 A 以速度 $v$ 与质量 $M$、连接劲度系数 $k$ 弹簧的物体 B 碰撞后共同运动。要求由动量守恒确定碰后速度，并求共同质量 $m+M$ 的简谐运动位置 $x(t)$；随后求其第一次回到平衡位置的时刻及该时刻速度。
2. 第二部分先处理 A、B 的完全弹性碰撞，求碰后速度
   $$
   v_A=\frac{m-M}{m+M}v,\qquad
   v_B=\frac{2m}{m+M}v.
   $$
   另一个小问取 $M=m$，要求写出两物体在一次弹簧往返运动前后的分段位置函数。由于原图缺失，碰撞点的坐标约定只能按 Kai 中的 $x=0$ 确认。
3. 第三部分中 B 的质量为 $2m$、碰撞恢复系数为 $e$。本地解答求第一次碰撞后的速度，继而在 B 以角频率 $\sqrt{k/(2m)}$ 振动时计算第二次碰撞前的双方速度，并由第二次相遇条件求 $e$。原题给定的完整几何配置及第二次碰撞时刻条件未保存在本地，不能进一步补写。

#### 考点

- 一维碰撞：联合使用动量守恒、机械能守恒或恢复系数，确定完全非弹性与弹性碰撞后的速度。
- 弹簧简谐运动：以碰后位置和速度为初值求振幅、角频率、回到平衡点的时间与速度。
- 分段运动与再次碰撞：分别写自由质点和振子的轨迹，以位置相等条件确定下一次相遇及参数。

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

解説:
位置$x$を時刻$t$の関数として求めるので，運動方程式を解きます．内力のみが働くので運動量保存則が成立し，それを使って初期条件の速度$\dot{x}$を求めます．
振幅$A$は力学的エネルギー保存則
$$\boxed{\frac{1}{2}(m+M)V^2=\frac{1}{2}kA^2}$$
から求めることもできます．

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
