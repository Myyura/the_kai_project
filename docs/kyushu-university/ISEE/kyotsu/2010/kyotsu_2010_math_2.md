---
sidebar_label: "2010年度入学 数学 問2（微分方程式）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2010年度入学 数学 問2（微分方程式）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つの関数 $x(t)$ , $y(t)$ について、次の連立微分方程式を解け.

$$
\begin{cases}
\frac{dx}{dt} = 2x - y \\
\frac{dy}{dt} = -x + 2y + 2e^t
\end{cases}
$$

### 题目描述

设 $x(t)$、$y(t)$ 为关于 $t$ 的函数，求下列非齐次线性常微分方程组的通解：

$$
\begin{cases}
\dfrac{dx}{dt}=2x-y,\\[2mm]
\dfrac{dy}{dt}=-x+2y+2e^t.
\end{cases}
$$

## **Kai**

首先，我们将方程组写成矩阵形式：

$$
\frac{d}{dt} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} 0 \\ 2e^t \end{pmatrix}
$$

设 $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$ 。求矩阵 $A$ 的特征值和特征向量。

$$
|A - \lambda I| = \begin{vmatrix} 2-\lambda & -1 \\ -1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3) = 0
$$

因此，特征值为 $\lambda_1 = 1$ 和 $\lambda_2 = 3$ 。

对于 $\lambda_1 = 1$ ，求解 $(A - I)v_1 = 0$ ：

$$
\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} v_{11} \\ v_{12} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

得到 $v_{11} = v_{12}$ ，所以特征向量 $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 。

对于 $\lambda_2 = 3$ ，求解 $(A - 3I)v_2 = 0$ ：

$$
\begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \begin{pmatrix} v_{21} \\ v_{22} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

得到 $v_{21} = -v_{22}$ ，所以特征向量 $v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ 。

齐次方程的通解为：

$$
\begin{pmatrix} x \\ y \end{pmatrix}_h = c_1 e^t \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 e^{3t} \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$

现在求非齐次方程的特解。令

$$
p=x+y,\qquad q=x-y.
$$

原方程组化为

$$
\begin{cases}
p'=p+2e^t,\\
q'=3q-2e^t.
\end{cases}
$$

第一式的外力 $e^t$ 与齐次模态共振，因此

$$
p=C_1e^t+2te^t,\qquad q=C_2e^{3t}+e^t.
$$

$x=(p+q)/2,\ y=(p-q)/2$ に戻し、任意定数を取り直すと

$$
\boxed{
\begin{aligned}
x(t)&=c_1e^t+c_2e^{3t}+te^t+\frac12e^t,\\
y(t)&=c_1e^t-c_2e^{3t}+te^t-\frac12e^t.
\end{aligned}}
$$
