---
sidebar_label: "2018年8月実施 数学 第1問"
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Unitary-Matrix
  - Mathematics.Linear-Algebra.Matrix-Exponential
---

# 東京大学 理学系研究科 物理学専攻 2018年8月実施 数学 第1問

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2019%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_1.html) refined with GPT 6 Astra)

## **Description**

$\operatorname{tr}X$ は正方行列のトレース、$\det X$ は行列式、$[X,Y]=XY-YX$、$X^{\mathsf T}$ は転置、$X^\dagger$ はエルミート共役、$I$ は単位行列とする。行列指数関数を $e^X=\sum_{k=0}^{\infty}X^k/k!$ で定義する。

1. $A,B$ を有限次元のエルミートかつトレースレス行列とする。以下を示せ。エルミート行列のユニタリー対角化および $\det(XY)=\det X\det Y$ を用いてよい。
   - (i) $i[A,B]$ はエルミートかつトレースレスである。
   - (ii) $U=e^{iA}$ はユニタリー行列である。
   - (iii) $U=e^{iA}$ は $\det U=1$ を満たす。

任意のトレースレスな3行3列エルミート行列は、8個の実数 $\alpha_1,\ldots,\alpha_8$ と8個のトレースレスなエルミート行列 $T_1,\ldots,T_8$ を用いて

$$
T=\begin{pmatrix}
\alpha_7&\alpha_1-i\alpha_2&\alpha_3-i\alpha_4\\
\alpha_1+i\alpha_2&\alpha_8&\alpha_5-i\alpha_6\\
\alpha_3+i\alpha_4&\alpha_5+i\alpha_6&-\alpha_7-\alpha_8
\end{pmatrix}
=\sum_{a=1}^8\alpha_aT_a
$$

と表せる。

2. $T_1,T_2,T_7$ を具体的に書け。
3. 設問1(i)より、実数 $A_{ab,c}$ を用いて $[T_a,T_b]=i\sum_{c=1}^8 A_{ab,c}T_c$ と書ける。$A_{71,2}$ と $A_{56,8}$ を求めよ。
4. 実数 $\theta$ を用いて $U=e^{i\theta T}$ と定め、3成分複素ベクトル $x,y$ に対して $x'=Ux,y'=Uy$ とする。
   - (i) $G_a=x^\dagger T_ay$、$G'_a=x'^\dagger T_ay'$ とおく。$G'_a=G_a+i\theta\sum_{b=1}^8H_{ab}G_b+O(\theta^2)$ と書けることを示し、$H_{ab}$ を求めよ。
   - (ii) $z_i=\sum_{j,k=1}^3\epsilon_{ijk}x_jy_k$、$z'_i=\sum_{j,k=1}^3\epsilon_{ijk}x'_jy'_k$ とおき、$z=(z_1,z_2,z_3)^{\mathsf T}$、$z'=(z'_1,z'_2,z'_3)^{\mathsf T}$ とする。$z'=(I+i\theta M)z+O(\theta^2)$ と書けることを示し、$M$ を求めよ。$\epsilon_{ijk}$ は $\epsilon_{123}=1$ の3階完全反対称テンソルであり、次式を用いてよい。

$$
\sum_{k=1}^3\epsilon_{ijk}\epsilon_{klm}
=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl}.
$$

#### 题目描述

1. 对有限维无迹厄米矩阵 $A,B$，证明 $i[A,B]$ 仍为无迹厄米矩阵、$e^{iA}$ 为酉矩阵且行列式为1。
2. 按上式给定的八个实参数写出基矩阵 $T_1,T_2,T_7$。
3. 对 $[T_a,T_b]=i\sum_cA_{ab,c}T_c$，求 $A_{71,2}$ 和 $A_{56,8}$。
4. 令 $U=e^{i\theta T}$、$x'=Ux,y'=Uy$。①将 $G'_a=x'^\dagger T_ay'$ 展开至 $\theta$ 一阶，求相对于 $G_b=x^\dagger T_by$ 的矩阵 $H$；②对无复共轭的叉积 $z=x\times y$、$z'=x'\times y'$，求一阶变换矩阵 $M$。可使用上面的 Levi-Civita 符号缩并恒等式。

## **Kai**

### 1

(i) エルミート性から

$$
\bigl(i[A,B]\bigr)^\dagger=-i(B^\dagger A^\dagger-A^\dagger B^\dagger)=i[A,B].
$$

また、トレースの巡回性により $\operatorname{tr}(i[A,B])=i\{\operatorname{tr}(AB)-\operatorname{tr}(BA)\}=0$。

(ii) $A=VDV^\dagger$ と対角化する。$D=\operatorname{diag}(d_1,\ldots,d_n)$ は実対角行列なので

$$
U=Ve^{iD}V^\dagger,\qquad U^\dagger U=Ve^{-iD}e^{iD}V^\dagger=I.
$$

(iii) $\sum_jd_j=\operatorname{tr}A=0$ より

$$
\boxed{\det U=\prod_je^{id_j}=e^{i\sum_jd_j}=1}.
$$

### 2

各実パラメータの係数を読み取ると

$$
\boxed{T_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix},\quad
T_2=\begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix},\quad
T_7=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}}.
$$

### 3

$$
[T_7,T_1]=\begin{pmatrix}0&1&0\\-1&0&0\\0&0&0\end{pmatrix}=iT_2,
$$

$$
[T_5,T_6]=\begin{pmatrix}0&0&0\\0&2i&0\\0&0&-2i\end{pmatrix}=2iT_8.
$$

したがって

$$
\boxed{A_{71,2}=1,\qquad A_{56,8}=2}.
$$

### 4(i)

$U=I+i\theta T+O(\theta^2)$、$U^\dagger=I-i\theta T+O(\theta^2)$ より

$$
\begin{aligned}
G'_a
&=x^\dagger U^\dagger T_aUy\\
&=G_a+i\theta x^\dagger[T_a,T]y+O(\theta^2)\\
&=G_a+i\theta\sum_{b=1}^8\left(i\sum_{c=1}^8\alpha_cA_{ac,b}\right)G_b+O(\theta^2).
\end{aligned}
$$

よって

$$
\boxed{H_{ab}=i\sum_{c=1}^8\alpha_cA_{ac,b}}.
$$

### 4(ii)

任意の可逆な3次行列 $U$ に対し、行列式の交代性から

$$
(Ux)\times(Uy)=\det(U)U^{-\mathsf T}(x\times y)
$$

が成り立つ。実際、任意の $w$ との双線形内積をとると

$$
(Uw)^{\mathsf T}\{(Ux)\times(Uy)\}
=\det[Uw,Ux,Uy]
=\det(U)\,w^{\mathsf T}(x\times y)
$$

となり、上式が従う。設問1より $\det U=1$、また

$$
U^{-\mathsf T}=e^{-i\theta T^{\mathsf T}}
=I-i\theta T^{\mathsf T}+O(\theta^2)
$$

なので

$$
\boxed{M=-T^{\mathsf T}
=-\begin{pmatrix}
\alpha_7&\alpha_1+i\alpha_2&\alpha_3+i\alpha_4\\
\alpha_1-i\alpha_2&\alpha_8&\alpha_5+i\alpha_6\\
\alpha_3-i\alpha_4&\alpha_5-i\alpha_6&-\alpha_7-\alpha_8
\end{pmatrix}}.
$$

## **Reference**

- [東京大学公式問題（PDF 5ページ）](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2015/03/sugakuH31.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2019%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_1.html)
