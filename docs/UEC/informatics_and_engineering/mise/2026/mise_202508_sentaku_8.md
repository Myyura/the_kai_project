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

### 問1

1. $z=re^{i\theta}$, $w=z^2=u+iv$ とする。極形式の Cauchy--Riemann 方程式を用いて $w$ が正則であることを示し、導関数を求めよ。
2. $z$ 平面上の $C_1:y=x^2$ と $C_2:y=1/x$ を $w=z^2$ で写す。交点 $z_0=1+i$ の像で、二つの像曲線の接線がなす大きい方の角を $\psi$ とするとき、$\tan\psi$ を求めよ。

### 問2

1. 反時計回りの円 $C:|z-i|=2$ に沿う積分
   $$
   \oint_C\frac{2(z-i)}{z(z-2i)}\,dz
   $$
   を求めよ。
2. 自然数 $n$ に対して $\displaystyle\int_0^{2\pi}\cos^{2n}\theta\,d\theta$ を求めよ。

### 题目描述

本题考查极坐标形式的 Cauchy--Riemann 方程、保角映射下的切线夹角、留数定理，以及偶次余弦幂的定积分。

## **Kai**

### 問1

#### (1)

$$
u=r^2\cos2\theta,\qquad v=r^2\sin2\theta.
$$

$r>0$ では

$$
u_r=\frac1r v_\theta=2r\cos2\theta,
\qquad
v_r=-\frac1r u_\theta=2r\sin2\theta
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
\left.\frac{d}{dx}(x+ix^2)^2\right|_{x=1}
=2(1+i)(1+2i)=-2+6i,
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
\operatorname*{Res}_{z=0}\frac{2(z-i)}{z(z-2i)}=1,
\qquad
\operatorname*{Res}_{z=2i}\frac{2(z-i)}{z(z-2i)}=1.
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
