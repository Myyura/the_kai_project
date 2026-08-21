---
sidebar_label: "2022年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2022年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ベクトル空間 $R^3$ の基底

$$
e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}
$$

をとる。また、 $R^3$ の標準内積を $a = a_1e_1 + a_2e_2 + a_3e_3$ , $b = b_1e_1 + b_2e_2 + b_3e_3$ に対して

$$
\langle a, b \rangle = a_1b_1 + a_2b_2 + a_3b_3
$$

で定義する。ベクトル $n$ を

$$
n = \frac{1}{\sqrt{3}}(e_1 + e_2 + e_3)
$$

で定める。また、

$$
a_1 = \frac{1}{\sqrt{2}}(e_1 - e_2), a_2 = \frac{1}{\sqrt{2}}(e_2 - e_3)
$$

とする。次の問に答えよ。

(1) ベクトル $a_1, a_2$ のなす角度を求めよ。

(2) $R^3$ の線形部分空間 $W$ を

$$
W = \{ x \in R^3 \mid \langle x, n \rangle = 0 \}
$$

で定める。ベクトル $a_1, a_2$ は $W$ の基底であることを示せ。

(3) $W$ に含まれるベクトル $w$ で

$$
\langle w, w \rangle = 1, \langle a_1, w \rangle = 0, \langle a_2, w \rangle > 0
$$

を満たすものを求めよ。

(4) 3次の直交行列 $A$ で

$$
Aa_1 = e_1, An = e_3, \det A = 1
$$

を満たすものを求めよ。

### 题目描述

取向量空间 $\mathbb{R}^3$ 的基

$$
e_1=\begin{pmatrix}1\\0\\0\end{pmatrix},
\qquad
e_2=\begin{pmatrix}0\\1\\0\end{pmatrix},
\qquad
e_3=\begin{pmatrix}0\\0\\1\end{pmatrix}.
$$

对

$$
a=a_1e_1+a_2e_2+a_3e_3,\qquad
b=b_1e_1+b_2e_2+b_3e_3,
$$

定义 $\mathbb{R}^3$ 上的标准内积

$$
\langle a,b\rangle=a_1b_1+a_2b_2+a_3b_3.
$$

定义向量

$$
n=\frac1{\sqrt3}(e_1+e_2+e_3),
$$

并令

$$
a_1=\frac1{\sqrt2}(e_1-e_2),
\qquad
a_2=\frac1{\sqrt2}(e_2-e_3).
$$

回答下列问题。

(1) 求向量 $a_1,a_2$ 的夹角。

(2) 定义 $\mathbb{R}^3$ 的线性子空间

$$
W=\left\{x\in\mathbb{R}^3\,\middle|\,
\langle x,n\rangle=0
\right\}.
$$

证明 $a_1,a_2$ 是 $W$ 的一组基。

(3) 求满足下列全部条件的向量 $w\in W$：

$$
\langle w,w\rangle=1,\qquad
\langle a_1,w\rangle=0,\qquad
\langle a_2,w\rangle>0.
$$

(4) 求满足

$$
Aa_1=e_1,\qquad
An=e_3,\qquad
\det A=1
$$

的三阶正交矩阵 $A$。

## **Kai**

(1)

$$
\begin{aligned}
\langle a_1, a_2 \rangle &= \left\langle \frac{1}{\sqrt{2}}(e_1 - e_2), \frac{1}{\sqrt{2}}(e_2 - e_3) \right\rangle \\
&= \frac{1}{2} \langle e_1 - e_2, e_2 - e_3 \rangle \\
&= \frac{1}{2} (0 - 1 - 0 + 0) = -\frac{1}{2}
\end{aligned}
$$

$$
\begin{aligned}
\left| a_1 \right| &= \sqrt{\langle a_1, a_1 \rangle} = \sqrt{\left\langle \frac{1}{\sqrt{2}}(e_1 - e_2), \frac{1}{\sqrt{2}}(e_1 - e_2) \right\rangle} \\
&= \sqrt{\frac{1}{2} \langle e_1 - e_2, e_1 - e_2 \rangle} = \sqrt{\frac{1}{2}(1 + 1)} = 1
\end{aligned}
$$

同理， $\left| a_2 \right| = 1$ 。

因此，

$$
\cos \theta = \frac{\langle a_1, a_2 \rangle}{\left| a_1 \right| \left| a_2 \right|} = \frac{-\frac{1}{2}}{1 \cdot 1} = -\frac{1}{2}
$$

故 $\theta = \frac{2\pi}{3}$ 。

(2) $W = \{x \in \mathbb{R}^3 \mid \langle x, n \rangle = 0 \}$ 。
设 $x = x_1 e_1 + x_2 e_2 + x_3 e_3$ 。则：

$$
\langle x, n \rangle = \left\langle x_1 e_1 + x_2 e_2 + x_3 e_3, \frac{1}{\sqrt{3}}(e_1 + e_2 + e_3) \right\rangle = \frac{1}{\sqrt{3}}(x_1 + x_2 + x_3)
$$

