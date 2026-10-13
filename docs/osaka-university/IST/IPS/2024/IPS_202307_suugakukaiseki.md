---
sidebar_label: "2023年7月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Fourier-Transform-Scaling-and-Frequency-Shift
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Integrating-Factor
  - Mathematics.Differential-Equations.Characteristic-Roots-and-Stability
---

# 大阪大学 情報科学研究科 情報数理学専攻 2023年7月実施 情報数理学 数学解析

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### 1. 絶対値が一定の整関数

複素関数 $f(z)$ は複素平面全体で微分可能であるとする。$|f(z)|$ が定数ならば、$f(z)$ も定数であることを示せ。

### 2. 留数とフーリエ変換

以下の問いに答えよ。

(1) 実定数 $u$ に対し、複素関数

$$
g(z)=\frac{2e^{-2\pi iuz}}{e^{\pi z}+e^{-\pi z}}
$$

を考える。$R>0$ とし、線分 $[-R,R]$、$[R,R+2i]$、$[R+2i,-R+2i]$、$[-R+2i,-R]$ をこの順にたどる反時計回りの長方形積分路を $C_R$ とする。複素積分

$$
I_{C_R}=\int_{C_R}g(z)\,dz
$$

を求めよ。

(2) (1) の $g$ について、

$$
\int_{-\infty}^{\infty}g(x)\,dx
=\frac{2}{e^{\pi u}+e^{-\pi u}}
$$

を示せ。

(3) 実関数

$$
h(x)=\frac{2}{e^{\sqrt{\pi/2}\,x}+e^{-\sqrt{\pi/2}\,x}}
$$

のフーリエ変換を

$$
\widehat h(w)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}h(t)e^{-iwt}\,dt,
\qquad -\infty<w<\infty
$$

で定める。このとき $\widehat h(w)=h(w)$ を示せ。

### 3. 線形微分方程式と解の極限

微分方程式

$$
pq\frac{d^2x}{dt^2}+(p+q)\frac{dx}{dt}+x=w(t)
$$

とその解 $x(t)$ について考える。ただし、$p>0$、$q>0$ であり、$w(t)$ は連続な関数である。以下の問いに答えなさい。

(1) $w(t)=1-e^{-t}$、$pq=1$ であるときの一般解を求めなさい。

(2) $y=p\dfrac{dx}{dt}+x$ とおき、$x$ の微分方程式を $y$ の微分方程式に書き換えなさい。

(3) $\displaystyle\lim_{t\to\infty}w(t)$ が存在すれば、$\displaystyle\lim_{t\to\infty}x(t)$ も存在することを示しなさい。

#### 题目描述

**1. 模恒定的整函数。** 设复函数 $f(z)$ 在整个复平面上可微。证明：若 $|f(z)|$ 是常数，则 $f(z)$ 也是常数。

**2. 留数与傅里叶变换。** 回答下列问题。

(1) 设 $u$ 为实常数，$g(z)=2e^{-2\pi iuz}/(e^{\pi z}+e^{-\pi z})$。对任意 $R>0$，令 $C_R$ 为依次连接 $-R$、$R$、$R+2i$、$-R+2i$ 并返回 $-R$ 的逆时针矩形闭合路径。求 $I_{C_R}=\int_{C_R}g(z)\,dz$。

(2) 证明对所有实数 $u$，

$$
\int_{-\infty}^{\infty}g(x)\,dx=\frac{2}{e^{\pi u}+e^{-\pi u}}.
$$

(3) 设 $h(x)=2/(e^{\sqrt{\pi/2}\,x}+e^{-\sqrt{\pi/2}\,x})$。采用傅里叶变换定义

$$
\widehat h(w)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}h(t)e^{-iwt}\,dt,
$$

证明对所有 $w\in\mathbb R$ 都有 $\widehat h(w)=h(w)$。

**3. 线性微分方程与解的极限。** 考虑微分方程

$$
pq\frac{d^2x}{dt^2}+(p+q)\frac{dx}{dt}+x=w(t)
$$

及其解 $x(t)$，其中 $p>0$、$q>0$，$w(t)$ 为连续函数。

