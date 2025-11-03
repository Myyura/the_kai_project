---
sidebar_label: '2016年8月実施 数学 第5問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2016年8月実施 数学 第5問

## **Author**

## **Description**
$t \ge 0$ で定義される関数 $f(t)$ のラプラス変換 $F(s) = L[f(t)]$ は

$$
\begin{align}
F(s) = \int_0^{\infty}f(t)e^{-st}\text{d}t
\end{align}
$$

で定義される。ただし, $s$ は複素数, $e$ は自然対数の底とする。以下の問いに答えよ。導出過程を示すこと。

### I.
以下の関係式が成り立つことを示せ。

#### 1.
$n$ が自然数のとき, $L[t^{n}] = \frac{n!}{s^{n+1}}$

#### 2.
$f(t)$ が微分可能であるとき,　$L[\frac{\text{d}f(t)}{\text{d}t}] = sF(s) - f(0)$

#### 3.
$a$ が実数のとき, $L[e^{at}f(t) = F(s - a)]$

### II.
ラプラス変換を用いて, $t \ge 0$ における以下の微分方程式の解を求めよ。

$$
\begin{align}
t\frac{\text{d}^2f(t)}{\text{d}t^2} + (1 + 3t)\frac{\text{d}f(t)}{\text{d}t} + 3f(t) = 0,\quad f(0) = 1,\quad \frac{\text{d}f}{\text{d}t}\bigg|_{t = 0} = -3
\end{align}
$$

ただし, $L[tf(t)] = -\frac{\text{d}}{\text{d}s}F(s)$ の関係式を用いてよい。

### III.
次の連立微分方程式を満足する点 $P(x(t),y(t))$ が, $t = 0$ のとき点 $(a,b)$ を通るとする。ただし,　$a ,b$ は実数とする。

