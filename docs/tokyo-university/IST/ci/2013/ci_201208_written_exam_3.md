---
sidebar_label: 2012年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Rotation-Matrix-and-Axis-Angle
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065535id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2012-8-exam.pdf).
In kinematic calculations and visual computations in robotics, vector operations are expressed with matrices sometimes. Answer the following questions on inner-product, outer-product, projection and rotation of three dimensional vectors. $\boldsymbol{I}$ is the $3\times3$ identity matrix. The three-dimensional vectors $\boldsymbol{x}$, $\boldsymbol{a}$, $\boldsymbol{b}$ and $\boldsymbol{n}$ are $3\times1$ column vectors:
$$\boldsymbol{x}=\begin{bmatrix}x_x\\x_y\\x_z\end{bmatrix},\quad\boldsymbol{a}=\begin{bmatrix}a_x\\a_y\\a_z\end{bmatrix},\quad\boldsymbol{b}=\begin{bmatrix}b_x\\b_y\\b_z\end{bmatrix},\quad\boldsymbol{n}=\begin{bmatrix}n_x\\n_y\\n_z\end{bmatrix}.$$
$\boldsymbol{x}^T$, which is a $1\times3$ row vector, shows the transpose of $\boldsymbol{x}$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201208_3_p1.png" width="450" alt=""/>
</figure>

(1) On the inner product $(\boldsymbol{a},\boldsymbol{b})$ between vectors $\boldsymbol{a}$ and $\boldsymbol{b}$, describe **i)** the value of $(\boldsymbol{a},\boldsymbol{b})$, **ii)** a $3\times3$ matrix $\boldsymbol{A}$ which satisfies $(\boldsymbol{a},\boldsymbol{b})\boldsymbol{a}=\boldsymbol{A}\boldsymbol{b}$, and **iii)** $\boldsymbol{A}$ with vector $\boldsymbol{a}$ and its transpose $\boldsymbol{a}^T$.

(2) On the outer product $\boldsymbol{a}\times\boldsymbol{b}$ from $\boldsymbol{a}$ to $\boldsymbol{b}$, describe **i)** $3\times1$ expression of $\boldsymbol{a}\times\boldsymbol{b}$, **ii)** $3\times3$ expression of the matrix $\boldsymbol{A}$ which satisfies $\boldsymbol{a}\times\boldsymbol{b}=\boldsymbol{A}\boldsymbol{b}$, **iii)** the $3\times3$ matrix $\boldsymbol{Q}$ which satisfies $\boldsymbol{A}=\boldsymbol{a}\times\boldsymbol{Q}$ where $\boldsymbol{x}\times\boldsymbol{Q}$ between a vector $\boldsymbol{x}$ and a $3\times3$ matrix $\boldsymbol{Q}$ means a $3\times3$ matrix whose column vectors are three outer products from the vector $\boldsymbol{x}$ to each column vector in the matrix $\boldsymbol{Q}$ respectively.

(3) As Figure 1 shows, a vector $\boldsymbol{x}$ is vertically projected to a vector $\boldsymbol{y}$ on a plane whose normal vector is a unit vector $\boldsymbol{n}$. If the vector $\boldsymbol{y}$ is described as $\boldsymbol{y}=\boldsymbol{P}\boldsymbol{x}$, show that the matrix $\boldsymbol{P}$ becomes $\boldsymbol{P}=\boldsymbol{I}-\boldsymbol{n}\boldsymbol{n}^T$.

(4) Three rotational matrices $\boldsymbol{R}_x(\theta_x)$, $\boldsymbol{R}_y(\theta_y)$ and $\boldsymbol{R}_z(\theta_z)$ are rotational matrices which rotate a vector $\boldsymbol{x}$ around the X-axis, Y-axis and Z-axis with $\theta_x$, $\theta_y$ and $\theta_z$ respectively, where the direction of the rotation for plus is clock-wise around the axis from the origin to infinity.

**i)** Describe $3\times3$ expression of the matrix $\boldsymbol{R}_x(\theta_x)$, **ii)** As Figure 2 shows, the $3\times3$ matrix $\boldsymbol{R}_n(\theta_n)$ is defined as the rotation matrix around a unit orientation vector $\boldsymbol{n}$ with $\theta_n$. $\boldsymbol{R}_n(\theta_n)$ is described as
$$\boldsymbol{R}_n(\theta_n)=\boldsymbol{R}_x(-\alpha)\boldsymbol{R}_y(\beta)\boldsymbol{R}_z(\theta_n)\boldsymbol{R}_y(-\beta)\boldsymbol{R}_x(\alpha).$$
Explain what the variables $\alpha$ and $\beta$ become and explain why the expression is satisfied.

### 题目描述

