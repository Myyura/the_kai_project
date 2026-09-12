---
sidebar_label: 2017年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Geometry.Complex-Plane-Geometry
---

# 京都大学 情報学研究科 システム科学専攻 2017年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1

$z=x+yi$ の関数 $g(z)=\sqrt{|xy|}$ および $h(z)=1/(x-yi)$ について、微分可能な点があればその微分係数を求めよ。また微分不可能な点ではそのことを証明せよ。$x,y$ は実数、$i$ は虚数単位とする。

### 問題2

複素変数 $z$ の関数

$$
f(z)=\frac1{z^{1/3}(z+1)}
$$

について答えよ。$f$ は実軸の正の部分を切断とする多価関数で、主値を $f_{\mathrm{PV}}$ と書く。主値は $0<\arg z<\pi/4$ で $\operatorname{Re}f_{\mathrm{PV}}(z)>0$ となるものとする。

(1) $z=re^{i\theta}$、$z\ne0,-1$ とおくとき、$f(z)$ のすべての値を $r,\theta$ を用いて表せ。

(2) $f_{\mathrm{PV}}$ の $z=-1$ における留数を求めよ。

(3) 次の $I(R)$ について $\lim_{R\to\infty}I(R)$ と $\lim_{R\to+0}I(R)$ を求めよ。

$$
I(R)=\int_0^{2\pi}f_{\mathrm{PV}}(Re^{i\theta})R\,d\theta.
$$

(4) $\int_0^\infty dx/[x^{1/3}(x+1)]$ を求めよ。

### 問題3

互いに相異なる複素数 $\alpha,\beta,\gamma$ を頂点とする三角形を考える。次式がこの三角形が正三角形であるための必要十分条件であることを示せ。

$$
\alpha^2+\beta^2+\gamma^2=\alpha\beta+\beta\gamma+\gamma\alpha.
$$

#### 题目描述

**问题1** 对 $z=x+yi$ 的函数 $g(z)=\sqrt{|xy|}$ 和 $h(z)=1/(x-yi)$，求所有复可微点及该点的导数，并证明其他点不可微。$x,y$ 为实数，$i$ 为虚数单位。

**问题2** 考虑

$$
f(z)=\frac1{z^{1/3}(z+1)}.
$$

以正实轴为割线，将主值记为 $f_{\mathrm{PV}}$；选取在 $0<\arg z<\pi/4$ 时满足 $\operatorname{Re}f_{\mathrm{PV}}(z)>0$ 的主值。

（1）令 $z=re^{i\theta}\ne0,-1$，用 $r,\theta$ 表示 $f(z)$ 的全部取值。（2）求主值在 $z=-1$ 处的留数。（3）对

$$
I(R)=\int_0^{2\pi}f_{\mathrm{PV}}(Re^{i\theta})R\,d\theta,
$$

求 $R\to\infty$ 和 $R\to+0$ 的极限。（4）求 $\int_0^\infty dx/[x^{1/3}(x+1)]$。

**问题3** 设复数 $\alpha,\beta,\gamma$ 两两不同。证明以它们为顶点的三角形是正三角形，当且仅当

$$
\alpha^2+\beta^2+\gamma^2=\alpha\beta+\beta\gamma+\gamma\alpha.
$$


## **Kai**

### 問題1

$g$ は実数値関数である。$xy\ne0$ では $g_x,g_y$ がともに $0$ にはならないので Cauchy–Riemann 方程式を満たさない。$x\ne0,y=0$ では $y$ 方向の差商の絶対値が $\sqrt{|x|/|t|}\to\infty$ となる。$x=0,y\ne0$ も同様である。原点では実軸方向の差商が $0$ なのに対し、$z=t(1+i)$、$t>0$ では

$$
\frac{g(t+it)-g(0)}{t+it}=\frac1{1+i}\ne0.
$$

したがって $g$ はどの点でも微分不可能である。

$h(z)=1/\bar z$ は $z\ne0$ で定義される。実方向と虚方向の差商はそれぞれ

$$
\lim_{t\to0}\frac{h(z+t)-h(z)}t=-\frac1{\bar z^2},\qquad
\lim_{t\to0}\frac{h(z+it)-h(z)}{it}=\frac1{\bar z^2}.
$$

一致しないので、定義域の全点で微分不可能である。$z=0$ では未定義。

### 問題2

(1)

$$
\boxed{f(z)=\frac{e^{-i(\theta+2k\pi)/3}}{r^{1/3}(1+re^{i\theta})},\quad k=0,1,2}.
$$

(2) 主値は $0<\arg z<2\pi$ とした $k=0$ の枝である。よって

$$
\boxed{\operatorname{Res}_{z=-1}f_{\mathrm{PV}}=e^{-i\pi/3}=\frac12-\frac{\sqrt3}{2}i}.
$$

(3) $|1+Re^{i\theta}|\ge|R-1|$ より

$$
|I(R)|\le\frac{2\pi R^{2/3}}{|R-1|}.
$$

したがって両極限とも $\boxed0$。

(4) 正実軸の上下を通る鍵穴型積分路を用いる。円弧上の積分も (3) と同じ評価で消える。求める実積分を $J$ とすると

$$
(1-e^{-2\pi i/3})J=2\pi i\,e^{-i\pi/3}.
$$

よって

$$
\boxed{J=\frac{2\pi}{\sqrt3}}.
$$

![正実軸を割線とする積分路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2018/sys_201708_engineering_math_keyhole.svg)

### 問題3

$w=(\alpha-\gamma)/(\beta-\gamma)$ とおく。与式は

$$
(\alpha-\gamma)^2-(\alpha-\gamma)(\beta-\gamma)+(\beta-\gamma)^2=0
$$

すなわち $w^2-w+1=0$ と同値である。したがって

$$
w=\frac12\pm\frac{\sqrt3}{2}i=e^{\pm i\pi/3}.
$$

これは $|\alpha-\gamma|=|\beta-\gamma|$ かつそのなす角が $\pi/3$ であることと同値なので、三角形が正三角形であるための必要十分条件である。

