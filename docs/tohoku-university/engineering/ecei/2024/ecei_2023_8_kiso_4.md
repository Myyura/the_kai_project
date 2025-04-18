---
sidebar_label: "2023年8月実施 基礎科目 問題4 情報基礎2"
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題4 情報基礎2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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

したがって $f \circ g$ は1対1の写像である。

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