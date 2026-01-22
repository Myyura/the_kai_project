---
sidebar_label: "2022年8月実施 数学 III"
tags:
  - Kanazawa-University
  - Complex-Analysis
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 数学 III

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
$a,b$ を定数として，複素関数

$$
f(z)=\frac{az^2+bz+1}{z^2(z-1)^2}\sin\left(\frac{\pi}{2}z\right)
$$

を考える。次の問いに答えよ。

**問1**　$a,b$ の値に応じて，複素平面上にある関数 $f(z)$ の特異点をすべて求めよ。

**問2**　関数 $f(z)$ の各々の極における留数を計算せよ。

**問3**　複素積分

$$
\int_{|z|=R} f(z),dz
$$

の値が $0$ であるような $a,b$ の値の組を 1 つ求めよ。ただし積分路 $\{|z|=R\}\ (R>2)$ は複素平面の原点を中心とし半径が $R$ の正に向き付けられた円である。

## **Kai**
### 問1

- $z=0$ は $f(z)$ の $1$ 位の極。
- $a+b+1\ne 0$ なら $z=1$ は $2$ 位の極。
- $a+b+1=0,\ b\ne -2$ なら $z=1$ は $1$ 位の極。

### 問2

$$
\operatorname{Res}(f,0)=\frac{\pi}{2},\qquad \operatorname{Res}(f,1)=-(b+2)
$$

### 問3
留数定理から

$$
\left|\int_{|z|=R} f(z)\ dz\right|=2\pi\left|\frac{\pi}{2}-(b+2)\right|
$$

より、例えば

$$
(a,b)=\left(0,\frac{\pi}{2}-2\right)
$$
