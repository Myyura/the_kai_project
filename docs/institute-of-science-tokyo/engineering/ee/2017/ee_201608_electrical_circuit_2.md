---
sidebar_label: "2016年8月実施 電気回路2"
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Metal-Oxide-Semiconductor-Field-Effect-Transistor-Bias-and-Small-Signal-Analysis
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電気回路2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2.1の MOS トランジスタを用いたソース接地回路の周波数特性を考える。トランジスタは飽和領域で動作し、小信号等価回路は図2.2で表され、そのトランスコンダクタンスを $g_m$ とする。

![MOSソース接地回路とトランジスタ小信号モデル（図2.1、2.2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit2-original.png)

図：東京工業大学 電気電子系 2016年実施問題、図2.1、2.2（原図）。

1. 図2.1の小信号等価回路を示せ。
2. 小信号等価回路から $G(j\omega)=v_{\mathrm{out}}/v_{\mathrm{in}}$ を求めよ。
3. 利得が高域の値から $3\,\mathrm{dB}$ 低下する低域遮断角周波数 $\omega_c$ と、それより十分高い角周波数での利得 $G_0$ を求めよ。ただし、$R_1=R_2=200\,\mathrm{k\Omega}$、$R_D=10\,\mathrm{k\Omega}$、$g_m=10\,\mathrm{mS}$、$C=0.1\,\mathrm{\mu F}$ とする。
4. 3) の条件で、$G(j\omega)$ の利得および位相の骨格ボード線図を $1$〜$10^8\,\mathrm{rad/s}$ の範囲で描け。

#### 题目描述

对图示饱和区 MOS 管共源放大器，采用原图给定的小信号模型，跨导为 $g_m$。1) 画出整体小信号等效电路；2) 求电压增益 $G(j\omega)$；3) 在给定元件参数下，求低频侧的 $3\,\mathrm{dB}$ 截止角频率及远高于截止频率时的增益；4) 在 $1$ 至 $10^8\,\mathrm{rad/s}$ 范围画出幅频、相频渐近 Bode 图。

## **Kai**

### 1)

直流電源 $V_{CC}$ を交流的に接地する。ゲートから接地までの抵抗は $R_G=R_1\parallel R_2$、ドレインには $R_D$ と電流源 $g_mv_{gs}$ が接続される。

![MOS回路の小信号等価回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit2-small-signal.svg)

### 2)

ゲート電流は $0$ なので、入力の容量分圧から

$$
v_{gs}=\frac{R_G}{R_G+1/(j\omega C)}v_{\mathrm{in}},
\qquad v_{\mathrm{out}}=-g_mR_Dv_{gs}.
$$

従って

$$
\boxed{G(j\omega)=-g_mR_D\frac{j\omega CR_G}{1+j\omega CR_G}
=-g_mR_D\frac{j\omega CR_1R_2}{R_1+R_2+j\omega CR_1R_2}}.
$$

### 3)

$R_G=100\,\mathrm{k\Omega}$、$CR_G=0.01\,\mathrm s$ より

$$
\boxed{\omega_c=\frac1{CR_G}=100\,\mathrm{rad/s}}.
$$

高域の電圧利得とそのデシベル表示は

$$
\boxed{G_0=-g_mR_D=-100,\qquad 20\log_{10}|G_0|=40\,\mathrm{dB}}.
$$

### 4)

厳密な振幅・位相は

$$
20\log_{10}|G(j\omega)|
=40+20\log_{10}\frac{\omega}{\sqrt{\omega^2+100^2}},
\qquad
\arg G=-90^\circ-\tan^{-1}\frac\omega{100}.
$$

骨格利得線図は $1\le\omega\le100$ で $20\,\mathrm{dB/dec}$、$\omega\ge100$ で $40\,\mathrm{dB}$ の水平線となる。位相の骨格線図は $\omega\le10$ で $-90^\circ$、$10$〜$1000$ で $-45^\circ/\mathrm{dec}$、$\omega\ge1000$ で $-180^\circ$ とする。$\omega=100$ の厳密な値は約 $37\,\mathrm{dB}$、$-135^\circ$ である。

![MOS増幅回路の骨格ボード線図と厳密曲線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_circuit2-bode.svg)
