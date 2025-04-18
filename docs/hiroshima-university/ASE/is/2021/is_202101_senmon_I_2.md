---
sidebar_label: "2021年1月実施 専門科目I 問題2"
tags:
  - Hiroshima-University
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
Since $(x^2 + y^2) / 2 \geq \sqrt{x^2 y^2}$, we have

$$
x^2 + y^2 \geq 2 |xy| \geq 2
$$

Hence the region can be rewritten as $\{(x,y) \in \mathbb{R}^2 \mid 2 \leq x^2 + y^2 \leq R^2\}$, and the area of which is

$$
S(R) = \pi R^2 - \pi \cdot2 = \pi (R^2 - 2)
$$

### (3)

$$
\lim_{R \to \infty} \frac{S(R)}{\pi R^2} = \lim_{R \to \infty} \frac{\pi (R^2 - 2)}{\pi R^2} = \lim_{R \to \infty} \left(1 - \frac{2}{R^2} \right) = 1
$$
