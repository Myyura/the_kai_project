---
sidebar_label: "2019年8月実施 解析・線形代数"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Geometry.Astroid
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Calculus.Local-Extrema
---
# 名古屋大学 情報学研究科 知能システム学専攻 2019年8月実施 解析・線形代数

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

題意の要約。出典：[名古屋大学・令和2年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/a1edf5b3be858fab9a477015f01cb618.pdf)、解析・線形代数。導出過程も示す。

### 1

$n$ を実数、$i$ を虚数単位とし、$z=(1+i)^n=u+vi$ と表す。

(a) $n=8$ の場合の $u,v$ を求める。

(b) $|z|=8$ の場合の $u,v$ を求める。

### 2

次の二つの行列を考える。

$$
P=\frac15\begin{pmatrix}7&4\\4&13\end{pmatrix},\qquad
Q=\begin{pmatrix}2&0\\0&2\end{pmatrix}.
$$

(a) $P$ の固有値と、それぞれに対応する単位固有ベクトルを求める。

(b) $\boldsymbol q=(x,y)^T$ として、$\boldsymbol q^TP\boldsymbol q<1<\boldsymbol q^TQ\boldsymbol q$ を満たす $(x,y)$ の領域を図示する。$T$ は転置を表す。

### 3

時刻 $t$ における動点 $P$ の座標を $x=\sin^3t,\ y=\cos^3t$ とする。

(a) $0\le t\le2\pi$ の間に描く軌跡の長さを求める。

(b) $0<t<\pi/2$ の範囲で、速さが最大になるときの $P$ の座標を求める。

### 题目描述

**[1]** 回答下列复数问题。

1. 将 $z=(1+i)^8$ 写成 $u+iv$ 的形式，并求实数 $u,v$。
2. 设 $n$ 为实数，$z=(1+i)^n=u+iv$，且 $|z|=8$，求 $n,u,v$。

**[2]** 给定
$$
P=\frac15\begin{pmatrix}7&4\\4&13\end{pmatrix},\qquad Q=\begin{pmatrix}2&0\\0&2\end{pmatrix}.
$$

1. 求 $P$ 的特征值及各自的单位特征向量。
2. 令 $\boldsymbol q=(x,y)^T$，画出满足 $\boldsymbol q^TP\boldsymbol q<1<\boldsymbol q^TQ\boldsymbol q$ 的区域。

**[3]** 点 $P=(x,y)$ 按参数方程

$$
x=\sin^3t,\qquad y=\cos^3t,\qquad0\le t\le2\pi
$$

运动。求：

1. 点 $P$ 走完该闭曲线一周的路程，即曲线的弧长；
2. 在 $0<t<\pi/2$ 内，点 $P$ 的速度大小取得最大值时的 $t$，以及此时 $P$ 的坐标。

## **Kai**
### 1

#### (a)

$$
  \begin{aligned}
  z
  = \left( 1 + i \right)^8
  = \left( \sqrt{2} e^{ \frac{\pi}{4} i } \right)^8
  = 2^4 e^{ 2 \pi i }
  = 16
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  u=16, v=0
  \end{aligned}
$$

である。

#### (b)
$8 = |z| = 2^{n/2}$ より、 $n=6$ なので、

$$
  \begin{aligned}
  z
  = \left( 1 + i \right)^6
  = \left( \sqrt{2} e^{ \frac{\pi}{4} i } \right)^6
  = 2^3 e^{ \frac{3}{2} \pi i }
  = -8i
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  u=0, v=-8
  \end{aligned}
$$

である。

### 2

#### (a)

$$
\det(\lambda I-P)=\lambda^2-4\lambda+3=(\lambda-1)(\lambda-3).
$$

固有値と対応する単位固有ベクトルは

$$
\lambda_1=1,\qquad \boldsymbol v_1=\pm\frac1{\sqrt5}(2,-1)^T,
$$

$$
\lambda_2=3,\qquad \boldsymbol v_2=\pm\frac1{\sqrt5}(1,2)^T
$$

である。

#### (b)

直交行列 $S=\frac1{\sqrt5}\begin{pmatrix}2&1\\-1&2\end{pmatrix}$ により

$$
\begin{pmatrix}x\\y\end{pmatrix}
=S\begin{pmatrix}u\\v\end{pmatrix}
$$

と変換すると、$S^TPS=\operatorname{diag}(1,3)$、$S^TQS=2I$ である。したがって、求める領域は

$$
\boxed{u^2+3v^2<1,\qquad u^2+v^2>\frac12}
$$

となる。すなわち、長軸が $(2,-1)^T$ 方向、半軸が $1,1/\sqrt3$ の楕円の内側で、半径 $1/\sqrt2$ の円の外側にある二つの領域である。両方の境界は含まない。

円と楕円の交点は $(u,v)=(\pm1/2,\pm1/2)$（符号は独立）である。

![楕円の内部と円の外部が重なる二つの領域。破線の境界は含まない。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2020/nagoya-aisys2020-region.svg)

### 3

#### (a)
時刻 $t$ における P の速度の大きさを $v(t)$ とすると、

$$
\begin{aligned}
v(t)
&= \sqrt{ \left( \frac{dx}{dt} \right)^2 + \left( \frac{dy}{dt} \right)^2 }
\\
&= \sqrt{ 9 \sin^4 t \cos^2 t + 9 \sin^2 t \cos^4 t }
\\
&= \sqrt{ 9 \sin^2 t \cos^2 t }
\\
&= \frac{3}{2} \left| \sin 2t \right|
\end{aligned}
$$

であるから、求める長さ $l$ は

$$
\begin{aligned}
l
&= \int_0^{2 \pi} v(t) dt
\\
&= \frac{3}{2} \int_0^{2 \pi} \left| \sin 2t \right| dt
\\
&= 3 \int_0^{\pi} \left| \sin 2t \right| dt
\\
&= 3 \left( \int_0^{\pi/2} \sin 2t dt - \int_{\pi/2}^{\pi} \sin 2t dt \right)
\\
&= \frac{3}{2} \left(
- \left[ \cos 2t \right]_0^{\pi/2}
+ \left[ \cos 2t \right]_{\pi/2}^{\pi} \right)
\\
&= 6
\end{aligned}
$$

である。

#### (b)
$0 \lt t \lt \pi / 2$ において、

$$
  \begin{aligned}
  v(t) &= \frac{3}{2} \sin 2t
  \end{aligned}
$$

であるから、 $v(t)$ が最大になるのは、 $t = \pi / 4$ のときであり、
このとき、

$$
  \begin{aligned}
  x &= \sin^3 \frac{\pi}{4}
  = \left( \frac{1}{\sqrt{2}} \right)^3 = \frac{1}{2 \sqrt{2}}
  \\
  y &= \cos^3 \frac{\pi}{4}
  = \left( \frac{1}{\sqrt{2}} \right)^3 = \frac{1}{2 \sqrt{2}}
  \end{aligned}
$$

である。
