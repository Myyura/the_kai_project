---
sidebar_label: 2024年8月実施 専門科目 S-3
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Channel-Coding
  - Computer-Science.Information-Theory.Binary-Linear-Codes
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-3

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_ist.pdf)

### Q.1
A discrete memoryless channel C consists of two discrete memoryless channels D and E, which are connected serially as shown in the following figure.

$$X\xrightarrow{D}Y\xrightarrow{E}Z$$

The input alphabet of D is $\Sigma_a = \{a_1, a_2, a_3, a_4\}$. Both of the output alphabet of D and the input alphabet of E are $\Sigma_b = \{b_1, b_2, b_3, b_4\}$. The output alphabet of E is $\Sigma_c = \{c_1, c_2\}$. Let random variables $X, Y$, and $Z$ be respectively on $\Sigma_a, \Sigma_b$, and $\Sigma_c$. The channel transition matrix $p(Y|X)$ for D and the channel transition matrix $q(Z|Y)$ for E are given as

$$
p(Y|X) = \begin{pmatrix} \frac{1}{2} & \frac{1}{2} & 0 & 0 \\ 0 & \frac{1}{2} & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & 0 & 0 & \frac{1}{2} \end{pmatrix}, \quad \text{and} \quad q(Z|Y) = \begin{pmatrix} 1 & 0 \\ 1 & 0 \\ 0 & 1 \\ 0 & 1 \end{pmatrix}. 
$$

Answer the following questions.

(1) Compute the channel capacity of D.

(2) Assume that $X$ follows the probability distribution $r(a_i)$ given below. Compute the mutual information $I(X; Z)$. You must show its derivation.

$$
r(a_1) = r(a_3) = \frac{1}{2}, \quad \text{and} \quad r(a_2) = r(a_4) = 0. 
$$

### Q.2
We consider only the AND operation and the XOR (exclusive or) operation $\oplus$ for the elements in $\{0, 1\}$. We define a *word* as an element in $\{0, 1\}^k \ (k \ge 1)$, each of which is represented as a row vector. Consider the liner codes generated with a matrix $G$ of $k$ rows and $n$ columns $(k, n \ge 1)$ as $\boldsymbol{x} = \boldsymbol{w}G$, where $\boldsymbol{w} \in \{0, 1\}^k$ is a word and $\boldsymbol{x} \in \{0, 1\}^n$ is a codeword. Let $C(G) = \{\boldsymbol{w}G \mid \boldsymbol{w} \in \{0, 1\}^k\}$. Answer the following questions.

(1) Show that $\boldsymbol{x} \oplus \boldsymbol{y} \in C(G)$ holds for all $\boldsymbol{x}, \boldsymbol{y} \in C(G)$, where $\boldsymbol{x} \oplus \boldsymbol{y}$ is the row vector obtained by element-wise XOR of two row vectors $\boldsymbol{x}$ and $\boldsymbol{y}$.

(2) For the set $C(G)$, prove that

$$
\min_{\boldsymbol{x}, \boldsymbol{y} \in C(G) \text{ and } \boldsymbol{x} \neq \boldsymbol{y}} d(\boldsymbol{x}, \boldsymbol{y}) = \min_{\boldsymbol{x} \in C(G) \text{ and } \boldsymbol{x} \neq \boldsymbol{0}} d(\boldsymbol{x}, \boldsymbol{0}), 
$$

where $d$ is the Hamming distance and $\boldsymbol{0} = (0, 0, \dots, 0)$.

(3) For the case that $G$ is given below, find a matrix $F$ of $n$ rows and $n$ columns such that $G' = GF$ generates a systematic code. Moreover, by using the matrices $F$ and $G'$, compute the parity check matrix $H$ for $C(G)$.

$$
G = \begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 & 0 \\ 1 & 1 & 0 & 1 & 0 & 0 & 0 \end{pmatrix}.
$$

### 题目描述

1. 考虑图示的串联系统，其中离散无记忆信道 D 的输入、输出字母表均为四元集合，信道 E 把四元输入映射为二元输出：

   $X\xrightarrow{D}Y\xrightarrow{E}Z$

   D 与 E 的转移概率矩阵分别为

   $$
   p(Y\mid X)=
   \begin{pmatrix}
   \frac12&\frac12&0&0\\
   0&\frac12&\frac12&0\\
   0&0&\frac12&\frac12\\
   \frac12&0&0&\frac12
   \end{pmatrix},
   \qquad
   q(Z\mid Y)=
   \begin{pmatrix}
   1&0\\
   1&0\\
   0&1\\
   0&1
   \end{pmatrix}.
   $$

   （1）求信道 D 的信道容量；（2）若输入符号 $a_1,a_3$ 的概率各为 $\frac12$，而 $a_2,a_4$ 的概率为 0，请写出推导过程并计算串联后输入 $X$ 与最终输出 $Z$ 的互信息 $I(X;Z)$。

