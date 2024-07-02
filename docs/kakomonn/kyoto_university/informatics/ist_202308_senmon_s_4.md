---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing)

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

$$
Max\{H\}=H(0.5,0.5)=1, Min\{H\}=0
$$

### 設問2
Let $F(p,q)=-(m+1)p \log p-(m-1)q \log q$. Given $(m-1)q+(m+1)p=1$

$$
F'(p)=(m+1) \log \frac{1-(m+1)p}{(m-1)p}
$$

So when $p=\frac{1}{2m}$, we get the maximum $\log m+1$, and minimum $\log(m-1)$ when $p=\frac{1}{m+1}$

### 設問3

$$
C = \{1, 01, 00\}, \bar{N} = \frac{5}{3}
$$

### 設問4

$$
\bar{N} = \frac{m(2m+3)}{2^m+1}
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