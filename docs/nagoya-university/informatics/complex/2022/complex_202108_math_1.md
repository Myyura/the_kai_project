---
sidebar_label: "2021年8月実施 数1"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Affine-Transformation
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2021年8月実施 数1

## **Author**
祭音Myyura

## **Description**
以下の各問に答えよ。ただし，$i$は虚数単位とする。

### \[1\] 
$\omega = (-1 + \sqrt{3}i)/2$ とするとき，以下の行列のべき乗 $A^2, A^3, A^4$ を求めよ。

$$
A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & \omega & \omega^2 \\ 1 & \omega^2 & \omega \end{pmatrix}
$$

### \[2\]
平面上の座標系 $(x,y)$ と $(x',y')$ の変換 $\vec{x} = A\vec{x}' + \vec{x}_0$ を考える。ただし，

$$
\vec{x} = \begin{pmatrix} x \\ y \end{pmatrix}, \quad A = \begin{pmatrix} -4 & 3 \\ 2 & 5 \end{pmatrix}, \quad \vec{x}' = \begin{pmatrix} x' \\ y' \end{pmatrix}, \quad \vec{x}_0 = \begin{pmatrix} 2 \\ -1 \end{pmatrix}
$$

とする。このとき，$(x,y)$ 平面上の直線 $x + y + 1 = 0$ の，$(x',y')$ 平面上での式を求めよ。

### \[3\]
$A$ を直交行列とする。

1) 任意の実ベクトル $\vec{a}, \vec{b}$ に対して，$A$ による直交変換が内積 $\vec{a} \cdot \vec{b}$ を不変に保つこと，すなわち $(A\vec{a}) \cdot (A\vec{b}) = \vec{a} \cdot \vec{b}$ であることを示せ。
2) $A$ の固有値の絶対値が1であることを示せ。
3) 以下 $A$ は $2 \times 2$ 行列とする。$A$ の列ベクトル表示を $A = (\vec{a}_1, \vec{a}_2)$ とすると，$\vec{a}_1$ および $\vec{a}_2$ のユークリッドノルムが1になること，および $\vec{a}_1$ と $\vec{a}_2$ が直交することを示せ。
4) 3) の結果から $\vec{a}_1 = \begin{pmatrix} \cos\theta \\ \sin\theta \end{pmatrix} (0 \le \theta < 2\pi)$ と書けることを用いて，$\det A = 1$ の場合に $\vec{a}_2$ を求めよ。
5) $\det A = -1$ の場合には，$A$ が

$$
A = \begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}
$$

と表される。このとき，任意の2次元実ベクトル $\vec{v}$ に対して，$A\vec{v}$ は原点を通るある直線を対称軸として線対称の関係になる。その直線の式を示せ。

### 题目描述

以下 $i$ 为虚数单位。

**[1]** 令 $\omega=(-1+\sqrt3i)/2$，对

$$
A=\begin{pmatrix}
1&1&1\\1&\omega&\omega^2\\1&\omega^2&\omega
\end{pmatrix},
$$

求 $A^2,A^3,A^4$。

**[2]** 坐标变换为 $\boldsymbol x=A\boldsymbol x'+\boldsymbol x_0$，其中

$$
A=\begin{pmatrix}-4&3\\2&5\end{pmatrix},\qquad
\boldsymbol x_0=(2,-1)^\top.
$$

求原平面直线 $x+y+1=0$ 在 $(x',y')$ 平面的方程。

**[3]** 设 $A$ 为正交矩阵：证明内积在 $A$ 下不变；证明其特征值模长为 1；对二阶 $A=(\boldsymbol a_1,\boldsymbol a_2)$，证明两列为相互正交的单位向量；写 $\boldsymbol a_1=(\cos\theta,\sin\theta)^\top$，在 $\det A=1$ 时求 $\boldsymbol a_2$；在 $\det A=-1$ 且

$$
A=\begin{pmatrix}\cos\theta&\sin\theta\\
\sin\theta&-\cos\theta\end{pmatrix}
$$

时，求该镜面反射变换的过原点对称轴方程。

#### 考点

- **复单位根与矩阵幂**：利用 $1+\omega+\omega^2=0$ 简化 Fourier 型矩阵乘积。
- **仿射坐标变换**：把坐标变换代入原直线方程。
- **正交矩阵与二维正交变换**：由 $A^\top A=I$ 推导内积、范数、谱性质，并按行列式区分旋转与反射。

## **Kai**
### \[1\]
$\omega = (-1+\sqrt{3}i)/2$ より、

- $(1,1): 1\cdot1 + 1\cdot1 + 1\cdot1 = 3$
- $(1,2): 1 + \omega + \omega^2 = 0$
- $(1,3): 1 + \omega^2 + \omega = 0$
- $(2,1): 1 + \omega + \omega^2 = 0$
- $(2,2): 1 + \omega^2 + \omega^4 = 1 + \omega^2 + \omega = 0$
- $(2,3): 1 + \omega^3 + \omega^3 = 1 + 1 + 1 = 3$
- $(3,1): 1 + \omega^2 + \omega = 0$
- $(3,2): 1 + \omega^3 + \omega^3 = 1 + 1 + 1 = 3$
- $(3,3): 1 + \omega^4 + \omega^2 = 1 + \omega + \omega^2 = 0$

従って、

