---
sidebar_label: "2017年8月実施 材料物性学 第2問"
tags:
  - Tohoku-University
  - Engineering.Materials-Science.Fick-Diffusion-and-Arrhenius-Law
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 材料物性学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. $973\,\mathrm{K}$ で，鉄板の片面が浸炭雰囲気，反対面が脱炭雰囲気にさらされていると仮定する。ここで炭素拡散の定常状態が成り立っており，炭素濃度は鉄板の浸炭側表面から深さ $5.0\times10^{-3}\,\mathrm{m}$ 地点では $1.2\,\mathrm{kg/m^3}$，深さ $1.0\times10^{-2}\,\mathrm{m}$ 地点では $0.8\,\mathrm{kg/m^3}$ であった。脱炭雰囲気にさらされた表面直下の炭素濃度は零であったとする。この温度における鉄中の炭素の拡散係数は $3.0\times10^{-11}\,\mathrm{m^2/s}$ とする。以下の問いに答えよ。必要であれば気体定数 $R=8.31\,\mathrm{J/(mol\cdot K)}$，$e\fallingdotseq2.72$，$\ln2=0.69$，$\ln10=2.30$ を用いよ。

**(1)** 鉄板を通過する炭素の流束を求めよ。

**(2)** 浸炭側表面から深さ $1.0\times10^{-3}\,\mathrm{m}$ 地点の炭素濃度を求めよ。

**(3)** 鉄板の厚さを求めよ。

**(4)** 振動因子を $6.0\times10^{-7}\,\mathrm{m^2/s}$ とする。この時の拡散の活性化エネルギーを求めよ。

**(5)** 炭素の拡散係数が $973\,\mathrm{K}$ における拡散係数の $1/2$ となる温度を求めよ。

### 题目描述

2. 假设在 $973\,\mathrm{K}$ 下，铁板的一面暴露于渗碳气氛，另一面暴露于脱碳气氛。碳扩散已达到稳态。在距铁板渗碳侧表面深度 $5.0\times10^{-3}\,\mathrm{m}$ 处，碳浓度为 $1.2\,\mathrm{kg/m^3}$；在深度 $1.0\times10^{-2}\,\mathrm{m}$ 处，碳浓度为 $0.8\,\mathrm{kg/m^3}$。设脱碳气氛一侧紧贴表面下方的碳浓度为零。该温度下碳在铁中的扩散系数为 $3.0\times10^{-11}\,\mathrm{m^2/s}$。回答下列问题。必要时使用气体常数 $R=8.31\,\mathrm{J/(mol\cdot K)}$，$e\fallingdotseq2.72$，$\ln2=0.69$，$\ln10=2.30$。

**(1)** 求穿过铁板的碳通量。

**(2)** 求距渗碳侧表面深度 $1.0\times10^{-3}\,\mathrm{m}$ 处的碳浓度。

**(3)** 求铁板厚度。

**(4)** 设频率因子为 $6.0\times10^{-7}\,\mathrm{m^2/s}$，求扩散的活化能。

**(5)** 求碳的扩散系数等于 $973\,\mathrm{K}$ 时扩散系数的一半时的温度。

## **Kai**

### (1)

定常1次元拡散では $d^2C/dx^2=0$。濃度勾配は

$$
\frac{dC}{dx}=\frac{0.80-1.2}{0.010-0.005}=-80\ \mathrm{kg/m^4}.
$$

フィックの第1法則より

$$
\boxed{J=-D\frac{dC}{dx}=2.4\times10^{-9}\ \mathrm{kg/(m^2\,s)}}.
$$

方向は浸炭面から脱炭面への $+x$ 方向である。

### (2)

濃度分布は、$x$ をmで表して $C(x)=1.6-80x\ \mathrm{kg/m^3}$。従って

$$
\boxed{C(0.001)=1.52\ \mathrm{kg/m^3}\simeq1.5\ \mathrm{kg/m^3}}.
$$

### (3)

脱炭面で $C=0$ だから、板厚は

$$
\boxed{h=\frac{1.6}{80}=2.0\times10^{-2}\ \mathrm m=20\ \mathrm{mm}}.
$$

### (4)

$$
Q=RT\ln\frac{D_0}{D}=8.31\times973\times\ln(2.0\times10^4).
$$

$\ln(2\times10^4)=0.69+4\times2.30=9.89$ より

$$
\boxed{Q\simeq8.0\times10^4\ \mathrm{J/mol}=80\ \mathrm{kJ/mol}}.
$$

### (5)

$$
\ln\frac{D(T')}{D(973)}=-\frac QR\left(\frac1{T'}-\frac1{973}\right)=-\ln2.
$$

従って

$$
\boxed{T'=\frac{973\times9.89}{9.89+0.69}\simeq9.1\times10^2\ \mathrm K}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 22ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
