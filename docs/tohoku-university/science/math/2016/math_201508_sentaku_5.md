---
sidebar_label: "2015年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Probability-Statistics.Probability-Basics.Borel-Cantelli-Lemmas
---

# 東北大学 理学研究科 数学専攻 2015年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$\mu$ を $\mathbb R$ 上のルベーグ測度とし、$a>2$ を実数とする。以下の問いに答えよ。

(1) $\{A_n\}_{n=1}^\infty$ を $\mathbb R$ 上の可測集合列とし $\sum_{n=1}^\infty\mu(A_n)<\infty$ をみたすとする。

$$
\limsup_{n\to\infty}A_n:=\bigcap_{n=1}^\infty\bigcup_{k=n}^\infty A_k
$$

に対して $\mu(\limsup_{n\to\infty}A_n)=0$ を示せ。

(2) 正の整数 $n$ に対して $B_n$ を

$$
B_n:=\left\{x\in(0,1)\ \middle|\ \begin{array}{l}
n\text{ と互いに素であるような正の整数 }k\text{ が存在して}\\
\displaystyle\left|x-\frac kn\right|<\frac1{n^a}\text{ をみたす}
\end{array}\right\}
$$

と定める。$\mu(B_3),\mu(B_4)$ を求めよ。

(3) $\mu(\limsup_{n\to\infty}B_n)=0$ を示せ。

### 题目描述

设 $\mu$ 为 $\mathbb R$ 上的勒贝格测度，实数 $a>2$。回答下列问题。

(1) 设 $\{A_n\}_{n=1}^\infty$ 为 $\mathbb R$ 上的可测集列，且 $\sum_{n=1}^\infty\mu(A_n)<\infty$。定义

$$
\limsup_{n\to\infty}A_n:=\bigcap_{n=1}^\infty\bigcup_{k=n}^\infty A_k.
$$

证明 $\mu(\limsup_{n\to\infty}A_n)=0$。

(2) 对正整数 $n$，定义

$$
B_n:=\left\{x\in(0,1)\ \middle|\ \begin{array}{l}
\text{存在与 }n\text{ 互素的正整数 }k,\\
\displaystyle\left|x-\frac kn\right|<\frac1{n^a}
\end{array}\right\}.
$$

求 $\mu(B_3)$ 和 $\mu(B_4)$。

(3) 证明 $\mu(\limsup_{n\to\infty}B_n)=0$。

## **Kai**

### (1)

$E_n=\bigcup_{k=n}^\infty A_k$ とすると、

$$
0\le\mu\left(\limsup_{n\to\infty}A_n\right)
\le\mu(E_n)\le\sum_{k=n}^\infty\mu(A_k)\longrightarrow0.
$$

よって $\mu(\limsup A_n)=0$ である。

### (2)

$n\ge2$ に対し、該当する区間は

$$
\left(\frac{k}{n}-\frac1{n^a},\frac{k}{n}+\frac1{n^a}\right),
\qquad 1\le k\le n-1,\quad \gcd(k,n)=1
$$

である。$a>2$ より各区間は $(0,1)$ に含まれ、長さ $2/n^a<1/n$ だから互いに交わらない。$n=3$ では $k=1,2$、$n=4$ では $k=1,3$ の二つなので、

$$
\mu(B_3)=\frac4{3^a},\qquad \mu(B_4)=\frac4{4^a}.
$$

### (3)

$n\ge2$ で該当する $k$ は高々 $n-1$ 個だから、

$$
\mu(B_n)\le\frac{2(n-1)}{n^a}\le\frac2{n^{a-1}}.
$$

$a-1>1$ と $\mu(B_1)\le1$ より $\sum_n\mu(B_n)<\infty$ である。(1) を $B_n$ に適用すると $\mu(\limsup B_n)=0$ を得る。

## **Reference**

- [東北大学 2016年度・選択問題の公開保存資料（PDF 4ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2016年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#aa5ff04c-11be-4c5a-9e84-9c8eab9bd40f)
