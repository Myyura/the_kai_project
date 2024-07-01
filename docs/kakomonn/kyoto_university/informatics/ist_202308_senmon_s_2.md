---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-2

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/06/26/atJ2ghTnPMlXucW.png" width="640"/>
</figure>


## **Kai**
### 設問1

$$
E[\sum^{n}_{i=1}w_iX_i] = \sum^n_{i=1}w_iE[X_i] = \sum^n_{i=1}w_i\mu \Rightarrow \sum^n_{i=1}w_i = 1
$$

vice versa

### 設問2
#### (1)

$$
L(\mu, \sigma^2) = n \log \frac{1}{\sqrt{2\pi}\sigma} + \frac{1}{2\sigma^2}\sum^n_{i=1}(X_i - \mu)^2
$$

#### (2)

$$
\mu = \frac{1}{n}\sum^n_{i=1}X_i = \bar{X}, \sigma^2 = \frac{1}{n}\sum^n_{i=1}(X_i - \bar{X})^2
$$

### 設問3

$$
Cov(S,T) = -6
$$

### 設問4
#### (1)
It's equivalent to assume that picking 2 from Group Drug A and 3 from Group Drug B, given 5 people is selected as Effective. So the answer is

$$
C_5^3(\frac{5}{9})^2(\frac{4}{9})^3
$$

#### (2)

$$
p = \frac{C_4^3C_5^2}{C_9^5} = \frac{4*5}{126}\approx 0.1587
$$