故 $W = \{x \in \mathbb{R}^3 \mid x_1 + x_2 + x_3 = 0\}$ 。

因为 $\langle a_1, n \rangle = \langle \frac{1}{\sqrt{2}}(e_1 - e_2), \frac{1}{\sqrt{3}}(e_1 + e_2 + e_3) \rangle = \frac{1}{\sqrt{6}} (1 - 1) = 0$ ，所以 $a_1 \in W$ 。
同理，因为 $\langle a_2, n \rangle = 0$ ，所以 $a_2 \in W$ 。

$a_1, a_2$ 线性无关，理由如下：
若 $c_1 a_1 + c_2 a_2 = 0$ ，即

$$
c_1 \frac{1}{\sqrt{2}}(e_1 - e_2) + c_2 \frac{1}{\sqrt{2}}(e_2 - e_3) = \frac{c_1}{\sqrt{2}} e_1 + \frac{c_2 - c_1}{\sqrt{2}} e_2 - \frac{c_2}{\sqrt{2}} e_3 = 0
$$

这蕴含 $c_1 = 0$ ， $c_2 - c_1 = 0$ ，且 $c_2 = 0$ ，解得 $c_1 = c_2 = 0$ 。

$W$ 是一个二维平面。由于 $a_1, a_2 \in W$ 且线性无关，故它们构成 $W$ 的一组基。

(3) 设 $w = x_1 e_1 + x_2 e_2 + x_3 e_3$ 。
由 $\langle a_1, w \rangle = \frac{1}{\sqrt{2}} (x_1 - x_2) = 0$ ，得 $x_1 = x_2$ 。
因为 $w \in W$ ，需满足 $x_1 + x_2 + x_3 = 0$ ，即 $2x_1 + x_3 = 0$ ，解得 $x_3 = -2x_1$ 。
因此 $w = x_1 e_1 + x_1 e_2 - 2x_1 e_3 = x_1 (e_1 + e_2 - 2e_3)$ 。

由 $\langle w, w \rangle = x_1^2 (1 + 1 + 4) = 6x_1^2 = 1$ ，解得 $x_1 = \pm \frac{1}{\sqrt{6}}$ 。
即 $w = \frac{1}{\sqrt{6}}(e_1 + e_2 - 2e_3)$ 或 $w = -\frac{1}{\sqrt{6}}(e_1 + e_2 - 2e_3)$ 。

又因为 $\langle a_2, w \rangle = \langle \frac{1}{\sqrt{2}}(e_2 - e_3), x_1(e_1 + e_2 - 2e_3) \rangle = \frac{x_1}{\sqrt{2}} (1 + 2) = \frac{3x_1}{\sqrt{2}} > 0$ ，所以 $x_1 > 0$ 。
综上， $x_1 = \frac{1}{\sqrt{6}}$ ，故 $w = \frac{1}{\sqrt{6}}(e_1 + e_2 - 2e_3)$ 。

(4)
已知 $A$ 为正交矩阵且 $\det A = 1$ ，这表示 $A$ 是一个旋转矩阵，它保持向量的内积和叉积运算。
已知 $Aa_1 = e_1$ 和 $An = e_3$ 。
我们需要确定 $w$ 的像 $Aw$ 。

首先计算 $a_1$ 与 $n$ 的叉积：

$$
\begin{aligned}
a_1 \times n &= \begin{pmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \\ 0 \end{pmatrix} \times \begin{pmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{pmatrix} \\
&= \begin{pmatrix} -\frac{1}{\sqrt{6}} \\ -\frac{1}{\sqrt{6}} \\ \frac{2}{\sqrt{6}} \end{pmatrix} = - \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix} = -w
\end{aligned}
$$

由于 $\det A = 1$ ，矩阵 $A$ 保持叉积方向：

$$
A(-w) = A(a_1 \times n) = (Aa_1) \times (An) = e_1 \times e_3
$$

在右手系中， $e_1 \times e_3 = -e_2$ 。
因此 $A(-w) = -e_2$ ，即 $Aw = e_2$ 。

现在我们有：

$$
A \begin{pmatrix} a_1 & w & n \end{pmatrix} = \begin{pmatrix} e_1 & e_2 & e_3 \end{pmatrix} = I
$$

令 $P = \begin{pmatrix} a_1 & w & n \end{pmatrix}$ 。由于 $a_1, w, n$ 两两正交且模长为 1，故 $P$ 是正交矩阵。
由 $AP = I$ 可知 $A = P^{-1}$ 。
因为 $P$ 是正交矩阵，所以 $P^{-1} = P^T$ 。

将向量写成列向量形式：

$$
P = \begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\
0 & -\frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}}
\end{pmatrix}
$$

所以：

$$
A = P^T = \begin{pmatrix}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \\
\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{6}} & -\frac{2}{\sqrt{6}} \\
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}}
\end{pmatrix}
$$
