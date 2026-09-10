---
sidebar_label: '2020年8月実施 数学3'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Mobius-Transformation
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 東京大学 工学系研究科 2020年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_3.pdf)

### I.
$|m|=1,m\ne1$ とし、$M(z)=mz/(mz-z+1)$ を考える。(1) 全不動点、(2) $M'(0)$、(3) 円 $|z-(1-i)/2|=1/\sqrt2$ が実軸に写るための $m$ を求める。

### II.
$0<\alpha<\pi/2$ とする。$J(z)=e^{-i\alpha}z+e^{i\alpha}z^{-1}$ の虚部が正になる $z\ne0$ の条件を求め、その領域を図示する。

### III.
$0<\beta<1$、$f(z)=z^\beta/(z^2+1)^2$ とする。$0<r<1<R$ に対し、閉路を $r\to R$ の線分 $C_1$、上半円 $R\to-R$ の $C_R$、線分 $-R\to-r$ の $C_2$、上半円 $-r\to r$ の $C_r$ と定める。

1. 留数から $\oint_C f(z)dz$ を求める。
2. $C_1,C_2$ の積分和を $\int_r^R x^\beta/(x^2+1)^2dx$ で表す。
3. $C_R$ の積分の $R\to\infty$ の極限を求める。
4. $C_r$ の積分の $r\to0$ の極限を求める。
5. 上の結果から $\int_0^\infty x^\beta/(x^2+1)^2dx$ を計算する。

![上半圆环积分围道及方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/kyotsu_202008_math_3_contour.svg)

#### 题目描述

I. 设 $|m|=1,m\ne1$，$M(z)=mz/(mz-z+1)$。
(1) 求全部不动点。(2) 求 $M'(0)$。(3) 求使圆 $|z-(1-i)/2|=1/\sqrt2$ 映到实轴的 $m$。

II. 设 $0<\alpha<\pi/2$。求使 $J(z)=e^{-i\alpha}z+e^{i\alpha}z^{-1}$ 虚部为正的 $z\ne0$ 的条件，并图示区域。

III. 对 $0<\beta<1$，令 $f(z)=z^\beta/(z^2+1)^2$。取 $0<r<1<R$，闭路依次由线段 $C_1:r\to R$、上半圆 $C_R:R\to-R$、线段 $C_2:-R\to-r$、上半圆 $C_r:-r\to r$ 组成。
(1) 用留数求闭路积分。
(2) 用 $\int_r^R x^\beta/(x^2+1)^2\,dx$ 表示两线段积分之和。
(3) 求 $R\to\infty$ 时 $C_R$ 的积分极限。
(4) 求 $r\to0$ 时 $C_r$ 的积分极限。
(5) 由上述结果求 $\int_0^\infty x^\beta/(x^2+1)^2\,dx$。

## **Kai**

### I

#### 1–2

$M(z)=z$ より $(m-1)z(z-1)=0$。従って不動点は $\boxed{0,1}$ である。
また、

$$
M'(z)=\frac{m}{((m-1)z+1)^2},\qquad \boxed{M'(0)=m}.
$$

#### 3

与えられた円は $0,1,-i$ を通る。一次分数変換は広義の円を広義の円に写し、初めの二点は固定されるため、$M(-i)$ が実数となればよい。
$m=u+iv$、$u^2+v^2=1$ とおくと、

$$
\operatorname{Im}M(-i)=-\frac{u+v}{(1+v)^2+(1-u)^2}.
$$

分母は零でないから $u+v=0$ となり、

$$
\boxed{m=\pm\frac{1-i}{\sqrt2}}.
$$

円上の極は拡張実軸の無限遠点に対応する。

### II

$z=re^{i\theta}$ とおくと、

$$
\operatorname{Im}J(z)=(r-r^{-1})\sin(\theta-\alpha).
$$

従って求める領域は

$$
\boxed{\{r>1,\ \alpha<\theta<\alpha+\pi\}
\ \cup\ \{0<r<1,\ \sin(\theta-\alpha)<0\}}.
$$

すなわち単位円の外で直線 $y=x\tan\alpha$ より上の部分と、単位円の内で同直線より下の部分である。境界と原点は含まない。

![J(z)の虚部が正となる領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/kyotsu_202008_math_3_region.svg)

### III

$z^\beta=e^{\beta(\log|z|+i\arg z)}$ とし、上半平面で $0<\arg z<\pi$、実軸では上側極限を用いる。

#### 1

経路内の極は二位の極 $z=i$ のみで、その留数は

$$
\operatorname{Res}_{z=i}f
=\left.\frac d{dz}\frac{z^\beta}{(z+i)^2}\right|_{z=i}
=\frac{1-\beta}{4}i^{\beta-1}.
$$

従って、

$$
\boxed{\oint_C f(z)\,dz=\frac{\pi(1-\beta)}2e^{i\pi\beta/2}}.
$$

#### 2

負の実軸上で $(-x)^\beta=e^{i\pi\beta}x^\beta$、$C_2$ は $-R$ から $-r$ に向かうので、

$$
\boxed{\int_{C_1}f\,dz+\int_{C_2}f\,dz
=(1+e^{i\pi\beta})\int_r^R\frac{x^\beta}{(x^2+1)^2}\,dx}.
$$

#### 3–4

弧長による評価から、

$$
\left|\int_{C_R}f\,dz\right|
\le\frac{\pi R^{\beta+1}}{(R^2-1)^2}\longrightarrow0,
\qquad
\left|\int_{C_r}f\,dz\right|
\le\frac{\pi r^{\beta+1}}{(1-r^2)^2}\longrightarrow0.
$$

#### 5

$R\to\infty,r\to0$ とし、
$1+e^{i\pi\beta}=2e^{i\pi\beta/2}\cos(\pi\beta/2)$ を用いると、

$$
\boxed{\int_0^\infty\frac{x^\beta}{(x^2+1)^2}\,dx
=\frac{\pi(1-\beta)}{4\cos(\pi\beta/2)}}.
$$

