---
sidebar_label: '2017年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Photon-Gas-and-Stefan-Boltzmann-Law
---

# 東京大学 工学系研究科 2017年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

外界から孤立した、熱容量がともに $C$ の二つの固体 a、b を接触させる。初期温度はそれぞれ $T_1,T_2$ である。体積変化はないものとして、熱平衡温度 $T_f$ と全系のエントロピー変化 $\Delta S$ を求め、$\Delta S>0$ を示せ。

### II

高温熱源 $R_2$ と低温熱源 $R_1$ の間で、不可逆熱機関 A と可逆ヒートポンプ B が動作する。A は一周期に $R_2$ から $Q_2^A$ を吸収し、仕事 $W$ を行い、$R_1$ に $Q_1^A$ を放出する。B はこの仕事 $W$ を使い、$R_1$ から $Q_1^B$ を取り入れ、$R_2$ に $Q_2^B$ を供給する。次を定義する。

$$
\eta_A=\frac{W}{Q_2^A},\qquad \eta_B=\frac{W}{Q_2^B}.
$$

次のうち熱力学第二法則に反するものをすべて選び、理由を述べよ。

$$
\text{(a) }\eta_A<\eta_B,\qquad
\text{(b) }\eta_A=\eta_B,\qquad
\text{(c) }\eta_A>\eta_B.
$$

### III

温度 $T$、容積 $V$ の密閉容器に光子気体が満たされている。熱平衡での圧力は、正の定数 $a$ に対して $p=aT^4/3$ であり、$V$ に依存しない。

1. 光子気体に定圧熱容量が存在しない理由を述べよ。
2. 温度一定で容積 $V$ を準静的に変える。第一法則とマクスウェルの関係式を使って、次を示せ。

$$
dU=T\,dS-p\,dV,\qquad
\left(\frac{\partial S}{\partial V}\right)_T=\left(\frac{\partial p}{\partial T}\right)_V
\quad\Longrightarrow\quad
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p.
$$

3. $U(T,V)$ と $S(T,V)$ を求めよ。$T=0$ ではともにゼロとする。
4. 光子気体の準静的なカルノーサイクルを考える。A→B は温度 $T_2$ の等温膨張、B→C は断熱膨張、C→D は温度 $T_1<T_2$ の等温圧縮、D→A は断熱圧縮である。各状態の容積を $V_A,V_B,V_C,V_D$ とする。A→B と C→D で系に入る熱量 $Q_2,Q_1$ を求めよ。吸熱を正とする。
5. クラウジウスの等式 $Q_2/T_2+Q_1/T_1=0$ を示せ。

![不可逆熱機関と可逆ヒートポンプ、光子気体のサイクル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/kyotsu_201708_phys_3_diagram_audited.svg)

#### 题目描述

I. 两固体 a、b 的热容均为常数 $C$，初温分别为 $T_1,T_2$，在与外界隔绝的条件下接触。忽略体积变化，求最终平衡温度 $T_f$ 和全系统熵变 $\Delta S$，证明熵增加。

II. 不可逆热机 A 和可逆热泵 B 在高温热源 $R_2$ 与低温热源 $R_1$ 间工作。A 每循环从 $R_2$ 吸热 $Q_2^A$、输出功 $W$、向 $R_1$ 放热 $Q_1^A$。B 使用这份功，从 $R_1$ 吸热 $Q_1^B$，向 $R_2$ 供热 $Q_2^B$。定义 $\eta_A=W/Q_2^A$、$\eta_B=W/Q_2^B$。在 (a) $\eta_A<\eta_B$、(b) $\eta_A=\eta_B$、(c) $\eta_A>\eta_B$ 中，选出全部违反第二定律的情形并说明理由。

III. 温度 $T$、体积 $V$ 的密闭容器内充满光子气体。平衡压强为 $p=aT^4/3$，$a>0$，且与 $V$ 无关。

1. 解释为什么不存在定压热容。
2. 在恒温下准静态改变体积 $V$，用 $dU=T\,dS-p\,dV$ 以及 $(\partial S/\partial V)_T=(\partial p/\partial T)_V$ 证明 $(\partial U/\partial V)_T=T(\partial p/\partial T)_V-p$。
3. 求 $U(T,V)$、$S(T,V)$，已知绝对零度时二者均为零。
4. 考虑光子气体的准静态卡诺循环 A→B（$T_2$ 等温膨胀）、B→C（绝热膨胀）、C→D（$T_1<T_2$ 等温压缩）、D→A（绝热压缩）。各状态体积为 $V_A,V_B,V_C,V_D$，求两等温过程的热量 $Q_2,Q_1$，以吸热为正。
5. 证明 $Q_2/T_2+Q_1/T_1=0$。

## **Kai**

### I

エネルギー保存より $C(T_f-T_1)+C(T_f-T_2)=0$ だから

$$
\boxed{T_f=\frac{T_1+T_2}{2}},\qquad
\boxed{\Delta S=C\log\frac{T_f}{T_1}+C\log\frac{T_f}{T_2}
=C\log\frac{(T_1+T_2)^2}{4T_1T_2}}.
$$

$(T_1+T_2)^2-4T_1T_2=(T_1-T_2)^2$ より、$T_1\ne T_2$ なら $\Delta S>0$。初めから同温なら $\Delta S=0$ である。

### II

高温・低温熱源の温度を $T_H,T_L$ とする。B の可逆性から

$$
\frac{Q_1^B}{T_L}=\frac{Q_2^B}{T_H},\qquad
\eta_B=1-\frac{T_L}{T_H}.
$$

A は不可逆なので、全エントロピー生成は正であり

$$
\frac{Q_1^A}{T_L}-\frac{Q_2^A}{T_H}>0
\quad\Longrightarrow\quad
\eta_A=1-\frac{Q_1^A}{Q_2^A}<1-\frac{T_L}{T_H}=\eta_B.
$$

したがって選ぶのは **(b)、(c)**。(b) は A の不可逆性に反し、(c) では A と B を合わせると、外部仕事なしで低温熱源から高温熱源に熱が移ることになる。

### III

#### III.1

$p=aT^4/3$ より、定圧条件は温度を一定に固定する。定圧のまま熱を加えても体積が変わるだけであり、温度を独立に変化させた熱量の微分係数として $C_p$ を定義できない。

#### III.2

$dT=0$ として第一法則を評価し、マクスウェルの関係を使うと

$$
\boxed{\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial S}{\partial V}\right)_T-p
=T\left(\frac{\partial p}{\partial T}\right)_V-p}.
$$

#### III.3

上式は $(\partial U/\partial V)_T=aT^4$ となる。光子気体の内部エネルギーの示量性から

$$
\boxed{U=aVT^4}.
$$

これを第一法則に代入すると

$$
dS=\frac{dU+p\,dV}{T}
=4aVT^2dT+\frac43aT^3dV
=d\left(\frac43aVT^3\right).
$$

$S(0,V)=0$ より

$$
\boxed{S=\frac43aVT^3}.
$$

#### III.4–III.5

等温過程では $Q=T\Delta S$ なので

$$
\boxed{Q_2=\frac43aT_2^4(V_B-V_A)},\qquad
\boxed{Q_1=\frac43aT_1^4(V_D-V_C)<0}.
$$

可逆断熱では $VT^3$ が一定だから、$V_BT_2^3=V_CT_1^3$、$V_AT_2^3=V_DT_1^3$。差を取れば

$$
\boxed{\frac{Q_2}{T_2}+\frac{Q_1}{T_1}
=\frac43a\{T_2^3(V_B-V_A)+T_1^3(V_D-V_C)\}=0}.
$$

