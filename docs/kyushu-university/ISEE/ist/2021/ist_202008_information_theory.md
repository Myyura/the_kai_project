---
sidebar_label: "2020年8月実施 情報理論"
tags:
  - Kyushu-University
  - Computer-Science.Information-Theory.Channel-Capacity
  - Computer-Science.Information-Theory.Typical-Sequence
---
# 九州大学 システム情報科学府 情報理工学専攻 2020年8月実施 情報理論

## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
### 【問 1】
入力アルファベットと出力アルファベットがともに ${1, 2, 3, 4}$ である無記憶な通信路 $W(y|x)$ の通信路行列が

$$
\begin{pmatrix}
0.5 & 0.5 & 0 & 0 \\
0 & 0.5 & 0.5 & 0 \\
0 & 0 & 0.5 & 0.5 \\
0.5 & 0 & 0 &0.5
\end{pmatrix}
$$

で与えられているとする．ただし，$(i, j)$ 成分は $W(j|i)$ を表す．この通信路の通信路容量を求めよ．また，それを達成する入力分布を全て求めよ．

### 【問 2】
定常無記憶情報源 $X_1X_2 \cdots$ を考える．この情報源のアルファベットを有限集合 $\mathcal{X}$ とし，各 $X_i$ は確率分布 $p(x)$ に従うものとする．任意に固定された $\epsilon > 0$ に対し，系列 $(x_1, x_2,\dots,x_n) \in \mathcal{X}_n$ が

$$
2^{−n(H(X1)+ \epsilon)} ≤ p(x_1, x_2,\dots,x_n) ≤ 2^{−n(H(X1)−\epsilon)}
$$

を満たすとき，この系列を $p(x)$ に関する典型系列であると言う．ここで，$H(X_1)$ は $X_1$ のエントロピーを表し，$p(x_1, x_2,...,x_n)$ は同時確率分布を表す．全ての典型系列からなる集合を $A_{\epsilon}^{(n)}$ と表記する．
次の各問いに答えよ．ただし，$\mathcal{X} = \{0, 1\}，p(0) = 1 − \alpha，p(1) = \alpha$ とする．ここで $\alpha \in (0, 1)$ は定数である．

(1) $(x_1, x_2,\dots,x_{10}) = (0, 1, 1, 0, 0, 0, 0, 1, 0, 0)$ に対し，$p(x_1, x_2,...,x_{10})$ を求めよ．

(2) $i = 1, 2,\dots,n$ に対する $H(X_i)$ および $H(X_1, X_2,\dots,X_n)$ を求めよ．

(3) $\mathbf{x} = (x_1, x_2,\dots,x_n)$ に対し，$S(\mathbf{x}) = \sum_{i = 1}^n x_i$ とおく． $\alpha = 0.2, n = 200, \epsilon= 0.01$ と
する．$A_{\epsilon}^{(n)}$ に属する系列 $\mathbf{x}$ に対する $S(\mathbf{x})$ の範囲を求めよ．

### 题目描述

【问题 1】某无记忆信道的输入、输出字母表均为 $\{1,2,3,4\}$，信道矩阵为

$$
\begin{pmatrix}
0.5&0.5&0&0\\
0&0.5&0.5&0\\
0&0&0.5&0.5\\
0.5&0&0&0.5
\end{pmatrix},
$$

其中第 $(i,j)$ 个元素表示 $W(j\mid i)$。求该信道的信道容量，并求出所有达到容量的输入分布。

【问题 2】考虑平稳无记忆信源 $X_1X_2\cdots$，其有限字母表为 $\mathcal X$，各 $X_i$ 均服从分布 $p(x)$。对任意固定的 $\epsilon>0$，若序列
$(x_1,x_2,\ldots,x_n)\in\mathcal X^n$ 满足

$$
2^{-n(H(X_1)+\epsilon)}
\le p(x_1,x_2,\ldots,x_n)
\le 2^{-n(H(X_1)-\epsilon)},
$$

则称其为关于 $p(x)$ 的典型序列。其中 $H(X_1)$ 为 $X_1$ 的熵，
$p(x_1,\ldots,x_n)$ 为联合概率；所有典型序列组成的集合记为
$A_\epsilon^{(n)}$。现令
$\mathcal X=\{0,1\}$、$p(0)=1-\alpha$、$p(1)=\alpha$，其中常数
$\alpha\in(0,1)$。回答：

