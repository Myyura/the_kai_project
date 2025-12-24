---
sidebar_label: "2024年8月実施 専門科目 S-3"
tags:
  - Kyoto-University
  - Information-Theory
  - Channel-Coding
  - Binary-Linear-Codes
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-3

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

### Q.1
A discrete memoryless channel C consists of two discrete memoryless channels D and E, which are connected serially as shown in the following figure.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202408_senmon_s_3_p1.png" width="500" alt=""/>
</figure>

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
