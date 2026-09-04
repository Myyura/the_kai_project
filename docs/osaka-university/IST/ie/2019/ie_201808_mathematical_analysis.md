---
sidebar_label: 2019年度 数学解析と信号処理
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Fourier-Analysis.Fourier-Transform
---
# 大阪大学 情報科学研究科 情報工学 2019年度 数学解析と信号処理

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
(1-1) $\Gamma(z)=\int_0^\infty x^{z-1}e^{-x}\,dx$（$\Re z>0$）について $\Gamma(1/2)=\sqrt\pi$ を示せ。

(1-2) $t>0$、$s$ を複素変数とする。$f(t)=1/\sqrt t$ のLaplace変換が $\sqrt{\pi/s}$ であることを示せ。

(1-3) $G(s)=1/(\sqrt{s}(s-1))$ の逆Laplace変換を求めよ。

(2) $n$ を整数、$z$ を複素変数とし、離散時間の線形時不変システムを考える。

(2-1) $x(n)=\delta(n)-\delta(n-1)+2\delta(n-2)$ の $z$ 変換を求めよ。$\delta(n)$ は単位インパルスを表す。

(2-2) $y(n)=x(n)+2x(n-1)-3x(n-2)$ となる線形時不変システムの伝達関数を求めよ。

(2-3) $H(z)=1+2z^{-1}+z^{-2}$ の振幅特性と位相特性を求めよ。

## **Kai**
### (1)

(1-1) $x=u^2$ とすると $\Gamma(1/2)=2\int_0^\infty e^{-u^2}\,du=I$。2重積分を極座標に変換して

$$
I^2=\int_{\mathbb R^2}e^{-(u^2+v^2)}\,du\,dv=2\pi\int_0^\infty re^{-r^2}\,dr=\pi.
$$

$I>0$ より $\boxed{\Gamma(1/2)=\sqrt\pi}$。

(1-2) 実数 $s>0$ では $x=st$ と置き

$$
\mathcal L[t^{-1/2}](s)=s^{-1/2}\Gamma(1/2)=\boxed{\sqrt{\pi/s}}.
$$

両辺は $\Re s>0$ で正則なので、恒等定理により同じ半平面で成立する（平方根は主値）。

(1-3) 畳込み定理により

$$
\boxed{\mathcal L^{-1}[G](t)=\frac1{\sqrt\pi}\int_0^t\frac{e^{t-u}}{\sqrt u}\,du
=\frac{2e^t}{\sqrt\pi}\int_0^{\sqrt t}e^{-v^2}\,dv=e^t\operatorname{erf}(\sqrt t)}.
$$

### (2)

(2-1) $\boxed{X(z)=1-z^{-1}+2z^{-2}}$。

(2-2) $Y(z)=(1+2z^{-1}-3z^{-2})X(z)$ より $\boxed{H(z)=1+2z^{-1}-3z^{-2}}$。

(2-3) $z=e^{i\omega}$ とすると

$$
H(e^{i\omega})=(1+e^{-i\omega})^2=4\cos^2(\omega/2)e^{-i\omega}.
$$

したがって

$$
\boxed{|H(e^{i\omega})|=4\cos^2(\omega/2),\qquad\arg H(e^{i\omega})=-\omega\pmod{2\pi}}.
$$

$\omega=(2k+1)\pi$ では振幅0のため位相は定義されない。
