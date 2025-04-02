---
sidebar_label: "2022年8月実施 線形代数"
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年8月実施 線形代数


## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
$n \times n$ 実対称行列 $A = [a_{ij}]_{n×n} \in \mathbb{R}^{n×n}$ に対して，$A$ の各要素 $a_{ij}$ が $a_{ij} \in \{0, 1\} (1 \le i, j \le n)$ かつ $a_{ii} = 0 (1 \le i \le n)$ を満たすとする．$A$ に対して，$D = [\delta_{ij}(\sum_{k = 1}^n a_{ik})]_{n \times n}$ と定義する．
ただし $\delta_{ij}$ は，$1 \le i, j \le n$ に対して，$i = j$ のとき $\delta_{ij} = 1$，そうでないとき $\delta_{ij} = 0$ によって定義される．さらに，$L = D − A$ と定義する．以下の各問いに答えよ．

(1) 以下の $A$ に対して，$L = D − A$ を求めよ．

$$
A = 
\begin{bmatrix}
0 & 1 & 1 & 0\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 0\\
0 & 0 & 0 & 0\\
\end{bmatrix}
$$

(2) (1) で求めた $L$ の固有値を全て求めよ．

(3) (2) で求めた $L$ の各固有値に対する固有空間を求めよ．

(4) 一般に $L$ は固有値 $0$ を持つことを示せ．

## **Kai** 
### (1)

$$
L = D - A = 
\begin{bmatrix}
2 & 0 & 0 & 0\\
0 & 2 & 0 & 0\\
0 & 0 & 2 & 0\\
0 & 0 & 0 & 0\\
\end{bmatrix} - 
\begin{bmatrix}
0 & 1 & 1 & 0\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 0\\
0 & 0 & 0 & 0\\
\end{bmatrix} = 
\begin{bmatrix}
2 & -1 & -1 & 0\\
-1 & 2 & -1 & 0\\
-1 & -1 & 2 & 0\\
0 & 0 & 0 & 0\\
\end{bmatrix}
$$

### (2)

$$
\begin{aligned}
&\because|T| = |\lambda E - L| = 
\begin{bmatrix}
\lambda - 2 & 1 & 1 & 0 \\
1 & \lambda -2 & 1 & 0 \\
1 & 1 & \lambda -2 & 0 \\
0 & 0 & 0 & \lambda \\
\end{bmatrix} = \lambda^2(\lambda - 3)^2 = 0\\
&\therefore\lambda_1 = 0(2重解) \quad \lambda_2 = 3(2重解)
\end{aligned}
$$

### (3)

$$
\lambda_1 = 0 \text{ のとき, }T_1x_1= 0 ,\text{ そして, } x_1 = \begin{bmatrix}\alpha_1 \\ \alpha_2 \\ \alpha_3 \\ \alpha_4 \end{bmatrix} \text{ とおくと,}
$$

$$
\begin{bmatrix}
-2 & 1 & 1 & 0 \\
1 & -2 & 1 & 0 \\
1 & 1 & -2 & 0 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
\begin{bmatrix}
\alpha_1 \\ 
\alpha_2 \\ 
\alpha_3 \\ 
\alpha_4 
\end{bmatrix} = 
\begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 1 & -1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
\begin{bmatrix}
\alpha_1 \\ 
\alpha_2 \\ 
\alpha_3 \\ 
\alpha_4 
\end{bmatrix} = 0
$$

$$
x_1 = s\begin{bmatrix} 1 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} 0 \\ 0 \\ 0 \\ 1\end{bmatrix} \Rightarrow 
V(0) = 
\left\{
\begin{bmatrix} 1 \\ 1 \\ 1 \\ 0 \end{bmatrix},
\begin{bmatrix} 0 \\ 0 \\ 0 \\ 1\end{bmatrix}
\right\}
$$

$$
\lambda_2 = 3 \text{ のとき, }T_2x_2= 0 ,\text{ そして, } x_2 = \begin{bmatrix}\beta_1 \\ \beta_2 \\ \beta_3 \\ \beta_4 \end{bmatrix} \text{ とおくと,}
$$

$$
\begin{bmatrix}
1 & 1 & 1 & 0 \\
1 & 1 & 1 & 0 \\
1 & 1 & 1 & 0 \\
0 & 0 & 0 & 3 \\
\end{bmatrix}
\begin{bmatrix}
\beta_1 \\ 
\beta_2 \\ 
\beta_3 \\ 
\beta_4 \\
\end{bmatrix} = 0 \Rightarrow
\begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}
\begin{bmatrix}
\beta_1 \\ 
\beta_2 \\ 
\beta_3 \\ 
\beta_4 \\
\end{bmatrix} = 0 
$$

$$
x_2 = s\begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -1 \\ 0 \\ 1 \\ 0\end{bmatrix} \Rightarrow
V(3) = 
\left\{
\begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix},
\begin{bmatrix} -1 \\ 0 \\ 1 \\ 0\end{bmatrix}
\right\}
$$

### (4)

$$
\begin{aligned}
|L| &= 
\begin{vmatrix}
\sum_{k=1}^n a_{1k} - a_{11} & -a_{12} & -a_{13} & \cdots & -a_{1n} \\
-a_{21} & \sum_{k=1}^n a_{2k} - a_{22} & -a_{23} & \cdots & -a_{2n} \\
-a_{31} & -a_{32} & \sum_{k=1}^n a_{3k} - a_{33} & \cdots & a_{1n} \\
\vdots & \vdots & \cdots & \ddots & \vdots \\
-a_{n1} & -a_{n2} & -a_{n3} & \cdots & \sum_{k=1}^n a_{nk} - a_{nn} \\
\end{vmatrix} \\
|L| &= 
\begin{vmatrix}
0 & -a_{12} & -a_{13} & \cdots & -a_{1n} \\
0 & \sum_{k=1}^n a_{2k} - a_{22} & -a_{23} & \cdots & -a_{2n} \\
0 & -a_{32} & \sum_{k=1}^n a_{3k} - a_{33} & \cdots & a_{1n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & -a_{n2} & -a_{n3} & \cdots & \sum_{k=1}^n a_{nk} - a_{nn}
\end{vmatrix} \\
|L| &= 0 \\
\lambda &= 0 \text{ のとき, }|L - \lambda E| = |L| = 0
\end{aligned}
$$