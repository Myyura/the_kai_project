---
sidebar_label: 2015年3月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Finite-Dimensional-Hamiltonian
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 専門科目 問題6 物理専門1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

以下のシュレーディンガー方程式で記述される2準位量子系がを考える。ここに $H$ はハミルトニアン，$|\psi\rangle$ は $H$ の固有状態ベクトル，$\varepsilon$ はその固有値である。

$$
H|\psi\rangle=\varepsilon|\psi\rangle\tag{6A}
$$

$$
H=\begin{pmatrix}E_1&-A\\-A&E_2\end{pmatrix}\tag{6B}
$$

以下の問に答えよ。

(1) この系のエネルギー固有値 $\varepsilon$ をすべて求めよ。

(2) 次のように与えられる $2\times2$ 行列 $U$ を考える。

$$
U=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\tag{6C}
$$

$U$ の逆行列 $U^{-1}$ を求めよ。

(3) $|\psi\rangle$ および $H$ を，$U$ と $U^{-1}$ を用いて次式のように $|\phi\rangle$ および $H'$ に変換する。

$$
|\phi\rangle=U^{-1}|\psi\rangle\tag{6D}
$$

$$
H'=U^{-1}HU\tag{6E}
$$

このとき $|\phi\rangle$ は $H'$ の固有状態であり，その固有値は，やはり $\varepsilon$ となることを示せ。

(4) $E_1=E_2=E_0$ とする時，$H$ の固有値 $\varepsilon$ と対応する固有状態ベクトル

$$
|\psi\rangle=\begin{pmatrix}C_1\\C_2\end{pmatrix}\tag{6G}
$$

をすべて求めよ。ただし $|\psi\rangle$ は規格化されているものとする。

(5) $E_1=E_2=E_0$ のとき，$H'$ の行列表現を求め，$H$ の固有値がその対角要素に並ぶことを示せ。

### 题目描述

双能级系统满足 $H|\psi\rangle=\varepsilon|\psi\rangle$，其中

$$
H=\begin{pmatrix}E_1&-A\\-A&E_2\end{pmatrix}
$$

各参数为实数。

1. 求全部能量特征值。
2. 对 $U=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$，求 $U^{-1}$。
3. 令 $|\phi\rangle=U^{-1}|\psi\rangle$，$H'=U^{-1}HU$，证明 $|\phi\rangle$ 是 $H'$ 的特征向量且特征值仍为 $\varepsilon$。
4. 当 $E_1=E_2=E_0$ 时，求全部能量特征值及相应的归一化特征态。
5. 在问 (4) 条件下求 $H'$，说明其对角元即能量特征值。

## **Kai**

### (1)

由 $(E_1-\varepsilon)(E_2-\varepsilon)-A^2=0$，

$$
\boxed{\varepsilon_\pm=\frac{E_1+E_2}2\pm\sqrt{\left(\frac{E_1-E_2}2\right)^2+A^2}}.
$$

### (2)、(3)

$U^TU=U^2=E$，故 $\boxed{U^{-1}=U}$。并且

$$
H'|\phi\rangle=U^{-1}HUU^{-1}|\psi\rangle
=U^{-1}H|\psi\rangle=\varepsilon|\phi\rangle.
$$

### (4)

可取

$$
\boxed{\begin{aligned}
\varepsilon_s&=E_0-A,&|\psi_s\rangle&=\frac1{\sqrt2}(1,1)^T,\\
\varepsilon_a&=E_0+A,&|\psi_a\rangle&=\frac1{\sqrt2}(1,-1)^T.
\end{aligned}}
$$

当 $A=0$ 时二者简并，任意归一化线性组合也为能量 $E_0$ 的特征态。

### (5)

$$
\boxed{H'=\begin{pmatrix}E_0-A&0\\0&E_0+A\end{pmatrix}}.
$$

$U$ 的两列正是上述标准正交特征态，因此变换将 $H$ 对角化。
