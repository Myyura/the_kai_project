---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2019年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2019年8月実施 専門科目 S-4

## **Author**
[realball](https://github.com/realballu3u)

## **Description**
設問 以下の状態遷移図で示される単純マルコフ情報源から出力される系列 $X_1,X_2,\dots,X_t,\dots$ がある。ここで $X_t \in \{A,B\}$ である。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_201908_senmon_s_4_p1.png" width="350" height="140" alt=""/>
</figure>

$X_t$ は以下の通信路行列によって与えられる通信路を介して送信され、$Y_t \in \{\alpha,\beta,\gamma\}$ が受信されるとする。

||$\alpha$|$\beta$|$\gamma$|
|-|-|-|-|
|$A$|$2/3$|$1/3$|$0$|
|$B$|$0$|$1/3$|$2/3$|

(1) 上記の通信路の通信路容量を求めよ。

(2) 受信した系列 $Y_1,Y_2,\dots$ においてシンボル $\alpha,\beta,\gamma$ の出現回数を数える。十分な時間が経過したとき、シンボルを出現回数の多い順に並べよ。

(3) マルコフ情報源のエントロピーレート $\lim_{t \rightarrow \infty}\frac{1}{t}H(X_1,X_2,\dots,X_t)$ を求めよ。

(4) $Y_t = \alpha$ のとき $Y_{t + 1}$ のエントロピー $H(Y_{t + 1}|Y_t = \alpha)$ を求めよ。

(5) $Y_t = \alpha$ かつ $Y_{t + 2} = \gamma$ のときの $Y_{t + 1}$ のエントロピー $H(Y_{t + 1}|Y_t = \alpha,Y_{t + 2} = \gamma)$ を求めよ。

## **Kai**
### (1)

$$
C = \max_{p(x)} I(X;Y)
$$

The channel matrix is:

$$
\begin{bmatrix}
2/3 & 1/3 & 0 \\
0 & 1/3 & 2/3
\end{bmatrix}
$$

$$
P(Y=\alpha) = p \cdot \frac{2}{3} + (1-p) \cdot 0 = \frac{2p}{3}
$$

$$
P(Y=\beta) = p \cdot \frac{1}{3} + (1-p) \cdot \frac{1}{3} = \frac{1}{3}
$$

$$
P(Y=\gamma) = p \cdot 0 + (1-p) \cdot \frac{2}{3} = \frac{2(1-p)}{3}
$$

The mutual information $I(X; Y)$ is given by:

$$
I(X; Y) = H(Y) - H(Y|X)
$$

Where $H(Y)$ is the entropy of $Y$ and $H(Y|X)$ is the conditional entropy of $Y$ given $X$.

First, compute $H(Y)$:

$$
H(Y) = -\sum_{y} P(Y=y) \log P(Y=y)
$$

Using the probabilities calculated:

$$
H(Y) = - \left( \frac{2p}{3} \log \frac{2p}{3} + \frac{1}{3} \log \frac{1}{3} + \frac{2(1-p)}{3} \log \frac{2(1-p)}{3} \right)
$$

Next, compute $H(Y|X)$:

$$
H(Y|X) = \sum_{x} P(X=x) H(Y|X=x)
$$

$$
H(Y|X=A) = \frac{2}{3} \log \frac{3}{2} + \frac{1}{3} \log 3
$$

$$
H(Y|X=B) = \frac{1}{3} \log 3 + \frac{2}{3} \log \frac{3}{2}
$$

Then:

$$
H(Y|X) = p \cdot H(Y|X=A) + (1-p) \cdot H(Y|X=B)
$$

$$
H(Y|X) = p \left( \frac{2}{3} \log \frac{3}{2} + \frac{1}{3} \log 3 \right) + (1-p) \left( \frac{1}{3} \log 3 + \frac{2}{3} \log \frac{3}{2} \right)
$$

$$
H(Y|X) = \frac{2}{3} \log \frac{3}{2} + \frac{1}{3} \log 3
$$

Finally, the mutual information I(X; Y):

$$
I(X; Y) = H(Y) - H(Y|X)
$$

### (2)
Order of symbols $\alpha, \beta, \gamma$ in decreasing order after a sufficiently long time.

To find the order, we need the steady-state distribution of the states and the emission probabilities. The transition matrix $P$ of the Markov source is:

$$
P = \begin{bmatrix}
3/4 & 1/4 \\
1/2 & 1/2
\end{bmatrix}
$$

Solving for the stationary distribution $\pi$:

$$
\pi P = \pi, \quad \pi_1 + \pi_2 = 1
$$

$$
\pi_1 = \frac{2}{3}, \quad \pi_2 = \frac{1}{3}
$$

The probabilities of receiving $\alpha$, $\beta$, and $\gamma$ are:

$$
P(\alpha) = \pi_A P(\alpha | A) = \frac{2}{3} \cdot \frac{2}{3} = \frac{4}{9}
$$

$$
P(\beta) = \pi_A P(\beta | A) + \pi_B P(\beta | B) = \frac{2}{3} \cdot \frac{1}{3} + \frac{1}{3} \cdot \frac{1}{3} = \frac{1}{3}
$$

$$
P(\gamma) = \pi_B P(\gamma | B) = \frac{1}{3} \cdot \frac{2}{3} = \frac{2}{9}
$$

or we can simply calculate like this:

$$
\begin{bmatrix}\frac{2}{3},\frac{1}{3}\end{bmatrix}\begin{bmatrix}\frac{2}{3}&\frac{1}{3}&0\\0&\frac{1}{3}&\frac{2}{3}\end{bmatrix}=\begin{bmatrix}\frac{4}{9},&\frac{1}{3},&\frac{2}{9}\end{bmatrix}
$$

The order in decreasing order is $\alpha, \beta, \gamma$.

### (3)
When $t=\infty$, the stationary is reached due to the nature of Markov sources.

$$
\lim_{t\to\infty}\frac{1}{t}H(X_{1},X_{2},...,X_{t})=H(x_n|X_{n-1})
$$

$$
= - \left( \pi_A \left( \frac{3}{4} \log \frac{3}{4} + \frac{1}{4} \log \frac{1}{4} \right) + \pi_B \left( \frac{1}{2} \log \frac{1}{2} + \frac{1}{2} \log \frac{1}{2} \right) \right)
$$

$$
= - \left( \frac{2}{3} \left( \frac{3}{4} \log \frac{3}{4} + \frac{1}{4} \log \frac{1}{4} \right) - \frac{1}{3} \right)
$$

### (4)
When $Y_t=\alpha$, means $X_t=A$, here we come up with:

$$
H(Y_{t+1} \mid Y_t = \alpha) = H(Y_{t+1} \mid X_t = A)
$$

From the Markov matrix we know:

$$
P(x_{t+1}=A|x_{t}=A)=\frac{3}{4} 
$$

$$
P(x_{t+1}=B|x_{t}=A)=\frac{1}{4}
$$

$$
\begin{bmatrix}\frac{3}{4}&\frac{1}{4}\end{bmatrix}\begin{bmatrix}\frac{2}{3}&\frac{1}{3}&0\\0&\frac{1}{3}&2\\0&\frac{1}{3}&3\end{bmatrix}=\begin{bmatrix}\frac{1}{2},\frac{1}{3},\frac{1}{6}\end{bmatrix}
$$

$$
H(Y_{t+1}|Y_{t}=\alpha)=\frac{1}{2}\log2+\frac{1}{3}\log3+\frac{1}{6}(\log2+\log3)=\frac{2}{3}+\frac{1}{2}\log3
$$

### (5)
We will follow the paths from $Y_t = \alpha$ to $Y_{t+2} = \gamma$:

$$
X_t = A \to X_{t+1} = A \to X_{t+2} = B
$$

$$
X_t = A \to X_{t+1} = B \to X_{t+2} = B
$$

Thus, we have:

$$
P(X_{t+1} = A \mid X_t = A) \cdot P(X_{t+2} = B \mid X_{t+1} = A) \cdot P(Y_{t+2} = \gamma \mid X_{t+2} = B) = \frac{3}{4} \cdot \frac{1}{4} \cdot \frac{2}{3}
$$

$$
P(X_{t+1} = B \mid X_t = A) \cdot P(X_{t+2} = B \mid X_{t+1} = B) \cdot P(Y_{t+2} = \gamma \mid X_{t+2} = B) = \frac{1}{4} \cdot \frac{1}{2} \cdot \frac{2}{3}
$$

$$
H(Y_{t+2} \mid Y_t = \alpha, Y_{t+2}=\gamma) = -\left(\frac{1}{8} \log \frac{1}{8} + \frac{3}{8} \log \frac{3}{8} \right)
$$
