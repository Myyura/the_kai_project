---
sidebar_label: "2015年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Entropy
---

# 九州大学 工学府 機械系専攻 2015年8月実施 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

二つの圧力 $p_a,p_b$ の間で動作する $p$–$v$ 線図上に示すような蒸気サイクル（1→2→3→4→1）を考える。1→2および3→4は等エントロピー変化，2→3および4→1は等圧変化であり，2は飽和液，3は乾き飽和蒸気である。また，飽和蒸気表より以下の値が与えられている。記号は慣例に従うものとする。（40点）

| 圧力 ($\mathrm{Pa}$) | 飽和温度 ($\mathrm K$) | 飽和液の比エントロピー ($\mathrm{J/(kg\cdot K)}$) | 飽和蒸気の比エントロピー ($\mathrm{J/(kg\cdot K)}$) |
| --- | --- | --- | --- |
| $p_a$ | $T_a$ | $s_a'$ | $s_a''$ |
| $p_b$ | $T_b$ | $s_b'(=s_2)$ | $s_b''(=s_3)$ |

![原題のp–v線図とT–s線図解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_thermo-2-original.png)

この時，$T_a,T_b,s_a',s_a'',s_b',s_b''$ を使って以下の問いに答えよ。

**(1)** このサイクルを1～4の点を対応させて，$T$–$s$ 線図上に描け。

**(2)** 圧力 $p_b$ における蒸発潜熱（$\mathrm{J/kg}$）を求めよ。

**(3)** 点1および4の乾き度 $x_1$ および $x_4$ を求めよ。

**(4)** このサイクル中の排熱量 $q_C\,(\mathrm{J/kg})$ を求めよ。

**(5)** このサイクルで得られる正味の仕事 $l\,(\mathrm{J/kg})$ を求めよ。

**(6)** このサイクルの熱効率を求めよ。

#### 题目描述

考虑在压力 $p_a,p_b$ 之间工作的蒸汽循环1→2→3→4→1，其 $p$–$v$ 图如图所示。1→2及3→4为等熵变化，2→3及4→1为等压变化，状态2为饱和液体，状态3为干饱和蒸汽。饱和蒸汽表给出下列数值，符号采用惯例。（40分）

| 压力 ($\mathrm{Pa}$) | 饱和温度 ($\mathrm K$) | 饱和液体比熵 ($\mathrm{J/(kg\cdot K)}$) | 饱和蒸汽比熵 ($\mathrm{J/(kg\cdot K)}$) |
| --- | --- | --- | --- |
| $p_a$ | $T_a$ | $s_a'$ | $s_a''$ |
| $p_b$ | $T_b$ | $s_b'(=s_2)$ | $s_b''(=s_3)$ |

用 $T_a,T_b,s_a',s_a'',s_b',s_b''$ 回答下列问题。

**(1)** 在 $T$–$s$ 图上画出该循环，并对应标明状态点1～4。

**(2)** 求压力 $p_b$ 下的汽化潜热（$\mathrm{J/kg}$）。

**(3)** 求状态点1和4的干度 $x_1,x_4$。

**(4)** 求循环的排热量 $q_C\,(\mathrm{J/kg})$。

**(5)** 求循环所得的净功 $l\,(\mathrm{J/kg})$。

**(6)** 求循环热效率。

## **Kai**

### (1)

二相域の等圧過程は等温でもあるため、$T$–$s$ 線図は時計回りの長方形となる。

![蒸気 Carnot サイクル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_thermo-2-carnot.svg)

$$
\begin{gathered}
1=(s_b',T_a),\quad2=(s_b',T_b),\\
3=(s_b'',T_b),\quad4=(s_b'',T_a).
\end{gathered}
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
