---
sidebar_label: 2017年8月実施 基礎科目 問題4 情報基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Operations
  - Mathematics.Number-Theory.Greatest-Common-Divisor
  - Computer-Science.Algorithm-Design.Euclidean-Algorithm
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 基礎科目 問題4 情報基礎2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

本問では、行列と言えば 2 次正則行列を指し、特に整数行列と言えば、そのような行列のうち全ての成分が整数であるものを指す。任意の行列 $x$ と整数 $e$ に対して、

$$
x^e=\begin{cases}1\text{（単位行列）}&(e=0)\\x^{e-1}x&(e\ne0)\end{cases}\tag{4A}
$$

であるとする。$s,t$ をそれぞれ次の整数行列

$$
s=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad t=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$

とし、次の式 (4B) の形式の有限積で表すことができる全ての行列 $x$ から成る集合を $L$ とする。

$$
x=u_1^{e_1}u_2^{e_2}\cdots u_k^{e_k}\tag{4B}
$$

ここで、$k\ge1$ であり、$u_1,u_2,\ldots,u_k\in\{s,t\}$、$e_1,e_2,\ldots,e_k$ は整数である。このとき、以下の問に答えよ。もし必要ならば、次の事実 (4C) は証明なしに用いてもよい。

(4C) 任意の 2 つの行列 $x,y$ に対して、$\det xy=\det x\det y$ である。ここで、$\det$ は行列式を表す。

(1) 集合 $L$ に属する任意の行列 $x$ は、$\det x=1$ を満たす整数行列であることを示せ。

(2) 任意の整数 $n$ について、$t^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}$ であることを示し、この式を用いて、行列 $\begin{pmatrix}-1&n\\0&-1\end{pmatrix}$ を式 (4B) の形式の有限積で表せ。

(3) $x=\begin{pmatrix}x_{11}&x_{12}\\x_{21}&x_{22}\end{pmatrix}$ を整数行列とする。$x_{11}$ が整数 $n,r$ を用いて $x_{11}=nx_{21}+r$ と表されているとき、積 $st^{-n}x$ を計算して得られる行列を、$n,r$ および $x_{12},x_{21},x_{22}$ を用いた式で表せ。

(4) 問 (1)–問 (3) の結果を利用して、任意に与えられた整数行列 $x=\begin{pmatrix}x_{11}&x_{12}\\x_{21}&x_{22}\end{pmatrix}$ に対して、絶対値 $|x_{21}|$ に関する再帰処理を用いて、$x$ が集合 $L$ に属するか否かを正しく判定し、特に $x\in L$ であるときは、$x$ を式 (4B) の形式の有限積で記述する式を一つ出力する手続きを与えよ。その正当性も示すこと。

### 题目描述

本题矩阵均为可逆的 $2\times2$ 方阵，元素均为整数时称整矩阵。对整数 $e$，$x^0=I$，$x^e=x^{e-1}x$。令

$$
s=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad t=\begin{pmatrix}1&1\\0&1\end{pmatrix},
$$

$L$ 为所有能写成 $u_1^{e_1}\cdots u_k^{e_k}$ 的矩阵的集合，其中 $k\ge1,u_j\in\{s,t\},e_j\in\mathbb Z$。

1. 证明 $x\in L$ 时 $x$ 为整矩阵且 $\det x=1$。
2. 证明 $t^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}$（$n\in\mathbb Z$），并用 $s,t$ 的幂乘积表示 $\begin{pmatrix}-1&n\\0&-1\end{pmatrix}$。
3. 设 $x=(x_{ij})$ 为整矩阵且 $x_{11}=nx_{21}+r$，求 $st^{-n}x$。
4. 给出对任意整矩阵判定其是否属于 $L$ 的正确算法；对 $|x_{21}|$ 递归，若属于 $L$ 则输出一个上述乘积表示，并证明正确性。

## **Kai**

### (1)、(2)

$$
s^{-1}=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad
t^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}.
$$

$s,t$ 及其逆矩阵均为整矩阵、行列式均为 $1$，故任意整数幂乘积也如此。

对正负整数分别归纳可得

$$
\boxed{t^n=\begin{pmatrix}1&n\\0&1\end{pmatrix}},\qquad
\boxed{\begin{pmatrix}-1&n\\0&-1\end{pmatrix}=s^2t^{-n}}.
$$

### (3)

直接相乘得

$$
\boxed{st^{-n}x=\begin{pmatrix}-x_{21}&-x_{22}\\r&x_{12}-nx_{22}\end{pmatrix}}.
$$

### (4)

先检验 $\det x$。若不是 $1$，由 (1) 判定不属于 $L$。以下设 $x=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ 且 $ad-bc=1$。

- 若 $c=0$，则 $a=d=1$ 或 $a=d=-1$，分别输出 $t^b$ 或 $s^2t^{-b}$。
- 若 $c\ne0$，选择整数 $n,r$，使 $a=nc+r$ 且 $0\le r<|c|$。对 $x'=st^{-n}x$ 递归，得到其乘积表示 $W$，输出 $t^ns^{-1}W$。

每步均保持整性与行列式 $1$，且下一步左下元素绝对值为 $r<|c|$，故必终止。基例正确；若递归输出满足 $x'=W$，则

$$
x=t^ns^{-1}x'=t^ns^{-1}W.
$$

因此算法正确，同时证明 $\boxed{L=\mathrm{SL}(2,\mathbb Z)}$。
