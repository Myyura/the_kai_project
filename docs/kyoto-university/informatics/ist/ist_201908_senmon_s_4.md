---
sidebar_label: "2019年8月実施 専門科目 S-4"
sidebar_position: 8
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
C = \max I(X;Y) = \max \{H(Y) - H(Y|X)\}
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

Note that when $p=\frac{1}{2}$, $P(Y=\alpha) = P(Y=\beta) = P(Y=\gamma) = \frac{1}{3}$, $H(Y)$ is maximized.

Hence we have

$$
\begin{aligned}
C &= \max \left\{ H(Y) - H(Y|X) \right\}\\
&= \max \left\{ \sum_{y = \alpha, \beta, \gamma}P(Y=y)\ln\frac{1}{P(Y=y)} - \left( \sum_{x=A,B}P(X=x) H(Y|X=x)\right) \right\} \\
&= \left( 3\cdot \frac{1}{3}\log3 - \frac{1}{2}\left( \frac{2}{3}\log \frac{3}{2} + \frac{1}{3}\log 3\right)\cdot 2 \right) \\
&= \frac{2}{3}
\end{aligned}
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
\begin{aligned}
&\lim_{t\to\infty}\frac{1}{t}H(X_{1},X_{2},...,X_{t})\\
&=H(x_n|X_{n-1}) \\
&= - \left( \pi_A \left( \frac{3}{4} \log \frac{3}{4} + \frac{1}{4} \log \frac{1}{4} \right) + \pi_B \left( \frac{1}{2} \log \frac{1}{2} + \frac{1}{2} \log \frac{1}{2} \right) \right)\\
&= \frac{2}{3}\left( \frac{3}{4}\log \frac{4}{3} + \frac{1}{4}\log4 \right) + \frac{1}{3}\left( \frac{1}{2}\log2 + \frac{1}{2}\log2 \right) \\
&= \frac{5}{3} - \frac{1}{2}\log 3
\end{aligned}
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
\begin{aligned}
H(Y_{t+1}|Y_{t}=\alpha)&=\frac{1}{2}\log2+\frac{1}{3}\log3+\frac{1}{6}(\log2+\log3) \\
&=\frac{2}{3}+\frac{1}{2}\log3
\end{aligned}
$$

### (5)
By the stationarity, we have

$$
H(Y_{t+1}|Y_{t}{=}\alpha, Y_{t+2}=\gamma){=}H(Y_{2}|Y_{1}=\alpha, Y_{3}=\gamma)
$$

and

$$
\begin{aligned}
H(Y_2|Y_1=\alpha, Y_3=\gamma) &= -p(Y_2=\alpha|Y_1=\alpha, Y_3=\gamma) \ln p(Y_2=\alpha|Y_1=\alpha, Y_3=\gamma)\notag \\
&\quad-p(Y_2=\beta|Y_1=\alpha, Y_3=\gamma) \ln p(Y_2=\beta|Y_1=\alpha, Y_3=\gamma)\notag \\
&\quad-p(Y_2=\gamma|Y_1=\alpha, Y_3=\gamma) \ln p(Y_2=\gamma|Y_1=\alpha, Y_3=\gamma)
\end{aligned}
$$

We calculate the conditional probabilities one by one.

$$
\begin{aligned}
p(Y_2=\alpha|Y_1=\alpha, Y_3=\gamma)
&= \frac{p(Y_1=\alpha, Y_2=\alpha, Y_3=\gamma)}{p(Y_1=\alpha, Y_3=\gamma)} \\
&= \frac{p(Y_1=\alpha, Y_2=\alpha, Y_3=\gamma)}{p(Y_1{=}\alpha, Y_2{=}\alpha, Y_3{=}\gamma)+p(Y_1{=}\alpha, Y_2{=}\beta, Y_3{=}\gamma)+p(Y_1{=}\alpha, Y_2{=}\gamma, Y_3{=}\gamma)} \\
&= \frac{\frac{1}{27}}{\frac{1}{27}+\frac{5}{162}+\frac{2}{81}} \\
&= \frac{2}{5}
\end{aligned}
$$

similarly we have

$$
p(Y_2=\gamma|Y_1=\alpha, Y_3=\gamma) = \frac{2/81}{5/54} = \frac{4}{15}
$$

and

$$
\begin{aligned}
p(Y_2=\beta|Y_1=\alpha, Y_3=\gamma) &= 1-p(Y_2=\alpha|Y_1=\alpha, Y_3=\gamma)-p(Y_2=\gamma|Y_1=\alpha, Y_3=\gamma)\\
&= 1-\frac{2}{5}-\frac{4}{15} = \frac{1}{3}
\end{aligned}
$$

Finally we have

$$
\begin{aligned}
H(Y_2|Y_1=\alpha, Y_3=\gamma)
&= \frac{2}{5}\log\frac{5}{2}+\frac{1}{3}\log 3+\frac{4}{15}\log\frac{15}{4}\\
&= -\frac{14}{15} + \frac{3}{5}\log 3 + \frac{2}{3}\log 5
\end{aligned}
$$