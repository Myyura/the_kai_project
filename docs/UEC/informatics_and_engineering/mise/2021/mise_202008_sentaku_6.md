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

図1の回路はスイッチ $S$，$L\,[\mathrm H]$ のインダクタ，$C\,[\mathrm F]$ のキャパシタ，$R\,[\Omega]$ の抵抗，起電力が $E\,[\mathrm V]$ の直流電源で構成されている。直流電源の内部抵抗は $0$ とする。この回路のスイッチ $S$ を時刻 $t=0$ で閉じるとき，次の問題に答えよ。ただし，キャパシタの初期電荷は $0$ である。

(1) スイッチ $S$ を閉じた後（$t\ge0$）の回路方程式を，図1に示した電流 $i_1(t)$ と $i_2(t)$ を用いて記せ。

(2) スイッチ $S$ を閉じてから十分に時間が経過すると抵抗 $R$ には定常電流が流れる。この定常電流 $i_2(t=\infty)$ を求めよ。

(3) $R=1\,[\Omega]$ とする。さらに $\alpha=1/(2C)$，$\beta=1/\sqrt{LC}$ と記したとき $\alpha=\beta$ であるとする。このとき抵抗 $R$ に流れる電流 $i_2(t)$ を $\alpha,E,t$ の式で表せ。必要であれば表1のラプラス変換表を参照せよ。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_6_fig1.png)

表1　ラプラス変換表：$\displaystyle F(s)=\int_0^\infty f(t)e^{-st}\,dt$。

| 元関数 $f(t)$ | 像関数 $F(s)$ | 注 |
| --- | --- | --- |
| $e^{-kt}$ | $\dfrac1{s+k}$ | $k>0$ |
| $\dfrac{t^n}{n!}e^{-kt}$ | $\dfrac1{(s+k)^{n+1}}$ | $k>0$ かつ $n$ は自然数 |

### 問2

電球が $10000$ 個あり，これらすべてを用いて，直列に $m$ 個つなげたものを並列に $n$ 個接続した電球配列を作る（図2参照）。この電球配列に対して内部抵抗が $1\,[\Omega]$ で起電力が $E\,[\mathrm V]$ の直流電源を用いて給電したとき，電球配列全体の明るさが最大になる $m$ と $n$ を求めよ。ただしすべての電球は抵抗と等価であり，電球配列全体の明るさは全電球が消費する電力に比例すると仮定する。さらに，個々の電球の抵抗値は等しく，電球1つの抵抗値を $4\,[\Omega]$ とする。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_6_fig2.png)

図2：$m=4,n=3$ の場合の回路。電球数は $10000$ 個であるため $m=4,n=3$ は問題の条件を満たさないことに注意。

### 题目描述

#### 第1题

图1的电路由开关 $S$、电感为 $L\,[\mathrm H]$ 的电感器、电容为 $C\,[\mathrm F]$ 的电容器、阻值为 $R\,[\Omega]$ 的电阻，以及电动势为 $E\,[\mathrm V]$ 的直流电源组成。直流电源的内阻为 $0$。在时刻 $t=0$ 闭合开关 $S$，回答下列问题。电容器的初始电荷为 $0$。

(1) 用图1的电流 $i_1(t),i_2(t)$ 写出闭合开关后（$t\ge0$）的电路方程。

(2) 闭合开关足够长时间后，电阻 $R$ 中流过稳态电流。求该电流 $i_2(t=\infty)$。

(3) 设 $R=1\,[\Omega]$，记 $\alpha=1/(2C)$、$\beta=1/\sqrt{LC}$，并假设 $\alpha=\beta$。用 $\alpha,E,t$ 表示电阻 $R$ 中的电流 $i_2(t)$。必要时可参考表1。

表1　拉普拉斯变换表：$\displaystyle F(s)=\int_0^\infty f(t)e^{-st}\,dt$。

| 原函数 $f(t)$ | 像函数 $F(s)$ | 条件 |
| --- | --- | --- |
| $e^{-kt}$ | $\dfrac1{s+k}$ | $k>0$ |
| $\dfrac{t^n}{n!}e^{-kt}$ | $\dfrac1{(s+k)^{n+1}}$ | $k>0$ 且 $n$ 为自然数 |

#### 第2题

共有 $10000$ 个灯泡，将其全部使用，组成每支路串联 $m$ 个灯泡、共并联 $n$ 个支路的灯泡阵列（见图2）。用内阻为 $1\,[\Omega]$、电动势为 $E\,[\mathrm V]$ 的直流电源供电，求使整个灯泡阵列最亮的 $m,n$。假设所有灯泡均等效为电阻，阵列的总亮度与全部灯泡消耗的电功率成正比。各灯泡的阻值相同，单个灯泡的阻值为 $4\,[\Omega]$。

图2画出了 $m=4,n=3$ 的电路。注意由于灯泡总数为 $10000$，$m=4,n=3$ 并不满足题目条件。

## **Kai**

### 問1 (1), (2)

並列枝の電圧が等しく、キャパシタ電流は $i_1-i_2$ なので

$$
\begin{gathered}
\boxed{L\frac{di_1}{dt}+Ri_2=E},\\
\boxed{Ri_2=\frac1C\int_0^t(i_1-i_2)\,d\tau}.
\end{gathered}
$$

初期条件は $i_1(0)=0,i_2(0)=0$。第二式は $RC\dot i_2=i_1-i_2$ とも書ける。定常状態では微分が0となるので $i_1=i_2$、したがって $\boxed{i_2(\infty)=E/R}$。

### 問1 (3)

零初期値でラプラス変換すると $LsI_1+RI_2=E/s$、$I_1=(1+RCs)I_2$。$R=1$ を代入して

$$
\begin{gathered}
I_2(s)=\frac{E}{s(LCs^2+Ls+1)}\\
=\frac{E\beta^2}{s(s^2+2\alpha s+\beta^2)}.
\end{gathered}
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
