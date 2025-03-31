---
sidebar_label: "2018年8月実施 確率・統計"
sidebar_position: 6
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2018年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]
#### (1)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{4}{6}
  + \frac{1}{2} \cdot \frac{2}{6}
  = \frac{1}{2}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{{}_6C_2 - {}_4C_2}{{}_6C_2}
  + \frac{1}{2} \cdot \frac{{}_6C_2 - 3}{{}_6C_2}
  = \frac{7}{10}
  \end{aligned}
$$

#### (3)
初めに箱 A, B を選ぶことをそれぞれ $X_1=A,B$ で表し、
次に箱 A, B を選ぶことをそれぞれ $X_2=A,B$ で表す。
また、初めに赤玉を選ぶことを $Y_1=R$ で表し、
次に赤玉を選ぶことを $Y_2=R$ で表す。

初めの玉が赤玉であったとき、選んだ箱がA,Bであった確率は、
それぞれ、

$$
\begin{aligned}
P(X_1 = A \mid Y_1 = R)
&=
\frac{P(X_1=A) P(Y_1=R \mid X_1=A)}{P(Y_1=R)}
=
\frac{\frac{1}{2} \cdot \frac{4}{6}}{\frac{1}{2}}
= \frac{2}{3}
\\
P(X_1 = B \mid Y_1 = R)
&=
\frac{P(X_1=B) P(Y_1=R \mid X_1=B)}{P(Y_1=R)}
=
\frac{\frac{1}{2} \cdot \frac{2}{6}}{\frac{1}{2}}
= \frac{1}{3}
\end{aligned}
$$

である。
初めに箱Aを選んで赤玉を取り出したとき、
次に箱 A, B を選んで赤玉を取り出す確率は、それぞれ、

$$
\begin{aligned}
P(Y_2=R \mid X_1 = A , Y_1 = R, X_2=A)
&=
\frac{3}{5}
\\
P(Y_2=R \mid X_1 = A , Y_1 = R, X_2=B)
&=
\frac{2}{6}
=
\frac{1}{3}
\end{aligned}
$$

であり、
初めに箱Bを選んで赤玉を取り出したとき、
次に箱 A, B を選んで赤玉を取り出す確率は、それぞれ、

$$
\begin{aligned}
P(Y_2=R \mid X_1 = B , Y_1 = R, X_2=A)
&=
\frac{4}{6}
=
\frac{2}{3}
\\
P(Y_2=R \mid X_1 = B , Y_1 = R, X_2=B)
&=
\frac{1}{5}
\end{aligned}
$$

である。
よって、
初めに赤玉を取り出したとき、次に同じ箱を選んで赤玉を取り出す確率は、

$$
\begin{aligned}
&
P(X_1=A \mid Y_1=R)
P(Y_2=R \mid X_1=A , Y_1=R, X_2=A)
\\
& \ \ \ \ +
P(X_1=B \mid Y_1=R)
P(Y_2=R \mid X_1=B , Y_1=R, X_2=B)
\\
&=
\frac{2}{3} \cdot \frac{3}{5}
+ \frac{1}{3} \cdot \frac{1}{5}
\\
&=
\frac{7}{15}
\end{aligned}
$$

であり、
次に別の箱を選んで赤玉を取り出す確率は、

$$
\begin{aligned}
&
P(X_1=A \mid Y_1=R)
P(Y_2=R \mid X_1=A , Y_1=R, X_2=B)
\\
& \ \ \ \ +
P(X_1=B \mid Y_1=R)
P(Y_2=R \mid X_1=B , Y_1=R, X_2=A)
\\
&=
\frac{2}{3} \cdot \frac{1}{3}
+ \frac{1}{3} \cdot \frac{2}{3}
\\
&=
\frac{4}{9}
\end{aligned}
$$

であるから、前者の方が大きい。

### \[2\]
#### (1)

$$
  \begin{aligned}
  1
  &=
  12 \int_0^1 x^2(a-x) dx
  \\
  &=
  4a-3
  \\
  \therefore \ \ \ \ 
  a &= 1
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  12 \int_0^{1/3} x^2(1-x) dx
  = \frac{1}{9}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  \mu
  &=
  12 \int_0^1 x^3 (1-x) dx
  \\
  &= \frac{3}{5}
  \\
  \sigma^2
  &=
  12 \int_0^1 x^4 (1-x) dx
  - \left( \frac{3}{5} \right)^2
  \\
  &= \frac{1}{25}
  \end{aligned}
$$

#### (4)
表が出る確率 $\theta$ のコインを $n$ 回投げて
すべて表が出る確率は $\theta^n$ であるから、
これの期待値は、

$$
  \begin{aligned}
  \int_0^1 \theta^n f(\theta) d \theta
  &=
  12 \int_0^1 \theta^{n+2} (1- \theta) d \theta
  \\
  &=
  \frac{12}{(n+3)(n+4)}
  \end{aligned}
$$

である。