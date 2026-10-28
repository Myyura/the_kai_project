---
sidebar_label: "2018年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2018年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#f0bfd8ab-c793-4d11-9255-c7e24b18019e) refined with GPT 6 Astra)

## **Description**


$n$ 次元ユークリッド空間 $\mathbb R^n$ の $k+1$ 個の点 $a_0,a_1,\ldots,a_k$ は、$\sum_{i=0}^k t_i=0$ を満たす $k+1$ 個の実数 $t_0,t_1,\ldots,t_k$ で $\sum_{i=0}^k t_ia_i=0$ を満たすものは $t_i=0$（$i=0,\ldots,k$）以外に存在しないとき、一般の位置にあるといわれる。このとき $k$ 単体 $[a_0,a_1,\ldots,a_k]$ を

$$
[a_0,a_1,\ldots,a_k]
=\left\{\sum_{i=0}^k t_ia_i\in\mathbb R^n\ \middle|\
\sum_{i=0}^k t_i=1,\ t_i\ge0\ (i=0,1,\ldots,k)\right\}
$$

と定める。$k$ 単体 $[a_0,a_1,\ldots,a_k]$ の $m$ 辺単体とは、集合 $\{a_0,a_1,\ldots,a_k\}$ の $m+1$ 個の点からなる部分集合が定める $m$ 単体のことである。

$n\ge3$ とし、$\mathbb R^n$ 内に $n+2$ 個の点 $a,b,a_1,\ldots,a_n$ で、$a,a_1,\ldots,a_n$ と $b,a_1,\ldots,a_n$ がそれぞれ一般の位置にあるものが与えられているとし、$n$ 単体 $\sigma,\tau$ を $\sigma=[a,a_1,\ldots,a_n]$、$\tau=[b,a_1,\ldots,a_n]$ で定める。ただし $\sigma\cap\tau=[a_1,\ldots,a_n]$ と仮定する。以下の問いに答えよ。

(1) $\tau$ の $(n-1)$ 辺単体全体の和集合を $Y_{n-1}$ とする。このとき $Y_{n-1}$ の整係数ホモロジー群を求めよ。

(2) $\sigma$ の $(n-2)$ 辺単体全体の和集合を $X_{n-2}$ とする。このとき $X_{n-2}$ の整係数ホモロジー群を求めよ。

(3) $Y_{n-1},X_{n-2}$ を設問 (1), (2) の通りとする。このとき $X_{n-2}\cup Y_{n-1}$ の整係数ホモロジー群を求めよ。

### 题目描述


若 $n$ 维欧氏空间 $\mathbb R^n$ 中的 $k+1$ 个点 $a_0,a_1,\ldots,a_k$ 满足：对实数 $t_0,t_1,\ldots,t_k$，条件 $\sum_{i=0}^k t_i=0$ 与 $\sum_{i=0}^k t_ia_i=0$ 只能在所有 $t_i=0$（$i=0,\ldots,k$）时同时成立，则称这些点处于一般位置。此时定义 $k$ 维单形

$$
[a_0,a_1,\ldots,a_k]
=\left\{\sum_{i=0}^k t_ia_i\in\mathbb R^n\ \middle|\
\sum_{i=0}^k t_i=1,\ t_i\ge0\ (i=0,1,\ldots,k)\right\}.
$$

其 $m$ 维面是由集合 $\{a_0,a_1,\ldots,a_k\}$ 中任取 $m+1$ 个点构成的子集所确定的 $m$ 维单形。

设 $n\ge3$，给定 $\mathbb R^n$ 中的 $n+2$ 个点 $a,b,a_1,\ldots,a_n$，其中 $a,a_1,\ldots,a_n$ 和 $b,a_1,\ldots,a_n$ 分别处于一般位置。定义 $n$ 维单形 $\sigma=[a,a_1,\ldots,a_n]$、$\tau=[b,a_1,\ldots,a_n]$，并假设 $\sigma\cap\tau=[a_1,\ldots,a_n]$。回答下列问题。

(1) 令 $Y_{n-1}$ 为 $\tau$ 的所有 $(n-1)$ 维面的并。求 $Y_{n-1}$ 的整系数同调群。

