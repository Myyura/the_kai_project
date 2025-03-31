---
sidebar_label: "2020年度 物理学 [I]"
sidebar_position: 3
tags:
  - Nagoya-University
---
# 名古屋大学 理学研究科 物理学教室 2020年度 物理学 \[I\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 問 1.

$$
  \begin{aligned}
  \overrightarrow{\mathrm{CP}}
  &= R \theta (- \cos \theta, \sin \theta)
  \\
  \therefore \ \ 
  \overrightarrow{\mathrm{OP}}
  &= \overrightarrow{\mathrm{OC}} + \overrightarrow{\mathrm{CP}}
  \\
  &= R (\sin \theta - \theta \cos \theta, \cos \theta + \theta \sin \theta)
  \end{aligned}
$$

### 問 2.

$$
  \begin{aligned}
  (v_x, v_y)
  = R \theta \dot{\theta} (\sin \theta, \cos \theta)
  \end{aligned}
$$

### 問 3.

$$
  \begin{aligned}
  \mathcal{L}
  &= \frac{m}{2} \left( v_x^2 + v_y^2 \right)
  = \frac{m}{2} R^2 \theta^2 \dot{\theta}^2
  \end{aligned}
$$

### 問 4.

$$
  \begin{aligned}
  \frac{\mathrm{d}}{\mathrm{d}t}
  \frac{\partial \mathcal{L}}{\partial \dot{\theta}}
  &= \frac{\mathrm{d}}{\mathrm{d}t} m R^2 \theta^2 \dot{\theta}
  = m R^2 \left( 2 \theta \dot{\theta}^2 + \theta^2 \ddot{\theta} \right)
  \\
  \frac{\partial \mathcal{L}}{\partial \theta}
  &= m R^2 \theta \dot{\theta}^2
  \end{aligned}
$$

なので、オイラー-ラグランジュ方程式より、

$$
  \begin{aligned}
  \theta \dot{\theta}^2 + \theta^2 \ddot{\theta} = 0
  \end{aligned}
$$

### 問 5.
与えられた $\theta(t) = \sqrt{2 v_0 t / R}$ が
運動方程式と初期条件を満たすことは次のようにして確かめられる。
まず、

$$
\begin{aligned}
\dot{\theta} (t) = \sqrt{\frac{v_0}{2Rt}}
, \ \ 
\ddot{\theta} (t) = - \sqrt{\frac{v_0}{8Rt^3}}
\end{aligned}
$$

より、運動方程式 $\theta \dot{\theta}^2 + \theta^2 \ddot{\theta} = 0$
を満たすことがわかる。
次に、

$$
\begin{aligned}
(v_x, v_y)
= v_0 \left(\sin \sqrt{\frac{2v_0t}{R}}, \cos \sqrt{\frac{2v_0t}{R}} \right)
\end{aligned}
$$

より、初期条件（ $t=0$ で $\theta = 0, \ v_x = 0, \ v_y = v_0$
）も満たすことがわかる。

### 問 6.
点 P の位置を $(x,y)$ とすると、求める角運動量の大きさは、

$$
\begin{aligned}
L
&= m \left| x v_y - y v_x \right|
\\
&= m R^2 \theta^2 \left| \dot{\theta} \right|
\end{aligned}
$$

であるが、問5で与えられた解を使うと、

$$
\begin{aligned}
L
&= 2m \sqrt{R v_0^3 t}
\end{aligned}
$$

を得る。
これは $t$ に依存するので保存量ではない。
（糸の一端がy軸上に固定されていることから、この系は中心軸に関する回転対称性を持たない。）

### 問 7.
問 5 より、 $v_x^2 + v_y^2 = v_0^2$ なので、運動エネルギーは保存する。
（摩擦や非弾性衝突などがなく、ポテンシャルエネルギーも考えていないので、運動エネルギーが保存しない理由がない。）

### 問 8.
問 1, 2, 3 と同じように考えて、

