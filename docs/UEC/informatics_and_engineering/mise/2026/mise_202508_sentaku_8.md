---
sidebar_label: 2025年8月実施 選択問題 8 応用数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Conformal-Mapping
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Calculus.Definite-Integral
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2025年8月実施 選択問題 8 応用数学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

虚数単位を $i$ で記す。以下の問 1、問 2 に答えよ。

**問 1.** つぎの小問に答えよ。ここで、自然対数の底を $e$ で記し、$z,w$ を複素数の変数、$x,y,u,v,r,\theta$ を実数の変数とする。

（1）$z=re^{i\theta}$ の関数 $w=z^2$ について、$w=u+iv$ とおく。極形式のコーシー・リーマンの方程式を用いて $w$ が任意の点で正則であることを示し、$w$ の導関数を求めよ。

（2）$z=x+iy$ とおく。$z$ 平面上の 2 曲線 $C_1:y=x^2$ と $C_2:y=1/x$ とは交点 $z_0=1+i$ で交わる。関数 $w=z^2$ により $w$ 平面に写される 2 曲線 $C_1$ と $C_2$ と交点 $z_0$ の像を順に $\Gamma_1,\Gamma_2,w_0$ とおく。$w$ 平面上で交点 $w_0$ での $\Gamma_1$ と $\Gamma_2$ の接線をそれぞれ $m_1,m_2$ とおき、$m_1$ と $m_2$ のなす角の大きいほうを $\psi$ とおくとき、$\tan\psi$ を求めよ。

**問 2.** つぎの小問に答えよ。ここで、積分路はすべて反時計回りとする。

（1）積分路 $C:|z-i|=2$ に沿った以下の 1 周線積分の値を求めよ。

$$
\oint_C\frac{2(z-i)}{z(z-2i)}\,dz
$$

（2）自然数 $n$ に対してつぎの定積分を求めよ。ここで、$\theta$ を実数の変数とする。

$$
\int_0^{2\pi}\cos^{2n}\theta\,d\theta
$$

キーワード：虚数単位 imaginary unit、自然対数の底 base of natural logarithm、複素数 complex number、変数 variable、実数 real number、関数 function、極形式 polar form、コーシー・リーマンの方程式 Cauchy-Riemann equations、任意の点 arbitrary point、正則 regular、導関数 derivative function、平面 plane、曲線 curved line、交点 point of intersection、像 image、接線 tangent line、角 angle、積分路 integral path、反時計回り counterclockwise、1 周線積分 one round line integral、値 value、自然数 natural number、定積分 definite integral。

#### 题目描述

以 $i$ 表示虚数单位，回答问题 1、2。

**问 1.** 回答下列小问。$e$ 为自然对数的底，$z,w$ 为复变量，$x,y,u,v,r,\theta$ 为实变量。

（1）对于 $z=re^{i\theta}$ 的函数 $w=z^2$，令 $w=u+iv$。利用极坐标形式的柯西—黎曼方程，证明 $w$ 在任意点全纯，并求 $w$ 的导函数。

（2）令 $z=x+iy$。$z$ 平面上的两条曲线 $C_1:y=x^2$ 与 $C_2:y=1/x$ 相交于 $z_0=1+i$。在映射 $w=z^2$ 下，$C_1,C_2,z_0$ 在 $w$ 平面上的像依次为 $\Gamma_1,\Gamma_2,w_0$。设 $\Gamma_1,\Gamma_2$ 在交点 $w_0$ 处的切线分别为 $m_1,m_2$，两切线所成的较大角为 $\psi$，求 $\tan\psi$。

**问 2.** 回答下列小问，积分路径均沿逆时针方向。

（1）求沿路径 $C:|z-i|=2$ 绕行一周的积分

$$
\oint_C\frac{2(z-i)}{z(z-2i)}\,dz.
$$

（2）对自然数 $n$，求定积分

$$
\int_0^{2\pi}\cos^{2n}\theta\,d\theta,
$$

其中 $\theta$ 为实变量。

## **Kai**

### 問1

#### (1)

$$
u=r^2\cos2\theta,\qquad v=r^2\sin2\theta.
$$

$r>0$ では

$$
\begin{gathered}
u_r=\frac1r v_\theta=2r\cos2\theta,\\
v_r=-\frac1r u_\theta=2r\sin2\theta
\end{gathered}
$$

が成立する。$z=0$ でも

$$
\lim_{z\to0}\frac{z^2}{z}=0
$$

より微分可能である。したがって $w=z^2$ は全平面で正則であり、

$$
\boxed{\frac{dw}{dz}=2z}.
$$

#### (2)

$w_0=(1+i)^2=2i$ である。$x$ を媒介変数とすると、

$$
\begin{gathered}
\left.\frac{d}{dx}(x+ix^2)^2\right|_{x=1}
=2(1+i)(1+2i)\\
=-2+6i,
\end{gathered}
$$

$$
\left.\frac{d}{dx}\left(x+\frac{i}{x}\right)^2\right|_{x=1}
=2(1+i)(1-i)=4.
$$

よって像曲線の接線の傾きは $m_1=-3$, $m_2=0$ である。大きい方の角について

$$
\boxed{\tan\psi=\frac{m_1-m_2}{1+m_1m_2}=-3}.
$$

### 問2

#### (1)

被積分関数の極 $0,2i$ はともに $C$ の内部にあり、各留数は

$$
\begin{gathered}
\operatorname*{Res}_{z=0}\frac{2(z-i)}{z(z-2i)}=1,\\
\operatorname*{Res}_{z=2i}\frac{2(z-i)}{z(z-2i)}=1.
\end{gathered}
$$

したがって留数定理より

$$
\boxed{\oint_C\frac{2(z-i)}{z(z-2i)}\,dz=4\pi i}.
$$

#### (2)

$I_n=\int_0^{2\pi}\cos^{2n}\theta\,d\theta$ とおく。部分積分により

$$
I_n=\frac{2n-1}{2n}I_{n-1},
\qquad I_0=2\pi.
$$

よって

$$
\boxed{
I_n=\frac{\pi(2n)!}{2^{2n-1}(n!)^2}
}.
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_7_m_choice202508.pdf)
