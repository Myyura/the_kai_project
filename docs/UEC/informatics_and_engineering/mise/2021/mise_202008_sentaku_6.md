---
sidebar_label: "2020年8月実施 選択問題6 電気回路学"
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Damping
  - Electrical-Electronic.Circuits.Maximum-Power-Transfer
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題6 電気回路学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問1

内部抵抗0、起電力 $E$ [V] の直流電源、スイッチ $S$、インダクタ $L$ [H] を直列に接続し、その先に抵抗 $R$ [$\Omega$] とキャパシタ $C$ [F] の並列回路を接続する。電源負端へ両枝が戻る。インダクタを電源から流れる電流を $i_1$、抵抗枝に流れる電流を $i_2$ とする。$t=0$ にスイッチを閉じ、キャパシタの初期電荷は0である。

1. $t\ge0$ の回路方程式を $i_1,i_2$ で表せ。
2. 十分時間が経過したときの定常電流 $i_2(\infty)$ を求めよ。
3. $R=1\ \Omega$、$\alpha=1/(2C),\ \beta=1/\sqrt{LC}$ とし、$\alpha=\beta$ のとき $i_2(t)$ を $\alpha,E,t$ で表せ。必要なら $\mathcal L[e^{-kt}]=1/(s+k)$、$\mathcal L[t^ne^{-kt}/n!]=1/(s+k)^{n+1}$ を用いてよい。

### 問2

抵抗値がすべて $4\ \Omega$ の電球10000個を、$m$ 個直列の列を $n$ 列並列に接続した配列にする。全電球を使い、内部抵抗 $1\ \Omega$、起電力 $E$ [V] の直流電源で給電する。配列全体の明るさは全消費電力に比例するとして、最大となる自然数 $m,n$ を求めよ。

#### 题目描述

问1：理想直流源 $E$ 经开关和电感 $L$ 后接电阻 $R$ 与电容 $C$ 并联支路，$i_1$ 为电感电流、$i_2$ 为电阻电流，电容初始无电荷，$t=0$ 合闸。写回路方程，求稳态电阻电流；在 $R=1\ \Omega$、$\alpha=1/(2C)=\beta=1/\sqrt{LC}$ 的临界阻尼条件下求 $i_2(t)$。问2：将10000只相同的 $4\ \Omega$ 灯泡组成每列 $m$ 只串联、共 $n$ 列并联的阵列，接内阻 $1\ \Omega$ 的电源；求使总功率最大的整数 $m,n$。

## **Kai**

### 問1 (1), (2)

並列枝の電圧が等しく、キャパシタ電流は $i_1-i_2$ なので

$$
\boxed{L\frac{di_1}{dt}+Ri_2=E},\qquad
\boxed{Ri_2=\frac1C\int_0^t(i_1-i_2)\,d\tau}.
$$

初期条件は $i_1(0)=0,i_2(0)=0$。第二式は $RC\dot i_2=i_1-i_2$ とも書ける。定常状態では微分が0となるので $i_1=i_2$、したがって $\boxed{i_2(\infty)=E/R}$。

### 問1 (3)

零初期値でラプラス変換すると $LsI_1+RI_2=E/s$、$I_1=(1+RCs)I_2$。$R=1$ を代入して

$$
I_2(s)=\frac{E}{s(LCs^2+Ls+1)}
=\frac{E\beta^2}{s(s^2+2\alpha s+\beta^2)}.
$$

$\beta=\alpha$ のとき

$$
I_2(s)=E\left[\frac1s-\frac1{s+\alpha}-\frac\alpha{(s+\alpha)^2}\right],
$$

したがって

$$
\boxed{i_2(t)=E\{1-(1+\alpha t)e^{-\alpha t}\}\quad(t\ge0)}.
$$

初期値0、最終値 $E$ となり、$R=1$ の定常値とも一致する。

### 問2

配列抵抗は $R_a=4m/n$、$mn=10000$ である。全消費電力は

$$
P=\frac{E^2R_a}{(1+R_a)^2}
=\frac{E^2}{R_a+2+1/R_a}.
$$

$R_a+1/R_a\ge2$ より最大は $R_a=1$、すなわち $n=4m$。これと個数条件を連立して

$$
\boxed{m=50,\qquad n=200}.
$$

この組は自然数の制約を満たすので、連続変数としての最大値 $P_{\max}=E^2/4$ がそのまま達成される。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 12–13ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
