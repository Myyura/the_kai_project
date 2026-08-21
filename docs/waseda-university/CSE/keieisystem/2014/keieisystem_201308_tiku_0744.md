---
sidebar_label: "2013年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の定積分 (definite integral) を計算せよ.

$$
I = \int_{0}^{1} \frac{1}{4-x^2} dx
$$

### 题目描述

计算定积分

$$
I=\int_{0}^{1}\frac{1}{4-x^2}\,dx.
$$

## **Kai**

We can evaluate the integral by using partial fractions. First, we can write

$$
\frac{1}{4-x^2} = \frac{1}{(2-x)(2+x)} = \frac{A}{2-x} + \frac{B}{2+x}
$$

Multiplying both sides by $4-x^2$ , we get

$$
1 = A(2+x) + B(2-x) = (A-B)x + 2A + 2B
$$

Comparing coefficients, we have the following system of equations:

$$
A-B = 0
$$

$$
2A + 2B = 1
$$

From the first equation, $A=B$ . Substituting this into the second equation, we have $4A=1$ , so $A = \frac{1}{4}$ and $B = \frac{1}{4}$ . Thus,

$$
\frac{1}{4-x^2} = \frac{1}{4} \left(\frac{1}{2-x} + \frac{1}{2+x}\right)
$$

Now we can evaluate the integral:

$$
I = \int_0^1 \frac{1}{4-x^2} dx = \frac{1}{4} \int_0^1 \left(\frac{1}{2-x} + \frac{1}{2+x}\right) dx
$$

$$
I = \frac{1}{4} \left[ -\ln|2-x| + \ln|2+x| \right]_0^1 = \frac{1}{4} \left[ \ln\left|\frac{2+x}{2-x}\right| \right]_0^1
$$

$$
I = \frac{1}{4} \left( \ln\left(\frac{2+1}{2-1}\right) - \ln\left(\frac{2+0}{2-0}\right) \right) = \frac{1}{4} \left( \ln(3) - \ln(1) \right) = \frac{1}{4}(\ln 3 - 0) = \frac{1}{4} \ln 3
$$

So, the integral is

$$
I = \frac{\ln 3}{4}
$$

Final Answer: The final answer is $\boxed{\frac{\ln 3}{4}}$
