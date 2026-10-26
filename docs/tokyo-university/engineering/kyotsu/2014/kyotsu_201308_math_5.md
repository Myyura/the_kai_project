---
sidebar_label: '2013年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Differential-Equations.Volterra-Integral-Equation
---

# 東京大学 工学系研究科 2013年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問いに答えよ。導出過程も示すこと。ただし、$e$ は自然対数の底とする。

### I

$t$ を実数とする。$2$ つの関数 $f(t)$ と $g(t)$ の畳み込み積分は、

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau\tag{1}
$$

によって定義される。この定義に従って、$f(t),g(t)$ が以下のように与えられたときの畳み込み積分を求めよ。ただし、$\omega$ は実数の定数である。

1. $f(t)=\cos(\omega t)$、$g(t)=\sin(\omega t)$
2. $f(t)=e^t$、$g(t)=e^{-t}$

### II

関数 $f(t)$ のラプラス変換 $F(s)=L[f(t)]$ は次式で定義される。ただし $s$ は複素数である。

$$
F(s)=L[f(t)]=\int_0^\infty f(t)e^{-st}\,dt\tag{2}
$$

また、式 (1) で定義された畳み込み積分 $(f*g)(t)$ について、

$$
L[(f*g)(t)]=L[f(t)]L[g(t)]\tag{3}
$$

が成り立つ。今、$2$ つの関数 $q(t)$ と $r(t)$ を下のように定める。

$$
q(t)=u(t)-u(t-1)\tag{4}
$$

$$
r(t)=t+\sin(2\pi t)\tag{5}
$$

ただし、$u(t)$ は以下のように定義される。

$$
u(t)=\begin{cases}0&t\le0,\\1&t>0.\end{cases}\tag{6}
$$

1. $0\le t<4$ の範囲で $q(t)$ および $r(t)$ の概形をそれぞれ図示せよ。
2. $q(t)$ および $r(t)$ のラプラス変換を求めよ。
3. $y(t)=(q*r)(t)$ と定義する。$y(t)$ を求めよ。また、$0\le t<4$ の範囲でその概形を図示せよ。必要があれば、$a\ge0$ に対して $L[f(t-a)u(t-a)]=e^{-as}F(s)$ が成り立つことを用いよ。

### III

次の積分方程式の解 $x(t)$ を求めよ。

$$
x(t)+2e^t\int_0^t x(\tau)e^{-\tau}\,d\tau=te^t\tag{7}
$$

### 题目描述

回答以下问题，并写出推导过程。$e$ 为自然对数的底。

**I** 设 $t$ 为实数。两个函数 $f(t),g(t)$ 的卷积积分定义为

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau.\tag{1}
$$

按此定义，求以下各组 $f(t),g(t)$ 的卷积积分。其中 $\omega$ 为实常数。

1. $f(t)=\cos(\omega t)$、$g(t)=\sin(\omega t)$
2. $f(t)=e^t$、$g(t)=e^{-t}$

**II** 函数 $f(t)$ 的拉普拉斯变换 $F(s)=L[f(t)]$ 定义如下，其中 $s$ 为复数。

$$
F(s)=L[f(t)]=\int_0^\infty f(t)e^{-st}\,dt.\tag{2}
$$

对于式 (1) 定义的卷积积分 $(f*g)(t)$，有

$$
L[(f*g)(t)]=L[f(t)]L[g(t)].\tag{3}
$$

现定义两个函数 $q(t),r(t)$ 如下。

$$
q(t)=u(t)-u(t-1)\tag{4}
$$

$$
r(t)=t+\sin(2\pi t)\tag{5}
$$

其中 $u(t)$ 定义为

$$
u(t)=\begin{cases}0&t\le0,\\1&t>0.\end{cases}\tag{6}
$$

1. 分别画出 $q(t),r(t)$ 在 $0\le t<4$ 范围内的大致图形。
2. 求 $q(t),r(t)$ 的拉普拉斯变换。
3. 定义 $y(t)=(q*r)(t)$。求 $y(t)$，并画出其在 $0\le t<4$ 范围内的大致图形。必要时，可以使用对 $a\ge0$ 成立的关系 $L[f(t-a)u(t-a)]=e^{-as}F(s)$。

**III** 求下列积分方程的解 $x(t)$。

$$
x(t)+2e^t\int_0^t x(\tau)e^{-\tau}\,d\tau=te^t.\tag{7}
$$

## **Kai**

### I

1. 積和公式を用いると、$\tau-t/2$ の奇関数の項は積分で消えるので、

$$
\int_0^t\cos\omega\tau\sin\omega(t-\tau)\,d\tau
=\boxed{\frac t2\sin\omega t}.
$$

2. $\displaystyle e^{-t}\int_0^t e^{2\tau}\,d\tau=\boxed{\sinh t}$。

### II

$q(t)$ は $(0,1]$ で $1$、それ以外で $0$。$r(t)$ は直線 $t$ に周期 $1$ の正弦波を加えたものである。
定義から積分して、

$$
\begin{gathered}
\boxed{Q(s)=\frac{1-e^{-s}}s,\qquad R(s)=\frac1{s^2}+\frac{2\pi}{s^2+4\pi^2}}\\
(\operatorname{Re}s>0).
\end{gathered}
$$

$H(t)=\int_0^t r(v)\,dv=t^2/2+(1-\cos2\pi t)/(2\pi)$ とおくと、

$$
\begin{gathered}
y(t)=H(t)-u(t-1)H(t-1)\\
=\boxed{\begin{cases}
\dfrac{t^2}2+\dfrac{1-\cos2\pi t}{2\pi},&0\le t\le1,\\
t-\dfrac12,&t>1.
\end{cases}}
\end{gathered}
$$

![q(t)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/kyotsu/2014/kyotsu_201308_math_5_answer_layout_1.svg)

![r(t)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/kyotsu/2014/kyotsu_201308_math_5_answer_layout_2.svg)

![y(t)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/kyotsu/2014/kyotsu_201308_math_5_answer_layout_3.svg)

$0<t<1$ では $y'(t)=t+\sin(2\pi t)$ であるため、全区間で単調増加するわけではない。例えば $y'(3/4)=-1/4<0$ である。

### III

$v(t)=e^{-t}x(t)$ とおくと、方程式は $v(t)+2\int_0^t v(\tau)\,d\tau=t$ となる。
$t=0$ より $v(0)=0$。微分して $v'+2v=1$ を解くと、

$$
\boxed{x(t)=\frac12(e^t-e^{-t})=\sinh t}.
$$

## **Reference**

- [東京大学 平成26年度 数学原題（公式公開PDFの保存版）](https://web.archive.org/web/20160418005150id_/http://www.t.u-tokyo.ac.jp:80/soe/admission/data/2014mathJ.pdf)
