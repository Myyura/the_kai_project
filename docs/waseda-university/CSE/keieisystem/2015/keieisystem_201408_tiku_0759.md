---
sidebar_label: "2014年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Limit
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の問いに答えよ。

(1) 加法定理を用いて, 次式が成り立つことを示せ。

$$
\sin^2 x = \frac{1}{2}(1 - \cos 2x)
$$

(2) 次の極限(limit)を求めよ。

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2}
$$

ただし、

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

を用いてよい。

### 题目描述

回答下列问题。

1. 使用三角函数加法公式证明

   $$
   \sin^2x=\frac12(1-\cos2x).
   $$

2. 求极限

   $$
   \lim_{x\to0}\frac{1-\cos x}{x^2}.
   $$

   可以使用

   $$
   \lim_{x\to0}\frac{\sin x}{x}=1.
   $$

## **Kai**

(1) 证明:
使用加法定理:

$$
\cos(2x) = \cos(x+x) = \cos x \cos x - \sin x \sin x = \cos^2 x - \sin^2 x
$$

所以:

$$
\sin^2 x = \frac{1 - \cos 2x}{2} \iff 2\sin^2 x = 1 - \cos 2x \iff \cos 2x = 1 - 2\sin^2 x
$$

$$
1 - \cos 2x = 1 - (\cos^2 x - \sin^2 x) = 1 - \cos^2 x + \sin^2 x
$$

因为

$$
\cos^2 x + \sin^2 x = 1
$$

, 所以

$$
\cos^2 x = 1 - \sin^2 x
$$

因此:

$$
1 - \cos^2 x + \sin^2 x = 1 - (1-\sin^2 x) + \sin^2 x = 2\sin^2 x
$$

因此,原式成立.

(2) 解:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{(1 - \cos x)(1 + \cos x)}{x^2(1 + \cos x)} = \lim_{x \to 0} \frac{1 - \cos^2 x}{x^2(1 + \cos x)} = \lim_{x \to 0} \frac{\sin^2 x}{x^2(1 + \cos x)}
$$

$$
= \lim_{x \to 0} (\frac{\sin x}{x})^2 \cdot \frac{1}{1 + \cos x} = (\lim_{x \to 0} \frac{\sin x}{x})^2 \cdot \lim_{x \to 0} \frac{1}{1 + \cos x} = 1^2 \cdot \frac{1}{1 + 1} = \frac{1}{2}
$$
