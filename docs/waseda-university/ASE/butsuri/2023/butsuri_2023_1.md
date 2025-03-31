---
sidebar_label: "2023年度 数学一般 問題1"
tags:
  - Waseda-University
---
# 早稲田大学 先進理工学研究科 物理学及応用物理学専攻 2023年度 数学一般 問題1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
与えられた微分方程式の右辺を $0$ とした方程式に
$y = e^{\lambda t}$ （ $\lambda$ は $t$ によらない定数）を代入すると、
$(\lambda + 2)^2 = 0$ を得るので、
この微分方程式の一般解は、積分定数を $A, B$ として、

$$
\begin{aligned}
y(t) = (A+Bt) e^{-2t}
\end{aligned}
$$

である。
与えられた微分方程式に
$y = C e^t$ （ $C$ は $t$ によらない定数）を代入すると、
$C = 1/9$ を得るので、
$y(t) = (1/9) e^t$ は特殊解である。
よって、与えられた微分方程式の一般解は、積分定数を $A, B$ として、

$$
\begin{aligned}
y(t) = (A+Bt) e^{-2t} + \frac{1}{9} e^t
\end{aligned}
$$

である。

<p>
[参考]
<a href="https://www.amazon.co.jp/dp/490381419X/ref=nosim?tag=msscee0a-22">
千葉逸人「工学部で学ぶ数学」
</a>
</p>

### (2)
(i) まず、被積分関数が $0$ になるので $b_0=0$ であり、
被積分関数が奇関数になるので $n = 1, 2, \cdots$ について $b_n=0$ である。
次に、

$$
  \begin{aligned}
  a_0
  &= \int_{-1}^1 x^2 \ dx
  = \frac{2}{3}
  \end{aligned}
$$

また、 $n = 1, 2, \cdots$ について

$$
  \begin{aligned}
  a_n
  &= \int_{-1}^1 x^2 \cos (n \pi x) dx
  \\
  &= \frac{1}{n \pi} \left[ x^2 \sin (n \pi x) \right]_{-1}^1
  - \frac{2}{n \pi} \int_{-1}^1 x \sin (n \pi x) dx
  \\
  &= - \frac{2}{n^2 \pi^2} \left[ x \cos (n \pi x) \right]_{-1}^1
  + \frac{2}{n^2 \pi^2} \int_{-1}^1 \cos (n \pi x) dx
  \\
  &= \frac{4 \cdot (-1)^n}{n^2 \pi^2}
  \end{aligned}
$$

(ii) 今の場合のフーリエ級数展開の式は

$$
  \begin{aligned}
  x^2 = \frac{1}{3}
  + \frac{4}{\pi^2} \sum_{n=1}^\infty \frac{(-1)^n}{n^2} \cos (n \pi x)
  \end{aligned}
$$

となるので、 $x=1$ として、

$$
  \begin{aligned}
  1 &= \frac{1}{3} + \frac{4}{\pi^2} \sum_{n=1}^\infty \frac{1}{n^2}
  \\
  \therefore \ \ 
  \sum_{n=1}^\infty \frac{1}{n^2} &= \frac{\pi^2}{6}
  \end{aligned}
$$

を得る。

### (3)

### (4)

### (5)

<p>
<a href="https://www.amazon.co.jp/dp/4000054805/ref=nosim?tag=msscee0a-22">
寺沢寛一「自然科学者のための数学概論 増訂版」 p.145
</a>
</p>