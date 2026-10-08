---
sidebar_label: "2017年8月実施 基礎科目 [8]"
tags:
  - Kyoto-University
  - Discrete-Mathematics.Set-Theory.Partially-Ordered-Sets-and-Chains
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [8]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$(X,\le)$ を半順序集合とする。$a<b$ であるような $a,b\in X$ に対し、$a<c<b$ となる $c\in X$ が存在しないとき、$a\prec b$ と書くことにする。$(X,\le)$ が次の三条件を満たすとする。

(A) 任意の $a,b,c\in X$ について、$a\prec b$ かつ $a\prec c$ ならば、$\{b,c\}$ は上界を持つ。

(B) $a<b$ かつ $a<c$ を満たし、さらに $\{b,c\}$ が上界を持たないような $a,b,c\in X$ が存在する。

(C) $a<b$ ならば、ある $c\in X$ で $a\prec c$ かつ $c\le b$ となるものが存在する。

このとき、$X$ の中に無限上昇列 $a_1<a_2<\cdots$ が存在することを示せ。

#### 题目描述

设 $(X,\le)$ 为偏序集。当 $a<b$ 且不存在 $a<c<b$ 的元素 $c$ 时，记 $a\prec b$。假设：

(A) 若 $a\prec b$ 且 $a\prec c$，则 $\{b,c\}$ 存在共同上界。

(B) 存在 $a<b$、$a<c$，使 $\{b,c\}$ 没有共同上界。

(C) 只要 $a<b$，就存在 $c$ 满足 $a\prec c\le b$。

证明 $X$ 中存在无限严格递增链 $a_1<a_2<\cdots$。

## **Kai**

各 $a\in X$ について $U_a=\{x\in X\mid a\le x\}$ と置き、

$$
S=\{a\in X\mid U_a\text{ の中に、共通の上界を持たない二元が存在する}\}
$$

と定める。(B) より $S\ne\varnothing$ である。

任意の $a\in S$ を取り、共通の上界を持たない $b,c\in U_a$ を選ぶ。このとき $b,c$ のいずれも $a$ とは等しくない。(C) により

$$
a\prec u\le b,\qquad a\prec v\le c
$$

となる $u,v$ が存在する。(A) より、$u,v$ の共通の上界 $w$ が存在する。

ここで $u,v\notin S$ と仮定する。$b,w\in U_u$ であるから、$u\notin S$ により $b,w$ の共通の上界 $d$ が存在する。さらに $d\ge w\ge v$ なので $c,d\in U_v$ であり、$v\notin S$ により $c,d$ の共通の上界 $e$ が存在する。すると

$$
e\ge d\ge b,\qquad e\ge c
$$

となり、$b,c$ の選び方に矛盾する。したがって $u,v$ の少なくとも一方は $S$ に属する。

以上により、任意の $a\in S$ に対して $a\prec a'$ を満たす $a'\in S$ が存在する。$a_1\in S$ を一つ取り、これを繰り返して $a_{j+1}\in S$ を $a_j\prec a_{j+1}$ となるように選べば、

$$
\boxed{a_1<a_2<a_3<\cdots}
$$

という無限上昇列が得られる。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 12–13ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
