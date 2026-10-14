---
sidebar_label: "2022年度 I-3-CD（物理数学・量子力学）"
tags:
  - Kyoto-University
  - Mathematics.Vector-Calculus.Gradient-Divergence-and-Curl
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Calculus.Infinite-Series
  - Physics.Quantum-Mechanics.Angular-Momentum-Addition
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2022年度 I-3-CD

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3C（物理数学）

1. 三次元ベクトル場 $\mathbf A,\mathbf B$ について、次の恒等式を証明せよ（一成分を示せばよい）。

   $$
   \nabla\times(\mathbf A\times\mathbf B)=\mathbf A(\nabla\cdot\mathbf B)-\mathbf B(\nabla\cdot\mathbf A)+(\mathbf B\cdot\nabla)\mathbf A-(\mathbf A\cdot\nabla)\mathbf B,
   $$

   $$
   \mathbf A\times(\nabla\times\mathbf A)=-(\mathbf A\cdot\nabla)\mathbf A+\tfrac12\nabla|\mathbf A|^2.
   $$

2. $\nabla\cdot(\mathbf A\times\mathbf B)$ を $\nabla\times\mathbf A,\nabla\times\mathbf B,\mathbf A,\mathbf B$ で表せ。
3. $y'+z'+7y+5z=0,\ 3y'+2z'+y+z=0$（$'=d/dx$）の一般解を求めよ。
4. $\int_0^1\ln(1-x)\,dx/x$ を求めよ。$\sum_{n\ge1}n^{-2}=\pi^2/6$ を用いてよい。

### I-3D（量子力学）

規格化状態 $|S,M\rangle$ と無次元下降演算子 $S_-|S,M\rangle=\sqrt{(S+M)(S-M+1)}|S,M-1\rangle$ を用いる。合成系では $S_-=s_{1-}+s_{2-}$。

1. 二つのスピン $1/2$ を合成し、$|1,1\rangle$ を積状態で表せ。
2. (1) に下降演算子を作用させ、規格化した $|1,0\rangle$ を求めよ。
3. それと直交する $|0,0\rangle$ を求めよ。
4. スピン $1$ と $1/2$ の合成で $|3/2,1/2\rangle$ を $|1,M\rangle|1/2,m\rangle$ の線形結合で表せ。

#### 题目描述

I-3C：证明题给两个矢量恒等式；求叉积的散度；解 $y'+z'+7y+5z=0,3y'+2z'+y+z=0$；利用 $\sum n^{-2}=\pi^2/6$ 计算 $\int_0^1\ln(1-x)/x\,dx$。

I-3D：采用 $S_-|S,M\rangle=\sqrt{(S+M)(S-M+1)}|S,M-1\rangle$ 和合成下降算符 $s_{1-}+s_{2-}$。

1. 用两个自旋 $1/2$ 的直积态写出 $|1,1\rangle$。
2. 经下降操作求 $|1,0\rangle$。
3. 用正交性求 $|0,0\rangle$。
4. 对自旋 $1$ 与 $1/2$ 的合成，求归一化的 $|3/2,1/2\rangle$ 展开。

## **Kai**

### I-3C

#### (1)

反復添字を縮約する。$\epsilon_{ijk}\epsilon_{klm}=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl}$ より

$$
[\nabla\times(\mathbf A\times\mathbf B)]_i
=\partial_j(A_iB_j-A_jB_i)
=A_i\partial_jB_j-B_i\partial_jA_j+B_j\partial_jA_i-A_j\partial_jB_i.
$$

同様に

$$
[\mathbf A\times(\nabla\times\mathbf A)]_i
=A_j\partial_iA_j-A_j\partial_jA_i
=\tfrac12\partial_i(A_jA_j)-A_j\partial_jA_i.
$$

それぞれ所要の恒等式である。

#### (2)

積の微分を用いて

$$
\boxed{\nabla\cdot(\mathbf A\times\mathbf B)
=\mathbf B\cdot(\nabla\times\mathbf A)-\mathbf A\cdot(\nabla\times\mathbf B).}
$$

#### (3)

$$
\frac{d}{dx}\binom yz=\begin{pmatrix}13&9\\-20&-14\end{pmatrix}\binom yz.
$$

固有値は $-2,1$、対応する固有ベクトルは $(-3,5)^{\mathsf T},(-3,4)^{\mathsf T}$。従って任意定数 $C_1,C_2$ により

$$
\boxed{\binom yz=C_1e^{-2x}\binom{-3}{5}+C_2e^x\binom{-3}{4}.}
$$

#### (4)

$-\ln(1-x)/x=\sum_{n=1}^\infty x^{n-1}/n$ は $0<x<1$ で非負項の級数なので、単調収束により項別積分できる。

$$
\boxed{\int_0^1\frac{\ln(1-x)}x\,dx=-\sum_{n=1}^\infty\frac1{n^2}=-\frac{\pi^2}{6}.}
$$

### I-3D

$|\uparrow\rangle=|1/2,1/2\rangle$、$|\downarrow\rangle=|1/2,-1/2\rangle$ と略記する。

#### (1)

最大磁気量子数を持つ唯一の積状態であるから $\boxed{|1,1\rangle=|\uparrow\uparrow\rangle}$。

#### (2)

$S_-|1,1\rangle=\sqrt2|1,0\rangle=|\downarrow\uparrow\rangle+|\uparrow\downarrow\rangle$ より

$$
\boxed{|1,0\rangle=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt2}.}
$$

#### (3)

$M=0$ の二次元空間で直交性・規格化を課して

$$
\boxed{|0,0\rangle=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt2}.}
$$

全体位相は任意である。

#### (4)

$|3/2,3/2\rangle=|1,1\rangle|\uparrow\rangle$ に一度 $S_-$ を作用させると

$$
\sqrt3|3/2,1/2\rangle=\sqrt2|1,0\rangle|\uparrow\rangle+|1,1\rangle|\downarrow\rangle.
$$

従って

$$
\boxed{|3/2,1/2\rangle=\sqrt{\frac23}|1,0\rangle|\uparrow\rangle+\sqrt{\frac13}|1,1\rangle|\downarrow\rangle.}
$$

## **Reference**

- [京都大学公式問題（2022年度、PDF 10–11ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R4.pdf)
