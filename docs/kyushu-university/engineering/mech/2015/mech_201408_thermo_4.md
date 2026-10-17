---
sidebar_label: "2014年8月実施 問4（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2014年8月実施 熱工学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量流量 $W_A\,(\mathrm{kg/s})$，温度 $T_A\,(\mathrm K)$ の流体Aを用いた加熱によって，質量流量 $W_B\,(\mathrm{kg/s})$ の流体Bを温度 $T_B\,(\mathrm K)$ から $\Delta T_B\,(\mathrm K)$ だけ温度上昇させる二重管式熱交換器を製作したい。この熱交換器を直径 $d\,(\mathrm m)$ の伝熱管を用いた向流式とする場合に以下の問いに答えよ。流体Aと流体Bの温度差 $T_A-T_B$ を $\Delta T_{AB}\,(\mathrm K)$，流体A側の熱伝達率を $h_A\,(\mathrm{W/(m^2\cdot K)})$，管内を流れる流体Bの熱伝達率を $h_B\,(\mathrm{W/(m^2\cdot K)})$ とし，円管の肉厚は無視してよい。なお，流体BとAの熱容量流量比 $W_BC_B/(W_AC_A)$ を $n$（ただし $n<1$）と定義する。ここに $C_A$ と $C_B$ はそれぞれの流体の比熱（$\mathrm{J/(kg\cdot K)}$）である。（30点）

**(1)** 流体AとBの熱交換器内温度分布を温度勾配の変化に注意して図に示せ。ただし，温度 $T_A$ と $T_B$ は図中に示してある。

![原題の向流熱交換器温度分布記入欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-4-original.png)

**(2)** 流体Aの出口温度と流体Bの出口温度を等しくしたい。この場合の流体Bの温度変化 $\Delta T_B$ と流体AとBの入口温度差 $\Delta T_{AB}$ の比を $n$ を用いて表せ。

**(3)** この時の流体Aと流体Bの間の対数平均温度差 $\Delta T_{lm}$ を $\Delta T_{AB}$ と $n$ を用いて表せ。

**(4)** 熱交換器の必要長さ $L$ を求めよ（$W_B,C_B,h_A,h_B$，および $n$ を用いて表せ）。

#### 题目描述

拟制造一台套管式换热器，用质量流量为 $W_A\,(\mathrm{kg/s})$、温度为 $T_A\,(\mathrm K)$ 的流体A，将质量流量为 $W_B\,(\mathrm{kg/s})$ 的流体B从温度 $T_B\,(\mathrm K)$ 加热，使其升温 $\Delta T_B\,(\mathrm K)$。换热器采用直径为 $d\,(\mathrm m)$ 的传热管，按逆流方式工作，回答下列问题。将流体A、B的温差 $T_A-T_B$ 记作 $\Delta T_{AB}\,(\mathrm K)$，A侧换热系数为 $h_A\,(\mathrm{W/(m^2\cdot K)})$，管内流动的B侧换热系数为 $h_B\,(\mathrm{W/(m^2\cdot K)})$，可忽略管壁厚度。定义B与A的热容量流率之比为 $n=W_BC_B/(W_AC_A)$，其中 $n<1$；$C_A,C_B$ 分别是两种流体的比热（$\mathrm{J/(kg\cdot K)}$）。（30分）

**(1)** 注意温度梯度的变化，在图中画出流体A、B在换热器内的温度分布。图中已标出 $T_A,T_B$。

**(2)** 希望流体A的出口温度与流体B的出口温度相等。用 $n$ 表示此时流体B的温升 $\Delta T_B$ 与两流体入口温差 $\Delta T_{AB}$ 之比。

**(3)** 用 $\Delta T_{AB},n$ 表示此时两流体间的对数平均温差 $\Delta T_{lm}$。

**(4)** 求换热器所需长度 $L$（用 $W_B,C_B,h_A,h_B,n$ 表示）。

## **Kai**

### (1)

$x$ を A の入口からの距離、$\mathcal C_A=W_AC_A$、$\mathcal C_B=W_BC_B=n\mathcal C_A$、$U=(h_A^{-1}+h_B^{-1})^{-1}$ とする。局所温度を $t_A(x),t_B(x)$ とすれば

$$
\begin{gathered}
\frac{dt_A}{dx}=-\frac{U\pi d}{\mathcal C_A}(t_A-t_B),\\
\frac{dt_B}{dx}=-\frac{U\pi d}{\mathcal C_B}(t_A-t_B).
\end{gathered}
$$

両曲線とも右下がりで、B の勾配の絶対値は A の $1/n$ 倍となる。また

$$
\frac{d(t_A-t_B)}{dx}
=U\pi d\left(\frac1{\mathcal C_B}-\frac1{\mathcal C_A}\right)(t_A-t_B)>0.
$$

したがって右ほど温度差と両勾配の絶対値が増す。下図は (2) の出口温度一致条件を満たす例である。

![向流熱交換器の温度分布と流れの向き](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-4-profiles.svg)

### (2)

A の温度低下を $\Delta T_A$ とする。熱収支より $\Delta T_A=n\Delta T_B$。出口温度一致条件は $T_A-\Delta T_A=T_B+\Delta T_B$ なので

$$
\boxed{\frac{\Delta T_B}{\Delta T_{AB}}=\frac1{1+n}.}
$$

### (3)

A 入口側と出口側の局所温度差は、それぞれ

$$
\Delta T_1=\frac{n\Delta T_{AB}}{1+n},\qquad
\Delta T_2=\frac{\Delta T_{AB}}{1+n}.
$$

よって

$$
\boxed{\begin{gathered}
\Delta T_{\rm lm}
=\frac{\Delta T_2-\Delta T_1}{\ln(\Delta T_2/\Delta T_1)}\\
=\frac{n-1}{(1+n)\ln n}\Delta T_{AB}.
\end{gathered}}
$$

### (4)

$W_BC_B\Delta T_B=U\pi dL\Delta T_{\rm lm}$ より

$$
\boxed{L=\frac{W_BC_B}{\pi d}\left(\frac1{h_A}+\frac1{h_B}\right)\frac{\ln n}{n-1}.}
$$

$0<n<1$ では $\ln n$ と $n-1$ はともに負で、$L>0$ となる。
