---
sidebar_label: 2025年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Numerical-Analysis.Central-Finite-Difference-for-Second-Derivative
  - Mathematics.Numerical-Analysis.Roundoff-vs-Truncation-Error
  - Computer-Science.Computer-Architecture.Floating-Point-Rounding-Error
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 選択問題 数値計算

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Taylor 展開を用いて、$f'(\alpha)$ の中心差分と 3 点前進差分、$f''(\alpha)$ の 2 次精度の前進差分を導け。また、浮動小数点演算の丸め誤差と離散化誤差の和を最小にするステップ幅 $h$ を求めよ。

### 题目描述

由 Taylor 展开推导一阶导数的中心差分和三点前向差分，以及二阶导数的二阶精度前向差分；再求浮点舍入误差上界、最优步长与最小总误差。

## **Kai**

### 1.

式 (1) から式 (2) を引くと、

$$
f(\alpha+h)-f(\alpha-h)
=2hf'(\alpha)+\frac{2h^3}{3!}f'''(\alpha)+O(h^5).
$$

よって、

$$
\boxed{f'(\alpha)\simeq
\frac{f(\alpha+h)-f(\alpha-h)}{2h}}
$$

であり、2 次精度、誤差の主要項は

$$
\boxed{-\frac{h^2}{6}f'''(\alpha)}
$$

である。

### 2.

$f(\alpha+h),f(\alpha+2h)$ を Taylor 展開して係数を比較すると、

$$
f'(\alpha)
=\frac{-3f(\alpha)+4f(\alpha+h)-f(\alpha+2h)}{2h}
+\frac{h^2}{3}f'''(\alpha)+O(h^3).
$$

したがって、

$$
\boxed{f'(\alpha)\simeq
\frac{-3f(\alpha)+4f(\alpha+h)-f(\alpha+2h)}{2h}}
$$

であり、2 次精度、誤差の主要項は

$$
\boxed{\frac{h^2}{3}f'''(\alpha)}.
$$

### 3.

2 次精度とするためには、$f,f',f'''$ の項を消去する必要がある。したがって最小の関数値数は

$$
\boxed{n=4}
$$

である。係数比較より、

$$
\boxed{
f''(\alpha)\simeq
\frac{2f(\alpha)-5f(\alpha+h)+4f(\alpha+2h)-f(\alpha+3h)}{h^2}}
$$

を得る。

### 4.

$f(\alpha+h)$ と $f(\alpha)$ の丸め誤差の上界をともに $|f(\alpha)|u$ とすると、近似式 (4) の丸め誤差の上界は

$$
\boxed{\frac{2|f(\alpha)|u}{h}}.
$$

### 5.

全誤差を

$$
E(h)=\frac h2|f''(\alpha)|+\frac{2|f(\alpha)|u}{h}
$$

とおく。相加相乗平均または $E'(h)=0$ より、

$$
\boxed{h=2\sqrt{\frac{|f(\alpha)|u}{|f''(\alpha)|}}}.
$$

このとき、

$$
\boxed{E_{\min}=2\sqrt{|f(\alpha)|\,|f''(\alpha)|\,u}}.
$$
