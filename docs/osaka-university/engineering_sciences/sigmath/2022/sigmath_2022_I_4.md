---
sidebar_label: "2022年度 数理科学 I [4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 I \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

実数値関数 $y(x)$ に対する微分方程式

$$
y''+3y'=e^{-2x}(\sin x+2\cos x)\quad(x>0),\qquad
\lim_{x\downarrow0}y(x)=-1,\quad\lim_{x\downarrow0}y'(x)=2
$$

を考える。

(1) $\alpha\in\mathbb R$ に対し $\int_0^xe^{\alpha t}\cos t\,dt$、$\int_0^xe^{\alpha t}\sin t\,dt$ を求めよ。

(2) 解 $y(x)$ を求めよ。

## **Kai**

### (1)
部分積分を二度行うと

$$
\boxed{\int_0^xe^{\alpha t}\cos t\,dt
=\frac{e^{\alpha x}(\alpha\cos x+\sin x)-\alpha}{\alpha^2+1}},
$$

$$
\boxed{\int_0^xe^{\alpha t}\sin t\,dt
=\frac{e^{\alpha x}(\alpha\sin x-\cos x)+1}{\alpha^2+1}}.
$$

### (2)
$u=y'$ とおくと $(e^{3x}u)'=e^x(\sin x+2\cos x)$。$u(0)=2$ と (1) から

$$
u(x)=\frac12e^{-2x}(3\sin x+\cos x)+\frac32e^{-3x}.
$$

これを積分し $y(0)=-1$ を用いると

$$
\boxed{y(x)=-\frac12e^{-2x}(\sin x+\cos x)-\frac12e^{-3x}}.
$$
