---
sidebar_label: 2024年8月実施 数学 第1問
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Householder-Transformation
  - Mathematics.Linear-Algebra.Affine-Transformation
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Calculus.Extrema
---
# 東京大学 情報理工学系研究科 2024年8月実施 数学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2次元平面の直線 $\alpha x+\beta y+\gamma=0$ に対し、列ベクトル $(\alpha,\beta,\gamma)^{\mathsf T}$ を係数ベクトルと呼ぶ。$(x,y)$ は直線上の点のデカルト座標である。解答中の係数ベクトルは $\alpha^2+\beta^2=1$ を満たすものとする。

(1) 点 $\boldsymbol a$ を通り、単位ベクトル $\boldsymbol v$ に垂直な直線の係数ベクトルをひとつ求めよ。

(2) 点 $\boldsymbol b$ を通り、単位ベクトル $\boldsymbol n$ に垂直な直線を $\mathrm B$ とする。直線 $\mathrm A$ を $\mathrm B$ に関して鏡像変換した直線を $\mathrm A'$ とする。$\mathrm A$ の係数ベクトルを $\mathrm A'$ の係数ベクトルに変換する $3\times3$ 行列をひとつ求め、$\boldsymbol b,\boldsymbol n$ を用いて表せ。

(3) (2) の行列の行列式を求めよ。

(4) 実数 $t$ に対し、係数ベクトル $(4t,4t^2-1,t)^{\mathsf T}$ を持つ直線 $\mathrm D_t$ は、$t$ によらずある一点を通る。その点の座標を求めよ。

(5) $t$ に応じて変化する直線 $\mathrm M_t$ に関する鏡像変換により、$\mathrm D_t$ が係数ベクトル $(0,1,-t)^{\mathsf T}$ の直線に移るとする。$\mathrm M_t$ の係数ベクトル $(\alpha_t,\beta_t,\gamma_t)^{\mathsf T}$ を求めよ。ただし $t>0$ では $\alpha_t>0,\ \beta_t>0$ とする。

(6) $t$ が $0$ から $+\infty$ まで変化するとき、(5) の直線 $\mathrm M_t$ が存在し得る領域を簡潔な数式で表し、図示せよ。

#### 题目描述

在二维平面上，将直线 $\alpha x+\beta y+\gamma=0$ 的列向量 $(\alpha,\beta,\gamma)^{\mathsf T}$ 称为系数向量。解答中的系数向量须满足 $\alpha^2+\beta^2=1$。

（1）求一个经过点 $\boldsymbol a$、垂直于单位向量 $\boldsymbol v$ 的直线的系数向量。

（2）直线 $\mathrm B$ 经过点 $\boldsymbol b$ 且垂直于单位向量 $\boldsymbol n$。直线 $\mathrm A$ 关于 $\mathrm B$ 的镜像为 $\mathrm A'$。用 $\boldsymbol b,\boldsymbol n$ 表示一个将 $\mathrm A$ 的系数向量变换为 $\mathrm A'$ 的系数向量的 $3\times3$ 矩阵。

（3）求（2）中矩阵的行列式。

（4）直线 $\mathrm D_t$ 的系数向量为 $(4t,4t^2-1,t)^{\mathsf T}$。求它对所有实数 $t$ 都经过的定点。

（5）关于直线 $\mathrm M_t$ 的镜像变换将 $\mathrm D_t$ 变为系数向量 $(0,1,-t)^{\mathsf T}$ 的直线。求 $\mathrm M_t$ 的系数向量 $(\alpha_t,\beta_t,\gamma_t)^{\mathsf T}$，其中 $t>0$ 时要求 $\alpha_t>0,\ \beta_t>0$。

（6）当 $t$ 从 $0$ 变化到 $+\infty$ 时，用简洁的数学表达式描述 $\mathrm M_t$ 扫过的区域，并画图。

## **Kai**

### (1)

