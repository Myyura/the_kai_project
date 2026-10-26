---
sidebar_label: "2019年8月実施 情報基礎 2"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Mathematics.Abstract-Algebra.Finite-Group
---

# 東京農工大学 工学府 情報工学専攻 2019年8月実施 情報基礎 2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

集合 $\{1,2,\ldots,n\}$ 上の全単射全体を $S_n$ とする。写像の合成により積の構造を定めると，$S_n$ は群を成し，$n$ 次の置換群と呼ばれる。置換 $\sigma\in S_n$ を

$$
\begin{pmatrix}1&2&\cdots&n\\\sigma(1)&\sigma(2)&\cdots&\sigma(n)\end{pmatrix}
$$

で表すことにする。

[1] 置換

$$
\begin{pmatrix}1&2&3&4&5\\3&2&4&5&1\end{pmatrix}
$$

の逆元を求めよ。

[2] $n$ 次の置換群 $S_n$ の濃度を求めよ（$n$ の式で表現せよ）。

[3] 以下の集合

$$
\left\{\begin{pmatrix}1&2&3&4&5\\3&4&5&1&2\end{pmatrix}\right\}
$$

にできるだけ少ない個数の置換を加え，$S_5$ の部分群になるようにせよ。

### 题目描述

设 $S_n$ 为集合 $\{1,2,\ldots,n\}$ 上所有双射的集合。以映射复合定义乘法，$S_n$ 构成一个群，称为 $n$ 次置换群。置换 $\sigma\in S_n$ 记为

$$
\begin{pmatrix}1&2&\cdots&n\\\sigma(1)&\sigma(2)&\cdots&\sigma(n)\end{pmatrix}.
$$

[1] 求置换

$$
\begin{pmatrix}1&2&3&4&5\\3&2&4&5&1\end{pmatrix}
$$

的逆元。

[2] 求 $n$ 次置换群 $S_n$ 的基数，用 $n$ 的表达式表示。

[3] 在以下集合中添加尽可能少的置换，使其成为 $S_5$ 的子群：

$$
\left\{\begin{pmatrix}1&2&3&4&5\\3&4&5&1&2\end{pmatrix}\right\}.
$$

## **Kai**

### [1]

像から元の値を逆にたどると、

$$
\boxed{\sigma^{-1}=\begin{pmatrix}1&2&3&4&5\\5&2&1&3&4\end{pmatrix}}.
$$

### [2]

1の像は $n$ 通り、2の像は残り $n-1$ 通り、以下同様なので、

$$
\boxed{|S_n|=n!}.
$$

### [3]

与えられた置換を $\tau$ とする。巡回置換では $\tau=(1\ 3\ 5\ 2\ 4)$ であり、位数は5。$\tau$ を含む部分群はそのすべての冪を含まなければならない。したがって最小のものは $\langle\tau\rangle=\{e,\tau,\tau^2,\tau^3,\tau^4\}$ であり、加える4個は

$$
\boxed{\begin{gathered}
e=\begin{pmatrix}1&2&3&4&5\\1&2&3&4&5\end{pmatrix},\qquad
\tau^2=\begin{pmatrix}1&2&3&4&5\\5&1&2&3&4\end{pmatrix},\\
\tau^3=\begin{pmatrix}1&2&3&4&5\\2&3&4&5&1\end{pmatrix},\qquad
\tau^4=\begin{pmatrix}1&2&3&4&5\\4&5&1&2&3\end{pmatrix}.
\end{gathered}}
$$

冪の積は指数を5で割った余りに対応し、単位元と逆元も含むので、これで確かに部分群となる。

## **Reference**

- [大学公式問題（2ページ（公式PDFの保存版））](https://web.archive.org/web/20220819071049id_/http://web.tuat.ac.jp/~tkakomon/r2/13.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E.html)
