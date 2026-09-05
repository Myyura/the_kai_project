---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の関数 (function) の微分 (derivative)を求めよ。

$$
y = \sqrt[3]{\frac{1-\sqrt{x}}{1+\sqrt{x}}}
$$

### 题目描述

求函数

$$
y=\sqrt[3]{\frac{1-\sqrt{x}}{1+\sqrt{x}}}
$$

的导数。

## **Kai**

To find the derivative of the function  $y = \sqrt[3]{\frac{1-\sqrt{x}}{1+\sqrt{x}}}$ , we can use the chain rule and quotient rule.

Let $u = \frac{1-\sqrt{x}}{1+\sqrt{x}}$ , so $y = u^{\frac{1}{3}}$ .

Then, $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ .

$\frac{dy}{du} = \frac{1}{3} u^{-\frac{2}{3}} = \frac{1}{3} \left(\frac{1-\sqrt{x}}{1+\sqrt{x}}\right)^{-\frac{2}{3}} = \frac{1}{3} \left(\frac{1+\sqrt{x}}{1-\sqrt{x}}\right)^{\frac{2}{3}}$

Now, we need to find $\frac{du}{dx}$ . Using the quotient rule, if $u = \frac{v}{w}$ , then $\frac{du}{dx} = \frac{v'w - vw'}{w^2}$ .
Here, $v = 1 - \sqrt{x}$ and $w = 1 + \sqrt{x}$ .

$v' = \frac{d}{dx}(1 - \sqrt{x}) = -\frac{1}{2\sqrt{x}}$
$w' = \frac{d}{dx}(1 + \sqrt{x}) = \frac{1}{2\sqrt{x}}$

So, $\frac{du}{dx} = \frac{-\frac{1}{2\sqrt{x}}(1+\sqrt{x}) - (1-\sqrt{x})\frac{1}{2\sqrt{x}}}{(1+\sqrt{x})^2} = \frac{-\frac{1}{2\sqrt{x}} - \frac{1}{2} - \frac{1}{2\sqrt{x}} + \frac{1}{2}}{(1+\sqrt{x})^2} = \frac{-\frac{1}{\sqrt{x}}}{(1+\sqrt{x})^2} = -\frac{1}{\sqrt{x}(1+\sqrt{x})^2}$

Now, we can find $\frac{dy}{dx}$ :
$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{3} \left(\frac{1+\sqrt{x}}{1-\sqrt{x}}\right)^{\frac{2}{3}} \cdot \left(-\frac{1}{\sqrt{x}(1+\sqrt{x})^2}\right) = -\frac{1}{3\sqrt{x}(1+\sqrt{x})^{\frac{4}{3}}(1-\sqrt{x})^{\frac{2}{3}}}$

Therefore, the derivative is:

$$
\frac{dy}{dx} = -\frac{1}{3\sqrt{x}(1+\sqrt{x})^{\frac{4}{3}}(1-\sqrt{x})^{\frac{2}{3}}}
$$

ここで分数冪は実立方根を用いて解釈する。特に $(1-\sqrt{x})^{2/3}=|1-\sqrt{x}|^{2/3}$ である。

この有限な導関数は $x>0,\ x\ne1$ で成り立つ。元の関数は $x\ge0$ で定義されるが、 $x=0$ では右差商が発散し、 $x=1$ でも立方根の微分係数が発散するため、いずれも有限な微分係数をもたない。
