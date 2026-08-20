---
sidebar_label: 2021年1月実施 専門科目I 問題2
tags:
  - Hiroshima-University
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Limit
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2021年1月実施 専門科目I 問題2


## **Author**
samparker, 祭音Myyura

## **Description**
以下の問いに答えよ。

(1) 不定積分 $\int \frac{d\theta}{\sin\theta}$ を求めよ。

(2) 領域 $\left\{(x,y) \in \mathbb{R}^2 \mid |xy| \geq 1, x^2 + y^2 \leq R^2 \right\}, R \geq 0$ の面積 $S(R)$ を求めよ。

(3) $\lim_{R \to \infty} \frac{S(R)}{\pi R^2}$ を求めよ。

--------------------------------------------------------

Answer the following questions:

(1) Calculate the integral: $\int \frac{d\theta}{\sin\theta}.$

(2) Find the area $S(R), R \geq 0,$ of the region $\left\{(x,y) \in \mathbb{R}^2 \mid |xy| \geq 1, x^2 + y^2 \leq R^2 \right\}.$

(3) Find the limit: $\lim_{R \to \infty} \frac{S(R)}{\pi R^2}.$

### 题目描述

回答以下各问：

1. 求不定积分

   $$
   \int\frac{d\theta}{\sin\theta}.
   $$

2. 对 $R\ge0$，求区域

   $$
   \{(x,y)\in\mathbb R^2:\ |xy|\ge1,\ x^2+y^2\le R^2\}
   $$

   的面积 $S(R)$。
3. 求极限

   $$
   \lim_{R\to\infty}\frac{S(R)}{\pi R^2}.
   $$

## **Kai**
### (1)

$$
\int \frac{1}{\sin \theta} d \theta = \int \frac{\sin \theta}{\sin^2 \theta} d \theta = \int \frac{\sin \theta}{1 - \cos^2 \theta} d\theta
$$

substitute $\cos \theta$ by $t$, we have

$$
\begin{aligned}
\int \frac{\sin \theta}{1 - \cos^2 \theta} d\theta &= \int \frac{-dt}{1-t^2} = \int \frac{-dt}{(1+t)(1-t)} \\
&= -\frac{1}{2} \int \left( \frac{1}{1-t} + \frac{1}{1+t} \right) dt \\
&= -\frac{1}{2} (-\log |1-t| + \log |1+t|) + C \\
&= -\frac{1}{2} \log \left| \frac{1+t}{1-t} \right| + C \\
&= \frac{1}{2} \log \left| \frac{1-t}{1+t} \right| + C \\
&= \frac{1}{2} \log \left( \frac{1 - \cos \theta}{1 + \cos \theta} \right) + C
\end{aligned}
$$

### (2)
In polar coordinates,

$$
|xy|=\frac{r^2}{2}|\sin2\theta|.
$$

Hence $S(R)=0$ for $0\leq R\leq\sqrt2$. For $R>\sqrt2$, put

$$
\theta_0=\frac12\arcsin\frac{2}{R^2}.
$$

Using symmetry in the four quadrants,

$$
\begin{aligned}
S(R)
&=4\int_{\theta_0}^{\frac{\pi}{2}-\theta_0}
\int_{\sqrt{2/\sin2\theta}}^R r\,dr\,d\theta\\
&=2R^2\left(\frac{\pi}{2}-2\theta_0\right)
-4\ln(\cot\theta_0)\\
&=\pi R^2-2R^2\arcsin\frac{2}{R^2}
-4\ln\!\left(\cot\!\left(\frac12\arcsin\frac{2}{R^2}\right)\right).
\end{aligned}
$$

### (3)

$$
\cot\theta_0
=\frac{R^2}{2}\left(1+\sqrt{1-\frac4{R^4}}\right),
$$

so $\ln(\cot\theta_0)=O(\ln R)$. Therefore

$$
\lim_{R\to\infty}\frac{S(R)}{\pi R^2}=1.
$$
