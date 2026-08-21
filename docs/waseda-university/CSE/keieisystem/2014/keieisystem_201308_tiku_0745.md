---
sidebar_label: "2013年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$n > m > 0$ を二つの整数としたとき、次を一つの2項係数 (binomial coefficient) で表せ.

$$
\sum_{k=m}^{n} {k \choose m}
$$

ただし、2項係数 ${k \choose m}$ は次式によって定義される.

$$
{k \choose m} = \frac{k!}{m!(k-m)!}
$$

### 题目描述

设 $n>m>0$ 为两个整数。将下式表示为一个二项式系数：

$$
\sum_{k=m}^{n}{k\choose m}.
$$

其中，二项式系数定义为

$$
{k\choose m}=\frac{k!}{m!(k-m)!}.
$$

## **Kai**

We want to evaluate the sum $\sum_{k=m}^n {k \choose m}$ .

Using the identity ${k \choose m} = {k+1 \choose m+1} - {k \choose m+1}$ , we have:

$$
\sum_{k=m}^n {k \choose m} = \sum_{k=m}^n \left( {k+1 \choose m+1} - {k \choose m+1} \right)
$$

This is a telescoping sum. So,

$$
\sum_{k=m}^n {k \choose m} = \left( {m+1 \choose m+1} - {m \choose m+1} \right) + \left( {m+2 \choose m+1} - {m+1 \choose m+1} \right) + \dots + \left( {n+1 \choose m+1} - {n \choose m+1} \right)
$$

Since ${m \choose m+1} = 0$ , we get

$$
\sum_{k=m}^n {k \choose m} = {n+1 \choose m+1}
$$

Therefore, the sum $\sum_{k=m}^n {k \choose m}$ can be expressed as a single binomial coefficient ${n+1 \choose m+1}$ .
