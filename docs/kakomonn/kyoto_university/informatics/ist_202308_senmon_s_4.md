---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-4

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/06/26/gWhJczvi4enyYFx.png" width="640"/>
</figure>


## **Kai**
### 設問1

$$
H(p,1-p) = -p \log p-(1-p) \log (1-p)
$$

$$
Max\{H\}=H(0.5,0.5)=1, Min\{H\}=0
$$

### 設問2
Let $F(p,q)=-(m+1)p \log p-(m-1)q \log q$. Given $(m-1)q+(m+1)p=1$

$$
F'(p)=(m+1) \log \frac{1-(m+1)p}{(m-1)p}
$$

So when $p=\frac{1}{2m}$, we get the maximum $\log m+1$, and minimum $\log(m-1)$ when $p=\frac{1}{m+1}$

### 設問3

$$
C = \{1, 01, 00\}, \bar{N} = \frac{5}{3}
$$

### 設問4

$$
\bar{N} = \frac{m(2m+3)}{2^m+1}
$$

### 設問5
$C=I(X;Y)=H(Y)-H(Y|X)$, where $H(Y)$ could be calculated from $P_Y = P_XP_{Y|X}$. Then, we construct the function

$$
F(p)=\frac{1}{2}-\frac{1+4}{4}\log (1+p)-\frac{2-p}{4}\log (2-p)
$$

Get the maximum when $p=\frac{1}{2}$

$$
C = \frac{5}{4}-\frac{3}{4}\log 3
$$

### 設問6

$$
H(Y)=\frac{n+2}{2(n-1)}-\frac{n}{2(n-1)}\log n+\frac{1}{n-1}\log (n-1)
$$

$$
H(Y|X)=1+\frac{1}{2} \log(n-1)
$$

$$
f(n)=\frac{1}{n-1}-\frac{1}{2}=-\frac{n}{2(n-1)}
$$