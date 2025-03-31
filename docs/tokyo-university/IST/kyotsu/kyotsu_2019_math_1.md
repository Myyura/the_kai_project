---
sidebar_label: "2019年度 数学 第1問"
sidebar_position: 7
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2019年度 数学 第1問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
複素正方行列 $X$ は、 $XX^* = I$ を満たすとき、ユニタリ行列であるという。
ただし、$X^*$ は行列 $X$ の共役転置行列（もしくは、随伴行列とも呼ばれる）を表し、$I$ は単位行列である。$i$ は虚数単位とする。以下の問いに答えよ。

(1) $n$ を正の整数とし、$A, B$ を $n$ 次ユニタリ行列とする。
行列 $AB$ もユニタリ行列であることを示せ。

(2) $n$ を正の整数とし、$C, D$ を $n$ 次実正方行列とする。
行列 $F$ を $F = C + iD$ と定義し、行列 $G$ を

$$
G = \begin{pmatrix}
C & -D \\
D & C
\end{pmatrix}
$$

と定義する。
行列 $F$ がユニタリ行列であることと行列 $G$ が直交行列であることは同値であることを示せ。

(3) 次の行列の固有値を求めよ。

$$
\frac{1}{2} \begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & i & -1 & -i \\
1 & -1 & 1 & -1 \\
1 & -i & -1 & i
\end{pmatrix}
$$

(4) $n$ を正の整数とし、$n$ 次正方行列 $Q$ の $(j, k)$ 成分 $q_{jk}$ を

$$
q_{jk} = \frac{1}{\sqrt{n}} \exp\left( \frac{2\pi i (j-1)(k-1)}{n} \right)
$$

とする。行列 $Q$ はユニタリ行列であることを示せ。

(5) 行列式が $1$ である $2$ 次のユニタリ行列は次の一形式を持つことを示せ。

$$
H = \begin{pmatrix}
\exp(i\psi) \cos \theta & \exp(i\psi) \sin \theta \\
-\exp(-i\psi) \sin \theta & \exp(-i\psi) \cos \theta
\end{pmatrix}
$$

ただし、$\theta$ と $\psi$ は実数であるとする。

(6) $2$ 次のユニタリ行列の一般形を求めよ。


## **Kai**
### (1)
$A、B$ 是酉矩阵，则

$$
AA^* = I \qquad BB^* = I
$$

$$
AB(AB)^* = ABB^*A^* = I
$$

### (2)
$F$ 是酉矩阵

$$
FF^* = (C+iD)(C^* - iD^*) = CC^* + DD^* + i(DC^* - CD^*) = I
$$

$C, D$ 均为实矩阵、则

$$
CC^T + DD^T = I \qquad DC^T - CD^T = 0
$$

$G$ 是正交矩阵、则 $G^T = G^{-1}, G^T = \begin{pmatrix} C^T & D^T \\ -D^T & C^T \end{pmatrix}$、

$$
\begin{aligned}
GG^T &= \begin{pmatrix}
CC^T + DD^T & CD^T-DC^T \\
DC^T - CD^T & DD^T+CC^T
\end{pmatrix}
= I \\
&\Rightarrow CC^T + DD^T = I, \quad DC^T-CD^T = 0
\end{aligned}
$$

### (3)
令

$$
A = \frac{1}{2} \begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & i & -1 & -i \\
1 & -1 & 1 & -1 \\
1 & -i & -1 & i
\end{pmatrix}
$$

$A$ 是个酉矩阵，$AA^*=I$。令 $A=C+iD$，则有 $C^2 + D^2 = I$，其中

$$
C = \frac{1}{2} \begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & 0 & -1 & 0 \\
1 & -1 & 1 & -1 \\
1 & 0 & -1 & 0
\end{pmatrix}
\qquad
D = \frac{1}{2} \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & 0 & -1 \\
0 & 0 & 0 & 0 \\
0 & -1 & 0 & 1
\end{pmatrix}
$$

容易观察到 $CD = 0$。考虑利用酉矩阵的性质寻找 $A$ 的特征多项式。

$$
A^2 = C^2 - D^2 \qquad A^3=(C^2-D^2)(C+iD)=C^3-iD^3
$$

$$
A^4=(C^3-iD^3)(C+iD) = C^4 + D^4 = (C^2 + D^2)^2 = I
$$

矩阵逆唯一，则 $A^3 = A^{-1}=A^*=C-iD, C^3 = C, D^3 = D$。
同时，注意到 $C^2 \neq C, D^2=D$, 则有