$$
\begin{aligned}
\overrightarrow{\mathrm{OC}}
&= R \left( \sin(\theta+\psi), \cos(\theta+\psi) \right)
\\
\overrightarrow{\mathrm{CP}}
&= R \theta \left(-\cos(\theta+\psi), \sin(\theta+\psi) \right)
\\
\overrightarrow{\mathrm{OP}}
&= \overrightarrow{\mathrm{OC}} + \overrightarrow{\mathrm{CP}}
\\
&= R \left( \sin(\theta+\psi) - \theta \cos(\theta+\psi),
\cos (\theta + \psi) + \theta \sin (\theta + \psi) \right)
\\
\vec{v}
&= R \left(
\dot{\psi} \cos(\theta+\psi) + \theta (\dot{\theta}+\dot{\psi}) \sin(\theta+\psi),
-\dot{\psi} \sin(\theta+\psi) + \theta (\dot{\theta}+\dot{\psi}) \cos(\theta+\psi)
\right)
\\
\left| \vec{v} \right|^2
&= R^2 \left( \dot{\psi}^2 + \theta^2 (\dot{\theta}+\dot{\psi})^2 \right)
\\
\mathcal{L}
&= \frac{1}{2} I \dot{\psi}^2 + \frac{1}{2} m \left| \vec{v} \right|^2
\\
&= \frac{1}{2} \left( I + mR^2 \right) \dot{\psi}^2
+ \frac{1}{2} mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right)^2
\end{aligned}
$$

### 問 9.

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}
\frac{\partial \mathcal{L}}{\partial \dot{\theta}}
&= \frac{\mathrm{d}}{\mathrm{d} t}
mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right)
\\
&= mR^2 \left( 2 \theta \dot{\theta} (\dot{\theta}+\dot{\psi})
+ \theta^2 (\ddot{\theta}+\ddot{\psi}) \right)
\\
\frac{\partial \mathcal{L}}{\partial \theta}
&= mR^2 \theta \left( \dot{\theta} + \dot{\psi} \right)^2
\\
\frac{\mathrm{d}}{\mathrm{d} t}
\frac{\partial \mathcal{L}}{\partial \dot{\psi}}
&= \frac{\mathrm{d}}{\mathrm{d} t}
\left( \left( I+mR^2 \right) \dot{\psi}
+ mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right) \right)
\\
&= \left( I+mR^2 \right) \ddot{\psi}
+ 2mR^2 \theta \dot{\theta} \left( \dot{\theta} + \dot{\psi} \right)
+ mR^2 \theta^2 \left( \ddot{\theta} + \ddot{\psi} \right)
\\
\frac{\partial \mathcal{L}}{\partial \psi}
&= 0
\end{aligned}
$$

なので、 $\theta, \psi$ に関するオイラー-ラグランジュ方程式はそれぞれ次のようになる：

$$
\begin{aligned}
2 \theta \dot{\theta} \left( \dot{\theta}+\dot{\psi} \right)
+ \theta^2 \left( \ddot{\theta}+\ddot{\psi} \right)
&= \theta \left( \dot{\theta} + \dot{\psi} \right)^2
\\
\left( I+mR^2 \right) \ddot{\psi}
+ 2mR^2 \theta \dot{\theta} \left( \dot{\theta} + \dot{\psi} \right)
+ mR^2 \theta^2 \left( \ddot{\theta} + \ddot{\psi} \right)
&= 0
\end{aligned}
$$

### 問 10.
問 9 からわかるように、

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}
\left( \left( I+mR^2 \right) \dot{\psi}
+ mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right) \right)
= 0
\end{aligned}
$$

つまり、

$$
\begin{aligned}
\left( I+mR^2 \right) \dot{\psi}
+ mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right)
\end{aligned}
$$

は保存量である。

### 問 11.
$t=0$ において $\theta = 0, \ \dot{\psi}=0$ であるから、
問 10 の保存量は $t \geq 0$ において $0$ である：

$$
\begin{aligned}
\left( I+mR^2 \right) \dot{\psi}
+ mR^2 \theta^2 \left( \dot{\theta} + \dot{\psi} \right)
= 0
\\
\therefore \ \ 
\dot{\psi}
= - \frac{mR^2 \theta^2 \dot{\theta}}
{I + mR^2 + mR^2 \theta^2}
\end{aligned}
$$

$t \gt 0$ において $\theta \gt 0, \ \dot{\theta} \gt 0$ であるから
$\dot{\psi} \lt 0$ であり、円柱は時計回りに回転することがわかる。

### 問 12.
$t=0$ での質点の運動エネルギー $(1/2)mv_0^2$
の一部は円柱の運動エネルギーとなるので、質点の運動エネルギーは保存しない。