机器人运动学和视觉计算常用矩阵表示向量运算。回答三维向量的内积、外积、投影与旋转问题。令 $\boldsymbol I$ 为 $3\times3$ 单位矩阵，并令

$$
\boldsymbol{x}=\begin{bmatrix}x_x\\x_y\\x_z\end{bmatrix},\quad
\boldsymbol{a}=\begin{bmatrix}a_x\\a_y\\a_z\end{bmatrix},\quad
\boldsymbol{b}=\begin{bmatrix}b_x\\b_y\\b_z\end{bmatrix},\quad
\boldsymbol{n}=\begin{bmatrix}n_x\\n_y\\n_z\end{bmatrix}
$$

均为 $3\times1$ 列向量；$\boldsymbol x^T$ 是其 $1\times3$ 转置行向量。

1. 对 $\boldsymbol a,\boldsymbol b$ 的内积 $(\boldsymbol a,\boldsymbol b)$，分别写出：a. 内积数值；b. 满足

   $$
   (\boldsymbol a,\boldsymbol b)\boldsymbol a=\boldsymbol A\boldsymbol b
   $$

   的 $3\times3$ 矩阵 $\boldsymbol A$；c. 用 $\boldsymbol a,\boldsymbol a^T$ 表示该 $\boldsymbol A$。
2. 对从 $\boldsymbol a$ 到 $\boldsymbol b$ 的外积 $\boldsymbol a\times\boldsymbol b$，分别写出：a. 其 $3\times1$ 分量表达式；b. 满足 $\boldsymbol a\times\boldsymbol b=\boldsymbol A\boldsymbol b$ 的 $3\times3$ 矩阵 $\boldsymbol A$；c. 满足 $\boldsymbol A=\boldsymbol a\times\boldsymbol Q$ 的 $3\times3$ 矩阵 $\boldsymbol Q$。这里 $\boldsymbol x\times\boldsymbol Q$ 定义为 $3\times3$ 矩阵，其每一列分别是 $\boldsymbol x$ 与 $\boldsymbol Q$ 对应列向量的外积。
3. 如图 1，把 $\boldsymbol x$ 正交投影到法向量为单位向量 $\boldsymbol n$ 的平面，得到 $\boldsymbol y$。若 $\boldsymbol y=\boldsymbol P\boldsymbol x$，证明

   $$
   \boldsymbol P=\boldsymbol I-\boldsymbol n\boldsymbol n^T.
   $$

4. $\boldsymbol R_x(\theta_x),\boldsymbol R_y(\theta_y),\boldsymbol R_z(\theta_z)$ 分别把向量绕 $X,Y,Z$ 轴旋转 $\theta_x,\theta_y,\theta_z$；从原点沿轴正方向看去，顺时针规定为正。
   1. 写出 $\boldsymbol R_x(\theta_x)$ 的 $3\times3$ 形式。
   2. 如图 2，$\boldsymbol R_n(\theta_n)$ 表示绕单位方向向量 $\boldsymbol n$ 旋转 $\theta_n$，且

      $$
      \boldsymbol R_n(\theta_n)=
      \boldsymbol R_x(-\alpha)\boldsymbol R_y(\beta)\boldsymbol R_z(\theta_n)
      \boldsymbol R_y(-\beta)\boldsymbol R_x(\alpha).
      $$

      求 $\alpha,\beta$，并解释该矩阵分解成立的原因。


## **Kai**

Here “outer product” in part (2) means the three-dimensional **cross product** $\boldsymbol a\times\boldsymbol b$. It should be distinguished from the matrix outer product $\boldsymbol a\boldsymbol b^T$.

### (1) Inner product

**i)** The scalar inner product is

$$
(\boldsymbol a,\boldsymbol b)=a_xb_x+a_yb_y+a_zb_z=\boldsymbol a^T\boldsymbol b.
$$

**ii)** A matrix that gives $(\boldsymbol a,\boldsymbol b)\boldsymbol a$ for every $\boldsymbol b$ is

$$
\boxed{\boldsymbol A=\begin{pmatrix}
a_x^2&a_xa_y&a_xa_z\\
a_ya_x&a_y^2&a_ya_z\\
a_za_x&a_za_y&a_z^2
\end{pmatrix}.}
$$

**iii)** In vector notation, $\boxed{\boldsymbol A=\boldsymbol a\boldsymbol a^T}$, because $\boldsymbol A\boldsymbol b=\boldsymbol a(\boldsymbol a^T\boldsymbol b)$.

### (2) Cross product

**i)**

$$
\boxed{\boldsymbol a\times\boldsymbol b=
\begin{pmatrix}a_yb_z-a_zb_y\\a_zb_x-a_xb_z\\a_xb_y-a_yb_x\end{pmatrix}.}
$$

**ii)** The corresponding skew-symmetric matrix is

