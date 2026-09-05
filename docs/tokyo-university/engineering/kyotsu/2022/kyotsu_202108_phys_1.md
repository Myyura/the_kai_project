---
sidebar_label: '2021年8月実施 物理学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2021年8月実施 物理学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約

[公式問題 PDF・3–5ページ](https://www.t.u-tokyo.ac.jp/hubfs/graduate/2022/kakomon/2022_P_1.pdf#page=3)

質量 $m$、長さ $L$ の一様な細い棒が、一端 $O$ を支点として鉛直面内を摩擦なく回転する。他端を $E$、重力加速度を $g$ とし、空気抵抗を無視する。鉛直下向きから棒への角度を $\theta$ とする。

I. 棒を水平にして静かに放す。

1. $O$ のまわりの慣性モーメント $I_O$ を求める。
2. $\theta$ の運動方程式を示す。
3. $\dot\theta^2$ を $\theta$ で表す。
4. 放した直後に支点から棒へ働く力を求める。
5. $E$ が最下点に来た瞬間に支点から棒へ働く力を求める。

II. $O$ から距離 $x$（$0<x\le L$）の位置に、質量 $m$ の点状物体 $P$ を固定する。

1. 棒が最下位置の近くで微小振動する周期を求める。
2. 水平から静かに放して $E$ が初めて最下点に達するまでの時間を最短にする $x$ を求める。

III. 最下位置で静止している棒に、質量 $m$ の点状物体 $Q$ が水平に速度 $v$ で衝突する。衝突点は $O$ から距離 $y$（$0<y\le L$）にあり、運動は同じ鉛直面内に限る。

1. 衝突前後で全運動エネルギーが保存され、衝突後に $Q$ が鉛直下向きに落ちる場合の $y$ を求める。
2. $Q$ が棒に付着する場合、$E$ がちょうど $O$ と同じ高さまで上がるための衝突速度 $v_0$ を $y$ で表す。

### 题目描述

质量 $m$、长度 $L$ 的均匀细杆以一端 $O$ 为支点，在竖直平面内无摩擦转动，另一端为 $E$。重力加速度为 $g$，忽略空气阻力。角度 $\theta$ 从竖直向下方向量起。

1. 将杆水平放置后由静止释放。
   1. 求杆关于 $O$ 的转动惯量。
   2. 建立 $\theta$ 的运动方程。
   3. 用 $\theta$ 表示 $\dot\theta^2$。
   4. 求释放瞬间支点对杆的力。
   5. 求 $E$ 到达最低点瞬间支点对杆的力。
2. 在距 $O$ 为 $x$（$0<x\le L$）处固定质量为 $m$ 的质点 $P$。
   1. 求最低位置附近的小振动周期。
   2. 从水平静止释放，求使 $E$ 首次到达最低点所需时间最短的 $x$。
3. 杆在最低位置静止时，质量为 $m$ 的质点 $Q$ 以水平速度 $v$ 撞击距 $O$ 为 $y$（$0<y\le L$）的位置，运动仍在同一竖直平面内。
   1. 碰撞前后总动能守恒，且碰后 $Q$ 竖直下落，求 $y$。
   2. 若 $Q$ 黏附在杆上，求使 $E$ 刚好升至与 $O$ 同高的入射速度 $v_0(y)$。

## **Kai**
### I.
#### 1.

$$
\begin{aligned}
I_O
&= \int_0^L \frac{m}{L} x^2 dx
\\
&= \frac{m}{L} \left[ \frac{x^3}{3} \right]_0^L
\\
&= \frac{1}{3} mL^2
\end{aligned}
$$

#### 2.

$$
\begin{aligned}
I_O \ddot{\theta} &= - mg \frac{L}{2} \sin \theta
\\
\frac{1}{3} mL^2 \ddot{\theta} &= - mg \frac{L}{2} \sin \theta
\\
\therefore \ \ 
\ddot{\theta} &= - \frac{3g}{2L} \sin \theta
\end{aligned}
$$

#### 3.
エネルギー保存則より、

$$
\begin{aligned}
\frac{1}{2} I_O \dot{\theta}^2 - mg \frac{L}{2} \cos \theta &= 0
\\
\frac{1}{3} mL^2 \dot{\theta}^2 &= mgL \cos \theta
\\
\therefore \ \ 
\dot{\theta}^2 &= \frac{3g}{L} \cos \theta
\end{aligned}
$$

#### 4.
放した直後は $\theta=\pi/2$、$\dot\theta=0$、$\ddot\theta=-3g/(2L)$ である。重心の加速度は鉛直下向きに $3g/4$ だから、支点の力の上向き成分 $N$ は

$$N-mg=-m\frac{3g}{4},\qquad \boxed{N=\frac{mg}{4}}.$$

水平成分は零であり、力は鉛直上向きである。

#### 5.
最下点では $\theta=0$、$\ddot\theta=0$、$\dot\theta^2=3g/L$ であり、重心の加速度は支点に向かって $\frac L2\dot\theta^2=3g/2$ である。従って

$$N-mg=m\frac{3g}{2},\qquad \boxed{N=\frac{5mg}{2}}.$$

力は鉛直上向きである。

### II.
#### 1.
棒と P を合わせた物体を P' とする。
P' の O の周りの慣性モーメントは、

$$
\begin{aligned}
I_O + mx^2
= m \frac{L^2 + 3x^2}{3}
\end{aligned}
$$

であり、 O から P' の重心までの距離は $(L/2+x)/2$ であるから、
$\theta$ に関する運動方程式は、

$$
\begin{aligned}
m \frac{L^2 + 3x^2}{3} \ddot{\theta} &= - 2mg \frac{L/2 + x}{2} \sin \theta
\\
\ddot{\theta} &= - \frac{3g(L+2x)}{2(L^2+3x^2)} \sin \theta
\end{aligned}
$$

である。
よって、微小振動の振動周期は、

$$
\begin{aligned}
2 \pi \sqrt{ \frac{2(L^2+3x^2)}{3g(L+2x)} }
\end{aligned}
$$

である。

#### 2.
エネルギー保存則より

$$
\begin{aligned}
\frac{1}{2} m \frac{L^2+3x^2}{3} \dot{\theta}^2 &- 2mg \frac{L/2+x}{2} \cos \theta = 0
\\
\therefore \ \ 
\dot{\theta}^2 &= \frac{L+2x}{L^2+3x^2} \cdot 3g \cos \theta
\end{aligned}
$$

棒を放してから E が最下点に最初に到達するまで、
$0 \leq \theta \leq \pi/2, \dot{\theta} \leq 0$ なので、

$$
\begin{aligned}
\dot{\theta} &= - \sqrt{\frac{L+2x}{L^2+3x^2}} \sqrt{3g \cos \theta}
\\
\therefore \ \ 
dt &= - \sqrt{\frac{L^2+3x^2}{L+2x}} \frac{d \theta}{\sqrt{3g \cos \theta}}
\end{aligned}
$$

である。よって、
棒を放してから E が最下点に最初に到達するまでの時間を $t_1$ とすると、

$$
\begin{aligned}
t_1
&= - \sqrt{\frac{L^2+3x^2}{L+2x}}
\int_{\pi/2}^0 \frac{d \theta}{\sqrt{3g \cos \theta}}
\\
&= \sqrt{\frac{L^2+3x^2}{L+2x}}
\int_0^{\pi/2} \frac{d \theta}{\sqrt{3g \cos \theta}}
\end{aligned}
$$

である。

$$
\begin{aligned}
\frac{d}{dx} \frac{L^2+3x^2}{L+2x}
&= \frac{2(3x^2+3Lx-L^2)}{(L+2x)^2}
\end{aligned}
$$

からわかるように、 $0 \lt x \leq L$ において
$(L^2+3x^2)/(L+2x)$ したがって $t_1$ を最小にする $x$ は、

$$
\begin{aligned}
x = \frac{-3+\sqrt{21}}{6} L
\end{aligned}
$$

である。

### III.
#### 1.
衝突直後の棒の O の周りの角速度を $\omega$ とすると、
衝突前後のエネルギー保存則と角運動量保存則より、

$$
\begin{aligned}
\frac{1}{2}mv^2 &= \frac{1}{2} I_O \omega^2 ,
\\
ymv &= I_O \omega
\end{aligned}
$$

が成り立ち、これらから $\omega$ を消去して、

$$
\begin{aligned}
y = \frac{L}{\sqrt{3}}
\end{aligned}
$$

を得る。

#### 2.
棒と Q を合わせた物体の O の周りの慣性モーメントは、

$$
\begin{aligned}
I
&= I_O + my^2
\\
&= \frac{m(L^2 + 3y^2)}{3}
\end{aligned}
$$

である。
衝突直後の棒（および Q）の O の周りの角速度を $\omega$ とする。
衝突前後の角運動量保存則より

$$
\begin{aligned}
ymv_0 = I \omega
\end{aligned}
$$

が成り立ち、衝突直後と E が O が同じ高さに達した時点でのエネルギーが等しいことから

$$
\begin{aligned}
\frac{1}{2} I \omega^2
&= mg \frac{L}{2} + mgy
\\
&= \frac{1}{2} mg(L+2y)
\end{aligned}
$$

が成り立つ。
これらから $\omega$ を消去して、

$$
\begin{aligned}
v_0
&= \frac{1}{y} \sqrt{\frac{(L+2y)(L^2+3y^2)g}{3}}
\end{aligned}
$$

を得る。
