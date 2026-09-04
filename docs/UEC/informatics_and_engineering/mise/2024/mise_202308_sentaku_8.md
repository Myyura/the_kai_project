---
sidebar_label: 2023年8月実施 選択問題 応用数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Conformal-Mapping
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2023年8月実施 選択問題 応用数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

問1. $f(z)=\alpha z+\beta$ $(\alpha,\beta\in\mathbb R)$ とする。

1. $z_0$ を中心とする半径 $r>0$ の円周 $C_0$ を正方向に一周するとき、$I_0=\oint_{C_0}(z-z_0)^{-1}\,dz$ を求めよ。
2. 原点中心・半径 $2$ の円周 $C_2$ を正方向に一周するとき、
   $$
   \frac1{2\pi i}\oint_{C_2}\frac{f(z)}z\,dz=1,\qquad
   \frac1{2\pi i}\oint_{C_2}\frac{f(z)}{z-1}\,dz=3
   $$
   を満たす $\alpha,\beta$ を求めよ。
3. $a\in\mathbb C$ に対し、$C_a:z(t)=t+ia\sin(\pi t)$ $(0\le t\le1)$ に沿う $I(a)=\int_{C_a}f(z)\,dz$ を求めよ。

問2. $z=x+iy$ とする。正則関数 $f(z)=u(x,y)+iv(x,y)$ の Jacobian が $|f'(z)|^2$ であることを示せ。さらに、

$$
w=i\frac{1-z}{1+z}
$$

による単位円内部の像と Jacobian を求めよ。

### 题目描述

用 Cauchy 积分公式确定一次复函数并计算路径积分；证明全纯映射的 Jacobian 公式，再研究将单位圆盘映至上半平面的分式线性变换。

## **Kai**

### 問1

#### (1)

$z-z_0=re^{i\theta}$ とおけば、

$$
I_0=\int_0^{2\pi}\frac{ire^{i\theta}}{re^{i\theta}}\,d\theta
=\boxed{2\pi i}.
$$

#### (2)

Cauchy の積分公式より、二つの条件は

$$
f(0)=1,\qquad f(1)=3
$$

である。したがって、

$$
\boxed{\alpha=2,\qquad\beta=1},
\qquad f(z)=2z+1.
$$

#### (3)

$F(z)=z^2+z$ は $f$ の原始関数である。曲線 $C_a$ の始点と終点はそれぞれ $0,1$ であるから、

$$
\boxed{I(a)=F(1)-F(0)=2}.
$$

### 問2

#### (1)

Cauchy--Riemann の関係 $u_x=v_y,\ u_y=-v_x$ より、

$$
\begin{aligned}
J
&=u_xv_y-u_yv_x\\
&=u_x^2+u_y^2
=\boxed{|f'(z)|^2}.
\end{aligned}
$$

#### (2)

分母を実数化すると、

$$
w=
\frac{2y+i(1-x^2-y^2)}
{(1+x)^2+y^2}.
$$

$|z|<1$ ならば

$$
\operatorname{Im}w
=\frac{1-x^2-y^2}{(1+x)^2+y^2}>0,
$$

ゆえに像は上半平面に含まれる。逆変換

$$
z=\frac{i-w}{i+w}
$$

により上半平面の各点は $|z|<1$ に対応するので、像は上半平面全体である。

また、

$$
f'(z)=-\frac{2i}{(1+z)^2}
$$

より、

$$
\boxed{
J=|f'(z)|^2
=\frac{4}{\bigl((1+x)^2+y^2\bigr)^2}}.
$$
