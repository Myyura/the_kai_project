---
sidebar_label: "2022年8月実施 物理化学 問題I"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
---

# 京都大学 工学研究科 創成化学専攻群 2022年8月実施 物理化学 問題I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%89%B5%E6%88%90%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6_1.html) refined with GPT 6 Astra)

## **Description**

ファンデルワールス気体に関する問1と問2に答えよ。$1$ モルのファンデルワールス気体の状態方程式は次式で与えられる。

$$
p=\frac{RT}{V-b}-\frac a{V^2}\tag{i}
$$

ここで $p$ は圧力、$T$ は温度、$V$ は体積、$a,b$ は $0$ 以上の定数、$R$ は気体定数である。なお、定容モル比熱 $C_V$ は温度に依存しない定数とする。

### 問1

(1) 内部エネルギー $U$ について、$dU$ が次式で与えられることを示せ。

$$
dU=C_V\,dT+\frac a{V^2}\,dV\tag{ii}
$$

必要に応じて次の熱力学的状態方程式を用いよ。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p\tag{iii}
$$

(2) $U$ が次式で与えられることを示せ。

$$
U=C_VT-\frac aV+c_1\tag{iv}
$$

ここで $c_1$ は定数である。

(3) エントロピー $S$ について、$dS$ が次式で与えられることを示せ。

$$
dS=\frac{C_V}{T}\,dT+\frac R{V-b}\,dV\tag{v}
$$

(4) $S$ が次式で与えられることを示せ。

$$
S=C_V\ln T+R\ln(V-b)+c_2\tag{vi}
$$

ここで $c_2$ は定数である。

(5) 準静的断熱過程において次式が成り立つことを示せ。

$$
T(V-b)^{R/C_V}=\mathrm{const}.\tag{vii}
$$

ここで $\mathrm{const}.$ は一定であることを表す。

### 問2

式 (i) において、$a=0$ の場合を考える。問1の結果を用いてもよい。

この気体を用いた以下の過程からなる準静的カルノーサイクルを考える。

ア．体積 $V_1$ から $V_2$ まで、温度 $T_H$ で準静的に等温膨張する。

イ．体積 $V_2$ から $V_3$ まで準静的に断熱膨張する。このとき温度は $T_H$ から $T_L$ に低下する。

ウ．体積 $V_3$ から $V_4$ まで、温度 $T_L$ で準静的に等温収縮する。

エ．体積 $V_4$ から $V_1$ まで準静的に断熱収縮する。このとき温度は $T_L$ から $T_H$ に上昇する。

(1) アにおいて気体が外部になす仕事 $W_{12}$ を求めよ。

(2) イにおいて気体が外部になす仕事 $W_{23}$ を求めよ。

(3) ウにおいて気体が外部になす仕事 $W_{34}$ を求めよ。

(4) エにおいて気体が外部になす仕事 $W_{41}$ を求めよ。

(5) $1$ サイクルにおいて気体が高温熱源から吸収する熱エネルギーを求めよ。

(6) このサイクルの効率 $\varepsilon$ を導出せよ。得た $\varepsilon$ を完全気体を用いたカルノーサイクルの効率 $\varepsilon_0$ と比べ、その大小関係を述べよ。

#### 题目描述

回答关于范德瓦耳斯气体的问1和问2。$1$ 摩尔范德瓦耳斯气体的状态方程为

$$
p=\frac{RT}{V-b}-\frac a{V^2}.\tag{i}
$$

其中 $p$ 为压强，$T$ 为温度，$V$ 为体积，$a,b$ 为非负常数，$R$ 为气体常数。定容摩尔热容 $C_V$ 为不随温度变化的常数。

**问1**

(1) 对于内能 $U$，证明 $dU$ 可表示为

$$
dU=C_V\,dT+\frac a{V^2}\,dV.\tag{ii}
$$

必要时可使用下列热力学状态方程。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p.\tag{iii}
$$

(2) 证明 $U$ 可表示为

$$
U=C_VT-\frac aV+c_1,\tag{iv}
$$

其中 $c_1$ 为常数。

(3) 对于熵 $S$，证明 $dS$ 可表示为

$$
dS=\frac{C_V}{T}\,dT+\frac R{V-b}\,dV.\tag{v}
$$

(4) 证明 $S$ 可表示为

$$
S=C_V\ln T+R\ln(V-b)+c_2,\tag{vi}
$$

其中 $c_2$ 为常数。

(5) 证明准静态绝热过程中成立

$$
T(V-b)^{R/C_V}=\mathrm{const},\tag{vii}
$$

其中 $\mathrm{const}$ 表示常数。

**问2** 考虑式 (i) 中 $a=0$ 的情形，可以使用问1的结果。

