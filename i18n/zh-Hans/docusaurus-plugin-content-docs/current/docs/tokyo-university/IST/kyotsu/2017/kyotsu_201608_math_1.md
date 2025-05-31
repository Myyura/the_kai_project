---
sidebar_label: "2016年8月実施 数学 第1問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2016年8月実施 数学 第1問

## **Author**
Zero, [etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
3次元ベクトル $\left (\begin{array}{cccc} x_{n} \\ y_{n} \\ z_{n} \\ \end{array}\right)$ は式

$$
\left (\begin{array}{cccc}
x_{n+1} \\
y_{n+1} \\
z_{n+1} \\
\end{array}\right)=A
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)
(n=0,1,2,...)
$$

を満たすものとする．ただし，$x_{0},y_{0},z_{0},\alpha$ は実数とし，

$$
A=\left (\begin{array}{cccc}
1-2\alpha & \alpha &\alpha \\
\alpha &1-\alpha &0 \\
\alpha &0 &1-\alpha \\
\end{array}\right),0<\alpha<\frac{1}{3}
$$

とする．以下の問いに答えよ. 

(1)、$x_{n}+y_{n}+z_{n}$ を $x_{0},y_{0},z_{0}$ を用いて表せ．

(2)、行列 $A$ の固有値 $\lambda_1,\lambda_2,\lambda_3$ と，それぞれの固有値に対応する固有ベクトル $v_{1},v_{2},v_{3}$ を求めよ．

(3)、行列 $A$ を $\lambda_1,\lambda_2,\lambda_3,v_{1},v_{2},v_{3}$ を用いて表せ．

(4)、$\left (\begin{array}{cccc} x_{n} \\ y_{n} \\ z_{n} \\ \end{array}\right)$ を $x_{0},y_{0},z_{0},\alpha$ を用いて表せ．

(5)、$\lim_{x \rightarrow \infty} \left (\begin{array}{cccc} x_{n} \\ y_{n} \\ z_{n} \\ \end{array}\right)$ を求めよ．

(6)、以下の式

$$
f(x_{0},y_{0},z_{0})=\frac{(x_{0},y_{0},z_{0})
\left (\begin{array}{cccc}
x_{n+1} \\
y_{n+1} \\
z_{n+1} \\
\end{array}\right)}
{(x_{0},y_{0},z_{0})
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)}
$$

を $x_{0},y_{0},z_{0}$ の関数とみなして，$f(x_{0},y_{0},z_{0})$ の最大値および最小値お求めよ．ただし，$x_{0}^2+y_{0}^2+z_{0}^2 \neq 0$ とする．


## **Kai**
### (1)
By the following given equations:

$$
\left (\begin{array}{cccc}
x_{n+1} \\
y_{n+1} \\
z_{n+1} \\
\end{array}\right) = A
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right) =
\left (\begin{array}{cccc}
1-2\alpha &\alpha & \alpha \\
\alpha &  1-\alpha & 0  \\
\alpha & 0 & 1-\alpha \\
\end{array}\right) 
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)
$$

We have

$$
x_{n+1}+y_{n+1}+z_{n+1}=
(1\ 1\ 1)
\left (\begin{array}{cccc}
x_{n+1} \\
y_{n+1} \\
z_{n+1} \\
\end{array}\right)=
(1\ 1\ 1) A
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=x_{n}+y_{n}+z_{n}
$$

Therefore:

$$
x_{n}+y_{n}+z_{n} = x_{n-1}+y_{n-1}+z_{n-1} = \cdots = x_{0}+y_{0}+z_{0}
$$

### (2)

$$
\begin{aligned}
  \det (A - \lambda I) &= \begin{vmatrix}
    1 - 2\alpha - \lambda & \alpha & \alpha \\
    \alpha & 1 - \alpha - \lambda & 0 \\
    \alpha & 0 & 1 - \alpha - \lambda
  \end{vmatrix}
\\
&= (\lambda^2 + (3\alpha - 2)\lambda + (1-3\alpha))(1 - \alpha - \lambda) \\
&= 0
\end{aligned}
$$

Hence,


$$
\lambda_{1}=1, v_{1}= \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$

$$
\lambda_{2}= 1-\alpha, v_{2}= \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}
$$

$$
\lambda_{3}= 1-3\alpha, v_{2}= \begin{pmatrix} -2 \\ 1 \\ 1 \end{pmatrix}
$$

### (3)
From (2), we know that

$$
A(v_{1}\ v_{2}\ v_{3})=(v_{1}\ v_{2}\ v_{3})\text{diag}(\lambda_{1}\ \lambda_{2}\ \lambda_{3})
$$

Hence,

$$
A=(v_{1}\ v_{2}\ v_{3})\text{diag}(\lambda_{1}\ \lambda_{2}\ \lambda_{3})(v_{1}\ v_{2}\ v_{3})^{-1}
$$

Which is,

$$
A=\left (\begin{array}{cccc}
1 &0 & -2\\
1 &-1 & 1\\
1 &1  & 1\\
\end{array}\right)
\left (\begin{array}{cccc}
1 &0 & 0\\
1 &1-\alpha &0\\
0 &0  &1-3\alpha\\
\end{array}\right)
\left (\begin{array}{cccc}
1 &0 & -2\\
1 &-1 & 1\\
1 &1  & 1\\
\end{array}\right)^{-1}
$$

### (4)
Note that,

$$
\begin{aligned}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)&=A^{n}
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right) \\
&=
((v_{1}\ v_{2}\ v_{3})\text{diag}(\lambda_{1}\ \lambda_{2}\ \lambda_{3})(v_{1}\ v_{2}\ v_{3})^{-1})^{n}
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right) \\
&=
(v_{1}\ v_{2}\ v_{3})\text{diag}(\lambda_{1}\ \lambda_{2}\ \lambda_{3})^{n}(v_{1}\ v_{2}\ v_{3})^{-1}
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right)
\end{aligned}
$$

