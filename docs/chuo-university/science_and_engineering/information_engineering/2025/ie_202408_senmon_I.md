---
sidebar_label: "2024年8月実施 問題I（情報工学）"
tags:
  - Chuo-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Exact-Differential-Equation
  - Mathematics.Calculus.Gaussian-Integral
  - Mathematics.Linear-Algebra.Companion-Matrix-for-Linear-Recurrences
---

# 中央大学 理工学研究科 情報工学専攻 2024年8月実施 問題I

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち，2 問を選んで解答すること。

問題 I．（全員解答すること）

1. 1 変数の実変数実数値関数 $y(x)$ に関する次の微分方程式を解け。

   (1) $y''-4y'+4y=0$ の一般解を求めよ。

   (2) 次の微分方程式が完全微分形であることを示し，一般解を求めよ。

   $$
   \left(\frac1x-\frac1y\right)\,dx+\frac{x-1}{y^2}\,dy=0
   $$

2. 次の積分を計算せよ。$a$ は正の実数，$f(x,y)=e^{-(x^2+y^2)}$ とする。

   (1) 2 次元平面内の領域 $D_a=\{(x,y)\in\mathbb R^2\mid0\le x^2+y^2\le a^2,\ x\ge0,\ y\ge0\}$ を考える。$\displaystyle\iint_{D_a}f(x,y)\,dx\,dy$ を求めよ。

   (2) 2 次元平面内の領域 $S_a=\{(x,y)\in\mathbb R^2\mid0\le x\le a,\ 0\le y\le a\}$ を考える。$D_a,S_a,D_{\sqrt2a}$ を図示し，

   $$
   \begin{aligned}
   &\iint_{D_a}f(x,y)\,dx\,dy\\
   &\quad\le\iint_{S_a}f(x,y)\,dx\,dy\\
   &\quad\le\iint_{D_{\sqrt2a}}f(x,y)\,dx\,dy
   \end{aligned}
   $$

   を示せ。

   (3) $\displaystyle I=\int_0^\infty e^{-x^2}\,dx$ を求めよ。

3. $n\ge3$ とし，次の $n$ 次正方行列 $A_n$ を考える。

   $$
   A_n=\begin{pmatrix}
   0&1&0&\cdots&0\\
   0&0&1&\ddots&\vdots\\
   \vdots&\vdots&\ddots&\ddots&0\\
   0&0&\cdots&0&1\\
   -a_n&-a_{n-1}&\cdots&-a_2&-a_1
   \end{pmatrix}
   $$

   例えば，$n=3$ の場合は次のようになる。

   $$
   A_3=\begin{pmatrix}0&1&0\\0&0&1\\-a_3&-a_2&-a_1\end{pmatrix}
   $$

   次の問いに答えよ。

   (1) $n=3$ の場合の $A_3$ の固有多項式（特性多項式ともいう）$\Phi_3(x)$ を求めよ。

   (2) 一般の $n$ の場合の $A_n$ の固有多項式 $\Phi_n(x)$ を求めよ。

   (3) 固有値 $c$ に対応する $A_n$ の固有ベクトルを求めよ。

### 题目描述

问题 I 必答；问题 II～V 中选答 2 题。本问题所有考生均须作答。

1. 求解关于一元实变量实值函数 $y(x)$ 的下列微分方程。

   (1) 求 $y''-4y'+4y=0$ 的通解。

   (2) 证明下列方程是恰当微分方程，并求其通解。

   $$
   \left(\frac1x-\frac1y\right)\,dx+\frac{x-1}{y^2}\,dy=0.
   $$

2. 计算以下积分。设 $a$ 为正实数，$f(x,y)=e^{-(x^2+y^2)}$。

   (1) 考虑平面区域 $D_a=\{(x,y)\in\mathbb R^2\mid0\le x^2+y^2\le a^2,\ x\ge0,\ y\ge0\}$。求 $\displaystyle\iint_{D_a}f(x,y)\,dx\,dy$。

   (2) 考虑平面区域 $S_a=\{(x,y)\in\mathbb R^2\mid0\le x\le a,\ 0\le y\le a\}$。画出 $D_a,S_a,D_{\sqrt2a}$，并证明

   $$
   \begin{aligned}
   &\iint_{D_a}f(x,y)\,dx\,dy\\
   &\quad\le\iint_{S_a}f(x,y)\,dx\,dy\\
   &\quad\le\iint_{D_{\sqrt2a}}f(x,y)\,dx\,dy
   \end{aligned}.
   $$

   (3) 求 $\displaystyle I=\int_0^\infty e^{-x^2}\,dx$。

3. 设 $n\ge3$，考虑 $n$ 阶方阵

   $$
   A_n=\begin{pmatrix}
   0&1&0&\cdots&0\\
   0&0&1&\ddots&\vdots\\
   \vdots&\vdots&\ddots&\ddots&0\\
   0&0&\cdots&0&1\\
   -a_n&-a_{n-1}&\cdots&-a_2&-a_1
   \end{pmatrix}.
   $$

   例如，$n=3$ 时为

   $$
   A_3=\begin{pmatrix}0&1&0\\0&0&1\\-a_3&-a_2&-a_1\end{pmatrix}.
   $$

   回答下列问题。

   (1) 求 $n=3$ 时 $A_3$ 的特征多项式 $\Phi_3(x)$。

   (2) 求一般 $n$ 情形下 $A_n$ 的特征多项式 $\Phi_n(x)$。

   (3) 求 $A_n$ 对应于特征值 $c$ 的特征向量。

## **Kai**

### 1. (1)

