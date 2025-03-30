---
sidebar_label: "2021年度 複素関数論"
sidebar_position: 19
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年度 複素関数論


## **Author**
Zero

## **Description**
次の各問に答えよ。

(1) 複素関数 $f(z) = \frac{1}{z(z - 2)^2}$ を $z = 0$ でローラン展開せよ。

(2) 複素関数 $g(z) = z\sin\frac{1}{z + 2}$ を $z = -2$ ローラン展開し, 級数が収束する領域を示せ。次に, $z = -2$ における留数を求めよ。

## **Kai** 
### (1)
$z = 0$ でローラン展開し $\rightarrow$ $(z)^k$ の級数

(i) $|z| < 2$

$$
\frac{1}{z - 2} = -\frac{1}{2} \cdot \frac{1}{1 - \frac{z}{2}} = -\frac{1}{2} \cdot \sum_{k = 0}^{\infty}(\frac{z}{2})^k
$$

$$
\begin{aligned}
(\frac{1}{z - 2})^2 &= \frac{1}{2}\sum_{k = 0}^{\infty} \cdot \frac{z^{k - 1}}{2^k} \\
\therefore f(z) &= \frac{1}{2}\sum_{k = 1}^{\infty} k \cdot \frac{z^{k - 2}}{2^k} \\
&= \frac{1}{4z} + \frac{1}{4} + \frac{3}{16}z + \cdots 
\end{aligned}
$$

(ii) $2 < |z|$

$$
\begin{aligned}
\frac{1}{z - 2} &= \frac{1}{z} \cdot \frac{1}{1 - \frac{2}{z}} \\
&= \frac{1}{z} \sum_{k = 0}^{\infty} (\frac{2}{z})^k
\end{aligned}
$$

$$
\begin{aligned}
(\frac{1}{z - 2})^2 &= \sum_{k = 0}^{\infty} - (k + 1)\frac{2^k}{z^{k + 2}} \\
\therefore f(z) &= \sum_{k = 0}^{\infty} - (k + 1)\frac{2^k}{z^{k + 3}} \\
&= -\frac{1}{z^3} - \frac{4}{z^4} - \frac{12}{z^5} - \cdots
\end{aligned}
$$

### (2)
$z = -2$ でローラン展開し $\rightarrow$ $(z + 2)^k$ の級数

$$
\begin{aligned}
\sin\omega &= \omega - \frac{1}{3_1^{1}}\omega^3 + \frac{1}{5_1^1}\omega^5 \cdots \\
&= \sum_{k = 0}^{\infty}\frac{(-1)^k}{(2k + 1)_1^1}\omega^{2k + 1}
\end{aligned}
$$

$0 < |\omega| < \infty$

$$
\begin{aligned}
\sin(\frac{1}{z + 2}) &= \sum_{k = 0}^{\infty}\frac{(-1)^k}{(2k + 1)_1^1}(\frac{1}{z + 2})^{2k + 1} \\
&= 1 - \frac{2}{z + 2} + (-\frac{1}{3_1^1})(\frac{1}{(z + 2)_1^1}) + \frac{2}{(z + 2)^2} + (\frac{2}{3_1^1})\frac{1}{(z + 2)^3} + \cdots
\end{aligned}
$$

留数 $\rightarrow -2$