Normalize the characteristic vectors:

$$
q_{1}=\frac{v_{1}}{\Vert v_{1}\Vert}= \begin{pmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{pmatrix}
$$

$$
q_{2}=\frac{v_{2}}{\Vert v_{2}\Vert}= \begin{pmatrix} 0 \\ \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{pmatrix}
$$

$$
q_{3}=\frac{v_{3}}{\Vert v_{3}\Vert} = \begin{pmatrix}
-\frac{2}{\sqrt{6}} \\ \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{6}} \end{pmatrix}
$$

We have

$$
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=
(q_{1}\ q_{2}\ q_{3})\text{diag}(\lambda_{1}^{n},\lambda_{2}^{n},\lambda_{3}^{n})(q_{1}\ q_{2}\ q_{3})^{-1}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)
$$

Since $0<\alpha<\frac{1}{3}$, $A$ is positive-definite.

$$
(q_{1}\ q_{2}\ q_{3})^{-1}=
(q_{1}\ q_{2}\ q_{3})^{T}=
\left (\begin{array}{cccc}
q_{1}^{T} \\
q_{2}^{T} \\
q_{3}^{T} \\
\end{array}\right)
$$

Hence,

$$
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=
(\lambda_{1}^{n}q_{1}q_{1}^{T}+
\lambda_{2}^{n}q_{2}q_{2}^{T}+
\lambda_{3}^{n}q_{3}q_{3}^{T})
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right)
$$

where

$$
q_{1}q_{1}^{T}=
\left (\begin{array}{cccc}
\frac{1}{3} &\frac{1}{3} &\frac{1}{3}\\
\frac{1}{3} &\frac{1}{3} &\frac{1}{3}\\
\frac{1}{3} &\frac{1}{3} &\frac{1}{3}\\
\end{array}\right),
$$

$$
q_{2}q_{2}^{T}=
\left (\begin{array}{cccc}
0 &0 &0\\
0 &\frac{1}{2} &-\frac{1}{2}\\
0 &-\frac{1}{2} &\frac{1}{2}\\
\end{array}\right),
$$

$$
q_{3}q_{3}^{T}=
\left (\begin{array}{cccc}
\frac{2}{3} &-\frac{1}{3} &-\frac{1}{3}\\
-\frac{1}{3} &\frac{1}{6} &\frac{1}{6}\\
-\frac{1}{3} &\frac{1}{6} &\frac{1}{6}\\
\end{array}\right)
$$

### (5)
Since 

$$
\vert\lambda_{1}\vert=1,
\vert\lambda_{2}\vert=1-\alpha<1,
\vert\lambda_{3}\vert=1-3\alpha<1
$$

Hence we have,

$$
\begin{aligned}
\lim_{x \rightarrow \infty}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)&=
(\lim_{x \rightarrow \infty}\lambda_{1}^{n}q_{1}q_{1}^{T}+\lim_{x \rightarrow \infty}\lambda_{2}^{n}q_{2}q_{2}^{T}+\lim_{x \rightarrow \infty}\lambda_{3}^{n}q_{3}q_{3}^{T})
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right) \\
&=
q_{1}q_{1}^{T}
\left (\begin{array}{cccc}
x_{0} \\
y_{0} \\
z_{0} \\
\end{array}\right)
\end{aligned}
$$

Therefore,

$$
\lim_{x \rightarrow \infty}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=
\frac{1}{3}(x_{0}+y_{0}+z_{0})
\left (\begin{array}{cccc}
1 \\
1 \\
1 \\
\end{array}\right)
$$

### (6)
Note that

$$
f(x_{0},y_{0},z_{0})=
\frac{\begin{pmatrix} x_{n} & y_{n} & z_{n} \end{pmatrix} A
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)}
{\begin{pmatrix} x_{n} & y_{n} & z_{n} \end{pmatrix}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)}
$$

Let

$$
p_{n}=\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)
$$

where

$$
\begin{pmatrix} x_{n} & y_{n} & z_{n} \end{pmatrix}
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=
x_{n}^{2}+y_{n}^{2}+z_{n}^{2}=\Vert p_{n} \Vert ^{2}
$$

and

$$
\begin{pmatrix} x_{n} & y_{n} & z_{n} \end{pmatrix} A
\left (\begin{array}{cccc}
x_{n} \\
y_{n} \\
z_{n} \\
\end{array}\right)=
\lambda_{1}p_{n}^{T}(q_{1}q_{1}^{T}p_{n})+\lambda_{2}p_{n}^{T}(q_{2}q_{2}^{T}p_{n})+\lambda_{3}p_{n}^{T}(q_{3}q_{3}^{T}p_{n})
$$

Since A is positive-definite, $q_{1},q_{2},q_{3}$ are all orthogonal, that is:

$$
q_{1}\perp q_{2},q_{2}\perp q_{3},q_{3}\perp q_{1}
$$

if $p_{n}//q_{1}$, then $p_{n}\perp q_{2}$ and $p_{n}\perp q_{3}$, the maximum of $f(x_{0},y_{0},z_{0})$ is

$$
\max(f(x_{0},y_{0},z_{0}))=\lambda_{1}=1
$$

if $p_{n}//q_{3}$,then $p_{n}\perp q_{1}$ and $p_{n}\perp q_{2}$, the minimum of $f(x_{0},y_{0},z_{0})$ is

$$
\min(f(x_{0},y_{0},z_{0}))=\lambda_{3}=1-3\alpha
$$