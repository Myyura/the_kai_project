---
sidebar_label: "2020年度 情報基礎 2"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Mathematics.Abstract-Algebra.Finite-Group
---

# 東京農工大学 工学府 情報工学専攻 2020年度 情報基礎 2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

集合 $\{1,2,\ldots,n\}$ 上の全単射全体を $S_n$ とする。写像の合成により積を定めると $S_n$ は群となり、$n$ 次の置換群と呼ばれる。置換 $\sigma$ を二行記法で表す。

[1] 次の置換の逆元を求めよ。

$$
\begin{pmatrix}1&2&3&4&5\\3&2&4&5&1\end{pmatrix}.
$$

[2] $S_n$ の濃度を $n$ の式で求めよ。

[3] 次の集合に、できるだけ少ない個数の置換を加え、$S_5$ の部分群となるようにせよ。

$$
\left\{\begin{pmatrix}1&2&3&4&5\\3&4&5&1&2\end{pmatrix}\right\}.
$$

#### 题目描述

令 $S_n$ 为集合 $\{1,\ldots,n\}$ 上全部双射组成的置换群，以映射复合作为乘法，采用两行记法。

1. 求两行分别为 $(1,2,3,4,5)$ 和 $(3,2,4,5,1)$ 的置换的逆。
2. 用 $n$ 表示 $S_n$ 的基数。
3. 对仅含置换 $(1,2,3,4,5)\mapsto(3,4,5,1,2)$ 的集合，添加尽可能少的置换，使其成为 $S_5$ 的子群。

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
