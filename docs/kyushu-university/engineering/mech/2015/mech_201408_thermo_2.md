---
sidebar_label: "2014年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Phase-Equilibrium
  - Physics.Thermodynamics.Clapeyron-Equation
---

# 九州大学 工学府 機械系専攻 2014年8月実施 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

密閉容器の中に，水の飽和液と乾き飽和蒸気が入っている。容器は垂直方向に断面積が一様で，高さを1とすると，飽和液の水位は $z$ である。また，内部の温度は均一である。この状態の飽和液の比体積は $v'$ であり，乾き飽和蒸気の比体積はその $\alpha$ 倍（$v''=\alpha v'$）である。（20点）

![原題の飽和液と乾き飽和蒸気の密閉容器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-2-original.png)

**(1)** 乾き度 $x$ を $z$ と $\alpha$ で表せ。

**(2)** $T=600\,\mathrm K$ の時，$\alpha=9$ であった。また，容器内の乾き飽和蒸気と飽和液の混合物の比体積は飽和液の5倍であった。この時の $x$ と $z$ の値を求めよ。

**(3)** この容器に熱を加え，温度を $1\,\mathrm K$ 上昇させる。この時，圧力は何 $\mathrm{kPa}$ 上昇するか。以下の条件で計算せよ。

$$
\begin{gathered}
T=600\,\mathrm K,\quad\alpha=9,\\v'=0.0015\,\mathrm{m^3/kg},\\
h''-h'=1152\,\mathrm{kJ/kg}.
\end{gathered}
$$

ただし，クラウジウス・クラペイロンの式

$$
\frac{\mathrm dp}{\mathrm dT}=\frac{h''-h'}{T(v''-v')}
$$

が適用できるものとする。

#### 题目描述

密闭容器内装有水的饱和液体和干饱和蒸汽。容器沿竖直方向的截面积均匀；将容器高度记为1，则饱和液体的水位为 $z$。内部温度均匀。此状态下饱和液体的比体积为 $v'$，干饱和蒸汽的比体积为其 $\alpha$ 倍，即 $v''=\alpha v'$。（20分）

**(1)** 用 $z,\alpha$ 表示干度 $x$。

**(2)** 当 $T=600\,\mathrm K$ 时，$\alpha=9$，容器内干饱和蒸汽与饱和液体混合物的比体积是饱和液体的5倍。求此时 $x,z$ 的值。

**(3)** 向容器加热，使温度升高 $1\,\mathrm K$。压力升高多少 $\mathrm{kPa}$？采用以下条件计算：

$$
\begin{gathered}
T=600\,\mathrm K,\quad\alpha=9,\\v'=0.0015\,\mathrm{m^3/kg},\\
h''-h'=1152\,\mathrm{kJ/kg}.
\end{gathered}
$$

可以应用克劳修斯—克拉佩龙方程：

$$
\frac{\mathrm dp}{\mathrm dT}=\frac{h''-h'}{T(v''-v')}.
$$

## **Kai**

### (1)

断面積を $A$ とすると $m'=Az/v'$、$m''=A(1-z)/(\alpha v')$ だから

$$
\boxed{x=\frac{m''}{m'+m''}=\frac{1-z}{1+(\alpha-1)z}.}
$$

### (2)

$$
\begin{gathered}
5v'=(1-x)v'+x(9v')\\
\Longrightarrow\\
\boxed{x=\frac12,\qquad z=\frac1{10}.}
\end{gathered}
$$

### (3)

1 K の変化に対して物性値を初期値で評価すると

$$
\boxed{\Delta p\simeq\frac{1152}{600(9-1)\times0.0015}\times1
=160\ \mathrm{kPa}.}
$$

ここでは $\mathrm{kJ/m^3}=\mathrm{kPa}$ を用いた。
