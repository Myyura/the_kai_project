---
sidebar_label: "2019年8月実施 数理科学 II [6]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\rho\in C^\infty(\mathbb R)$ は $\rho\ge0$、$|x|\ge1$ で $\rho(x)=0$、$\int_{-1}^1\rho(t)\,dt=1$ を満たす。$f=1_{[0,1]}$ とし、$\varepsilon>0$ に対して

$$
\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon),\qquad
f_\varepsilon(x)=\int_{-\infty}^\infty\rho_\varepsilon(x-t)f(t)\,dt
$$

とおく。

(1) $\lim_{h\to0}\int_{\mathbb R}|f(x-h)-f(x)|\,dx=0$ を示せ。

(2) $f_\varepsilon\in C^\infty(\mathbb R)$ を示せ。

(3) $\lim_{\varepsilon\to0}\int_{\mathbb R}|f_\varepsilon-f|\,dx=0$ を示せ。

## **Kai**

### (1)
被積分関数は区間 $[h,1+h]$ と $[0,1]$ の対称差の指示関数である。よって積分値は $2\min(|h|,1)\to0$。

### (2)

$$
f_\varepsilon(x)=\int_0^1\rho_\varepsilon(x-t)\,dt.
$$

各導関数が連続で積分区間がコンパクトなので、任意の $k\ge0$ に対し積分下で微分でき、

$$
f_\varepsilon^{(k)}(x)=\int_0^1\rho_\varepsilon^{(k)}(x-t)\,dt
$$

は連続である。

### (3)
$\int\rho_\varepsilon=1$、$\rho_\varepsilon\ge0$ および Tonelli の定理より

$$
\begin{aligned}
\|f_\varepsilon-f\|_1
&\le\int\rho_\varepsilon(h)\|f(\cdot-h)-f\|_1\,dh\\
&\le 2\int_{-\varepsilon}^{\varepsilon}\rho_\varepsilon(h)|h|\,dh
\le2\varepsilon\longrightarrow0.
\end{aligned}
$$
