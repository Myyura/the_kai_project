---
sidebar_label: 2022年8月実施 選択問題 8 応用数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Vector-Calculus.Line-Integral
  - Mathematics.Fourier-Analysis.Fourier-Transform
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2022年8月実施 選択問題 8 応用数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

※以下では虚数単位を $i$ と表記する。

**問 1.** 複素数 $z=x+iy$ について（$x,y$ は実数）、二変数関数

$$
u(x,y)=2x^2-2y^2-2xy
$$

を実部とする正則関数 $f(z)=u(x,y)+iv(x,y)$ を求めたい。ただし $f(0)=i$ とする。

（1）$u(x,y)$ が調和関数であることを確かめよ。

（2）$f(z)$ の虚部 $v(x,y)$ を求めよ。

（3）$f(z)$ を複素数 $z$ の関数で表せ。

**問 2.** つぎの複素積分において、積分経路 $C$ を、原点を中心とした半径 2 の円を反時計回りに回る単純閉曲線としたときの積分値を求めよ。

$$
\oint_C\frac{\cos z}{z^2+2zi+3}\,dz
$$

なお、積分値が実数である場合には、虚数単位 $i$ を用いずに表すこと。

**問 3.** 三次元空間のデカルト座標系の正規直交基底を $\vec i=(1,0,0)$、$\vec j=(0,1,0)$、$\vec k=(0,0,1)$ とする。この三次元座標系で、媒介変数 $t$ を用いて表される位置ベクトル

$$
\begin{aligned}
\vec r(t)&=x(t)\vec i+y(t)\vec j+z(t)\vec k,\\
x(t)&=\cos t,\quad y(t)=\sin t,\quad z(t)=2t
\end{aligned}
$$

において、座標 $(1,0,0)$ から $(0,-1,3\pi)$ までの曲線を $C$ とする。このとき、ベクトル場

$$
\vec v=(x^2z-yz)\vec i+xyz\vec j+\frac12x^2z\vec k
$$

の曲線 $C$ に沿う線積分 $\int_C\vec v\cdot d\vec r$ を求めよ。

**問 4.** 時間信号 $f(t)$ に対するフーリエ変換 $F(\omega)$ は次式で表されるとして、以下の問に答えよ。

$$
F(\omega)=\int_{-\infty}^\infty f(t)e^{-i\omega t}\,dt
$$

（1）$f(t)=e^{-|t|}$ のフーリエ変換を求めよ。

（2）$x(t)=1/(t^2+1)$ のフーリエ変換を求めよ。なお、（1）の結果を用いても良い。

キーワード：虚数単位 imaginary unit、複素数 complex number、実数 real number、二変数関数 two-variable function、実部 real part、正則関数 holomorphic function、調和関数 harmonic function、虚部 imaginary part、関数 function、複素積分 complex integral、積分経路 integral path、原点 origin、中心 center、半径 radius、円 circle、反時計回り counterclockwise、単純閉曲線 simple closed curve、積分値 integral value、三次元空間 Three-dimensional space、デカルト座標系 Cartesian coordinate system、正規直交基底 orthogonal basis、媒介変数 parameter、位置ベクトル position vector、座標 coordinate、曲線 curve、ベクトル場 vector field、線積分 line integral、時間信号 time signal、フーリエ変換 Fourier transform。

### 题目描述

以下以 $i$ 表示虚数单位。

**问 1.** 对复数 $z=x+iy$（$x,y$ 为实数），要求以二元函数

$$
u(x,y)=2x^2-2y^2-2xy
$$

为实部的全纯函数 $f(z)=u(x,y)+iv(x,y)$，其中 $f(0)=i$。

（1）验证 $u(x,y)$ 是调和函数。

（2）求 $f(z)$ 的虚部 $v(x,y)$。

（3）将 $f(z)$ 表示为复数 $z$ 的函数。

**问 2.** 计算下列复积分。积分路径 $C$ 为以原点为中心、半径为 2 的圆，沿逆时针方向绕行的简单闭曲线。

