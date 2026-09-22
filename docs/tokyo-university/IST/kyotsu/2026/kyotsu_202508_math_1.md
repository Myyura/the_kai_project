---
sidebar_label: 2025年8月実施 数学 第1問
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix-Square-Root
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Polar-Decomposition
---
# 東京大学 情報理工学系研究科 2025年8月実施 数学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実正方行列に関する以下の問いに答えよ．

(1) 行列 $A$ を

$$
A=\begin{pmatrix}
5&-4&0\\
-4&5&0\\
0&0&16
\end{pmatrix}
$$

で定める．

- (i) $A$ の固有値をすべて求めよ．また，それぞれの固有値に対して，それに対応する固有ベクトルを一つ求めよ．
- (ii) 条件 $B^2=A$ を満たす正定値実対称行列 $B$ を一つ求めよ．

(2) $C$ を正定値実対称行列とする．条件 $D^2=C$ を満たす正定値実対称行列 $D$ が一意に存在することを示せ．

(3) 実正方行列 $F$ は正則であるとする．

- (i) 条件 $F=SU=VT$ を満たす正定値実対称行列 $S,T$ および直交行列 $U,V$ がそれぞれ一意に存在することを示せ．
- (ii) 問 (i) の $S$ と $T$ が条件 $T=F^{-1}SF$ を満たすことを示せ．
- (iii) 問 (i) の $U$ と $V$ が条件 $U=V$ を満たすことを示せ．

#### 题目描述

回答下列关于实方阵的问题。

（1）定义

$$
A=\begin{pmatrix}
5&-4&0\\
-4&5&0\\
0&0&16
\end{pmatrix}.
$$

- （i）求 $A$ 的全部特征值，并为每个特征值给出一个对应的特征向量。
- （ii）求一个满足 $B^2=A$ 的实对称正定矩阵 $B$。

（2）设 $C$ 是实对称正定矩阵。证明存在唯一的实对称正定矩阵 $D$，使得 $D^2=C$。

（3）设实方阵 $F$ 可逆。

- （i）证明存在唯一的实对称正定矩阵 $S,T$ 和正交矩阵 $U,V$，使得 $F=SU=VT$。
- （ii）证明（i）中的 $S,T$ 满足 $T=F^{-1}SF$。
- （iii）证明（i）中的 $U,V$ 满足 $U=V$。

## **Kai**

### (1)

#### (i)

$$
\det(\lambda I-A)=(\lambda-16)\bigl((\lambda-5)^2-16\bigr)
=(\lambda-1)(\lambda-9)(\lambda-16).
$$

したがって，固有値と対応する固有ベクトルの一例は

$$
\boxed{
\begin{array}{c|c}
\text{固有値}&\text{固有ベクトル}\\\hline
1&(1,1,0)^{\mathsf T}\\
9&(1,-1,0)^{\mathsf T}\\
16&(0,0,1)^{\mathsf T}
\end{array}}
$$

である．

#### (ii)

(i) の固有ベクトルを正規化して並べた直交行列を $Q$ とすると，
$A=Q\operatorname{diag}(1,9,16)Q^{\mathsf T}$ である．よって

$$
\boxed{
B=Q\operatorname{diag}(1,3,4)Q^{\mathsf T}
=\begin{pmatrix}
2&-1&0\\
-1&2&0\\
0&0&4
\end{pmatrix}}
$$

とすれば，$B$ は正定値実対称行列であり，$B^2=A$ を満たす．

### (2)

実対称行列の直交対角化により，

$$
C=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_m)Q^{\mathsf T},
\qquad \lambda_i>0
$$

と書ける．したがって

$$
D=Q\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_m})Q^{\mathsf T}
$$

は求める正定値実対称行列である．

一意性を示す．正定値実対称行列 $E$ が $E^2=C$ を満たすとすると，
$EC=E^3=CE$ であるから，$E$ は $C$ の各固有空間を不変にする．
固有値 $\lambda$ の固有空間上で，$E$ の制限は正定値実対称行列であり，
その固有値 $\mu$ は $\mu>0$ かつ $\mu^2=\lambda$ を満たす．
よってこの制限は $\sqrt\lambda I$ である．
$E$ と $D$ は $C$ のすべての固有空間で一致するので，$E=D$ が従う．

### (3)

#### (i)

$F$ は正則なので $FF^{\mathsf T}$ と $F^{\mathsf T}F$ は正定値実対称行列である．
(2) で得た一意な正定値平方根を用いて

$$
\boxed{
S=(FF^{\mathsf T})^{1/2},\quad U=S^{-1}F,
\qquad
T=(F^{\mathsf T}F)^{1/2},\quad V=FT^{-1}}
$$

と定める．このとき

$$
UU^{\mathsf T}=S^{-1}FF^{\mathsf T}S^{-1}=I,
\qquad
V^{\mathsf T}V=T^{-1}F^{\mathsf T}FT^{-1}=I
$$

であり，$U,V$ は直交行列で，$F=SU=VT$ が成り立つ．

逆にこのような分解があれば，
$S^2=FF^{\mathsf T}$，$T^2=F^{\mathsf T}F$ となる．
(2) により $S,T$ は一意であり，$U=S^{-1}F$，$V=FT^{-1}$ も一意である．

#### (ii)

$F=SU$ より

$$
H:=F^{-1}SF=U^{\mathsf T}SU
$$

は正定値実対称行列であり，

$$
H^2=U^{\mathsf T}S^2U=F^{\mathsf T}F=T^2.
$$

(2) の一意性から，$\boxed{T=F^{-1}SF}$ である．

#### (iii)

(ii) の $T=U^{\mathsf T}SU$ より

$$
UT=SU=F=VT.
$$

$T$ は正則なので，$\boxed{U=V}$ が従う．

## **Knowledge**

固有値と固有ベクトル，実対称行列の直交対角化，正定値平方根，極分解．
