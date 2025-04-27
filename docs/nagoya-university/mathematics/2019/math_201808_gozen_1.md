---
sidebar_label: "2018年8月実施 午前の部 [1]"
tags:
  - Nagoya-University
  - Linear-Algebra
---
# 名古屋大学 多元数理科学研究科 2018年8月実施 午前の部 \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問に答えよ．

(1) $\mathbb{R}^4$ の $3$ 本のベクトル $\begin{pmatrix} 1 \\ 2 \\ 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \\ -2 \\ -1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \\ 2 \end{pmatrix}$ は 1 次独立であることを示せ．

(2) $\mathbb{R}^4$ の $3$ 本のベクトル $\begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 2 \\ 3 \\ 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 2 \\ 1 \\ -1 \\ 0 \end{pmatrix}$ は 1 次独立であることを示せ．

(3) $V_1, V_2$ をそれぞれ (1), (2) の $3$ 本のベクトルで生成される $\mathbb{R}^4$ の部分空間とする．$\mathbb{R}^4$ の部分空間 $V_1 + V_2$ の次元を求めよ．

(4) $V_1, V_2$ を (3) のとおりとする．$V_1 \cap V_2$ の次元と一組の基底を求めよ．

## **Kai**
### (1)
与えられた3本のベクトルからなる行列

$$
  \begin{aligned}
  \begin{pmatrix}
  1 & 1 & 1 \\ 2 & 0 & 1 \\ 0 & -2 & 0 \\ 1 & -1 & 2
  \end{pmatrix}
  \end{aligned}
$$

は次のように列基本変形できる：

$$
  \begin{align}
  \begin{pmatrix}
  1 & 0 & 0 \\ 2 & -2 & -1 \\ 0 & -2 & 0 \\ 1 & -2 & 1
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 2 & 1 & -1 \\ 0 & 1 & 0 \\ 1 & 1 & 1
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 0 & 1 & 0 \\ -2 & 1 & 1 \\ -1 & 1 & 2
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 3 & -1 & 2
  \end{pmatrix}
  \tag{i}
  \end{align}
$$

最後の表式の3つの列ベクトルは1次独立なので、
与えられた3本のベクトルは1次独立であることがわかる。

### (2)
与えられた3本のベクトルからなる行列

$$
  \begin{aligned}
  \begin{pmatrix}
  1 & 2 & 2 \\ 1 & 3 & 1 \\ 1 & 1 & -1 \\ 1 & 2 & 0
  \end{pmatrix}
  \end{aligned}
$$

は次のように列基本変形できる：

$$
  \begin{align}
  \begin{pmatrix}
  1 & 0 & 0 \\ 1 & 1 & -1 \\ 1 & -1 & -3 \\ 1 & 0 & -2
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & -4 \\ 1 & 0 & -2
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & 1 \\ 1 & 0 & \frac{1}{2}
  \end{pmatrix} \nonumber
  \\
  \begin{pmatrix}
  1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & \frac{1}{2} & \frac{1}{2}
  \end{pmatrix}
  \tag{ii}
  \end{align}
$$

最後の表式の3つの列ベクトルは1次独立なので、
与えられた3本のベクトルは1次独立であることがわかる。

### (3)
(1), (2) から $V_1, V_2$ はどちらも3次元であり、
($\text{i}$), ($\text{ii}$) から $V_1 \ne V_2$ がわかるので、
$V_1 + V_2$ は4次元であることがわかる。

### (4)
($\text{i}$), ($\text{ii}$) の列ベクトルを使って、
実数 $a,b,c,d,e,f$ について

$$
\begin{align}
a \begin{pmatrix} 1 \\ 0 \\ 0 \\ 3 \end{pmatrix}
+ b \begin{pmatrix} 0 \\ 1 \\0 \\ -1 \end{pmatrix}
+ c \begin{pmatrix} 0 \\ 0 \\ 1 \\ 2 \end{pmatrix}
=
d \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}
+ e \begin{pmatrix} 0 \\ 1 \\ 0 \\ \frac{1}{2} \end{pmatrix}
+ f \begin{pmatrix} 0 \\ 0 \\ 1 \\ \frac{1}{2} \end{pmatrix}
\tag{iii}
\end{align}
$$

が成り立つとすると、

$$
\begin{aligned}
a=d, b=e, c=f, 2a-b+c=0
\end{aligned}
$$

を得る。
$a,b$ を決めると $c,d,e,f$ が決まるので、
$V_1 \cap V_2$ は2次元であることがわかる。

$a=1,b=0$ とすると、 $c=-2,d=1,e=0,f=-2$ となり、
ベクトル ($\text{iii}$) は

$$
\begin{aligned}
u = \begin{pmatrix} 1 \\ 0 \\ -2 \\ -1 \end{pmatrix}
\end{aligned}
$$

となる。
また、 $a=0,b=1$ とすると、 $c=1,d=0,e=1,f=1$ となり、
ベクトル ($\text{iii}$) は

$$
\begin{aligned}
v = \begin{pmatrix} 0 \\ 1 \\ 1 \\ 1 \end{pmatrix}
\end{aligned}
$$

となる。
ここで求めた $u,v$ は $V_1 \cap V_2$ の基底である。