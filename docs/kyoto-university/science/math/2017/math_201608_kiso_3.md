---
sidebar_label: "2016年8月実施 基礎科目 [3]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Generalized-Eigenvectors-and-Invariant-Subspaces
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [3]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$m,n$ を正の整数とし、$A$ を複素 $(n,m)$ 行列、$B$ を複素 $(m,n)$ 行列とする。複素数 $\lambda\ne0$ について、以下の問に答えよ。

(i) $\lambda$ が $BA$ の固有値ならば、$\lambda$ は $AB$ の固有値でもあることを示せ。

(ii) $\mathbb C^m,\mathbb C^n$ の部分空間 $V,W$ をそれぞれ

$$
\begin{aligned}
V&=\{x\in\mathbb C^m\mid \text{ある正の整数 }k\text{ に対して }(BA-\lambda I_m)^kx=0\},\\
W&=\{y\in\mathbb C^n\mid \text{ある正の整数 }\ell\text{ に対して }(AB-\lambda I_n)^\ell y=0\}
\end{aligned}
$$

で定める。ただし $I_m,I_n$ は単位行列、$0$ は零ベクトルを表す。このとき $\dim V=\dim W$ であることを示せ。

#### 题目描述

设 $m,n$ 为正整数，$A\in M_{n,m}(\mathbb C)$、$B\in M_{m,n}(\mathbb C)$，且 $\lambda\in\mathbb C\setminus\{0\}$。

(i) 证明：若 $\lambda$ 是 $BA$ 的特征值，则也是 $AB$ 的特征值。

(ii) 定义广义特征子空间

$$
\begin{aligned}
V&=\{x\in\mathbb C^m\mid \exists k\ge1,\ (BA-\lambda I_m)^kx=0\},\\
W&=\{y\in\mathbb C^n\mid \exists\ell\ge1,\ (AB-\lambda I_n)^\ell y=0\}.
\end{aligned}
$$

其中 $I_m,I_n$ 为单位矩阵。证明 $\dim V=\dim W$。

## **Kai**

### (i)

$BAx=\lambda x$ を満たす $x\ne0$ を取る。もし $Ax=0$ なら $\lambda x=BAx=0$ となり、$\lambda\ne0$ に反する。よって $Ax\ne0$ であり、

$$
AB(Ax)=A(BAx)=\lambda Ax
$$

だから、$\lambda$ は $AB$ の固有値である。

### (ii)

恒等式

$$
(AB-\lambda I_n)A=A(BA-\lambda I_m)
$$

を繰り返し用いると、

$$
(AB-\lambda I_n)^kAx=A(BA-\lambda I_m)^kx
$$

となる。したがって $A(V)\subset W$ である。

さらに $x\in V$ かつ $Ax=0$ とする。ある $k\ge1$ に対し $(BA-\lambda I_m)^kx=0$ である一方、$BAx=0$ より

$$
(BA-\lambda I_m)^kx=(-\lambda)^kx.
$$

$\lambda\ne0$ なので $x=0$ である。よって $A|_V:V\to W$ は単射であり、$\dim V\le\dim W$ を得る。

$A,B$ を入れ換えた同じ議論により $B|_W:W\to V$ も単射であるから、$\dim W\le\dim V$ である。以上より

$$
\boxed{\dim V=\dim W}.
$$

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 4ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
