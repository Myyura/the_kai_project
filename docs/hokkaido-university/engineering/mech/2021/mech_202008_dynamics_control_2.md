---
sidebar_label: "2020年8月実施 機械力学・制御工学 問2"
tags:
  - Hokkaido-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.State-Space-Representation
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 機械力学・制御工学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

(1) 制御対象 $G_p(s)=(2s+1)/(s^2-3s+1)$ をPD制御器 $C(s)$ と直列につなぎ、出力を入力の和差点へ単位負帰還する。

(1-1) $G_p$ の安定性を判定せよ。(1-2) 比例ゲイン $K_P$ と微分ゲイン $K_D$ を用いて $C(s)$ を表せ。(1-3) 目標入力 $R(s)$ から出力 $Y(s)$ の伝達関数を求めよ。(1-4) $K_D=1$ のとき、閉ループが安定となる $K_P$ の範囲を求めよ。

(2) 入力電圧 $u=v_i$ に対し、抵抗 $R_1$ とインダクタンス $L$ が直列につながり、その先の出力節点から共通接地へ抵抗 $R_2$ とコンデンサ $C$ が並列につながる回路を考える。出力は $y=v_c$。直列枝の電流を $i_1$、コンデンサ電流を $i_2$ とし、いずれも入力側から接地へ向かうループの時計回りを正とする。

(2-1) 状態変数 $x_1=i_1,x_2=v_c$ による状態・出力方程式を求めよ。(2-2) $R_1=3\,\Omega,R_2=4\,\Omega,C=0.25\,\mathrm F,L=0.5\,\mathrm H$ として、入力から出力への伝達関数を求めよ。(2-3) 安定性を判定せよ。(2-4) 状態フィードバック後の極の候補 ① $-7\pm j12$、② $7\pm j12$、③ $-0.1\pm j12$ のうち、過渡応答の改善に最も適したものを選び、理由を述べよ。(2-5) 選択した極を実現するゲインと入力 $u(t)$ を求めよ。

#### 题目描述

(1) 被控对象 $(2s+1)/(s^2-3s+1)$ 与PD控制器串联并采用单位负反馈。判断对象稳定性，写出控制器及闭环传递函数，求 $K_D=1$ 时使闭环稳定的比例增益范围。(2) 电压源依次通过串联 $R_1,L$ 接到输出节点，该节点经并联的 $R_2,C$ 接地，输出为电容电压。取状态为串联电流 $i_1$ 和电容电压 $v_c$，建立状态方程。给定 $R_1=3\,\Omega,R_2=4\,\Omega,C=0.25\,\mathrm F,L=0.5\,\mathrm H$，求传递函数与稳定性；从三组极点 $-7\pm j12,7\pm j12,-0.1\pm j12$ 中选择最合适的过渡响应极点，并求状态反馈增益及输入。

## **Kai**

### (1-1), (1-2)

$G_p$ の極は $(3\pm\sqrt5)/2$ で、いずれも右半平面にあるため不安定である。PD制御器は

$$
\boxed{C(s)=K_P+K_Ds}.
$$

### (1-3), (1-4)

$$
\boxed{G(s)=\frac{C(s)G_p(s)}{1+C(s)G_p(s)}
=\frac{(K_Ds+K_P)(2s+1)}
{(1+2K_D)s^2+(K_D+2K_P-3)s+1+K_P}}.
$$

$K_D=1$ では分母が $3s^2+(2K_P-2)s+1+K_P$。二次Hurwitz条件は $2K_P-2>0,1+K_P>0$ なので

$$
\boxed{K_P>1}.
$$

### (2-1)

KVLとKCLから $L\dot i_1=u-R_1i_1-v_c$、$C\dot v_c=i_1-v_c/R_2$。したがって

$$
\boxed{\dot{\boldsymbol x}=
\begin{pmatrix}-R_1/L&-1/L\\1/C&-1/(R_2C)\end{pmatrix}\boldsymbol x
+\begin{pmatrix}1/L\\0\end{pmatrix}u},\qquad
\boxed{y=\begin{pmatrix}0&1\end{pmatrix}\boldsymbol x}.
$$

### (2-2), (2-3)

数値を代入すると $A=\begin{pmatrix}-6&-2\\4&-1\end{pmatrix}$、$B=(2,0)^{\mathsf T}$、$C_y=(0,1)$ であり、

$$
\boxed{G(s)=C_y(sI-A)^{-1}B=\frac8{s^2+7s+14}}.
$$

極は $(-7\pm j\sqrt7)/2$ で実部が負なので安定である。

### (2-4)

① $\boxed{-7\pm j12}$ を選ぶ。②は不安定、③は減衰が極めて遅い。①では自由応答の包絡線が $e^{-7t}$ に比例して減衰し、元の $e^{-3.5t}$ より速く収束する。

### (2-5)

$u=-K\boldsymbol x$、$K=(k_1,k_2)$ とおくと

$$
\det(sI-A+BK)=s^2+(7+2k_1)s+14+2k_1+8k_2.
$$

可制御行列 $(B\ AB)$ の行列式は16であり、極配置は可能。目標多項式 $(s+7)^2+12^2=s^2+14s+193$ と係数比較すると

$$
\boxed{K=\begin{pmatrix}3.5&21.5\end{pmatrix}},\qquad
\boxed{u(t)=-3.5i_1(t)-21.5v_c(t)}.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 5–6ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
