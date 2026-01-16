---
sidebar_label: '2012年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Control-Theory
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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