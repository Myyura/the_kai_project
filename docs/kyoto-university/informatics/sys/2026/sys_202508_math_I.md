---
sidebar_label: 2025年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Gram-Schmidt-Orthogonalization
---
# 京都大学 情報学研究科 システム科学専攻 2025年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
実数 $\theta$ に対して

$$
A(\theta)=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}
$$

と定義する。

(1) 次の等式を満たす実数 $\theta$ をすべて求めよ。存在しない場合は「存在しない」と答えよ。

$$
A\left(-\frac\pi3\right)A\left(\frac\pi6\right)A(\theta)A\left(-\frac16\right)A\left(\frac13\right)=\frac1{\sqrt2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}.
$$

(2) $A(0),A(\pi/6),A(\pi/3)$ がある二次複素正則行列によって同時対角化可能か否かを、証明とともに示せ。

(3) 正の実数 $\theta$ と二次元実列ベクトル $x_0$ が与えられている。$x(t+1)=\theta A(\theta)x(t)$ ($t=0,1,\ldots$)、$x(0)=x_0$ とするとき、$\lim_{t\to\infty}\|x(t)\|$ を求めよ。正・負の無限大への発散はそれぞれ $\infty,-\infty$、それ以外で極限がない場合は「存在しない」と答えよ。

### 問題2
$\mathbb R$ を実数全体とする。基底にはベクトルの順序も含め、$(e_1,e_2,e_3)$ のように表す。

(1) 次の行列で定まる線形写像それぞれの核の次元を求め、次元が $1$ 以上ならその基底も求めよ。

$$
T_1:\mathbb R^3\to\mathbb R^4,\quad\begin{pmatrix}1&1&2\\1&-1&1\\2&1&3\\2&-2&0\end{pmatrix},\qquad
T_2:\mathbb R^3\to\mathbb R^2,\quad\begin{pmatrix}1&1&4\\6&6&8\end{pmatrix}.
$$

(2) $T_1,T_2$ を全射、単射、全単射、いずれでもない、のいずれかに分類せよ。

