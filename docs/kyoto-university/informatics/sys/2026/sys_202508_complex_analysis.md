---
sidebar_label: 2025年8月実施 複素関数論
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---
# 京都大学 情報学研究科 システム科学専攻 2025年8月実施 複素関数論

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$e$ は自然対数の底、$\pi$ は円周率、$\mathbb Z$ は整数全体とする。$\operatorname{Re}z,\operatorname{Im}z$ は複素数 $z$ の実部と虚部を表す。

### 問題1
(1) $\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$ と定義する。$\tanh z=-3$ の解をすべて求めよ。

(2) $x=\operatorname{Re}z,y=\operatorname{Im}z$ とおく。実定数 $a$ に対し $f_a(z)=x^2+ay^2$ が複素平面上のある領域で正則となる $a$ が存在するか。存在すれば $a$ とその領域を、存在しなければその証明を与えよ。

(3) $\displaystyle f(z)=\sum_{n=0}^\infty\frac{z^{2n}}{(2n)!}$ の収束半径と $f(\pi i)$ を求めよ。ただし $0!=1$ とする。

### 問題2
複素数パラメータ $\xi$ に対し

$$
f(z)=\frac{e^{-2\pi iz\xi}}{\cosh\pi z},\qquad\cosh z=\frac{e^z+e^{-z}}2
$$

とおく。$\xi\ne ni/2$ ($n\in\mathbb Z$) として、$\int_{-\infty}^\infty f(x)\,dx$ を $\xi$ の関数として求めたい。$R>0$ に対し $C_R$ は、頂点 $-R,R,R+2i,-R+2i$ をこの順に通る反時計回りの長方形であり、各辺を順に $C_1,C_2,C_3,C_4$ とする。
![積分路 C_R](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2026/sys_202508_complex_analysis_contour.svg)

(1) 複素数 $\alpha$ に対し $\displaystyle\lim_{z\to\alpha}\frac{z-\alpha}{e^{\pi z}-e^{\pi\alpha}}$ を求めよ。

(2) $C_R$ の内部にある $f$ のすべての極の位数と留数を求めよ。

(3) $I_R=\int_{C_1}f(z)\,dz$ とおく。$\int_{C_3}f(z)\,dz$ を $I_R$ で表せ。

(4) $\int_{-\infty}^\infty f(x)\,dx$ を求めよ。$C_2,C_4$ 上の積分は $R\to\infty$ で $0$ となることを導出なしに用いてよい。

#### 题目描述

$i$ 为虚数单位，$e$ 为自然对数的底，$\pi$ 为圆周率，$\mathbb Z$ 为整数集，$\operatorname{Re}z,\operatorname{Im}z$ 分别为实部与虚部。

问题 1：（1）定义 $\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$，求 $\tanh z=-3$ 的全部解。

（2）令 $x=\operatorname{Re}z,y=\operatorname{Im}z$。判断是否存在实常数 $a$，使 $f_a(z)=x^2+ay^2$ 在复平面的某个区域内全纯；若存在，给出 $a$ 与该区域，否则证明不存在。

（3）求 $f(z)=\sum_{n=0}^\infty z^{2n}/(2n)!$ 的收敛半径与 $f(\pi i)$，其中 $0!=1$。

问题 2：对复参数 $\xi\ne ni/2$（$n\in\mathbb Z$），令

$$
f(z)=e^{-2\pi iz\xi}/\cosh(\pi z),\qquad\cosh z=(e^z+e^{-z})/2.
$$

拟求 $\int_{-\infty}^{\infty}f(x)\,dx$ 关于 $\xi$ 的表达式。$R>0$，矩形闭合路径 $C_R$ 依次经过 $-R,R,R+2i,-R+2i$，逆时针走一周；四条边依次记作 $C_1,C_2,C_3,C_4$（见上图）。

（1）求 $\lim_{z\to\alpha}(z-\alpha)/(e^{\pi z}-e^{\pi\alpha})$，其中 $\alpha$ 为复数。

（2）求 $C_R$ 内全部极点的阶数和留数。

（3）令 $I_R=\int_{C_1}f(z)\,dz$，用 $I_R$ 表示 $C_3$ 上的积分。

（4）求上述实轴积分；允许直接使用两侧竖边积分在 $R\to\infty$ 时趋于 $0$ 的结论。

## **Kai**

### 問題1
(1) $4e^{2z}=-2$ より

$$
\boxed{z=-\frac{\log2}{2}+i\left(\frac\pi2+k\pi\right),\quad k\in\mathbb Z}.
$$

これらでは $e^{2z}+1=1/2\ne0$ なので元の式も満たす。

(2) 実部 $u=x^2+ay^2$、虚部 $v=0$ に Cauchy–Riemann 方程式を適用すると $2x=0,2ay=0$ が必要となる。しかし開領域が直線 $x=0$ に含まれることはない。従ってそのような $a$ は存在しない。

(3) 隣接項の絶対値比は $|z|^2/((2n+2)(2n+1))\to0$。従って収束半径は $\infty$。$f(z)=(e^z+e^{-z})/2$ より $\boxed{f(\pi i)=-1}$。

### 問題2
(1) 指数関数の微分より $\boxed{e^{-\pi\alpha}/\pi}$。

(2) $\cosh\pi z=0$ は $z=i(k+1/2)$。内部の二極 $i/2,3i/2$ は単純極で、

$$
\operatorname{Res}(f,i/2)=\frac{e^{\pi\xi}}{\pi i},\qquad
\operatorname{Res}(f,3i/2)=-\frac{e^{3\pi\xi}}{\pi i}.
$$

(3) $f(x+2i)=e^{4\pi\xi}f(x)$ であり上辺の向きが逆だから、$\boxed{\int_{C_3}f\,dz=-e^{4\pi\xi}I_R}$。

(4) 留数定理と両側辺の極限より

$$
(1-e^{4\pi\xi})I=2(e^{\pi\xi}-e^{3\pi\xi}),\qquad
\boxed{I=\frac{2e^{\pi\xi}}{1+e^{2\pi\xi}}=\frac1{\cosh\pi\xi}}.
$$

通常の広義積分としてこの式が成り立つ範囲は $|\operatorname{Im}\xi|<1/2$ である。実際、$\xi=u+iv$ とすれば被積分関数の絶対値は $e^{2\pi vx}/\cosh\pi x$ であり、この条件下で両端とも指数的に減衰する。範囲外では広義積分は収束せず、右辺は解析接続としての値となる。
