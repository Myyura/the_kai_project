---
comments: false
title: 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2024年度 数学 [1]
tags:
  - Waseda-University
---
# 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2024年度 数学 \[1\]

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
#### (i)

$$
  \begin{aligned}
  e^{PAP^{-1}}
  &= \sum_{k=0}^\infty \frac{\left( PAP^{-1} \right)^k}{k!}
  \\
  &= P \sum_{k=0}^\infty \frac{A^k}{k!} P^{-1}
  \\
  &= P e^A P^{-1}
  \end{aligned}
$$

#### (ii)

$$
  \begin{aligned}
  \frac{d}{dt} e^{tA}
  &= \frac{d}{dt} \sum_{k=0}^\infty \frac{t^k A^k}{k!}
  \\
  &= \sum_{k=1}^\infty \frac{t^{k-1} A^k}{(k-1)!}
  \\
  &= A \sum_{k=0}^\infty \frac{t^k A^k}{k!}
  \\
  &= A e^{tA}
  \end{aligned}
$$

であり、 $t=0$ のとき $e^{tA}$ は単位行列であるから、
求める解は

$$
  \begin{aligned}
  \boldsymbol{x}(t) = e^{tA} \boldsymbol{x}_0
  \end{aligned}
$$

であることがわかる。

#### (iii)

$$
\begin{aligned}
A
&= P
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
P^{-1}
\end{aligned}
$$

なので、

$$
\begin{aligned}
e^{tA}
&= \exp \left( tP
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
P^{-1} \right)
\\
&= P \exp \left( t
\begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix}
\right) P^{-1}
\ \ \ \ \ \ \ \ ( \because \text{ (i) } )
\\
&= P \begin{bmatrix}
e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t}
\end{bmatrix} P^{-1}
\end{aligned}
$$

となるため、 (ii) で求めた解は

$$
\begin{aligned}
\boldsymbol{x} (t)
&= e^{tA} \boldsymbol{x}_0
\\
&= P \begin{bmatrix}
e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t}
\end{bmatrix} P^{-1} \boldsymbol{x}_0
\end{aligned}
$$

と書ける。

#### (iv)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{bmatrix} 1 - \lambda & 1 \\ -2 & 4 - \lambda \end{bmatrix}
\\
&= (\lambda - 2)(\lambda - 3)
\\
\therefore \ \ \lambda &= 2, 3
\end{aligned}
$$

がわかる。

固有値 $2$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix}
\begin{bmatrix} u \\ v \end{bmatrix}
= \begin{bmatrix} 0 \\ 0 \end{bmatrix}
\end{aligned}
$$

とおくと $u=v$ を得る。

固有値 $3$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{bmatrix} -2 & 1 \\ -2 & 1 \end{bmatrix}
\begin{bmatrix} u \\ v \end{bmatrix}
= \begin{bmatrix} 0 \\ 0 \end{bmatrix}
\end{aligned}
$$

とおくと $2u=v$ を得る。

そこで、

$$
\begin{aligned}
P = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
P^{-1} &= \begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}
, \\ 
A &= P \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix} P^{-1}
\end{aligned}
$$

であり、

$$
\begin{aligned}
\boldsymbol{x}(t)
&= P \begin{bmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{bmatrix} P^{-1}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&=
\begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}
\begin{bmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{bmatrix}
\begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&= \begin{bmatrix}
2e^{2t} - e^{3t} & -e^{2t} + e^{3t} \\
2e^{2t} - 2e^{3t} & -e^{2t} + 2e^{3t}
\end{bmatrix}
\begin{bmatrix} x_{10} \\ x_{20} \end{bmatrix}
\\
&= \begin{bmatrix}
\left( 2 x_{10} - x_{20} \right) e^{2t}
+ \left( - x_{10} + x_{20} \right) e^{3t}
\\
\left( 2 x_{10} - x_{20} \right) e^{2t}
+ \left( - 2x_{10} + 2x_{20} \right) e^{3t}
\end{bmatrix}
\end{aligned}
$$

を得る。

### (2)
