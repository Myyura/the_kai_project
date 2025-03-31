---
sidebar_label: "2024年度 線形代数 [2]"
tags:
  - Waseda-University
---
# 早稲田大学 基幹理工学研究科 数学応用数理専攻 2024年度 線形代数 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 1.
任意の $\boldsymbol{w} \in W$ について

$$
\begin{aligned}
\boldsymbol{w} = \sum_{i=1}^k a_i \boldsymbol{w}_i
\end{aligned}
$$

となる $a_1, a_2, \cdots, a_k \in \mathbb{R}$ が存在し、
この $\boldsymbol{w}$ について

$$
\begin{aligned}
P \boldsymbol{w}
&= \sum_{j=1}^k \sum_{i=1}^k a_i
\boldsymbol{w}_j \boldsymbol{w}_j^T \boldsymbol{w}_i
\\
&= \sum_{j=1}^k \sum_{i=1}^k a_i \boldsymbol{w}_j \delta_{ij}
\ \ \ \ \ \ \ \ ( \delta_{ij} \text{ はクロネッカーのデルタ } )
\\
&= \sum_{i=1}^k a_i \boldsymbol{w}_i
\\
&= \boldsymbol{w}
\end{aligned}
$$

が成り立つ。
また、任意の $\boldsymbol{w}' \in W^\perp$
について $\boldsymbol{w}_j^T \boldsymbol{w}' = 0 \ \ (j=1,2,\cdots,k)$
なので、

$$
\begin{aligned}
P \boldsymbol{w}'
&= \sum_{j=1}^k \boldsymbol{w}_j \boldsymbol{w}_j^T \boldsymbol{w}'
\\
&= \boldsymbol{0}
\end{aligned}
$$

が成り立つ。
よって、 $P$ で定まる線形変換は $\mathbb{R}^n$ から $W$ への正射影である。

### 2.
#### (1)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \left( A - \lambda I \right)
\ \ \ \ \ \ \ \ ( I \text{ は4次単位行列 } )
\\
&= \lambda^4 - 4 \lambda^2 + 4
\\
&= \left( \lambda + \sqrt{2} \right)^2
\left( \lambda - \sqrt{2} \right)^2
\\
\therefore \ \ 
\lambda &= \pm \sqrt{2}
\end{aligned}
$$

である。

(i) 固有値 $\lambda_1 = - \sqrt{2}$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix}
\sqrt{2} & 1 & 0 & -1 \\ 1 & \sqrt{2} & 1 & 0 \\
0 & 1 & \sqrt{2} & 1 \\ -1 & 0 & 1 & \sqrt{2}
\end{pmatrix}
\begin{pmatrix} a \\ b \\ c \\ d \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、
$a = c + \sqrt{2} d , \ b = - \sqrt{2} c - d$
なので、この固有値に属する固有空間 $W_1$ は2次元であり、
基底として例えば

$$
\begin{aligned}
\boldsymbol{u}_{11}
= \begin{pmatrix} 1 \\ - \sqrt{2} \\ 1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{u}_{12}
= \begin{pmatrix} \sqrt{2} \\ -1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

がある。
そこで、

$$
\begin{aligned}
\boldsymbol{v}_{11}
&= \frac{\boldsymbol{u}_{11}}{\left| \boldsymbol{u}_{11} \right|}
= \frac{1}{2} \begin{pmatrix} 1 \\ - \sqrt{2} \\ 1 \\ 0 \end{pmatrix}
,\\
\boldsymbol{v}_{12}'
&= \boldsymbol{u}_{12}
- \left( \boldsymbol{v}_{11} \cdot \boldsymbol{u}_{12} \right)
\boldsymbol{v}_{11}
= \begin{pmatrix}
\frac{1}{\sqrt{2}} \\ 0 \\ - \frac{1}{\sqrt{2}} \\ 1
\end{pmatrix}
,\\
\boldsymbol{v}_{12}
&= \frac{\boldsymbol{v}_{12}'}{\left| \boldsymbol{v}_{12}' \right|}
= \frac{1}{2} \begin{pmatrix} 1 \\ 0 \\ -1 \\ \sqrt{2} \end{pmatrix}
\end{aligned}
$$

とすると、 $\boldsymbol{v}_{11}, \boldsymbol{v}_{12}$ は $W_1$
の正規直交基底である。

