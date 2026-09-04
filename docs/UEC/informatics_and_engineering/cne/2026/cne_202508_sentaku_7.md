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

無限回微分可能な $f$ と $h>0$ に対し、Taylor 展開を用いて $f'(\alpha)$ の中心差分と 3 点前進差分、およびそれぞれの離散化誤差の主要項を求めよ。$f(\alpha),\ldots,f(\alpha+(n-1)h)$ で $f''(\alpha)$ を 2 次精度で近似する最小の $n$ と近似式も求めよ。

さらに、前進差分

$$
\frac{f(\alpha+h)-f(\alpha)}{h}
$$

について、$f(\alpha+h),f(\alpha)$ の丸め誤差の上界はともに $|f(\alpha)|u$（$0<u\ll1$）、差の誤差上界は両者の和、$h$ で割ると誤差上界も $1/h$ 倍になると仮定する。丸め誤差の上界、およびそれと離散化誤差の主要項の絶対値の和を最小にする $h$ と最小値を求めよ。

### 题目描述

由 Taylor 展开推导一阶导数的中心差分和三点前向差分，以及二阶导数的二阶精度前向差分；再求浮点舍入误差上界、最优步长与最小总误差。

## **Kai**

### 1.

$\alpha$ を中心とする $f(\alpha+h)$ と $f(\alpha-h)$ の Taylor 展開を引くと、

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

$f(\alpha+h)$ と $f(\alpha)$ の丸め誤差の上界をともに $|f(\alpha)|u$ とすると、前進差分の丸め誤差の上界は

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
