---
sidebar_label: "2020年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2020年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

以下の問いに答えよ．

(1) 極限

$$
\lim_{x\to1}\frac{\log x-a_0-a_1(x-1)-a_2(x-1)^2}{(x-1)^3}
$$

が有限確定となるような実数 $a_0,a_1,a_2$ を求めよ．

(2) 極限

$$
\lim_{\varepsilon\to+0}\left(\int_{1/2}^{1-\varepsilon}+\int_{1+\varepsilon}^{3/2}\right)\frac{\log x}{(x-1)^2}\,dx
$$

が存在することを示せ．

### 题目描述

本卷共有4题，全部作答。

回答下列问题。

(1) 求使下列极限存在且为有限值的实数 $a_0,a_1,a_2$：

$$
\lim_{x\to1}\frac{\log x-a_0-a_1(x-1)-a_2(x-1)^2}{(x-1)^3}.
$$

(2) 证明下列极限存在：

$$
\lim_{\varepsilon\to+0}\left(\int_{1/2}^{1-\varepsilon}+\int_{1+\varepsilon}^{3/2}\right)\frac{\log x}{(x-1)^2}\,dx.
$$

## **Kai**

### (1)

$h=x-1$ とおく．テイラー展開

$$
\log(1+h)=h-\frac{h^2}{2}+\frac{h^3}{3}+O(h^4)
$$

より，分子は

$$
-a_0+(1-a_1)h+\left(-\frac12-a_2\right)h^2+\frac13h^3+O(h^4).
$$

$h^3$ で割った極限が有限となるには，次数 $0,1,2$ の係数がすべて $0$ であることが必要十分である．したがって

$$
\boxed{a_0=0,\qquad a_1=1,\qquad a_2=-\frac12}.
$$

このとき極限値は $1/3$ である．

### (2)

$x\ne1$ に対して

$$
R(x)=\frac{\log x-(x-1)}{(x-1)^2}
$$

とおく．(1) の展開から $R(x)\to-1/2$（$x\to1$）なので，$R(1)=-1/2$ と定めれば $R$ は $[1/2,3/2]$ 上の連続関数となる．

$$
\frac{\log x}{(x-1)^2}=\frac1{x-1}+R(x)
$$

であり，$0<\varepsilon<1/2$ について

$$
\left(\int_{1/2}^{1-\varepsilon}+\int_{1+\varepsilon}^{3/2}\right)\frac{dx}{x-1}=0.
$$

したがって求める極限は $\int_{1/2}^{3/2}R(x)\,dx$ に等しく，有限に存在する．

## **Reference**

- [東北大学公式問題の保存版（2021年度・共通問題，2021(R3)kyotsu.pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#be6fbb7d-3733-4147-b413-77e5b63cd1b8)
