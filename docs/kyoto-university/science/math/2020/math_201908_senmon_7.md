---
sidebar_label: "2020年度 専門科目 問題7"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
  - Mathematics.Calculus.Intermediate-Value-Theorem
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mu$ は区間 $(0,\infty)$ 上の Borel 測度であって、条件

$$
\int_{(0,\infty)}\frac1{1+y}\,\mu(dy)<\infty,
\qquad
\int_{(0,1]}\frac1y\,\mu(dy)=\infty
$$

を満たすとし、$[0,\infty)$ 上の関数 $f$ を

$$
f(x)=\int_{(0,\infty)}\frac{1-2e^{-x/y}}{e^{-x}+y}\,\mu(dy)
$$

で定める。

1. $f:[0,\infty)\to\mathbb R$ は連続であることを示せ。
2. $f(x)=0$ を満たす $x\in(0,\infty)$ が存在することを示せ。

#### 题目描述

设 $(0,\infty)$ 上的 Borel 测度 $\mu$ 满足

$$
\int_{(0,\infty)}\frac{\mu(dy)}{1+y}<\infty,
\qquad
\int_{(0,1]}\frac{\mu(dy)}y=\infty.
$$

对 $x\ge0$ 定义

$$
f(x)=\int_{(0,\infty)}\frac{1-2e^{-x/y}}{e^{-x}+y}\,\mu(dy).
$$

1. 证明 $f$ 在 $[0,\infty)$ 上连续。
2. 证明存在 $x>0$ 使 $f(x)=0$。

## **Kai**

### (1)

任意の $R>0$ を固定する。$0\le x\le R,y>0$ に対して

$$
|1-2e^{-x/y}|\le1,
\qquad e^{-x}+y\ge e^{-R}(1+y)
$$

なので、

$$
\left|\frac{1-2e^{-x/y}}{e^{-x}+y}\right|
\le\frac{e^R}{1+y}.
$$

右辺は仮定より $\mu$ 可積分である。被積分関数は各 $y>0$ について $x$ の連続関数だから、優収束定理により $f$ は $[0,R]$ 上連続である。$R$ は任意なので $[0,\infty)$ 上連続である。

### (2)

$\mu$ は零測度でないので、

$$
f(0)=-\int_{(0,\infty)}\frac1{1+y}\,\mu(dy)<0.
$$

$x\ge1$、$0<y\le1$ なら $1-2e^{-x/y}\ge1-2/e=:c>0$ であり、$y>1$ では被積分関数は $-1/y$ 以上である。よって

$$
f(x)\ge c\int_{(0,1]}\frac1{e^{-x}+y}\,\mu(dy)
-\int_{(1,\infty)}\frac1y\,\mu(dy).
$$

第 $2$ 項は $1/y\le2/(1+y)\ (y>1)$ より有限である。第 $1$ 項は単調収束定理により

$$
\int_{(0,1]}\frac1{e^{-x}+y}\,\mu(dy)
\longrightarrow\int_{(0,1]}\frac1y\,\mu(dy)=\infty.
$$

したがって $f(x)\to+\infty$ であり、ある $b>0$ で $f(b)>0$ となる。(1) と中間値の定理から、$f(x)=0$ を満たす $x\in(0,b)$ が存在する。

## **Reference**

- [京都大学公式問題（2020年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_senmon_for2020.pdf)
- [照合用参考解答（2020年度・専門科目 問題7、PDF 4–5ページ）](https://drive.google.com/file/d/10upeyfZ8mq7YTmqu-jTKAehwFwgCszNS/view)
