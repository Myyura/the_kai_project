---
sidebar_label: 2023年8月実施 解析学・微積分
tags:
  - Kyushu-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Complex-Analysis.Residue-Theorem
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年8月実施 解析学・微積分

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) 積分

$$
I=\int_0^\infty x^5\exp(-x^4)\,dx
$$

を計算せよ。ただし、$\int_{-\infty}^{\infty}\exp(-x^2)\,dx=\sqrt\pi$ を証明なしに用いてよい。

(2) 次の微分方程式の一般解を求めよ。

$$
\frac{dy}{dx}+y=x\sinh x.
$$

(3) 複素関数 $f(z)=1/(z^4+1)$ を考える。

(a) $f(z)$ の極をすべて求めよ。

(b) 下図の半円閉路 $C$ に沿う複素積分 $\oint_Cf(z)\,dz$ を求めよ。ただし $R>1$ とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu_2024_analysis_calculus_p1.png" width="555" height="395" alt=""/>
</figure>

### 题目描述

1. 计算 $I=\int_0^\infty x^5e^{-x^4}\,dx$，可直接使用高斯积分。
2. 求 $y'+y=x\sinh x$ 的通解。
3. 对 $f(z)=1/(z^4+1)$，求全部极点，并计算图示半圆闭路上的 $\oint_Cf(z)\,dz$，其中 $R>1$。

## **Kai**

### (1)

$u=x^2$ とくと、

$$
I=\frac12\int_0^\infty u^2e^{-u^2}\,du.
$$

部分積分により

$$
I
=\frac14\int_0^\infty e^{-u^2}\,du
=\boxed{\frac{\sqrt\pi}{8}}.
$$

### (2)

積分因子 $e^x$ をかけると

$$
(e^xy)'=\frac{x}{2}(e^{2x}-1).
$$

したがって

$$
e^xy=\frac14xe^{2x}-\frac18e^{2x}-\frac14x^2+C,
$$

よって

$$
\boxed{y=\frac14xe^x-\frac18e^x-\frac14x^2e^{-x}+Ce^{-x}}.
$$

### (3)

#### (a)

$z^4=-1=e^{i(\pi+2k\pi)}$ より、極は

$$
\boxed{z=e^{i(\pi/4+k\pi/2)}\quad(k=0,1,2,3)}.
$$

#### (b)

$C$ の内部の極は

$$
z_0=e^{i\pi/4},\qquad z_1=e^{3i\pi/4}
$$

である。各極の留数は $1/(4z_j^3)$ なので、

$$
\operatorname{Res}(f;z_0)+\operatorname{Res}(f;z_1)
=-\frac{i}{2\sqrt2}.
$$

よって留数定理より

$$
\boxed{\oint_Cf(z)\,dz
=2\pi i\left(-\frac{i}{2\sqrt2}\right)
=\frac{\pi}{\sqrt2}}.
$$
