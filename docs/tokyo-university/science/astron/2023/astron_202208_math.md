---
sidebar_label: "2022年8月実施 数学"
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Singular-Value-Decomposition
---

# 東京大学 理学系研究科 天文学専攻 2022年8月実施 数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下は公式問題の独立した要約である。行列・ベクトルは実数とし、$A^T$ は転置を表す。

1. 実対称行列の異なる固有値に属する固有ベクトルが直交することを示せ。
2. 対称行列 $A$ が相異なる固有値 $\lambda_1,\ldots,\lambda_n$ と単位固有ベクトル $u_1,\ldots,u_n$ をもつ。$U=(u_1,\ldots,u_n)$ として次を示せ。
   1. $U^T=U^{-1}$。
   2. $A=U\operatorname{diag}(\lambda_1,\ldots,\lambda_n)U^T$。
   3. $x^TAx>0$ が全ての $x\ne0$ で成り立つなら、全固有値は正である。
3. $P\in\mathbb R^{n\times n}$、$M=PP^T$、$N=P^TP$ とする。
   1. $M,N$ の固有値が一致することを示せ。
   2. $P$ が零行列でなければ固有値が正であることを示せ。
   3. 同じ固有値 $\lambda$ に属する $M,N$ の単位固有ベクトル $u,v$ について、$u=\pm Pv/\sqrt\lambda$、$v=\pm P^Tu/\sqrt\lambda$ を示せ。
   4. 固有値を大きい順に並べ、いずれも正とする。対応する単位固有ベクトルを列に並べた $U,V$ について、$P=U\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n})V^T$ を示せ。
4. $512\times512$ 画像行列を上の分解で階数 $r$ に近似する。各実数を4バイトとするとき、$r=100,10$ のファイルサイズと元画像に対する割合を、有効数字1桁で求めよ。

## **Kai**

### 問1

$Au=\lambda u,Av=\mu v$ とする。$A=A^T$ より

$$
\lambda u^Tv=(Au)^Tv=u^TAv=\mu u^Tv.
$$

$\lambda\ne\mu$ なら $(\lambda-\mu)u^Tv=0$ なので、$\boxed{u^Tv=0}$。

### 問2

#### (a)

問1より $u_i^Tu_j=\delta_{ij}$。したがって

$$
U^TU=I,\qquad\boxed{U^{-1}=U^T}.
$$

#### (b)

$AU=U\Lambda$、$\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ より

$$
\boxed{A=U\Lambda U^T}.
$$

#### (c)

各 $i$ について

$$
0<u_i^TAu_i=\lambda_i u_i^Tu_i=\lambda_i.
$$

よって $\boxed{\lambda_i>0\ (i=1,\ldots,n)}$。

### 問3

#### (a)

$Mu=\lambda u$、$\lambda\ne0$ なら

$$
N(P^Tu)=P^TMu=\lambda P^Tu,
$$

かつ $P^Tu\ne0$。逆も同様で、非零固有値とその重複度は一致する。また

$$
\dim\ker M=\dim\ker P^T=n-\operatorname{rank}P
=\dim\ker N.
$$

したがって零固有値の重複度も一致する。

#### (b)

任意の $x$ に対し

$$
x^TMx=\|P^Tx\|^2\ge0,\qquad x^TNx=\|Px\|^2\ge0.
$$

よって固有値は非負だが、この命題は一般には成り立たない。例えば

$$
P=\begin{pmatrix}1&0\\0&0\end{pmatrix}
$$

は零行列でないが、$M=N=\operatorname{diag}(1,0)$ である。$P$ が正則なら全固有値は正となる。また、$P\ne0$ なら $\operatorname{tr}(PP^T)=\sum_{i,j}P_{ij}^2>0$ なので、少なくとも一つの固有値は正である。

#### (c)

$Nv=\lambda v$、$\lambda>0$ に対して

$$
u=\frac{Pv}{\sqrt\lambda}
$$

とおけば $\|u\|=1$、$Mu=\lambda u$ であり、

$$
\boxed{u=\frac{Pv}{\sqrt\lambda},\qquad
v=\frac{P^Tu}{\sqrt\lambda}}.
$$

固有空間が1次元なら、単位固有ベクトルの向きにより両式に同じ符号 $\pm$ が付く。重複固有値の場合は、任意に選んだ $u,v$ がこの関係を満たすとは限らない。例えば $P=I_2$、$u=(1,0)^T$、$v=(0,1)^T$ では $u\ne\pm Pv$ である。$\lambda=0$ の場合は $Pv=0$、$P^Tu=0$ となり、上の除算は行わない。

#### (d)

正規直交基底 $v_i$ を選び、$\lambda_i>0$ では問(c)の対応により $u_i=Pv_i/\sqrt{\lambda_i}$ とする。この対応により $u_i$ も正規直交する。$\lambda_i=0$ では $\ker P,\ker P^T$ の正規直交基底を選ぶ。このとき $Pv_i=\sqrt{\lambda_i}u_i$ だから

$$
PV=U\Sigma,\qquad
\Sigma=\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n}).
$$

$V^{-1}=V^T$ より

$$
\boxed{P=U\Sigma V^T}.
$$

### 問4

$U_r,V_r$ は各 $512r$ 個、対角成分は $r$ 個の実数をもつ。したがって

$$
S_r=4(512r+r+512r)=4100r\ \text{bytes}.
$$

元画像は $512^2\cdot4=1{,}048{,}576$ bytes なので、

$$
\begin{array}{c|c|c}
r&S_r&S_r/1{,}048{,}576\\ \hline
100&410{,}000\ \text{bytes}&39.1\%\simeq\boxed{40\%}\\
10&41{,}000\ \text{bytes}&3.91\%\simeq\boxed{4\%}
\end{array}
$$

## **Reference**

- [東京大学 天文学専攻「大学院入試 試験問題」](https://www.astron.s.u-tokyo.ac.jp/admission/graduate/exam/)
- [令和5年度専門科目問題（公式PDF）](https://www.astron.s.u-tokyo.ac.jp/tenmon/wp-content/uploads/2023/01/R5%E4%BF%AE%E5%A3%AB%E3%83%BB%E5%8D%9A%E5%A3%AB%E8%AA%B2%E7%A8%8B%E5%85%A5%E5%AD%A6%E8%A9%A6%E9%A8%93%E5%95%8F%E9%A1%8C_%E5%85%AC%E9%96%8B.pdf)
