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

1. $u(x,y)=2x^2-2y^2-2xy$ を実部とし、$f(0)=i$ を満たす正則関数 $f(z)$ を求めよ。
2. 原点中心、半径 $2$ の円を反時計回りに一周する閉曲線 $C$ に対し、
   $$
   \oint_C\frac{\cos z}{z^2+2zi+3}\,dz
   $$
   を求めよ。
3. $r(t)=(\cos t,\sin t,2t)$ 上で、$(1,0,0)$ から $(0,-1,3\pi)$ までのベクトル場
   $$
   \boldsymbol v=(x^2z-yz)\boldsymbol i+xyz\boldsymbol j
   +\frac12x^2z\boldsymbol k
   $$
   の線積分を求めよ。
4. 定義
   $$
   F(\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt
   $$
   のもとで、$e^{-|t|}$ と $1/(t^2+1)$ の Fourier 変換を求めよ。

### 题目描述

求给定实部的解析函数；用留数定理计算圆周积分；计算参数曲线上的向量场线积分；最后在指定约定下求两个函数的 Fourier 变换。

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
v_x=-u_y=2x+4y,\qquad v_y=u_x=4x-2y.
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
&\quad +(2t\cos t\sin t)\cos t\,dt
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