$$
  \begin{aligned}
  A^2 &= \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 3 \\ 0 & 3 & 0 \end{pmatrix}\\
  A^3
  &=
  3 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
  \begin{pmatrix} 1 & 1 & 1 \\ 1 & \omega & \omega^2 \\ 1 & \omega^2 & \omega \end{pmatrix}
  \\
  &=
  3 \begin{pmatrix} 1 & 1 & 1 \\ 1 & \omega^2 & \omega \\ 1 & \omega & \omega^2 \end{pmatrix}
  \\
  A^4
  &=
  3 \begin{pmatrix} 1 & 1 & 1 \\ 1 & \omega^2 & \omega \\ 1 & \omega & \omega^2 \end{pmatrix}
  \begin{pmatrix} 1 & 1 & 1 \\ 1 & \omega & \omega^2 \\ 1 & \omega^2 & \omega \end{pmatrix}
  \\
  &=
  9 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
  \end{aligned}
$$

### \[2\]
$x+y+1=0$ に

$$
\begin{aligned}
\begin{pmatrix} x \\ y \end{pmatrix}
&= A\vec{x}' + \vec{x}_0 = \begin{pmatrix} -4x'+3y'+2 \\ 2x'+5y'-1 \end{pmatrix}
\end{aligned}
$$

を代入して整理すると、

$$
(-4x' + 3y' + 2) + (2x' + 5y' - 1) + 1 = 0
$$

$$
-2x' + 8y' + 2 = 0
$$

$$
x' - 4y' - 1 = 0
$$

を得る。

### \[3\]
行列 $X$ やベクトル $\vec{x}$ の転置をそれぞれ $X^T, \vec{x}^T$ で表す。
内積 $\vec{x} \cdot \vec{y}$ は $\vec{x}^T \vec{y}$ とも書ける。
また、単位行列を $I$ で表す。

さらに、行列 $X$ やベクトル $\vec{x}$ の複素転置（エルミート共役）をそれぞれ
$X^\dagger, \vec{x}^\dagger$ で表す。
$X$ が実行列の場合は、 $X^\dagger = X^T$ である。

#### 1)

$$
(A\vec{a}) \cdot (A\vec{b}) = (A\vec{a})^T (A\vec{b}) = (\vec{a}^T A^T) A \vec{b} = \vec{a}^T (A^T A) \vec{b}
$$

$A$ が直交行列であり $A^T A = I$ が成り立つことから

$$
= \vec{a}^T I \vec{b} = \vec{a}^T \vec{b} = \vec{a} \cdot \vec{b}
$$

#### 2)
$A$ の固有値を $\lambda$ とし、対応する規格化された固有ベクトルを $\vec{v}$ とする

$$
\|A\vec{v}\|^2 = (A\vec{v})^{*T} (A\vec{v}) = \vec{v}^{*T} A^T A \vec{v} = \vec{v}^{*T} I \vec{v} = \|\vec{v}\|^2
$$

一方で、

$$
\|A\vec{v}\|^2 = \|\lambda\vec{v}\|^2 = |\lambda|^2 \|\vec{v}\|^2
$$

となるので、 $|\lambda|^2 \|\vec{v}\|^2 = \|\vec{v}\|^2$ がわかる。従って、$|\lambda| = 1$。

#### 3)

$$
  \begin{aligned}
  I
  &= A^T A
  \\
  &= \begin{pmatrix} \vec{a}_1^T \\ \vec{a}_2^T \end{pmatrix}
  \left( \vec{a}_1, \vec{a}_2 \right)
  \\
  &= \begin{pmatrix}
  \vec{a}_1^T \vec{a}_1 & \vec{a}_1^T \vec{a}_2 \\
  \vec{a}_2^T \vec{a}_1 & \vec{a}_2^T \vec{a}_2
  \end{pmatrix}
  \end{aligned}
$$

- $\vec{a}_1^T \vec{a}_1 = 1 \implies \|\vec{a}_1\|^2 = 1 \implies \|\vec{a}_1\| = 1$
- $\vec{a}_2^T \vec{a}_2 = 1 \implies \|\vec{a}_2\|^2 = 1 \implies \|\vec{a}_2\| = 1$ 
- $\vec{a}_1^T \vec{a}_2 = 0 \implies \vec{a}_1 \cdot \vec{a}_2 = 0$

#### 4)

$$
  \begin{aligned}
  \vec{a}_2 = \begin{pmatrix} - \sin \theta \\ \cos \theta \end{pmatrix}
  \end{aligned}
$$

#### 5)

$$
\begin{aligned}
\begin{pmatrix} \cos \theta & \sin \theta \\ \sin \theta & - \cos \theta \end{pmatrix}
\begin{pmatrix} 1 \\ 0 \end{pmatrix}
&=
\begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix}
,
\\
\begin{pmatrix} \cos \theta & \sin \theta \\ \sin \theta & - \cos \theta \end{pmatrix}
\begin{pmatrix} 0 \\ 1 \end{pmatrix}
&=
\begin{pmatrix} \sin \theta \\ - \cos \theta \end{pmatrix}
\end{aligned}
$$

であるから、求める直線は、原点を通り、

$$
\begin{aligned}
\begin{pmatrix} \cos \frac{\theta}{2} \\ \sin \frac{\theta}{2} \end{pmatrix}
\end{aligned}
$$

を方向ベクトルとするような直線である。
ベクトルの第1成分をx、第2成分をyで表すと、その直線の方程式は、

$$
-\sin \frac{\theta}{2}x + \cos \frac{\theta}{2} y = 0
$$

である。
