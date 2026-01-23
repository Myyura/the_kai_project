---
sidebar_label: "2022年8月実施 数学 IV"
tags:
  - Kanazawa-University
  - Fourier-Analysis
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 数学 IV

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
$f(x)=\pi-2x\ (0\le x\le \pi),\ g(x)=x(\pi-x)\ (0\le x\le \pi)$ とする。

**問1**　$f(x)$ に対するフーリエ正弦級数と $g(x)$ に対するフーリエ余弦級数をそれぞれ求めよ。

**問2**　微分方程式

$$
y''-4y=g(x)\quad (0<x<\pi)
$$

の解 $y(x)$ をフーリエ余弦級数の形で求めよ。

## **Kai**
### 問1
（奇関数拡張・偶関数拡張）

$$
f(x)=\sum_{m=1}^\infty \frac{2}{m}\sin(2mx)
$$

$$
g(x)=\frac{\pi^2}{6}-\sum_{m=1}^\infty \frac{1}{m^2}\cos(2mx)
$$

### 問2

$$
y(x)=\frac{a_0}{2}+\sum_{n=1}^\infty a_n\cos(nx)
$$

とし、項別微分と未定係数法より

$$
y(x)=-\frac{\pi^2}{24}+\sum_{m=1}^\infty \frac{1}{4m^2(m^2+1)}\cos(2mx)
$$
