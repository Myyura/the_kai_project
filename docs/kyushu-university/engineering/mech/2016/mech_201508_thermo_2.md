---
sidebar_label: "2016年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Entropy
---

# 九州大学 工学府 機械系専攻 2016年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の蒸気サイクル $1\to2\to3\to4\to1$ は、$1\to2,3\to4$ が等エントロピー、$2\to3,4\to1$ が等圧である。状態 2 は飽和液、3 は乾き飽和蒸気。低圧 $p_a$ と高圧 $p_b$ に対する飽和温度・比エントロピーは次のとおりである。（40 点）

| 圧力 | 飽和温度 | 飽和液の比エントロピー | 飽和蒸気の比エントロピー |
|---|---|---|---|
| $p_a$ | $T_a$ | $s_a'$ | $s_a''$ |
| $p_b$ | $T_b$ | $s_b'=s_2$ | $s_b''=s_3$ |

![蒸気サイクルの p–v 図と T–s 解答図（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/thermo-2-original.png)

$T_a,T_b,s_a',s_a'',s_b',s_b''$ を用いて答えよ。

1. 状態 1–4 を対応させて $T$–$s$ 線図を描け。
2. 圧力 $p_b$ の蒸発潜熱を求めよ。
3. 状態 1,4 の乾き度 $x_1,x_4$ を求めよ。
4. 排熱量 $q_C$ を求めよ。
5. 正味比仕事 $l$ を求めよ。
6. 熱効率を求めよ。

#### 题目描述

湿蒸汽循环的压缩、膨胀等熵，高压加热从饱和液至干饱和蒸汽，低压放热仍在两相区。利用两压力对应的饱和温度、液汽熵，画 $T$–$s$ 图并求高压潜热、两低压端点的干度、排热、净功及效率。

## **Kai**

### (1)

二相域の等圧過程は等温でもあるため、$T$–$s$ 線図は時計回りの長方形となる。

![蒸気 Carnot サイクル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/thermo-2-carnot.svg)

$$
1=(s_b',T_a),\quad2=(s_b',T_b),\quad
3=(s_b'',T_b),\quad4=(s_b'',T_a).
$$

### (2)

可逆蒸発では $dq=T_bds$ なので

$$
\boxed{r_b=T_b(s_b''-s_b').}
$$

### (3)

湿り蒸気のエントロピーは $s=s_a'+x(s_a''-s_a')$。等エントロピー条件から

$$
\boxed{x_1=\frac{s_b'-s_a'}{s_a''-s_a'},\qquad
x_4=\frac{s_b''-s_a'}{s_a''-s_a'}.}
$$

### (4)

低圧側での実際のエントロピー変化は $s_4-s_1=s_b''-s_b'$ であるため

$$
\boxed{q_C=T_a(s_b''-s_b').}
$$

### (5)

$$
\boxed{l=r_b-q_C=(T_b-T_a)(s_b''-s_b').}
$$

### (6)

$$
\boxed{\eta=\frac l{r_b}=1-\frac{T_a}{T_b}.}
$$
