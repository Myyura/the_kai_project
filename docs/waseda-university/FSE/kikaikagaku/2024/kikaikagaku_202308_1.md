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

問題の要約 — [大学公表問題](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_kikaikagaku_2023_September2024_April_ippan_senmon.pdf)


### (1) 行列指数

定数行列 $A\in\mathbb R^{n\times n}$ に対して $e^A=\sum_{k\ge0}A^k/k!$ とする。

1. 正則な $P$ について $e^{PAP^{-1}}=Pe^AP^{-1}$ を証明する。
2. $\dot{\boldsymbol x}=A\boldsymbol x$、$\boldsymbol x(0)=\boldsymbol x_0$ を行列指数で解く。
3. 相異なる固有値 $\lambda_k$ と対応する固有ベクトルを列に持つ $P$ を用いて、その解を表す。
4. $A=\begin{bmatrix}1&1\\-2&4\end{bmatrix}$、$\boldsymbol x_0=(x_{10},x_{20})^T$ の解を具体的に求める。

### (2) 複素関数

領域 $D\subset\mathbb C$ 上で $f(z)=u(x,y)+iv(x,y)$、$z=x+iy$ とする。

1. 正則性の必要十分条件を述べる。
2. その条件を極座標 $z=re^{i\theta}$ で表す。
3. 複素対数を $\ln|z|$ と偏角で表し、主値 $\operatorname{Log}z$ と全ての値との関係を書く。
4. $\log(-3)$、$\log3$、$\log(1-i)$、$\operatorname{Log}(-1)$、$\operatorname{Log}(1+i)$ を求める。
5. 複素対数が正則になる領域を説明する。
6. 原点を反時計回りに一周する $C:|z|=1$ に沿って $\oint_C f'(z)\,dz$ を求める。

### 题目描述

1. 回答下列有关矩阵指数与线性常微分方程组的问题。
   1. 对方阵 $A$ 和可逆矩阵 $P$，证明

      $$
      e^{PAP^{-1}}=Pe^AP^{-1}.
      $$

   2. 对初值问题

      $$
      \frac{d\boldsymbol{x}}{dt}=A\boldsymbol{x},\qquad
      \boldsymbol{x}(0)=\boldsymbol{x}_0,
      $$

      用矩阵指数表示解。
   3. 若 $A$ 有互不相同的特征值，且

      $$
      A=P
      \begin{bmatrix}
      \lambda_1&&\\
      &\ddots&\\
      &&\lambda_n
      \end{bmatrix}
      P^{-1},
      $$

      用特征值 $\lambda_1,\ldots,\lambda_n$ 和矩阵 $P$ 写出 $\boldsymbol{x}(t)$。
   4. 对

      $$
      A=\begin{bmatrix}1&1\\-2&4\end{bmatrix},\qquad
      \boldsymbol{x}(0)=
      \begin{bmatrix}x_{10}\\x_{20}\end{bmatrix},
      $$

      通过特征值、特征向量和矩阵对角化，求上述初值问题的显式解。

2. 设 $D\subset\mathbb C$，$f(z)=u(x,y)+iv(x,y)$，其中 $z=x+iy$。
   1. 叙述正则性的充要条件。
   2. 将条件写成极坐标 $z=re^{i\theta}$ 下的形式。
   3. 用 $\ln|z|$ 和辐角表示复对数，说明主值 $\operatorname{Log}z$ 与全部对数值的关系。
   4. 求 $\log(-3)$、$\log3$、$\log(1-i)$、$\operatorname{Log}(-1)$、$\operatorname{Log}(1+i)$。
   5. 说明复对数可取正则分支的区域。
   6. 对绕原点逆时针一周的 $C:|z|=1$，计算复对数导函数的积分 $\oint_C f'(z)\,dz$。

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
\left( 4 x_{10} - 2x_{20} \right) e^{2t}
+ \left( - 2x_{10} + 2x_{20} \right) e^{3t}
\end{bmatrix}
\end{aligned}
$$

を得る。

### (2)


#### (i)

$f$ が $D$ 上で正則であることは、$u,v$ が各点で実全微分可能であり、コーシー・リーマンの関係

$$u_x=v_y,\qquad u_y=-v_x$$

を満たすことと同値である。特に $u,v\in C^1(D)$ のもとでは、この二つの関係が必要十分である。偏微分が存在するだけでは十分とは限らない。

#### (ii)

$r>0$ で連鎖律を用いると

$$u_r=\frac1r v_\theta,\qquad v_r=-\frac1r u_\theta.$$

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
