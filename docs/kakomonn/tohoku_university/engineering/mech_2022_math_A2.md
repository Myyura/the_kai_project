---
comments: false
title: 東北大学 工学研究科 機械系 2022年実施 数学A 2
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 機械系 2022年実施 数学A 2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
$B$ の固有値を $b$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} -b & 1 & 0 \\ 1 & -b & 1 \\ 0 & 1 & -b \end{pmatrix}
\\
&= -b^3 + 2b
\\
&= -b (b^2 - 2)
\\
\therefore \ \ 
b &= 0, \pm \sqrt{2}
\end{aligned}
$$

である。

$C$ の固有値を $c$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} -c & 1 & 1 \\ 1 & -c & 1 \\ 1 & 1 & -c \end{pmatrix}
\\
&= -c^3 + 2 + 3c
\\
&= - (c+1)^2(c-2)
\\
\therefore \ \ 
c &= -1, 2
\end{aligned}
$$

である。

### (2)
$C$ は実対称行列なので、適当な直交行列 $P$ とその逆行列 $P^{-1}$ を使って、

$$
\begin{aligned}
C = P \tilde{C} P^{-1}
, \ \ \ \ 
\tilde{C}
= \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
\end{aligned}
$$

と書ける。

行列の対角成分の和を $\mathrm{tr}$ と書くと、

$$
\begin{aligned}
\mathrm{tr} \left( C^3 \right)
&= \mathrm{tr} \left( P \tilde{C}^3 P^{-1} \right)
\\
&= \mathrm{tr} \left( \tilde{C}^3 \right)
\\
&= \mathrm{tr} \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 8 \end{pmatrix}
\\
&= 6
\end{aligned}
$$

である。

### (3)

$$
\begin{aligned}
D
&= \begin{pmatrix}
0 & 1 & 1 & 1 & 1 & 1 \\
1 & 0 & 1 & 1 & 1 & 1 \\
1 & 1 & 0 & 1 & 1 & 1 \\
1 & 1 & 1 & 0 & 1 & 1 \\
1 & 1 & 1 & 1 & 0 & 1 \\
1 & 1 & 1 & 1 & 1 & 0 \\
\end{pmatrix}
\end{aligned}
$$

であり、 $D$ の固有値を $d$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
-d & 1 & 1 & 1 & 1 & 1 \\
1 & -d & 1 & 1 & 1 & 1 \\
1 & 1 & -d & 1 & 1 & 1 \\
1 & 1 & 1 & -d & 1 & 1 \\
1 & 1 & 1 & 1 & -d & 1 \\
1 & 1 & 1 & 1 & 1 & -d
\end{pmatrix}
\\
&= \det \begin{pmatrix}
0 & 1-d^2 & 1+d & 1+d & 1+d & 1+d \\
1 & -d & 1 & 1 & 1 & 1 \\
0 & 1+d & -d-1 & 0 & 0 & 0 \\
0 & 1+d & 0 & -d-1 & 0 & 0 \\
0 & 1+d & 0 & 0 & -d-1 & 0 \\
0 & 1+d & 0 & 0 & 0 & -d-1
\end{pmatrix}
\\
&= - \det \begin{pmatrix}
1-d^2 & 1+d & 1+d & 1+d & 1+d \\
1+d & -d-1 & 0 & 0 & 0 \\
1+d & 0 & -d-1 & 0 & 0 \\
1+d & 0 & 0 & -d-1 & 0 \\
1+d & 0 & 0 & 0 & -d-1
\end{pmatrix}
\\
&= - (d+1)^5 \det \begin{pmatrix}
1-d & 1 & 1 & 1 & 1 \\
1 & -1 & 0 & 0 & 0 \\
1 & 0 & -1 & 0 & 0 \\
1 & 0 & 0 & -1 & 0 \\
1 & 0 & 0 & 0 & -1
\end{pmatrix}
\\
&= - (d+1)^5 \left( \det \begin{pmatrix}
1 & -1 & 0 & 0 \\
1 & 0 & -1 & 0 \\
1 & 0 & 0 & -1 \\
1 & 0 & 0 & 0
\end{pmatrix} - \det \begin{pmatrix}
1-d & 1 & 1 & 1 \\
1 & -1 & 0 & 0 \\
1 & 0 & -1 & 0 \\
1 & 0 & 0 & -1
\end{pmatrix} \right)
\\
&= - (d+1)^5 \left( - \det \begin{pmatrix}
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{pmatrix} + \det \begin{pmatrix}
1 & -1 & 0 \\
1 & 0 & -1 \\
1 & 0 & 0
\end{pmatrix} + \det \begin{pmatrix}
1-d & 1 & 1 \\
1 & -1 & 0 \\
1 & 0 & -1
\end{pmatrix} \right)
\\
&= -(d+1)^5 \left( 1 + 1 + (1-d) + 2 \right)
\\
&= (d+1)^5 (d-5)
\\
\therefore \ \ 
d &= -1, 5
\end{aligned}
$$

である。
そこで、

$$
\begin{aligned}
\tilde{D}
= \begin{pmatrix}
-1 & 0 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 0 & 5
\end{pmatrix}
\end{aligned}
$$

とおいて、 (2) と同様に考えると、

$$
\begin{aligned}
\mathrm{tr} \left( D^3 \right)
&= \mathrm{tr} \left( \tilde{D}^3 \right)
\\
&= \mathrm{tr} \begin{pmatrix}
-1 & 0 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 0 & 125
\end{pmatrix}
\\
&= 120
\end{aligned}
$$

がわかる。