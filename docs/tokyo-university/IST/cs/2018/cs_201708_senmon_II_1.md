---
sidebar_label: 2017年8月実施 専門科目II 問題1
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Differential-Equations.Characteristic-Roots-and-Stability
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Consider solving numerically a system of first-order linear ordinary differential equations

$$
\frac{dx_i}{dt}(t)=\sum_{j=1}^n a_{i,j}(t)x_j(t),\qquad t\ge0
\tag{†}
$$

on a set of $n$ real functions of a real independent variable $t$,

$$
x_i(t),\qquad i=1,2,\cdots,n,
$$

where $a_{i,j}(t)$ is the $i,j$ component of an $n\times n$ coefficient matrix $A(t)$. Let $h>0$ be the step size used in the numerical methods. Suppose that the numerical solution is computed from initial values

$$
x_i(0)\in\mathbb R,\qquad i=1,2,\cdots,n.
$$

Assume that matrix $A(t)$ has $n$ distinct eigenvalues for any $t$.

Answer the following questions.

(1) Suppose that $A(t)$ is a constant matrix $A_0$, which is independent of $t$. Answer a necessary and sufficient condition for the eigenvalues of $A_0$ to satisfy

$$
\forall i=1,2,\cdots,n,\qquad \lim_{t\to\infty}x_i(t)=0,
$$

for any initial value.

(2) Answer a recurrence formula to solve Eq. ($\dagger$) by the forward Euler method. In addition, express the order of the local truncation error by big $O$ notation of the step size $h$.

(3) Suppose that Eq. ($\dagger$) is solved by the forward Euler method. The obtained approximation of $x_i(kh)$ is expressed as $X_i(k)$, where $k$ is a non-negative integer to express the step number of the method.

Suppose that $A(t)$ is a constant matrix $A_0$, which is independent of $t$. Answer a necessary and sufficient condition for the eigenvalues of $A_0$ to satisfy

$$
\forall i=1,2,\cdots,n,\qquad \lim_{k\to\infty}X_i(k)=0,
$$

for any initial value.

(4) Give an advantage of the backward Euler method compared to the forward Euler method with a brief explanation.

(5) Compare the computational complexity of one step to solve Eq. ($\dagger$) by the forward Euler method with that by the backward Euler method, by using big $O$ notation of $n$. Assume that the computational complexity to read each $a_{i,j}(t)$ is $O(1)$.

### 题目描述

数值求解一阶线性常微分方程组

$$
\frac{dx_i(t)}{dt}=\sum_{j=1}^n a_{ij}(t)x_j(t),\qquad t\ge0,
$$

其中 $A(t)=(a_{ij}(t))$ 在任意 $t$ 均有 $n$ 个互异特征值，步长为 $h>0$。

（1）当 $A(t)=A_0$ 为常矩阵时，给出对任意初值都有
$\lim_{t\to\infty}x_i(t)=0$（全部 $i$）的特征值充要条件。

（2）写出前向 Euler 法的递推式，并用 $h$ 的大 $O$ 记号给出局部截断误差。

（3）仍设 $A(t)=A_0$。以前向 Euler 法得到第 $k$ 步近似 $X_i(k)$。给出对任意初值都有 $\lim_{k\to\infty}X_i(k)=0$ 的特征值充要条件。

（4）简述后向 Euler 法相对于前向 Euler 法的一个优点。

（5）设读取每个 $a_{ij}(t)$ 的复杂度为 $O(1)$，比较两种 Euler 法求解一步的计算复杂度，以 $n$ 的大 $O$ 记号作答。

## **Kai**

记 $\boldsymbol{x}'=A(t)\boldsymbol{x}$。

### （1）

充要条件为

$$
\operatorname{Re}\lambda_i(A_0)<0\qquad(i=1,\ldots,n).
$$

由于特征值互异，$A_0$ 可在 $\mathbb C$ 上对角化；解的各特征模态为
$e^{\lambda_i t}$，故上述条件恰好保证所有模态趋于 $0$。

### （2）

$$
\boldsymbol X(k+1)=\boldsymbol X(k)+hA(kh)\boldsymbol X(k),
$$

即

$$
X_i(k+1)=X_i(k)+h\sum_{j=1}^n a_{ij}(kh)X_j(k).
$$

在精确解足够光滑时，未除以 $h$ 的单步局部截断误差为 $O(h^2)$（相应的归一化局部残差为 $O(h)$）。

### （3）

常系数时

$$
\boldsymbol X(k)=(I+hA_0)^k\boldsymbol X(0).
$$

因此充要条件是

$$
|1+h\lambda_i(A_0)|<1\qquad(i=1,\ldots,n).
$$

### （4）

后向 Euler 法对左半平面是绝对稳定的：若 $\operatorname{Re}\lambda<0$，其放大因子

$$
\frac{1}{1-h\lambda}
$$

对任意 $h>0$ 的模都小于 $1$。因此处理刚性方程时不受前向 Euler 法那样严格的稳定步长限制。

### （5）

前向 Euler 法只需一次稠密矩阵与向量相乘，复杂度为 $O(n^2)$。后向 Euler 法每步需解线性方程组

$$
[I-hA((k+1)h)]\boldsymbol X(k+1)=\boldsymbol X(k),
$$

对一般稠密矩阵用消元法为 $O(n^3)$。
