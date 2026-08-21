---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\mathbb{R}^3$ の座標を $(x, y, z)$ として、 $x = r \cos \theta, y = r \sin \theta$ とおく。 $\mathbb{R}^3$ の点 $(r \cos \theta, r \sin \theta, z)$ を $(r \cos (\theta + \alpha), r \sin (\theta + \alpha), z)$ にうつす変換を $z$ 軸のまわりの $\alpha$ 回転とよび $f_\alpha$ で表す。次の問に答えよ。

(1) $f_\alpha$ は $\mathbb{R}^3$ の線形変換であることを示し、これを3次の正方行列で表せ。

(2) $x$ 軸のまわりの $\pi / 2$ 回転と $z$ 軸のまわりの $\pi / 2$ 回転を、それぞれ行列 $A_1$ と $A_2$ で表す。行列 $A_1$ および $A_2$ を求めよ。

(3) 行列の積 $A_1 A_2$ を $M$ とおく。 $M$ の固有値をすべて求めよ。また、行列 $M$ は $\mathbb{R}^3$ のあるベクトルのまわりの回転を表すことを示し、回転軸となるベクトルと回転角の大きさを求めよ。

### 题目描述

在 $\mathbb{R}^3$ 中使用坐标 $(x,y,z)$，并令

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

把 $\mathbb{R}^3$ 中的点

$$
(r\cos\theta,r\sin\theta,z)
$$

映射为

$$
(r\cos(\theta+\alpha),r\sin(\theta+\alpha),z)
$$

的变换称为绕 $z$ 轴旋转 $\alpha$，记作 $f_\alpha$。回答下列问题。

(1) 证明 $f_\alpha$ 是 $\mathbb{R}^3$ 上的线性变换，并用三阶方阵表示该变换。

(2) 分别用矩阵 $A_1,A_2$ 表示绕 $x$ 轴旋转 $\pi/2$ 与绕 $z$ 轴旋转 $\pi/2$。求 $A_1$ 和 $A_2$。

(3) 令

$$
M=A_1A_2.
$$

求 $M$ 的全部特征值。再证明矩阵 $M$ 表示 $\mathbb{R}^3$ 中绕某个向量的旋转，并求作为旋转轴的向量以及旋转角的大小。

## **Kai**

(1) $f_\alpha(r\cos\theta, r\sin\theta, z) = (r\cos(\theta+\alpha), r\sin(\theta+\alpha), z)$ .
Let $v_1 = (r_1\cos\theta_1, r_1\sin\theta_1, z_1)$ and $v_2 = (r_2\cos\theta_2, r_2\sin\theta_2, z_2)$ .
Then
$f_\alpha(v_1 + v_2) = f_\alpha(r_1\cos\theta_1 + r_2\cos\theta_2, r_1\sin\theta_1 + r_2\sin\theta_2, z_1+z_2)$ is difficult to analyze.
Instead, consider
$f_\alpha(x,y,z) = (x\cos\alpha - y\sin\alpha, x\sin\alpha + y\cos\alpha, z)$ .
$f_\alpha(x_1+x_2, y_1+y_2, z_1+z_2) = ((x_1+x_2)\cos\alpha - (y_1+y_2)\sin\alpha, (x_1+x_2)\sin\alpha + (y_1+y_2)\cos\alpha, z_1+z_2) = (x_1\cos\alpha - y_1\sin\alpha, x_1\sin\alpha + y_1\cos\alpha, z_1) + (x_2\cos\alpha - y_2\sin\alpha, x_2\sin\alpha + y_2\cos\alpha, z_2) = f_\alpha(x_1,y_1,z_1) + f_\alpha(x_2, y_2, z_2)$
$f_\alpha(cx, cy, cz) = (cx\cos\alpha - cy\sin\alpha, cx\sin\alpha + cy\cos\alpha, cz) = c(x\cos\alpha - y\sin\alpha, x\sin\alpha + y\cos\alpha, z) = c f_\alpha(x,y,z)$
So it is a linear transformation.
The matrix representation is

$$
\begin{pmatrix} \cos\alpha & -\sin\alpha & 0 \\ \sin\alpha & \cos\alpha & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

(2) Rotation about x-axis by $\pi/2$ is

$$
A_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos(\pi/2) & -\sin(\pi/2) \\ 0 & \sin(\pi/2) & \cos(\pi/2) \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}
$$

Rotation about z-axis by $\pi/2$ is

$$
A_2 = \begin{pmatrix} \cos(\pi/2) & -\sin(\pi/2) & 0 \\ \sin(\pi/2) & \cos(\pi/2) & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

(3) $M = A_1A_2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & -1 \\ 1 & 0 & 0 \end{pmatrix}$
Eigenvalues: $\det(M - \lambda I) = 0$

$$
\begin{vmatrix} -\lambda & -1 & 0 \\ 0 & -\lambda & -1 \\ 1 & 0 & -\lambda \end{vmatrix} = -\lambda(\lambda^2) + (-1)(-1) = -\lambda^3 + 1 = 0
$$

$$
\lambda^3 = 1
$$

$$
\lambda = 1, \omega, \omega^2
$$

where $\omega = e^{2\pi i / 3} = -\frac{1}{2} + i \frac{\sqrt{3}}{2}$
M is a rotation matrix.
Tr(M) = 0. The rotation angle $\theta$ satisfies $1 + 2\cos\theta = 0$ , so $\cos\theta = -\frac{1}{2}$ , and $\theta = \frac{2\pi}{3}$ .
To find the rotation axis, we need to find the eigenvector corresponding to $\lambda = 1$ .
$(M - I)v = 0$ , where $v = (x,y,z)$ .

$$
\begin{pmatrix} -1 & -1 & 0 \\ 0 & -1 & -1 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-x - y = 0, -y - z = 0, x - z = 0$
$x = z, y = -x$
So the eigenvector is $(x, -x, x) = x(1, -1, 1)$ .
So the rotation axis is $(1, -1, 1)$ .
