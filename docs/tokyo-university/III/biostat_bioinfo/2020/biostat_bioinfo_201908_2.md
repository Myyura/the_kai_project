---
sidebar_label: "2019年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Minimum-of-Independent-Exponentials
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Estimator-Bias
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年8月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 題意の要約

[公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2020/05/33d0876fac7c7139408cdba66732a39b-1.pdf)

独立同分布の $X_1,\ldots,X_n$ は密度 $f(x;\gamma)=\gamma^{-1}e^{-x/\gamma}$（$x>0,\gamma>0$）を持つ。$X_{(i)}$ は昇順の順序統計量。

1. $E[X_1]$。
2. $X_{(1)}$ の密度と平均。
3. $X_1,X_{(1)}$ の歪度 $E[(Y-EY)^3]/\operatorname{SD}(Y)^3$。
4. $n\ge2$ とし、$T_n=\sum_{i=2}^nX_{(i)}/(n-1)$ のバイアス $E[T_n]-\gamma$。

### 题目描述

设参数 $\gamma>0$，随机变量 $X_1,\ldots,X_n$ 独立同分布，其密度为

$$
f(x;\gamma)=
\begin{cases}
\dfrac1\gamma e^{-x/\gamma},&x>0,\\
0,&\text{其他}.
\end{cases}
$$

把样本按升序记为 $X_{(1)},\ldots,X_{(n)}$。

1. 求 $E[X_1]$。
2. 求 $X_{(1)}$ 的密度与期望。
3. 分别求 $X_1$ 与 $X_{(1)}$ 的偏度；随机变量 $Y$ 的偏度定义为 $E[(Y-\mu_Y)^3]/\sigma_Y^3$。
4. 令

   $$
   T_n=\frac1{n-1}\sum_{i=2}^nX_{(i)}.
   $$

   把 $T_n$ 作为 $\gamma$ 的估计量，求其偏差 $E[T_n]-\gamma$。

## **Kai**
### (2-1)

$$
\begin{aligned}
E[X_1]
&= \int_{- \infty}^\infty x f(x; \gamma) dx
\\
&= \frac{1}{\gamma} \int_0^\infty x e^{- x / \gamma } dx
\\
&= - \int_0^\infty x \left( e^{- x / \gamma } \right)' dx
\\
&= - \left[ x e^{- x / \gamma } \right]_0^\infty
+ \int_0^\infty e^{- x / \gamma } dx
\\
&= - \gamma \left[ e^{- x / \gamma } \right]_0^\infty
\\
&= \gamma
\end{aligned}
$$

### (2-2)

$$
\begin{aligned}
P \left( X_{(1)} \leq x \right)
&=
1 - P \left( X_{(1)} \gt x \right)
\\
&=
1 - P \left( X_1 \gt x \text{ and }
X_2 \gt x \text{ and } \cdots \text{ and } X_n \gt x \right)
\\
&=
1 - P ( X_1 \gt x ) P ( X_2 \gt x ) \cdots P ( X_n \gt x )
\\
&=
1 -
\left( \frac{1}{\gamma} \int_x^\infty e^{ - y / \gamma } dy \right)^n
\\
&=
1 -
\left( - \left[ e^{ - y / \gamma } \right]_x^\infty \right)^n
\\
&=
1 - \left( e^{ - x / \gamma } \right)^n
\\
&=
1 - e^{ - nx / \gamma }
\end{aligned}
$$

であるから、

$$
\begin{aligned}
f_{(1)}(x; \gamma)
&=
\begin{cases}
\dfrac{n}{\gamma}e^{-nx/\gamma},&x>0,\\
0,&x\leq 0,
\end{cases}
\\
E[X_{(1)}]
&= \frac{\gamma}{n}
\end{aligned}
$$

### (2-3)

指数分布のモーメントより

$$
E[X_1^k]=k!\gamma^k.
$$

したがって、

$$
\begin{aligned}
\operatorname{Var}(X_1)&=2\gamma^2-\gamma^2=\gamma^2,\\
E[(X_1-\gamma)^3]
&=6\gamma^3-3\gamma\cdot2\gamma^2+2\gamma^3
=2\gamma^3.
\end{aligned}
$$

よって $X_1$ の歪度は

$$
\frac{2\gamma^3}{(\gamma^2)^{3/2}}=2.
$$

また、$X_{(1)}$ は尺度母数 $\gamma/n$ の指数分布に従うので、その歪度も $2$ である。

### (2-4)

$$
\begin{aligned}
T_n
&=
\frac{1}{n-1} \sum_{i=2}^n X_{(i)}
\\
&=
\frac{1}{n-1} \sum_{i=1}^n X_{(i)}
- \frac{1}{n-1} X_{(1)}
\\
&=
\frac{1}{n-1} \sum_{i=1}^n X_i
- \frac{1}{n-1} X_{(1)}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
E[T_n]
&=
\frac{1}{n-1} \sum_{i=1}^n E[X_i]
- \frac{1}{n-1} E[X_{(1)}]
\\
&=
\frac{n \gamma}{n-1} - \frac{\gamma}{n(n-1)}
\\
&=
\left( 1 + \frac{1}{n} \right) \gamma
\end{aligned}
$$

より、

$$
\begin{aligned}
E[T_n] - \gamma
&=
\frac{1}{n} \gamma
\end{aligned}
$$