2. 在二元域上考虑由 $k\times n$ 生成矩阵 $G$ 定义的线性码。对 $k$ 位行向量信息字 $\boldsymbol{w}$，码字为 $\boldsymbol{x}=\boldsymbol{w}G$，所有码字组成 $C(G)$。

   （1）证明任意 $\boldsymbol{x},\boldsymbol{y}\in C(G)$ 的按位异或 $\boldsymbol{x}\oplus\boldsymbol{y}$ 仍属于 $C(G)$。

   （2）证明

   $$
   \min_{\substack{\boldsymbol{x},\boldsymbol{y}\in C(G)\\\boldsymbol{x}\ne\boldsymbol{y}}}
   d(\boldsymbol{x},\boldsymbol{y})
   =
   \min_{\substack{\boldsymbol{x}\in C(G)\\\boldsymbol{x}\ne\boldsymbol{0}}}
   d(\boldsymbol{x},\boldsymbol{0}),
   $$

   其中 $d$ 为 Hamming 距离，$\boldsymbol{0}=(0,0,\ldots,0)$。

   （3）当

   $$
   G=
   \begin{pmatrix}
   0&0&0&1&1&0&1\\
   0&0&1&1&0&1&0\\
   0&1&1&0&1&0&0\\
   1&1&0&1&0&0&0
   \end{pmatrix}
   $$

   时，求一个 $n\times n$ 矩阵 $F$，使 $G'=GF$ 生成系统码；再利用 $F$ 与 $G'$ 计算原码 $C(G)$ 的校验矩阵 $H$。

## **Kai**
All logarithms in Q.1 have base $2$, and all matrix operations in Q.2 are over $\mathbb F_2$.

### Q.1
#### (1)
Every row of $p(Y\mid X)$ has entropy $1$, so $H(Y\mid X)=1$ for any input distribution. Since $Y$ has four possible values, $H(Y)\le2$. Uniform input makes the output uniform because each column sums to one, attaining the bound. Therefore

$$
C_D=\max I(X;Y)=2-1=1\text{ bit}.
$$

#### (2)
Multiplying the two channel matrices gives

$$
p(Z\mid X)=
\begin{pmatrix}1&0\\1/2&1/2\\0&1\\1/2&1/2\end{pmatrix}.
$$

Only $a_1,a_3$ occur. Their outputs are deterministically $c_1,c_2$, respectively, each with probability $1/2$. Thus $H(Z)=1$, $H(Z\mid X)=0$, and $I(X;Z)=1$ bit.

### Q.2
#### (1)
Write $\boldsymbol x=\boldsymbol uG$ and $\boldsymbol y=\boldsymbol vG$. Distributivity over $\mathbb F_2$ gives

$$
\boldsymbol x\oplus\boldsymbol y=(\boldsymbol u\oplus\boldsymbol v)G\in C(G).
$$

#### (2)
For distinct codewords, $\boldsymbol x\oplus\boldsymbol y$ is a nonzero codeword and

$$
d(\boldsymbol x,\boldsymbol y)
=d(\boldsymbol x\oplus\boldsymbol y,\boldsymbol0).
$$

Conversely, every nonzero codeword occurs in the pair $(\boldsymbol x,\boldsymbol0)$. The two sets of distances therefore coincide and have equal minima. This statement assumes $C(G)\ne\{\boldsymbol0\}$; for the zero code both sets are empty (or both minima are $+\infty$ under that convention).

#### (3)
Partition $G=[A\ B]$, where $A$ consists of the first four columns. It is invertible over $\mathbb F_2$. Choose

$$
F=\operatorname{diag}(A^{-1},I_3)=
\begin{pmatrix}
0&1&1&1&0&0&0\\
1&1&1&0&0&0&0\\
1&1&0&0&0&0&0\\
1&0&0&0&0&0&0\\
0&0&0&0&1&0&0\\
0&0&0&0&0&1&0\\
0&0&0&0&0&0&1
\end{pmatrix}.
$$

Then

$$
G'=GF=[I_4\ B]=
\begin{pmatrix}
1&0&0&0&1&0&1\\
0&1&0&0&0&1&0\\
0&0&1&0&1&0&0\\
0&0&0&1&0&0&0
\end{pmatrix}.
$$

A parity-check matrix for $C(G')$ is $H'=[B^T\ I_3]$. Since a row codeword transforms as $\boldsymbol x'=\boldsymbol xF$, the original code has parity-check matrix $H=H'F^T$:

$$
\boxed{H=
\begin{pmatrix}
1&0&1&1&1&0&0\\
1&1&1&0&0&1&0\\
0&1&1&1&0&0&1
\end{pmatrix}}.
$$

Indeed $GH^T=0$ and $\operatorname{rank}H=3$, so the kernel consists of exactly the $2^4$ original codewords.
