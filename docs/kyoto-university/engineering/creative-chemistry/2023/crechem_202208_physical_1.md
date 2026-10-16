---
sidebar_label: "2023年度 物理化学 問題I"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
---

# 京都大学 工学研究科 創成化学専攻群 2023年度 物理化学 問題I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%89%B5%E6%88%90%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6_1.html) refined with GPT 6 Astra)

## **Description**

ファンデルワールス気体に関する問1と問2に答えよ。1モルのファンデルワールス気体の状態方程式は

$$
p=\frac{RT}{V-b}-\frac{a}{V^2}\tag{i}
$$

である。$p,T,V$ は圧力、温度、体積、$a,b$ は0以上の定数、$R$ は気体定数である。定容モル比熱 $C_V$ は温度に依存しない定数とする。

### 問1

(1) 内部エネルギー $U$ について、次式を示せ。

$$
dU=C_V\,dT+\frac{a}{V^2}\,dV.\tag{ii}
$$

必要に応じて次の関係を用いよ。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p.\tag{iii}
$$

(2) $c_1$ を定数として、$U=C_VT-a/V+c_1$ を示せ。

(3) エントロピー $S$ について、次式を示せ。

$$
dS=\frac{C_V}{T}\,dT+\frac{R}{V-b}\,dV.\tag{v}
$$

(4) $c_2$ を定数として、$S=C_V\ln T+R\ln(V-b)+c_2$ を示せ。

(5) 準静的断熱過程において $T(V-b)^{R/C_V}=\mathrm{const.}$ が成り立つことを示せ。

### 問2

式 (i) で $a=0$ の場合を考える。問1の結果を用いてもよい。この気体による準静的カルノーサイクルを考える。

- ア：温度 $T_H$ で、体積 $V_1$ から $V_2$ まで等温膨張する。
- イ：体積 $V_2$ から $V_3$ まで断熱膨張し、温度が $T_H$ から $T_L$ に低下する。
- ウ：温度 $T_L$ で、体積 $V_3$ から $V_4$ まで等温収縮する。
- エ：体積 $V_4$ から $V_1$ まで断熱収縮し、温度が $T_L$ から $T_H$ に上昇する。

(1) アで気体が外部になす仕事 $W_{12}$ を求めよ。

(2) イで気体が外部になす仕事 $W_{23}$ を求めよ。

(3) ウで気体が外部になす仕事 $W_{34}$ を求めよ。

(4) エで気体が外部になす仕事 $W_{41}$ を求めよ。

(5) 1サイクルで高温熱源から吸収する熱エネルギーを求めよ。

(6) 効率 $\varepsilon$ を導出せよ。完全気体によるカルノーサイクルの効率 $\varepsilon_0$ と比較し、大小関係を述べよ。

#### 题目描述

1 mol 范德瓦耳斯气体满足 $p=RT/(V-b)-a/V^2$，其中 $a,b\ge0$，定容摩尔热容 $C_V$ 为常数，$R$ 为气体常数。

问1：(1) 利用 $(\partial U/\partial V)_T=T(\partial p/\partial T)_V-p$，证明 $dU=C_V\,dT+(a/V^2)\,dV$；(2) 证明 $U=C_VT-a/V+c_1$；(3) 证明 $dS=(C_V/T)\,dT+[R/(V-b)]\,dV$；(4) 证明 $S=C_V\ln T+R\ln(V-b)+c_2$；(5) 证明准静态绝热过程中 $T(V-b)^{R/C_V}$ 为常数。$c_1,c_2$ 为积分常数。

问2：取 $a=0$。气体依次在 $T_H$ 下从 $V_1$ 等温膨胀至 $V_2$；绝热膨胀至 $V_3$，温度降至 $T_L$；在 $T_L$ 下等温压缩至 $V_4$；绝热压缩回 $V_1$，温度升至 $T_H$，形成准静态卡诺循环。

(1)—(4) 分别求四个过程中气体对外做的功 $W_{12},W_{23},W_{34},W_{41}$。(5) 求每循环从高温热源吸收的热量。(6) 求效率 $\varepsilon$，并与相同温度间理想气体卡诺循环的效率 $\varepsilon_0$ 比较。

## **Kai**

### 問1 (1)

状態方程式より

$$
T\left(\frac{\partial p}{\partial T}\right)_V-p
=\frac{RT}{V-b}-\left(\frac{RT}{V-b}-\frac{a}{V^2}\right)
=\frac{a}{V^2}.
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
dS=\frac{C_V}{T}\,dT+
\frac1T\left[\frac{a}{V^2}+\frac{RT}{V-b}-\frac{a}{V^2}\right]dV
=\boxed{\frac{C_V}{T}\,dT+\frac{R}{V-b}\,dV}.
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
C_V\ln T+R\ln(V-b)=\mathrm{const.},\qquad
\boxed{T(V-b)^{R/C_V}=\mathrm{const.}}.
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
T_H(V_2-b)^{R/C_V}=T_L(V_3-b)^{R/C_V},
\qquad
T_L(V_4-b)^{R/C_V}=T_H(V_1-b)^{R/C_V}.
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
