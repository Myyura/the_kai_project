---
sidebar_label: 2011年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Hermitian-Matrix
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Stochastic-Matrix
---
# 京都大学 情報学研究科 システム科学専攻 2011年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
(i) 複素行列 $H=(h_{ij})$ がエルミート行列、すなわち $\overline{h_{ij}}=h_{ji}$ なら、固有値はすべて実数であることを証明せよ。横線は複素共役を表す。

(ii) 次の行列の $n$ 乗 $A^n,B^n$ を求め、その結果を証明せよ。$n$ は自然数、$a,b$ は実数である。

$$
A=\begin{pmatrix}1&a\\0&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&b&0&0&0&1\\0&1&0&0&0&0\\0&0&1&b&0&0\\0&0&0&1&0&0\\0&1&0&0&1&b\\0&0&0&0&0&1\end{pmatrix}.
$$

### 問2
ある都市の8月の気温を長年調べたところ、翌日が真夏日になるかは当日だけに依存し、当日が真夏日なら翌日も真夏日となる確率は $2/3$、当日が真夏日でなければ翌日も真夏日でない確率は $3/4$ であった。8月 $k$ 日が真夏日である確率を $h_k$、そうでない確率を $c_k$ とすると

$$
\begin{pmatrix}h_{k+1}\\c_{k+1}\end{pmatrix}=A\begin{pmatrix}h_k\\c_k\end{pmatrix}
$$

と書ける。

(i) $A$ とその固有値を求めよ。

(ii) 正則行列 $P$ を用いて $D=P^{-1}AP$ と対角化できることを示せ。

(iii) 8月1日が真夏日であったとして、8月 $(d+1)$ 日（$d=0,\ldots,30$）が真夏日となる確率を求めよ。

#### 题目描述

**问1** (i) 若复矩阵 $H=(h_{ij})$ 为 Hermite 矩阵，即 $\overline{h_{ij}}=h_{ji}$，证明其全部特征值都是实数。(ii) 求并证明下列矩阵的 $n$ 次幂；$n$ 为自然数，$a,b$ 为实数。

$$
A=\begin{pmatrix}1&a\\0&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&b&0&0&0&1\\0&1&0&0&0&0\\0&0&1&b&0&0\\0&0&0&1&0&0\\0&1&0&0&1&b\\0&0&0&0&0&1\end{pmatrix}.
$$

**问2** 某城市8月每日是否为盛夏日仅依赖前一天。若当天是盛夏日，次日仍为盛夏日的概率为 $2/3$；若当天不是，次日也不是的概率为 $3/4$。以 $h_k,c_k$ 表示8月 $k$ 日为、非盛夏日的概率，满足 $(h_{k+1},c_{k+1})^{\mathrm T}=A(h_k,c_k)^{\mathrm T}$。(i) 求 $A$ 及特征值。(ii) 给出可逆矩阵 $P$ 使 $P^{-1}AP$ 为对角阵。(iii) 若8月1日为盛夏日，求8月 $d+1$ 日（$d=0,\ldots,30$）为盛夏日的概率。

## **Kai**

### 問1
(i) $Hv=\lambda v$、$v\ne0$ とする。$H^*=H$ より $v^*Hv$ は実数である。従って $\lambda=v^*Hv/(v^*v)\in\mathbb R$。

(ii) $A=I+N_A,B=I+N_B$ とすると、直接乗算により $N_A^2=N_B^2=0$。二項定理から

$$
\boxed{A^n=\begin{pmatrix}1&na\\0&1\end{pmatrix}},\qquad
\boxed{B^n=\begin{pmatrix}1&nb&0&0&0&n\\0&1&0&0&0&0\\0&0&1&nb&0&0\\0&0&0&1&0&0\\0&n&0&0&1&nb\\0&0&0&0&0&1\end{pmatrix}}.
$$

### 問2
(i) 条件付き確率より

$$
\boxed{A=\begin{pmatrix}2/3&1/4\\1/3&3/4\end{pmatrix}},\qquad
\det(\lambda I-A)=(\lambda-1)(\lambda-5/12).
$$

従って固有値は $\boxed{1,5/12}$。

(ii) 対応する固有ベクトルとして $(3,4)^{\mathrm T},(1,-1)^{\mathrm T}$ をとれる。よって

$$
\boxed{P=\begin{pmatrix}3&1\\4&-1\end{pmatrix}},\qquad
\boxed{P^{-1}AP=\operatorname{diag}(1,5/12)}.
$$

(iii) 初期値は $(h_1,c_1)=(1,0)$。$A^d=P\operatorname{diag}(1,(5/12)^d)P^{-1}$ より

$$
\boxed{h_{d+1}=\frac37+\frac47\left(\frac5{12}\right)^d}.
$$

