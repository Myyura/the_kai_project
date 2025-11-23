---
sidebar_label: "2023年8月実施 専門科目 S-4"
tags:
  - Kyoto-University
  - Information-Theory
  - Channel-Coding
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing), 祭音Myyura, [itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下ではすべて記憶のない定常情報源を考える。なお、解答には理由も明確に示すこと。

### 設問1
$\{a, b\}$ をアルファベットとし、各記号の生起確率が $P(a) = p$, $P(b) = 1-p$ で与えられる情報源を考える。
$p$ を変化させた時、この情報源のエントロピーの最大値と最小値を求めよ。

### 設問2
$m$ を正の定数とする。
$\{a_1, \ldots, a_{2m}\}$ をアルファベットとし、各記号の生起確率が次式で与えられる情報源を考える。

$$
P(a_i) = \begin{cases} 
p & \text{if } i \leq m+1 \\
q & \text{otherwise}
\end{cases}
$$

ただし、$(m+1)p + (m-1)q = 1$ とする。
$p, q$ を変化させた時、この情報源のエントロピーの最大値と最小値を求めよ。

### 設問3
$\{a_1, a_2, a_3\}$ をアルファベットとし、各記号の生起確率が $P(a_1) = P(a_2) = P(a_3) = \frac{1}{3}$ である情報源を考える。
この情報源に対する 2 元ハフマン符号の平均長を求めよ。

### 設問4
$m$ を正整数とし、$n = 2^m + 1$ とする。
$\{a_1, \ldots, a_n\}$ をアルファベットとし、すべての記号の生起確率が $P(a_i) = \frac{1}{n}$ である情報源を考える。
この情報源に対する 2 元ハフマン符号の平均長を求めよ。

### 設問5
次の通信路行列により定まる通信路の容量を求めよ。
なお、入力アルファベットのサイズは 2、出力アルファベットのサイズは 3 である。

$$
\begin{bmatrix}
\frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\
\frac{1}{4} & \frac{1}{4} & \frac{1}{2}
\end{bmatrix}
$$

### 設問6
次の通信路行列により定まる通信路の容量を $C$ とする。
なお、入力アルファベットのサイズは $n$、出力アルファベットのサイズは $n$ である。

$$
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2(n-1)} & \cdots & \frac{1}{2(n-1)} & \frac{1}{2(n-1)} \\
\frac{1}{2(n-1)} & \frac{1}{2(n-1)} & \cdots & \frac{1}{2(n-1)} & \frac{1}{2} \\
\end{bmatrix}
$$

すると、$n$ に関する関数 $f(n)$ を用いて、 $C = f(n) \log_2 n + \frac{1}{2} \log_2 (n-1) + \frac{n}{2(n-1)}$ と書ける。
$f(n)$ を求めよ。


## **Kai**
### 設問1

$$
H(p,1-p) = -p \log p-(1-p) \log (1-p)
$$

By solving the following equation

$$
H^{\prime}(p) = -\log_{2}p-\frac{1}{\log_{e}2}+\log_{2}(1-p)+\frac{1}{\log_{e}2} =
\log_{2}\frac{1-p}{p} = \log_{2}\left(\frac{1}{p}-1\right) = 0
$$

we have $p = \frac{1}{2}$. Also,

$$
\lim_{p\to 0}\left(-p\log_{2}p-(1-p)\log_{2}(1-p)\right)
= -\lim_{p\to 0}p\log_{2}p
= 0
$$

Thus the maximum of $H$ is $H(0.5, 0.5) = 1$, the minimum of $H$ is $H(0, 1) = 0$.

### 設問2
By using the method of Lagrange multiplier, we have

$$
\begin{aligned}
L(p,q,\lambda)
&= (m+1)p\log_{2} p+(m-1)q\log_{2} q+\lambda(1-(m+1)p-(m-1)q)
\end{aligned}
$$

Then, by solving the following equations,

$$
\begin{aligned}
\begin{cases}
\displaystyle
\frac{\partial L}{\partial p} &= (m+1)\log_{2} p+(m+1)-(m+1)\lambda =
(m+1)(\log_{2} p+1-\lambda) = 0
\displaystyle
\frac{\partial L}{\partial q} &= (m-1)\log_{2} q+(m-1)-(m-1)\lambda = 
(m-1)(\log_{2} q+1-\lambda) = 0
\displaystyle
\frac{\partial L}{\partial \lambda} &= 1-(m+1)p-(m-1)q = 0
\end{cases}
\end{aligned}
$$

we have 

$$
\begin{aligned}
\lambda &= \log_{2} p + 1 = \log_{2} q + 1
\end{aligned}
$$

hence $L$ is maximized when $p = q = \frac{1}{2m}$ and the maximum of entropy is

$$
\begin{aligned}
H(p,q) &= p\log_{2} \frac{1}{p}+q\log_{2} \frac{1}{q} = \left(\frac{1}{2m}\log_{2} 2m\right)\cdot 2 = \frac{1}{m}+\frac{1}{m}\log_{2} m
\end{aligned}
$$

By Q1 we know that the entropy is minimized when $p = 0$ or $p = 1$.

If $m \neq 1$, then the entropy is minimized when

$$
\begin{aligned}
(p,q) &= 
\begin{cases}
\displaystyle
\left(0, \frac{1}{m-1}\right)\\[0.7em]
\displaystyle
\left(\frac{1}{m+1}, 0\right)
\end{cases}
\end{aligned}
$$

and

$$
\begin{aligned}
\min\left\{H(p,q)\right\}
&= \min\left\{
(m-1)\cdot\frac{1}{m-1}\log_{2}(m-1),~
(m+1)\cdot\frac{1}{m+1}\log_{2}(m+1)
\right\}\\[0.7em]
&= \log_{2}(m-1)
\end{aligned}
$$

