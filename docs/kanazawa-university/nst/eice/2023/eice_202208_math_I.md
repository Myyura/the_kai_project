---
sidebar_label: "2022年8月実施 数学 I"
tags:
  - Kanazawa-University
  - Differential-Equation
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 数学 I

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
次の微分方程式の一般解を求めよ。（ヒント：(4) は $x^\alpha y^\beta$ の形の積分因子をもつ。）

(1) 

$$
   \frac{d^2y}{dx^2}-\frac{dy}{dx}-2y=0
$$

(2)

$$
   \frac{d^2y}{dx^2}-\frac{dy}{dx}-2y=2x-1
$$

(3)

$$
   \frac{dy}{dx}-2y=y^2
$$

(4)

$$
   (3xy+2y^3)dx+(2x^2+4xy^2)dy=0
$$

## **Kai**
### (1)
特性方程式より

$$
   p^2-p-2=(p+1)(p-2)
   \Rightarrow y=C_1e^{-x}+C_2e^{2x}
$$

### (2)
未定係数法で特殊解 $\eta=Ax+B$ とおくと $\eta=-x+1$。(1) で求めた余関数と合わせて

$$
   y=C_1e^{-x}+C_2e^{2x}-x+1
$$

### (3)
$u=1/y$ とおくと $u'+2u=-1$。

$$
   u=\frac{C-e^{2x}}{2e^{2x}}
   \Rightarrow y=\frac{2e^{2x}}{C-e^{2x}}
$$

### (4)
$xy$ が積分因子になることから完全微分形

$$
   (3x^2y^2+2xy^4)dx+(2x^3y+4x^2y^3)dy=0
$$

一般解

$$
   x^3y^2+x^2y^4=C
$$
