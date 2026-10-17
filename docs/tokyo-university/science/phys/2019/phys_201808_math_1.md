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

以下の設問に答えよ。ただし正方行列 $X,Y$ に対して $\operatorname{tr}X$ は $X$ のトレース、$\det X$ は $X$ の行列式を表し、

$$
[X,Y]=XY-YX,\qquad e^X=\sum_{k=0}^{\infty}\frac{X^k}{k!}
$$

とする。また、行列 $X$ に対して、$X^{\mathsf T}$ は $X$ の転置、$X^\dagger$ は $X$ のエルミート共役（転置の複素共役）を表す。ベクトル $x$ に対して $x^{\mathsf T}$ および $x^\dagger$ も同様である。$I$ は単位行列を表す。虚数単位を $i$ とする。

1. $A,B$ をエルミート（$A^\dagger=A,B^\dagger=B$）かつトレースレス（$\operatorname{tr}A=\operatorname{tr}B=0$）な有限次元の行列とする。以下の (i)〜(iii) を示せ。ただしエルミート行列 $A$ が対角行列 $D$ とユニタリー行列 $V$（$V^\dagger V=I$）を用いて $A=VDV^\dagger$ と対角化できること、および同じ型の正方行列 $X,Y$ に対して $\det(XY)=\det X\det Y$ が成り立つことを用いてもよい。

   (i) $i[A,B]$ はエルミートかつトレースレスである。

   (ii) $U=e^{iA}$ はユニタリー行列（$U^\dagger U=I$）である。

   (iii) $U=e^{iA}$ は $\det U=1$ をみたす。

任意のトレースレスな3行3列エルミート行列 $T$ は8つの実数 $\alpha_1,\alpha_2,\ldots,\alpha_8$ と8つのトレースレスな3行3列エルミート行列 $T_1,T_2,\ldots,T_8$ を用いて以下のように表すことができる。

$$
T=\begin{pmatrix}
\alpha_7&\alpha_1-i\alpha_2&\alpha_3-i\alpha_4\\
\alpha_1+i\alpha_2&\alpha_8&\alpha_5-i\alpha_6\\
\alpha_3+i\alpha_4&\alpha_5+i\alpha_6&-\alpha_7-\alpha_8
\end{pmatrix}
=\sum_{a=1}^8\alpha_aT_a.
$$

2. 行列 $T_1,T_2,T_7$ の具体形を書け。

3. 設問1の (i) より、定数 $A_{ab,c}$（$a,b,c=1,2,\ldots,8$）を用いて

$$
[T_a,T_b]=i\sum_{c=1}^8 A_{ab,c}T_c
$$

と書ける。$A_{71,2}$ および $A_{56,8}$ を求めよ。

4. 実数 $\theta$ を用いて行列 $U$ を

$$
U=e^{i\theta T}=\exp\left(i\theta\sum_{a=1}^8\alpha_aT_a\right)
$$

と定義し、複素3成分のベクトル $x=(x_1,x_2,x_3)^{\mathsf T}$、$y=(y_1,y_2,y_3)^{\mathsf T}$、およびそれらに $U$ をかけたベクトル $x'=Ux$、$y'=Uy$ を考える。

   (i) $G_a=x^\dagger T_ay$、$G'_a=x'^\dagger T_ay'$ とする（$a=1,2,\ldots,8$）。$G'_a$ を $\theta$ の1次まで展開すると、

$$
G'_a=G_a+i\theta\sum_{b=1}^8H_{ab}G_b+O(\theta^2)
$$

の形に書けることを示し、$H_{ab}$ を求めよ。

   (ii)

$$
z_i=\sum_{j,k=1}^3\epsilon_{ijk}x_jy_k,\qquad
z'_i=\sum_{j,k=1}^3\epsilon_{ijk}x'_jy'_k
$$

とし、$z=(z_1,z_2,z_3)^{\mathsf T}$、$z'=(z'_1,z'_2,z'_3)^{\mathsf T}$ とする。$z'$ を $\theta$ の1次まで展開すると

$$
z'=(I+i\theta M)z+O(\theta^2)
$$

の形に書けることを示し、行列 $M$ を求めよ。ただし $\epsilon_{ijk}$ は3階の完全反対称テンソルで、$\epsilon_{123}=1$、$\epsilon_{ijk}=-\epsilon_{jik}=-\epsilon_{kji}$ である。

$$
\sum_{k=1}^3\epsilon_{ijk}\epsilon_{klm}
=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl}
$$

を用いてよい（$\delta_{ij}$ 等はクロネッカーのデルタを表す）。

#### 题目描述

