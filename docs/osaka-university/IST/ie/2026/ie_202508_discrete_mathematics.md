---
sidebar_label: 2025年8月実施 離散構造
tags:
  - Osaka-University
  - Discrete-Mathematics.Set-Theory.Partially-Ordered-Sets-and-Chains
  - Discrete-Mathematics.Combinatorics.Counting
---
# 大阪大学 情報科学研究科 情報工学 2025年8月実施 離散構造

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**【選択問題】離散構造**

配点：(1-1) 20，(1-2) 15，(1-3) 15，(2-1) 15，(2-2) 25，(2-3) 20，(2-4) 15

正の整数 (positive integer) $n$ に対して，$I(n)=\{1,2,3,\ldots,n\}$ と定める。また，任意の有限集合 (finite set) $S$ に対し，そのべき集合を $2^S$ で表す。任意の有限集合 $S$ に対して，$S$ に含まれる元 (element) の個数を $S$ のサイズと呼び，$|S|$ で表す。$S,T$ を二つの集合とするとき，$S\setminus T$ を，$S$ には含まれるが $T$ には含まれない元すべてからなる集合とする。$S$ を有限集合，$\preceq$ を $S$ 上の部分順序関係 (partial order relation) とする。$S$ 中の二つの元 $s,s'\in S$ について，$s\preceq s'$ または $s'\preceq s$ が成り立つとき，$s$ と $s'$ は部分順序集合 $(S,\preceq)$ において比較可能 (comparable) であると呼び，$s\preceq s'$ と $s'\preceq s$ のいずれも成り立たないとき，$s$ と $s'$ は比較不可能 (incomparable) であると呼ぶ。部分集合 (subset) $X\subseteq S$ において，$X$ 中の任意の二つの元が比較可能であるとき，$X$ を $(S,\preceq)$ の鎖 (chain) と呼ぶ。また，部分集合 $Y\subseteq S$ において，$Y$ 中の任意の相異なる二つの元が比較不可能であるとき，$Y$ を $(S,\preceq)$ の反鎖 (antichain) と呼ぶ。以下の各問に答えよ。

(1) 部分集合族 $\mathcal F\subseteq2^{I(7)}$ を以下の通りに定める。

$$
\begin{aligned}
\mathcal F=\{&\{1,2\},\{2,3\},\{1,2,3\},\{1,2,4\},\{1,2,5\},\\
&\{1,2,5,6\},\{1,2,5,7\},\{1,2,3,4,5,6,7\}\}.
\end{aligned}
$$

以下の各小問に答えよ。

(1-1) $(\mathcal F,\subseteq)$ の極大元 (maximal element)，極小元 (minimal element) をそれぞれすべて列挙せよ。

(1-2) $(\mathcal F,\subseteq)$ の鎖でサイズが4のものを一つ答えよ。

(1-3) $(\mathcal F,\subseteq)$ の反鎖でサイズが最大のものを一つ答えよ。

(2) $(S,\preceq)$ を有限部分順序集合とする。$(S,\preceq)$ の鎖 $X$ について，$X\cup\{s\}$ が鎖となるような $s\in S\setminus X$ が存在しないならば，$X$ を極大鎖と呼ぶ。このとき，以下の各小問に答えよ。

(2-1) 部分順序集合 $(2^{I(4)},\subseteq)$ の極大鎖を一つ答えよ。

(2-2) $C$ を部分順序集合 $(2^{I(n)},\subseteq)$ の任意の鎖とすると，$(C,\subseteq)$ は定義より全順序集合 (totally ordered set) となる。$C$ 中のすべての元を全順序関係 $\subseteq$ に従い整列した列を $(C_1,C_2,\ldots,C_{|C|})$ とする。ただし，$C_1\subseteq C_2\subseteq\cdots\subseteq C_{|C|}$ が成り立つものとする。このとき，$C$ について以下の三つの性質がすべて成立するとき，かつそのときに限り $C$ は極大鎖となることを示せ。

- （性質1）$|C_1|=0$。
- （性質2）$|C_{|C|}|=n$。
- （性質3）任意の $i$ ($1\le i\le|C|-1$) について，$|C_{i+1}|=|C_i|+1$。

(2-3) 部分順序集合 $(2^{I(n)},\subseteq)$ の異なる極大鎖の数はいくつになるか。理由とともに答えよ。

(2-4) $k$ を $0\le k\le n$ を満たす整数とし，$C'\subseteq I(n)$ をサイズが $k$ の任意の集合とする。部分順序集合 $(2^{I(n)},\subseteq)$ の極大鎖のうち，$C'$ を元として含むものの数はいくつになるか答えよ。

#### 题目描述

**【选答题】离散结构**

分值：(1-1) 20，(1-2) 15，(1-3) 15，(2-1) 15，(2-2) 25，(2-3) 20，(2-4) 15

对正整数 $n$，定义 $I(n)=\{1,2,3,\ldots,n\}$。对任意有限集合 $S$，用 $2^S$ 表示其幂集，用 $|S|$ 表示其元素个数，称为 $S$ 的大小。对于集合 $S,T$，$S\setminus T$ 表示属于 $S$ 而不属于 $T$ 的所有元素构成的集合。设 $S$ 为有限集合，$\preceq$ 为 $S$ 上的偏序关系。对 $s,s'\in S$，若 $s\preceq s'$ 或 $s'\preceq s$ 成立，则称二者在偏序集 $(S,\preceq)$ 中可比；若二者均不成立，则称为不可比。若子集 $X\subseteq S$ 中任意两个元素都可比，称 $X$ 为 $(S,\preceq)$ 的链；若子集 $Y\subseteq S$ 中任意两个不同元素均不可比，称 $Y$ 为反链。回答以下问题。

