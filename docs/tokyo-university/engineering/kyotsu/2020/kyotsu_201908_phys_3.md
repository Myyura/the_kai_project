---
sidebar_label: '2019年8月実施 物理学3'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Maxwell-Relations
  - Physics.Thermodynamics.Ideal-Gas-Free-Expansion
---

# 東京大学 工学系研究科 2019年8月実施 物理学3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

理想気体と van der Waals 気体の状態方程式をそれぞれ

$$
PV=nRT,\qquad
\left(P+a\frac{n^2}{V^2}\right)(V-nb)=nRT
$$

とする。$P,V,n,R,T$ は圧力、体積、物質量、気体定数、絶対温度で、$a,b$ は定数である。準静的過程の熱力学第一法則は $dU=T\,dS-P\,dV$ と書ける。モル定積熱容量 $C_V=\frac1n(\partial U/\partial T)_V$ は一定とする。

I. 第一法則から

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial S}{\partial V}\right)_T-P
$$

が成り立つ。さらに Maxwell の関係 $(\partial S/\partial V)_T=(\partial P/\partial T)_V$ より

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P
$$

が成り立つ。両気体について $(\partial U/\partial V)_T$ を求めよ。

II. ピストン付きシリンダー内の 1 mol の気体は、初め圧力 $P_0$、体積 $V_0$、温度 $T_0$ にある。装置は外界から断熱されている。

1. ピストンを動かし、体積を $V_0$ から $2V_0$ に可逆断熱膨張させる。両気体の最終温度 $T$ とエントロピー変化 $\Delta S$ を求めよ。
2. 次に初期状態から、内部のヒーターで加熱しながら温度 $T_0$ を保ち、体積を $2V_0$ に可逆膨張させる。両気体の内部エネルギー変化 $\Delta U$ とエントロピー変化 $\Delta S$ を求め、$\Delta U$ が異なる理由を述べよ。

III. 体積がいずれも $V_0$ の容器 A、B を弁でつなぐ。初め A に圧力 $P_0$、温度 $T_0$ の理想気体 1 mol を入れ、B は真空とする。外界から断熱し、弁を開いて膨張させる。

1. この過程で一定に保たれる状態量を答えよ。
2. 最終温度 $T$ とエントロピー変化 $\Delta S$ を求めよ。
3. この過程の不可逆性を理由とともに説明せよ。
![ピストンによる膨張と真空への自由膨張](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2020/kyotsu_201908_phys_3_expansion_audited.svg)

#### 题目描述

理想气体和 van der Waals 气体分别满足 $PV=nRT$ 和 $(P+an^2/V^2)(V-nb)=nRT$。$P,V,n,R,T$ 依次为压强、体积、物质的量、气体常数和绝对温度，$a,b$ 为常数。准静态过程满足 $dU=T\,dS-P\,dV$，摩尔定容热容 $C_V=\frac1n(\partial U/\partial T)_V$ 恒定。

I. 第一定律给出

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial S}{\partial V}\right)_T-P.
$$

再利用 Maxwell 关系 $(\partial S/\partial V)_T=(\partial P/\partial T)_V$，得到 $ (\partial U/\partial V)_T=T(\partial P/\partial T)_V-P$。分别求两种气体的 $(\partial U/\partial V)_T$。

II. 与外界绝热的活塞气缸内有 1 mol 气体，初态为 $P_0,V_0,T_0$。

1. 使气体从 $V_0$ 可逆绝热膨胀至 $2V_0$，分别求两种气体的末温及熵变。
2. 另从初态出发，用内部加热器供热，使气体在 $T_0$ 下可逆等温膨胀至 $2V_0$。分别求两种气体的内能变化、熵变，并解释内能变化不同的原因。

III. 两个容积均为 $V_0$ 的容器 A、B 由阀门连接。A 中最初有压强 $P_0$、温度 $T_0$ 的理想气体 1 mol，B 为真空。装置绝热，打开阀门让气体膨胀。

1. 哪个状态量保持不变？
2. 求末温和熵变。
3. 说明该过程为何不可逆。

## **Kai**

### I.

状態方程式を代入すると

$$
\boxed{\left(\frac{\partial U}{\partial V}\right)_T
=\begin{cases}
0&\text{理想気体},\\
\dfrac{an^2}{V^2}&\text{van der Waals 気体}.
\end{cases}}
$$

よって任意の加法定数を除き、後者は $U=nC_VT-an^2/V$ であり、前者は $a=b=0$ とした場合に対応する。

### II.1

1 mol の van der Waals 気体について

$$
T\,dS=dU+P\,dV
=C_V\,dT+\frac{RT}{V-b}\,dV,
\qquad
dS=C_V\frac{dT}{T}+R\frac{dV}{V-b}.
$$

可逆断熱過程では $dS=0$ なので

$$
\boxed{T=T_0\left(\frac{V_0-b}{2V_0-b}\right)^{R/C_V},\qquad\Delta S=0}.
$$

理想気体では $b=0$ より

$$
\boxed{T=T_0\,2^{-R/C_V},\qquad\Delta S=0}.
$$

### II.2

等温過程では $dT=0$ だから

$$
\boxed{\begin{array}{c|cc}
&\Delta U&\Delta S\\ \hline
\text{理想気体}&0&R\log2\\[2pt]
\text{van der Waals 気体}&\dfrac{a}{2V_0}&
R\log\dfrac{2V_0-b}{V_0-b}
\end{array}}
$$

理想気体の内部エネルギーは温度だけで決まる。一方、van der Waals 気体では分子間引力の位置エネルギー $-a/V$ があり、膨張により増加する。

### III.

1. 断熱かつ容器全体の体積が一定で外部への仕事も零なので、第一法則より $\boxed{U=\text{一定}}$。
2. 理想気体では $U=C_VT+\text{定数}$ だから

$$
\boxed{T=T_0,\qquad\Delta S=R\log\frac{2V_0}{V_0}=R\log2}.
$$

3. 孤立系のエントロピーが $R\log2>0$ だけ増加するため不可逆である。逆に気体を A のみに戻すには外部からの仕事などが必要となる。
