---
sidebar_label: "2023年8月実施 基礎科目 問題4 情報基礎2"
tags:
  - Tohoku-University
  - Discrete-Mathematics.Set-Theory.Image-of-Intersection
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題4 情報基礎2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 題意の要約

[大学公開の原題、8 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/202308kiso.pdf#page=8)

1. 写像 $f:A\to B$ と集合 $S\subseteq A$ に対し、$f(S)=\{f(x):x\in S\}$ とする。(a) $f(A_1\cap A_2)\subseteq f(A_1)\cap f(A_2)$ を証明する。(b) この包含が等号にならない具体例を与える。
2. $f:A\to B$、$g:B\to C$ について、(a) 両方が単射ならば $g\circ f$ も単射、(b) 両方が全射ならば $g\circ f$ も全射であることを証明する。単射は異なる元の像が異なること、全射は終域の各元が像として現れることを意味する。

### 题目描述

1. 对映射 $f:A\to B$ 和子集 $S\subseteq A$，定义像集 $f(S)=\{f(x):x\in S\}$。证明 $f(A_1\cap A_2)\subseteq f(A_1)\cap f(A_2)$，并举出包含关系严格成立的例子。
2. 对 $f:A\to B$、$g:B\to C$，分别证明：两个映射都是单射时，复合映射 $g\circ f$ 也是单射；两个映射都是满射时，复合映射也是满射。

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