(1) 定义集合族 $\mathcal F\subseteq2^{I(7)}$ 如下。

$$
\begin{aligned}
\mathcal F=\{&\{1,2\},\{2,3\},\{1,2,3\},\{1,2,4\},\{1,2,5\},\\
&\{1,2,5,6\},\{1,2,5,7\},\{1,2,3,4,5,6,7\}\}.
\end{aligned}
$$

回答下列问题。

(1-1) 分别列出 $(\mathcal F,\subseteq)$ 的全部极大元与极小元。

(1-2) 给出 $(\mathcal F,\subseteq)$ 中一条大小为4的链。

(1-3) 给出 $(\mathcal F,\subseteq)$ 中一条大小最大的反链。

(2) 设 $(S,\preceq)$ 为有限偏序集。若其链 $X$ 不存在 $s\in S\setminus X$ 使得 $X\cup\{s\}$ 仍为链，则称 $X$ 为极大链。回答下列问题。

(2-1) 给出偏序集 $(2^{I(4)},\subseteq)$ 中一条极大链。

(2-2) 设 $C$ 是偏序集 $(2^{I(n)},\subseteq)$ 的任意链，则按定义，$(C,\subseteq)$ 是全序集。将 $C$ 中全部元素按全序关系 $\subseteq$ 排列，得到 $(C_1,C_2,\ldots,C_{|C|})$，其中 $C_1\subseteq C_2\subseteq\cdots\subseteq C_{|C|}$。证明：$C$ 是极大链，当且仅当同时满足以下三个性质。

- （性质1）$|C_1|=0$。
- （性质2）$|C_{|C|}|=n$。
- （性质3）对任意 $1\le i\le|C|-1$，有 $|C_{i+1}|=|C_i|+1$。

(2-3) 偏序集 $(2^{I(n)},\subseteq)$ 共有多少条不同的极大链？请说明理由。

(2-4) 设整数 $k$ 满足 $0\le k\le n$，$C'\subseteq I(n)$ 是任意大小为 $k$ 的集合。偏序集 $(2^{I(n)},\subseteq)$ 的极大链中，包含元素 $C'$ 的共有多少条？

## **Kai**

### (1)

#### (1-1)

$$
\boxed{\text{極大元： }\{1,2,3,4,5,6,7\}},
$$

$$
\boxed{\text{極小元： }\{1,2\},\ \{2,3\}}.
$$

#### (1-2)

例えば

$$
\boxed{
\{1,2\}
\subset\{1,2,5\}
\subset\{1,2,5,6\}
\subset\{1,2,3,4,5,6,7\}
}.
$$

#### (1-3)

例えば

$$
\boxed{
\bigl\{
\{2,3\},\{1,2,4\},\{1,2,5,6\},\{1,2,5,7\}
\bigr\}
}
$$

はサイズ4の反鎖である。

さらに $\mathcal F$ は次の4本の鎖に分割できる。

$$
\begin{aligned}
&\{1,2\}\subset\{1,2,5\}\subset\{1,2,5,6\}
 \subset\{1,2,3,4,5,6,7\},\\
&\{2,3\}\subset\{1,2,3\},\\
&\{1,2,4\},\\
&\{1,2,5,7\}.
\end{aligned}
$$

反鎖は各鎖から高々一元しか取れないため、そのサイズは高々4であり、上の反鎖は最大である。

### (2)

#### (2-1)

例えば

$$
\boxed{
\varnothing
\subset\{1\}
\subset\{1,2\}
\subset\{1,2,3\}
\subset\{1,2,3,4\}
}.
$$

#### (2-2)

必要性を示す。$C$ が極大鎖であるとする。

- $C_1\ne\varnothing$ なら $\varnothing$ を追加できるので、$|C_1|=0$。
- $C_{|C|}\ne I(n)$ なら $I(n)$ を追加できるので、$|C_{|C|}|=n$。
- $|C_{i+1}|\ge|C_i|+2$ なら、$x\in C_{i+1}\setminus C_i$ を一つ取り

  $$
  C_i\subset C_i\cup\{x\}\subset C_{i+1}
  $$

  として鎖へ追加できる。よって $|C_{i+1}|=|C_i|+1$。

次に十分性を示す。三条件が成立すれば、$C$ はサイズ $0,1,\ldots,n$ の集合を一つずつ含む。$D\notin C$ を追加できると仮定し、$|D|=k$ とする。$D$ は同じサイズを持つ $C_{k+1}$ と比較可能でなければならない。同じ有限サイズの集合の間で包含関係が成立すれば等しいため

$$
D=C_{k+1},
$$

となり $D\notin C$ に反する。したがって $C$ は極大鎖である。

#### (2-3)

極大鎖は、$\varnothing$ から始めて $I(n)$ の元を一つずつ追加する順序と一対一に対応する。この順序は $I(n)$ の順列なので

$$
\boxed{n!}.
$$

#### (2-4)

$C'$ に属する $k$ 元は最初の $k$ 回で追加され、その順序は $k!$ 通りである。残りの $n-k$ 元の順序は $(n-k)!$ 通りである。よって

$$
\boxed{k!(n-k)!}.
$$

## **Reference**

- [大阪大学公式原題（PDF 6ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2026_JA.pdf)
