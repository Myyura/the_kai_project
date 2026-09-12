---
sidebar_label: 2024年8月実施 複素関数論
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Fresnel-Integral-by-Contour-Rotation
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 複素関数論

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$e$ は自然対数の底、$\pi$ は円周率、$\log$ は実数に対する自然対数、$\mathbb Z$ は整数全体、$|z|$ は複素数の絶対値とする。

### 問題1
$z\ne0$ に対し $-\pi<\operatorname{Arg}z\le\pi$ とし、

$$
\operatorname{Log}z=\log|z|+i\operatorname{Arg}z,\qquad
\log z=\{\log|z|+i(\operatorname{Arg}z+2\pi k):k\in\mathbb Z\}
$$

と定義する。

(1) $\operatorname{Log}z$ が $|z|>0,-\pi<\operatorname{Arg}z<\pi$ の領域で正則であることを示せ。

(2) $\log(i^2),2\log i$ をそれぞれ求め、集合としての包含関係を示せ。

(3) $\cosh z=(e^z+e^{-z})/2$ とするとき、$\cosh z=1/2$ のすべての解を求めよ。

(4) $z\ne0,c\in\mathbb C$ に対し $z^c=e^{c\log z}$ と定める。$|i^c|$ が一価となるための $c$ の必要十分条件を求めよ。

### 問題2
(1) $0<\theta\le\pi/2$ のとき $2/\pi\le\sin\theta/\theta<1$ を示せ。

(2) 図の積分路 $C_R$ は原点から実軸上を $R$ まで進み、円弧で $Re^{i\pi/4}$ へ進み、直線で原点へ戻る。$\oint_{C_R}e^{-z^2}\,dz$ と $R\to\infty$ を用いて

$$
\int_0^\infty\cos(x^2)\,dx=\sqrt{\frac\pi8}
$$

を示せ。$\int_0^\infty e^{-x^2}\,dx=\sqrt\pi/2$ を用いてよい。
![積分路 C_R](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2025/sys_202408_complex_analysis_sector.svg)

(3) 任意の正の整数 $n$ について

$$
\int_0^\infty\cos(x^{2n})\,dx
=\cos\left(\frac\pi{4n}\right)\int_0^\infty e^{-x^{2n}}\,dx
$$

が成り立つことを示せ。

#### 题目描述

$i$ 为虚数单位，$e$ 为自然对数的底，$\pi$ 为圆周率，实数的 $\log$ 为自然对数，$\mathbb Z$ 为整数集，$|z|$ 为复数的模。

问题 1：对 $z\ne0$ 规定 $-\pi<\operatorname{Arg}z\le\pi$，定义

$$
\operatorname{Log}z=\log|z|+i\operatorname{Arg}z,\qquad
\log z=\{\log|z|+i(\operatorname{Arg}z+2\pi k):k\in\mathbb Z\}.
$$

（1）证明 $\operatorname{Log}z$ 在 $|z|>0,-\pi<\operatorname{Arg}z<\pi$ 内全纯。

（2）分别求 $\log(i^2)$ 与 $2\log i$，并说明两个集合的包含关系。

（3）定义 $\cosh z=(e^z+e^{-z})/2$，求方程 $\cosh z=1/2$ 的全部解。

（4）对 $z\ne0,c\in\mathbb C$ 定义 $z^c=e^{c\log z}$，求 $|i^c|$ 单值的充要条件。

问题 2：（1）证明当 $0<\theta\le\pi/2$ 时，$2/\pi\le\sin\theta/\theta<1$。

（2）上图路径 $C_R$ 由实轴上的 $0\to R$、圆弧 $R\to Re^{i\pi/4}$、线段 $Re^{i\pi/4}\to0$ 组成。利用 $\oint_{C_R}e^{-z^2}\,dz$ 及 $R\to\infty$ 证明 $\int_0^\infty\cos(x^2)\,dx=\sqrt{\pi/8}$。可使用 $\int_0^\infty e^{-x^2}\,dx=\sqrt\pi/2$。

（3）证明对任意正整数 $n$，

$$
\int_0^\infty\cos(x^{2n})\,dx=\cos(\pi/(4n))\int_0^\infty e^{-x^{2n}}\,dx.
$$

## **Kai**

### 問題1
(1) $z=x+iy$ とし $u=\frac12\log(x^2+y^2),v=\operatorname{Arg}z$ とおく。負の実軸と原点を除けば両者は $C^1$ 級で、

$$
u_x=v_y=\frac{x}{x^2+y^2},\qquad u_y=-v_x=\frac{y}{x^2+y^2}.
$$

従って Cauchy–Riemann 方程式により正則である。

(2) $\boxed{\log(i^2)=\{(2k+1)\pi i:k\in\mathbb Z\}}$、$\boxed{2\log i=\{(4k+1)\pi i:k\in\mathbb Z\}}$。従って $2\log i\subsetneq\log(i^2)$。

(3) $w=e^z$ とすれば $w^2-w+1=0$、すなわち $w=e^{\pm i\pi/3}$。よって

$$
\boxed{z=i(2k\pi\pm\pi/3),\quad k\in\mathbb Z}.
$$

(4) $c=a+ib$ とおくと

$$
|i^c|=\exp[-b(\pi/2+2k\pi)].
$$

これが $k$ によらない必要十分条件は $b=0$、すなわち $\boxed{c\in\mathbb R}$。

### 問題2
(1) $\sin\theta$ の $[0,\pi/2]$ における凹性より $\sin\theta\ge2\theta/\pi$。また $\theta-\sin\theta=\int_0^\theta(1-\cos t)\,dt>0$ だから上側の不等式も成り立つ。

(2) 円弧上 $z=Re^{it}$ の積分を $J_R$ とすると、$u=\pi/4-t$ と (1) により

$$
|J_R|\le R\int_0^{\pi/4}e^{-R^2\cos2t}\,dt
\le R\int_0^{\pi/4}e^{-4R^2u/\pi}\,du\le\frac\pi{4R}\to0.
$$

被積分関数は整関数なので閉曲線積分は零。斜辺を $z=re^{i\pi/4}$ と置けば

$$
\int_0^R e^{-x^2}\,dx+J_R-e^{i\pi/4}\int_0^R e^{-ir^2}\,dr=0.
$$

従って $\int_0^\infty e^{-ir^2}\,dr=e^{-i\pi/4}\sqrt\pi/2$。実部をとって $\boxed{\int_0^\infty\cos(x^2)\,dx=\sqrt{\pi/8}}$。

(3) 扇形の角度を $\alpha=\pi/(4n)$、被積分関数を $e^{-z^{2n}}$ に変える。円弧積分は

$$
|J_R|\le R\int_0^\alpha e^{-R^{2n}\sin(2nu)}\,du
\le\frac\pi{4n}R^{1-2n}\to0.
$$

従って

$$
\int_0^\infty e^{-x^{2n}}\,dx=e^{i\alpha}\int_0^\infty e^{-ix^{2n}}\,dx.
$$

両辺に $e^{-i\alpha}$ を掛けて実部をとれば所望の等式を得る。