$$
\oint_C\frac{\cos z}{z^2+2zi+3}\,dz
$$

若积分值为实数，表达结果时不得使用虚数单位 $i$。

**问 3.** 三维笛卡尔坐标系的标准正交基为 $\vec i=(1,0,0)$、$\vec j=(0,1,0)$、$\vec k=(0,0,1)$。位置向量用参数 $t$ 表示为

$$
\begin{aligned}
\vec r(t)&=x(t)\vec i+y(t)\vec j+z(t)\vec k,\\
x(t)&=\cos t,\quad y(t)=\sin t,\quad z(t)=2t.
\end{aligned}
$$

设 $C$ 为从 $(1,0,0)$ 到 $(0,-1,3\pi)$ 的这段曲线，求向量场

$$
\vec v=(x^2z-yz)\vec i+xyz\vec j+\frac12x^2z\vec k
$$

沿 $C$ 的线积分 $\int_C\vec v\cdot d\vec r$。

**问 4.** 时间信号 $f(t)$ 的傅里叶变换采用约定

$$
F(\omega)=\int_{-\infty}^\infty f(t)e^{-i\omega t}\,dt.
$$

（1）求 $f(t)=e^{-|t|}$ 的傅里叶变换。

（2）求 $x(t)=1/(t^2+1)$ 的傅里叶变换。可以使用（1）的结果。

## **Kai**

### 1.

#### (1)

$$
u_{xx}+u_{yy}=4-4=0
$$

より、$u$ は調和関数である。

#### (2)

Cauchy--Riemann の関係より

$$
\begin{gathered}
v_x=-u_y=2x+4y,\\
v_y=u_x=4x-2y.
\end{gathered}
$$

したがって

$$
v(x,y)=x^2+4xy-y^2+C.
$$

$f(0)=i$ より $C=1$ であるから、

$$
\boxed{v(x,y)=x^2+4xy-y^2+1}.
$$

#### (3)

実部と虚部をまとめると、

$$
\boxed{f(z)=(2+i)z^2+i}.
$$

### 2.

$$
z^2+2zi+3=(z-i)(z+3i).
$$

$C$ の内部にある極は $z=i$ のみである。その留数は

$$
\operatorname*{Res}_{z=i}
\frac{\cos z}{(z-i)(z+3i)}
=\frac{\cos i}{4i}
=\frac{\cosh1}{4i}.
$$

よって留数定理より

$$
\boxed{
\oint_C\frac{\cos z}{z^2+2zi+3}\,dz
=\frac{\pi}{2}\cosh1
}.
$$

### 3.

始点と終点に対応する媒介変数は $t=0$, $3\pi/2$ である。$x=\cos t$, $y=\sin t$, $z=2t$ を代入すると、

$$
\begin{aligned}
\boldsymbol v\mathbin{\cdot}d\boldsymbol r
&=\{2t(\cos^2t-\sin t)\}(-\sin t)\,dt\\
&+(2t\cos t\sin t)\cos t\,dt
+(t\cos^2t)\,2\,dt\\
&=2t\,dt.
\end{aligned}
$$

したがって、

$$
\boxed{
\int_C\boldsymbol v\mathbin{\cdot}d\boldsymbol r
=\int_0^{3\pi/2}2t\,dt
=\frac{9\pi^2}{4}
}.
$$

### 4.

#### (1)

$$
\begin{aligned}
F(\omega)
&=\int_0^\infty e^{-(1+i\omega)t}\,dt
+\int_{-\infty}^0e^{(1-i\omega)t}\,dt\\
&=\boxed{\frac{2}{1+\omega^2}}.
\end{aligned}
$$

#### (2)

Fourier 変換の双対性を (1) に適用すると、

$$
\boxed{
\int_{-\infty}^{\infty}
\frac{e^{-i\omega t}}{1+t^2}\,dt
=\pi e^{-|\omega|}
}.
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202208.pdf)
