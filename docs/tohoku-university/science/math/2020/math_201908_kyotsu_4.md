---
sidebar_label: "2019年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Topology.Compactness-Preserving-Injections-and-Continuity
---

# 東北大学 大学院理学研究科 数学専攻 2019年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

以下では自然数からなる狭義単調増加数列 $\{m(k)\}_{k=1}^\infty$ を部分自然数列と呼ぶ．以下の問いに答えよ．

(1) 実数からなる数列 $\{a_n\}_{n=1}^\infty$ と実数 $a$ に対し，次の二条件は同値であることを示せ．

(i) $\displaystyle\lim_{n\to\infty}a_n=a$．

(ii) 任意の部分自然数列 $\{n(i)\}_{i=1}^\infty$ に対し，部分自然数列 $\{i(j)\}_{j=1}^\infty$ で

$$
\lim_{j\to\infty}a_{n(i(j))}=a
$$

を満たすものが存在する．

(2) 関数 $f:\mathbb{R}\to\mathbb{R}$ が次の二条件を満たすと仮定する．

(i) $f$ は単射．

(ii) $\mathbb{R}$ の任意のコンパクト部分集合 $K$ に対し，$K$ の $f$ による像 $f(K)$ はコンパクト．

このとき $f$ は連続であることを示せ．

### 题目描述

本卷共有4题，全部作答。

以下将由自然数组成的严格递增数列 $\{m(k)\}_{k=1}^\infty$ 称为“自然数的子序列”。回答下列问题。

(1) 对实数列 $\{a_n\}_{n=1}^\infty$ 及实数 $a$，证明下列两条件等价。

(i) $\displaystyle\lim_{n\to\infty}a_n=a$。

(ii) 对任意自然数的子序列 $\{n(i)\}_{i=1}^\infty$，存在自然数的子序列 $\{i(j)\}_{j=1}^\infty$，使

$$
\lim_{j\to\infty}a_{n(i(j))}=a.
$$

(2) 设函数 $f:\mathbb{R}\to\mathbb{R}$ 满足以下两条件。

(i) $f$ 是单射。

(ii) 对 $\mathbb{R}$ 的任意紧子集 $K$，像集 $f(K)$ 也是紧集。

证明 $f$ 连续。

## **Kai**

### (1)

(i) が成り立てば，任意の部分列も $a$ に収束するので，$i(j)=j$ として (ii) を得る．

逆に (i) が成り立たないとする．ある $\varepsilon>0$ に対して $|a_n-a|\ge\varepsilon$ となる $n$ が無限に存在するため，それらを狭義単調増加に並べて部分列 $\{a_{n(i)}\}$ を作れる．そのどの部分列も $a$ に収束しないので (ii) に矛盾する．

### (2)

任意の $a\in\mathbb{R}$ と $a$ に収束する数列 $\{x_n\}$ をとる．各 $N\ge1$ に対し

$$
K_N=\{a\}\cup\{x_n:n\ge N\}
$$

はコンパクトである．したがって $f(K_N)$ もコンパクト，特に閉集合である．

$\{f(x_n)\}$ の任意の部分列をとると，これはコンパクト集合 $f(K_1)$ 内にあるので，さらに収束部分列 $\{f(x_{n(i(j))})\}$ を持つ．その極限を $b$ とする．任意の $N$ に対し，この部分列は最終的に $f(K_N)$ 内にあるので，閉性から $b\in f(K_N)$ である．

$b\in f(K_1)$ より，ある $c\in K_1$ が存在して $f(c)=b$．また $b\in f(K_N)$ と $f$ の単射性から，同じ $c$ がすべての $K_N$ に属する．$x_n\to a$ なので

$$
\bigcap_{N=1}^\infty K_N=\{a\}.
$$

よって $c=a$，すなわち $b=f(a)$ である．(1) により $f(x_n)\to f(a)$．$a$ と $\{x_n\}$ は任意だから，点列による連続性の判定から $f$ は連続である．

## **Reference**

- [東北大学公式問題の保存版（2020年度・共通問題，kyotsu2020(R2).pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#a770ed70-0bd3-4c0b-8552-23fa493743b9)
