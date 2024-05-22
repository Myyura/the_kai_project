---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻 2023年度 情報理論
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻 2023年度 情報理論

## **Author**
Yu

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