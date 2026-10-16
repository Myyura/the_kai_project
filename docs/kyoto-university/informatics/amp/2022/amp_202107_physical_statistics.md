---
sidebar_label: "2021年7月実施 物理統計学"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Thermodynamics.Heat-Capacity-and-Degrees-of-Freedom
---

# 京都大学 情報学研究科 数理工学専攻 2021年7月実施 専門科目 問題5（物理統計学）

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E6%83%85%E5%A0%B1%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B4%E5%AE%9F%E6%96%BD_%E5%B0%82%E9%96%80.html) refined with GPT 6 Astra)

## **Description**

エネルギーレベルが

$$
E_n=h\nu\left(\frac12+n\right),\qquad n=0,1,2,3,\ldots
$$

なる振動数 $\nu>0$ の振動子系を考える。ここで $h>0$ は定数であり、エネルギーレベルの縮退は無く、同系の分配関数 $Z$ は

$$
Z=\sum_{n=0}^{\infty}\exp\left(-\frac{E_n}{kT}\right)
$$

で与えられるとする。ただし、$k>0$ をボルツマン定数、$T$ を絶対温度とする。以下の問いに答えよ。

(i) 分配関数 $Z$ を計算せよ。

(ii) エネルギー $E$ の期待値 $\langle E\rangle$ を求めよ。

(iii) 比熱 $C=d\langle E\rangle/dT$ を求めよ。

(iv) 比熱 $C$ の低温極限 $T\to0$ を求めよ。

(v) 比熱 $C$ の高温極限 $T\to\infty$ を求めよ。

#### 题目描述

频率为 $\nu>0$ 的振子具有无简并能级

$$
E_n=h\nu\left(\frac12+n\right),\qquad n=0,1,2,\ldots,
$$

其中 $h>0$ 为常数。其配分函数为

$$
Z=\sum_{n=0}^{\infty}e^{-E_n/(kT)},
$$

$k>0$ 为玻尔兹曼常数，$T$ 为绝对温度。

(i) 求配分函数 $Z$。

(ii) 求能量的期望值 $\langle E\rangle$。

(iii) 求比热 $C=d\langle E\rangle/dT$。

(iv) 求比热在 $T\to0$ 时的低温极限。

(v) 求比热在 $T\to\infty$ 时的高温极限。

## **Kai**

以下では $\beta=1/(kT)$、$\varepsilon=h\nu$ とおく。

### (i)

$T>0$ において $0<e^{-\beta\varepsilon}<1$ なので、等比級数を用いると

$$
Z=e^{-\beta\varepsilon/2}\sum_{n=0}^{\infty}e^{-n\beta\varepsilon}
=\boxed{\frac{e^{-\beta\varepsilon/2}}{1-e^{-\beta\varepsilon}}
=\frac{1}{2\sinh(\beta\varepsilon/2)}}.
$$

### (ii)

正準分布の関係式から

$$
\langle E\rangle=-\frac{\partial\log Z}{\partial\beta}
=\boxed{\frac{\varepsilon}{2}+\frac{\varepsilon}{e^{\beta\varepsilon}-1}}
=\frac{h\nu}{2}\coth\left(\frac{h\nu}{2kT}\right).
$$

### (iii)

$\varepsilon$ は温度に依存しないため、(ii) を $T$ で微分して

$$
\boxed{C=\frac{(h\nu)^2}{kT^2}
\frac{e^{h\nu/(kT)}}{\left(e^{h\nu/(kT)}-1\right)^2}}.
$$

### (iv)

$x=h\nu/(kT)$ とおくと

$$
C=kx^2\frac{e^x}{(e^x-1)^2}.
$$

$T\to0^+$ では $x\to\infty$ であり、$C\sim kx^2e^{-x}$ なので

$$
\boxed{\lim_{T\to0^+}C=0}.
$$

### (v)

$T\to\infty$ では $x\to0$ である。$(e^x-1)/x\to1$ を用いて

$$
\boxed{\lim_{T\to\infty}C
=k\lim_{x\to0}\frac{e^x}{\left((e^x-1)/x\right)^2}=k}.
$$

## **Reference**

- [京都大学公式問題：2022年度数理工学専攻、物理統計学（PDF 21ページ）](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
- [Miyake：2021年実施 専門［5］物理統計学](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E6%83%85%E5%A0%B1%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B4%E5%AE%9F%E6%96%BD_%E5%B0%82%E9%96%80.html)