$$
\boxed{\boldsymbol A=[\boldsymbol a]_\times=
\begin{pmatrix}0&-a_z&a_y\\a_z&0&-a_x\\-a_y&a_x&0\end{pmatrix}.}
$$

**iii)** Taking $\boxed{\boldsymbol Q=\boldsymbol I}$ works: its columns are the coordinate basis vectors, and the columns $\boldsymbol a\times\boldsymbol e_i$ are exactly those of $[\boldsymbol a]_\times$. This choice is not unique for a fixed nonzero $\boldsymbol a$: the general solution is $\boldsymbol Q=\boldsymbol I+\boldsymbol a\boldsymbol v^T$ for any vector $\boldsymbol v$, because each column may be changed by a multiple of $\boldsymbol a$. If $\boldsymbol a=0$, every $\boldsymbol Q$ works.

### (3) Orthogonal projection

The plane of vectors is $\boldsymbol n^T\boldsymbol y=0$, through the origin. Decompose $\boldsymbol x$ into its normal component $(\boldsymbol n^T\boldsymbol x)\boldsymbol n$ and its component in the plane. Because $\boldsymbol n^T\boldsymbol n=1$,

$$
\boldsymbol y=\boldsymbol x-(\boldsymbol n^T\boldsymbol x)\boldsymbol n
=(\boldsymbol I-\boldsymbol n\boldsymbol n^T)\boldsymbol x.
$$

Thus $\boxed{\boldsymbol P=\boldsymbol I-\boldsymbol n\boldsymbol n^T}$. Indeed $\boldsymbol n^T\boldsymbol P=0$, so the result lies in the plane, and $\boldsymbol x-\boldsymbol P\boldsymbol x$ is parallel to its normal. Also $\boldsymbol P^T=\boldsymbol P$ and $\boldsymbol P^2=\boldsymbol P$. For an affine plane not through the origin, an additional translation term would be necessary.

### (4) Rotation about an arbitrary axis

**i)** “Clockwise looking from the origin toward the positive axis” is the right-hand rotation convention; looking back toward the origin would reverse the apparent direction. In particular a positive rotation about $X$ sends $\boldsymbol e_y$ toward $\boldsymbol e_z$. Therefore

$$
\boxed{\boldsymbol R_x(\theta)=
\begin{pmatrix}1&0&0\\0&\cos\theta&-\sin\theta\\0&\sin\theta&\cos\theta\end{pmatrix}.}
$$

For clarity the other matrices in the factorization use the same active-rotation convention:

$$
\boldsymbol R_y(\theta)=\begin{pmatrix}\cos\theta&0&\sin\theta\\0&1&0\\-\sin\theta&0&\cos\theta\end{pmatrix},\qquad
\boldsymbol R_z(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{pmatrix}.
$$

**ii)** Let $r=\sqrt{n_y^2+n_z^2}$. If $r>0$, choose

$$
\boxed{\alpha=\operatorname{atan2}(n_y,n_z),\qquad
\beta=\operatorname{atan2}(n_x,r).}
$$

Thus $\cos\alpha=n_z/r$, $\sin\alpha=n_y/r$, $\cos\beta=r$ and $\sin\beta=n_x$, using the unit length of $\boldsymbol n$. These choices successively give

$$
\boldsymbol R_x(\alpha)\boldsymbol n=(n_x,0,r)^T,\qquad
\boldsymbol R_y(-\beta)(n_x,0,r)^T=(0,0,1)^T.
$$

Define $\boldsymbol C=\boldsymbol R_y(-\beta)\boldsymbol R_x(\alpha)$. First $\boldsymbol C$ aligns the rotation axis with $Z$, then $\boldsymbol R_z(\theta_n)$ rotates around that aligned axis, and finally $\boldsymbol C^{-1}$ restores the original coordinates. Reading matrix actions from right to left,

$$
\boxed{\boldsymbol R_n(\theta_n)=\boldsymbol C^{-1}\boldsymbol R_z(\theta_n)\boldsymbol C
=\boldsymbol R_x(-\alpha)\boldsymbol R_y(\beta)\boldsymbol R_z(\theta_n)
\boldsymbol R_y(-\beta)\boldsymbol R_x(\alpha).}
$$

If $r=0$, then $\boldsymbol n=(\pm1,0,0)^T$; choose $\alpha=0$ and $\beta=\pm\pi/2$. This avoids an undefined $\operatorname{atan2}(0,0)$ and yields the same factorization. An independent equivalent formula is Rodrigues' expression

$$
\boldsymbol R_n(\theta)=\cos\theta\,\boldsymbol I+(1-\cos\theta)\boldsymbol n\boldsymbol n^T
+\sin\theta\,[\boldsymbol n]_\times,
$$

which also makes the fixed axis and rotation sign explicit.
