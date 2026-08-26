---
sidebar_label: "2025年度 数学 II-11"
tags:
  - Osaka-Metropolitan-University
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---
# 大阪公立大学 理学研究科 数学専攻 2025年度 数学 II-11

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
$R>2$ とし、上半円弧 $\gamma_R:z=Re^{i\theta}\ (0\le\theta\le\pi)$ を考える。

1. $\displaystyle\lim_{R\to\infty}\int_{\gamma_R}\frac{e^{iz}}{z^2+4}\,dz$ を求めよ。
2. $\displaystyle\int_{-\infty}^{\infty}\frac{\cos x}{x^2+4}\,dx$ を求めよ。

## **Kai**

### (1)

$z=Re^{i\theta}$ 上で

$$
|e^{iz}|=e^{-R\sin\theta}\le1,\qquad
|z^2+4|\ge R^2-4.
$$

よって

$$
\left|\int_{\gamma_R}\frac{e^{iz}}{z^2+4}\,dz\right|
\le\frac{\pi R}{R^2-4}\longrightarrow0.
$$

### (2)

$f(z)=e^{iz}/(z^2+4)$ の上半平面内の極は $z=2i$ のみで、

$$
\operatorname*{Res}_{z=2i}f(z)=\frac{e^{-2}}{4i}.
$$

(1) と留数定理より

$$
\int_{-\infty}^{\infty}\frac{e^{ix}}{x^2+4}\,dx
=2\pi i\frac{e^{-2}}{4i}=\frac\pi2e^{-2}.
$$

実部をとれば

$$
\boxed{\displaystyle
\int_{-\infty}^{\infty}\frac{\cos x}{x^2+4}\,dx
=\frac\pi2e^{-2}}
$$

である。

## **Reference**
- [大阪公立大学 数学専攻 過去の入試問題](https://www.omu.ac.jp/sci/math/admission/past-questions/)
- [大阪公立大学 2025年度 専門科目 公式問題 PDF](https://www.omu.ac.jp/sci/math/assets/2025M_II.pdf)
