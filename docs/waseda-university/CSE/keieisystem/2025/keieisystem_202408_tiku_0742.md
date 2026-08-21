---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の関数が確率密度関数となるように、定数 $a$ の値を定めよ。

$$
f(x) = a \exp \left\{-\frac{(x-4)^2}{50}\right\}
$$

### 题目描述

确定常数 $a$，使定义在实数轴上的函数

$$
f(x)=a\exp\left\{-\frac{(x-4)^2}{50}\right\}
$$

成为概率密度函数。

## **Kai**

確率密度関数であるためには、以下の条件を満たす必要があります。

1. $f(x) \geq 0$ for all $x$
2. $\int_{-\infty}^{\infty} f(x) dx = 1$

与えられた関数は $f(x) = a \exp \left\{-\frac{(x-4)^2}{50}\right\}$ です。これはガウス関数（正規分布の密度関数）の形をしています。 $a>0$ であれば、 $f(x)\geq 0$ は満たされます。

次に、積分条件を適用します。

$$
\int_{-\infty}^{\infty} a \exp \left\{-\frac{(x-4)^2}{50}\right\} dx = 1
$$

変数を変換します。 $u = x - 4$ とすると、 $du = dx$ であり、積分範囲は $-\infty$ から $\infty$ のままです。

$$
\int_{-\infty}^{\infty} a \exp \left\{-\frac{u^2}{50}\right\} du = 1
$$

ここで、ガウス積分の公式 $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}$ を利用します。この場合、 $a = \frac{1}{50}$ です。

$$
\int_{-\infty}^{\infty} \exp \left\{-\frac{u^2}{50}\right\} du = \sqrt{\frac{\pi}{\frac{1}{50}}} = \sqrt{50\pi} = 5\sqrt{2\pi}
$$

したがって、

$$
a \cdot 5\sqrt{2\pi} = 1
$$

$$
a = \frac{1}{5\sqrt{2\pi}} = \frac{1}{5\sqrt{2\pi}} \cdot \frac{\sqrt{2\pi}}{\sqrt{2\pi}} = \frac{\sqrt{2\pi}}{10\pi}
$$

$$
a = \frac{1}{5\sqrt{2\pi}}
$$
