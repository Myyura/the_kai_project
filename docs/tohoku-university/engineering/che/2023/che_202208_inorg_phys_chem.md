---
sidebar_label: "2022年8月実施 基礎科目 無機・物理化学"
tags:
  - Tohoku-University
  - Chemistry.Physical-Chemistry.Ideal-Gas-Thermodynamics
  - Chemistry.Physical-Chemistry.Entropy-Change
  - Chemistry.Inorganic-Chemistry
---
# 東北大学 工学研究科 化学・バイオ系 2022年8月実施 基礎科目 無機・物理化学 

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失。第 1 题的题干与解答均未保留；第 2 题可依据现有解答整理如下。

1. 【问题 1】现有资料不足以还原。
2. 【问题 2】考虑物质的量为 $n$ 的单原子理想气体，其摩尔内能为
   $$U_{\mathrm m}(T)=\frac32RT.$$
   1. 求定容摩尔热容 $C_{V,\mathrm m}$；
   2. 求气体从温度 $T_{\mathrm i}$ 变到 $T_{\mathrm f}$ 的定容可逆过程熵变；
   3. 求气体在温度不变时从体积 $V_{\mathrm i}$ 变到 $V_{\mathrm f}$ 的可逆过程熵变；
   4. 某气体 A 初态为 $300\,\mathrm K$、$1.00\,\mathrm{bar}$、$1.00\,\mathrm{dm^3}$，终态为 $600\,\mathrm K$、$2.00\,\mathrm{dm^3}$。假设为单原子理想气体，利用熵为状态函数求总熵变。

#### 考点

- **理想气体内能与热容**：由 $C_V=(\partial U/\partial T)_V$ 求单原子气体热容。
- **熵变积分**：分别计算可逆定容升温与可逆等温膨胀的熵变。
- **理想气体状态方程**：由初态的 $pV=nRT$ 确定 $nR$。
- **状态函数与路径设计**：选择便于计算的可逆路径连接给定初、终态。

## **Kai**
### 【問 1】

### 【問 2】
#### (1)

$$
\begin{aligned}
C_{V, \mathrm{m}}
&= \frac{d}{dT} U_\mathrm{m} (T)
\\
&= \frac{3}{2} R
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\Delta S
&= \int_{T_\mathrm{i}}^{T_\mathrm{f}} \frac{n C_{V, \mathrm{m}}}{T} dT
\\
&= \frac{3}{2} nR \ln \frac{T_\mathrm{f}}{T_\mathrm{i}}
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
\Delta S
&= \int_{V_\mathrm{i}}^{V_\mathrm{f}} \frac{p}{T} dV
\\
&= nR \int_{V_\mathrm{i}}^{V_\mathrm{f}} \frac{dV}{V}
\\
&= nR \ln \frac{V_\mathrm{i}}{V_\mathrm{f}}
\end{aligned}
$$

#### (4)
気体 A の物質量を $n$ モルとすると、

$$
\begin{aligned}
nR
&= \frac{1.00 \cdot 10^5 \cdot 1.00 \cdot 10^{-3}}{300}
\\
&= \frac{1}{3} \ \mathrm{( J \cdot K^{-1} )}
\end{aligned}
$$

である。

エントロピーは状態量であるから、次のように考えることができる。
$300 \ \mathrm{K}, 1.00 \ \mathrm{bar}, 1.00 \ \mathrm{dm^3}$
から定容で準静的に $600 \ \mathrm{K}$ に加熱したときのエントロピー変化は、
1) より

$$
\begin{aligned}
\Delta S_1 &= \frac{1}{2} \ln 2
\end{aligned}
$$

であり、 $600 \ \mathrm{K}, 1.00 \ \mathrm{dm^3}$ から
等温で準静的に $2.00 \ \mathrm{dm^3}$ に膨張したときのエントロピー変化は、
1) より

$$
\begin{aligned}
\Delta S_2 &= \frac{1}{3} \ln 2
\end{aligned}
$$

であるから、求めるエントロピー変化は

$$
\begin{aligned}
\Delta S_1 + \Delta S_2 &= \frac{5}{6} \ln 2
\end{aligned}
$$

である。
