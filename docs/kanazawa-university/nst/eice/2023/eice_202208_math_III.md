---
sidebar_label: 2022年8月実施 数学 III
tags:
  - Kanazawa-University
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Contour-Integration
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 数学 III

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/), 祭音Myyura

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

### 题目描述

设 $a,b$ 为常数，考虑复函数

$$
f(z)=
\frac{az^2+bz+1}{z^2(z-1)^2}
\sin\left(\frac\pi2z\right).
$$

回答下列问题。

1. 根据 $a,b$ 的取值，求 $f(z)$ 在复平面上的全部奇点，并分类说明可能发生的消去。
2. 计算 $f(z)$ 在每一个极点处的留数。
3. 给出一组 $a,b$，使

   $$
   \int_{|z|=R}f(z)\,dz=0.
   $$

   其中积分路径为以原点为圆心、半径 $R>2$ 的正向圆周。

## **Kai**
### 問1

- $z=0$ は $f(z)$ の $1$ 位の極。
- $a+b+1\ne 0$ なら $z=1$ は $2$ 位の極。
- $a+b+1=0,\ b\ne -2$ なら $z=1$ は $1$ 位の極。
- $(a,b)=(1,-2)$ なら $z=1$ は除去可能特異点。

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
