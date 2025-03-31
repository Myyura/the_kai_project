---
sidebar_label: "2023年8月実施 専門科目 S-4"
sidebar_position: 2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing), 祭音Myyura

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
\begin{align}
\begin{cases}
\displaystyle
\frac{\partial L}{\partial p} &= (m+1)\log_{2} p+(m+1)-(m+1)\lambda =
(m+1)(\log_{2} p+1-\lambda) = 0\\[0.7em]
\displaystyle
\frac{\partial L}{\partial q} &= (m-1)\log_{2} q+(m-1)-(m-1)\lambda = 
(m-1)(\log_{2} q+1-\lambda) = 0\\[0.7em]
\displaystyle
\frac{\partial L}{\partial \lambda} &= 1-(m+1)p-(m-1)q = 0
\end{cases}
\end{align}
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

$$
\begin{aligned}
\bar{N}
&= \frac{m\cdot (2^{m}-1) + (m+1)\cdot 2}{2^{m}+1}
= \frac{m(2^{m}+1)+2}{2^{m}+1}
= m+\frac{2}{2^{m}+1}
\end{aligned}
$$

### 設問5
$C=I(X;Y)=H(Y)-H(Y|X)$, where $H(Y)$ could be calculated from $P_Y = P_XP_{Y|X}$. Then, we construct the function

$$
F(p)=\frac{1}{2}-\frac{1+4}{4}\log (1+p)-\frac{2-p}{4}\log (2-p)
$$

Get the maximum when $p=\frac{1}{2}$

$$
C = \frac{5}{4}-\frac{3}{4}\log 3
$$

### 設問6

$$
H(Y)=\frac{n+2}{2(n-1)}-\frac{n}{2(n-1)}\log n+\frac{1}{n-1}\log (n-1)
$$

$$
H(Y|X)=1+\frac{1}{2} \log(n-1)
$$

$$
f(n)=\frac{1}{n-1}-\frac{1}{2}=-\frac{n}{2(n-1)}
$$