---
sidebar_label: "2022年8月実施 情報理論"
tags:
  - Kyushu-University
  - Computer-Science.Information-Theory.Differential-Entropy
  - Probability-Statistics.Stochastic-Processes.Markov-Information-Source
  - Computer-Science.Information-Theory.Entropy-Rate
  - Computer-Science.Information-Theory.Additive-Markov-Noise-Channel
  - Computer-Science.Information-Theory.Channel-Capacity
---
# 九州大学 システム情報科学府 情報理工学専攻 2022年8月実施 情報理論

## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
### 【問 1】
以下の各問いに答えよ．

(1) 区間 $[0, a] (a > 0)$ 上の一様分布に従う確率変数の微分エントロピーを求めよ．

(2) 区間 $[0, a] (a > 0)$ 上で定義された確率密度関数 $p(x)=2x/a^2$ に従う確率変数の微分
エントロピーを求めよ．

### 【問 2】
時刻 $t$ の入力 $X_t ∈ \{0, 1\}(t = 1, 2,...)$ に対し，入力と独立な誤り源 $S_E$ から発生した記号 $Z_t∈\{0, 1\}$ が加わった値 $Y_t = X_t \oplus Z_t$ が出力される加法的 $2$ 元通信路 $W$ を考える．
ただし，$\oplus$ は排他的論理和を表し，$0 \oplus 1 = 1$, $1 \oplus 1=0$ である．誤り源 $S_E$ が，$P(Z_{t+1} = 1|Z_t = 0) = 0.25$, $P(Z_{t+1} = 1|Z_t = 1) = 0.5$ となる定常な単純マルコフ情報源である場合について，以下の問いに答えよ．

(1) 誤り源 $S_E$ の定常確率分布を求めよ．

(2) 誤り源 $S_E$ のエントロピーレート $H(S_E)$ を求めよ．

(3) $X^n = (X_1,...,X_n)$ が $P(X_t = 1) = 1/2 (t = 1, 2,...,n)$ である離散無記憶情報源からの出力であり，$Z^n = (Z_1,...,Z_n)$ が定数 $z^n ∈ \{0, 1\}^n$ に固定されていると仮定する $Y^n = (Y_1,...,Y_n)$ が $P(Y_t = 1) = 1/2 (t = 1, 2,...,n)$ である離散無記憶情報源の出力であることを示せ．

(4) 通信路 $W$ の通信路容量は以下の式で定義される．

$$
C = \lim_{n \rightarrow \infty} \max_{P_{X^n} \in \mathcal{P}_n} \frac{1}{n}I(X^n;Y^n)
$$

ただし，$I(X^n;Y^n)$ は $X^n$ と $Y^n$ の間の相互情報量を，$P_{Xn}$ は入力 $X^n$ の確率分布を，
$\mathcal{P}_n$は$\{0, 1\}^n$ 上の確率分布全てからなる集合を表す．このとき，$C = 1 − H(S_E)$ と
なることを示せ．

### 题目描述

【问题 1】回答：

1. 求服从区间 $[0,a]$（$a>0$）上均匀分布的随机变量的微分熵。
2. 求服从区间 $[0,a]$（$a>0$）上概率密度
   $p(x)=2x/a^2$ 的随机变量的微分熵。

【问题 2】考虑加性二元信道 $W$。时刻 $t$ 的输入为
$X_t\in\{0,1\}$（$t=1,2,\ldots$），与输入独立的误差源 $S_E$ 产生
$Z_t\in\{0,1\}$，信道输出为
$Y_t=X_t\oplus Z_t$。其中 $\oplus$ 表示异或，例如
$0\oplus1=1$、$1\oplus1=0$。误差源 $S_E$ 是平稳一阶 Markov 信源，满足

$$
P(Z_{t+1}=1\mid Z_t=0)=0.25,\qquad
P(Z_{t+1}=1\mid Z_t=1)=0.5.
$$

回答：