(ii) 固有値 $\lambda_2 = \sqrt{2}$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix}
- \sqrt{2} & 1 & 0 & -1 \\ 1 & - \sqrt{2} & 1 & 0 \\
0 & 1 & - \sqrt{2} & 1 \\ -1 & 0 & 1 & - \sqrt{2}
\end{pmatrix}
\begin{pmatrix} a \\ b \\ c \\ d \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、
$a = c - \sqrt{2} d , \ b = \sqrt{2} c - d$
なので、この固有値に属する固有空間 $W_2$ は2次元であり、
基底として例えば

$$
\begin{aligned}
\boldsymbol{u}_{21}
= \begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{u}_{22}
= \begin{pmatrix} - \sqrt{2} \\ -1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

がある。
そこで、

$$
\begin{aligned}
\boldsymbol{v}_{21}
&= \frac{\boldsymbol{u}_{21}}{\left| \boldsymbol{u}_{21} \right|}
= \frac{1}{2} \begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \\ 0 \end{pmatrix}
,\\
\boldsymbol{v}_{22}'
&= \boldsymbol{u}_{22}
- \left( \boldsymbol{v}_{21} \cdot \boldsymbol{u}_{22} \right)
\boldsymbol{v}_{21}
= \begin{pmatrix}
- \frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \\ 1
\end{pmatrix}
,\\
\boldsymbol{v}_{22}
&= \frac{\boldsymbol{v}_{22}'}{\left| \boldsymbol{v}_{22}' \right|}
= \frac{1}{2} \begin{pmatrix} -1 \\ 0 \\ 1 \\ \sqrt{2} \end{pmatrix}
\end{aligned}
$$

とすると、 $\boldsymbol{v}_{21}, \boldsymbol{v}_{22}$ は $W_2$
の正規直交基底である。

(i), (ii) より、

$$
\begin{aligned}
Q
&= \begin{pmatrix}
\boldsymbol{v}_{11} & \boldsymbol{v}_{12} &
\boldsymbol{v}_{21} & \boldsymbol{v}_{22}
\end{pmatrix}
\\
&= \frac{1}{2} \begin{pmatrix}
1 & 1 & 1 & -1 \\ - \sqrt{2} & 0 & \sqrt{2} & 0 \\
1 & -1 & 1 & 1 \\ 0 & \sqrt{2} & 0 & \sqrt{2}
\end{pmatrix}
\end{aligned}
$$

とおくと、これは $A$ を対角化する直交行列である。

#### (2)
$\lambda_1, \lambda_2, W_1, W_2,
\boldsymbol{v}_{11},
\boldsymbol{v}_{12},
\boldsymbol{v}_{21},
\boldsymbol{v}_{22}$ を (1) の通りとする。
$W_1, W_2$ のそれぞれへの正射影 $P_1, P_2$ は

$$
\begin{aligned}
P_1
&= \boldsymbol{v}_{11} \boldsymbol{v}_{11}^T
+ \boldsymbol{v}_{12} \boldsymbol{v}_{12}^T
\\
&= \frac{1}{4} \begin{pmatrix}
2 & - \sqrt{2} & 0 & \sqrt{2} \\ - \sqrt{2} & 2 & - \sqrt{2} & 0 \\
0 & - \sqrt{2} & 2 & - \sqrt{2} \\ \sqrt{2} & 0 & - \sqrt{2} & 2
\end{pmatrix}
,\\
P_2
&= \boldsymbol{v}_{21} \boldsymbol{v}_{21}^T
+ \boldsymbol{v}_{22} \boldsymbol{v}_{22}^T
\\
&= \frac{1}{4} \begin{pmatrix}
2 & \sqrt{2} & 0 & - \sqrt{2} \\ \sqrt{2} & 2 & \sqrt{2} & 0 \\
0 & \sqrt{2} & 2 & \sqrt{2} \\ - \sqrt{2} & 0 & \sqrt{2} & 2
\end{pmatrix}
\end{aligned}
$$

である。

#### (3)
$\lambda_1, \lambda_2, P_1, P_2$ を (2) の通りとすると、

$$
\begin{aligned}
A = \lambda_1 P_1 + \lambda_2 P_2
\end{aligned}
$$

が成り立つ。