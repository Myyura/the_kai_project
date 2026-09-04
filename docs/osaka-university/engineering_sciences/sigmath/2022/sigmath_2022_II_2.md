---
sidebar_label: "2022年度 数理科学 II [2]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $\alpha$ を非負の実数とする。各正の整数 $n$ に対し

$$
\varphi_n(x)=\int_x^\infty\frac{e^{-\alpha t}}{(x^3+t^3)^n}\,dt\quad(x>0)
$$

と定める。$\varphi_n'(x)=-e^{-\alpha x}2^{-n}x^{-3n}-3nx^2\varphi_{n+1}(x)$ を示せ。

(2) $\int_1^\infty(x^3+1)^{-3}\,dx$ を求めよ。

## **Kai**

### (1)
$x$ を任意のコンパクト区間 $[a,b]\subset(0,\infty)$ に制限すると、被積分関数の $x$ 偏微分は可積分な定数倍の $(a^3+t^3)^{-n-1}$ で支配される。したがって積分下の微分ができ、

$$
\begin{aligned}
\varphi_n'(x)
&=-\frac{e^{-\alpha x}}{(2x^3)^n}
+\int_x^\infty\frac{-3nx^2e^{-\alpha t}}{(x^3+t^3)^{n+1}}\,dt\\
&=-e^{-\alpha x}2^{-n}x^{-3n}-3nx^2\varphi_{n+1}(x).
\end{aligned}
$$

### (2)
$C_n=\int_1^\infty(1+t^3)^{-n}\,dt$ とおく。$\alpha=0$ として $t=xu$ と変換すると $\varphi_n(x)=x^{1-3n}C_n$。 (1) より

$$
C_{n+1}=\frac{(3n-1)C_n-2^{-n}}{3n}.
$$

部分分数分解から $C_1=\pi/(3\sqrt3)-\log2/3$。したがって

$$
C_2=\frac23C_1-\frac16,\qquad
\boxed{C_3=\frac59C_1-\frac{13}{72}=\frac{5\pi}{27\sqrt3}-\frac{5\log2}{27}-\frac{13}{72}}.
$$