回答以下各问。对方阵 $X,Y$，$\operatorname{tr}X$ 表示 $X$ 的迹，$\det X$ 表示行列式，并定义

$$
[X,Y]=XY-YX,\qquad e^X=\sum_{k=0}^{\infty}\frac{X^k}{k!}.
$$

对矩阵 $X$，$X^{\mathsf T}$ 表示转置，$X^\dagger$ 表示厄米共轭（转置的复共轭）。对向量 $x$ 的 $x^{\mathsf T}$ 和 $x^\dagger$ 也作同样定义。$I$ 为单位矩阵，$i$ 为虚数单位。

1. 设 $A,B$ 是有限维厄米矩阵（$A^\dagger=A,B^\dagger=B$），且均无迹（$\operatorname{tr}A=\operatorname{tr}B=0$）。证明以下 (i)〜(iii)。可以使用：厄米矩阵 $A$ 能通过对角矩阵 $D$ 和酉矩阵 $V$（$V^\dagger V=I$）写为 $A=VDV^\dagger$；同型方阵 $X,Y$ 满足 $\det(XY)=\det X\det Y$。

   (i) $i[A,B]$ 为无迹厄米矩阵。

   (ii) $U=e^{iA}$ 为酉矩阵（$U^\dagger U=I$）。

   (iii) $U=e^{iA}$ 满足 $\det U=1$。

任意无迹的 $3\times3$ 厄米矩阵 $T$，都能用8个实数 $\alpha_1,\ldots,\alpha_8$ 和8个无迹的 $3\times3$ 厄米矩阵 $T_1,\ldots,T_8$ 表示为

$$
T=\begin{pmatrix}
\alpha_7&\alpha_1-i\alpha_2&\alpha_3-i\alpha_4\\
\alpha_1+i\alpha_2&\alpha_8&\alpha_5-i\alpha_6\\
\alpha_3+i\alpha_4&\alpha_5+i\alpha_6&-\alpha_7-\alpha_8
\end{pmatrix}
=\sum_{a=1}^8\alpha_aT_a.
$$

2. 写出矩阵 $T_1,T_2,T_7$ 的具体形式。

3. 由第1问 (i)，可用常数 $A_{ab,c}$（$a,b,c=1,2,\ldots,8$）写成

$$
[T_a,T_b]=i\sum_{c=1}^8A_{ab,c}T_c.
$$

求 $A_{71,2}$ 和 $A_{56,8}$。

4. 用实数 $\theta$ 定义矩阵

$$
U=e^{i\theta T}=\exp\left(i\theta\sum_{a=1}^8\alpha_aT_a\right).
$$

考虑三分量复向量 $x=(x_1,x_2,x_3)^{\mathsf T}$、$y=(y_1,y_2,y_3)^{\mathsf T}$，以及左乘 $U$ 后的向量 $x'=Ux$、$y'=Uy$。

   (i) 令 $G_a=x^\dagger T_ay$、$G'_a=x'^\dagger T_ay'$（$a=1,2,\ldots,8$）。证明将 $G'_a$ 展开到 $\theta$ 的一阶，可以写成

$$
G'_a=G_a+i\theta\sum_{b=1}^8H_{ab}G_b+O(\theta^2),
$$

并求 $H_{ab}$。

   (ii) 定义

$$
z_i=\sum_{j,k=1}^3\epsilon_{ijk}x_jy_k,\qquad
z'_i=\sum_{j,k=1}^3\epsilon_{ijk}x'_jy'_k,
$$

以及 $z=(z_1,z_2,z_3)^{\mathsf T}$、$z'=(z'_1,z'_2,z'_3)^{\mathsf T}$。证明将 $z'$ 展开到 $\theta$ 的一阶，可以写成

$$
z'=(I+i\theta M)z+O(\theta^2),
$$

并求矩阵 $M$。这里 $\epsilon_{ijk}$ 为三阶完全反对称张量，满足 $\epsilon_{123}=1$、$\epsilon_{ijk}=-\epsilon_{jik}=-\epsilon_{kji}$。可以使用

$$
\sum_{k=1}^3\epsilon_{ijk}\epsilon_{klm}
=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl},
$$

其中 $\delta_{ij}$ 等表示克罗内克符号。

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
\boxed{T_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix}}.
$$

$$
\boxed{T_2=\begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix}}.
$$

$$
\boxed{T_7=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}}.
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
\begin{aligned}
(Uw)^{\mathsf T}\{(Ux)\times(Uy)\}
&=\det[Uw,Ux,Uy]\\
&=\det(U)\,w^{\mathsf T}(x\times y).
\end{aligned}
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
