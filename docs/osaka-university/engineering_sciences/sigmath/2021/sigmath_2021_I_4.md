---
sidebar_label: "2021年度 数理科学 I [4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\alpha,\beta,\gamma\in\mathbb R$ とし、実数値関数 $y(x)$ に対する微分方程式

$$
\frac{d^3y}{dx^3}-2\frac{d^2y}{dx^2}+\beta y'-2\beta y=0\quad(x>0),
$$

$$
\lim_{x\downarrow0}y(x)=4,\quad\lim_{x\downarrow0}y'(x)=\alpha,\quad
\lim_{x\downarrow0}y''(x)=\gamma
$$

を考える。次の場合の解を求めよ。

(1) $\alpha=8,\beta=-9,\gamma=18$。

(2) $\alpha=-6,\beta=-4,\gamma=8$。

(3) $\beta=1$。

## **Kai**

特性方程式は $(r-2)(r^2+\beta)=0$ である。

### (1)
一般解 $y=C_1e^{2x}+C_2e^{3x}+C_3e^{-3x}$ に初期条件を代入して

$$
\boxed{y(x)=\frac{18}{5}e^{2x}+\frac13e^{3x}+\frac1{15}e^{-3x}}.
$$

### (2)
$2$ が重根なので $y=(C_1+C_2x)e^{2x}+C_3e^{-2x}$。初期条件より

$$
\boxed{y(x)=(1-2x)e^{2x}+3e^{-2x}}.
$$

### (3)
一般解は $C_1e^{2x}+C_2\cos x+C_3\sin x$。条件 $C_1+C_2=4$、$2C_1+C_3=\alpha$、$4C_1-C_2=\gamma$ より

$$
\boxed{y(x)=\frac{\gamma+4}{5}e^{2x}+\frac{16-\gamma}{5}\cos x
+\left(\alpha-\frac{2\gamma+8}{5}\right)\sin x}.
$$