1. 对序列
   $(x_1,\ldots,x_{10})=(0,1,1,0,0,0,0,1,0,0)$，
   求联合概率 $p(x_1,\ldots,x_{10})$。
2. 求每个 $i=1,\ldots,n$ 的 $H(X_i)$，以及联合熵
   $H(X_1,X_2,\ldots,X_n)$。
3. 对 $\mathbf x=(x_1,\ldots,x_n)$ 定义
   $S(\mathbf x)=\sum_{i=1}^n x_i$。当
   $\alpha=0.2$、$n=200$、$\epsilon=0.01$ 时，求所有
   $\mathbf x\in A_\epsilon^{(n)}$ 的 $S(\mathbf x)$ 取值范围。

## **Kai**
### 【問 1】

$$
C = \log_2 s + \sum_{j = 1}
^s p_{1j}\log_2{p_{1j}} = 2 - \mathcal{H}(0.5) = 1
$$

$$
\text{入力分布は}\quad p_1 = p_2 = p_3 = p_4 = \frac{1}{4}
$$

### 【問 2】
#### (1)

$$
p(x_1,x_2,\dots,x_{10}) = p(1)^3p(0)^7 = \alpha ^3(1 - \alpha)^7
$$

#### (2)

$$
H(X_i) = -[(1 - \alpha)\log_2(1 - \alpha) + \alpha\log_2\alpha] = \mathcal{H}(\alpha)
$$

$$
H(X_1,X_2,\dots,X_n) = H(X_1) + H(X_2) + \cdots + H(X_n) = nH(X_i) = n\mathcal{H}(\alpha)
$$

#### (3)

$$
\begin{aligned}
2^{-n(H(X_1) + \epsilon)} &\leq p(x_1,x_2,\dots,x_n) \leq 2^{-n(H(X_1) - \epsilon)} \\
-nH(X_1) -n\epsilon &\leq \log_2[p(x_1,x_2,\dots,x_n)] \leq -nH(X_1) + n\epsilon \\
n[(1 - \alpha)\log_2(1 - \alpha) + \alpha\log_2\alpha] - n\epsilon &\leq \log_2[\alpha^{S(\mathbf{x})}(1 - \alpha)^{n - S(\mathbf{x})}] \leq n[(1 - \alpha)\log_2(1 - \alpha) + \alpha\log_2\alpha] +n\epsilon
\end{aligned}
$$

$$
\left\{
\begin{aligned}
&S(\mathbf{x}\log_2\alpha) + [n - S(\mathbf{x})]\log_2(1 - \alpha) \ge n(1 - \alpha)\log_2(1 - \alpha) + n\alpha\log_2\alpha - n\epsilon \\
&S(\mathbf{x}\log_2\alpha) + [n - S(\mathbf{x})]\log_2(1 - \alpha) \leq n(1 - \alpha)\log_2(1 - \alpha) + n\alpha\log_2\alpha + n\epsilon 
\end{aligned}
\right.
$$

$$
\Downarrow
$$

$$
\left\{
\begin{aligned}
&S(\mathbf{x})\log_2(0.2) + 200\log_2(0.8) - S(\mathbf{x})\log_2(0.8) \ge 160\log_2(0.8) + 40\log_2(0.2) - 2\\
&S(\mathbf{x})\log_2(0.2) + 200\log_2(0.8) - S(\mathbf{x})\log_2(0.8) \le 160\log_2(0.8) + 40\log_2(0.2) + 2\\
\end{aligned}
\right.
$$

$$
\Downarrow
$$

$$
\left\{
\begin{aligned}
&-2S(\mathbf{x}) + 200\log_2(0.2) + 400 \ge 200\log_2(0.2) + 320 - 2\\
&-2S(\mathbf{x}) + 200\log_2(0.2) + 400 \le 200\log_2(0.2) + 320 + 2\\
\end{aligned}
\right.
$$

$$
\Downarrow
$$

$$
39 \le S(\mathbf{x}) \le 41
$$