(3) $v_1=(1,-1,0)^{\mathrm T},v_2=(1,0,-1)^{\mathrm T},v_3=(1,2,3)^{\mathrm T}$ とする。Gram–Schmidt 法で、$v_1$ を正規化して $v'_1$、$v_2$ を $v'_1$ に直交化・正規化して $v'_2$、$v_3$ を $v'_1,v'_2$ に直交化・正規化して $v'_3$ を得る。同様に、$v_2$ を正規化して $v''_2$、$v_1$ を $v''_2$ に直交化・正規化して $v''_1$、$v_3$ を $v''_1,v''_2$ に直交化・正規化して $v''_3$ を得る。基底 $(v'_1,v'_2,v'_3)$ から基底 $(v''_1,v''_2,v''_3)$ への変換行列 $P$ を求めよ。

(4) (3) の $P$ の行列式を求めよ。

#### 题目描述

问题 1：对实数 $\theta$ 定义

$$
A(\theta)=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
$$

（1）求满足下式的全部实数 $\theta$；若不存在则回答“不存在”。

$$
A(-\pi/3)A(\pi/6)A(\theta)A(-1/6)A(1/3)=\frac1{\sqrt2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}.
$$

（2）判断 $A(0),A(\pi/6),A(\pi/3)$ 能否用同一个二阶可逆复矩阵对角化，并证明。

（3）给定正实数 $\theta$ 和二维实列向量 $x_0$，令 $x(t+1)=\theta A(\theta)x(t)$（$t=0,1,\ldots$）、$x(0)=x_0$，求 $\lim_{t\to\infty}\|x(t)\|$。向正、负无穷发散分别记作 $\infty,-\infty$，其他无极限情形回答“不存在”。

问题 2：$\mathbb R$ 为实数集；基是有顺序的向量组。

（1）求下列矩阵定义的线性映射的核维数；若维数至少为 $1$，求核的一组基。

$$
T_1:\mathbb R^3\to\mathbb R^4,\quad\begin{pmatrix}1&1&2\\1&-1&1\\2&1&3\\2&-2&0\end{pmatrix},\qquad
T_2:\mathbb R^3\to\mathbb R^2,\quad\begin{pmatrix}1&1&4\\6&6&8\end{pmatrix}.
$$

（2）分别判断 $T_1,T_2$ 是满射、单射、双射，还是二者都不是。

（3）令 $v_1=(1,-1,0)^{\mathrm T},v_2=(1,0,-1)^{\mathrm T},v_3=(1,2,3)^{\mathrm T}$。按 $v_1,v_2,v_3$ 的顺序作 Gram–Schmidt 正交归一化，得到 $(v'_1,v'_2,v'_3)$。再先归一化 $v_2$ 得到 $v''_2$，把 $v_1$ 对 $v''_2$ 正交归一化得到 $v''_1$，把 $v_3$ 对 $v''_1,v''_2$ 正交归一化得到 $v''_3$。求从基 $(v'_1,v'_2,v'_3)$ 到基 $(v''_1,v''_2,v''_3)$ 的变换矩阵 $P$。

（4）求 $\det P$。

## **Kai**

### 問題1
(1) 加法定理より $A(s)A(t)=A(s+t)$、右辺は $A(\pi/4)$ である。従って

$$
\theta-\frac\pi6+\frac16=\frac\pi4+2k\pi,
\qquad\boxed{\theta=\frac{5\pi-2}{12}+2k\pi\quad(k\in\mathbb Z)}.
$$

(2) $S=\begin{pmatrix}1&1\\i&-i\end{pmatrix}$ とすれば $\det S=-2i\ne0$ であり、任意の実数 $t$ について

$$
S^{-1}A(t)S=\operatorname{diag}(e^{it},e^{-it}).
$$

従って三行列は同時対角化可能である。

(3) $A(\theta)$ は直交行列なので $\|x(t)\|=\theta^t\|x_0\|$。従って極限は

$$
\boxed{\begin{cases}0,&x_0=0\ \text{または}\ 0<\theta<1,\\\|x_0\|,&\theta=1,\\+\infty,&\theta>1,\ x_0\ne0.\end{cases}}
$$

### 問題2
(1) $T_1$ の最初の三行の行列式は $1$ なので階数は $3$、$\dim\ker T_1=0$。$T_2$ の核では二式の差から $x_3=0$、$x_1+x_2=0$ となる。従って

$$
\boxed{\dim\ker T_2=1,\qquad\ker T_2=\operatorname{span}\{(1,-1,0)^{\mathrm T}\}}.
$$

(2) $T_1$ は単射で全射ではない。$T_2$ は階数 $2$ より全射で、単射ではない。

(3) Gram–Schmidt 法により

$$
E=(v'_1,v'_2,v'_3)=\left(\frac{(1,-1,0)^{\mathrm T}}{\sqrt2},\frac{(1,1,-2)^{\mathrm T}}{\sqrt6},\frac{(1,1,1)^{\mathrm T}}{\sqrt3}\right),
$$

$$
F=(v''_1,v''_2,v''_3)=\left(\frac{(1,-2,1)^{\mathrm T}}{\sqrt6},\frac{(1,0,-1)^{\mathrm T}}{\sqrt2},\frac{(1,1,1)^{\mathrm T}}{\sqrt3}\right).
$$

$EP=F$ を満たす基底変換行列は

$$
\boxed{P=E^{\mathrm T}F=\begin{pmatrix}\sqrt3/2&1/2&0\\-1/2&\sqrt3/2&0\\0&0&1\end{pmatrix}}.
$$

座標列の変換は $[x]_F=P^{-1}[x]_E=P^{\mathrm T}[x]_E$ である。

(4) $\boxed{\det P=3/4+1/4=1}$。
