---
sidebar_label: "2023年8月実施 数学 [1]"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Differential-Equations.Systems-of-ODEs
---
# 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2023年8月実施 数学 \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### (1)

実定数の $n$ 次正方行列 $A\in\mathbb R^{n\times n}$ に対して、行列の指数関数を $e^A=\sum_{k=0}^\infty\frac{A^k}{k!}$ と定義する。以下の問いに答えなさい。

(i) $P$ を正則な $n$ 次の正方行列とすると、以下の式が成立することを示しなさい。

$$
e^{PAP^{-1}}=Pe^AP^{-1}
$$

(ii) $t$ を実変数とし、行列 $A$ は $t$ に依存しない実定数の $n$ 次正方行列と仮定する。次の微分方程式の解 $\boldsymbol x=\boldsymbol x(t)$ を行列 $A$、及び初期値 $\boldsymbol x_0$ を用いて示しなさい。ここに、$\boldsymbol x\in\mathbb R^n$ である。

$$
\frac{d\boldsymbol x}{dt}=A\boldsymbol x,\qquad
\boldsymbol x_0=\boldsymbol x(0)
$$

(iii) いま、行列 $A$ が相異なる固有値 $\lambda_k$、$k=1,\ldots,n$ と固有ベクトル $\boldsymbol p_k$、$k=1,\ldots,n$ を持つと仮定する。正則な行列 $P$ を $P=[\boldsymbol p_1,\ldots,\boldsymbol p_n]$ と定義する。このとき、(ii) で求めた解 $\boldsymbol x=\boldsymbol x(t)$ を、固有値 $\lambda_k$、$k=1,\ldots,n$、行列 $P=[\boldsymbol p_1,\ldots,\boldsymbol p_n]$ 及び初期値 $\boldsymbol x_0$ を用いて示しなさい。

(iv) $\boldsymbol x(t)=(x_1(t),x_2(t))^T$ に関する次の微分方程式の解を求めよ。

$$
\frac{d}{dt}\boldsymbol x=A\boldsymbol x,\qquad
\text{但し、}\boldsymbol x_0=(x_{10},x_{20})^T,\qquad
A=\begin{bmatrix}1&1\\-2&4\end{bmatrix}
$$

### (2)

複素領域 $\mathbb D\subset\mathbb C$ の点（複素数）を $z=x+iy$ として、$\mathbb D$ 上の複素関数を

$$
f(z)=u(x,y)+iv(x,y)
$$

とする。以下の問いに答えなさい。但し、$i$ は虚数単位である。また、円周率を $\pi$ とする。

(i) 複素関数 $f(z)$ が領域 $\mathbb D$ で正則であるための必要かつ十分条件を示しなさい。

(ii) 領域 $\mathbb D$ の点 $z$ を極座標 $(r,\theta)$ で $z=re^{i\theta}$ と表すとき、(i) の条件はどのように表されるか。

(iii) 複素関数 $f(z)$ として、対数関数

$$
f(z)=\log z
$$

を考えよう。実数の対数関数を $\ln|z|$、偏角を $\arg z$ として、対数関数 $f(z)=\log z$ を $\ln|z|$ と $\arg z$ を用いて表しなさい。また、偏角として主値 $\operatorname{Arg}z$ を選ぶとき、主枝 $\operatorname{Log}z$ を $\ln|z|$ と $\operatorname{Arg}z$ を用いて表わした上で、対数関数 $f(z)=\log z$ を $\operatorname{Log}z$ と $n\in\mathbb Z$ で表しなさい。

(iv) 以下の式の値を求めなさい。

a) $\log(-3)$　 b) $\log3$　 c) $\log(1-i)$　 d) $\operatorname{Log}(-1)$　 e) $\operatorname{Log}(1+i)$

(v) 複素関数 $f(z)=\log z$ の正則性について述べよ。

(vi) 複素数 $z$ が曲線 $C:|z|=1$ に沿って、原点の周りを正の向きに回転するとき、次の積分をしなさい。但し、$f'(z)=\frac{df}{dz}(z)$ である。

$$
\oint_C f'(z)\,dz
$$

（注意）定数や変数などの数学記号が必要であれば、適当に定めた上で用いても良い。

### 题目描述

**(1)**

对于实常数构成的 $n$ 阶方阵 $A\in\mathbb R^{n\times n}$，定义矩阵指数函数 $e^A=\sum_{k=0}^\infty\frac{A^k}{k!}$。回答以下问题。

(i) 设 $P$ 是可逆的 $n$ 阶方阵，证明下式成立。

$$
e^{PAP^{-1}}=Pe^AP^{-1}
$$

(ii) 设 $t$ 为实变量，矩阵 $A$ 为不依赖于 $t$、由实常数构成的 $n$ 阶方阵。用矩阵 $A$ 及初值 $\boldsymbol x_0$ 表示下列微分方程的解 $\boldsymbol x=\boldsymbol x(t)$。其中，$\boldsymbol x\in\mathbb R^n$。

