---
sidebar_label: 2018年度 数学解析と信号処理
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Fourier-Analysis.Fourier-Transform
---
# 大阪大学 情報科学研究科 情報工学 2018年度 数学解析と信号処理

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
(1-1) $\mathcal L[f](s)=F(s)$ とする。$\frac d{ds}\mathcal L[f]=-\mathcal L[tf]$ を示せ。

(1-2) 上式と $\mathcal L[f']=sF-f(0)$ を用い、

$$
tf''-(6t-1)f'+3(3t-1)f=0,\qquad f''(0)=9
$$

を満たす $f(t)$ を求めよ。

(2) Fourier変換を $\mathcal F[g](\xi)=(2\pi)^{-1/2}\int_{-\infty}^\infty g(u)e^{-i\xi u}\,du$ と定義する。

- (2-1) $g(u)=2-|u|\ (|u|\le2)$、それ以外で0の変換を求めよ。
- (2-2-1) $x(t)=y(t)=1\ (|t|\le1)$、それ以外で0とする。$ (x*y)(t)=\int_{-\infty}^{\infty}x(\tau)y(t-\tau)\,d\tau$ を求めよ。
- (2-2-2) 左右を直接計算し、$\mathcal F[x*y]=\sqrt{2\pi}\mathcal F[x]\mathcal F[y]$ を示せ。

## **Kai**
### (1)

(1-1) 収束する半平面内で積分を微分して

$$
F'(s)=\int_0^\infty(-t)f(t)e^{-st}\,dt=-\mathcal L[tf](s).
$$

(1-2) 方程式をLaplace変換すると

$$
-\frac d{ds}(s^2F-sf(0)-f'(0))+6\frac d{ds}(sF-f(0))+(sF-f(0))-9F'-3F=0.
$$

整理して $(s-3)^2F'+(s-3)F=0$、したがって $F=C/(s-3)$。逆変換すると $f=Ce^{3t}$ で、$f''(0)=9C=9$ より

$$
\boxed{f(t)=e^{3t}}.
$$

### (2)

(2-1) 偶関数であることから

$$
\mathcal F[g](\xi)=\frac2{\sqrt{2\pi}}\int_0^2(2-u)\cos(\xi u)\,du
=\boxed{\frac{2(1-\cos2\xi)}{\sqrt{2\pi}\,\xi^2}}.
$$

$\xi=0$ では連続延長により $4/\sqrt{2\pi}$。

(2-2-1) 積分値は区間 $[-1,1]$ と $[t-1,t+1]$ の共通部分の長さなので

$$
\boxed{(x*y)(t)=\begin{cases}2-|t|&|t|\le2,\\0&|t|>2.\end{cases}}
$$

(2-2-2)

$$
\mathcal F[x](\xi)=\mathcal F[y](\xi)=\frac{2\sin\xi}{\sqrt{2\pi}\,\xi}.
$$

よって右辺は $4\sin^2\xi/(\sqrt{2\pi}\xi^2)$ である。これは $1-\cos2\xi=2\sin^2\xi$ により(2-1)の左辺と一致し、$\xi=0$ でも極限で成立する。