1. 求误差源 $S_E$ 的平稳概率分布。
2. 求误差源 $S_E$ 的熵率 $H(S_E)$。
3. 设 $X^n=(X_1,\ldots,X_n)$ 是离散无记忆信源的输出，且对
   $t=1,\ldots,n$ 有 $P(X_t=1)=\frac12$；再把
   $Z^n=(Z_1,\ldots,Z_n)$ 固定为任意常量序列
   $z^n\in\{0,1\}^n$。证明
   $Y^n=(Y_1,\ldots,Y_n)$ 仍是满足
   $P(Y_t=1)=\frac12$（$t=1,\ldots,n$）的离散无记忆信源输出。
4. 信道 $W$ 的容量定义为

   $$
   C=\lim_{n\to\infty}
   \max_{P_{X^n}\in\mathcal P_n}
   \frac1n I(X^n;Y^n),
   $$

   其中 $I(X^n;Y^n)$ 为 $X^n$ 与 $Y^n$ 的互信息，
   $P_{X^n}$ 为输入序列 $X^n$ 的概率分布，$\mathcal P_n$ 为
   $\{0,1\}^n$ 上全部概率分布的集合。证明
   $C=1-H(S_E)$。

#### 考点

- **微分熵**：对均匀密度和线性密度直接积分 $-p(x)\log p(x)$，处理分布区间与参数 $a$。
- **马尔可夫误差源的平稳分布与熵率**：由二状态转移概率求稳态，再按稳态加权条件熵。
- **加性马尔可夫噪声信道**：利用均匀二元输入在固定异或平移下保持独立均匀分布。
- **信道容量证明**：用互信息的熵表示给出 $1-H(S_E)$ 的上界，并证明独立均匀输入达到该上界。

## **Kai**
### 【問 1】
#### (1)

$$
h(X) = - \int_0^a \frac{1}{a} \log \frac{1}{a} \text{d}x = \log a
$$

#### (2)

$$
h(X) = -\int_0^a \frac{2x}{a^2} \log \frac{2x}{a^2} \text{d}x = \log a + \frac{1}{2\ln2} - 1
$$

### 【問 2】
#### (1)

$$
\Pi = 
\begin{bmatrix}
0.75 & 0.25 \\
0.5 & 0.5 
\end{bmatrix}
$$

定常確率分布を $w = (w_0,w_1)$ とすると

$$
\left \{
\begin{aligned}
&w_0 + w_1 = 1 \\ 
&w\Pi = w \\
\end{aligned} \Rightarrow w = (\frac{2}{3},\frac{1}{3})
\right.
$$

#### (2)

$$
\begin{aligned}
H(S_E) &= w_0 \mathcal{H}(0.75) + w_1 \mathcal{H}(0.5) \\
&= \frac{2}{3}[-\frac{3}{4}\log_2(\frac{3}{4}) - \frac{1}{4}\log_2(\frac{1}{4})] + \frac{1}{3} \\
&= \frac{5}{3} - \frac{1}{2}\log_2 3
\end{aligned}
$$ 

#### (3)
$Z_t = 0$ のとき, $Y_t = X_t \oplus Z_t = X_t \oplus 0 = X_t$

$$
P(Y_t = 1) = P(X_t = 1) = \frac{1}{2}
$$

$Z_t = 1$ のとき, $Y_t = X_t \oplus Z_t = X_t \oplus 1$

$$
P(Y_t = 1) = P(X_t = 0) = 1 - P(X_t = 1) = \frac{1}{2}
$$

#### (4)

$$
\begin{aligned}
I(X;Y) &= H(Y) - H(Y | X) \\
&= H(Y) - H(X \oplus S_E | X) \\
&= H(Y) - H(S_E | X) \\
&= H(Y) - H(S_E) \\
C &= \lim_{n \rightarrow \infty} \max_{P_{X^n} \in \mathcal{P}_n} \frac{1}{n} I(X^n ;Y^n) = \mathcal{H}(\frac{1}{2}) - H(S_E) = 1 - H(S_E)
\end{aligned}
$$