(2) 令 $X_{n-2}$ 为 $\sigma$ 的所有 $(n-2)$ 维面的并。求 $X_{n-2}$ 的整系数同调群。

(3) $Y_{n-1},X_{n-2}$ 如 (1)、(2) 所定义。求 $X_{n-2}\cup Y_{n-1}$ 的整系数同调群。

## **Kai**

以下、係数はすべて $\mathbb Z$ とする。

### (1)

$Y_{n-1}=\partial\tau$ は $S^{n-1}$ と同相なので

$$
H_q(Y_{n-1})\cong
\begin{cases}
\mathbb Z & q=0,n-1,\\
0 & \text{それ以外}.
\end{cases}
$$

### (2)

$X_{n-2}$ は $\sigma$ の $(n-2)$-骨格である。$n\ge3$ より連結なので $H_0(X_{n-2})\cong\mathbb Z$。$1\le q<n-2$ における鎖群と境界写像は可縮な単体 $\sigma$ のものと同じなので、$H_q(X_{n-2})=0$ である。また次元より $q>n-2$ でも $0$ である。

$v_0=a,v_i=a_i$（$1\le i\le n$）とし、$F_i=[v_0,\ldots,\widehat v_i,\ldots,v_n]$ とおく。単体 $\sigma$ の鎖複体の完全性から、$X_{n-2}$ の $(n-2)$-サイクル群は $z_i=\partial F_i$（$0\le i\le n$）で生成される。これらの間の関係式は

$$
\sum_{i=0}^n(-1)^iz_i=0
$$

の整数倍だけである。実際、$\ker\partial_{n-1}=\operatorname{im}\partial_n$ は $\partial[v_0,\ldots,v_n]$ で生成される。

$X_{n-2}$ 自体には $(n-1)$-単体がないので、このサイクル群がそのまま $H_{n-2}(X_{n-2})$ となる。上の関係式で $z_n$ を消去でき、$z_0,\ldots,z_{n-1}$ は自由基底になる。したがって

$$
\boxed{
H_q(X_{n-2})\cong
\begin{cases}
\mathbb Z & q=0,\\
\mathbb Z^n & q=n-2,\\
0 & \text{それ以外}.
\end{cases}}
$$

### (3)

$Z=X_{n-2}\cup Y_{n-1}$ とおく。共通部分は共有面 $F_0=[a_1,\ldots,a_n]$ の境界なので

$$
X_{n-2}\cap Y_{n-1}=\partial F_0\cong S^{n-2}.
$$

その基本サイクルは包含によって $H_{n-2}(X_{n-2})$ の基底の一つ $z_0$ に写る。一方、$Y_{n-1}$ 内では $F_0$ の境界なので $0$ に写る。したがって誘導写像

$$
\mathbb Z\cong\widetilde H_{n-2}(X_{n-2}\cap Y_{n-1})
\longrightarrow\widetilde H_{n-2}(X_{n-2})\oplus\widetilde H_{n-2}(Y_{n-1})\cong\mathbb Z^n
$$

は基底の一つへの包含であり、単射かつ余核は $\mathbb Z^{n-1}$ である。

単体的 Mayer–Vietoris 完全列の該当部分は

$$
0\longrightarrow\mathbb Z\longrightarrow\widetilde H_{n-1}(Z)
\longrightarrow\mathbb Z\xrightarrow{1\mapsto z_0}\mathbb Z^n
\longrightarrow\widetilde H_{n-2}(Z)\longrightarrow0.
$$

よって $H_{n-1}(Z)\cong\mathbb Z$、$H_{n-2}(Z)\cong\mathbb Z^{n-1}$ となる。他の正次数は $0$ であり、$Z$ は連結であるから

$$
\boxed{
H_q(X_{n-2}\cup Y_{n-1})\cong
\begin{cases}
\mathbb Z & q=0,n-1,\\
\mathbb Z^{n-1} & q=n-2,\\
0 & \text{それ以外}.
\end{cases}}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2019(H31).pdf`、PDF 4 ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度の対応する解答](https://note.com/normalmath/n/n89152917de11#f0bfd8ab-c793-4d11-9255-c7e24b18019e)
