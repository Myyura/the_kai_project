---
sidebar_label: "2015年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Phase-Equilibrium
  - Physics.Thermodynamics.Clapeyron-Equation
---

# 九州大学 工学府 機械系専攻 2015年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

高さを 1 とする断面積一定の密閉容器に、飽和液と乾き飽和蒸気が入っている。液面の高さを $z$、飽和液・乾き飽和蒸気の比体積を $v',v''$ とし、$v''=\alpha v'$ とする。内部の温度は一様である。（20 点）

![飽和液と乾き飽和蒸気の密閉容器（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/thermo-2-original.png)

1. 乾き度 $x$ を $z,\alpha$ で表せ。
2. $T=600\,\mathrm K$ で $\alpha=9$、混合物の比体積が $5v'$ のとき、$x,z$ を求めよ。
3. $T=600\,\mathrm K$、$v'=0.0015\,\mathrm{m^3/kg}$、$\alpha=9$、$h''-h'=1152\,\mathrm{kJ/kg}$ とする。温度を $1\,\mathrm K$ 上げたときの圧力上昇を kPa で求めよ。次式を用いてよい。

$$
\frac{dp}{dT}=\frac{h''-h'}{T(v''-v')}.
$$

#### 题目描述

等截面密闭容器内为饱和液与干饱和蒸汽，高度归一化为 1，液面高度为 $z$，汽液比容之比为 $\alpha$。求干度的表达式；当 $\alpha=9$、平均比容为液体比容的 5 倍时求干度和液位；再利用给定的克拉佩龙方程和物性求升温 1 K 的压升。

## **Kai**

### (1)

断面積を $A$ とすると $m'=Az/v'$、$m''=A(1-z)/(\alpha v')$ だから

$$
\boxed{x=\frac{m''}{m'+m''}=\frac{1-z}{1+(\alpha-1)z}.}
$$

### (2)

$$
5v'=(1-x)v'+x(9v')\quad\Longrightarrow\quad
\boxed{x=\frac12,\qquad z=\frac1{10}.}
$$

### (3)

1 K の変化に対して物性値を初期値で評価すると

$$
\boxed{\Delta p\simeq\frac{1152}{600(9-1)\times0.0015}\times1
=160\ \mathrm{kPa}.}
$$

ここでは $\mathrm{kJ/m^3}=\mathrm{kPa}$ を用いた。