(1) 当 $w(t)=1-e^{-t}$、$pq=1$ 时，求一般解。

(2) 令 $y=p\dfrac{dx}{dt}+x$，将关于 $x$ 的微分方程改写为关于 $y$ 的微分方程。

(3) 证明：若 $\displaystyle\lim_{t\to\infty}w(t)$ 存在，则 $\displaystyle\lim_{t\to\infty}x(t)$ 也存在。

## **Kai**

### 1. 絶対値が一定の整関数

$|f(z)|=M\ge0$ とおく。$f$ は整関数なので、原点を中心として

$$
f(z)=\sum_{n=0}^{\infty}c_nz^n,\qquad
c_n=\frac{f^{(n)}(0)}{n!}
$$

と全平面で展開できる。コーシーの積分公式より、任意の $r>0$ と $n\ge1$ に対して

$$
c_n=\frac1{2\pi i}\oint_{|z|=r}\frac{f(z)}{z^{n+1}}\,dz
$$

である。したがって

$$
|c_n|
\le\frac1{2\pi}\oint_{|z|=r}\frac{M}{r^{n+1}}\,|dz|
=\frac{M}{r^n}.
$$

$r\to\infty$ とすれば $c_n=0\ (n\ge1)$ となる。よって

$$
\boxed{f(z)\equiv c_0=f(0)}
$$

であり、$f$ は定数関数である。

### 2. 留数とフーリエ変換

#### (1)

分母が零となる点は

$$
e^{2\pi z}=-1
\quad\Longleftrightarrow\quad
z=i\left(k+\frac12\right),\qquad k\in\mathbb Z
$$

である。$C_R$ の内部には $z_1=i/2$、$z_2=3i/2$ のみがあり、いずれも単純極である。留数は

$$
\operatorname{Res}(g;z_j)
=\frac{2e^{-2\pi iuz_j}}
{\pi(e^{\pi z_j}-e^{-\pi z_j})}
$$

より

$$
\operatorname{Res}(g;i/2)=\frac{e^{\pi u}}{\pi i},\qquad
\operatorname{Res}(g;3i/2)=-\frac{e^{3\pi u}}{\pi i}.
$$

したがって留数定理から

$$
\boxed{I_{C_R}=2\pi i\left(\frac{e^{\pi u}-e^{3\pi u}}{\pi i}\right)
=2(e^{\pi u}-e^{3\pi u})}.
$$

#### (2)

$J_R(u)=\int_{-R}^R g(x)\,dx$ とおく。$g(x+2i)=e^{4\pi u}g(x)$ なので、上辺の積分は $-e^{4\pi u}J_R(u)$ となる。

両側の縦辺上では $z=\pm R+iy$、$0\le y\le2$ であり、

$$
|g(\pm R+iy)|
\le\frac{2e^{2\pi uy}}{e^{\pi R}-e^{-\pi R}}
\le\frac{2\max\{1,e^{4\pi u}\}}{e^{\pi R}-e^{-\pi R}}.
$$

各縦辺の長さは $2$ なので、その積分の絶対値は

$$
\frac{4\max\{1,e^{4\pi u}\}}{e^{\pi R}-e^{-\pi R}}
$$

以下であり、$R\to\infty$ で $0$ に収束する。また、実軸上では $|g(x)|=2/(e^{\pi x}+e^{-\pi x})$ が可積分である。したがって $J(u)=\int_{-\infty}^{\infty}g(x)\,dx$ とすると、(1) より

$$
(1-e^{4\pi u})J(u)=2(e^{\pi u}-e^{3\pi u}).
$$

$u\ne0$ ならば

$$
J(u)=\frac{2e^{\pi u}(1-e^{2\pi u})}
{(1-e^{2\pi u})(1+e^{2\pi u})}
=\frac{2}{e^{\pi u}+e^{-\pi u}}.
$$

$u=0$ では $v=e^{\pi x}$ と置換して

$$
J(0)=\frac2\pi\int_0^\infty\frac{dv}{1+v^2}=1
$$

となり、同じ式が成立する。よって任意の実数 $u$ に対して

$$
\boxed{\int_{-\infty}^{\infty}g(x)\,dx
=\frac{2}{e^{\pi u}+e^{-\pi u}}}.
$$