$$
A^3 = C-iD=A-i2D = A-i2D^2 = A-i(I-A^2)
$$

$$
A(A^2-I) + i(I-A^2) = (A-iI)(A+I)(A-I) = 0
$$

特征值 $\lambda_1 = i, \lambda_2 = 1, \lambda_3 = -1$。

### (4)
令 $q_k = \begin{pmatrix}q_{1k} \\q_{2k} \\ \vdots \\q_{nk}\end{pmatrix}$, 则 $||q_k||^2 = n \times (\frac{1}{\sqrt{n}})^2 = 1$

考虑不同的 $m,j,q_m = \begin{pmatrix}q_{1m} \\q_{2m} \\ \vdots \\q_{nm}\end{pmatrix},q_j = \begin{pmatrix}q_{1j} \\q_{2j} \\ \vdots \\q_{nj}\end{pmatrix}$

$$
\begin{aligned}
q_{km}\overline{q_{kj}} &= \frac{1}{n}\exp\bigg(\frac{2\pi i(k - 1)(m - 1) - 2\pi i(k - 1)(j - 1)}{n}\bigg) \\
&= \exp\bigg(\frac{2\pi i(k - 1)(m - j)}{n}\bigg) \\
q_m\overline{q_j} &= \frac{1}{n}\sum_{k=1}^n\exp\bigg(\frac{2\pi i(k - 1)(m - j)}{n}\bigg) \\
&= \frac{1}{n}\big(e^{-\frac{2\pi i(m - j)0}{n}} + e^{-\frac{2\pi i(m - j)1}{n}} + \cdots + e^{-\frac{2\pi i(m - j)(n - 1)}{n}}\big) \\
&= 0 
\end{aligned}
$$

因此 $QQ^* = I , Q$ 是酉矩阵。

### (5)

$\det(H) = \cos^2(\theta) + \sin^2(\theta) = 1$ 成立

$$
H = \begin{pmatrix}
e^{i\psi}\cos\theta & e^{i\psi}\sin\theta \\
-e^{-i\psi}\sin\theta & e^{-i\psi}\cos\theta \\
\end{pmatrix}
\quad H^* = \begin{pmatrix}
e^{-i\psi}\cos\theta & -e^{i\psi}\sin\theta \\
e^{-i\psi}\sin\theta & e^{i\psi}\cos\theta \\
\end{pmatrix}
$$

$HH^* = I$ 成立，题中的 $H$ 是行列式为 1 的酉矩阵的一种形式。

### (6)
设 $H = \begin{pmatrix}a & b\\c & d\end{pmatrix}$ , 则 $H^* = \begin{pmatrix}\overline{a} & \overline{c} \\\overline{b} & \overline{d}\end{pmatrix} , HH^* = I$ , 即

$$
\begin{pmatrix}
a\overline{a} + b\overline{b} & a\overline{c} + b\overline{d} \\
\overline{a}c + \overline{b}d & c\overline{c} + d\overline{d} \\ 
\end{pmatrix} = I
$$

$H^*H = I$ 同样成立

$$
\begin{pmatrix}
a\overline{a} + c\overline{c} & a\overline{b} + c\overline{d} \\
\overline{a}b + \overline{c}d & b\overline{b} + d\overline{d} \\
\end{pmatrix} = I
$$

须满足条件为

$$
\begin{align}
a\overline{a} + b\overline{b} = c\overline{c} + d\overline{d} &= 1  \quad a\overline{a} + c\overline{c} = b\overline{b} + d\overline{d} = 1 \tag{1} \\
a\overline{c} + b\overline{d} &= 0 \quad a\overline{b} + c\overline{d} = 0 \tag{2}
\end{align}
$$

$H$ 满足式 (1) , 则需有形式

$$
H = \begin{pmatrix}
\cos\theta e^{i\psi_1} & \sin\theta e^{i\psi_2} \\
\sin\theta e^{i\psi_3} & \cos\theta e^{i\psi_4} \\
\end{pmatrix}
\tag{3}
$$


$H$ 满足式 (2)，由于行列正交等价，只需 $\cos \theta \sin \theta e^{i(\psi_1-\psi_3)} + \sin \theta \cos \theta e^{i(\psi_2 - \psi_4)}=0$。
因
此在式 (3) 形式的基础上，还需满足

$$
\psi_1 - \psi_3 = \psi_2-\psi_4 + \pi + 2k \pi \qquad k = 0, 1, 2, \ldots
$$