---
sidebar_label: "2024年度 数理科学 [I-4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-4]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$f$ は実数上連続微分可能とする。実数値関数 $y(x)$ に対する微分方程式

$$
f(x)y'(x)+y(x)f'(x)=f(x)\quad(0<x<\pi/2),\qquad\lim_{x\downarrow0}y(x)=1
$$

について、(1) $f(x)=3\cos x$、(2) $f(x)=\cos^3x$ の各場合に解を1つ求めよ。

## **Kai**

左辺は $(fy)'$ であり、初期条件から

$$
f(x)y(x)=f(0)+\int_0^xf(t)\,dt.
$$

### (1)

$$
\boxed{y(x)=\frac{3+3\sin x}{3\cos x}=\frac{1+\sin x}{\cos x}}.
$$

### (2)

$\int_0^x\cos^3t\,dt=\sin x-\frac13\sin^3x$ より

$$
\boxed{y(x)=\frac{1+\sin x-\frac13\sin^3x}{\cos^3x}}.
$$

いずれも $0<x<\pi/2$ で定義され、$x\downarrow0$ で1に収束する。
