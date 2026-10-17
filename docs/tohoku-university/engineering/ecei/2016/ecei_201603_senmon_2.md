---
sidebar_label: 2016年3月実施 専門科目 問題2 通信工学（調幅と雑音）
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Transform-Scaling-and-Frequency-Shift
  - Electrical-Electronic.Signal-Processing.Fourier-Conjugate-Symmetry-and-Modulation
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題2 通信工学（調幅と雑音）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

変調信号 $s(t)=\cos(2\pi f_mt)$ および搬送波 $A_c\cos(2\pi f_ct)$ により生成される振幅変調波

$$
g_{AM}(t)=A_c\{1+m\cdot s(t)\}\cos(2\pi f_ct)\quad(0<f_m\ll f_c)
$$

を考える．ここで $m$ は変調度であり，$0<m\le1$ が満たされている．このとき，以下の問に答えよ．

(1) $g_{AM}(t)$ の概形を描け．

(2) $g_{AM}(t)$ の電力効率 $\eta_{AM}$ の式を求めよ．また，その最大電力効率を求めよ．

上述した振幅変調波 $g_{AM}(t)$ の受信機モデルを Fig. 2 に示す．受信機内では両側電力スペクトル密度が $N_0/2$ である白色雑音 $n(t)$ が付加されるものとする．バンドパスフィルタ（BPF）は中心周波数 $f_c$，通過帯域 $2f_T$ の次式で表される理想的な通過特性を持つものとする．

$$
H(f)=\begin{cases}1&\bigl||f|-f_c\bigr|\le f_T\\0&\bigl||f|-f_c\bigr|>f_T\end{cases}
$$

なお $f_m,f_c$ および $f_T$ は $f_m<f_T\ll f_c$ の関係を満足する．このとき，以下の問に答えよ．

![Fig. 2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2016/ecei_201603_senmon_2_figure_1.png)

(3) 受信機内で用いる包絡線検波器の回路例を図示し，その動作を説明せよ．

(4) 受信機からの出力信号 $g_{out}(t)$ の信号対雑音電力比 $(S/N)_{out}$ の式を求めよ．また，$(S/N)_{out}$ の最大値を求めよ．ここで，包絡線検波器への入力信号の信号対雑音電力比を $(S/N)_{in}$ とし，搬送波振幅 $A_c$ は白色雑音振幅に比べ十分に大きいものとする．

#### 题目描述

考虑由调制信号 $s(t)=\cos(2\pi f_mt)$ 和载波 $A_c\cos(2\pi f_ct)$ 产生的调幅波

$$
g_{AM}(t)=A_c\{1+m\cdot s(t)\}\cos(2\pi f_ct)\quad(0<f_m\ll f_c).
$$

其中 $m$ 为调制度，满足 $0<m\le1$。回答下列问题。

**(1)** 画出 $g_{AM}(t)$ 的大致波形。

**(2)** 求 $g_{AM}(t)$ 的功率效率 $\eta_{AM}$ 的表达式，并求其最大功率效率。

上述调幅波 $g_{AM}(t)$ 的接收机模型如上方 Fig. 2 所示。设接收机内加入双边功率谱密度为 $N_0/2$ 的白噪声 $n(t)$。带通滤波器（BPF）的中心频率为 $f_c$，通带宽度为 $2f_T$，具有下列理想传输特性：

$$
H(f)=\begin{cases}1&\bigl||f|-f_c\bigr|\le f_T,\\0&\bigl||f|-f_c\bigr|>f_T.\end{cases}
$$

其中 $f_m,f_c,f_T$ 满足 $f_m<f_T\ll f_c$。回答下列问题。

**(3)** 画出接收机中采用的包络检波器的一种电路，并说明其工作原理。

**(4)** 求接收机输出信号 $g_{out}(t)$ 的信噪功率比 $(S/N)_{out}$ 的表达式及其最大值。设包络检波器输入信号的信噪功率比为 $(S/N)_{in}$，且载波幅度 $A_c$ 比白噪声幅度大得多。

## **Kai**

### (1)

波形围绕零快速振荡，上下包络分别为

$$
\boxed{\pm A_c[1+m\cos(2\pi f_mt)].}
$$

包络幅度的最大值、最小值分别为 $A_c(1+m),A_c(1-m)$；$m=1$ 时最小值为零。

![调幅波形（示例 m=0.7）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2016/ecei_201603_senmon_2_am.svg)

### (2)

展开为

$$
\begin{aligned}g_{AM}&=A_c\cos(2\pi f_ct)\\&\quad+\frac{mA_c}{2}\{\cos2\pi(f_c+f_m)t+\cos2\pi(f_c-f_m)t\}.\end{aligned}
$$

在单位电阻归一化下，载波功率 $P_c=A_c^2/2$，两侧带总功率 $P_{SB}=m^2A_c^2/4$，故

$$
\boxed{\eta_{AM}=\frac{m^2}{2+m^2}\le\frac13,}
$$

最大值在 $m=1$ 时取得。

### (3)

可用二极管串联输入，在输出端将电阻 $R_D$ 与电容 $C_D$ 并联到地：

```mermaid
flowchart LR
 in["AM 输入"] --> D["二极管：正向由输入指向输出"] --> out["包络输出"]
 out --- R["R_D"] --- g["地"]
 out --- C["C_D"] --- g
```

输入的正峰高于电容电压时二极管导通，电容快速充电；其余时间二极管截止，电容经电阻放电。选取 $1/f_c\ll R_DC_D\ll1/f_m$，可滤去载波起伏并跟踪缓慢变化的包络；再隔去直流得到调制信号。此条件是通常的时间尺度要求，还应避免调制度较大时的斜切失真。

### (4)

带通输出噪声功率为 $P_{n,in}=2N_0f_T$。把窄带噪声写为

$$
n_I(t)\cos(2\pi f_ct)-n_Q(t)\sin(2\pi f_ct),
$$

其同相分量功率为 $E[n_I^2]=2N_0f_T$。强载波近似下，去除直流后的包络输出为

$$
g_{out}(t)\simeq mA_c\cos(2\pi f_mt)+n_I(t).
$$

因此

$$
\left(\frac SN\right)_{out}=\frac{m^2A_c^2}{4N_0f_T},\qquad
\left(\frac SN\right)_{in}=\frac{A_c^2(2+m^2)}{8N_0f_T},
$$

即

$$
\boxed{\left(\frac SN\right)_{out}=\frac{2m^2}{2+m^2}\left(\frac SN\right)_{in}\le\frac23\left(\frac SN\right)_{in}.}
$$

上界在 $m=1$ 时取得。

## **Reference**

- [公式問題（PDF）](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201603senmon.pdf#page=3)
