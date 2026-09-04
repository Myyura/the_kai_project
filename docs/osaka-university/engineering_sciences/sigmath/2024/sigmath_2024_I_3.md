---
sidebar_label: "2024年度 数理科学 [I-3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Residue-Theorem
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-3]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ を自然数とし、複素数 $z\ne0$ に対して $f(z)=z^{-1}(z+z^{-1})^n$ とする。

(1) 原点における $f$ の留数を求めよ。

(2) $C$ を単位円を反時計回りに一周する閉曲線とする。$\int_Cf(z)\,dz$ を求めよ。

(3) $\int_0^{2\pi}\cos^{2n}\theta\,d\theta$ を求めよ。

## **Kai**

### (1)

$$
f(z)=\sum_{j=0}^n\binom nj z^{n-2j-1}
$$

において $z^{-1}$ の係数を取ると

$$
\boxed{\operatorname{Res}_{z=0}f=\begin{cases}\binom n{n/2}&n\text{ が偶数},\\0&n\text{ が奇数}.\end{cases}}
$$

### (2)

留数定理より

$$
\boxed{\int_Cf(z)\,dz=\begin{cases}2\pi i\binom n{n/2}&n\text{ が偶数},\\0&n\text{ が奇数}.\end{cases}}
$$

### (3)

(2)で指数を $2n$ とし、$z=e^{i\theta}$ とおくと

$$
2\pi i\binom{2n}n=i\int_0^{2\pi}(2\cos\theta)^{2n}\,d\theta.
$$

従って $\boxed{\displaystyle\int_0^{2\pi}\cos^{2n}\theta\,d\theta=\frac{2\pi}{4^n}\binom{2n}n}$。
