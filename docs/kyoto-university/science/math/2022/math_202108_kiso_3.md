---
sidebar_label: "2022年度 基礎科目 [3]"
tags:
  - Kyoto-University
  - Mathematics.Abstract-Algebra.Group-Homomorphisms-and-Quotient-Groups
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

アーベル群 $G=\mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z\times\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z$ の部分群 $H$ を

$$
H=\{(a,b,0,0)\mid a\in\mathbb Z/2\mathbb Z,\ b\in\mathbb Z/3\mathbb Z\}
$$

とするとき、$G$ の位数 $12$ の部分群 $K$ で $G=K+H$ となるものの数を求めよ。ただし $K+H=\{\alpha+\beta\mid\alpha\in K,\ \beta\in H\}$ である。

#### 题目描述

设 $G=\mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z\times\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z$，其子群为

$$
H=\{(a,b,0,0)\mid a\in\mathbb Z/2\mathbb Z,\ b\in\mathbb Z/3\mathbb Z\}.
$$

求 $G$ 中阶为 $12$ 且满足 $K+H=G$ 的子群 $K$ 的个数，其中 $K+H=\{\alpha+\beta\mid\alpha\in K,\ \beta\in H\}$。

## **Kai**

$L=\{(0,0,c,d)\}$ とおけば $G=H\oplus L$ であり、$|G|=72$, $|H|=6$, $|L|=12$ である。条件を満たす $K$ について

$$
72=|K+H|=\frac{|K||H|}{|K\cap H|}
$$

だから $K\cap H=\{0\}$。従って射影 $\pi_L:G\to L$ の $K$ への制限は同型であり、$K$ は一意的な準同型 $\varphi:L\to H$ のグラフ

$$
K=\{(\varphi(\ell),\ell)\mid\ell\in L\}
$$

で表される。逆に、どの準同型のグラフも条件を満たす。

$L\cong\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z$ の二つの生成元の像は独立に選べる。位数 $3$ の生成元の像は $H$ の $3$ 倍が $0$ となる元なので $3$ 通り、位数 $4$ の生成元の像は $4$ 倍が $0$ となる元なので $2$ 通りである。したがって求める個数は

$$
\boxed{3\cdot2=6}.
$$

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 3ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)
