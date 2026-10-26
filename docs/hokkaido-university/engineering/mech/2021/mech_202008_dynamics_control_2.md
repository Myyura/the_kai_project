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

以下の問いに答えなさい。

### (1)

図3に示すシステムについて，$G_p(s)$ は制御対象であり，その伝達関数が

$$
G_p(s)=\frac{2s+1}{s^2-3s+1}
$$

で表されている。このシステムを PD 制御器 $C(s)$ によって制御するものとする。このとき，以下の問いに答えなさい。

![図3 ブロック線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_dynamics_control_2_original_figure_1.png)

(1–1) 制御対象 $G_p(s)$ について，安定性を判別しなさい。

(1–2) PD 制御器の伝達関数 $C(s)$ を，比例ゲイン $K_P$ と微分ゲイン $K_D$ を用いて表しなさい。

(1–3) 図3において，入力 $R(s)$ から出力 $Y(s)$ の間の伝達関数 $G(s)$ を求めなさい。

(1–4) この制御系を安定化するためには，制御器 $C(s)$ のパラメータを適切に設定することが必要である。$K_D=1$ と設定したとき，制御系を安定にするような $K_P$ の範囲を求めなさい。

### (2)

図4は，コンデンサ $C$ とコイル $L$，そして2つの抵抗 $R_1$ および $R_2$ からなる電気回路を表している。$v_i(t)=u(t)$ および $v_c(t)=y(t)$ はそれぞれ入力電圧および出力電圧であり，$i_1(t)$ および $i_2(t)$ はそれぞれのループを流れる電流である。ここで，$t$ は時間を表す。このシステムについて，以下の問いに答えなさい。

![図4 RLC電気回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_dynamics_control_2_original_figure_2.png)

(2–1) このシステムについて，状態方程式および出力方程式を求めなさい。ただし，状態変数を $x_1(t)=i_1(t),\ x_2(t)=v_c(t)$ と定義する。

(2–2) $R_1=3\ \Omega,\ R_2=4\ \Omega,\ C=0.25\ \mathrm F,\ L=0.5\ \mathrm H$ とする。これらの値を使って，システムの入力 $u(t)$ から出力 $y(t)$ の間の伝達関数 $G(s)$ を求めなさい。

(2–3) このシステムについて安定性を判別しなさい。ただし，コンデンサ，コイル，抵抗の値として (2–2) で定義した値を使いなさい。

(2–4) このシステムの過渡応答を改善するために状態フィードバックによる制御を行う。状態フィードバックを行うことによって極の位置を自由に設定することができるため，過渡応答の改善が可能になる。ここで，極の位置として① $(-7\pm j12)$，② $(7\pm j12)$，③ $(-0.1\pm j12)$ を指定することによって，システムの過渡応答は改善される。①～③の選択肢から最も適切なものを1つ選び，さらにその理由について述べなさい。ただし，$j$ は虚数単位である。

(2–5) (2–4) で指定した極の位置を実現するような状態フィードバックゲインを求めなさい。さらに，このときの状態フィードバック入力 $u(t)$ を求めなさい。

### 题目描述

回答下列问题。

**(1)**

图3所示系统中，$G_p(s)$ 为被控对象，其传递函数为

$$
G_p(s)=\frac{2s+1}{s^2-3s+1}.
$$

采用 PD 控制器 $C(s)$ 对该系统进行控制，回答下列问题。

(1–1) 判断被控对象 $G_p(s)$ 的稳定性。

(1–2) 用比例增益 $K_P$ 和微分增益 $K_D$ 表示 PD 控制器的传递函数 $C(s)$。

(1–3) 求图3中从输入 $R(s)$ 到输出 $Y(s)$ 的传递函数 $G(s)$。

(1–4) 为使该控制系统稳定，需要适当设置控制器 $C(s)$ 的参数。设 $K_D=1$，求使控制系统稳定的 $K_P$ 取值范围。

**(2)**

图4表示由电容 $C$、线圈 $L$ 以及两个电阻 $R_1,R_2$ 构成的电路。$v_i(t)=u(t)$ 和 $v_c(t)=y(t)$ 分别为输入、输出电压，$i_1(t),i_2(t)$ 分别为流过各回路的电流，$t$ 表示时间。回答关于该系统的下列问题。

(2–1) 求系统的状态方程和输出方程，状态变量定义为 $x_1(t)=i_1(t),\ x_2(t)=v_c(t)$。

(2–2) 令 $R_1=3\ \Omega,\ R_2=4\ \Omega,\ C=0.25\ \mathrm F,\ L=0.5\ \mathrm H$。使用这些数值，求系统从输入 $u(t)$ 到输出 $y(t)$ 的传递函数 $G(s)$。

(2–3) 判断系统稳定性。电容、线圈和电阻采用 (2–2) 中给定的数值。

(2–4) 为改善系统的瞬态响应，采用状态反馈控制。状态反馈可自由设置极点位置，从而改善瞬态响应。将极点指定为① $(-7\pm j12)$、② $(7\pm j12)$、③ $(-0.1\pm j12)$，可改善系统的瞬态响应。从①～③中选择最恰当的一项，并说明理由。$j$ 为虚数单位。

(2–5) 求使极点达到 (2–4) 所指定位置的状态反馈增益，并求此时的状态反馈输入 $u(t)$。

## **Kai**

### (1-1), (1-2)

$G_p$ の極は $(3\pm\sqrt5)/2$ で、いずれも右半平面にあるため不安定である。PD制御器は

$$
\boxed{C(s)=K_P+K_Ds}.
$$

### (1-3), (1-4)

$$
\boxed{\begin{gathered}
G(s)=\frac{C(s)G_p(s)}{1+C(s)G_p(s)}\\
=\frac{(K_Ds+K_P)(2s+1)}
{(1+2K_D)s^2+(K_D+2K_P-3)s+1+K_P}
\end{gathered}}.
$$

$K_D=1$ では分母が $3s^2+(2K_P-2)s+1+K_P$。二次Hurwitz条件は $2K_P-2>0,1+K_P>0$ なので

$$
\boxed{K_P>1}.
$$

### (2-1)

KVLとKCLから $L\dot i_1=u-R_1i_1-v_c$、$C\dot v_c=i_1-v_c/R_2$。したがって

$$
\begin{gathered}
\boxed{\dot{\boldsymbol x}=
\begin{pmatrix}-R_1/L&-1/L\\1/C&-1/(R_2C)\end{pmatrix}\boldsymbol x
+\begin{pmatrix}1/L\\0\end{pmatrix}u},\\
\boxed{y=\begin{pmatrix}0&1\end{pmatrix}\boldsymbol x}.
\end{gathered}
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