$$
\left\{
\begin{align}
\frac{\text{d}x(t)}{\text{d}t} &= -x(t) \\
\frac{\text{d}y(t)}{\text{d}t} &= x(t) - 2y(t) \nonumber \\
\end{align}
\right.
$$

#### 1.
ラプラス変換を用いて,　$t \ge 0$ における式(3)の解を求めよ。

#### 2.
問 III.1 の解から $t$ を消去し, $x$ と $y$ の関係式を示せ。

#### 3.
$(a,b) = (1,1)$ および $(-1,1)$ のとき, $t$ を $0$ から無限大まで連続的に変化させた場合の点 $P$ の軌跡をそれぞれ図示せよ。

## **Kai**
### I.
#### 1.

$$
\begin{aligned}
L[t^{n}] &= \int_0^{\infty}t^{n} \cdot e^{-st}\text{d}t \\
&= -\frac{1}{s}\bigg[t^{n}e^{-st}\bigg]_0^{\infty} + \frac{n}{s}\int_0^{\infty} t^{n - 1} \cdot e^{-st} \text{d}t \\
&= \frac{n}{s}L[t^{n-1}] \\
&= \frac{n}{s} \cdot \frac{n - 1}{s}L[t^{n - 2}] \\
&= \frac{n}{s} \cdot \frac{n - 1}{s} \cdot \cdots \cdot \frac{n - (n - 1)}{s}L[t^0] \\
&= \frac{n!}{s^{n}} \int_0^{\infty} e^{-st}\text{d}t \\
&= \frac{n!}{s}\bigg[e^{-st}\bigg]_0^{\infty} \\
&= \frac{n!}{s} \cdot \frac{1}{s} = \frac{n!}{s^{n + 1}}
\end{aligned}
$$

#### 2.

$$
\begin{aligned}
L[\frac{\text{d}f(t)}{\text{d}t}] &= \int_0^{\infty} \frac{\text{d}f(t)}{\text{d}t} \cdot e^{-st} \text{d}t \\
&= \bigg[f(t)e^{-st}\bigg]_0^{\infty} + s \int_0^{\infty} f(t)e^{-st}\text{d}t \\
&= -f(0) + sF(s) 
\end{aligned}
$$

#### 3.

$$
\begin{aligned}
L[e^{at}f(t)] &= \int_0^{\infty} e^{at}f(t) \cdot e^{-st} \text{d}t \\
&= \int_0^{\infty}f(t) \cdot e^{-(s - a)t}\text{d}t \\
&= F(s - a)
\end{aligned}
$$

### II.

$$
\begin{aligned}
t\frac{\text{d}^2f(t)}{\text{d}t^2} + (1 + 3t)\frac{\text{d}f(t)}{\text{d}t} + 3f(t) = 0,\\
f(0) = 1,\quad \frac{\text{d}f}{\text{d}t}\bigg|_{t = 0} = -3
\end{aligned}
$$

両辺をラプラス変換すると,

$$
L\bigg[t\frac{\text{d}^2f}{\text{d}t^2}\bigg] + L\bigg[\frac{\text{d}f}{\text{d}t}\bigg] + 3L\bigg[t\frac{\text{d}f}{\text{d}t}\bigg] + 3L[f(t)] = 0
$$

ここで, $L[tf(t)] = -\frac{\text{d}}{\text{d}s}F(s) = -\frac{\text{d}}{\text{d}s}L[f(t)]$ の関係を利用すると,

$$
\begin{aligned}
L\bigg[t\frac{\text{d}^2f}{\text{d}t^2}\bigg] &= -\frac{\text{d}}{\text{d}s}L\bigg[\frac{\text{d}^2f}{\text{d}t^2}\bigg] \\
&= -\frac{\text{d}}{\text{d}s}L\bigg[\frac{\text{d}}{\text{d}t} \frac{\text{d}f}{\text{d}t} \bigg] \\
&= -\frac{\text{d}}{\text{d}s} \bigg\{sL\bigg[\frac{\text{d}f}{\text{d}t}\bigg] - \frac{\text{d}f}{\text{d}t}\bigg|_{t = 0}\bigg\} \quad (\because \text{設問I.2.}) \\
&= -\frac{\text{d}}{\text{d}s}\bigg\{s(sF(s) - f(0)) - (-3)\bigg\} \\   
&= -2sF(s) - s^2\frac{\text{d}F}{\text{d}s} + 1
\end{aligned}
$$

$$
\begin{aligned}
L\bigg[t\frac{\text{d}f}{\text{d}t}\bigg] &= -\frac{\text{d}}{\text{d}s}L\bigg[\frac{\text{d}f}{\text{d}t}\bigg] \\
&= \frac{\text{d}}{\text{d}s}(sF(s) - f(0)) \\
&= -F(s) - s\frac{\text{d}F}{\text{d}s}
\end{aligned}
$$

であるから,　ラプラス変換した微分方程式は,　

$$
\begin{aligned}
&-2sF(s) - s^2\frac{\text{d}F}{\text{d}s} + 1 + (sF(s) - 1) \\
&\qquad + 3\big(-F(s) - s\frac{\text{d}F}{\text{d}s}\big) + 3F(s) = 0\\
&\quad (-s^2 - 3s)\frac{\text{d}F}{\text{d}s} - sF(s) = 0 \\
&\qquad \frac{\text{d}F}{F(s)} = -\frac{1}{s + 3}\text{d}s \\
&\quad \log F(s) = -\log(s + 3) + C \\
&\qquad \therefore F(s) = \frac{C'}{s + 3}
\end{aligned}
$$

となる。ラプラス逆変換により,

$$
f(t) = L^{-1}[F(s)] = L^{-1}\bigg[\frac{C'}{s + 3}\bigg] = C'e^{-3t}
$$

$f(0) = 1$ より, $C' = 1$ と決まり,　求める解 $f(t)=e^{-3t}$ を得る。

### III.
#### 1.
$x(t),y(t)$ のラプラス変換をそれぞれ, $L[x(t)] = X(s)$, $L[y(t)] = Y(s)$ とおく。連立微分方程式(3)をラプラス変換すると,

$$
\left\{
\begin{align}
L\bigg[\frac{\text{d}x(t)}{\text{d}t}\bigg] &= -X(s) \label{(a)} \tag{a} \\
L\bigg[\frac{\text{d}y(t)}{\text{d}t}\bigg] &= X(s) - 2Y(s) \label{(b)} \tag{b}
\end{align}
\right.
$$

$x(0) = a ,y(0) = b$ であることに注意して,　式 $(a)$ より,

$$
sX(s) - x(0) = -X(s)
$$

$$
X(s) = \frac{a}{s + 1}
$$

$$
\therefore \quad x(t) =aL^{-1}\bigg[\frac{1}{s + 1}\bigg] = ae^{-t}
$$

式 $(b)$ より,

$$
\begin{aligned}
&sY(s) -y(0) = \frac{a}{s + 1} - 2Y(s) \\
&\quad (s + 2)Y(s) = \frac{a}{s + 1} + b \\
&\quad Y(s) = \frac{bs + a + b}{(s + 1)(s + 2)} \\
&\quad Y(s) = \frac{a}{s + 1} - \frac{a - b}{s + 2}
\end{aligned}
$$

$$
\begin{aligned}
\therefore y(t) &= aL^{-1}\bigg[\frac{1}{s + 1}\bigg] -  (a - b)L^{-1}\bigg[\frac{1}{s + 2}\bigg] \\
&= ae^{-t} - (a - b)e^{-2t}
\end{aligned}
$$

求める解は,

$$
\left\{
\begin{aligned}
x(t) &= ae^{-t} \\
y(t) &= ae^{-t} - (a - b)e^{-2t}
\end{aligned}
\right.
$$

#### 2.
$e^{-t} = x/a$ を $y(t)$ の式に代入して,

$$
y = x - \frac{a - b}{a^2}x^2
$$

#### 3.
##### (i).
$(a,b) = (1,1)$ のとき,

$$
y = x
$$

$t\mid 0 \rightarrow \infty$ のとき, $x\mid 1 \rightarrow 0 ,y\mid 1 \rightarrow 0$ より, 点 $P$ の軌跡は下図左のようになる。

##### (ii).
$(a,b) = (-1,1)$ のとき, $x\mid -1 \rightarrow 0, y\mid 1 \rightarrow 0$ より, 点 $P$ の軌跡は下図右のようになる。

TODO: picture