考虑以此气体为工质，由下列过程构成的准静态卡诺循环。

ア．温度为 $T_H$，从体积 $V_1$ 准静态等温膨胀到 $V_2$。

イ．从体积 $V_2$ 准静态绝热膨胀到 $V_3$，温度从 $T_H$ 降至 $T_L$。

ウ．温度为 $T_L$，从体积 $V_3$ 准静态等温压缩到 $V_4$。

エ．从体积 $V_4$ 准静态绝热压缩到 $V_1$，温度从 $T_L$ 升至 $T_H$。

(1) 求过程ア中气体对外做的功 $W_{12}$。

(2) 求过程イ中气体对外做的功 $W_{23}$。

(3) 求过程ウ中气体对外做的功 $W_{34}$。

(4) 求过程エ中气体对外做的功 $W_{41}$。

(5) 求气体在一个循环中从高温热源吸收的热能。

(6) 推导此循环的效率 $\varepsilon$，将其与以理想气体为工质的卡诺循环效率 $\varepsilon_0$ 比较，并说明大小关系。

## **Kai**

### 問1 (1)

状態方程式より

$$
\begin{gathered}
T\left(\frac{\partial p}{\partial T}\right)_V-p
=\frac{RT}{V-b}-\left(\frac{RT}{V-b}-\frac{a}{V^2}\right)\\
=\frac{a}{V^2}.
\end{gathered}
$$

$(\partial U/\partial T)_V=C_V$ と合わせると

$$
\boxed{dU=C_V\,dT+\frac{a}{V^2}\,dV}.
$$

### 問1 (2)

$T,V$ について積分して

$$
\boxed{U=C_VT-\frac{a}{V}+c_1}.
$$

### 問1 (3)

熱力学の基本関係 $T\,dS=dU+p\,dV$ から

$$
\begin{gathered}
dS=\frac{C_V}{T}\,dT+
\frac1T\left[\frac{a}{V^2}+\frac{RT}{V-b}-\frac{a}{V^2}\right]dV\\
=\boxed{\frac{C_V}{T}\,dT+\frac{R}{V-b}\,dV}.
\end{gathered}
$$

### 問1 (4)

$T>0,V>b$ で積分すると

$$
\boxed{S=C_V\ln T+R\ln(V-b)+c_2}.
$$

対数の引数の基準単位による定数は $c_2$ に含める。

### 問1 (5)

準静的断熱過程では $dS=0$ なので

$$
\begin{gathered}
C_V\ln T+R\ln(V-b)=\mathrm{const.},\\
\boxed{T(V-b)^{R/C_V}=\mathrm{const.}}.
\end{gathered}
$$

### 問2 (1)

$a=0$ より $p=RT/(V-b)$ である。したがって

$$
\boxed{W_{12}=\int_{V_1}^{V_2}\frac{RT_H}{V-b}\,dV
=RT_H\ln\frac{V_2-b}{V_1-b}}.
$$

### 問2 (2)

断熱過程では $W=-\Delta U$。$U=C_VT+c_1$ より

$$
\boxed{W_{23}=C_V(T_H-T_L)}.
$$

### 問2 (3)

等温収縮の仕事は

$$
\boxed{W_{34}=RT_L\ln\frac{V_4-b}{V_3-b}}.
$$

### 問2 (4)

断熱収縮の仕事は

$$
\boxed{W_{41}=C_V(T_L-T_H)}.
$$

### 問2 (5)

高温熱源からの吸熱はアで生じる。等温過程では $\Delta U=0$ なので

$$
\boxed{Q_H=W_{12}=RT_H\ln\frac{V_2-b}{V_1-b}}.
$$

### 問2 (6)

二つの断熱過程で

$$
\begin{gathered}
T_H(V_2-b)^{R/C_V}=T_L(V_3-b)^{R/C_V},\\
T_L(V_4-b)^{R/C_V}=T_H(V_1-b)^{R/C_V}.
\end{gathered}
$$

両式を掛けて整理すると

$$
\frac{V_2-b}{V_1-b}=\frac{V_3-b}{V_4-b}.
$$

$W_{23}+W_{41}=0$ なので、$L=\ln[(V_2-b)/(V_1-b)]$ とおけば

$$
\varepsilon=\frac{RT_HL-RT_LL}{RT_HL}
=\boxed{1-\frac{T_L}{T_H}}.
$$

この結果は $b$ に依存せず、$b=0$ の完全気体でも同じである。したがって $\boxed{\varepsilon=\varepsilon_0}$。

## **Reference**

- [京都大学公式問題：2023年度物理化学、問題I（PDF 2–3ページ、2022年8月22日実施）](https://www.cse.t.kyoto-u.ac.jp/ja/admission/exam/orei76.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%89%B5%E6%88%90%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6_1.html)
