---
sidebar_label: 2018年8月実施 専門科目 問題6 物理専門
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Heisenberg-Uncertainty-and-Minimum-Uncertainty-Gaussian
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 専門科目 問題6 物理専門

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

ハミルトニアンが次式で与えられる量子系を考える。

$$
\hat H=\hat T+\hat V\tag{6A}
$$

ただし、

$$
\hat T=\frac{\hat p^2}{2m},\qquad\hat V=\frac12k\hat x^2\tag{6B}
$$

である。ここで、$m$ と $k$ はそれぞれ粒子の質量と正の定数である。$\hat x$ と $\hat p$ はそれぞれ位置演算子と運動量演算子であり、次式を満たす。

$$
[\hat x,\hat p]=\hat x\hat p-\hat p\hat x=i\hbar\tag{6C}
$$

ただし、$i$ と $\hbar$ は虚数単位とプランク定数を $2\pi$ で割った数である。さらに、この系の規格化された状態ベクトル $|\psi\rangle$ に対して、$|f\rangle$ と $|g\rangle$ を次のように定義する。

$$
|f\rangle=(\hat x-\langle\hat x\rangle)|\psi\rangle,\quad|g\rangle=(\hat p-\langle\hat p\rangle)|\psi\rangle\tag{6D}
$$

ここで、任意の演算子 $\hat A$ の期待値は

$$
\langle\hat A\rangle=\langle\psi|\hat A|\psi\rangle\tag{6E}
$$

と与えられる。以下の問に答えよ。

(1) 次式が成り立つことを示せ。

$$
\langle f|g\rangle=\langle\hat x\hat p\rangle-\langle\hat x\rangle\langle\hat p\rangle\tag{6F}
$$

(2) $|\psi\rangle$ に対する $\hat x$ と $\hat p$ の分散はそれぞれ $\sigma_x^2=\langle f|f\rangle$、$\sigma_p^2=\langle g|g\rangle$ と与えられる。$\sigma_x^2\sigma_p^2$ の下限値を求めよ。次の関係が成り立つことに注意せよ。

$$
\langle f|f\rangle\langle g|g\rangle\ge|\langle f|g\rangle|^2\tag{6G}
$$

$$
|z|^2\ge\left(\frac1{2i}(z-z^*)\right)^2\tag{6H}
$$

ただし、$z$ は任意の複素数、$z^*$ は $z$ の複素共役である。

(3) 演算子 $\hat A$ が陽には時間に依存しないとし、期待値 $\langle\hat A\rangle$ の時間微分が次式のように与えられることを示せ。

$$
\frac d{dt}\langle\hat A\rangle=\frac i\hbar\langle[\hat H,\hat A]\rangle\tag{6I}
$$

ただし、$[\hat H,\hat A]=\hat H\hat A-\hat A\hat H$ である。

(4) $\hat x\hat p$ が陽には時間に依存しないとし、期待値 $\langle\hat x\hat p\rangle$ の時間微分を $\langle\hat T\rangle$ と $\langle\hat V\rangle$ を用いて表せ。さらに、この系が定常状態にあるとき、$\langle\hat T\rangle$ と $\langle\hat V\rangle$ の関係を示せ。

### 题目描述

量子体系 $\hat H=\hat T+\hat V$，其中 $\hat T=\hat p^2/(2m),\ \hat V=k\hat x^2/2$，$m,k>0$，$[\hat x,\hat p]=i\hbar$。对归一化态 $|\psi\rangle$ 定义

$$
|f\rangle=(\hat x-\langle\hat x\rangle)|\psi\rangle,\quad |g\rangle=(\hat p-\langle\hat p\rangle)|\psi\rangle.
$$

(1) 证明 $\langle f|g\rangle=\langle\hat x\hat p\rangle-\langle\hat x\rangle\langle\hat p\rangle$。

(2) 由 Cauchy–Schwarz 不等式及 $|z|^2\ge[(z-z^*)/(2i)]^2$，求 $\sigma_x^2\sigma_p^2$ 的下界，其中 $\sigma_x^2=\langle f|f\rangle,\ \sigma_p^2=\langle g|g\rangle$。

(3) 对无显式时间依赖的算符 $\hat A$，证明 $d\langle\hat A\rangle/dt=(i/\hbar)\langle[\hat H,\hat A]\rangle$。

(4) 用 $\langle\hat T\rangle,\langle\hat V\rangle$ 表示 $d\langle\hat x\hat p\rangle/dt$，并求定态中两者关系。

## **Kai**

### (1)

直接展开并利用 $\langle\psi|\psi\rangle=1$：

$$
\langle f|g\rangle=\langle(\hat x-\langle\hat x\rangle)(\hat p-\langle\hat p\rangle)\rangle=\boxed{\langle\hat x\hat p\rangle-\langle\hat x\rangle\langle\hat p\rangle}.
$$

### (2)

令 $z=\langle f|g\rangle$，则 $z-z^*=\langle[\hat x,\hat p]\rangle=i\hbar$。故

$$
\boxed{\sigma_x^2\sigma_p^2\ge |z|^2\ge\hbar^2/4}.
$$

高斯态可取等号，故下界确为 $\hbar^2/4$。

### (3)

由 $i\hbar|\dot\psi\rangle=\hat H|\psi\rangle$ 及其伴随式，

$$
\begin{aligned}
\frac d{dt}\langle\hat A\rangle&=\langle\dot\psi|\hat A|\psi\rangle+\langle\psi|\hat A|\dot\psi\rangle\\
&=\frac i\hbar\langle\hat H\hat A-\hat A\hat H\rangle=\boxed{\frac i\hbar\langle[\hat H,\hat A]\rangle}.
\end{aligned}
$$

### (4)

利用 $[\hat p^2,\hat x\hat p]=-2i\hbar\hat p^2$ 和 $[\hat x^2,\hat x\hat p]=2i\hbar\hat x^2$，得到

$$
\boxed{\frac d{dt}\langle\hat x\hat p\rangle=2\langle\hat T\rangle-2\langle\hat V\rangle}.
$$

定态中左端为零，所以 $\boxed{\langle\hat T\rangle=\langle\hat V\rangle}$。
