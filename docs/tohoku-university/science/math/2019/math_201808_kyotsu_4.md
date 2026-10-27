---
sidebar_label: "2018年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Extrema
---

# 東北大学 大学院理学研究科 数学専攻 2018年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

以下の問いに答えよ．

(1) $\Omega$ をユークリッド平面 $\mathbb{R}^2$ の空でない開集合とし，$f$ を $\Omega$ 上の実数値 $C^1$ 級関数とする．$f$ が点 $(a,b)\in\Omega$ で極大値をとるとき，点 $(a,b)$ は $f$ の臨界点である，すなわち $f$ の $(a,b)$ での $x,y$ に関する偏微分係数は $0$ になる，ことを示せ．

(2) $f(x,y)=(4x^5-5x^4+10)e^{y^2}$ の $\mathbb{R}^2$ における極大値，極小値が存在するなら，それらをすべて求めよ．

(3) $f$ は設問 (2) と同じものとする．$f$ の $D=\{(x,y)\in\mathbb{R}^2\mid -1\le x\le2\}$ における最大値，最小値が存在するなら，それらをすべて求めよ．

### 题目描述

本卷共有4题，全部作答。

回答下列问题。

(1) 设 $\Omega$ 是欧氏平面 $\mathbb{R}^2$ 的非空开集，$f$ 是 $\Omega$ 上的实值 $C^1$ 函数。证明：若 $f$ 在 $(a,b)\in\Omega$ 处取得局部极大值，则 $(a,b)$ 是 $f$ 的临界点，即 $f$ 在该点关于 $x,y$ 的偏导数都为 $0$。

(2) 求 $f(x,y)=(4x^5-5x^4+10)e^{y^2}$ 在 $\mathbb{R}^2$ 上的全部局部极大值和局部极小值；若不存在，也须说明。

(3) 令 $f$ 与第 (2) 问相同，求其在 $D=\{(x,y)\in\mathbb{R}^2\mid -1\le x\le2\}$ 上的最大值与最小值；若不存在，也须说明。

## **Kai**

### (1)

$\Omega$ は開集合なので，十分小さい $h$ に対して $(a+h,b),(a,b+h)\in\Omega$．一変数関数 $h\mapsto f(a+h,b)$ と $h\mapsto f(a,b+h)$ はともに $h=0$ で極大値をとる．フェルマーの定理から

$$
f_x(a,b)=f_y(a,b)=0.
$$

極小値についても $-f$ に同じ議論を適用できる．

### (2)

$P(x)=4x^5-5x^4+10$ とおくと

$$
f_x=20x^3(x-1)e^{y^2},\qquad f_y=2yP(x)e^{y^2}.
$$

$f_x=0$ から $x=0,1$ であり，$P(0)=10$，$P(1)=9$ なので，臨界点は $(0,0),(1,0)$ のみである．

$(0,0)$ では，任意の十分小さい $h\ne0$ に対して

$$
f(h,0)-10=h^4(4h-5)<0,\qquad f(0,h)-10=10(e^{h^2}-1)>0.
$$

よって極値をとらない．一方，$(1,0)$ におけるヘッセ行列は

$$
\begin{pmatrix}20&0\\0&18\end{pmatrix}
$$

で正定値である．したがって，**$(1,0)$ で極小値 $9$ をとり，極大値は存在しない**．

### (3)

$P'(x)=20x^3(x-1)$ より，$P$ は $[-1,0]$ と $[1,2]$ で増加，$[0,1]$ で減少する．

$$
P(-1)=1,\quad P(0)=10,\quad P(1)=9,\quad P(2)=58
$$

なので，$[-1,2]$ で $P(x)\ge1$，等号は $x=-1$ のときのみ成立する．また $e^{y^2}\ge1$ なので，**最小値は $1$，それをとる点は $(-1,0)$** である．

$f(0,y)=10e^{y^2}\to\infty$（$|y|\to\infty$）より，**最大値は存在しない**．

## **Reference**

- [東北大学公式問題の保存版（2019年度・共通問題，kyotsu2019(H31).pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#47779fdf-00da-4ba1-a193-173f95e62626)
