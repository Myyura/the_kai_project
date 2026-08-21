---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Limit
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

マクローリン展開 (Maclaurin series)

$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots
$$

を用いて、次の極限 (limit) を求めよ。

$$
\lim_{x \to 0} \frac{1}{x^3} \left\{\log_e(1 + \sin x) - x + \frac{x^2}{2}\right\}
$$

### 题目描述

使用麦克劳林展开

$$
f(x)=f(0)+\frac{f'(0)}{1!}x+\frac{f''(0)}{2!}x^2
+\frac{f'''(0)}{3!}x^3+\cdots
$$

求极限

$$
\lim_{x\to0}\frac1{x^3}
\left\{\log_e(1+\sin x)-x+\frac{x^2}{2}\right\}.
$$

## **Kai**

Let $f(x) = \log_e(1 + \sin x)$ .
Using Maclaurin series expansion:

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots
$$

$$
\log_e(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots
$$

Therefore,

$$
\log_e(1+\sin x) = \sin x - \frac{(\sin x)^2}{2} + \frac{(\sin x)^3}{3} - \dots
$$

$$
\log_e(1+\sin x) = (x - \frac{x^3}{6} + \dots) - \frac{1}{2}(x - \frac{x^3}{6} + \dots)^2 + \frac{1}{3}(x - \frac{x^3}{6} + \dots)^3 - \dots
$$

$$
\log_e(1+\sin x) = x - \frac{x^3}{6} - \frac{1}{2}(x^2 - \frac{x^4}{3} + \dots) + \frac{1}{3}(x^3 - \dots) - \dots
$$

$$
\log_e(1+\sin x) = x - \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^3}{3} + O(x^4) = x - \frac{x^2}{2} + \frac{x^3}{6} + O(x^4)
$$

$$
\log_e(1 + \sin x) - x + \frac{x^2}{2} = x - \frac{x^2}{2} + \frac{x^3}{6} - x + \frac{x^2}{2} + O(x^4) = \frac{x^3}{6} + O(x^4)
$$

$$
\lim_{x \to 0} \frac{1}{x^3} \left\{\log_e(1 + \sin x) - x + \frac{x^2}{2}\right\} = \lim_{x \to 0} \frac{1}{x^3} \left(\frac{x^3}{6} + O(x^4)\right) = \frac{1}{6}
$$
