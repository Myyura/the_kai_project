---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 線形代数
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 線形代数

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
#### (a)

$$
  \begin{aligned}
  \boldsymbol{p}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}
  , \ \ 
  \boldsymbol{p}_2 = \frac{1}{2} \begin{pmatrix} 1 \\ \sqrt{3} \end{pmatrix}
  , \ \ 
  \boldsymbol{p}_3 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

#### (b)

$$
  \begin{aligned}
  \boldsymbol{p}_1 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}
  , \ \ 
  \boldsymbol{p}_2 = \begin{pmatrix} 3 \\ 0 \end{pmatrix}
  , \ \ 
  \boldsymbol{p}_3 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

### (2)
#### (a)

$$
  \begin{aligned}
  X
  &= \begin{pmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 \end{pmatrix}
  = \begin{pmatrix} 1 & \frac{1}{2} \\ 0 & \frac{\sqrt{3}}{2} \end{pmatrix}
  \\
  \therefore \ \ 
  X^T X
  &= \begin{pmatrix} 1 & 0 \\ \frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix}
  \begin{pmatrix} 1 & \frac{1}{2} \\ 0 & \frac{\sqrt{3}}{2} \end{pmatrix}
  = \begin{pmatrix} 1 & \frac{1}{2} \\ \frac{1}{2} & 1 \end{pmatrix}
  \end{aligned}
$$

#### (b)

$$
  \begin{aligned}
  X
  &= \begin{pmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 \end{pmatrix}
  = \begin{pmatrix} 2 & 3 \\ 0 & 0 \end{pmatrix}
  \\
  \therefore \ \ 
  X^T X
  &= \begin{pmatrix} 2 & 0 \\ 3 & 0 \end{pmatrix}
  \begin{pmatrix} 2 & 3 \\ 0 & 0 \end{pmatrix}
  = \begin{pmatrix} 4 & 6 \\ 6 & 9 \end{pmatrix}
  \end{aligned}
$$

### (3)
ベクトル $\boldsymbol{a}$ のノルムを $|\boldsymbol{a}|$ で表す。

与えられた定義より、

$$
\begin{aligned}
g_{i,j}
&= d_{i,n+1}^2 + d_{j,n+1}^2 - d_{i,j}
\\
&= \left| \boldsymbol{p}_i - \boldsymbol{p}_{n+1} \right|^2
+ \left| \boldsymbol{p}_j - \boldsymbol{p}_{n+1} \right|^2
- \left| \boldsymbol{p}_i - \boldsymbol{p}_j \right|^2
\\
&= 2
\left( \boldsymbol{p}_i^T \boldsymbol{p}_j
- \boldsymbol{p}_i^T \boldsymbol{p}_{n+1}
- \boldsymbol{p}_j^T \boldsymbol{p}_{n+1}
+ \left| \boldsymbol{p}_{n+1} \right|^2
\right)
\\
X^T X
&= \begin{pmatrix}
\boldsymbol{x}_1^T \\ \boldsymbol{x}_2^T \\ \vdots \\ \boldsymbol{x}_n^T
\end{pmatrix}
\begin{pmatrix}
\boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n
\end{pmatrix}
\\
&= \begin{pmatrix}
\boldsymbol{x}_1^T \boldsymbol{x}_1 & 
\boldsymbol{x}_1^T \boldsymbol{x}_2 & 
\cdots &
\boldsymbol{x}_1^T \boldsymbol{x}_n & 
\\
\boldsymbol{x}_2^T \boldsymbol{x}_1 & 
\boldsymbol{x}_2^T \boldsymbol{x}_2 & 
\cdots &
\boldsymbol{x}_2^T \boldsymbol{x}_n & 
\\
\vdots
\\
\boldsymbol{x}_n^T \boldsymbol{x}_1 & 
\boldsymbol{x}_n^T \boldsymbol{x}_2 & 
\cdots &
\boldsymbol{x}_n^T \boldsymbol{x}_n & 
\end{pmatrix}
\\
\boldsymbol{x}_i^T \boldsymbol{x}_j
&= \left( \boldsymbol{p}_i - \boldsymbol{p}_{n+1} \right)^T
\left( \boldsymbol{p}_j - \boldsymbol{p}_{n+1} \right)
\\
&= \boldsymbol{p}_i^T \boldsymbol{p}_j
- \boldsymbol{p}_i^T \boldsymbol{p}_{n+1}
- \boldsymbol{p}_j^T \boldsymbol{p}_{n+1}
+ \left| \boldsymbol{p}_{n+1} \right|^2
\end{aligned}
$$

なので、

$$
\begin{aligned}
G = 2 X^T X
\end{aligned}
$$

がわかる。
よって、任意の $\boldsymbol{v} \in \mathbb{R}^n$ について

$$
\begin{aligned}
\boldsymbol{v}^T G \boldsymbol{v}
&= 2 \boldsymbol{v}^T X^T X \boldsymbol{v}
\\
&= 2 \left( X \boldsymbol{v} \right)^T X \boldsymbol{v}
\\
&= 2 \left| X \boldsymbol{v} \right|^2
\\
&\geq 0
\end{aligned}
$$

が成り立つので、 $G$ は半正定値である。