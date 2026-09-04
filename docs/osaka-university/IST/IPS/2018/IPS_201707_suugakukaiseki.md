---
sidebar_label: "2017年7月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Linear-Algebra.Matrix-Exponential
---
# 大阪大学 情報科学研究科 情報数理学専攻 2017年7月実施 情報数理学 数学解析

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 1

原点を中心とする半径 $(2k+1)\pi$ の円周を $C_k$ とする（$k$ は非負整数）。複素積分

$$
I_k=\int_{C_k}\frac{dz}{1-e^z}
$$

を計算せよ。

### 2

実数値関数 $f(x)$ の偶部と奇部を

$$
p(x)=\frac{f(x)+f(-x)}2,\qquad q(x)=\frac{f(x)-f(-x)}2
$$

とする。$\hat f(\omega)=g(\omega)+ih(\omega)$（$g,h$ は実数値）と表すとき、$\hat p=g$, $\hat q=ih$ を示せ。

### 3

$\dot x=Ax$（$A$ は実 $n\times n$ 行列）を考え、$e^{tA}=\sum_{k=0}^\infty t^kA^k/k!$ とする。実数 $\alpha$ とベクトル $f,g$ に対して $Af=\alpha f+g$, $Ag=\alpha g$ が成り立つ。

(1) $k\ge1$ に対し $A^kf$、(2) $e^{tA}f$、(3) $x(0)=f+g$ を満たす解を、$\alpha,f,g$ などを用いて示せ。

## **Kai**

### 1

円周を正向きに取る。極は $z=2\pi i m$（$m\in\mathbb Z$）で、各極の留数は

$$
\operatorname{Res}_{z=2\pi im}\frac1{1-e^z}=\frac1{-e^{2\pi im}}=-1.
$$

$C_k$ の内部には $m=-k,\ldots,k$ の $2k+1$ 個の極がある。留数定理より

$$
\boxed{I_k=-2\pi i(2k+1)}.
$$

### 2

$\hat f(\omega)=\int_{\mathbb R}f(x)e^{-i\omega x}\,dx$ とする。$f$ が実数値なので

$$
\widehat{f(-\cdot)}(\omega)=\hat f(-\omega)=\overline{\hat f(\omega)}.
$$

したがって線形性より

$$
\boxed{\hat p=\frac{\hat f+\overline{\hat f}}2=g,\qquad\hat q=\frac{\hat f-\overline{\hat f}}2=ih}.
$$

### 3

(1) 帰納法により

$$
\boxed{A^kf=\alpha^kf+k\alpha^{k-1}g}.
$$

$k=1$ の係数 $k\alpha^{k-1}$ は、$\alpha=0$ の場合も1と解釈する。

(2) (1)を級数に代入すると

$$
e^{tA}f=e^{\alpha t}f+\sum_{k=1}^\infty\frac{t^k\alpha^{k-1}}{(k-1)!}g
=\boxed{e^{\alpha t}(f+tg)}.
$$

(3) $e^{tA}g=e^{\alpha t}g$ なので

$$
\boxed{x(t)=e^{\alpha t}\{f+(t+1)g\}}.
$$
