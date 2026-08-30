---
sidebar_label: 2018年2月実施 情報学基礎 F-2
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Source-Coding
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Instantaneous-Code
  - Operations-Research.Convex-Optimization.Jensen-Inequality
---
# 京都大学 情報学研究科 知能情報学専攻 2018年2月実施 情報学基礎 F-2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

An ensemble is a tuple $X=(x,\mathcal A_X,\mathcal P_X)$, where the random variable $x$ takes values in

$$
\mathcal A_X=\{a_1,a_2,\ldots,a_j\}
$$

with probabilities $\mathcal P_X=\{p_1,p_2,\ldots,p_j\}$, where $P(x=a_i)=p_i\ge0$ and $\sum_{i=1}^{j}p_i=1$. Let $H(X)$ denote Shannon entropy and $\mathbb E[x]$ denote expectation.

1. For an arbitrary ensemble $X$, what is $\mathbb E[1/P(x)]$?
2. If $f$ is convex, prove Jensen's inequality

   $$
   \mathbb E[f(x)]\ge f(\mathbb E[x]).
   $$

3. Using the inequality above, prove

   $$
   H(X)\le\log_2|\mathcal A_X|.
   $$

A binary symbol code $C$ maps $\mathcal A_X$ to $\{0,1\}^{+}$. If $c(x)$ is the codeword for $x$ and $\ell(x)$ its length, then

$$
L(C,X)=\sum_{x\in\mathcal A_X}P(x)\ell(x).
$$

4. Let $\mathcal A_X=\{a,b,c,d\}$, $\mathcal P_X=\{1/2,1/4,1/8,1/8\}$, and let the codewords for $a,b,c,d$ respectively be $\{0,01,011,111\}$. If one bit is selected at random from the infinite encoded sequence $c(x_1)c(x_2)c(x_3)\cdots$, what is the probability that it is `1`?
5. Let $\mathcal A_X=\{a,b,c,d,e,f,g\}$ and

   $$
   \mathcal P_X=\{0.01,0.24,0.05,0.20,0.47,0.01,0.02\}.
   $$

   Give a uniquely decodable binary code satisfying $L(C,X)\le2$.

### 题目描述

设有限随机变量 $X$ 的取值集为 $\mathcal A_X={a_1,\ldots,a_j}$，概率为 $p_i$，$H(X)$ 表示 Shannon 熵。

1. 求 $\mathbb E[1/P(x)]$。
2. 证明凸函数的 Jensen 不等式 $\mathbb E[f(x)]\ge f(\mathbb E[x])$。
3. 利用上式证明 $H(X)\le\log_2|\mathcal A_X|$。
4. 对概率 $\{1/2,1/4,1/8,1/8\}$ 与依次对应的码字 $\{0,01,011,111\}$，求从无限编码比特流中均匀抽到 `1` 的概率。
5. 对概率 $\{0.01,0.24,0.05,0.20,0.47,0.01,0.02\}$ 构造平均码长不超过 $2$ 的唯一可译二元码。

## **Kai**

### Q.1

On the support of $X$,

$$
\mathbb E\!\left[\frac1{P(x)}\right]
=\sum_{i:p_i>0}p_i\frac1{p_i}
=|\operatorname{supp}X|.
$$

Thus, if every listed outcome has positive probability,

$$
\boxed{\mathbb E[1/P(x)]=j=|\mathcal A_X|}.
$$

### Q.2

For $j=2$, the result is the definition of convexity:

$$
f(p_1a_1+p_2a_2)\le p_1f(a_1)+p_2f(a_2).
$$

Assume the result for $j-1$ points and put $q=\sum_{i=1}^{j-1}p_i=1-p_j$. If $0<q<1$, then

$$
\begin{aligned}
f\!\left(\sum_{i=1}^{j}p_i a_i\right)
&=f\!\left(q\sum_{i=1}^{j-1}\frac{p_i}{q}a_i+p_ja_j\right)\\
&\le qf\!\left(\sum_{i=1}^{j-1}\frac{p_i}{q}a_i\right)+p_jf(a_j)\\
&\le\sum_{i=1}^{j}p_if(a_i).
\end{aligned}
$$

The cases $q=0$ or $q=1$ are immediate. Hence

$$
\boxed{f(\mathbb E[x])\le\mathbb E[f(x)]}.
$$

### Q.3

Let $s=|\operatorname{supp}X|$. Apply Q.2 to the positive random variable $Y=1/P(x)$ and the convex function $f(y)=-\log_2y$. By Q.1, $\mathbb E[Y]=s$, and

$$
\mathbb E[f(Y)]
=\mathbb E[\log_2P(x)]
=-H(X).
$$

Therefore

$$
-H(X)\ge-\log_2s.
$$

so

$$
\boxed{H(X)\le\log_2s\le\log_2|\mathcal A_X|}.
$$

The final bound is an equality exactly for the uniform distribution on all of $\mathcal A_X$.

### Q.4

For one source symbol, the expected number of encoded `1` bits is

$$
\mathbb E[N_1]
=\frac12(0)+\frac14(1)+\frac18(2)+\frac18(3)
=\frac78.
$$

The expected codeword length is

$$
\mathbb E[\ell]
=\frac12(1)+\frac14(2)+\frac18(3)+\frac18(3)
=\frac74.
$$

Hence the long-run fraction of `1` bits is

$$
\boxed{
\frac{\mathbb E[N_1]}{\mathbb E[\ell]}
=\frac{7/8}{7/4}=\frac12
}.
$$

### Q.5

A Huffman construction gives the following prefix code:

| Symbol | Probability | Codeword | Length |
|:---:|:---:|:---:|:---:|
| $a$ | 0.01 | `111110` | 6 |
| $b$ | 0.24 | `10` | 2 |
| $c$ | 0.05 | `1110` | 4 |
| $d$ | 0.20 | `110` | 3 |
| $e$ | 0.47 | `0` | 1 |
| $f$ | 0.01 | `111111` | 6 |
| $g$ | 0.02 | `11110` | 5 |

It is prefix-free, hence uniquely decodable. Its expected length is

$$
\begin{aligned}
L(C,X)
&=0.01(6)+0.24(2)+0.05(4)+0.20(3)\\
&\qquad+0.47(1)+0.01(6)+0.02(5)\\
&=\boxed{1.97\le2}.
\end{aligned}
$$