直線の方程式は $\boldsymbol v^{\mathsf T}(\boldsymbol x-\boldsymbol a)=0$ である。よって、求める係数ベクトルのひとつは

$$
\boxed{\begin{pmatrix}\boldsymbol v\\-\boldsymbol v^{\mathsf T}\boldsymbol a\end{pmatrix}}.
$$

### (2)

$H=I_2-2\boldsymbol n\boldsymbol n^{\mathsf T}$、$\boldsymbol c=2\boldsymbol n(\boldsymbol n^{\mathsf T}\boldsymbol b)$ とおく。点の鏡像変換は

$$
\boldsymbol x'=H\boldsymbol x+\boldsymbol c,
\qquad
\boldsymbol x=H\boldsymbol x'+\boldsymbol c
$$

である。直線 $\boldsymbol u^{\mathsf T}\boldsymbol x+\gamma=0$ に代入すると、

$$
(H\boldsymbol u)^{\mathsf T}\boldsymbol x'
+\boldsymbol c^{\mathsf T}\boldsymbol u+\gamma=0.
$$

したがって、求める行列は

$$
\boxed{
Q=\begin{pmatrix}
I_2-2\boldsymbol n\boldsymbol n^{\mathsf T}&\boldsymbol 0\\
2(\boldsymbol n^{\mathsf T}\boldsymbol b)\boldsymbol n^{\mathsf T}&1
\end{pmatrix}}.
$$

$H$ は直交行列なので、法線ベクトルの長さ $1$ は保たれる。

### (3)

$H\boldsymbol n=-\boldsymbol n$ であり、$\boldsymbol n$ に垂直な方向では $H$ の固有値は $1$ である。ゆえに

$$
\boxed{\det Q=\det H=-1}.
$$

### (4)

定点 $(x,y)$ は恒等式

$$
4yt^2+(4x+1)t-y=0
$$

を満たす。係数比較により $y=0,\ 4x+1=0$ だから、

$$
\boxed{(x,y)=\left(-\frac14,0\right)}.
$$

### (5)

$\mathrm D_t$ の法線の長さは

$$
\sqrt{(4t)^2+(4t^2-1)^2}=4t^2+1.
$$

鏡軸は $\mathrm D_t$ と $y=t$ の角の二等分線なので、$t>0$ において

$$
\frac{4tx+(4t^2-1)y+t}{4t^2+1}\pm(y-t)=0.
$$

両法線成分を正にできるのは $+$ の場合であり、整理すると

$$
\mathrm M_t:\quad x+2ty-t^2=0.
$$

よって

$$
\boxed{
\begin{pmatrix}\alpha_t\\\beta_t\\\gamma_t\end{pmatrix}
=\frac1{\sqrt{1+4t^2}}
\begin{pmatrix}1\\2t\\-t^2\end{pmatrix}}.
$$

この式は全実数 $t$ で鏡像変換の条件を満たす。$t=0$ では、この直線族の連続な延長として $\mathrm M_0:x=0$ を取る。

### (6)

$(x,y)\in\mathrm M_t$ は $x=t^2-2yt$ と同値である。$t\ge0$ における右辺の最小値は

$$
\min_{t\ge0}(t^2-2yt)
=\begin{cases}
-y^2,&y\ge0,\\
0,&y<0.
\end{cases}
$$

右辺は最小値から $+\infty$ までの全値を取るので、求める領域は

$$
\boxed{
\{(x,y):y\ge0,\ x\ge-y^2\}
\ \cup\
\{(x,y):y<0,\ x\ge0\}}.
$$

境界は放物線 $x=-y^2$ の $y\ge0$ の部分と、半直線 $x=0,\ y\le0$ である。いずれも領域に含まれる。

![直線族 M_t が掃く領域。青色が領域、実線が含まれる境界、破線が直線族の例。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu/2025/kyotsu_202408_math_1_region.svg)
