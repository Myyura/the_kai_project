---
comments: false
title: 東北大学 医工学研究科 医学系コース 2022年実施 数学基礎 問題4-6
tags:
  - Tohoku-University
---
# 東北大学 医工学研究科 医学系コース 2022年実施 数学基礎 問題4-6

## **Author**
Miyake

## **Description**

## **Kai**
### 問題4
#### (1)

$$
\begin{aligned}
y'
&= e^{2x-y}
\\
\therefore \ \ 
e^y dy &= e^{2x} dx
\\
\therefore \ \ 
e^y &= \frac{1}{2} e^{2x} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
\therefore \ \ 
y &= \log \left( \frac{1}{2} e^{2x} + C \right)
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
z = \frac{y}{x}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
z'
&= \frac{y'x - y}{x^2}
\\
&= \frac{\left( \frac{x^2}{y} + y \right) - y}{x^2}
\\
&= \frac{1}{y}
\\
&= \frac{1}{xz}
\\
\therefore \ \ 
z dz &= \frac{dx}{x}
\\
\\
\therefore \ \ 
\frac{1}{2} z^2 &= \log |x| + C_0
\ \ \ \ \ \ \ \ \left( C_0 \text{ は積分定数 } \right)
\\
\therefore \ \ 
z &= \pm \sqrt{ 2 \log |x| + C }
\ \ \ \ \ \ \ \ \left( C=2C_0 \right)
\end{aligned}
$$

となるので、

$$
\begin{aligned}
y &= \pm x \sqrt{ 2 \log |x| + C }
\ \ \ \ \ \ \ \ \left( C \text{ は積分定数 } \right)
\end{aligned}
$$

である。

### 問題5
$AB=BA$ が成り立つので、

$$
\begin{aligned}
(A+B)(A-B)
&= A^2 - AB + BA - B^2
\\
&= A^2 - B^2
\end{aligned}
$$

が成り立つ。

### 問題6
拡大係数行列は次の通りである：

$$
\begin{aligned}
\begin{pmatrix}
2 & 5 & 3 & -7 \\ 1 & 2 & 4 & 3 \\ -1 & -1 & 2 & 6
\end{pmatrix}
\end{aligned}
$$

これは次のように行基本変形できる：

$$
\begin{aligned}
\begin{pmatrix}
0 & 1 & -5 & -13 \\ 1 & 2 & 4 & 3 \\ 0 & 1 & 6 & 9
\end{pmatrix}
\\
\begin{pmatrix}
0 & 1 & -5 & -13 \\ 1 & 0 & 14 & 29 \\ 0 & 0 & 11 & 22
\end{pmatrix}
\\
\begin{pmatrix}
0 & 1 & -5 & -13 \\ 1 & 0 & 14 & 29 \\ 0 & 0 & 1 & 2
\end{pmatrix}
\\
\begin{pmatrix}
0 & 1 & 0 & -3 \\ 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & 2
\end{pmatrix}
\end{aligned}
$$

よって、求める解は $x=1,y=-3,z=2$ である。