#### (3)

$t=\sqrt{2\pi}\,x$ と置換すると

$$
\begin{aligned}
\widehat h(w)
&=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}
\frac{2e^{-iwt}}{e^{\sqrt{\pi/2}\,t}+e^{-\sqrt{\pi/2}\,t}}\,dt\\
&=\int_{-\infty}^{\infty}
\frac{2e^{-i\sqrt{2\pi}\,wx}}{e^{\pi x}+e^{-\pi x}}\,dx.
\end{aligned}
$$

(2) において $u=w/\sqrt{2\pi}$ とすれば

$$
\boxed{\widehat h(w)
=\frac{2}{e^{\sqrt{\pi/2}\,w}+e^{-\sqrt{\pi/2}\,w}}
=h(w)}.
$$

### 3. 線形微分方程式と解の極限

#### (1)

$pq=1$ のとき、特性方程式は

$$
\lambda^2+(p+q)\lambda+1
=(\lambda+p)(\lambda+q)=0
$$

である。

**$p\ne q$ の場合。** $p,q>0$、$pq=1$ より $p+q>2$ である。特殊解を $x_0(t)=1+Ae^{-t}$ とおくと、

$$
x_0''+(p+q)x_0'+x_0
=1+(2-p-q)Ae^{-t}=1-e^{-t}
$$

から $A=1/(p+q-2)$ を得る。したがって、一般解は

$$
\boxed{
x(t)=C_1e^{-pt}+C_2e^{-qt}
+1+\frac{e^{-t}}{p+q-2}
}\qquad(C_1,C_2\in\mathbb R).
$$

**$p=q$ の場合。** $pq=1$ より $p=q=1$ であり、特性根は $-1$ の重根となる。

$$
x_0(t)=1-\frac{t^2}{2}e^{-t}
$$

が特殊解であるから、一般解は

$$
\boxed{
x(t)=1+\left(C_1+C_2t-\frac{t^2}{2}\right)e^{-t}
}\qquad(C_1,C_2\in\mathbb R).
$$

#### (2)

$y=px'+x$ より $y'=px''+x'$ である。したがって、

$$
qy'+y=pqx''+(p+q)x'+x=w(t).
$$

よって、求める方程式は

$$
\boxed{q\frac{dy}{dt}+y=w(t)}.
$$

#### (3)

まず、$a>0$、$u(t)\to L$ のとき、方程式 $az'+z=u(t)$ の解が $z(t)\to L$ を満たすことを示す。

任意の $\varepsilon>0$ に対して、$t\ge T$ ならば $|u(t)-L|\le\varepsilon$ となる $T$ を取る。積分因子を用いると、$t\ge T$ に対して

$$
z(t)-L
=e^{-(t-T)/a}\bigl(z(T)-L\bigr)
+\frac1a\int_T^t e^{-(t-s)/a}\bigl(u(s)-L\bigr)\,ds.
$$

したがって、

$$
\begin{aligned}
|z(t)-L|
&\le e^{-(t-T)/a}|z(T)-L|
+\frac{\varepsilon}{a}\int_T^t e^{-(t-s)/a}\,ds\\
&=e^{-(t-T)/a}|z(T)-L|
+\varepsilon\bigl(1-e^{-(t-T)/a}\bigr).
\end{aligned}
$$

$a>0$ であるから、

$$
0\le\limsup_{t\to\infty}|z(t)-L|\le\varepsilon.
$$

$\varepsilon$ は任意なので、$z(t)\to L$ である。

ここで $L=\lim_{t\to\infty}w(t)$ とする。(2) の $qy'+y=w(t)$ に上の結果を適用すると、$y(t)\to L$ を得る。さらに $px'+x=y(t)$ に同じ結果を適用して、

$$
\boxed{\lim_{t\to\infty}x(t)=L
=\lim_{t\to\infty}w(t)}
$$

が従う。

## **Reference**

- [大阪大学公式：令和6年度 情報数理学専攻 入学者選抜試験問題（2023年7月29日実施、数学解析：PDF 6ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/IPS_nyushi_2024_JA.pdf)
