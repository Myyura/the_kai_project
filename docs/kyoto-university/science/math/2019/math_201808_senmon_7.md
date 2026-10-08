---
sidebar_label: "2018年8月実施 専門科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Volterra-Operator-Compactness-and-Singular-Values
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年8月実施 専門科目 [7]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$C([0,1])$ を区間 $[0,1]$ 上の連続関数全体のなす複素 Banach 空間、$L^2([0,1])$ を $[0,1]$ 上の二乗可積分な関数全体のなす複素 Hilbert 空間とする。

$u\in L^2([0,1])$ に対して

$$
(Tu)(t)=\int_0^t u(s)\,ds
\qquad(t\in[0,1])
$$

とする。

(1) $T$ を $L^2([0,1])$ から $C([0,1])$ への作用素とみなすとき、$T$ はコンパクト作用素であることを示せ。

(2) $T$ を $L^2([0,1])$ から $L^2([0,1])$ への作用素とみなす。$T$ の共役作用素を $T^*$ とするとき、作用素 $T^*T$ の固有値をすべて求めよ。

#### 题目描述

设 $C([0,1])$ 为复值连续函数组成的 Banach 空间，$L^2([0,1])$ 为复值平方可积函数组成的 Hilbert 空间。定义

$$
(Tu)(t)=\int_0^t u(s)\,ds,\qquad t\in[0,1].
$$

(1) 将 $T$ 视为 $L^2([0,1])\to C([0,1])$ 的算子，证明 $T$ 紧致。

(2) 将 $T$ 视为 $L^2([0,1])\to L^2([0,1])$ 的算子，记其伴随为 $T^*$，求 $T^*T$ 的全部特征值。

## **Kai**

### (1)

$\|u\|_2\le1$ とする。Cauchy–Schwarz の不等式により

$$
|(Tu)(t)|\le\sqrt t\,\|u\|_2\le1
$$

であり、$0\le s\le t\le1$ に対して

$$
|(Tu)(t)-(Tu)(s)|
\le\int_s^t|u(r)|\,dr
\le\sqrt{t-s}\,\|u\|_2
\le\sqrt{t-s}.
$$

したがって、$T$ は $L^2$ の単位球を一様有界かつ同程度連続な関数族に写す。Arzelà–Ascoli の定理より、この像は $C([0,1])$ の一様ノルムで相対コンパクトである。よって $T:L^2\to C$ はコンパクト作用素である。

### (2)

内積を $\langle u,v\rangle=\int_0^1u(t)\overline{v(t)}\,dt$ とする。積分順序を交換すると、

$$
\begin{aligned}
\langle Tu,v\rangle
&=\int_0^1\int_0^t u(s)\overline{v(t)}\,ds\,dt\\
&=\int_0^1u(s)\overline{\left(\int_s^1v(t)\,dt\right)}\,ds.
\end{aligned}
$$

したがって

$$
(T^*v)(t)=\int_t^1v(s)\,ds,
\qquad
(T^*Tu)(t)=\int_t^1\int_0^s u(r)\,dr\,ds.
$$

$K=T^*T$ と書く。$Tu=0$ なら、その絶対連続な代表元を微分して $u=0$ を得るので、$T$ は単射である。このため $u\ne0$ に対して

$$
\langle Ku,u\rangle=\|Tu\|_2^2>0.
$$

よって $K$ の固有値はすべて正であり、$0$ は固有値ではない。

$Ku=\lambda u$（$u\ne0,\lambda>0$）とする。$q=Ku$ は

$$
q'(t)=-(Tu)(t),\qquad q''(t)=-u(t),\qquad
q'(0)=0,\quad q(1)=0
$$

を満たす。初め第二式はほとんど至る所で成立するが、$u=q/\lambda$ が連続となるので $q,u$ は $C^2$ 級になり、

$$
u''+\lambda^{-1}u=0,\qquad u'(0)=0,\quad u(1)=0
$$

が通常の意味で成り立つ。$\omega=\lambda^{-1/2}>0$ と置けば、$u'(0)=0$ より $u(t)=c\cos(\omega t)$ であり、$c\ne0$ と $u(1)=0$ から

$$
\omega=\left(k+\frac12\right)\pi,\qquad k=0,1,2,\ldots.
$$

逆に、これらの $\omega$ について

$$
K(\cos(\omega t))
=\frac{\cos(\omega t)-\cos\omega}{\omega^2}
=\frac{\cos(\omega t)}{\omega^2}.
$$

したがって、求める固有値は

$$
\boxed{\lambda_k=\frac{4}{(2k+1)^2\pi^2},
\qquad k=0,1,2,\ldots}.
$$

## **Reference**

- [京都大学公式問題（2019年度・専門科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_senmon.pdf)
- [照合用参考解答（2019年度・専門科目 問題7、PDF 4–6ページ）](https://drive.google.com/file/d/1MAZDX0zU8Pe3RWo9Nh835ZeyUE-uAMJN/view)
