---
sidebar_label: "2019年8月実施 数理科学 I [4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Power-Series-Solution-and-Coefficient-Recurrence
  - Mathematics.Calculus.Power-Series
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[4\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

実数値関数 $y(x)$ に対する微分方程式

$$
y'-2xy=2x^3\quad(0<x<\infty),\qquad y(0)=0
$$

を考える。解は $y(x)=\sum_{k=0}^\infty C_kx^k$ と表され、項別微分可能とする。ただし、非負整数 $k$ に対して $C_k$ は実数である。

(1) $C_0,C_1,C_2,C_3,C_4$ を求めよ。

(2) 非負整数 $j$ に対して $C_{2j+1}$ を求めよ。

(3) $j$ を2以上の整数として $C_{2j}$ を求めよ。

(4) 級数を用いない形で解 $y(x)$ を求めよ。

## **Kai**

### (1)
初期条件と係数比較より

$$
\boxed{C_0=C_1=C_2=C_3=0,\qquad C_4=\frac12}.
$$

### (2)
$x^{2j+2}$ の係数比較から

$$
(2j+3)C_{2j+3}=2C_{2j+1}.
$$

$C_1=0$ と帰納法より $\boxed{C_{2j+1}=0}$。

### (3)
$j\ge2$ では $(2j+2)C_{2j+2}=2C_{2j}$。$C_4=1/2$ より

$$
\boxed{C_{2j}=\frac1{j!}\quad(j\ge2)}.
$$

### (4)

$$
\boxed{y(x)=\sum_{j=2}^\infty\frac{x^{2j}}{j!}=e^{x^2}-1-x^2}.
$$