If $m = 1$, then $(p,q){=}(\frac{1}{2},\frac{1}{2})$ and the minimum is $H(p,q){=}1$.

### 設問3

$$
C = \{1, 01, 00\}, \bar{N} = \frac{5}{3}
$$

### 設問4
Since we have $2^m+1$ symbols, by Huffman coding, the Huffman tree is a tree based on a full balanced binary tree of height $m$, but the first leaf node is replaced by a 1-height tree with 2 leaves, forming $2^m+1$ leaves. The 2 leaves with depth $m+1$ have code lengths of $m+1$, others ($n-2$ symbols) having $m$.

$$
\begin{aligned}
\bar{N}
&= \frac{m\cdot (2^{m}-1) + (m+1)\cdot 2}{2^{m}+1}
= \frac{m(2^{m}+1)+2}{2^{m}+1}
= m+\frac{2}{2^{m}+1}
\end{aligned}
$$

### 設問5
Define the input and output symbols as $X$ and $Y$ respectively, and alphabets are $\{0,1\}$ and $\{0,1,2\}$ respectively.

Since

$$
C=\max_{p_X(\cdot)}I(X;Y)
=\max_{p_X(0)}[H(Y)-H(Y|X)],
$$

setting $p_X=\begin{bmatrix}u\\1-u\end{bmatrix}^T$ as the probability distribution vector, given $p_{Y|X}$,

$$
p_Y=\begin{bmatrix}u&1-u\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\
\frac{1}{4} & \frac{1}{4} & \frac{1}{2}
\end{bmatrix}=\begin{bmatrix}
\frac14+\frac14 u & \frac{1}{4} & \frac12-\frac14u
\end{bmatrix}
$$

Hence $H(Y)=H(\frac14,\frac14+\frac14 u,\frac12-\frac14u)$.

From the **recursivity** property of Shannon entropy,

$$
H(Y)=H\left (\frac14,\frac34\right)+\frac34 H\left (\frac43(\frac14+\frac14 u),\frac43(\frac12-\frac14 u)\right).
$$

For $H(Y|X)$,

$$
H(Y|X)=u H(Y|X=0)+(1-u)H(Y|X=1)
=uH\left (\frac12,\frac14,\frac14\right)+(1-u)H\left (\frac14,\frac14,\frac12\right)=\frac32(u+1-u)=\frac32.
$$

So

$$
\begin{aligned}
C&=\max_u[H(Y)-\frac32]\\
&=-\frac32 +\max_u H(Y)
\\&= -\frac32 + 2-\frac34\log_23+\frac34\max_u H\left(\frac13+\frac13u,\frac23-\frac13u\right)
\end{aligned}
$$

and when $\frac13+\frac13u=\frac12$ i.e. $u=\frac12$, i.e. when $p_X(0)=p_X(1)=\frac12$, $I(X;Y)$ reaches the capacity

$$
C=-\frac32+2-\frac34\log_23+\frac34\cancelto 1{\log_2 2}=\frac54-\frac34\log_23.
$$

### 設問6
Similarly define $p_X$ as $[u~~~1-u]$,

$$
H(Y|X)=1+\frac12\log_2(n-1)
$$

and

$$
\begin{aligned}
H(Y)&=H\left(
\frac12u+\frac1{2(n-1)}(1-u),\frac1{2(n-1)}u+\frac12(1-u),
\underbrace{\frac1{2(n-1)},\frac1{2(n-1)},\dots,\frac1{2(n-1)}}_{(n-2)\text{ terms}}
\right)
\\&=H\left(
\frac12+\frac1{2(n-1)},\underbrace{\frac1{2(n-1)},\frac1{2(n-1)},\dots,\frac1{2(n-1)}}_{(n-2)\text{ terms}}
\right)
+\left(\frac12+\frac1{2(n-1)}\right)
H(u',1-u')
\\&\le H\left(
\frac12+\frac1{2(n-1)},\underbrace{\frac1{2(n-1)},\frac1{2(n-1)},\dots,\frac1{2(n-1)}}_{(n-2)\text{ terms}}
\right) + \left(\frac12+\frac1{2(n-1)}\right)\cancelto 1{\log_2 2}
\end{aligned}
$$

where

$$
u'={\frac12u+\frac1{2(n-1)}(1-u)\over \frac12+\frac1{2(n-1)}}={u+\frac{1-u}{n-1}\over 1+\frac1{n-1}}
$$

and when $u'=\frac12$ i.e. $u=\frac12$, the inequality reaches the equality i.e. $H(Y)$ finds the maximum value as

$$
\begin{aligned}
\max_u H(Y)
&=H\left(
\frac12+\frac1{2(n-1)},\underbrace{\frac1{2(n-1)},\frac1{2(n-1)},\dots,\frac1{2(n-1)}}_{(n-2)\text{ terms}}
\right) + \left(\frac12+\frac1{2(n-1)}\right)
\\&=\cdots
\\&={n\over 2(n-1)}+\cancel{2n-2\over 2(n-1)}\log_2 (n-1)-\frac n{2(n-1)}\log_2 n + 1
\end{aligned}
$$

so

$$
\begin{aligned}
C&=\left({n\over 2(n-1)}+\log_2 (n-1)-\frac n{2(n-1)}\log_2 n + 1\right)-\left(1+\frac12\log_2(n-1)\right)
\\&=f(n)\log_2 n+\frac12\log_2 (n-1)+{n\over 2(n-1)}
\end{aligned}
$$

where $f(n)=-{n\over 2(n-1)}$.
