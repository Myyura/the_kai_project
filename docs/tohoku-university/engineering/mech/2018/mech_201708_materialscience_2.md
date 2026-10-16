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

2017年10月・2018年4月入学対象、2017年8月実施。

$973\ \mathrm K$ に保った鉄板の片面を浸炭し、他面を脱炭して炭素の定常拡散を生じさせる。浸炭側表面から板厚方向を $x$ とし、$x=5.0\times10^{-3}\ \mathrm m$ での炭素濃度は $1.2\ \mathrm{kg/m^3}$、$x=1.0\times10^{-2}\ \mathrm m$ では $0.80\ \mathrm{kg/m^3}$、脱炭側表面では0である。拡散係数は $D=3.0\times10^{-11}\ \mathrm{m^2/s}$ とする。

1. 単位面積・単位時間当たりの炭素の移動量を求めよ。
2. $x=1.0\times10^{-3}\ \mathrm m$ の炭素濃度を求めよ。
3. 鉄板の厚さを求めよ。
4. $D=D_0\exp\{-Q/(RT)\}$、$D_0=6.0\times10^{-7}\ \mathrm{m^2/s}$ として拡散の活性化エネルギー $Q$ を求めよ。
5. 拡散係数を $973\ \mathrm K$ のときの半分にする温度を求めよ。

$R=8.31\ \mathrm{J/(mol\,K)}$、$e=2.72$、$\ln2=0.69$、$\ln10=2.30$ を用いてよい。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

铁板在 $973\ \mathrm K$ 下稳态渗碳，渗碳面起算的深度 $x=5\ \mathrm{mm}$ 处浓度为 $1.2\ \mathrm{kg/m^3}$、$10\ \mathrm{mm}$ 处为 $0.80\ \mathrm{kg/m^3}$，另一表面完全脱碳。给定 $D=3.0\times10^{-11}\ \mathrm{m^2/s}$。（1）求扩散通量；（2）求深度 $1\ \mathrm{mm}$ 处浓度；（3）求板厚；（4）利用阿伦尼乌斯关系及 $D_0=6.0\times10^{-7}\ \mathrm{m^2/s}$ 求活化能；（5）求扩散系数减半时的温度。

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