特性方程式は $r^2-4r+4=(r-2)^2=0$ であり，重根 $r=2$ をもつ。したがって，

$$
\boxed{y(x)=(C_1+C_2x)e^{2x}},\qquad C_1,C_2\in\mathbb R.
$$

### 1. (2)

$M(x,y)=1/x-1/y$，$N(x,y)=(x-1)/y^2$ とおく。$x\ne0,y\ne0$ の領域で

$$
\frac{\partial M}{\partial y}=\frac1{y^2}
=\frac{\partial N}{\partial x}
$$

となる。実際，$M$ を $x$ について積分した関数を

$$
F(x,y)=\log|x|-\frac{x}{y}+g(y)
$$

とおくと，$F_y=x/y^2+g'(y)=N$ より $g'(y)=-1/y^2$，すなわち $g(y)=1/y$ と取れる。よって与式は $dF=0$ という完全微分形であり，一般解の陰関数表示は

$$
\boxed{\log|x|-\frac{x-1}{y}=C},\qquad x\ne0,\ y\ne0.
$$

この等位式で表される曲線のうち，$y=y(x)$ として定義できる部分を取る。

### 2. (1)

極座標 $x=r\cos\theta$，$y=r\sin\theta$ を用いると，$0\le r\le a$，$0\le\theta\le\pi/2$，$dx\,dy=r\,dr\,d\theta$ である。したがって，

$$
\begin{aligned}
\iint_{D_a}e^{-(x^2+y^2)}\,dx\,dy
&=\int_0^{\pi/2}\!\int_0^a e^{-r^2}r\,dr\,d\theta\\
&=\boxed{\frac\pi4(1-e^{-a^2})}.
\end{aligned}
$$

### 2. (2)

$D_a$ は半径 $a$ の円の第 1 象限部分，$S_a$ は一辺 $a$ の正方形，$D_{\sqrt2a}$ は半径 $\sqrt2a$ の円の第 1 象限部分である。

![第1象限における領域の包含関係：D_a、S_a、D_√2a](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202408_senmon_I_regions.svg)

図：祭音Myyura。

$(x,y)\in D_a$ なら $0\le x,y\le a$ なので $D_a\subseteq S_a$。また，$(x,y)\in S_a$ なら $x^2+y^2\le2a^2$ なので $S_a\subseteq D_{\sqrt2a}$。ゆえに

$$
D_a\subseteq S_a\subseteq D_{\sqrt2a}.
$$

被積分関数 $f(x,y)$ が非負であることから，積分についても題意の不等式が成り立つ。

### 2. (3)

$J(a)=\int_0^a e^{-x^2}\,dx$ とおくと，積の形の被積分関数を正方形上で積分して

$$
J(a)^2=\iint_{S_a}e^{-(x^2+y^2)}\,dx\,dy
$$

を得る。(1)，(2) より

$$
\frac\pi4(1-e^{-a^2})\le J(a)^2
\le\frac\pi4(1-e^{-2a^2}).
$$

$J(a)$ は非負で単調増加し，上式によって有界である。したがって広義積分 $I=\lim_{a\to\infty}J(a)$ は存在し，はさみうちの原理から $I^2=\pi/4$。$I>0$ より

$$
\boxed{I=\frac{\sqrt\pi}{2}}.
$$

### 3. (1)

固有多項式を $\Phi_n(x)=\det(xI-A_n)$ と定義する。すると，

$$
\begin{aligned}
\Phi_3(x)
&=\det\begin{pmatrix}x&-1&0\\0&x&-1\\a_3&a_2&x+a_1\end{pmatrix}\\
&=x\{x(x+a_1)+a_2\}+a_3\\
&=\boxed{x^3+a_1x^2+a_2x+a_3}.
\end{aligned}
$$

### 3. (2)

$xI-A_n$ を第 1 列で展開する。第 1 行の項は，係数 $a_1,\ldots,a_{n-1}$ に対する同形の $(n-1)$ 次行列式の $x$ 倍となる。最終行の項は，三角行列となる小行列式が $(-1)^{n-1}$ であることから

$$
(-1)^{n+1}a_n(-1)^{n-1}=a_n
$$

となる。よって次数を順に下げて展開すれば，

$$
\boxed{\begin{aligned}
\Phi_n(x)&=x^n+a_1x^{n-1}+a_2x^{n-2}\\
&\quad+\cdots+a_{n-1}x+a_n.
\end{aligned}}
$$

$\det(A_n-xI)$ を固有多項式とする規約では，これに $(-1)^n$ を掛けた式となる。

### 3. (3)

$v=(v_1,\ldots,v_n)^{\mathsf T}$ に対して $A_nv=cv$ の第 1～$n-1$ 行を読むと，

$$
v_{j+1}=cv_j\quad(1\le j<n)
$$

である。したがって $v_j=c^{j-1}v_1$。$v\ne0$ なら $v_1\ne0$ でなければならない。最終行は

$$
-a_n-a_{n-1}c-\cdots-a_1c^{n-1}=c^n
$$

に等しく，固有値の条件 $\Phi_n(c)=0$ により満たされる。ゆえに，対応する固有ベクトル全体は

$$
\boxed{v=t\begin{pmatrix}1&c&c^2&\cdots&c^{n-1}\end{pmatrix}^{\mathsf T}},\qquad t\ne0
$$

である。

## **Reference**

- [中央大学 2025年度 夏季一般入学試験・情報工学 公式問題（冊内 p.74／PDF 第75頁）](https://www.chuo-u.ac.jp/uploads/2025/09/admission_gschool_exam_science_10_01.pdf#page=75)
