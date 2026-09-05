---
sidebar_label: 2025年8月実施 専門科目 S-5
tags:
  - Kyoto-University
  - Computer-Science.Formal-Languages.Context-Free-Grammar
  - Computer-Science.Formal-Languages.Context-Free-Language-Closure-Properties
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-5
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2025_ist.pdf)
文法 $G = (\Sigma, N, P, S)$ を考える。ここで、 $\Sigma, N, P, S$ はそれぞれ終端記号の有限集合、非終端記号の有限集合、生成規則の有限集合、開始記号である。 $\epsilon$ は空文字列を表す。
以下の設問では $\Sigma = \{a, b\}$ とする。

**設問 1**　言語 $L$ をすべての回文からなる集合とする。回文とは前向きに読んだ場合と後ろ向きに読んだ場合とで同じになる文字列である。 $L$ は $\epsilon$ を含むとする。 $L$ を生成する文脈自由文法の $P$ を示せ。ただし $N = \{S\}$ とする。

**設問 2**　$N = \{S\}, P = \{S \to aS \mid Sb \mid a \mid b\}$ とする文脈自由文法 $G$ について、 $G$ が生成するどの文字列も部分列として $ba$ を含まないことを証明せよ。

**設問 3**　言語 $L$ を $a$ の数が $b$ の数よりも多いすべての文字列の集合とする。

1. $L$ を生成する文脈自由文法の $N$ と $P$ を示せ。
2. その文法の健全性（この文法が生成する文字列はすべて $L$ に含まれること）を証明せよ。
3. その文法の完全性（$L$ に含まれる文字列はすべてこの文法が生成できること）を証明せよ。

**設問 4**　$L = \{a^n b^n | n \geq 0\}$ の補集合が文脈自由言語であることを証明せよ。

### 题目描述

考虑文法 $G=(\Sigma,N,P,S)$，其中 $\Sigma$、$N$、$P$、$S$ 分别表示有限终结符集、有限非终结符集、有限产生式集和开始符号，$\epsilon$ 表示空串。以下各题均令 $\Sigma=\{a,b\}$。

1. 令语言 $L$ 为所有回文组成的集合。回文是正向读取与反向读取完全相同的字符串，并规定 $\epsilon\in L$。在 $N=\{S\}$ 的条件下，给出生成 $L$ 的上下文无关文法的产生式集 $P$。

2. 考虑 $N=\{S\}$、产生式集

   $$
   P=\{S\to aS\mid Sb\mid a\mid b\}
   $$

   的上下文无关文法 $G$。证明 $G$ 生成的任何字符串都不含连续子串 $ba$。

3. 令语言 $L$ 为所有满足字符 $a$ 的个数多于字符 $b$ 的个数的字符串组成的集合。

   （1）给出生成 $L$ 的上下文无关文法的非终结符集 $N$ 与产生式集 $P$。

   （2）证明该文法的可靠性，即该文法生成的每个字符串都属于 $L$。

   （3）证明该文法的完备性，即 $L$ 中的每个字符串都能由该文法生成。

4. 证明语言

   $$
   L=\{a^nb^n\mid n\geq0\}
   $$

   的补集是上下文无关语言。

## **Kai**

### 設問 1

$$
P=\{S\to aSa\mid bSb\mid a\mid b\mid\epsilon\}.
$$

每次在两端添相同字符，故生成串均为回文。反之，对任意长度至少为 $2$ 的回文，去掉相同的首尾字符后仍是回文；对长度归纳即可证明所有回文均可生成。

### 設問 2

终结前的每个句型均为 $a^iSb^j$，其中 $i,j\geq0$。用最后一步 $S\to a$ 或 $S\to b$ 后，所得串必为 $a^mb^n$ 且 $m+n\geq1$。这种串中不会有某个 $b$ 后面再出现 $a$，因此不含 $ba$，无论把部分列理解为连续子串还是一般子序列。

### 設問 3

(1) 取 $N=\{S,E\}$，产生式为

$$
S\to EaE\mid EaS,\qquad E\to aEbE\mid bEaE\mid\epsilon.
$$

(2) $E$ 生成的每个串中 $a,b$ 数量相等。$S\to EaE$ 的两者数量差为 $1$，$S\to EaS$ 则在其后一个正差值上再加 $1$，所以 $S$ 生成的串均满足 $\#a>\#b$。

(3) 先证明 $E$ 生成所有数量相等的串。对非空平衡串 $w$，若首字符为 $a$，取其前缀中 $a,b$ 数量差首次回到 $0$ 的位置，可分解为 $w=aubv$，其中 $u,v$ 均平衡。若首字符为 $b$，同理分解为 $buav$。对子串长度归纳，分别用 $E\to aEbE$ 或 $E\to bEaE$ 即可；空串由 $E\to\epsilon$ 生成。

再对正差值 $h=\#a-\#b$ 归纳。取 $w$ 的前缀差值首次达到 $1$ 的位置，可以写作 $w=uav$，其中 $u$ 平衡，$v$ 的差值为 $h-1$。当 $h=1$ 时，$u,v$ 都能由 $E$ 生成，故用 $S\to EaE$；当 $h>1$ 时，$v$ 按归纳假设能由 $S$ 生成，故用 $S\to EaS$。这证明了完全性。

### 設問 4

不属于 $\{a^nb^n:n\geq0\}$ 的串恰好分为三类：含有 $ba$；形如 $a^ib^j$ 且 $i>j$；形如 $a^ib^j$ 且 $i<j$。取开始符号 $S$ 并给出文法

$$
\begin{aligned}
S&\to R\mid A\mid B,\\
R&\to aR\mid bR\mid baT,&T&\to aT\mid bT\mid\epsilon,\\
A&\to aAb\mid C,&C&\to aC\mid a,\\
B&\to aBb\mid D,&D&\to bD\mid b.
\end{aligned}
$$

$R,A,B$ 恰好分别生成上述三类串。若一个串不含 $ba$，它必有形式 $a^ib^j$；若又不属于原语言，则 $i\ne j$，所以三类已穷尽补集。该文法是上下文无关文法，故补集是上下文无关语言。
