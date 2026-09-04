---
sidebar_label: "2022年度 数理科学 I [5]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 I \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

正の整数 $n$ に対して、線形回帰モデル $y_i=ax_i+\varepsilon_i$ ($i=1,\ldots,n$) を考える。$x_i$ は実定数、$a$ は未知実数、$\varepsilon_i$ は独立な標準正規変数である。

$$
S_x^2=\frac1n\sum x_i^2>0,\quad S_y^2=\frac1n\sum y_i^2,\quad S_{xy}=\frac1n\sum x_iy_i
$$

とし、$\sum_i(y_i-ax_i)^2$ を最小にする $a$ を $\widehat a$ とする。

(1) $\widehat a$ を求め、$n^{-1}\sum_i(y_i-\widehat ax_i)^2=S_y^2-S_{xy}^2/S_x^2$ を示せ。

(2) $n^{-1}\sum_i(y_i-ax_i)^2=S_x^2(a-\widehat a)^2+n^{-1}\sum_i(y_i-\widehat ax_i)^2$ を示せ。

(3) $\sqrt{nS_x^2}(\widehat a-a)\sim N(0,1)$ を示せ。

(4) $n=10,S_x^2=0.3,S_{xy}=0.9$ のとき、$H_0:a=2,H_1:a>2$ を有意水準 $5\%$ で検定せよ。標準正規分布の上側 $5\%$ 点は $1.645$、上側 $2.5\%$ 点は $1.960$ とする。

## **Kai**

### (1), (2)
平方完成すると

$$
\frac1n\sum(y_i-ax_i)^2
=S_x^2a^2-2S_{xy}a+S_y^2
=S_x^2\left(a-\frac{S_{xy}}{S_x^2}\right)^2+S_y^2-\frac{S_{xy}^2}{S_x^2}.
$$

$S_x^2>0$ より $\boxed{\widehat a=S_{xy}/S_x^2}$ であり、二つの等式も従う。

### (3)

$$
\widehat a-a=\frac{\sum_i x_i\varepsilon_i}{\sum_i x_i^2}
\sim N\left(0,\frac1{nS_x^2}\right).
$$

標準化すればよい。

### (4)
$\widehat a=3$、帰無仮説下の統計量は

$$
Z=\sqrt{10\cdot0.3}(3-2)=\sqrt3\simeq1.732>1.645.
$$

したがって $H_0$ を棄却し、有意水準 $5\%$ で $a>2$ と判断する。
