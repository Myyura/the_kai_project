---
sidebar_label: "2019年8月実施 解析・線形代数"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Geometry.Astroid
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Calculus.Extrema
---
# 名古屋大学 情報学研究科 知能システム学専攻 2019年8月実施 解析・線形代数

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

（解の導出過程も書くこと）

### [1]

複素数 $z=(1+i)^n$（$n$ は実数，$i$ は虚数単位）について，$z=u+vi$ と表すことにする．このとき，以下の問いに答えよ．

(a) $n=8$ のとき，$u,v$ を求めよ．

(b) $|z|=8$ のとき，$u,v$ を求めよ．

### [2]

次の二つの行列 $P,Q$ について，以下の問いに答えよ．

$$
P=\frac15\begin{pmatrix}7&4\\4&13\end{pmatrix},\qquad Q=\begin{pmatrix}2&0\\0&2\end{pmatrix}
$$

(a) $P$ の固有値と単位固有ベクトルを求めよ．

(b) $\boldsymbol q=(x,y)^t$ とするとき，

$$
\boldsymbol q^tP\boldsymbol q<1<\boldsymbol q^tQ\boldsymbol q
$$

を満たす座標平面上の点 $(x,y)$ の領域を図示せよ．ただし，$\boldsymbol q^t$ は $\boldsymbol q$ の転置を表す．

### [3]

座標平面上の動点 P の時刻 $t$ における座標が次の式で与えられているとき，以下の問いに答えよ．

$$
\begin{cases}x=\sin^3t\\y=\cos^3t\end{cases}
$$

(a) P の軌跡の長さを求めよ．ただし，$0\le t\le2\pi$ とする．

(b) P の速度の大きさが最大となるときの P の座標を求めよ．ただし，$0<t<\dfrac\pi2$ とする．

**Translation of technical terms**

複素数 complex number，実数 real number，虚数単位 imaginary unit，行列 matrix，固有値 eigenvalue，単位固有ベクトル unit eigenvector，座標平面 coordinate plane，領域 region，転置 transpose，動点 moving point，座標 coordinates，軌跡 trajectory，速度 velocity，最大 maximum．

#### 题目描述

须写出解的推导过程。

**[1]** 对复数 $z=(1+i)^n$（$n$ 为实数，$i$ 为虚数单位），记 $z=u+vi$。回答下列问题。

(a) 当 $n=8$ 时，求 $u,v$。

(b) 当 $|z|=8$ 时，求 $u,v$。

**[2]** 对下列两个矩阵 $P,Q$，回答下列问题。

$$
P=\frac15\begin{pmatrix}7&4\\4&13\end{pmatrix},\qquad Q=\begin{pmatrix}2&0\\0&2\end{pmatrix}
$$

(a) 求 $P$ 的特征值和单位特征向量。

(b) 令 $\boldsymbol q=(x,y)^t$，画出坐标平面内满足

$$
\boldsymbol q^tP\boldsymbol q<1<\boldsymbol q^tQ\boldsymbol q
$$

的点 $(x,y)$ 所构成的区域。其中 $\boldsymbol q^t$ 表示 $\boldsymbol q$ 的转置。

**[3]** 坐标平面内的动点 P 在时刻 $t$ 的坐标由下式给出，回答下列问题。

$$
\begin{cases}x=\sin^3t,\\y=\cos^3t.\end{cases}
$$

(a) 求 P 的轨迹长度，其中 $0\le t\le2\pi$。

(b) 求 P 的速度大小达到最大时的坐标，其中 $0<t<\dfrac\pi2$。

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

![楕円の内部と円の外部が重なる二つの領域。破線の境界は含まない。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/aisys/2020/nagoya-aisys201908-region.svg)

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

## **Reference**

- [公式問題（PDF）](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/a1edf5b3be858fab9a477015f01cb618.pdf)