$$
\frac{d\boldsymbol x}{dt}=A\boldsymbol x,\qquad
\boldsymbol x_0=\boldsymbol x(0)
$$

(iii) 现在假设矩阵 $A$ 具有互不相同的特征值 $\lambda_k$（$k=1,\ldots,n$）以及特征向量 $\boldsymbol p_k$（$k=1,\ldots,n$）。定义可逆矩阵 $P=[\boldsymbol p_1,\ldots,\boldsymbol p_n]$。此时，用特征值 $\lambda_k$（$k=1,\ldots,n$）、矩阵 $P=[\boldsymbol p_1,\ldots,\boldsymbol p_n]$ 及初值 $\boldsymbol x_0$ 表示 (ii) 中求得的解 $\boldsymbol x=\boldsymbol x(t)$。

(iv) 求关于 $\boldsymbol x(t)=(x_1(t),x_2(t))^T$ 的下列微分方程的解。

$$
\frac{d}{dt}\boldsymbol x=A\boldsymbol x,\qquad
\boldsymbol x_0=(x_{10},x_{20})^T,\qquad
A=\begin{bmatrix}1&1\\-2&4\end{bmatrix}
$$

**(2)**

将复数域 $\mathbb D\subset\mathbb C$ 中的点（复数）写成 $z=x+iy$，设 $\mathbb D$ 上的复函数为

$$
f(z)=u(x,y)+iv(x,y).
$$

回答以下问题。其中，$i$ 为虚数单位，$\pi$ 为圆周率。

(i) 给出复函数 $f(z)$ 在区域 $\mathbb D$ 内正则的充要条件。

(ii) 将区域 $\mathbb D$ 中的点 $z$ 用极坐标 $(r,\theta)$ 表示为 $z=re^{i\theta}$ 时，(i) 中的条件如何表示？

(iii) 考虑复函数 $f(z)$ 为对数函数

$$
f(z)=\log z.
$$

将实数的对数函数记为 $\ln|z|$，辐角记为 $\arg z$，用 $\ln|z|$ 和 $\arg z$ 表示对数函数 $f(z)=\log z$。此外，选取辐角的主值 $\operatorname{Arg}z$ 时，先用 $\ln|z|$ 和 $\operatorname{Arg}z$ 表示主支 $\operatorname{Log}z$，再用 $\operatorname{Log}z$ 与 $n\in\mathbb Z$ 表示对数函数 $f(z)=\log z$。

(iv) 求下列各式的值。

a) $\log(-3)$　 b) $\log3$　 c) $\log(1-i)$　 d) $\operatorname{Log}(-1)$　 e) $\operatorname{Log}(1+i)$

(v) 说明复函数 $f(z)=\log z$ 的正则性。

(vi) 当复数 $z$ 沿曲线 $C:|z|=1$ 绕原点按正方向旋转时，计算下列积分。其中，$f'(z)=\frac{df}{dz}(z)$。

$$
\oint_C f'(z)\,dz
$$

（注意）如需使用常数、变量等数学符号，可在适当定义后使用。

## **Kai**
### (1)
#### (i)

$$
  \begin{aligned}
  e^{PAP^{-1}}
  &= \sum_{k=0}^\infty \frac{\left( PAP^{-1} \right)^k}{k!}
  \\
  &= P \sum_{k=0}^\infty \frac{A^k}{k!} P^{-1}
  \\
  &= P e^A P^{-1}
  \end{aligned}
$$

#### (ii)

$$
  \begin{aligned}
  \frac{d}{dt} e^{tA}
  &= \frac{d}{dt} \sum_{k=0}^\infty \frac{t^k A^k}{k!}
  \\
  &= \sum_{k=1}^\infty \frac{t^{k-1} A^k}{(k-1)!}
  \\
  &= A \sum_{k=0}^\infty \frac{t^k A^k}{k!}
  \\
  &= A e^{tA}
  \end{aligned}
$$

であり、 $t=0$ のとき $e^{tA}$ は単位行列であるから、
求める解は

$$
  \begin{aligned}
  \boldsymbol{x}(t) = e^{tA} \boldsymbol{x}_0
  \end{aligned}
$$

であることがわかる。

#### (iii)

$$
\begin{aligned}
A
&= P
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
P^{-1}
\end{aligned}
$$

なので、

$$
\begin{aligned}
e^{tA}
&= \exp \left( tP
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
P^{-1} \right)
\\
&= P \exp \left( t
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
\right) P^{-1}
\ \ \ \ \ \ \ \ ( \because \text{ (i) } )
\\
&= P \begin{bmatrix}
e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t}
\end{bmatrix} P^{-1}
\end{aligned}
$$

となるため、 (ii) で求めた解は

