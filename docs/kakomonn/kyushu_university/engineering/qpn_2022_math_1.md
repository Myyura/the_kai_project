---
comments: false
title: 九州大学 工学府 量子物理工学専攻 2022年度 数学 問題1
tags:
  - Kyushu-University
---
# 九州大学 工学府 量子物理工学専攻 2022年度 数学 問題1

## **Author**
Miyake

## **Description**

## **Kai**
### \[1\]
#### (1) (2)

$$
\begin{aligned}
A = \frac{1}{3} B
, \ \ 
B = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \\ 1 & 0 & 0 \end{pmatrix}
\end{aligned}
$$

である。

$B$ の固有値を $b$ とすると

$$
\begin{aligned}
0
&= \det \begin{pmatrix} 1-b & 0 & 2 \\ -1 & 3-b & 1 \\ 1 & 0 & -b
\end{pmatrix}
\\
&= -(b+1)(b-2)(b-3)
\\
\therefore \ \ 
\lambda &= -1, 2, 3
\end{aligned}
$$

である。

$B$ の固有値 $b=-1$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} 2 & 0 & 2 \\ -1 & 4 & 1 \\ 1 & 0 & 1 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x=2y,x+z=0$ となる。

$B$ の固有値 $b=2$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} -1 & 0 & 2 \\ -1 & 1 & 1 \\ 1 & 0 & -2 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x=2z,y=z$ となる。

$B$ の固有値 $b=3$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} -2 & 0 & 2 \\ -1 & 0 & 1 \\ 1 & 0 & -3 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x=z=0$ となる。

そこで、

$$
\begin{aligned}
P = \begin{pmatrix} 2 & 2 & 0 \\ 1 & 1 & 1 \\ -2 & 1 & 0 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\det P &= -6
\\
P^{-1}
&= - \frac{1}{6} \begin{pmatrix}
-1 & 0 & 2 \\ -2 & 0 & -2 \\ 3 & -6 & 0 \end{pmatrix}
\\
&= \frac{1}{6} \begin{pmatrix}
1 & 0 & -2 \\ 2 & 0 & 2 \\ -3 & 6 & 0 \end{pmatrix}
\end{aligned}
$$

であり、

$$
\begin{aligned}
P^{-1} B P
= \begin{pmatrix} -1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}
, \ \ 
P^{-1} A P
= \frac{1}{3}
\begin{pmatrix} -1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}
\end{aligned}
$$

が成り立つ。

#### (3)

$$
  \begin{aligned}
  \lim_{n \to \infty} A^n
  &= \lim_{n \to \infty} P \left( P^{-1} A P \right)^n P^{-1}
  \\
  &= \lim_{n \to \infty} P \begin{pmatrix}
  \left( - \frac{1}{3} \right)^n & 0 & 0 \\
  0 & \left( \frac{2}{3} \right)^n & 0 \\ 0 & 0 & 1
  \end{pmatrix} P^{-1}
  \\
  &= P \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} P^{-1}
  \\
  &= \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ - \frac{1}{2} & 1 & 0
  \end{pmatrix}
  \end{aligned}
$$

### \[2\]
#### (1)

$$
  \begin{aligned}
  \iint_R \left( 1 - x^2 - y^2 \right) dx dy
  &= \int_0^{2 \pi} d \theta \int_0^1 dr \ r \left( 1 - r^2 \right)
  \ \ \ \ \ \ \ \ ( x = r \cos \theta, y = r \sin \theta )
  \\
  &= 2 \pi \left[ \frac{r^2}{2} - \frac{r^4}{4} \right]_0^1
  \\
  &= \frac{\pi}{2}
  \end{aligned}
$$

#### (2)
$0 \leq t \leq a$ として、
3点 $(t,0,0),(0,t,0),(0,0,t)$ を頂点とする正三角形を考えると、
この三角形上の点 $(x,y,z)$ について $x+y+z=t$ であり、
この三角形の面積は

$$
\begin{aligned}
S(t) = \frac{\sqrt{3}}{2} t^2
\end{aligned}
$$

である。
よって、

$$
\begin{aligned}
\iiint_R \left( x+y+z \right) dx dy dz
&= \int_0^a t S(t) dt
\\
&= \frac{\sqrt{3}}{2} \int_0^a t^3 dt
\\
&= \frac{\sqrt{3}}{2} \left[ \frac{t^4}{4} \right]_0^a
\\
&= \frac{\sqrt{3}}{8} a^4
\end{aligned}
$$

である。

### \[3\]
