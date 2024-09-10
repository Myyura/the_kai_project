---
comments: false
title: 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2019年8月実施 確率・統計
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2019年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]
#### (1)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  1 \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2}
  = \frac{1}{16}
  \end{aligned}
$$

#### (4)
求める期待値 $E(\text{表})$ は、

$$
\begin{aligned}
E \left( \text{表} \right)
=
1 \cdot \frac{1}{2}
+ 2 \cdot \left( \frac{1}{2} \right)^2
+ 3 \cdot \left( \frac{1}{2} \right)^3
+ \cdots
\end{aligned}
$$

であるが、両辺 $1/2$ 倍すると、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
=
1 \cdot \left( \frac{1}{2} \right)^2
+ 2 \cdot \left( \frac{1}{2} \right)^3
+ 3 \cdot \left( \frac{1}{2} \right)^4
+ \cdots
\end{aligned}
$$

となる。
1番目の式から2番目の式を引くと、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
&=
\frac{1}{2}
+ \left( \frac{1}{2} \right)^2
+ \left( \frac{1}{2} \right)^3
+ \cdots
\\
&=
\frac{1}{2} \frac{1}{1 - \frac{1}{2}}
\\
&=
1
\end{aligned}
$$

となるから、

$$
\begin{aligned}
E \left( \text{表} \right) = 2
\end{aligned}
$$

を得る。

#### (5)
与えられた式を整理して、

$$
\begin{aligned}
E \left( \text{表表} \right)
&=
2 E \left( \text{表} \right) + 2
\\
&=
6
\end{aligned}
$$

を得る。

#### (6)
(5) と同じように考えて、

$$
\begin{aligned}
E \left( \text{表表表} \right)
&=
2 E \left( \text{表表} \right) + 2
\\
&=
14
\end{aligned}
$$

を得る。

### \[2\]
#### (1)

$$
  \begin{aligned}
  \frac{\partial}{\partial x} f_{X,Y}(x,y)
  &=
  a ( -x^2 + 2x + y^2 ) e^{-x}
  \\
  \frac{\partial}{\partial y} f_{X,Y}(x,y)
  &=
  -2ay e^{-x}
  \end{aligned}
$$

であるから、 $f_{X,Y}(x,y)$ が最大となるのは $x=2,y=0$ のときである。

#### (2)

$$
\begin{aligned}
f_X(x)
&=
a e^{-x} \int_{-x}^x ( x^2 - y^2 ) dy
\\
&=
\frac{4}{3} a x^3 e^{-x}
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
1
&=
\int_0^\infty f_X(x) dx
\\
&=
\frac{4}{3} a \int_0^\infty x^3 e^{-x} dx
\\
&=
8a
\end{aligned}
$$

であるから、

$$
\begin{aligned}
a = \frac{1}{8}
\end{aligned}
$$

である。

#### (4)

$$
\begin{aligned}
\mu_x
&=
\int_0^\infty x f_X(x) dx
\\
&=
\frac{1}{6} \int_0^\infty x^4 e^{-x} dx
\\
&=
4
\end{aligned}
$$