$$
\begin{aligned}
\boldsymbol{x} (t)
&= e^{tA} \boldsymbol{x}_0
\\
&= P \begin{bmatrix}
e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t}
\end{bmatrix} P^{-1} \boldsymbol{x}_0
\end{aligned}
$$

と書ける。

#### (iv)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{bmatrix} 1 - \lambda & 1 \\ -2 & 4 - \lambda \end{bmatrix}
\\
&= (\lambda - 2)(\lambda - 3)
\\
\therefore \ \ \lambda &= 2, 3
\end{aligned}
$$

がわかる。

固有値 $2$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix}
\begin{bmatrix} u \\ v \end{bmatrix}
= \begin{bmatrix} 0 \\ 0 \end{bmatrix}
\end{aligned}
$$

とおくと $u=v$ を得る。

固有値 $3$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{bmatrix} -2 & 1 \\ -2 & 1 \end{bmatrix}
\begin{bmatrix} u \\ v \end{bmatrix}
= \begin{bmatrix} 0 \\ 0 \end{bmatrix}
\end{aligned}
$$

とおくと $2u=v$ を得る。

そこで、

$$
\begin{aligned}
P = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
P^{-1} &= \begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}
, \\
A &= P \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix} P^{-1}
\end{aligned}
$$

であり、

$$
\begin{aligned}
\boldsymbol{x}(t)
&= P \begin{bmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{bmatrix} P^{-1}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&=
\begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}
\begin{bmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{bmatrix}
\begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&= \begin{bmatrix}
2e^{2t} - e^{3t} & -e^{2t} + e^{3t} \\
2e^{2t} - 2e^{3t} & -e^{2t} + 2e^{3t}
\end{bmatrix}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&= \begin{bmatrix}
\left( 2 x_{10} - x_{20} \right) e^{2t}
+ \left( - x_{10} + x_{20} \right) e^{3t}
\\
\left( 2 x_{10} - x_{20} \right) e^{2t}
+ \left( - 2x_{10} + 2x_{20} \right) e^{3t}
\end{bmatrix}
\end{aligned}
$$

を得る。

### (2)


#### (i)

$f$ が $D$ 上で正則であることは、$u,v$ が各点で実全微分可能であり、コーシー・リーマンの関係

$$
u_x=v_y,\qquad u_y=-v_x
$$

を満たすことと同値である。特に $u,v\in C^1(D)$ のもとでは、この二つの関係が必要十分である。偏微分が存在するだけでは十分とは限らない。

#### (ii)

$r>0$ で連鎖律を用いると

$$
u_r=\frac1r v_\theta,\qquad v_r=-\frac1r u_\theta.
$$

#### (iii)

$z\ne0$ に対し、$-\pi<\operatorname{Arg}z\le\pi$ を主偏角と定めると

$$
\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z,\qquad
\log z=\operatorname{Log}z+2\pi i n\quad(n\in\mathbb Z).
$$

ここで $\log z$ は全ての値を表す多価の記号である。

#### (iv)

$$
\begin{aligned}
\log(-3)&=\ln3+i(2n+1)\pi,\\
\log3&=\ln3+2\pi i n,\\
\log(1-i)&=\tfrac12\ln2+i(-\tfrac\pi4+2\pi n),\\
\operatorname{Log}(-1)&=i\pi,\\
\operatorname{Log}(1+i)&=\tfrac12\ln2+\tfrac{\pi i}{4}.
\end{aligned}
$$

各多価対数で $n\in\mathbb Z$。主偏角を $[-\pi,\pi)$ と定める流儀では $\operatorname{Log}(-1)=-i\pi$ となるため、端点の規約を明示する必要がある。

#### (v)

$0$ を含まない各点の近傍で偏角を連続に選べば、対数の正則な分枝が存在し、その導関数は $1/z$ である。主枝は $\mathbb C\setminus(-\infty,0]$ で正則である。上で負の実軸にも割り当てた主値はそこで不連続であり、正則ではない。また $\mathbb C\setminus\{0\}$ 全体で一価の正則な対数を定めることはできない。

#### (vi)

対数の各局所分枝の導関数は共通に $1/z$ である。従って $z=e^{it}$、$0\le t\le2\pi$ と置くと

$$
\oint_C f'(z)\,dz=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt=2\pi i.
$$

$C$ の周囲に一価の正則な対数がないため、この積分に大域的な原始関数として $\log z$ を用いることはできない。

## **Reference**

- [大学公式問題（2023年9月・2024年4月入学、PDF 2ページ）](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_kikaikagaku_2023_September2024_April_ippan_senmon.pdf)
- [公開保存版（同名原卷）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/50e383d57ebcb2cbc3fed0cecf3c96e9c8b2564e/assets/past-papers/documents/f071ede7f4b9578308183dec9a5ad5a67f909128ad2d52cf60c3be65b475da71.pdf)
