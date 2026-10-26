---
sidebar_label: "2023年8月実施 基礎科目 問題4 情報基礎2"
tags:
  - Tohoku-University
  - Discrete-Mathematics.Set-Theory.Image-and-Preimage
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題4 情報基礎2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

以下の問に答えよ．ただし，$A,B,C,D,E$ は集合を表す．

### (1)

$f:A\to B$ を $A$ から $B$ への写像とし，任意の $A'\subseteq A$ に対し $f(A')=\{b\mid b=f(a)\text{ となる }a\in A'\text{ が存在}\}$ とする．

(a) 任意の $A_1,A_2\subseteq A$ に対し，$f(A_1\cap A_2)\subseteq f(A_1)\cap f(A_2)$ が成り立つことを証明せよ．

(b) $f(A_1\cap A_2)\ne f(A_1)\cap f(A_2)$ となる $f$ および $A_1,A_2\subseteq A$ の具体例を与えよ．

### (2)

写像 $f:A\to B,\ g:B\to C$ に対し，合成写像 $g\circ f:A\to C$ を考える．ただし，任意の $a\in A$ に対し $g\circ f(a)=g(f(a))$ とする．

(a) $f$ と $g$ がどちらも1対1の写像（単射）であるとき，$g\circ f$ は1対1の写像であることを証明せよ．ここで，写像 $h:D\to E$ が1対1の写像であるとは，任意の $d_1,d_2\in D$ に対し $h(d_1)=h(d_2)\Rightarrow d_1=d_2$ が成り立つことである．

(b) $f$ と $g$ がどちらも上への写像（全射）であるとき，$g\circ f$ は上への写像であることを証明せよ．ここで，写像 $h:D\to E$ が上への写像であるとは，各 $e\in E$ に対し $h(d)=e$ となる $d\in D$ が存在することをいう．

### 题目描述

回答下列问题，其中 $A,B,C,D,E$ 表示集合。

**(1)** 设 $f:A\to B$ 为从 $A$ 到 $B$ 的映射。对任意 $A'\subseteq A$，定义 $f(A')=\{b\mid\text{存在 }a\in A'\text{ 使得 }b=f(a)\}$。

(a) 证明对任意 $A_1,A_2\subseteq A$，成立 $f(A_1\cap A_2)\subseteq f(A_1)\cap f(A_2)$。

(b) 给出满足 $f(A_1\cap A_2)\ne f(A_1)\cap f(A_2)$ 的 $f$ 及 $A_1,A_2\subseteq A$ 的具体例子。

**(2)** 对映射 $f:A\to B,\ g:B\to C$，考虑复合映射 $g\circ f:A\to C$，其定义是对任意 $a\in A$，有 $g\circ f(a)=g(f(a))$。

(a) 证明当 $f,g$ 均为一一映射（单射）时，$g\circ f$ 也是一一映射。其中映射 $h:D\to E$ 是一一映射，是指对任意 $d_1,d_2\in D$，都有 $h(d_1)=h(d_2)\Rightarrow d_1=d_2$。

(b) 证明当 $f,g$ 均为到上映射（满射）时，$g\circ f$ 也是到上映射。其中映射 $h:D\to E$ 是到上映射，是指对每个 $e\in E$，都存在 $d\in D$ 使 $h(d)=e$。

## **Kai**
### (1)
#### (a)
(i) $f( A_1 \cap A_2 )$ が空集合の場合は、明らかに
$f( A_1 \cap A_2 ) \subseteq f(A_1) \cap f(A_2)$ である。

(ii) $f( A_1 \cap A_2 )$ は空集合でないとする。
任意の $y \in f( A_1 \cap A_2 )$ について、
$y=f(x)$ であるような $x \in A_1 \cap A_2$ が存在する。
この $x,y$ について、

$$
\begin{align}
x &\in A_1 \text{ より } y=f(x) \in f(A_1)
,\\
x &\in A_2 \text{ より } y=f(x) \in f(A_2)
\end{align}
$$

が成り立つから、 $y \in f(A_1) \cap f(A_2)$ である。
よって、 $f( A_1 \cap A_2 ) \subseteq f(A_1) \cap f(A_2)$ である。

(i), (ii) より、
$f( A_1 \cap A_2 ) \subseteq f(A_1) \cap f(A_2)$ である。

#### (b)

$$
\begin{align}
f &: A = \left\{ -1, 1 \right\} \to B = \left\{ 1 \right\}, \ \ x \mapsto x^2
\end{align}
$$

とし、

$$
\begin{align}
A_1 = \left\{ -1 \right\}
,\ \
A_2 = \left\{ 1 \right\}
\end{align}
$$

とすると、

$$
\begin{align}
A_1 \cap A_2 &= \emptyset
\\
\therefore \ \
f(A_1 \cap A_2) &= \emptyset
\end{align}
$$

であり（$\emptyset$ は空集合）、

$$
\begin{align}
&f(A_1) = \left\{ 1 \right\}
, \ \
f(A_2) = \left\{ 1 \right\}
\\
\therefore \ \
&f(A_1) \cap f(A_2) = \left\{ 1 \right\}
\end{align}
$$

であるので、

$f( A_1 \cap A_2 ) \neq f(A_1) \cap f(A_2)$ である。

### (2)
#### (a)

$$
\begin{align}
(g \circ f) (a) = (g \circ f) (b)
\end{align}
$$

とすると、

$$
\begin{align}
g (f(a)) = g (f(b))
\end{align}
$$

であり、 $g$ が1対1の写像であることから

$$
\begin{align}
f(a) = f(b)
\end{align}
$$

がわかり、さらに $f$ が1対1の写像であることから

$$
\begin{align}
a = b
\end{align}
$$

がわかる。

したがって $g \circ f$ は1対1の写像である。

#### (b)
$g$ が上への写像であることから、任意の $c \in C$ に対して

$$
\begin{align}
g(b) = c
\end{align}
$$

であるような $b \in B$ が存在する。

さらに、 $f$ が上への写像であることから、この $b \in B$ に対して

$$
\begin{align}
f(a) = b
\end{align}
$$

であるような $a \in A$ が存在する。
したがって、任意の $c \in C$ に対して

$$
\begin{align}
(g \circ f) (a) = c
\end{align}
$$

であるような $a \in A$ が存在するので、
$g \circ f$ は上への写像である。

## **Reference**

- [公式問題（PDF）](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/202308kiso.pdf#page=8)
