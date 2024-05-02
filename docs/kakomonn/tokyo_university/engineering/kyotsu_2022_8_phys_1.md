---
comments: false
description: 東京大学 大学院 工学系研究科 2022年度 物理学1
keywords: Tokyo-University, 2022-8
---

## Source
東京大学 大学院 工学系研究科 2022年度 物理学1 (力学)

## Description

## Kai
### I.
#### 1.

$$
\begin{align}
I_O
&= \int_0^L \frac{m}{L} x^2 dx
\\
&= \frac{m}{L} \left[ \frac{x^3}{3} \right]_0^L
\\
&= \frac{1}{3} mL^2
\end{align}
$$

#### 2.

$$
\begin{align}
I_O \ddot{\theta} &= - mg \frac{L}{2} \sin \theta
\\
\frac{1}{3} mL^2 \ddot{\theta} &= - mg \frac{L}{2} \sin \theta
\\
\therefore \ \ 
\ddot{\theta} &= - \frac{3g}{2L} \sin \theta
\end{align}
$$

#### 3.
エネルギー保存則より、

$$
\begin{align}
\frac{1}{2} I_O \dot{\theta}^2 - mg \frac{L}{2} \cos \theta &= 0
\\
\frac{1}{3} mL^2 \dot{\theta}^2 &= mgL \cos \theta
\\
\therefore \ \ 
\dot{\theta}^2 &= \frac{3g}{L} \cos \theta
\end{align}
$$

#### 4.
$0$

#### 5.
棒は始点 O から、鉛直上向きに大きさ $mg$ の力を受ける。

### II.
#### 1.
棒と P を合わせた物体を P' とする。
P' の O の周りの慣性モーメントは、

$$
\begin{align}
I_O + mx^2
= m \frac{L^2 + 3x^2}{3}
\end{align}
$$

であり、 O から P' の重心までの距離は $(L/2+x)/2$ であるから、
$\theta$ に関する運動方程式は、

$$
\begin{align}
m \frac{L^2 + 3x^2}{3} \ddot{\theta} &= - 2mg \frac{L/2 + x}{2} \sin \theta
\\
\ddot{\theta} &= - \frac{3g(L+2x)}{2(L^2+3x^2)} \sin \theta
\end{align}
$$

である。
よって、微小振動の振動周期は、

$$
\begin{align}
2 \pi \sqrt{ \frac{2(L^2+3x^2)}{3g(L+2x)} }
\end{align}
$$

である。

#### 2.
エネルギー保存則より

$$
\begin{align}
\frac{1}{2} m \frac{L^2+3x^2}{3} \dot{\theta}^2 &- 2mg \frac{L/2+x}{2} \cos \theta = 0
\\
\therefore \ \ 
\dot{\theta}^2 &= \frac{L+2x}{L^2+3x^2} \cdot 3g \cos \theta
\end{align}
$$

棒を放してから E が最下点に最初に到達するまで、
$0 \leq \theta \leq \pi/2, \dot{\theta} \leq 0$ なので、

$$
\begin{align}
\dot{\theta} &= - \sqrt{\frac{L+2x}{L^2+3x^2}} \sqrt{3g \cos \theta}
\\
\therefore \ \ 
dt &= - \sqrt{\frac{L^2+3x^2}{L+2x}} \frac{d \theta}{\sqrt{3g \cos \theta}}
\end{align}
$$

である。よって、
棒を放してから E が最下点に最初に到達するまでの時間を $t_1$ とすると、

$$
\begin{align}
t_1
&= - \sqrt{\frac{L^2+3x^2}{L+2x}}
\int_{\pi/2}^0 \frac{d \theta}{\sqrt{3g \cos \theta}}
\\
&= \sqrt{\frac{L^2+3x^2}{L+2x}}
\int_0^{\pi/2} \frac{d \theta}{\sqrt{3g \cos \theta}}
\end{align}
$$

である。

$$
\begin{align}
\frac{d}{dx} \frac{L^2+3x^2}{L+2x}
&= \frac{2(3x^2+3Lx-L^2)}{(L+2x)^2}
\end{align}
$$

からわかるように、 $0 \lt x \leq L$ において
$(L^2+3x^2)/(L+2x)$ したがって $t_1$ を最小にする $x$ は、

$$
\begin{align}
x = \frac{-3+\sqrt{21}}{2} L
\end{align}
$$

である。

### III.
#### 1.
衝突直後の棒の O の周りの角速度を $\omega$ とすると、
衝突前後のエネルギー保存則と角運動量保存則より、

$$
\begin{align}
\frac{1}{2}mv^2 &= \frac{1}{2} I_O \omega^2 ,
\\
ymv &= I_O \omega
\end{align}
$$

が成り立ち、これらから $\omega$ を消去して、

$$
\begin{align}
y = \frac{L}{\sqrt{3}}
\end{align}
$$

を得る。

#### 2.
棒と Q を合わせた物体の O の周りの慣性モーメントは、

$$
\begin{align}
I
&= I_O + my^2
\\
&= \frac{m(L^2 + 3y^2)}{3}
\end{align}
$$

である。
衝突直後の棒（および Q）の O の周りの角速度を $\omega$ とする。
衝突前後の角運動量保存則より

$$
\begin{align}
ymv_0 = I \omega
\end{align}
$$

が成り立ち、衝突直後と E が O が同じ高さに達した時点でのエネルギーが等しいことから

$$
\begin{align}
\frac{1}{2} I \omega^2
&= mg \frac{L}{2} + mgy
\\
&= \frac{1}{2} mg(L+2y)
\end{align}
$$

が成り立つ。
これらから $\omega$ を消去して、

$$
\begin{align}
v_0
&= \frac{1}{y} \sqrt{\frac{(L+2y)(L^2+3y^2)g}{3}}
\end{align}
$$

を得る。