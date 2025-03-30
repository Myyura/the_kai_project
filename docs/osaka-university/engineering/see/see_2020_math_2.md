---
sidebar_label: "2020年度 数学 (2)"
sidebar_position: 2
tags:
  - Osaka-University
---
# 大阪大学 工学研究科 環境・エネルギー工学科 2020年度 数学 (2)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (a)

$$
\begin{aligned}
\det A
&= \det \begin{pmatrix}
1 & a^2 & (b+c)^2 \\ 1 & b^2 & (c+a)^2 \\ 1 & c^2 & (a+b)^2
\end{pmatrix}
\\
&= \det \begin{pmatrix}
1 & a^2 & (b+c)^2 \\
0 & b^2 - a^2 & (c+a)^2 - (b+c)^2 \\
0 & c^2 - a^2 & (a+b)^2 - (b+c)^2
\end{pmatrix}
\\
&= \det \begin{pmatrix}
(b+a)(b-a) & (a+b+2c)(a-b) \\
(c+a)(c-a) & (a+2b+c)(a-c)
\end{pmatrix}
\\
&= (a-b)(c-a) \det \begin{pmatrix}
- (b+a) & a+b+2c \\
(c+a) & -(a+2b+c)
\end{pmatrix}
\\
&= (a-b)(c-a) \left\{ (b+a)(a+2b+c) - (a+b+2c)(c+a) \right\}
\\
&= 2(a+b+c)(a-b)(b-c)(c-a)
\end{aligned}
$$

### (b)

### (\(c\))
まず、

$$
\begin{aligned}
\det \begin{pmatrix} a & b & c \\ a^2 & b^2 & c^2 \\ a^3 & b^3 & c^3 \end{pmatrix}
&= \det \begin{pmatrix}
a & b & c \\ 0 & b(b-a) & c(c-a) \\ 0 & b(b^2-a^2) & c(c^2-a^2)
\end{pmatrix}
\\
&= a \det \begin{pmatrix} b(b-a) & c(c-a) \\ b(b+a)(b-a) & c(c+a)(c-a) \end{pmatrix}
\\
&= abc(b-a)(c-a) \det \begin{pmatrix} 1 & 1 \\ b+a & c+a \end{pmatrix}
\\
&= abc(a-b)(b-c)(c-a)
\end{aligned}
$$

であり、同様にして、

$$
\begin{aligned}
\det \begin{pmatrix} k & b & c \\ k^2 & b^2 & c^2 \\ k^3 & b^3 & c^3 \end{pmatrix}
&= kbc(k-b)(b-c)(c-k)
\\
\det \begin{pmatrix} a & k & c \\ a^2 & k^2 & c^2 \\ a^3 & k^3 & c^3 \end{pmatrix}
&= akc(a-k)(k-c)(c-a)
\\
\det \begin{pmatrix} a & b & k \\ a^2 & b^2 & k^2 \\ a^3 & b^3 & k^3 \end{pmatrix}
&= abk(a-b)(b-k)(k-a)
\end{aligned}
$$

である。
よって、クラメルの公式より、求める解は、

$$
\begin{aligned}
x &= \frac{k(k-b)(c-k)}{a(a-b)(c-a)}
\\
y &= \frac{k(a-k)(k-c)}{b(a-b)(b-c)}
\\
z &= \frac{k(b-k)(k-a)}{c(b-c)(c-a)}
\end{aligned}
$$

である。